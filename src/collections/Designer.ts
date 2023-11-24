import { CollectionConfig } from 'payload/types'

const Designer:CollectionConfig = {
  slug: 'designer',
  upload: true,
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
        name: 'disigner_name',
        type: 'text',
        label : "Disigner_Name",
        required: true,
    },
    {
      name: 'products',
      type: 'relationship',
      relationTo: 'product',
      hasMany: true,
  }
  ],
}

export default Designer