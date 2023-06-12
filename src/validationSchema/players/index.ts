import * as yup from 'yup';
import { parentValidationSchema } from 'validationSchema/parents';
import { performanceDataValidationSchema } from 'validationSchema/performance-data';

export const playerValidationSchema = yup.object().shape({
  user_id: yup.string().nullable().required(),
  academy_id: yup.string().nullable().required(),
  coach_id: yup.string().nullable(),
  parent: yup.array().of(parentValidationSchema),
  performance_data: yup.array().of(performanceDataValidationSchema),
});
