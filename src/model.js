import image from './work-5.jpg'
import { TextBlock, TitleBlock, ColumnsBlock, ImageBlock } from './classes/blocks'

export const model = [
	new TitleBlock('constructor', {
		tag: 'h2',
		styles: {
			color: 'red',
			padding: '1rem'
		}
	}),
	new ImageBlock(image, {
		styles: {
			padding: '2rem 0',
			display: 'flex',
			'justify-content': 'center'
		},
		imageStyles: {
			width: '500px'
		},
		alt: 'alt'
	}),
	// теперь не нужно описывать переменные такие как type value он сам преобразовывает через аргументы значения value и type
	// {
	// 	type: 'text',
	// 	value: 'sometext', options: {
	// 		styles: {
	// 			background: '#fff',
	// 			padding: '1rem',
	// 			'font-weight': 'bold'
	// 		}
	// 	}
	// },
	new ColumnsBlock(['lorem jldsjfslkdj ld lkjfsdl kjflsdkj f',
		'lorem',
		'lorem tree'],
		{
			styles: {
				background: '#fff',
				padding: '2rem',
				color: '#000',
				'font-weight': 'bold'
			}
		}
	),
	new TextBlock('sometext', {
		styles: {
			background: '#fff',
			padding: '1rem',
			'font-weight': 'bold'
		}
	})
]
