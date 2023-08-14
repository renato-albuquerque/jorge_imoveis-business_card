








// FUNCTION

function share(){
	if (navigator.share !== undefined) {
		navigator.share({
			title: 'Jorge Imóveis - Cartão de Visita Digital',
			text: 'Atuante no mercado imobiliário desde 1982',
			url: 'https://jorgeimoveis.com.br/'
		})
		.then(() => console.log('Successful share'))
		.catch((error) => console.log('Error sharing', error));
	}
}


