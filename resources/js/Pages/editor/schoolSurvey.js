import * as utils from './editorUtility.js';
import Sortable from 'sortablejs';

class SchoolSurvey {

	static get toolbox() {
	  return {
	    title: 'SchoolSurvey',
	    icon: '<svg class="w-8 h-8" viewBox="0 0 183 126" xmlns="http://www.w3.org/2000/svg"><path d="M100.43 9.08H63.51c-2.39 0-4.57.41-6.54 1.22-1.98.82-3.81 2.06-5.48 3.74l.01.01c-.68.68-1.28 1.38-1.82 2.1-3.02.12-5.92.57-8.71 1.35.08-.22.17-.44.26-.65 1.19-2.88 2.94-5.48 5.27-7.8l.01.01.01-.01c2.33-2.33 4.93-4.08 7.79-5.26C57.15 2.59 60.22 2 63.51 2H117.16c3.28 0 6.36.59 9.23 1.77 2.88 1.19 5.48 2.94 7.8 5.26l-.01.01c2.34 2.34 4.09 4.94 5.27 7.79 1.18 2.87 1.77 5.94 1.77 9.23v.09h-7.08v-.09c0-2.39-.41-4.57-1.22-6.54-.82-1.98-2.06-3.81-3.73-5.48l-.01-.01-.01.01c-1.69-1.69-3.51-2.93-5.48-3.74-1.97-.81-4.16-1.22-6.54-1.22h-16.72zM47.84 83.07c.81 1.88 2.03 3.62 3.64 5.24l.16.17c1.63 1.58 3.41 2.78 5.34 3.57 1.97.81 4.15 1.22 6.53 1.22h15.86a3.54 3.54 0 013.54 3.54c0 .42-.07.83-.21 1.21-.58 2.24-1.25 4.44-1.99 6.58-.78 2.25-1.63 4.42-2.56 6.49a28 28 0 01-1.37 2.74c3.07-1.39 5.95-2.97 8.65-4.75h.01l-.01-.01a60.51 60.51 0 008.27-6.49c2.57-2.41 4.91-5.04 7.04-7.87.69-.92 1.75-1.41 2.82-1.41v-.01h13.61c2.38 0 4.56-.41 6.53-1.22 1.99-.82 3.83-2.07 5.51-3.74 1.67-1.67 2.91-3.5 3.73-5.48l.08-.2h7.42c-.26.99-.58 1.95-.97 2.89-1.18 2.86-2.94 5.47-5.28 7.81-2.34 2.32-4.94 4.08-7.8 5.26-2.86 1.18-5.93 1.78-9.21 1.78h-11.9c-2.09 2.65-4.34 5.1-6.75 7.36a66.791 66.791 0 01-9.23 7.27l-.01-.01a70.557 70.557 0 01-10.57 5.72c-3.73 1.63-7.7 2.99-11.89 4.08-1.24.32-2.62-.05-3.53-1.08a3.537 3.537 0 01.3-4.98c1.87-1.66 3.46-3.33 4.78-5.01l.15-.21c1.33-1.72 2.38-3.47 3.15-5.23l.01-.03c.87-1.94 1.66-3.92 2.35-5.93.22-.64.44-1.29.65-1.95H63.51c-3.28 0-6.35-.6-9.21-1.78-2.78-1.15-5.31-2.84-7.6-5.06-.08-.06-.15-.13-.22-.2-2.32-2.32-4.08-4.92-5.26-7.8-.52-1.26-.92-2.56-1.22-3.91 2.48.72 5.09 1.21 7.84 1.43zM31.903 59.114c0-1.466-.518-2.588-1.553-3.364-1.035-.794-2.898-1.622-5.59-2.484-2.691-.88-4.822-1.743-6.392-2.588-4.278-2.312-6.418-5.426-6.418-9.343 0-2.035.57-3.847 1.708-5.434 1.156-1.605 2.804-2.855 4.943-3.753 2.157-.897 4.572-1.345 7.246-1.345 2.692 0 5.09.491 7.194 1.475 2.105.966 3.736 2.338 4.892 4.115 1.173 1.777 1.76 3.795 1.76 6.055h-7.764c0-1.725-.544-3.062-1.63-4.011-1.088-.966-2.614-1.45-4.581-1.45-1.898 0-3.373.406-4.425 1.217-1.053.794-1.58 1.846-1.58 3.157 0 1.225.613 2.252 1.838 3.08 1.243.828 3.063 1.604 5.46 2.329 4.417 1.328 7.635 2.976 9.654 4.943 2.018 1.967 3.027 4.417 3.027 7.35 0 3.26-1.233 5.822-3.7 7.686-2.467 1.846-5.788 2.769-9.964 2.769-2.898 0-5.538-.527-7.919-1.579-2.38-1.07-4.2-2.527-5.46-4.374-1.242-1.846-1.863-3.985-1.863-6.417h7.79c0 4.157 2.484 6.236 7.452 6.236 1.846 0 3.287-.37 4.322-1.112 1.035-.76 1.553-1.812 1.553-3.158zm29.346 7.04c-1.846 2.242-4.399 3.364-7.66 3.364-3.002 0-5.296-.863-6.883-2.588-1.57-1.726-2.373-4.253-2.407-7.583V41h7.479v18.09c0 2.915 1.328 4.373 3.985 4.373 2.536 0 4.279-.88 5.228-2.64V41h7.505V69h-7.04l-.207-2.847zm28.623-18.142a20.322 20.322 0 00-2.692-.207c-2.83 0-4.684.958-5.564 2.873V69h-7.479V40.999h7.065l.207 3.338c1.501-2.57 3.58-3.856 6.237-3.856.828 0 1.605.113 2.33.337l-.104 7.194zm14.569 11.853l5.202-18.866h7.815L108.013 69h-7.143l-9.446-28.001h7.816l5.201 18.866zm28.855 9.653c-4.106 0-7.453-1.26-10.041-3.779-2.57-2.519-3.856-5.874-3.856-10.067v-.724c0-2.812.544-5.323 1.631-7.531 1.087-2.226 2.622-3.934 4.606-5.124 2.002-1.208 4.279-1.812 6.832-1.812 3.83 0 6.841 1.208 9.032 3.623 2.208 2.416 3.312 5.84 3.312 10.274v3.054h-17.83c.241 1.829.966 3.295 2.174 4.4 1.225 1.104 2.769 1.656 4.632 1.656 2.881 0 5.133-1.044 6.754-3.132l3.675 4.115c-1.121 1.587-2.639 2.83-4.554 3.727-1.915.88-4.038 1.32-6.367 1.32zm-.854-22.98c-1.483 0-2.691.5-3.623 1.5-.914 1-1.501 2.433-1.759 4.296h10.403v-.595c-.035-1.656-.483-2.933-1.346-3.83-.862-.915-2.087-1.372-3.675-1.372zm26.733 11.878l5.176-17.417h8.023l-11.258 32.349-.621 1.475c-1.673 3.657-4.434 5.486-8.281 5.486-1.087 0-2.191-.164-3.313-.492V74.15l1.139.026c1.415 0 2.467-.216 3.157-.647.708-.431 1.26-1.147 1.657-2.148l.879-2.303-9.808-28.079h8.049l5.201 17.416z"/></svg>',
	  };
	}
	constructor({data, config}) {
		this.data = data;
		this.wrapper = undefined;
		this.section = undefined;
		this.config = config || {};
	  this.container = undefined;
	  this.count = this.defineInitialQuantity(); // initial count of options. serve like index for options in deleting them from the flow and for 'checked items' functionalty
	  this.quantity = 0; //total amount options in test, incriment on step loop or after 'add_option_btn' cliked; decriment after 'delete_block_btn' clicked
	}

