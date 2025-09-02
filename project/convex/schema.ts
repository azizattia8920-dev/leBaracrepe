import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  subscribers: defineTable({
    email: v.string(),
    fullName: v.optional(v.string()),
    subscribedAt: v.number(),
    isActive: v.boolean(), // For unsubscribe functionality
  }).index("by_email", ["email"]),

  menuItems: defineTable({
    name: v.string(),
    description: v.string(),
    price: v.number(),
    category: v.union(v.literal("sweet"), v.literal("savory")),
    imageUrl: v.optional(v.string()),
  }),

  promotions: defineTable({
    title: v.string(),
    description: v.string(),
    discount: v.optional(v.string()), // e.g., "20% off", "Buy 1 Get 1", etc.
    validFrom: v.number(),
    validUntil: v.number(),
    isActive: v.boolean(),
  }),
});