import Container from '@mui/material/Container';
import Products from './Views/Products';

function App() {
	return (
		<div className='App' sx={{ width: '100%' }}>
			<Container
				maxWidth='lg'
				sx={{
					backgroundColor: '#f0f0f0f0',
					paddingTop: '30px',
					paddingBottom: '15px',
					width: '100%',
				}}>
				<Products />
			</Container>
		</div>
	);
}

export default App;
