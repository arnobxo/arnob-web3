import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list'
import type { StructureResolver } from 'sanity/structure'

/**
 * Document types that are ordered by hand (drag and drop) instead of the
 * default alphabetical list. Keep this in sync with the schemas that include
 * `orderRankField()`.
 */
const ORDERABLE_TYPES = ['project']

export const structure: StructureResolver = (S, context) =>
  S.list()
    .title('Content')
    .items([
      orderableDocumentListDeskItem({
        type: 'project',
        title: 'Projects',
        // New projects are added at the top of the list (see orderRankField).
        S,
        context,
      }),
      S.divider(),
      // Everything else keeps the default list behaviour.
      ...S.documentTypeListItems().filter(
        (listItem) => !ORDERABLE_TYPES.includes(listItem.getId() ?? '')
      ),
    ])