	defineInitialQuantity() {
		if(this.data.comments) {
			console.log(this.data.comments);
			return this.data.comments.length; // QA amount of previosly saved test
		} else {
		return 2; // default value
		}
	}

	createNewBlockElement(step) {
		this.quantity++; 
		let index = step;
		let block = utils.make('div', ['p-1', 'mx-4', 'mb-4', 'bg-white', 'rounded', 'cursor-move'], {id: `block_${step}`});
				block.setAttribute('name', 'survey_block');
			// header
			let header = utils.make('div', ['flex', 'items-center', 'justify-between', 'p-4']);
			// content div. we define it here for eventListenner of option_content_swap_btn
			let content = utils.make('section', ['-mt-4'], {id: `content_section_${step}`});
			utils.appendMany(block, [header, content]);
				// header content
				let title = utils.make('span', ['text-xs', 'font-semibold', 'px-4', 'py-1']);
				title.innerHTML = `Survey #${step+1}`;
				//wrapper arround header btn block for flex rendering
				let content_header_block_btn = utils.make('section');
					// collapse/expand content btn
	  	    let option_content_swap_btn = utils.make('span', ['px-2', 'py-1', 'bg-gray-100', 'hover:bg-gray-980', 'hover:text-white', 'cursor-pointer', 'text-xs', 'font-semibold', 'rounded', 'mr-4']);
	  	    option_content_swap_btn.innerHTML = "Сollapse";
	  	    option_content_swap_btn.addEventListener('click', () => {
	  	    	if (content.classList.contains('hidden')) {
	  	    		content.classList.remove('hidden');
	  	    		option_content_swap_btn.innerHTML = "Сollapse";
	  	    	} else {
		  	    	content.classList.add('hidden');
		  	    	option_content_swap_btn.innerHTML = "Expand";
	  	    	}
	  	    })
	  	    // delete content btn
					let delete_block_btn = utils.make('span', ['text-xs', 'font-semibold', 'px-2', 'py-1', 'bg-red-400', 'hover:bg-red-500', 'cursor-pointer', 'text-white', 'rounded']);
					delete_block_btn.innerHTML = 'Remove';
					delete_block_btn.addEventListener('click', () => {
						let action = confirm(`Block ${index+1} will be deleted from the flow`);
						if (action) {
							document.querySelector(`#block_${index}`).remove();
							this.quantity--;
						}
					});
				// header assembling process	
				utils.appendMany(content_header_block_btn, [option_content_swap_btn, delete_block_btn]);
			utils.appendMany(header, [title, content_header_block_btn]);
	  	// mentor div
	    let mentor_span = utils.make('div', ['p-4', 'm-4', 'rounded', 'bg-gray-100', 'cursor-auto'], {id: `survey_${step}`, contentEditable: true});
	    mentor_span.innerHTML = this.data.comments && this.data.comments[step] ? this.data.comments[step].text : `
	      Вопрос ментора #${step+1}
	    `;
		content.appendChild(mentor_span);
		this.section.appendChild(block);
	}
	createOutro() {
		let outroContainer = utils.make('div', ['p-1', 'mx-4', 'mb-4', 'bg-white', 'rounded', 'order-last'], {id: "outro"} );
			// header
			let header = utils.make('div', ['flex', 'items-center', 'justify-between', 'p-4']);
			// content block
			let content = utils.make('section', ['-mt-4'], {id: "outro_content_section"});
			utils.appendMany(outroContainer, [header, content]);
		  	let title = utils.make('div', ['text-xs', 'font-semibold', 'px-4', 'py-1']);
		  	title.innerHTML = "Conclusion";
  			//wrapper arround header btn block for flex rendering
  			let content_header_block_btn = utils.make('section');
  				// collapse/expand content btn
    	    let option_content_swap_btn = utils.make('span', ['px-2', 'py-1', 'bg-gray-100', 'hover:bg-gray-980', 'hover:text-white', 'cursor-pointer', 'text-xs', 'font-semibold', 'rounded', 'mr-4']);
    	    option_content_swap_btn.innerHTML = "Сollapse";
    	    option_content_swap_btn.addEventListener('click', () => {
    	    	if (content.classList.contains('hidden')) {
    	    		content.classList.remove('hidden');
    	    		option_content_swap_btn.innerHTML = "Сollapse";
    	    	} else {
  	  	    	content.classList.add('hidden');
  	  	    	option_content_swap_btn.innerHTML = "Expand";
    	    	}
    	    })
    	    // delete content btn
  				let delete_block_btn = utils.make('span', ['text-xs', 'font-semibold', 'px-2', 'py-1', 'bg-red-400', 'hover:bg-red-500', 'cursor-pointer', 'text-white', 'rounded']);
  				delete_block_btn.innerHTML = 'Remove';
  				delete_block_btn.addEventListener('click', () => {
  					let action = confirm(`Conclusion will be deleted from the flow`);
  					if (action) {
  						this.add_outro_btn.classList.remove('hidden');
  						document.querySelector(`#outro`).remove();
  					}
  				});
  			utils.appendMany(content_header_block_btn, [option_content_swap_btn, delete_block_btn]);
  	    utils.appendMany(header, [title, content_header_block_btn]);
				let outro = utils.make('div', ['p-4', 'm-4', 'rounded', 'bg-gray-100'], {id: 'outro_text', contentEditable: true});
		    outro.innerHTML = this.data && this.data.outro ? this.data.outro : `
		    	Напишите тут заверщающее обращение к студенту
		    `;
		    content.appendChild(outro);
  			// header assembling process	
    this.wrapper.appendChild(outroContainer);
	}

