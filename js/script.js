var splide = new Splide( '.splide', {
    type   : 'loop',
    perPage: 3,

    breakpoints: {
        1024: {
            perPage: 2,
        },
		768: {
			perPage: 1,
        },
    },    
} );

splide.mount();

