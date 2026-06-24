# Anasoya Graphics & Web Development Platform

A comprehensive full-stack web application for **Anasoya Graphics & Web Development** featuring a public-facing website, dynamic admin panel, and complete ERP system built with Next.js 16, Supabase, and TypeScript.

## Overview

This platform consists of two main sections:

### 1. Public Website
- **Landing Page**: Hero section with services overview and call-to-action
- **Portfolio**: Showcase of graphics and web development projects
- **About Us**: Company information and team
- **Blog**: Articles and updates with featured posts
- **Contact Form**: Client inquiry form with email validation
- **Responsive Design**: Mobile-first design with professional blue/gray theme

### 2. Admin Panel & ERP System
- **Authentication**: Secure email/password login with Supabase Auth
- **Dashboard**: Real-time KPIs and business metrics
- **Complete ERP Modules**:
  - **Inventory Management**: Product catalog with stock tracking
  - **Client Management**: Comprehensive CRM for managing client relationships
  - **Project Management**: Track projects from planning to completion
  - **Order Management**: Create and track customer orders
  - **Invoice & Billing**: Generate and manage invoices with status tracking
  - **Employee Management**: Staff records and role management

## Tech Stack

- **Frontend**: Next.js 16 (App Router)
- **Database**: Supabase PostgreSQL with Row Level Security (RLS)
- **Authentication**: Supabase Auth (Email/Password)
- **Styling**: Tailwind CSS v4 with modern blue/gray color scheme
- **UI Components**: shadcn/ui components
- **Type Safety**: TypeScript
- **Icons**: Lucide React
- **State Management**: React hooks with Supabase real-time
- **Deployment**: Optimized for Vercel

## Architecture

### Database Schema

The platform includes 11 tables designed for comprehensive business management:

1. **profiles** - Extended user information (admin, manager, staff roles)
2. **employees** - Employee records and management
3. **clients** - Client/company information
4. **products** - Inventory items and services
5. **projects** - Client projects and scope
6. **project_tasks** - Individual project tasks with assignments
7. **orders** - Customer orders and fulfillment
8. **order_items** - Line items for orders
9. **invoices** - Billing and invoice management
10. **blog_posts** - CMS for blog articles
11. **portfolio_items** - Showcase of portfolio work

All tables include Row Level Security (RLS) policies ensuring:
- Admin-only data access for sensitive operations
- Manager-level access for order and project operations
- User-level access restrictions based on roles

### Directory Structure

```
app/
  auth/                 # Authentication routes
    login/             # Admin login page
    callback/          # OAuth callback
    error/             # Auth error page
  admin/               # Protected admin routes
    layout.tsx         # Admin sidebar navigation
    dashboard/         # Dashboard with KPIs
    inventory/         # Product management
    clients/           # Client management
    orders/            # Order tracking
    projects/          # Project management
    invoices/          # Invoice management
  portfolio/           # Public portfolio page
  about/              # About Us page
  contact/            # Contact form page
  blog/               # Blog listing page
  page.tsx            # Landing page

components/
  header.tsx          # Navigation header
  footer.tsx          # Footer with links
  ui/                 # shadcn/ui components
    button.tsx
    card.tsx
    input.tsx
    label.tsx

lib/
  supabase/
    client.ts         # Browser client
    server.ts         # Server client
    proxy.ts          # Session proxy
  utils.ts            # Utility functions
```

## Features

### Admin Dashboard
- Real-time statistics and KPIs
- Alerts for pending orders and overdue invoices
- Quick action buttons for common operations
- Responsive sidebar navigation
- User authentication and role management

### Inventory Management
- Full product catalog with search and filtering
- Stock level tracking with reorder alerts
- Category-based organization
- Edit and delete capabilities
- Cost and pricing management

### Client Management
- Comprehensive client database
- Contact information and location tracking
- Company details and tax ID
- Client status management
- Quick access to client communication

### Order Management
- Order creation and tracking
- Status management (pending, confirmed, shipped, delivered)
- Client assignment and line items
- Total amount calculation with taxes
- Order history and fulfillment tracking

### Project Management
- Project creation and assignment
- Timeline with start/end dates
- Budget tracking
- Project status workflow
- Team assignment capabilities

### Invoice Management
- Invoice generation from orders
- Status tracking (draft, sent, paid, overdue)
- Due date management
- PDF export capability
- Payment tracking

## Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (or npm/yarn)
- Supabase account with project setup

### Installation

1. **Install dependencies**:
```bash
pnpm install
```

2. **Set environment variables** in `.env.local`:
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
```

3. **Run the development server**:
```bash
pnpm dev
```

4. **Open in browser**:
```
http://localhost:3000
```

### Database Setup

The database schema is automatically created via Supabase SQL. All RLS policies are configured for:
- Admin-only access to sensitive operations
- Manager-level order and project management
- Row-level security based on user roles

### Default Admin Account

To create your first admin account:
1. Visit `/auth/login`
2. The system will create a profile automatically
3. Set the role to 'admin' in the database

## Design System

### Color Scheme (Modern Professional)
- **Primary**: Professional Blue (`oklch(0.35 0.13 260)`)
- **Accent**: Deeper Blue (`oklch(0.42 0.15 260)`)
- **Background**: Off-white light mode (`oklch(0.98 0.002 0)`)
- **Dark mode**: Deep navy with proper contrast

### Typography
- **Headings**: Geist Sans
- **Body**: Geist Sans
- **Code**: Geist Mono

### Components
- Responsive card-based layouts
- Consistent button styles with hover states
- Search and filter capabilities
- Status badge colors for quick identification
- Mobile-first responsive design

## Security Features

- **Row Level Security (RLS)**: All data protected with database-level policies
- **Authentication**: Secure Supabase Auth with email verification
- **Role-Based Access**: Admin, Manager, and Staff roles
- **HTTPS**: All connections encrypted
- **Session Management**: Automatic token refresh

## Performance Optimization

- Server-side rendering for public pages
- Client-side state management for admin operations
- Optimized database queries with Supabase
- Image optimization and lazy loading
- CSS-in-JS with Tailwind for minimal bundle size

## Future Enhancements

- Employee management module
- Advanced reporting and analytics
- Automated email notifications
- Payment gateway integration
- Mobile app version
- Real-time collaboration features
- Workflow automation
- Multi-language support

## Deployment

### Deploy to Vercel

1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy with a single click
4. Custom domain configuration

```bash
# Or deploy using Vercel CLI
vercel deploy
```

## Support & Documentation

For more information:
- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Docs](https://supabase.com/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)

## License

All rights reserved by Anasoya Graphics & Web Development (2024)

---

**Created with v0 by Vercel**

This comprehensive platform provides everything needed to manage your graphics and web development business with a professional online presence.
