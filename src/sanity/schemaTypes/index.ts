import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
// import {categoryType} from './categoryType'
import {postType} from './postType'
import {authorType} from './authorType'
import {Category} from "./category"
import { Product } from './product'
 

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType,  postType, authorType, Category,Product],
}
