import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AttachMoney from '@mui/icons-material/AttachMoney';

const ProductListItem = ({ product, setOpenModal }) => {
	const handleOpen = () => {
		setOpenModal({ open: true, product: product });
	};

	return (
		<Card
			margin={10}
			padding={0}
			onClick={() => handleOpen()}
			sx={{ cursor: 'pointer' }}>
			<CardMedia
				component='img'
				height='140'
				image={product.image_url}
				alt={product.name}
			/>
			<CardContent>
				<Typography gutterBottom variant='h5' component='div'>
					{product.name}
				</Typography>
			</CardContent>
			<CardActions>
				<Box>
					<Stack spacing={1} direction='row'>
						<AttachMoney color='success' />
						<Typography>{product.price}</Typography>
					</Stack>
				</Box>
			</CardActions>
		</Card>
	);
};

export default ProductListItem;
