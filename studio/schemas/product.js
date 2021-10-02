export default {
  title: 'Product',
  name: 'product',
  type: 'document',
  fields: [
    {
      title: 'Short Name',
      name: 'shortName',
      type: 'string'
    },

    {
      title: 'Thumbnail',
      name: 'thumbnail',
      type: 'image'
    },

    {
      title: 'Driveaway Price',
      name: 'driveawayPrice',
      type: 'number'
    },

    {
      title: 'Featured',
      name: 'featured',
      type: 'boolean'
    },

    {
      title: 'Description',
      name: 'description',
      type: 'array',
      of: [{
        type: 'block',
        styles: [
          {title: 'Normal', value: 'normal'},
          {title: 'H2', value: 'h2'},
          {title: 'H3', value: 'h3'},
          {title: 'H4', value: 'h4'},
          {title: 'H5', value: 'h5'},
          {title: 'H6', value: 'h6'}
        ],
      }],
    },

    {
      title: 'Available Colours',
      name: 'availableColours',
      // A reference is a way to point to another document
      type: 'array',
      // This reference is only allowed to point to a document of the type person,
      // we could list more types, but let's keep this simple:
      of: [{
        type: 'reference',
        to: [
          {type: 'bodyPaint'}
        ]
      }]
    }
  ]
};