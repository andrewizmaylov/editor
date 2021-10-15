import * as utils from './editorUtility.js';

class SchoolQuiz {

	static get toolbox() {
	  return {
	    title: 'SchoolQuiz',
	    icon: '<svg class="w-8 h-8" viewBox="0 0 183 126" xmlns="http://www.w3.org/2000/svg"><path d="M100.43 9.08H63.51c-2.39 0-4.57.41-6.54 1.22-1.98.82-3.81 2.06-5.48 3.74l.01.01c-.68.68-1.28 1.38-1.82 2.1-3.02.12-5.92.57-8.71 1.35.08-.22.17-.44.26-.65 1.19-2.88 2.94-5.48 5.27-7.8l.01.01.01-.01c2.33-2.33 4.93-4.08 7.79-5.26C57.15 2.59 60.22 2 63.51 2H117.16c3.28 0 6.36.59 9.23 1.77 2.88 1.19 5.48 2.94 7.8 5.26l-.01.01c2.34 2.34 4.09 4.94 5.27 7.79 1.18 2.87 1.77 5.94 1.77 9.23v.09h-7.08v-.09c0-2.39-.41-4.57-1.22-6.54-.82-1.98-2.06-3.81-3.73-5.48l-.01-.01-.01.01c-1.69-1.69-3.51-2.93-5.48-3.74-1.97-.81-4.16-1.22-6.54-1.22h-16.72zM47.84 83.07c.81 1.88 2.03 3.62 3.64 5.24l.16.17c1.63 1.58 3.41 2.78 5.34 3.57 1.97.81 4.15 1.22 6.53 1.22h15.86a3.54 3.54 0 013.54 3.54c0 .42-.07.83-.21 1.21-.58 2.24-1.25 4.44-1.99 6.58-.78 2.25-1.63 4.42-2.56 6.49a28 28 0 01-1.37 2.74c3.07-1.39 5.95-2.97 8.65-4.75h.01l-.01-.01a60.51 60.51 0 008.27-6.49c2.57-2.41 4.91-5.04 7.04-7.87.69-.92 1.75-1.41 2.82-1.41v-.01h13.61c2.38 0 4.56-.41 6.53-1.22 1.99-.82 3.83-2.07 5.51-3.74 1.67-1.67 2.91-3.5 3.73-5.48l.08-.2h7.42c-.26.99-.58 1.95-.97 2.89-1.18 2.86-2.94 5.47-5.28 7.81-2.34 2.32-4.94 4.08-7.8 5.26-2.86 1.18-5.93 1.78-9.21 1.78h-11.9c-2.09 2.65-4.34 5.1-6.75 7.36a66.791 66.791 0 01-9.23 7.27l-.01-.01a70.557 70.557 0 01-10.57 5.72c-3.73 1.63-7.7 2.99-11.89 4.08-1.24.32-2.62-.05-3.53-1.08a3.537 3.537 0 01.3-4.98c1.87-1.66 3.46-3.33 4.78-5.01l.15-.21c1.33-1.72 2.38-3.47 3.15-5.23l.01-.03c.87-1.94 1.66-3.92 2.35-5.93.22-.64.44-1.29.65-1.95H63.51c-3.28 0-6.35-.6-9.21-1.78-2.78-1.15-5.31-2.84-7.6-5.06-.08-.06-.15-.13-.22-.2-2.32-2.32-4.08-4.92-5.26-7.8-.52-1.26-.92-2.56-1.22-3.91 2.48.72 5.09 1.21 7.84 1.43zM67.264 51.014c0 3.52-.57 6.582-1.708 9.187-1.139 2.588-2.718 4.667-4.736 6.237l6.262 4.917-4.942 4.373-8.023-6.443a16.99 16.99 0 01-2.846.233c-3.123 0-5.91-.75-8.36-2.252-2.45-1.5-4.347-3.64-5.693-6.418-1.345-2.795-2.027-6.004-2.044-9.627v-1.863c0-3.71.664-6.97 1.992-9.782 1.346-2.83 3.235-4.995 5.668-6.496 2.45-1.518 5.245-2.277 8.385-2.277 3.14 0 5.926.759 8.359 2.277 2.45 1.501 4.339 3.666 5.667 6.496 1.346 2.812 2.019 6.064 2.019 9.756v1.682zm-7.867-1.708c0-3.95-.708-6.953-2.123-9.006-1.414-2.053-3.433-3.08-6.055-3.08-2.605 0-4.615 1.019-6.03 3.054-1.415 2.019-2.13 4.986-2.148 8.903v1.837c0 3.847.707 6.832 2.122 8.954 1.415 2.122 3.45 3.183 6.108 3.183 2.605 0 4.606-1.018 6.003-3.053 1.398-2.053 2.105-5.038 2.123-8.954v-1.838zm30.898 16.847c-1.846 2.243-4.4 3.365-7.66 3.365-3.002 0-5.297-.863-6.884-2.588-1.57-1.726-2.372-4.253-2.407-7.583V41h7.48v18.09c0 2.915 1.328 4.373 3.984 4.373 2.537 0 4.28-.88 5.228-2.64V41h7.505V69h-7.04l-.206-2.847zM112.136 69h-7.505V40.999h7.505V69zm-7.945-35.247c0-1.121.371-2.044 1.113-2.77.759-.724 1.785-1.086 3.079-1.086 1.277 0 2.295.362 3.054 1.087.759.724 1.139 1.648 1.139 2.769 0 1.139-.389 2.07-1.165 2.795-.759.724-1.768 1.087-3.028 1.087-1.259 0-2.277-.362-3.054-1.087-.759-.725-1.138-1.656-1.138-2.795zm23.781 29.217h13.69V69h-23.239v-4.555l13.173-17.39h-12.785v-6.056h22.437v4.425L127.972 62.97z"/></svg>',
	  };
	}
	constructor({data, config}) {
		this.data = data;
		this.wrapper = undefined;
		this.config = config || {};
	  this.count = this.defineInitialQuantity(); // initial count of options. serve like index for options in deleting them from the flow and for 'checked items' functionalty
	  this.quantity = 0; //total amount options in test, incriment on step loop or after 'add_option_btn' cliked; decriment after 'delete_block_btn' clicked
	}

