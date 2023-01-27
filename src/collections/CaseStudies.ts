import { CollectionConfig } from "payload/types";

const CaseStudies: CollectionConfig = {
  slug: "case-studies",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "slug"]
  },
  access: {
    read: ({ req }) => {
      if(req.user) return true;

      return {
        _status: {
          equals: 'published'
        }
      }
    }
  },
  labels: {
    singular: "Case Study",
    plural: "Case Studies"
  },
  versions: {
    drafts: {
      autosave: true
    }
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      admin: {
        readOnly: true,
        position: "sidebar",
      }
    },
    {
      name: "summary",
      type: "textarea"
    },
    {
      name: "post",
      type: "richText"
    },
    {
      name: "publishDate",
      type: "date",
      admin: {
        position: "sidebar",
        description: 'Posts will not be public until this date',
      },
    }
  ]
};

export default CaseStudies;