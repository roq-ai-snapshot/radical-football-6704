import * as yup from 'yup';
import { playerValidationSchema } from 'validationSchema/players';
import { userValidationSchema } from 'validationSchema/users';

export const academyValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string(),
  image: yup.string(),
  user_id: yup.string().nullable().required(),
  player: yup.array().of(playerValidationSchema),
  user_user_academy_idToacademy: yup.array().of(userValidationSchema),
});
