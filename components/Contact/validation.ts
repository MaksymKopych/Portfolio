import { object, string } from "yup";

let schema = object({
  name: string().required(),
  email: string().required().email(),
  phone: string().required(),
  subject: string().required(),
  offer: string().required(),
});

export default schema;
