import { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import ProductListItem from '../../components/ProductListItem';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import ProductDisplay from '../../components/ProductDisplay';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 600,
	height: 450,
	bgColor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
};

const Products = () => {
	const [productsList, setProductsList] = useState([]);
	const [openModal, setOpenModal] = useState({ open: false, product: {} });

	const handleClose = () => {
		setOpenModal({ open: false, product: {} });
	};

	useEffect(() => {
		const getProducts = async () => {
			const response = await fetch('https://codechallengebackfrancocapone.herokuapp.com/api/products')
				.then((res) => res.json())
				.then((data) => setProductsList(data));
			return response;
		};
		getProducts();
	}, []);

	return (
		<div>
			<Modal
				open={openModal.open}
				onClose={handleClose}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'>
				<Box sx={style}>
					<ProductDisplay product={openModal.product} />
				</Box>
			</Modal>
			<Typography
				variant='h2'
				sx={{ textAlign: 'center', paddingBottom: '30px' }}>
				Products
			</Typography>
			<Grid
				container
				rowSpacing={2}
				justifyContent='center'
				width='100%'
				margin={0}>
				{productsList.length > 0 ? (
					productsList.map((product) => (
						<Grid
							key={product.id}
							item
							xs={5}
							justifySelf='center'
							margin='0 auto 0 auto'>
							<ProductListItem product={product} setOpenModal={setOpenModal} />
						</Grid>
					))
				) : (
					<h1>Loading...</h1>
				)}
			</Grid>
		</div>
	);
};

export default Products;
