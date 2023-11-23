import * as yup from 'yup';

export const userSchema = yup.object().shape({
  name: yup.string().required('Name is a required field'),
  email: yup.string().email('Invalid e-mail').required('E-mail is a required field'),
  password: yup.string().min(8, 'Password must have at least 8 characters')
})

export function validateUser(user) {
  try {
    userSchema.validateSync(user, { abortEarly: false })
  } catch(err) {
    return err.errors;
  }
}