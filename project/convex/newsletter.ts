import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const subscribe = mutation({
  args: {
    email: v.string(),
    fullName: v.optional(v.string()),
  },
  handler: async (ctx, { email, fullName }) => {
    // Check if already subscribed
    const existingSubscriber = await ctx.db
      .query("subscribers")
      .withIndex("by_email", (q) => q.eq("email", email))
      .first();

    if (existingSubscriber) {
      if (existingSubscriber.isActive) {
        throw new Error("Cette adresse courriel est déjà inscrite à notre infolettre!");
      } else {
        // Reactivate subscription
        await ctx.db.patch(existingSubscriber._id, {
          isActive: true,
          fullName: fullName || existingSubscriber.fullName,
          subscribedAt: Date.now(),
        });
        return existingSubscriber._id;
      }
    }

    // Create new subscription
    const subscriberId = await ctx.db.insert("subscribers", {
      email,
      fullName,
      subscribedAt: Date.now(),
      isActive: true,
    });

    return subscriberId;
  },
});

export const unsubscribe = mutation({
  args: {
    email: v.string(),
  },
  handler: async (ctx, { email }) => {
    const subscriber = await ctx.db
      .query("subscribers")
      .withIndex("by_email", (q) => q.eq("email", email))
      .first();

    if (!subscriber) {
      throw new Error("Aucun abonnement trouvé pour cette adresse courriel");
    }

    await ctx.db.patch(subscriber._id, {
      isActive: false,
    });

    return { success: true };
  },
});

export const getActiveSubscribers = query({
  handler: async (ctx) => {
    return await ctx.db
      .query("subscribers")
      .filter((q) => q.eq(q.field("isActive"), true))
      .collect();
  },
});

export const getSubscriberCount = query({
  handler: async (ctx) => {
    const subscribers = await ctx.db
      .query("subscribers")
      .filter((q) => q.eq(q.field("isActive"), true))
      .collect();
    
    return subscribers.length;
  },
});

export const isSubscribed = query({
  args: {
    email: v.string(),
  },
  handler: async (ctx, { email }) => {
    const subscriber = await ctx.db
      .query("subscribers")
      .withIndex("by_email", (q) => q.eq("email", email))
      .first();

    return subscriber?.isActive || false;
  },
});