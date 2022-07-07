import React, { Fragment, useState } from 'react';
import {
	Button,
	Field,
	Control,
	Input,
	Column,
	Section,
	Help,
	Label,
} from 'rbx';
import { ColumnGroup } from 'rbx/grid/columns/column-group';
import { Navigate } from 'react-router-dom';

function LoginForm() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [redirectToRegister, setRedirectToRegister] = useState(false);
	const [redirectToNotes, setRedirectToNotes] = useState(false);
	const [error, setError] = useState(false);

	if (redirectToRegister) return <Navigate to={{ pathname: '/register' }} />;
	else if (redirectToNotes) return <Navigate to={{ pathname: '/notes' }} />;

	return (
		<Fragment>
			<ColumnGroup centered>
				<form>
					<Column size={12}>
						<Field>
							<Label size='small'>Email:</Label>
							<Control>
								<Input
									type='email'
									required
									name='email'
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
							</Control>
						</Field>
						<Field>
							<Label size='small'>Password:</Label>
							<Control>
								<Input
									type='password'
									required
									name='password'
									value={password}
									onChange={(e) => setPassword(e.target.value)}
								/>
							</Control>
						</Field>
						<Field>
							<Control>
								<Column.Group breakpoint='mobile'>
									<Column>
										<a
											onClick={(e) => setRedirectToRegister(true)}
											className='button is-white has-text-custom-purple'
										>
											Register or
										</a>
									</Column>
									<Column>
										<Button color='custom-purple' outlined>
											Login
										</Button>
									</Column>
								</Column.Group>
							</Control>
						</Field>
						{error && <Help color='danger'>Email or Password invalid.</Help>}
					</Column>
				</form>
			</ColumnGroup>
		</Fragment>
	);
}

export default LoginForm;
