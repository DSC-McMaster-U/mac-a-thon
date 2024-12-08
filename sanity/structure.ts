import type { StructureResolver } from 'sanity/structure';

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      // Singleton for General Info
      S.listItem()
        .title('General Info')
        .child(
          S.document()
            .schemaType('generalInfo') // Reference the schema
            .documentId('singleton-generalInfo') // Fixed document ID to enforce single entry
        ),
      // Singleton for About
      S.listItem()
        .title('About')
        .child(
          S.document()
            .schemaType('about') // Reference the schema
            .documentId('singleton-about') // Fixed document ID to enforce single entry
        ),
      // Add all other document types except "generalInfo" and "about"
      ...S.documentTypeListItems().filter(
        (listItem) =>
          listItem.getId() !== 'generalInfo' && listItem.getId() !== 'about'
      ),
    ]);
