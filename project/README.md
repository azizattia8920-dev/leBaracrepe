# Le Baracrêpe - Newsletter System

A simple newsletter signup system for Le Baracrêpe crêperie.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up Convex:
   ```bash
   npx convex dev
   ```
   This will create your Convex project and give you a URL.

3. Create `.env` file:
   ```
   VITE_CONVEX_URL=https://your-convex-deployment.convex.cloud
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## Features

- **Simple Newsletter Signup**: Customers enter email and optional name
- **Newsletter Modal**: Clean, branded signup experience
- **Convex Backend**: Stores subscriber data securely

## Managing Subscribers

1. Go to [convex.dev](https://convex.dev) and open your project dashboard
2. Navigate to the "Data" tab
3. View the `subscribers` table to see all signups:
   - `email`: Subscriber's email address
   - `fullName`: Optional full name
   - `subscribedAt`: Timestamp of signup
   - `isActive`: Whether subscription is active

## Sending Promotions

1. Check the subscriber list in Convex dashboard
2. Export the email addresses
3. Manually send your promotional emails using your preferred email service
4. Create time-limited offers for special events

## Newsletter Benefits Shown to Customers

- Promotions limitées dans le temps
- Offres spéciales pour abonnés seulement  
- Nouveautés et événements spéciaux

The system is designed to be simple and focused on collecting subscriber information for your manual email campaigns.