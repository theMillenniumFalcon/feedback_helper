import useSWR from 'swr';

import { useAuth } from '@/lib/auth';
import { fetcher } from '@/utils/fetcher';
import { DashboardShell } from '@/components/DashboardShell';
import { SiteTableHeader } from '@/components/SiteTableHeader';
import { Page } from '@/components/Page';
import { EmptyState } from '@/components/SiteEmptyState';
import { SiteTableSkeleton } from '@/components/SiteTableSkeleton';

const Dashboard = () => {
    const { user } = useAuth()
    // const { data } = useSWR(user ? ['/api/sites', user.token] : null, fetcher)
    // const isPaidAccount = user?.stripeRole !== 'free'

    if (!data) {
        return (
            <DashboardShell>
                <SiteTableHeader />
                <SiteTableSkeleton />
            </DashboardShell>
        )
    }

    if (data.sites.length) {
        return (
            <DashboardShell>
                <SiteTableHeader isPaidAccount={isPaidAccount} />
                {/* <SiteTable sites={data.sites} /> */}
            </DashboardShell>
        )
    }

    return (
        <DashboardShell>
            <SiteTableHeader isPaidAccount={isPaidAccount} />
            {/* {isPaidAccount ? <SiteEmptyState /> : <UpgradeEmptyState />} */}
        </DashboardShell>
    )
}

const DashboardPage = () => (
    <Page name="Dashboard" path="/sites">
        {/* <Dashboard /> */}
        <DashboardShell>
            <SiteTableHeader />
            <SiteTableSkeleton />
        </DashboardShell>
    </Page>
)

export default DashboardPage