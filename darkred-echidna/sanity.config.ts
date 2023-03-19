import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'darkred-echidna',

  projectId: '3rfjg9sf',
  dataset: 'dataset',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
