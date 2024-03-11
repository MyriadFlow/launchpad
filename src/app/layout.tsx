import './globals.css'
import ClientLayout from './Web3Provider'
import { FC, PropsWithChildren } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient();

const RootLayout: FC<PropsWithChildren<{}>> = ({ children }) => {
	return (
		<html lang="en">
			<body>
				<ClientLayout>{children}</ClientLayout>
			</body>
		</html>
	)
}

export default RootLayout
