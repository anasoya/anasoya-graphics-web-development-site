# Anasoya Platform - Setup Guide

## Quick Start

Your complete Anasoya Graphics & Web Development platform is ready! Follow these steps to get started.

## 1. Verify Supabase Connection

Your Supabase database is already configured with:
- 11 tables for complete ERP functionality
- Row Level Security (RLS) policies
- Automatic profile creation on signup

## 2. Create Your First Admin Account

1. Visit the admin login page: `/auth/login`
2. Sign up with your email and password
3. You'll be automatically created as an admin user
4. Access the admin dashboard

## 3. Add Sample Data (Optional)

To test the platform, add sample data to your Supabase tables:

### Add a Client
```json
{
  "company_name": "Sample Company",
  "contact_name": "John Doe",
  "email": "john@example.com",
  "phone": "+1-555-0000",
  "city": "New York",
  "country": "USA"
}
```

### Add a Product
```json
{
  "name": "Web Design Service",
  "category": "web-development",
  "sku": "WEB-001",
  "unit_price": 2500,
  "quantity_in_stock": 10,
  "reorder_level": 5
}
```

## 4. Platform Structure

### Public Website
- **URL**: `/` - Landing page
- **URL**: `/portfolio` - Portfolio showcase
- **URL**: `/about` - About us
- **URL**: `/blog` - Blog posts
- **URL**: `/contact` - Contact form

### Admin Panel
- **URL**: `/auth/login` - Login
- **URL**: `/admin/dashboard` - Dashboard
- **URL**: `/admin/inventory` - Products
- **URL**: `/admin/clients` - Clients
- **URL**: `/admin/orders` - Orders
- **URL**: `/admin/projects` - Projects
- **URL**: `/admin/invoices` - Invoices

## 5. Customization

### Update Branding
1. Edit company name in `components/header.tsx`
2. Update contact info in `components/footer.tsx`
3. Modify colors in `app/globals.css` (theme variables)
4. Change logo in logo component (width 10, height 10 div)

### Modify Services
1. Edit services list in `app/page.tsx` (landing page)
2. Update portfolio items in Supabase `portfolio_items` table
3. Add blog posts in `blog_posts` table

### Configure Contact Form
1. Edit email handler in `app/contact/page.tsx`
2. Connect to your email service (SendGrid, Mailgun, etc.)
3. Add email validation and notifications

## 6. Admin Features

### Dashboard
- Real-time KPIs
- Pending orders alert
- Overdue invoices alert
- Quick action buttons

### Inventory Module
- Add/edit/delete products
- Search and filter
- Stock tracking
- Low stock alerts

### Clients Module
- Manage client database
- Track contact information
- View client projects
- Communication history

### Orders Module
- Create orders
- Track fulfillment
- Manage status
- View order history

### Projects Module
- Plan projects
- Assign team members
- Track budget and timeline
- Create project tasks

### Invoices Module
- Generate invoices
- Track payments
- Export as PDF
- Manage invoice status

## 7. Deployment

### Deploy to Vercel
```bash
# Using Vercel CLI
vercel deploy

# Or connect GitHub repository to Vercel dashboard
```

### Environment Variables
Add to Vercel deployment:
```
NEXT_PUBLIC_SUPABASE_URL=your_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key
```

## 8. Security Configuration

### Set Up RLS Policies
All RLS policies are pre-configured for:
- Admin: Full access to all data
- Manager: Access to orders, projects, clients
- Staff: Limited access based on assignments

### Authentication
- Email/password authentication enabled
- Automatic token refresh
- Session management
- Logout functionality

## 9. Performance Tips

- Enable Supabase caching for frequently accessed tables
- Use Vercel's edge caching for static content
- Optimize images before uploading to portfolio
- Regular database backups

## 10. Maintenance

### Regular Tasks
- Review pending orders weekly
- Follow up on overdue invoices
- Update portfolio with new work
- Publish regular blog posts
- Monitor inventory stock levels

### Database Maintenance
- Regular backups (Supabase automatic)
- Archive old orders/invoices annually
- Clean up unused products
- Update client information

## 11. Adding New Features

### Add New Module
1. Create page in `/app/admin/[module-name]/`
2. Add route to admin sidebar navigation
3. Create Supabase table if needed
4. Implement CRUD operations
5. Add RLS policies

### Add to Dashboard
Edit `/app/admin/dashboard/page.tsx` to:
- Add new stat cards
- Create alerts
- Add quick actions

## 12. Troubleshooting

### Login Not Working
- Verify Supabase credentials
- Check email confirmation requirement
- Review RLS policies

### Data Not Showing
- Verify RLS policies allow read access
- Check user role in profiles table
- Ensure authentication is valid

### Images Not Loading
- Verify portfolio image paths
- Check image permissions
- Use relative paths for internal images

## 13. Support Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Supabase Docs](https://supabase.com/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui Components](https://ui.shadcn.com)

## 14. Next Steps

1. ✓ Customize branding and content
2. ✓ Add your portfolio projects
3. ✓ Create admin users for team
4. ✓ Deploy to Vercel
5. ✓ Set up custom domain
6. ✓ Configure email notifications
7. ✓ Add payment gateway
8. ✓ Set up analytics

---

**Your Anasoya platform is ready to grow your business!**

For questions or issues, refer to the documentation files and code comments throughout the project.
