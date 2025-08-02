import { defineField, defineType } from "sanity";

export const generalInfoSchema = defineType({
  title: "General Info",
  name: "generalInfo",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "The title of the document",
      validation: (Rule) => Rule.required().error("Title is required"),
    }),
    defineField({
      name: "club",
      title: "Club",
      type: "string",
      description: "The club name",
      validation: (Rule) => Rule.required().error("Club is required"),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      description: "The description of the document",
      validation: (Rule) => Rule.required().error("Description is required"),
    }),
    defineField({
      name: "startDate",
      title: "Start Date",
      type: "datetime",
      description: "The start date of the event",
    }),
    defineField({
      name: "endDate",
      title: "End Date",
      type: "datetime",
      description: "The end date of the event",
    }),
    defineField({
      name: "locationType",
      title: "Location Type",
      type: "string",
      description: "The type of location",
      validation: (Rule) => Rule.required().error("Location Type is required"),
      options: {
        list: ["virtual", "in-person", "hybrid"],
      },
    }),
    defineField({
      name: "application",
      title: "Application",
      type: "object",
      description: "The application status and link",
      validation: (Rule) => Rule.required().error("Application is required"),
      fields: [
        defineField({
          name: "status",
          title: "Status",
          type: "string",
          description: "The status of the application",
          validation: (Rule) => Rule.required().error("Status is required"),
          options: {
            list: ["open", "closed"],
          },
        }),
        defineField({
          name: "link",
          title: "Link",
          type: "url",
          description: "The link to the application",
        }),
      ],
    }),
  ],
});
