import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  cities: any = [
    {'key':'Kiev', 'value':'Киев'},
    {'key':'Florida', 'value':'Флорида'},
    {'key':'South Dakota', 'value':'Северная Дакота'},
    {'key':'Tennessee', 'value':'Тунис'},
    {'key':'Michigan', 'value':'Мечиган'}
  ];

  takeChoices: any = [
    {'key':'Y', 'value':'Да'},
    {'key':'N', 'value':'Нет'}
  ];

  terminals = {
    "content": [
      {
        "terminalId": "cb22bb62",
        "groupNumber": 1,
        "opPurchase": "N",
        "opReversal": "Y",
        "opRefund": "Y",
        "manual": "Y",
        "pin": "Y",
        "geoPosition": "Y",
        "limitVisa": 100000,
        "limitMc": 50000,
        "limitProstir": 100000,
        "visaAccepted": "Y",
        "mcAccepted": "Y",
        "prostirAccepted": "Y",
        "receiptTemplate": 1,
        "configChanged": "N",
        "dateTimeInit": "2019-08-05T15:30:25.799Z",
        "merchant": {
          "merchantId": "d7f08eab-544a-4b69-a7e8-a2e90f7d79fe",
          "merchantName": "COFEE SHOP VESELKA",
          "merchantLocation": "25-A PRORIZNA ST.",
          "taxId": 1235847895,
          "mcc": 6012,
          "acquirerId": "42562801"
        },
        "allowedLanguages": [
          {
            "languageId": "UKR"
          },
          {
            "languageId": "RUS"
          },
          {
            "languageId": "ENG"
          }
        ]
      },
      {
        "terminalId": "cb22bb63",
        "groupNumber": 2,
        "opPurchase": "Y",
        "opReversal": "Y",
        "opRefund": "Y",
        "manual": "Y",
        "pin": "Y",
        "geoPosition": "Y",
        "limitVisa": 300000,
        "limitMc": 40000,
        "limitProstir": 200000,
        "visaAccepted": "Y",
        "mcAccepted": "Y",
        "prostirAccepted": "Y",
        "receiptTemplate": 1,
        "configChanged": "N",
        "merchant": {
          "merchantId": "0d385b77-13e3-4453-ac32-acace7e2c7ab",
          "merchantName": "COFEE SHOP VESELKA2",
          "merchantLocation": "26-A PRORIZNA ST.",
          "taxId": 1235847896,
          "mcc": 6013,
          "acquirerId": "42562802"
        },
        "allowedLanguages": [
          {
            "languageId": "ENG"
          }
        ]
      },
      {
        "terminalId": "b815403a",
        "groupNumber": 1,
        "opPurchase": "Y",
        "opReversal": "Y",
        "opRefund": "Y",
        "manual": "Y",
        "pin": "Y",
        "geoPosition": "Y",
        "limitVisa": 100000,
        "limitMc": 50000,
        "limitProstir": 100000,
        "visaAccepted": "Y",
        "mcAccepted": "Y",
        "prostirAccepted": "Y",
        "receiptTemplate": 1,
        "configChanged": "N",
        "merchant": {
          "merchantId": "d7f08eab-544a-4b69-a7e8-a2e90f7d79fe",
          "merchantName": "COFEE SHOP VESELKA",
          "merchantLocation": "25-A PRORIZNA ST.",
          "taxId": 1235847895,
          "mcc": 6012,
          "acquirerId": "42562801"
        },
        "allowedLanguages": [
          {
            "languageId": "UKR"
          },
          {
            "languageId": "RUS"
          },
          {
            "languageId": "ENG"
          }
        ]
      },
      {
        "terminalId": "c6aa0317",
        "groupNumber": 1,
        "opPurchase": "Y",
        "opReversal": "Y",
        "opRefund": "Y",
        "manual": "Y",
        "pin": "Y",
        "geoPosition": "Y",
        "limitVisa": 100000,
        "limitMc": 50000,
        "limitProstir": 100000,
        "visaAccepted": "Y",
        "mcAccepted": "Y",
        "prostirAccepted": "Y",
        "receiptTemplate": 1,
        "configChanged": "N",
        "merchant": {
          "merchantId": "7a86ab78-15bc-4cc4-ae3c-67f7d8a8f909",
          "merchantName": "COFEE SHOP VESELKA",
          "merchantLocation": "25-A PRORIZNA ST.",
          "taxId": 1235847895,
          "mcc": 6012,
          "acquirerId": "42562801"
        },
        "allowedLanguages": [
          {
            "languageId": "UKR"
          },
          {
            "languageId": "RUS"
          },
          {
            "languageId": "ENG"
          }
        ]
      },
      {
        "terminalId": "55a05ffa",
        "groupNumber": 1,
        "opPurchase": "Y",
        "opReversal": "Y",
        "opRefund": "Y",
        "manual": "Y",
        "pin": "Y",
        "geoPosition": "Y",
        "limitVisa": 100000,
        "limitMc": 50000,
        "limitProstir": 100000,
        "visaAccepted": "Y",
        "mcAccepted": "Y",
        "prostirAccepted": "Y",
        "receiptTemplate": 1,
        "configChanged": "N",
        "merchant": {
          "merchantId": "cfd678a3-0a46-4bca-9919-e3602c783320",
          "merchantName": "COFEE SHOP VESELKA",
          "merchantLocation": "25-A PRORIZNA ST.",
          "taxId": 1235847895,
          "mcc": 6012,
          "acquirerId": "42562801"
        },
        "allowedLanguages": [
          {
            "languageId": "UKR"
          },
          {
            "languageId": "RUS"
          },
          {
            "languageId": "ENG"
          }
        ]
      },
      {
        "terminalId": "aa1d5338",
        "groupNumber": 1,
        "opPurchase": "Y",
        "opReversal": "Y",
        "opRefund": "Y",
        "manual": "Y",
        "pin": "Y",
        "geoPosition": "Y",
        "limitVisa": 100000,
        "limitMc": 50000,
        "limitProstir": 100000,
        "visaAccepted": "Y",
        "mcAccepted": "Y",
        "prostirAccepted": "Y",
        "receiptTemplate": 1,
        "configChanged": "N",
        "merchant": {
          "merchantId": "f8b4a888-07cf-4c32-83dc-4384810f4ddc",
          "merchantName": "COFEE SHOP VESELKA",
          "merchantLocation": "25-A PRORIZNA ST.",
          "taxId": 1235847895,
          "mcc": 6012,
          "acquirerId": "42562801"
        },
        "allowedLanguages": [
          {
            "languageId": "UKR"
          },
          {
            "languageId": "RUS"
          },
          {
            "languageId": "ENG"
          }
        ]
      },
      {
        "terminalId": "5180b5bf",
        "groupNumber": 1,
        "opPurchase": "Y",
        "opReversal": "Y",
        "opRefund": "Y",
        "manual": "Y",
        "pin": "Y",
        "geoPosition": "Y",
        "limitVisa": 100000,
        "limitMc": 50000,
        "limitProstir": 100000,
        "visaAccepted": "Y",
        "mcAccepted": "Y",
        "prostirAccepted": "Y",
        "receiptTemplate": 1,
        "configChanged": "N",
        "merchant": {
          "merchantId": "91f05e13-e5a7-4f26-9a75-c5336ebfd6c7",
          "merchantName": "COFEE SHOP VESELKA",
          "merchantLocation": "25-A PRORIZNA ST.",
          "taxId": 1235847895,
          "mcc": 6012,
          "acquirerId": "42562801"
        },
        "allowedLanguages": [
          {
            "languageId": "UKR"
          },
          {
            "languageId": "RUS"
          },
          {
            "languageId": "ENG"
          }
        ]
      },


      {
        "terminalId": "5180b5bf",
        "groupNumber": 1,
        "opPurchase": "Y",
        "opReversal": "Y",
        "opRefund": "Y",
        "manual": "Y",
        "pin": "Y",
        "geoPosition": "Y",
        "limitVisa": 100000,
        "limitMc": 50000,
        "limitProstir": 100000,
        "visaAccepted": "Y",
        "mcAccepted": "Y",
        "prostirAccepted": "Y",
        "receiptTemplate": 1,
        "configChanged": "N",
        "merchant": {
          "merchantId": "91f05e13-e5a7-4f26-9a75-c5336ebfd6c7",
          "merchantName": "COFEE SHOP VESELKA",
          "merchantLocation": "25-A PRORIZNA ST.",
          "taxId": 1235847895,
          "mcc": 6012,
          "acquirerId": "42562801"
        },
        "allowedLanguages": [
          {
            "languageId": "UKR"
          },
          {
            "languageId": "RUS"
          },
          {
            "languageId": "ENG"
          }
        ]
      },
      {
        "terminalId": "5180b5bf",
        "groupNumber": 1,
        "opPurchase": "Y",
        "opReversal": "Y",
        "opRefund": "Y",
        "manual": "Y",
        "pin": "Y",
        "geoPosition": "Y",
        "limitVisa": 100000,
        "limitMc": 50000,
        "limitProstir": 100000,
        "visaAccepted": "Y",
        "mcAccepted": "Y",
        "prostirAccepted": "Y",
        "receiptTemplate": 1,
        "configChanged": "N",
        "merchant": {
          "merchantId": "91f05e13-e5a7-4f26-9a75-c5336ebfd6c7",
          "merchantName": "COFEE SHOP VESELKA",
          "merchantLocation": "25-A PRORIZNA ST.",
          "taxId": 1235847895,
          "mcc": 6012,
          "acquirerId": "42562801"
        },
        "allowedLanguages": [
          {
            "languageId": "UKR"
          },
          {
            "languageId": "RUS"
          },
          {
            "languageId": "ENG"
          }
        ]
      },
      {
        "terminalId": "5180b5bf",
        "groupNumber": 1,
        "opPurchase": "Y",
        "opReversal": "Y",
        "opRefund": "Y",
        "manual": "Y",
        "pin": "Y",
        "geoPosition": "Y",
        "limitVisa": 100000,
        "limitMc": 50000,
        "limitProstir": 100000,
        "visaAccepted": "Y",
        "mcAccepted": "Y",
        "prostirAccepted": "Y",
        "receiptTemplate": 1,
        "configChanged": "N",
        "merchant": {
          "merchantId": "91f05e13-e5a7-4f26-9a75-c5336ebfd6c7",
          "merchantName": "COFEE SHOP VESELKA",
          "merchantLocation": "25-A PRORIZNA ST.",
          "taxId": 1235847895,
          "mcc": 6012,
          "acquirerId": "42562801"
        },
        "allowedLanguages": [
          {
            "languageId": "UKR"
          },
          {
            "languageId": "RUS"
          },
          {
            "languageId": "ENG"
          }
        ]
      },
      {
        "terminalId": "5180b5bf",
        "groupNumber": 1,
        "opPurchase": "Y",
        "opReversal": "Y",
        "opRefund": "Y",
        "manual": "Y",
        "pin": "Y",
        "geoPosition": "Y",
        "limitVisa": 100000,
        "limitMc": 50000,
        "limitProstir": 100000,
        "visaAccepted": "Y",
        "mcAccepted": "Y",
        "prostirAccepted": "Y",
        "receiptTemplate": 1,
        "configChanged": "N",
        "merchant": {
          "merchantId": "91f05e13-e5a7-4f26-9a75-c5336ebfd6c7",
          "merchantName": "COFEE SHOP VESELKA",
          "merchantLocation": "25-A PRORIZNA ST.",
          "taxId": 1235847895,
          "mcc": 6012,
          "acquirerId": "42562801"
        },
        "allowedLanguages": [
          {
            "languageId": "UKR"
          },
          {
            "languageId": "RUS"
          },
          {
            "languageId": "ENG"
          }
        ]
      },
      {
        "terminalId": "5180b5bf",
        "groupNumber": 1,
        "opPurchase": "Y",
        "opReversal": "Y",
        "opRefund": "Y",
        "manual": "Y",
        "pin": "Y",
        "geoPosition": "Y",
        "limitVisa": 100000,
        "limitMc": 50000,
        "limitProstir": 100000,
        "visaAccepted": "Y",
        "mcAccepted": "Y",
        "prostirAccepted": "Y",
        "receiptTemplate": 1,
        "configChanged": "N",
        "merchant": {
          "merchantId": "91f05e13-e5a7-4f26-9a75-c5336ebfd6c7",
          "merchantName": "COFEE SHOP VESELKA",
          "merchantLocation": "25-A PRORIZNA ST.",
          "taxId": 1235847895,
          "mcc": 6012,
          "acquirerId": "42562801"
        },
        "allowedLanguages": [
          {
            "languageId": "UKR"
          },
          {
            "languageId": "RUS"
          },
          {
            "languageId": "ENG"
          }
        ]
      }
    ],
    "pageable": {
      "sort": {
        "sorted": false,
        "unsorted": true,
        "empty": true
      },
      "pageSize": 20,
      "pageNumber": 0,
      "offset": 0,
      "unpaged": false,
      "paged": true
    },
    "totalElements": 7,
    "last": true,
    "totalPages": 1,
    "first": true,
    "sort": {
      "sorted": false,
      "unsorted": true,
      "empty": true
    },
    "numberOfElements": 7,
    "size": 20,
    "number": 0,
    "empty": false
  };

  terminalGroups = [
    {
      "groupNumber": 1,
      "groupName": "HoReCa",
      "opPurchase": "Y",
      "opReversal": "Y",
      "opRefund": "Y",
      "manual": "Y",
      "pin": "Y",
      "geoPosition": "Y",
      "limitVisa": 100000,
      "limitMc": 50000,
      "limitProstir": 100000,
      "visaAccepted": "Y",
      "mcAccepted": "Y",
      "prostirAccepted": "Y",
      "receiptTemplate": 1,
      "allowedLanguages": [
        {
          "languageId": "UKR"
        },
        {
          "languageId": "RUS"
        },
        {
          "languageId": "ENG"
        }
      ]
    },
    {
      "groupNumber": 2,
      "groupName": "Taxi",
      "opPurchase": "Y",
      "opReversal": "N",
      "opRefund": "N",
      "manual": "N",
      "pin": "N",
      "geoPosition": "Y",
      "limitVisa": 100000,
      "limitMc": 50000,
      "limitProstir": 100000,
      "visaAccepted": "Y",
      "mcAccepted": "Y",
      "prostirAccepted": "Y",
      "receiptTemplate": 2,
      "allowedLanguages": [
        {
          "languageId": "RUS"
        },
        {
          "languageId": "ENG"
        },
        {
          "languageId": "GEO"
        }
      ]
    },
    {
      "groupNumber": 2,
      "groupName": "Taxi",
      "opPurchase": "Y",
      "opReversal": "N",
      "opRefund": "N",
      "manual": "N",
      "pin": "N",
      "geoPosition": "Y",
      "limitVisa": 100000,
      "limitMc": 50000,
      "limitProstir": 100000,
      "visaAccepted": "Y",
      "mcAccepted": "Y",
      "prostirAccepted": "Y",
      "receiptTemplate": 2,
      "allowedLanguages": [
        {
          "languageId": "RUS"
        },
        {
          "languageId": "ENG"
        },
        {
          "languageId": "GEO"
        }
      ]
    },
    {
      "groupNumber": 2,
      "groupName": "Taxi",
      "opPurchase": "Y",
      "opReversal": "N",
      "opRefund": "N",
      "manual": "N",
      "pin": "N",
      "geoPosition": "Y",
      "limitVisa": 100000,
      "limitMc": 50000,
      "limitProstir": 100000,
      "visaAccepted": "Y",
      "mcAccepted": "Y",
      "prostirAccepted": "Y",
      "receiptTemplate": 2,
      "allowedLanguages": [
        {
          "languageId": "RUS"
        },
        {
          "languageId": "ENG"
        },
        {
          "languageId": "GEO"
        }
      ]
    },
    {
      "groupNumber": 2,
      "groupName": "Taxi",
      "opPurchase": "Y",
      "opReversal": "N",
      "opRefund": "N",
      "manual": "N",
      "pin": "N",
      "geoPosition": "Y",
      "limitVisa": 100000,
      "limitMc": 50000,
      "limitProstir": 100000,
      "visaAccepted": "Y",
      "mcAccepted": "Y",
      "prostirAccepted": "Y",
      "receiptTemplate": 2,
      "allowedLanguages": [
        {
          "languageId": "RUS"
        },
        {
          "languageId": "ENG"
        },
        {
          "languageId": "GEO"
        }
      ]
    }
  ];

  transactions = {
    "content": [
      {
        "transactionId": "12345",
        "amount": 12550,
        "amountOther": "0",
        "currency": 980,
        "operation": "PURCHASE",
        "panMasked": "************2555",
        "panSn": "0",
        "transactionDate": "2019-06-24T00:00:00.000+0000",
        "formFactor": "238C0000",
        "approvalCode": "25F654",
        "responseCode": "APPROVED",
        "rrn": "518745621534",
        "statusCode": "Success"
      },
      {
        "transactionId": "12346",
        "amount": 12550,
        "amountOther": null,
        "currency": 980,
        "operation": "PURCHASE",
        "panMasked": "************2555",
        "panSn": "0",
        "transactionDate": "2019-06-24T00:00:00.000+0000",
        "formFactor": "238C0000",
        "approvalCode": "25F654",
        "responseCode": "APPROVED",
        "rrn": "518745621534",
        "statusCode": "Success"
      }
    ],
    "pageable": {
      "sort": {
        "sorted": false,
        "unsorted": true,
        "empty": true
      },
      "pageSize": 20,
      "pageNumber": 0,
      "offset": 0,
      "paged": true,
      "unpaged": false
    },
    "last": true,
    "totalPages": 1,
    "totalElements": 2,
    "first": true,
    "sort": {
      "sorted": false,
      "unsorted": true,
      "empty": true
    },
    "numberOfElements": 2,
    "size": 20,
    "number": 0,
    "empty": false
  };

  panMaskeds = [
    {
      "id": "001",
      "templateMasked": "************NNNN",
      "beginMask": 1,
      "endMask": 1,
      "maskSymbol": 1
    },
    {
      "id": "002",
      "templateMasked": "NNNN************",
      "beginMask": 2,
      "endMask": 2,
      "maskSymbol": 1
    },
    {
      "id": "003",
      "templateMasked": "NNNN********NNNN",
      "beginMask": 3,
      "endMask": 3,
      "maskSymbol": 1
    }
    ];

  allowedLanguages = [
    {
      "languageId": "UKR"
    },
    {
      "languageId": "RUS"
    },
    {
      "languageId": "ENG"
    }
  ];

  constructor(private http: HttpClient) { }

  public findAllTerminals():{content, pageable, totalElements, last, totalPages, first, sort, numberOfElements, size, number, empty}{
    return this.terminals;
  }

  public updateTerminal(terminal: {content, pageable, totalElements, last, totalPages, first, sort, numberOfElements, size, number, empty}){
    //   this.terminals.push(terminal);
  }

  public findAllServiceGroups():Array<{groupNumber, groupName, opPurchase, opReversal, opRefund, manual, pin, geoPosition, limitVisa, limitMc, limitProstir, visaAccepted, mcAccepted, prostirAccepted, receiptTemplate, allowedLanguages}>{
    return this.terminalGroups;
  }

  public createServiceGroup(terminalGroup: {groupNumber, groupName, opPurchase, opReversal, opRefund, manual, pin, geoPosition, limitVisa, limitMc, limitProstir, visaAccepted, mcAccepted, prostirAccepted, receiptTemplate, allowedLanguages}){
    // this.terminals.push(terminalGroup);
  }

  updateServiceGroup(terminalGroup: {groupNumber, groupName, opPurchase, opReversal, opRefund, manual, pin, geoPosition, limitVisa, limitMc, limitProstir, visaAccepted, mcAccepted, prostirAccepted, receiptTemplate, allowedLanguages}){
    // this.terminals.push(terminalGroup);
  }

  public findAllTransactions():{content, pageable, last, totalPages, totalElements, first, sort, numberOfElements, size, number, empty} {
    return this.transactions;
  }

  public getPanMaskeds():Array<{id, templateMasked, beginMask, endMask, maskSymbol}> {
    return this.panMaskeds;
  }

  public getAllowedLanguages():Array<{languageId}> {
    return this.allowedLanguages;
  }

  public getCities():Array<{key, value}> {
    return this.cities;
  }

  public getTakeChoices():Array<{key, value}> {
    return this.takeChoices;
  }
}

/**
 * @see https://youtu.be/1doIL1bPp5Q?t=448
 */

// interface Language {
//   languageId:string
// }
//
// interface Merchant {
//   merchantId:string,
//   legal_name:string,
//   merchantName:string,
//   merchantLocation:string,
//   taxId:number,
//   mcc:number,
//   acquirerId:number
// }

// interface Terminal {
//   terminalId:string,
//   groupNumber:number,
//   opPurchase:string,
//   opReversal:string,
//   opRefund:string,
//   manual:string,
//   pin:string,
//   geoPosition:string,
//   limitVisa:number,
//   limitMc:number,
//   limitProstir:number,
//   visaAccepted:string,
//   mcAccepted:string,
//   prostirAccepted:string,
//   receiptTemplate:string,
//   configChanged:string,
//   merchant:Merchant,
//   allowedLanguages:[Language]
// }

