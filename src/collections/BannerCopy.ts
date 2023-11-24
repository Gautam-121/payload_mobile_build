// const BannerModel = sequelize.define('banner', {
//     id:{
//       type: DataTypes.STRING,
//       allowNull:false,
//       primaryKey:true,
//       unique : true
//     },
//     title: { 
//       type: DataTypes.STRING, 
//       allowNull:true
//     },
//     bannerImg:{
//       type: DataTypes.STRING, 
//       allowNull:false,
//     },
//     typeBanner:{ 
//       type : DataTypes.ENUM,
//       values : ["Product" , "Category" , "Marketing"],
//       allowNull : false
//     },
//     url:{
//       type : DataTypes.STRING,
//       allowNull : true
//     },
//   });
  
//   export default BannerModel

import { text } from 'express'
import { CollectionConfig } from 'payload/types'
import { cloudStorage } from '@payloadcms/plugin-cloud-storage'
import S3UploadField from '../aws-Upload'

const BannerCopy:CollectionConfig = {
  slug: 'uploadImges',
  upload: {
    staticURL: '/bannerCopy',
    staticDir: 'bannerCopy',
    imageSizes: [
      {
        name: 'thumbnail',
        width: 400,
        height: 300,
        position: 'centre',
      },
      {
        name: 'card',
        width: 768,
        height: 1024,
        position: 'centre',
      },
      {
        name: 'tablet',
        width: 1024,
        // By specifying `undefined` or leaving a height undefined,
        // the image will be sized to a certain width,
        // but it will retain its original aspect ratio
        // and calculate a height automatically.
        height: undefined,
        position: 'centre',
      },
    ],
    adminThumbnail: 'thumbnail',
    mimeTypes: ['image/*'],
  },
  // auth: true,
  auth: {
    cookies:{
      secure:process.env.PAYLOAD_ENV !== "development",
      sameSite : process.env.PAYLOAD_ENV === "testing" ? "none" : "lax"
    }
  },
  admin: {
    useAsTitle: 'email',
  },
  fields: [
    // Email added by default
    // Add more fields as needed
    {
        name: 'id',
        type: 'text',
        label : "Banner-ID",
        required: true,
    },
    {
        name: 'bannerImg',
        type: 'text',
        label : "Banner-ID",
        required: true,
    },
    {
        name: 'typeBanner',
        type: 'select',
        options: [
          { label: 'Product', value: 'Product' },
          { label: 'Category', value: 'Category' },
          { label: 'Marketing', value: 'Marketing' },
        ],
        required: true,
    },
  ],
}

export default BannerCopy