	defineInitialQuantity() {
		if(this.data.options) {
			return this.data.options.length; // QA amount of previosly saved test
		} else {
		return 2; // default value
		}
	}

	createNewBlockElement(step) {
		this.quantity++; 
		let index = step;
		let block = utils.make('div', ['p-1', 'mx-4', 'mb-4', 'bg-white', 'rounded', 'order-4'], {id: `block_${step}`});
			block.setAttribute("name", "option_block");
			// header
			let header = utils.make('div', ['flex', 'items-center', 'justify-between', 'p-4']);
			// content div. we define it here for eventListenner of option_content_swap_btn
			let content = utils.make('section', ['-mt-4'], {id: "content_section"});
			utils.appendMany(block, [header, content]);

				// header content
				let title = utils.make('span', ['text-xs', 'font-semibold', 'px-4', 'py-1']);
				title.innerHTML = `Вариант #${step+1}`;
				// chexbox input
				let answer_checkbox = utils.make("input", ['mr-auto', 'ml-2', 'rounded', 'cursor-pointer'], {type: "checkbox", id: `checkbox_${step}`});
				answer_checkbox.checked = this.data.comments && this.data.comments[step] ? this.data.comments[step].right : false;
				answer_checkbox.addEventListener('change', () => this.markRightOption(step));
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
				
			utils.appendMany(header, [title, answer_checkbox, content_header_block_btn]);
			// option block of content (defined early for eventListener setup)
		  let opt = utils.make('div', ['p-4', 'm-4', 'rounded', 'bg-gray-100'], {id: `option_${step}`, contentEditable: true});
		  opt.innerHTML = this.data.options && this.data.options[step] ? this.data.options[step].text : `
		    Вариант ответа ${step+1}
		  `;
		  // comment block of content (defined early for eventListener setup)
	    let answer_span = utils.make('div', ['p-4', 'm-4', 'rounded', 'bg-gray-100'], {id: `answer_${step}`, contentEditable: true})
	    answer_span.innerHTML = this.data.comments && this.data.comments[step] ? this.data.comments[step].text : `
	      Комментарий специалиста ${step}
	    `;
		utils.appendMany(content, [opt, answer_span]);
		this.wrapper.appendChild(block);
	}
	// select only one checkbox by filteriing all chexboxes array
	markRightOption(step) {
		let checkboxes = document.querySelectorAll("input[type=checkbox]");
		Array.from(checkboxes).filter(item => {
			if (Number(item.id.replace("checkbox_", "")) == step) {
				item.cheked = true;
			} else {
				item.checked = false;
			}
		})
	}	

	render() {
		this.wrapper = utils.make('div', ['bg-gray-200', 'pt-4', 'm-6', 'rounded', 'flex', 'flex-col', 'w-full', 'text-sm', 'mx-auto'], {id: "SchoolQuiz"});

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

    const button_set = utils.make('div', ['flex', 'justify-start', 'mb-3', 'ml-4', 'order-2']);
      const add_option_btn = utils.make('button', ['component_btn_no_decoration', 'mr-4', 'bg-white']);
	    add_option_btn.innerHTML="Add option";
	    add_option_btn.addEventListener('click', () => this.createNewBlockElement(this.quantity));  
	    // author_btn defined first. it have to exists before checkAuthorExistsInData() to correct set eventListener
	    const author_btn = utils.make('button', ['component_btn_no_decoration', 'mr-4', 'bg-white'], {id: "author_btn"});
	    // for define the author_exist property and class 'hide' for author_btn we check data.author and append block to the wrapper here
	    if (utils.checkAuthorExistsInData(this.data)) {
	    	this.wrapper.appendChild(utils.createAuthorBlock(this.data));
	    }
	    author_btn.innerHTML="Add Author";
	    if (utils.checkAuthorExistsInData(this.data)) {
	    	author_btn.classList.add('hidden');
	    }
	    author_btn.addEventListener('click', () => {
	    	author_btn.classList.add('hidden');
	    	this.wrapper.appendChild(utils.createAuthorBlock(this.data));
	    });

		  utils.appendMany(button_set, [add_option_btn, author_btn]);  
	  this.wrapper.appendChild(button_set);
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
      comments: true,
      options: true,
      author: true,
      img: true,
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
  	// validation for the checkbox selected
  	if (Array.from(document.querySelectorAll("input[type=checkbox]")).filter(i => i.checked).length == 0) {
  		alert('You have to mark the RIGHT ANSWER before save');
  		_stop = true;
  	}
  	let options = [];
  	let comments = [];
		let actual_indexes = Array.from(document.getElementsByName('option_block')).map(item => item.id.replace("block_", ""));
  	for (var i = 0; i < this.quantity; i++) {
  		options.push({ id: i, text: document.getElementById('option_'+actual_indexes[i]).innerHTML || '' });
  		comments.push({ id: i, text: document.getElementById('answer_'+actual_indexes[i]).innerHTML || '', right: document.getElementById('checkbox_'+actual_indexes[i]).checked });
  	}
		let intro = document.getElementById('intro').innerHTML || '';
		let img = document.getElementById('uploadedImage').src.split('/img/uploads/')[1];
    return { intro, options, comments, author, img }
  }

}

export default SchoolQuiz