'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Package, Users, ShoppingCart, FileText, TrendingUp, AlertCircle } from 'lucide-react'

export default function DashboardPage() {
  const [stats, setStats] = useState({
    totalClients: 0,
    totalProducts: 0,
    totalOrders: 0,
    totalInvoices: 0,
    pendingOrders: 0,
    overdueInvoices: 0
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchStats = async () => {
      const supabase = createClient()

      try {
        // Fetch counts
        const [
          { count: clientsCount },
          { count: productsCount },
          { count: ordersCount },
          { count: invoicesCount },
          { count: pendingOrdersCount },
          { count: overdueInvoicesCount }
        ] = await Promise.all([
          supabase.from('clients').select('*', { count: 'exact', head: true }),
          supabase.from('products').select('*', { count: 'exact', head: true }),
          supabase.from('orders').select('*', { count: 'exact', head: true }),
          supabase.from('invoices').select('*', { count: 'exact', head: true }),
          supabase.from('orders').select('*', { count: 'exact', head: true }).eq('status', 'pending'),
          supabase.from('invoices').select('*', { count: 'exact', head: true }).eq('status', 'overdue')
        ])

        setStats({
          totalClients: clientsCount || 0,
          totalProducts: productsCount || 0,
          totalOrders: ordersCount || 0,
          totalInvoices: invoicesCount || 0,
          pendingOrders: pendingOrdersCount || 0,
          overdueInvoices: overdueInvoicesCount || 0
        })
      } catch (error) {
        console.error('Error fetching stats:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchStats()
  }, [])

  const StatCard = ({ 
    icon: Icon, 
    label, 
    value, 
    href, 
    trend 
  }: { 
    icon: any
    label: string
    value: number
    href: string
    trend?: string
  }) => (
    <Link href={href}>
      <Card className="p-6 hover:border-primary/50 transition-colors cursor-pointer bg-card border border-border">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm text-muted-foreground mb-1">{label}</p>
            <p className="text-3xl font-bold text-foreground">{value}</p>
            {trend && <p className="text-xs text-primary mt-2">{trend}</p>}
          </div>
          <Icon className="w-8 h-8 text-primary" />
        </div>
      </Card>
    </Link>
  )

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here&apos;s your business overview.</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          icon={Users}
          label="Total Clients"
          value={stats.totalClients}
          href="/admin/clients"
        />
        <StatCard
          icon={Package}
          label="Products"
          value={stats.totalProducts}
          href="/admin/inventory"
        />
        <StatCard
          icon={ShoppingCart}
          label="Total Orders"
          value={stats.totalOrders}
          href="/admin/orders"
          trend={`${stats.pendingOrders} pending`}
        />
        <StatCard
          icon={FileText}
          label="Invoices"
          value={stats.totalInvoices}
          href="/admin/invoices"
          trend={`${stats.overdueInvoices} overdue`}
        />
      </div>

      {/* Alerts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {stats.pendingOrders > 0 && (
          <Card className="p-6 bg-amber-50 border-amber-200 dark:bg-amber-950/20 dark:border-amber-800">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <h3 className="font-semibold text-amber-900 dark:text-amber-100 mb-1">
                  Pending Orders
                </h3>
                <p className="text-sm text-amber-800 dark:text-amber-200 mb-3">
                  You have {stats.pendingOrders} order{stats.pendingOrders !== 1 ? 's' : ''} awaiting confirmation.
                </p>
                <Link href="/admin/orders">
                  <Button size="sm" variant="outline" className="border-amber-300">
                    Review Orders
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        )}

        {stats.overdueInvoices > 0 && (
          <Card className="p-6 bg-red-50 border-red-200 dark:bg-red-950/20 dark:border-red-800">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <h3 className="font-semibold text-red-900 dark:text-red-100 mb-1">
                  Overdue Invoices
                </h3>
                <p className="text-sm text-red-800 dark:text-red-200 mb-3">
                  {stats.overdueInvoices} invoice{stats.overdueInvoices !== 1 ? 's' : ''} are past due date.
                </p>
                <Link href="/admin/invoices">
                  <Button size="sm" variant="outline" className="border-red-300">
                    View Invoices
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        )}
      </div>

      {/* Quick Actions */}
      <Card className="p-6 bg-card border border-border">
        <h2 className="text-xl font-bold text-foreground mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link href="/admin/clients/new">
            <Button className="w-full bg-primary hover:bg-primary/90" variant="default">
              Add New Client
            </Button>
          </Link>
          <Link href="/admin/inventory/new">
            <Button variant="outline" className="w-full">
              Add Product
            </Button>
          </Link>
          <Link href="/admin/orders/new">
            <Button variant="outline" className="w-full">
              Create Order
            </Button>
          </Link>
          <Link href="/admin/projects/new">
            <Button variant="outline" className="w-full">
              New Project
            </Button>
          </Link>
          <Link href="/admin/invoices/new">
            <Button variant="outline" className="w-full">
              Generate Invoice
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  )
}