	render() {
		this.wrapper = utils.make('div', ['bg-gray-200', 'pt-4', 'm-6', 'rounded', 'flex', 'flex-col', 'w-full', 'text-sm', 'mx-auto'], {id: "SchoolSurvey"});
  	
		let introContainer = utils.make('div', ['flex', 'items-center', 'p-1', 'mx-4', 'mb-4', 'bg-white', 'rounded', 'order-1'] );
				let text_block = utils.make('div', ['flex-1', 'mr-2']);	
			  	let intro_title = utils.make('div', ['text-xs', 'font-semibold', 'px-8', 'mt-3', '-mb-1']);
			  	intro_title.innerHTML = "Условие задачи";

					let intro = utils.make('div', ['p-4', 'm-4', 'rounded', 'bg-gray-100'], {id: "intro", contentEditable: true});
			    intro.innerHTML = this.data && this.data.intro ? this.data.intro : `
			    	Поле <b>Intro</b> является универсальным для всех типов динамических компонентов. 
			    	Данное поле используется для дальнейшей персонализации экзепляров объекта в правом окне модуля Pool. По тексту этого поля в будущем будет происходить поиск контента.
			    	В этом поле формулируется вопрос Теста(Test), ставится задача на Квиз(Quiz) или Кейс(Case). Определяется суть модуля Router. Формулируется цель Опроса(Survey). 
			    	В модуле Survey это поле может использоваться для первого вопроса. 
			    `;
  	    utils.appendMany(text_block, [intro_title, intro]);
  	    let form = utils.imageUpload(this.data);
	    utils.appendMany(introContainer, [text_block, form]);
    this.wrapper.appendChild(introContainer);

    const button_set = utils.make('div');
    button_set.classList.add('flex', 'justify-start', 'my-4', 'ml-4', 'order-2');
      const add_option_btn = utils.make('button');
	    add_option_btn.classList.add('component_btn_module', 'mr-4', 'bg-white');
	    add_option_btn.innerHTML="Add survey";
	    add_option_btn.addEventListener('click', () => this.createNewBlockElement(this.quantity));  
	    // Conclusion btn
      this.add_outro_btn = utils.make('button');
	    this.add_outro_btn.classList.add('component_btn_module', 'mr-4', 'bg-white');
	    this.add_outro_btn.innerHTML="Add conclusion";
	    this.add_outro_btn.addEventListener('click', () => {
	    	this.add_outro_btn.classList.add('hidden');
	    	this.createOutro();
	    });  
	    // author_btn defined first. it have to exists before this.checkAuthorExistsInData() to correct set eventListener
	    const author_btn = utils.make('button');
	    author_btn.setAttribute("id", "author_btn");
	    // check author_exists and set class 'hide' for author_btn
	    author_btn.classList.add('component_btn_module', 'mr-4', 'bg-white');
	    author_btn.innerHTML="Add Author";
	    if (utils.checkAuthorExistsInData(this.data)) {
	    	author_btn.classList.add('hidden');
	    	this.wrapper.appendChild(utils.createAuthorBlock(this.data));
	    }
	    author_btn.addEventListener('click', () => {
	    	author_btn.classList.add('hidden');
	    	this.wrapper.appendChild(utils.createAuthorBlock(this.data));
	    });

		  utils.appendMany(button_set, [add_option_btn, this.add_outro_btn, author_btn]);  
	  this.wrapper.appendChild(button_set);
	  // add empty container for sortable items
	  this.section = utils.make('section', ['order-3'], {id: 'sortable'});
	  Sortable.create(this.section);
	  this.wrapper.appendChild(this.section);
	  // initial creation of N-variants based on data input or predefined 2 options
		var step;
		for (step = 0; step < this.count; step++) {
			this.createNewBlockElement(step);
    }

  	return this.wrapper;
  }

  static get sanitize() {
    return {
      intro: true,
      outro: true,
      comments: true,
      author: true,
      img: true
    };
  }
 
  save(blockContent) {
  	let author = null;
  	if (document.getElementById('author_btn').classList.contains('hidden')) {
  		author = {
  			name: document.getElementById('author_name').innerHTML || '',
  			company: document.getElementById('author_company').innerHTML || '',
  			position: document.getElementById('author_position').innerHTML || '',
  		}
  	}

  	let comments = [];
		let actual_indexes = Array.from(document.getElementsByName('survey_block')).map(item => item.id.replace("block_", ""));
  	for (var i = 0; i < this.quantity; i++) {
  		comments.push({ id: i, text: document.getElementById('survey_'+actual_indexes[i]).innerHTML || ''});
  	}
  	let intro = document.getElementById('intro').innerHTML || '';
  	// record unique outro if exists
  	let outro = null; 
  	if (document.getElementById('outro')) {
	  	outro = document.getElementById('outro_text').innerHTML || '';
  	}
  	let img = document.getElementById('uploadedImage').src.split('/img/uploads/')[1];

    return { intro, outro, comments, author, img }
  }

}

export default SchoolSurvey