import Alert from 'react-bootstrap/Alert'

type SuccessProps = {
	heading?: string
	children: React.ReactNode
}

const Success: React.FC<SuccessProps> = ({ heading, children }) => {
	return (
		<Alert variant="success">
			{heading && <Alert.Heading>{heading}</Alert.Heading>}
			{children}
		</Alert>
	)
}

export default Success
