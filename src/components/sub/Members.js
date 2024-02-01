import SubLayout from '../common/SubLayout';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

function Members() {
	const subtitle = {
		title: 'Join to Delivery',
		p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quo laboriosam obcaecati reprehenderit quaerat minus voluptas cupiditate, dolorem consectetur? Et nisi fugit dolor impedit modi eius aspernatur. Cum, reiciendis fugiat.',
	};

	const memberShip = {
		userID: '',
		password: '',
		password2: '',
		userEmail: '',
	};

	const [Info, setInfo] = useState(memberShip);
	const [ErrMsg, setErrMsg] = useState({});
	const [Submit, setSubmit] = useState(false);
	const history = useHistory();

	const check = (input, e) => {
		const err = {};
		const eng = /[a-zA-Z]/;
		const num = /[0-9]/;
		const spc = /[~!@#$%^&*()_+`\[\]{}]/;

		if (input.userID.length < 5) {
			err.userID = 'Please write your ID in at least 5 letters';
			e.target.userID.style.borderColor = 'red';
		} else {
			e.target.userID.style.borderColor = '#03afff';
		}

		if (
			input.password.length < 6 ||
			!eng.test(input.password) ||
			!num.test(input.password) ||
			!spc.test(input.password)
		) {
			err.password = 'The password is ';

			if (!eng.test(input.password)) {
				err.password += '6 or more letters,';
			}
			if (!num.test(input.password)) {
				err.password += 'including numbers,';
			}
			if (!spc.test(input.password)) {
				err.password += 'Include special characters,';
			}
			err.password += ' enter the same';
			e.target.password.style.borderColor = 'red';
		} else {
			e.target.password.style.borderColor = '#03afff';
		}

		if (input.password !== input.password2 || !input.password2) {
			err.password2 = 'Your password does not match';
			e.target.password2.style.borderColor = 'red';
		} else {
			e.target.password2.style.borderColor = '#03afff';
		}

		if (input.userEmail.length < 8 || !/@/.test(input.userEmail)) {
			err.userEmail = 'Write at least 8 letters including @';
			e.target.userEmail.style.borderColor = 'red';
		} else {
			e.target.userEmail.style.borderColor = '#03afff';
		}

		return err;
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setInfo({ ...Info, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setErrMsg(check(Info, e));
	};

	useEffect(() => {
		const length = Object.keys(ErrMsg).length;
		if (length === 0 && Submit) {
			alert('Congratulations on your membership. Go to the main page');
			history.push('/');
		}
	}, [ErrMsg]);

	return (
		<SubLayout name='members' sub={subtitle}>
			<div className='sub-top'></div>
			<form onSubmit={handleSubmit} className='member-form'>
				<fieldset className='required-box'>
					<legend>Join required</legend>
					<div className='input-list'>
						<div className='input-item'>
							<label htmlFor='userID'>ID</label>
							<input
								type='text'
								id='userID'
								name='userID'
								placeholder='Please fill out your ID'
								onChange={handleChange}
							/>
							<span className='err-msg'>{ErrMsg.userID}</span>
						</div>

						<div className='input-item'>
							<label htmlFor='password'>password</label>
							<input
								type='password'
								id='password'
								name='password'
								placeholder='Please write the password with at least 6 characters and special characters'
								onChange={handleChange}
							/>
							<span className='err-msg'>{ErrMsg.password}</span>
						</div>

						<div className='input-item'>
							<label htmlFor='password2'>Confirm Password</label>
							<input
								type='password'
								id='password2'
								name='password2'
								placeholder='Please write the same password again'
								onChange={handleChange}
							/>
							<span className='err-msg'>{ErrMsg.password2}</span>
						</div>

						<div className='input-item'>
							<label htmlFor='userEmail'>email</label>
							<input
								type='mail'
								id='userEmail'
								name='userEmail'
								placeholder='Write your e-mail in at least 8 letters including @'
								onChange={handleChange}
							/>
							<span className='err-msg'>{ErrMsg.userEmail}</span>
						</div>
					</div>
				</fieldset>

				<fieldset className='option-box'>
					<legend>Options</legend>
					<div className='input-list'>
						<div className='input-item'>
							<label htmlFor='funnel'>funnel</label>
							<select name='funnel' id='funnel'>
								<option value=''>Please select the following.</option>
								<option value=''>blog</option>
								<option value=''>insta</option>
								<option value=''>facebook</option>
								<option value=''>youtube</option>
							</select>
						</div>

						<div className='input-item '>
							<span className='label'>reception</span>

							<div className='checkbox-group'>
								<div className='checkbox'>
									<input type='checkbox' id='agree-email' name='reception' />
									<label htmlFor='agree-email'>I agree to receive emails</label>
								</div>

								<div className='checkbox'>
									<input type='checkbox' id='agree-sms' name='reception' />
									<label htmlFor='agree-sms'>I agree to receive SMS/MMS</label>
								</div>
							</div>
						</div>
					</div>
				</fieldset>

				<button
					type='submit'
					onClick={() => {
						setSubmit(true);
					}}
				>
					Create account
				</button>
			</form>
		</SubLayout>
	);
}

export default Members;
