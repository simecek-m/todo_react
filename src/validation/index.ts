import { IColor, INewTag, IProfile } from "type";
import * as yup from "yup";

export const PROFILE_SCHEMA: yup.SchemaOf<IProfile> = yup.object({
  email: yup.string().email().required(),
  firstName: yup.string().required(),
  id: yup.string().required(),
  lastName: yup.string().required(),
  picture: yup.string().required(),
  username: yup
    .string()
    .required()
    .min(4, "At least 3 characters required!")
    .matches(/^@[a-zA-Z0-9]+$/g, "Forbidden character used in username!")
    .transform((value) => `@${value}`),
});

export const COLOR_SCHEMA: yup.SchemaOf<IColor> = yup.object({
  dark: yup.string().required(),
  light: yup.string().required(),
});

export const TAG_SCHEMA: yup.SchemaOf<INewTag> = yup.object({
  label: yup.string().required(),
  color: COLOR_SCHEMA,
});
