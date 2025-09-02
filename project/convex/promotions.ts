import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const createPromotion = mutation({
  args: {
    title: v.string(),
    description: v.string(),
    discount: v.optional(v.string()),
    validFrom: v.number(),
    validUntil: v.number(),
  },
  handler: async (ctx, { title, description, discount, validFrom, validUntil }) => {
    const promotionId = await ctx.db.insert("promotions", {
      title,
      description,
      discount,
      validFrom,
      validUntil,
      isActive: true,
    });

    return promotionId;
  },
});

export const getActivePromotions = query({
  handler: async (ctx) => {
    const now = Date.now();
    return await ctx.db
      .query("promotions")
      .filter((q) => 
        q.and(
          q.eq(q.field("isActive"), true),
          q.lte(q.field("validFrom"), now),
          q.gte(q.field("validUntil"), now)
        )
      )
      .collect();
  },
});

export const getAllPromotions = query({
  handler: async (ctx) => {
    return await ctx.db
      .query("promotions")
      .order("desc")
      .collect();
  },
});

export const togglePromotion = mutation({
  args: {
    promotionId: v.id("promotions"),
    isActive: v.boolean(),
  },
  handler: async (ctx, { promotionId, isActive }) => {
    await ctx.db.patch(promotionId, { isActive });
    return { success: true };
  },
});