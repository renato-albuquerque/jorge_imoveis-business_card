// function

function share(){
	if (navigator.share !== undefined) {
		navigator.share({
			title: 'Jorge Imóveis - Cartão de Visita Digital',
			text: 'Aluguel, Compra, Venda e Atividades Afins.',
			url: 'https://jorgeimoveis-cartaodevisita.vercel.app/'
		})
		.then(() => console.log('Successful share'))
		.catch((error) => console.log('Error sharing', error));
	}
}


