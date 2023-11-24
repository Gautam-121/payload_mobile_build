import { CollectionConfig } from 'payload/types'

const SubCategory:CollectionConfig = {
  slug: 'subcategory',
  upload:true,
  labels: {
    singular: 'Subcategory',
    plural: 'Subcategories',
  },
  admin: {
    useAsTitle: 'name', // Display the category name in the dropdown
  },
  fields: [
    {
        name: 'name',
        type: 'text',
        label : "subcategory_name",
        required: true,
    },
    {
        name: 'products',
        type: 'relationship',
        relationTo: 'product',
        hasMany: true,
    },
  ],
}

export default SubCategory