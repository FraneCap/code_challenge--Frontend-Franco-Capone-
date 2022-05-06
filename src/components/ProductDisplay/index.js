import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import AttachMoney from '@mui/icons-material/AttachMoney';

export default function ProductDisplay({ product }) {
	return (
		<Card sx={{ width: '100%', height: '100%' }}>
			<CardMedia
				component='img'
				height='250'
				image={product.image_url}
				alt={product.name}
			/>
			<CardContent sx={{ textAlign: 'center' }}>
				<Typography gutterBottom variant='h5' component='div'>
					{product.name}
				</Typography>
				<Typography variant='h6' color='text.secondary'>
					{product.description}
				</Typography>
				<Stack
					spacing={1}
					direction='row'
					mt={2}
					justifyContent='center'
					alignItems='center'>
					<AttachMoney color='success' sx={{ fontSize: '2rem' }} />
					<Typography sx={{ fontSize: '2rem' }}>{product.price}</Typography>
				</Stack>
			</CardContent>
		</Card>
	);
}
