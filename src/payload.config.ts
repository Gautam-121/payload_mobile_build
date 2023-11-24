//@ts-nocheck

import path from 'path'

import { payloadCloud } from '@payloadcms/plugin-cloud'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { webpackBundler } from '@payloadcms/bundler-webpack'
import { slateEditor } from '@payloadcms/richtext-slate'
import { buildConfig } from 'payload/config'
import {s3Adapter} from '@payloadcms/plugin-cloud-storage/s3'

const mockModulePath = path.resolve(__dirname , 'mocks' , 'emptyFunction.js')

const storageAdapter = s3Adapter({
  config:{
    region: process.env.S3_REGION,
    credentials: {
      accessKeyId: process.env.S3_ACCESS_KEY,
      secretAccessKey:process.env.S3_SECRET_KEY
    }
  },
  bucket: process.env.S3_BUCKET_NAME
})

import Users from './collections/Users'
import Media from './collections/Media'
import Customer from './collections/Customer'
import BannerCopy from './collections/BannerCopy'
import Copy from './collections/Copy'
import Product from './collections/Products'
import Category from './collections/Category'
import SubCategory from './collections/SubCategory'
import Designer from './collections/Designer'
import Banner from './collections/Banner'

export default buildConfig({
  serverURL : process.env.PAYLOAD_PUBLIC_EXTERNAL_SERVER_URL,
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
    webpack : (config)=>({
      ...config,
      resolve : {
        ...config.resolve,
        extensions : ['.js' , '.jsx' , '.ts' , '.tsx'],
        alias:{
          ...config.resolve.alias,
          fs: mockModulePath,
          //...add all server only modules
        }
      }
    })
  }, 
  editor: slateEditor({}),
  cors : process.env.WHITELIST_ORIGINS ? process.env.WHITELIST_ORIGINS.split(",") : [],
  csrf : process.env.WHITELIST_ORIGINS ? process.env.WHITELIST_ORIGINS.split(",") : [],
  collections: [
    Users ,
    Media,
    Customer,
    BannerCopy,
    Copy,
    Product,
    Category,
    SubCategory,
    Designer,
    Banner
  ],
  typescript: {
    outputFile:path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    // schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
    disable : true
  },
  plugins: [
    payloadCloud({
      collections:{
        "media":{
          adapter : storageAdapter
        }
      }
    })
  ],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
})
