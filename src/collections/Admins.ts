import { CollectionConfig } from "payload/types";

const Admins: CollectionConfig = {
  slug: "admins",
  auth: true,
  admin: {
    useAsTitle: "fullname",
  },
  access: {
    read: () => true
  },
  fields: [
    {
      name: "fullname",
      type: "text",
      required: true,
    },
    {
      name: "email",
      type: "email",
      required: true
    }
  ]
};

export default Admins;