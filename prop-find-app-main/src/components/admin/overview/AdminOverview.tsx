
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Users, Package, Calendar, Image, Percent, Box
} from 'lucide-react';
import StatsGrid from './StatsGrid';
import RecentActivity from './RecentActivity';
import QuickActions from './QuickActions';

interface AdminOverviewProps {
  stats: {
    totalVendors: number;
    pendingVendors: number;
    totalProducts: number;
    pendingProducts: number;
    totalBookings: number;
    todayBookings: number;
    totalUsers: number;
    activeUsers: number;
    totalLocations: number;
    categories: number;
    totalImages: number;
    storageUsed: string;
    activeDiscounts: number;
    totalPackages: number;
  };
}

const AdminOverview = ({ stats }: AdminOverviewProps) => {
  return (
    <div className="space-y-6">
      <StatsGrid stats={stats} />
      <RecentActivity />
      <QuickActions />
    </div>
  );
};

export default AdminOverview;
