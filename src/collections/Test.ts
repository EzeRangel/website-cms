import { CollectionConfig } from "payload/types";

const Test: CollectionConfig = {
  slug: "test",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "title",
      type: "text"
    },
    {
      name: "summary",
      type: "textarea"
    }
  ]
}

export default Test;