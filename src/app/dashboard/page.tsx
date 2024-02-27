'use client'
import React, { useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Storefront from '@/components/sections/Dashboard/Storefront';

interface DashboardProps {

}

const Dashboard: React.FC<DashboardProps> = () => {
  // Use hook for getting search parameters
  const modeParams = useSearchParams();
  const router = useRouter();
  let mode = modeParams.get('mode') || 'storefront'; // Use 'storefront' as the default value if 'mode' is not provided

  useEffect(() => {
    if (!modeParams.has('mode')) {
      router.push('/dashboard?mode=storefront');
    }
  }, [modeParams, mode, router]);

  // Conditional rendering based on the 'mode' parameter
  if (mode === 'storefront') {
    return <Storefront />;
  } else if (mode === 'launchpad') {
    return <p>I love Stephanie</p>;
  } else {
    return <p>This page is not found</p>; //Include a 404 error page and redirect to storefront or homepage
  }
};

export default Dashboard;
