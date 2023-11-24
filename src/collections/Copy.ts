import { text } from 'express'
import { CollectionConfig } from 'payload/types'

const Copy:CollectionConfig = {
  slug: 'copy',
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  fields: [
    // Email added by default
    // Add more fields as needed
    {
        name : "full_name",
        type : "text",
        label : "Full Name",
        required : true
    },
    {
      name : "birthday",
      type : "date",
      label : "Birthday",
      required : true
    } ,
  ],
}

export default Copy