import useSWR from 'swr';

import { useAuth } from '@/lib/auth';
import { fetcher } from '@/utils/fetcher';
import { DashboardShell } from '@/components/DashboardShell';
import { SiteTableHeader } from '@/components/SiteTableHeader';
import { Page } from '@/components/Page';
import { SiteEmptyState } from '@/components/SiteEmptyState';
import { SiteTableSkeleton } from '@/components/SiteTableSkeleton';
import { SiteTable } from '@/components/SiteTable';

const Dashboard = () => {
    const auth = useAuth()
    const { data } = useSWR('/api/sites', fetcher)

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
                <SiteTable sites={data.sites} />
            </DashboardShell>
        )
    }

    return (
        <DashboardShell>
            <SiteTableHeader isPaidAccount={isPaidAccount} />
            {isPaidAccount ? <SiteEmptyState /> : <UpgradeEmptyState />}
        </DashboardShell>
    )
}

const DashboardPage = () => (
    <Page name="Dashboard" path="/sites">
        <Dashboard />
    </Page>
)

export default DashboardPage