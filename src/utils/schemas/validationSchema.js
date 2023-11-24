import * as yup from 'yup';

export const registerSchema = yup.object().shape({
	name: yup.string().required('Name is a required field'),
	email: yup
		.string()
		.email('Invalid e-mail')
		.required('E-mail is a required field'),
	password: yup.string().min(8, 'Password must have at least 8 characters'),
});

export const loginSchema = yup.object().shape({
	email: yup.string().email('Invalid e-mail or password').required('Invalid e-mail or password'),
	password: yup.string().required('Invalid e-mail or password')
})

export function validateSchema(user, schema) {
	try {
		schema.validateSync(user, { abortEarly: false });
	} catch (e) {
		return e.inner.map((err) => {
			return {
				path: err.path,
				errors: err.errors,
			};
		});
	}
}
