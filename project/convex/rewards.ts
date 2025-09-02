import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const recordVisit = mutation({
  args: {
    userId: v.id("users"),
  },
  handler: async (ctx, { userId }) => {
    const user = await ctx.db.get(userId);
    if (!user) {
      throw new Error("User not found");
    }

    const newVisitCount = user.visits + 1;
    const earnedFreeCrepe = newVisitCount % 5 === 0;

    // Update user's visit count and free crepes
    await ctx.db.patch(userId, {
      visits: newVisitCount,
      freeCrepesPending: earnedFreeCrepe 
        ? user.freeCrepesPending + 1 
        : user.freeCrepesPending,
    });

    // Record the visit
    await ctx.db.insert("visits", {
      userId,
      visitDate: Date.now(),
      earnedFreeCrepe,
    });

    return {
      visitCount: newVisitCount,
      earnedFreeCrepe,
      freeCrepesPending: earnedFreeCrepe ? user.freeCrepesPending + 1 : user.freeCrepesPending,
    };
  },
});

export const redeemFreeCrepe = mutation({
  args: {
    userId: v.id("users"),
  },
  handler: async (ctx, { userId }) => {
    const user = await ctx.db.get(userId);
    if (!user) {
      throw new Error("User not found");
    }

    if (user.freeCrepesPending <= 0) {
      throw new Error("No free crepes available to redeem");
    }

    await ctx.db.patch(userId, {
      freeCrepesPending: user.freeCrepesPending - 1,
      freeCrepes: user.freeCrepes + 1,
    });

    return {
      freeCrepesPending: user.freeCrepesPending - 1,
      freeCrepes: user.freeCrepes + 1,
    };
  },
});

export const getUserStats = query({
  args: {
    userId: v.id("users"),
  },
  handler: async (ctx, { userId }) => {
    const user = await ctx.db.get(userId);
    if (!user) {
      return null;
    }

    const visits = await ctx.db
      .query("visits")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .order("desc")
      .take(10);

    return {
      user,
      recentVisits: visits,
      nextFreeCrepeVisits: 5 - (user.visits % 5),
      progressToNextFree: user.visits % 5,
    };
  },
});

export const getAllVisits = query({
  args: {
    userId: v.id("users"),
  },
  handler: async (ctx, { userId }) => {
    return await ctx.db
      .query("visits")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .order("desc")
      .collect();
  },
});