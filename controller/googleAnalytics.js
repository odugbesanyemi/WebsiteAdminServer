import dotenv from "dotenv";
dotenv.config();
// Imports the Google Analytics Data API client library.
import { BetaAnalyticsDataClient } from "@google-analytics/data";
import axios from 'axios'
import {google} from 'googleapis'
import { JWT } from "google-auth-library";

// Google reporting 
// export const getReport = async (req,res) => {
// async function get_service_account(){
//   const response = await axios.get(process.env.GOOGLE_APPLICATION_CREDENTIALS )
//   return response.data
// }
// let service_account = await get_service_account()
// const reporting = google.analyticsreporting('v4');
// let scopes = ['https://www.googleapis.com/auth/analytics.readonly']
// const propertyId = process.env.GA4_PROPERTY_ID;
// const auth= new google.auth.GoogleAuth({
//   keyFile:'./public/credentials.json',
//   scopes:scopes
// })
// const client = await auth.getClient();
// const analyticsreporting = google.analyticsreporting({ version: 'v4', auth });

// const response = await analyticsreporting.reports.batchGet({
//   requestBody: {
//     reportRequests: [{
//       entity: {
//         propertyId: propertyId,
//         dataSourceId: '4457612576',
//       },
//       dateRanges: [{
//         startDate: '2022-03-01',
//         endDate: '2022-03-10',
//       }],
//       metrics: [{
//         name: 'users',
//       }],
//     }],
//   },
// });
// console.log(response)

// }



export const getReport = async (req, res) => {
async function get_service_account(){
  const response = await axios.get(process.env.GOOGLE_APPLICATION_CREDENTIALS )
  return response.data
}
let service_account = await get_service_account()
  const propertyId = process.env.GA4_PROPERTY_ID;

  // Using a default constructor instructs the client to use the credentials
  // specified in GOOGLE_APPLICATION_CREDENTIALS environment variable.
  const analyticsDataClient = new BetaAnalyticsDataClient({
    credentials:{
      client_email:service_account.client_email,
      private_key:service_account.private_key,
    },
    projectId:service_account.project_id
  });

  // Runs a simple report.
  async function runReport() {
  const response =  await analyticsDataClient.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [
        {
          startDate: "2023-01-01",
          endDate: "today",
        },
      ],
      dimensions: [
        {
          name: "date",
        },
      ],
      metrics: [
        {
          name: "activeUsers",
        },
        {
            name:"screenPageViews"
        }
      ],
    });
    return response
  }
  runReport()
    .then(result => {
      res.status(200).send(result[0].rows)
    })
    .catch((err) => {
        res.status(400).send(err)
        console.log(err)
    });
};
