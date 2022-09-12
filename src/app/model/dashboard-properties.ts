export interface DashboardProperties {
    AvailableProperties: number,
    NewPropertiesLast30days:number,
    LostPropertiesLast30days: number,
    ScheduledVisits: number,
    VisitsLast30days: number,
    Properties1BedRoom: number,
    Properties2BedRooms: number,
    PropertiesMoreBedRooms: number,
    PropertiesPerRentRangeList: Array<PropertiesPerRentRange>
}


export interface PropertiesPerRentRange {
    rentValue: number,
    propertyCount: number
}
