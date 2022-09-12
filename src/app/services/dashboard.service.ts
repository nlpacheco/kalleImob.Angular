import { Injectable } from '@angular/core';
import { DashboardContracts } from '../model/dashboard-contracts';
import { DashboardFeeMonth, DashboardFees } from '../model/dashboard-fees';
import { DashboardProperties, PropertiesPerRentRange } from '../model/dashboard-properties';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  public getDashboardContract(): Promise<DashboardContracts> {
    return new Promise<DashboardContracts>((resolve, reject) => {

        var contracts: DashboardContracts = {
            runningContracts: 214,
            endingContractsNext30days: 17,
            newSignedContractsLast30days: 19,
            preContracts: 4,
            lateContracts7days: 17,
            lateContracts30days: 25,
            contractsWithPendingEvents: 11
        };

        resolve(contracts);
    })
  }
  

  public getDashboardProperties(): Promise<DashboardProperties> {
    return new Promise<DashboardProperties>((resolve, reject) => {

        var list = new Array<PropertiesPerRentRange>();

        var r1:  PropertiesPerRentRange = {
            rentValue: 900,
            propertyCount: 29
        }
        list.push(r1);
        list.push({
            rentValue: 1000,
            propertyCount: 142
        });

        list.push({
            rentValue: 1100,
            propertyCount: 76
        });

        list.push({
            rentValue: 1200,
            propertyCount: 58
        });
        list.push({
            rentValue: 1300,
            propertyCount: 129
        });
        list.push({
            rentValue: 1300,
            propertyCount: 98
        });
        list.push({
            rentValue: 1400,
            propertyCount: 128
        });
        list.push({
            rentValue: 1500,
            propertyCount: 172
        });
        list.push({
            rentValue: 1600,
            propertyCount: 195
        });
        list.push({
            rentValue: 1700,
            propertyCount: 108
        });
        list.push({
            rentValue: 1800,
            propertyCount: 159
        });
        list.push({
            rentValue: 1900,
            propertyCount: 199
        });
        list.push({
            rentValue: 2000,
            propertyCount: 309
        });
        list.push({
            rentValue: 2100,
            propertyCount: 276
        });
        list.push({
            rentValue: 2200,
            propertyCount: 231
        });

        list.push({
            rentValue: 2300,
            propertyCount: 127
        });

        
        list.push({
            rentValue: 2300,
            propertyCount: 90
        });


        list.push({
            rentValue: 2400,
            propertyCount: 74
        });


        list.push({
            rentValue: 2500,
            propertyCount: 331
        });



        var properties: DashboardProperties = {
            AvailableProperties: 1983,
            NewPropertiesLast30days:45,
            LostPropertiesLast30days: 12,
            ScheduledVisits: 29,
            VisitsLast30days: 146,
            Properties1BedRoom: 874,
            Properties2BedRooms: 612,
            PropertiesMoreBedRooms: 497,
            PropertiesPerRentRangeList: list
        };

        resolve(properties);
    })
  }
  

  
  public getDashboardFees(): Promise<DashboardFees> {
    return new Promise<DashboardFees>((resolve, reject) => {

        var list = new Array<DashboardFeeMonth>();
        list.push({    
            sequence: 1,
            month: 'Jan 2022',
            receivedFees: 19860,
            paiedFees: 7230
        });
        var list = new Array<DashboardFeeMonth>();
        list.push({    
            sequence: 2,
            month: 'Fev 2022',
            receivedFees: 21420,
            paiedFees: 7930
        });
        list.push({    
            sequence: 3,
            month: 'Mar 2022',
            receivedFees: 20720,
            paiedFees: 7530
        });
        list.push({    
            sequence: 4,
            month: 'Abr 2022',
            receivedFees: 21920,
            paiedFees: 8230
        });
        list.push({    
            sequence: 5,
            month: 'Mai 2022',
            receivedFees: 22190,
            paiedFees: 8570
        });
        list.push({    
            sequence: 6,
            month: 'Jun 2022',
            receivedFees: 22990,
            paiedFees: 8930
        });
        list.push({    
            sequence: 7,
            month: 'Jul 2022',
            receivedFees: 24420,
            paiedFees: 9270
        });
        


        var fees: DashboardFees = {
            dashboardFeeList: list
        };

        resolve(fees);
    })
  }
  

  

  
}
