import { text } from 'express'
import { CollectionConfig } from 'payload/types'

const Product:CollectionConfig = {
  slug: 'product',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      validate: (value) => {
        if (!value) {
          return 'Please enter product name.';
        }
        // You can add additional validation logic if needed
        return true;
      },
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      validate: (value) => {
        if (!value) {
          return 'Please enter product description.';
        }
        return true;
      },
    },
    {
      name: 'price',
      type: 'number',
      required: true,
      validate: (value) => {
        if (value <= 0) {
          return 'Please enter a valid product price.';
        }
        return true;
      },
      min : 1
    },
    {
      name: 'rating',
      type: 'number',
      defaultValue: 0,
    },
    {
      name: 'gallery',
      type: 'array',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
    {
      name: 'numOfReviews',
      type: 'number',
      defaultValue: 0,
    },
    {
      name: 'reviews',
      type: 'array',
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'rating',
          type: 'number',
          required: true,
        },
        {
          name: 'comment',
          type: 'textarea',
          required: true,
        },
      ],
    },
  ],
}

export default Product