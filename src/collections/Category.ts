import { CollectionConfig } from 'payload/types'

const Category:CollectionConfig = {
  slug: 'category',
  upload:true,
  admin: {
    useAsTitle: 'name',
  },
  labels: {
    singular: 'Category',
    plural: 'Categories',
  },
  fields: [
    {
        name: 'name',
        type: 'text',
        label : "category_name",
        required: true,
        unique : true
    },
    {
      name: 'subcategories',
      type: 'relationship',
      relationTo: 'subcategory',
      hasMany: true,
    },
    // {
    //   name: 'products',
    //   type: 'relationship',
    //   relationTo: 'product',
    //   hasMany: true,
    // }
  ],
}

export default Category