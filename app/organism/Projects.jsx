import React from 'react';

const Projects = () => {
	const portfolioList = [
		{
			id: 1,
			img: 'portfolio1.png',
			title: 'Вебсайт для компании',
			description:
				'Сайты различной сложности и функциональности, начиная от корпоративных сайтов',
			project: {
				type1: 'Веб разработка',
				type2: 'Электронная коммерция',
				type3: 'Оптимизация и аналитика',
			},
		},
		{
			id: 2,
			img: 'portfolio2.png',
			title: 'Вебсайт для компании',
			description:
				'Сайты различной сложности и функциональности, начиная от корпоративных сайтов',
			project: {
				type1: 'Веб разработка',
				type2: 'Электронная коммерция',
				type3: 'Оптимизация и аналитика',
			},
		},
		{
			id: 3,
			img: 'portfolio3.png',
			title: 'Вебсайт для компании',
			description:
				'Сайты различной сложности и функциональности, начиная от корпоративных сайтов',
			project: {
				type1: 'Веб разработка',
				type2: 'Электронная коммерция',
				type3: 'Оптимизация и аналитика',
			},
		},
		{
			id: 4,
			img: 'portfolio1.png',
			title: 'Вебсайт для компании',
			description:
				'Сайты различной сложности и функциональности, начиная от корпоративных сайтов',
			project: {
				type1: 'Веб разработка',
				type2: 'Электронная коммерция',
				type3: 'Оптимизация и аналитика',
			},
		},
		{
			id: 5,
			img: 'portfolio1.png',
			title: 'Вебсайт для компании',
			description:
				'Сайты различной сложности и функциональности, начиная от корпоративных сайтов',
			project: {
				type1: 'Веб разработка',
				type2: 'Электронная коммерция',
				type3: 'Оптимизация и аналитика',
			},
		},
	];

	return (
		<section
			id='projects'
			className='flex flex-col items-center gap-5 bg-secondary py-20'
		>
			<h4 className='text-4xl font-semibold'>Projects</h4>
			<p className='w-2/3 lg:w-full text-lg text-center'>
				Here I proudly present some of my best <br />
				projects completed for valued clients.
			</p>
			<div className='flex gap-10 w-[100%] overflow-scroll px-10 lg:px-20 pb-10'>
				{portfolioList.map(item => (
					<div
						key={item.id}
						className='flex flex-col gap-5 max-w-[300px] min-w-[300px] items-center lg:items-start'
					>
						<div className='flex relative'>
							<img
								src={item.img}
								alt='website example'
								className='rounded-[40px]'
							/>
							<div className='z-10 absolute bottom-0 flex flex-col items-start text-white p-5 gap-2 text-sm'>
								<button className='white-btn'>{item.project.type1}</button>
								<button className='white-btn'>{item.project.type2}</button>
								<button className='white-btn'>{item.project.type3}</button>
							</div>
						</div>
						<div className='pl-2'>
							<h5 className='text-xl font-semibold mb-2'>{item.title}</h5>
							<p className='text-xs text-secondary'>{item.description}</p>
						</div>
						<button className=' text-white  rounded-full w-40 h-10 bg-[#4B40BB]'>
							Подробнее
						</button>
					</div>
				))}
			</div>
		</section>
	);
};

export default Projects;
