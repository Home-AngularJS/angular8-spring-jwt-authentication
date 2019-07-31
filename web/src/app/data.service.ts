import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs/index";
import {ApiResponse} from './model/api.response';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // private baseUrl = 'http://map1.mobo.cards:8093/api/v1/terminals';
  private terminalUrl = 'http://map1.mobo.cards:8093/api/v1/terminals';
  private groupUrl = 'http://map1.mobo.cards:8093/api/v1/service-groups';
  private transactionUrl = 'http://map1.mobo.cards:8093/api/v1/transactions';

  // terminals = [
  //   {
  //     "terminalId": "cb22bb62-0d1f-4228-8440-276819bf12d4",
  //     "groupNumber": 1,
  //     "opPurchase": "N",
  //     "opReversal": "Y",
  //     "opRefund": "Y",
  //     "manual": "Y",
  //     "pin": "Y",
  //     "geoPosition": "Y",
  //     "limitVisa": 100000,
  //     "limitMc": 50000,
  //     "limitProstir": 100000,
  //     "visaAccepted": "Y",
  //     "mcAccepted": "Y",
  //     "prostirAccepted": "Y",
  //     "receiptTemplate": 1,
  //     "configChanged": "N",
  //     "merchant": {
  //       "merchantId": "0d385b77-13e3-4453-ac32-acace7e2c7ac",
  //       "legal_name": "ТОВ.Сонечко",
  //       "merchantName": "COFEE SHOP VESELKA",
  //       "merchantLocation": "25-A PRORIZNA ST.",
  //       "taxId": 1235847895,
  //       "mcc": 6012,
  //       "acquirerId": "42562801"
  //     },
  //     "allowedLanguages": [
  //       {
  //         "languageId": "UKR"
  //       },
  //       {
  //         "languageId": "RUS"
  //       },
  //       {
  //         "languageId": "ENG"
  //       }
  //     ]
  //   },
  //   {
  //     "terminalId": "629275d3-d47f-45a4-8f7d-d3929bbeecca",
  //     "groupNumber": 1,
  //     "opPurchase": "Y",
  //     "opReversal": "Y",
  //     "opRefund": "Y",
  //     "manual": "Y",
  //     "pin": "Y",
  //     "geoPosition": "Y",
  //     "limitVisa": 100000,
  //     "limitMc": 50000,
  //     "limitProstir": 100000,
  //     "visaAccepted": "Y",
  //     "mcAccepted": "Y",
  //     "prostirAccepted": "Y",
  //     "receiptTemplate": 1,
  //     "configChanged": "N",
  //     "merchant": {
  //       "merchantId": "f6ffb4b4-44f0-494d-9d2b-031f1cc03504",
  //       "legal_name": "ТОВ.",
  //       "merchantName": "COFEE SHOP VESELKA",
  //       "merchantLocation": "25-A PRORIZNA ST.",
  //       "taxId": 1235847895,
  //       "mcc": 6012,
  //       "acquirerId": "42562801"
  //     },
  //     "allowedLanguages": [
  //       {
  //         "languageId": "UKR"
  //       },
  //       {
  //         "languageId": "RUS"
  //       },
  //       {
  //         "languageId": "ENG"
  //       }
  //     ]
  //   },
  //
  //
  //   // {
  //   //   "terminalId": "629275d3-d47f-45a4-8f7d-d3929bbeecca",
  //   //   "groupNumber": 1,
  //   //   "opPurchase": "Y",
  //   //   "opReversal": "Y",
  //   //   "opRefund": "Y",
  //   //   "manual": "Y",
  //   //   "pin": "Y",
  //   //   "geoPosition": "Y",
  //   //   "limitVisa": 100000,
  //   //   "limitMc": 50000,
  //   //   "limitProstir": 100000,
  //   //   "visaAccepted": "Y",
  //   //   "mcAccepted": "Y",
  //   //   "prostirAccepted": "Y",
  //   //   "receiptTemplate": 1,
  //   //   "configChanged": "N",
  //   //   "merchant": {
  //   //     "merchantId": "f6ffb4b4-44f0-494d-9d2b-031f1cc03504",
  //   //     "legal_name": "ТОВ.",
  //   //     "merchantName": "COFEE SHOP VESELKA",
  //   //     "merchantLocation": "25-A PRORIZNA ST.",
  //   //     "taxId": 1235847895,
  //   //     "mcc": 6012,
  //   //     "acquirerId": "42562801"
  //   //   },
  //   //   "allowedLanguages": [
  //   //     {
  //   //       "languageId": "UKR"
  //   //     },
  //   //     {
  //   //       "languageId": "RUS"
  //   //     },
  //   //     {
  //   //       "languageId": "ENG"
  //   //     }
  //   //   ]
  //   // },
  //   // {
  //   //   "terminalId": "629275d3-d47f-45a4-8f7d-d3929bbeecca",
  //   //   "groupNumber": 1,
  //   //   "opPurchase": "Y",
  //   //   "opReversal": "Y",
  //   //   "opRefund": "Y",
  //   //   "manual": "Y",
  //   //   "pin": "Y",
  //   //   "geoPosition": "Y",
  //   //   "limitVisa": 100000,
  //   //   "limitMc": 50000,
  //   //   "limitProstir": 100000,
  //   //   "visaAccepted": "Y",
  //   //   "mcAccepted": "Y",
  //   //   "prostirAccepted": "Y",
  //   //   "receiptTemplate": 1,
  //   //   "configChanged": "N",
  //   //   "merchant": {
  //   //     "merchantId": "f6ffb4b4-44f0-494d-9d2b-031f1cc03504",
  //   //     "legal_name": "ТОВ.",
  //   //     "merchantName": "COFEE SHOP VESELKA",
  //   //     "merchantLocation": "25-A PRORIZNA ST.",
  //   //     "taxId": 1235847895,
  //   //     "mcc": 6012,
  //   //     "acquirerId": "42562801"
  //   //   },
  //   //   "allowedLanguages": [
  //   //     {
  //   //       "languageId": "UKR"
  //   //     },
  //   //     {
  //   //       "languageId": "RUS"
  //   //     },
  //   //     {
  //   //       "languageId": "ENG"
  //   //     }
  //   //   ]
  //   // },
  //   // {
  //   //   "terminalId": "629275d3-d47f-45a4-8f7d-d3929bbeecca",
  //   //   "groupNumber": 1,
  //   //   "opPurchase": "Y",
  //   //   "opReversal": "Y",
  //   //   "opRefund": "Y",
  //   //   "manual": "Y",
  //   //   "pin": "Y",
  //   //   "geoPosition": "Y",
  //   //   "limitVisa": 100000,
  //   //   "limitMc": 50000,
  //   //   "limitProstir": 100000,
  //   //   "visaAccepted": "Y",
  //   //   "mcAccepted": "Y",
  //   //   "prostirAccepted": "Y",
  //   //   "receiptTemplate": 1,
  //   //   "configChanged": "N",
  //   //   "merchant": {
  //   //     "merchantId": "f6ffb4b4-44f0-494d-9d2b-031f1cc03504",
  //   //     "legal_name": "ТОВ.",
  //   //     "merchantName": "COFEE SHOP VESELKA",
  //   //     "merchantLocation": "25-A PRORIZNA ST.",
  //   //     "taxId": 1235847895,
  //   //     "mcc": 6012,
  //   //     "acquirerId": "42562801"
  //   //   },
  //   //   "allowedLanguages": [
  //   //     {
  //   //       "languageId": "UKR"
  //   //     },
  //   //     {
  //   //       "languageId": "RUS"
  //   //     },
  //   //     {
  //   //       "languageId": "ENG"
  //   //     }
  //   //   ]
  //   // },
  //   // {
  //   //   "terminalId": "629275d3-d47f-45a4-8f7d-d3929bbeecca",
  //   //   "groupNumber": 1,
  //   //   "opPurchase": "Y",
  //   //   "opReversal": "Y",
  //   //   "opRefund": "Y",
  //   //   "manual": "Y",
  //   //   "pin": "Y",
  //   //   "geoPosition": "Y",
  //   //   "limitVisa": 100000,
  //   //   "limitMc": 50000,
  //   //   "limitProstir": 100000,
  //   //   "visaAccepted": "Y",
  //   //   "mcAccepted": "Y",
  //   //   "prostirAccepted": "Y",
  //   //   "receiptTemplate": 1,
  //   //   "configChanged": "N",
  //   //   "merchant": {
  //   //     "merchantId": "f6ffb4b4-44f0-494d-9d2b-031f1cc03504",
  //   //     "legal_name": "ТОВ.",
  //   //     "merchantName": "COFEE SHOP VESELKA",
  //   //     "merchantLocation": "25-A PRORIZNA ST.",
  //   //     "taxId": 1235847895,
  //   //     "mcc": 6012,
  //   //     "acquirerId": "42562801"
  //   //   },
  //   //   "allowedLanguages": [
  //   //     {
  //   //       "languageId": "UKR"
  //   //     },
  //   //     {
  //   //       "languageId": "RUS"
  //   //     },
  //   //     {
  //   //       "languageId": "ENG"
  //   //     }
  //   //   ]
  //   // },
  //   // {
  //   //   "terminalId": "629275d3-d47f-45a4-8f7d-d3929bbeecca",
  //   //   "groupNumber": 1,
  //   //   "opPurchase": "Y",
  //   //   "opReversal": "Y",
  //   //   "opRefund": "Y",
  //   //   "manual": "Y",
  //   //   "pin": "Y",
  //   //   "geoPosition": "Y",
  //   //   "limitVisa": 100000,
  //   //   "limitMc": 50000,
  //   //   "limitProstir": 100000,
  //   //   "visaAccepted": "Y",
  //   //   "mcAccepted": "Y",
  //   //   "prostirAccepted": "Y",
  //   //   "receiptTemplate": 1,
  //   //   "configChanged": "N",
  //   //   "merchant": {
  //   //     "merchantId": "f6ffb4b4-44f0-494d-9d2b-031f1cc03504",
  //   //     "legal_name": "ТОВ.",
  //   //     "merchantName": "COFEE SHOP VESELKA",
  //   //     "merchantLocation": "25-A PRORIZNA ST.",
  //   //     "taxId": 1235847895,
  //   //     "mcc": 6012,
  //   //     "acquirerId": "42562801"
  //   //   },
  //   //   "allowedLanguages": [
  //   //     {
  //   //       "languageId": "UKR"
  //   //     },
  //   //     {
  //   //       "languageId": "RUS"
  //   //     },
  //   //     {
  //   //       "languageId": "ENG"
  //   //     }
  //   //   ]
  //   // },
  //   // {
  //   //   "terminalId": "629275d3-d47f-45a4-8f7d-d3929bbeecca",
  //   //   "groupNumber": 1,
  //   //   "opPurchase": "Y",
  //   //   "opReversal": "Y",
  //   //   "opRefund": "Y",
  //   //   "manual": "Y",
  //   //   "pin": "Y",
  //   //   "geoPosition": "Y",
  //   //   "limitVisa": 100000,
  //   //   "limitMc": 50000,
  //   //   "limitProstir": 100000,
  //   //   "visaAccepted": "Y",
  //   //   "mcAccepted": "Y",
  //   //   "prostirAccepted": "Y",
  //   //   "receiptTemplate": 1,
  //   //   "configChanged": "N",
  //   //   "merchant": {
  //   //     "merchantId": "f6ffb4b4-44f0-494d-9d2b-031f1cc03504",
  //   //     "legal_name": "ТОВ.",
  //   //     "merchantName": "COFEE SHOP VESELKA",
  //   //     "merchantLocation": "25-A PRORIZNA ST.",
  //   //     "taxId": 1235847895,
  //   //     "mcc": 6012,
  //   //     "acquirerId": "42562801"
  //   //   },
  //   //   "allowedLanguages": [
  //   //     {
  //   //       "languageId": "UKR"
  //   //     },
  //   //     {
  //   //       "languageId": "RUS"
  //   //     },
  //   //     {
  //   //       "languageId": "ENG"
  //   //     }
  //   //   ]
  //   // },
  //   // {
  //   //   "terminalId": "629275d3-d47f-45a4-8f7d-d3929bbeecca",
  //   //   "groupNumber": 1,
  //   //   "opPurchase": "Y",
  //   //   "opReversal": "Y",
  //   //   "opRefund": "Y",
  //   //   "manual": "Y",
  //   //   "pin": "Y",
  //   //   "geoPosition": "Y",
  //   //   "limitVisa": 100000,
  //   //   "limitMc": 50000,
  //   //   "limitProstir": 100000,
  //   //   "visaAccepted": "Y",
  //   //   "mcAccepted": "Y",
  //   //   "prostirAccepted": "Y",
  //   //   "receiptTemplate": 1,
  //   //   "configChanged": "N",
  //   //   "merchant": {
  //   //     "merchantId": "f6ffb4b4-44f0-494d-9d2b-031f1cc03504",
  //   //     "legal_name": "ТОВ.",
  //   //     "merchantName": "COFEE SHOP VESELKA",
  //   //     "merchantLocation": "25-A PRORIZNA ST.",
  //   //     "taxId": 1235847895,
  //   //     "mcc": 6012,
  //   //     "acquirerId": "42562801"
  //   //   },
  //   //   "allowedLanguages": [
  //   //     {
  //   //       "languageId": "UKR"
  //   //     },
  //   //     {
  //   //       "languageId": "RUS"
  //   //     },
  //   //     {
  //   //       "languageId": "ENG"
  //   //     }
  //   //   ]
  //   // }
  // ];

  terminals = {
    "content": [
      {
        "terminalId": "cb22bb62",
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
          "merchantId": "0d385b77-13e3-4453-ac32-acace7e2c7ac",
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

  constructor(private http: HttpClient) { }

  // public getTerminals():Array<{terminalId, groupNumber, opPurchase, opReversal, opRefund, manual, pin, geoPosition, limitVisa, limitMc, limitProstir, visaAccepted, mcAccepted, prostirAccepted, receiptTemplate, configChanged, merchant, allowedLanguages}>{
  //   return this.terminals;
  // }
  public getTerminals():{content, pageable, totalElements, last, totalPages, first, sort, numberOfElements, size, number, empty}{
    return this.terminals;
  }
  // getTerminals(): Observable<any> {
  //   return this.http.get<any>(this.terminalUrl);
  // }

  // public updateTerminal(terminal: {terminalId, groupNumber, opPurchase, opReversal, opRefund, manual, pin, geoPosition, limitVisa, limitMc, limitProstir, visaAccepted, mcAccepted, prostirAccepted, receiptTemplate, configChanged, merchant, allowedLanguages}){
  //   this.terminals.push(terminal);
  // }
  public updateTerminal(terminal: {content, pageable, totalElements, last, totalPages, first, sort, numberOfElements, size, number, empty}){
    this.terminals.push(terminal);
  }

  public getTerminalGroups():Array<{groupNumber, groupName, opPurchase, opReversal, opRefund, manual, pin, geoPosition, limitVisa, limitMc, limitProstir, visaAccepted, mcAccepted, prostirAccepted, receiptTemplate, allowedLanguages}>{
    return this.terminalGroups;
  }
  // getTerminalGroups(): Observable<any> {
  //   return this.http.get(this.groupUrl);
  // }

  // public createTerminalGroup(terminalGroup: {groupNumber, groupName, opPurchase, opReversal, opRefund, manual, pin, geoPosition, limitVisa, limitMc, limitProstir, visaAccepted, mcAccepted, prostirAccepted, receiptTemplate, allowedLanguages}){
  //   this.terminals.push(terminalGroup);
  // }

  public getTransactions():{content, pageable, last, totalPages, totalElements, first, sort, numberOfElements, size, number, empty} {
    return this.transactions;
  }
  // getTransactions(): Observable<any> {
  //   return this.http.get(this.transactionUrl);
  // }
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

