import { type SchemaTypeDefinition } from 'sanity'
import { products } from './products'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [products],
}
