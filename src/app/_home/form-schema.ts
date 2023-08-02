import * as yup from 'yup'

export const schema = yup.object({
  name: yup.string().required('Required').max(36),
  email: yup.string().email('Invalid Email format').required('Required').max(36),
  type: yup.string().required('Required'),
  message: yup.string().required('Required').max(255),
})
