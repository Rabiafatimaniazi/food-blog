import { defineField,defineType} from "sanity";


export default defineType
    ( {
        name: 'blog',
        title: 'Blog',
        type: 'document',
        fields: [
          defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
          }),
          defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
          }),
          defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
           
            
          }),
          defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
              source: 'title', // Automatically generate slug from the title
              maxLength: 96,
            },
          }),
        ],
      });
      
