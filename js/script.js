var splide = new Splide( '.splide', {
    type   : 'loop',
    perPage: 3,

    breakpoints: {
		768: {
			perPage: 2,
        },
        425: {
            perPage:1,
        },
    },    
} );

splide.mount();

