export interface DashboardFees {
    dashboardFeeList: Array<DashboardFeeMonth>
}

export interface DashboardFeeMonth {
    sequence: number,
    month: string,
    receivedFees: number,
    paiedFees:number
}