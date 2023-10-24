import Alert from 'react-bootstrap/Alert'

type WarningProps = {
	heading?: string
	children: React.ReactNode
}

const Warning: React.FC<WarningProps> = ({ heading, children }) => {
	return (
		<Alert variant="warning">
			{heading && <Alert.Heading>{heading}</Alert.Heading>}
			{children}
		</Alert>
	)
}

export default Warning
