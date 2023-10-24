import { model } from './model'
// import { templates } from './templates'
import { Site } from './classes/site'
import { Sidebar } from './classes/sidebar'
import './styles/style.css'

const site = new Site('#site')

site.render(model)
const updateCallBack = newBlock => {
	model.push(newBlock)
	site.render(model)
}

new Sidebar('#panel', updateCallBack)

// model.forEach(block => {
// 	// let html = ''
// 	// if (block.type == 'title') {
// 	// 	html = title(block)
// 	// } else if (block.type == 'text') {
// 	// 	html = text(block)
// 	// } else if (block.type == 'columns') {
// 	// 	html = columns(block)
// 	// } else if (block.type == 'image') {
// 	// 	html = image(block)
// 	// }
// 	// const toHTML = templates[block.type]
// 	site.insertAdjacentHTML('beforeend', block.toHTML())
// })
