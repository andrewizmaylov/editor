import * as utils from './editorUtility.js';

class SchoolCase {

	static get toolbox() {
	  return {
	    title: 'SchoolCase',
	    icon: '<svg class="w-8 h-8" viewBox="0 0 183 126" xmlns="http://www.w3.org/2000/svg"><path d="M100.43 9.08H63.51c-2.39 0-4.57.41-6.54 1.22-1.98.82-3.81 2.06-5.48 3.74l.01.01c-.68.68-1.28 1.38-1.82 2.1-3.02.12-5.92.57-8.71 1.35.08-.22.17-.44.26-.65 1.19-2.88 2.94-5.48 5.27-7.8l.01.01.01-.01c2.33-2.33 4.93-4.08 7.79-5.26C57.15 2.59 60.22 2 63.51 2H117.16c3.28 0 6.36.59 9.23 1.77 2.88 1.19 5.48 2.94 7.8 5.26l-.01.01c2.34 2.34 4.09 4.94 5.27 7.79 1.18 2.87 1.77 5.94 1.77 9.23v.09h-7.08v-.09c0-2.39-.41-4.57-1.22-6.54-.82-1.98-2.06-3.81-3.73-5.48l-.01-.01-.01.01c-1.69-1.69-3.51-2.93-5.48-3.74-1.97-.81-4.16-1.22-6.54-1.22h-16.72zM47.84 83.07c.81 1.88 2.03 3.62 3.64 5.24l.16.17c1.63 1.58 3.41 2.78 5.34 3.57 1.97.81 4.15 1.22 6.53 1.22h15.86a3.54 3.54 0 013.54 3.54c0 .42-.07.83-.21 1.21-.58 2.24-1.25 4.44-1.99 6.58-.78 2.25-1.63 4.42-2.56 6.49a28 28 0 01-1.37 2.74c3.07-1.39 5.95-2.97 8.65-4.75h.01l-.01-.01a60.51 60.51 0 008.27-6.49c2.57-2.41 4.91-5.04 7.04-7.87.69-.92 1.75-1.41 2.82-1.41v-.01h13.61c2.38 0 4.56-.41 6.53-1.22 1.99-.82 3.83-2.07 5.51-3.74 1.67-1.67 2.91-3.5 3.73-5.48l.08-.2h7.42c-.26.99-.58 1.95-.97 2.89-1.18 2.86-2.94 5.47-5.28 7.81-2.34 2.32-4.94 4.08-7.8 5.26-2.86 1.18-5.93 1.78-9.21 1.78h-11.9c-2.09 2.65-4.34 5.1-6.75 7.36a66.791 66.791 0 01-9.23 7.27l-.01-.01a70.557 70.557 0 01-10.57 5.72c-3.73 1.63-7.7 2.99-11.89 4.08-1.24.32-2.62-.05-3.53-1.08a3.537 3.537 0 01.3-4.98c1.87-1.66 3.46-3.33 4.78-5.01l.15-.21c1.33-1.72 2.38-3.47 3.15-5.23l.01-.03c.87-1.94 1.66-3.92 2.35-5.93.22-.64.44-1.29.65-1.95H63.51c-3.28 0-6.35-.6-9.21-1.78-2.78-1.15-5.31-2.84-7.6-5.06-.08-.06-.15-.13-.22-.2-2.32-2.32-4.08-4.92-5.26-7.8-.52-1.26-.92-2.56-1.22-3.91 2.48.72 5.09 1.21 7.84 1.43zM61.944 56.449c-.293 4.054-1.794 7.246-4.503 9.575-2.692 2.329-6.245 3.494-10.662 3.494-4.83 0-8.635-1.622-11.413-4.866-2.76-3.26-4.14-7.729-4.14-13.405v-2.303c0-3.623.638-6.815 1.915-9.575 1.276-2.76 3.096-4.874 5.46-6.34 2.38-1.484 5.141-2.226 8.281-2.226 4.348 0 7.85 1.164 10.507 3.493 2.657 2.33 4.192 5.599 4.607 9.809h-7.764c-.19-2.433-.871-4.193-2.044-5.28-1.156-1.104-2.925-1.656-5.306-1.656-2.588 0-4.529.932-5.822 2.795-1.277 1.846-1.933 4.718-1.967 8.617v2.847c0 4.072.612 7.048 1.837 8.928 1.242 1.881 3.192 2.821 5.849 2.821 2.398 0 4.184-.543 5.357-1.63 1.19-1.104 1.872-2.804 2.044-5.098h7.764zM82.776 69c-.345-.673-.595-1.51-.75-2.51-1.812 2.018-4.167 3.028-7.065 3.028-2.743 0-5.02-.794-6.832-2.381-1.794-1.588-2.692-3.589-2.692-6.004 0-2.968 1.096-5.245 3.287-6.832 2.209-1.587 5.392-2.39 9.55-2.407h3.441V50.29c0-1.294-.336-2.33-1.009-3.106-.656-.776-1.7-1.164-3.131-1.164-1.26 0-2.252.301-2.976.905-.708.604-1.061 1.432-1.061 2.485h-7.48c0-1.622.5-3.123 1.502-4.503 1-1.38 2.415-2.459 4.244-3.235 1.828-.794 3.882-1.19 6.159-1.19 3.45 0 6.185.87 8.204 2.613 2.035 1.726 3.053 4.158 3.053 7.298V62.53c.017 2.657.388 4.667 1.113 6.03V69h-7.557zm-6.185-5.202a6.534 6.534 0 003.054-.724c.932-.5 1.622-1.165 2.07-1.993v-4.813H78.92c-3.743 0-5.736 1.294-5.978 3.881l-.025.44c0 .932.327 1.7.983 2.304.655.603 1.553.905 2.691.905zm33.539-2.536c0-.914-.457-1.63-1.371-2.148-.897-.535-2.347-1.009-4.348-1.423-6.66-1.398-9.99-4.227-9.99-8.488 0-2.485 1.027-4.555 3.08-6.211 2.07-1.674 4.771-2.51 8.101-2.51 3.554 0 6.392.836 8.514 2.51 2.139 1.673 3.209 3.847 3.209 6.521h-7.479c0-1.07-.345-1.95-1.035-2.64-.691-.707-1.769-1.06-3.235-1.06-1.26 0-2.235.284-2.925.853-.69.57-1.035 1.294-1.035 2.174 0 .828.388 1.501 1.165 2.019.793.5 2.122.94 3.985 1.32 1.863.362 3.433.776 4.71 1.242 3.951 1.45 5.926 3.96 5.926 7.53 0 2.554-1.095 4.624-3.286 6.212-2.191 1.57-5.021 2.355-8.489 2.355-2.346 0-4.433-.415-6.262-1.243-1.812-.845-3.235-1.992-4.27-3.442-1.035-1.466-1.553-3.045-1.553-4.735h7.091c.069 1.328.561 2.346 1.475 3.053.914.708 2.139 1.061 3.675 1.061 1.432 0 2.51-.267 3.235-.802.741-.552 1.112-1.268 1.112-2.148zm24.999 8.256c-4.106 0-7.453-1.26-10.041-3.779-2.57-2.519-3.856-5.874-3.856-10.067v-.724c0-2.812.544-5.323 1.631-7.531 1.087-2.226 2.622-3.934 4.606-5.124 2.002-1.208 4.279-1.812 6.832-1.812 3.83 0 6.841 1.208 9.032 3.623 2.208 2.416 3.313 5.84 3.313 10.274v3.054h-17.831c.241 1.829.966 3.295 2.174 4.4 1.225 1.104 2.769 1.656 4.632 1.656 2.881 0 5.133-1.044 6.754-3.132l3.675 4.115c-1.121 1.587-2.639 2.83-4.554 3.727-1.915.88-4.038 1.32-6.367 1.32zm-.854-22.98c-1.483 0-2.691.5-3.623 1.5-.914 1-1.501 2.433-1.759 4.296h10.403v-.595c-.035-1.656-.483-2.933-1.346-3.83-.862-.915-2.087-1.372-3.675-1.372z"/></svg>',
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
					let delete_block_btn = utils.make('span', ['text-xs', 'font-semibold', 'px-4', 'py-1', 'bg-red-400', 'hover:bg-red-500', 'cursor-pointer', 'text-white', 'rounded']);
					delete_block_btn.innerHTML = 'Remove';
					delete_block_btn.addEventListener('click', () => {
						let action = confirm(`Block ${index} will be deleted from the flow`);
						if (action) {
							document.querySelector(`#block_${index}`).remove();
							this.quantity--;
						}
					});
				// header assembling process	
				utils.appendMany(content_header_block_btn, [option_content_swap_btn, delete_block_btn]);
				
			utils.appendMany(header, [title, answer_checkbox, content_header_block_btn]);
			// option block of content (defined early for eventListener setup)
		    let answer_span = utils.make('div', ['p-4', 'm-4', 'rounded', 'bg-gray-100'], {id: `answer_${step}`, contentEditable: true})
		    answer_span.innerHTML = this.data.options && this.data.options[step] ? this.data.options[step].text : `Вариант ответа ${step+1}`;
		content.appendChild(answer_span);
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
		this.wrapper = utils.make('div', ['bg-gray-200', 'pt-4', 'm-6', 'rounded', 'flex', 'flex-col', 'w-full', 'text-sm', 'mx-auto'], {id: "SchoolCase"});

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
	    // author_btn defined firs. it have to exists before this.checkAuthorExistsInData() to correct set eventListener
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

  	let solutionContainer = utils.make('div', ['p-1', 'mx-4', 'mb-4', 'bg-white', 'rounded', 'order-last'] );
	  	let solution_title = utils.make('div', ['text-xs', 'font-semibold', 'px-8', 'mt-3', '-mb-1']);
	  	solution_title.innerHTML = "Решение задачи";

			const schoolCase = utils.make('div', ['p-4', 'm-4', 'rounded', 'bg-gray-100'], {id: "schoolCase", contentEditable: true});
	    schoolCase.innerHTML = this.data && this.data.schoolCase ? this.data.schoolCase : `
	    	Case solution. 
	    `;
    utils.appendMany(solutionContainer, [solution_title, schoolCase]);
    this.wrapper.appendChild(solutionContainer);
  	return this.wrapper;
  }

  static get sanitize() {
    return {
      intro: true,
      schoolCase: true,
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
		let actual_indexes = Array.from(document.getElementsByName('option_block')).map(item => item.id.replace("block_", ""));
  	for (var i = 0; i < this.quantity; i++) {
  		options.push({ id: i, text: document.getElementById('answer_'+actual_indexes[i]).innerHTML || '', right: document.getElementById('checkbox_'+actual_indexes[i]).checked });
  	}
		let intro = document.getElementById('intro').innerHTML || '';
		let schoolCase = document.getElementById('schoolCase').innerHTML || '';
		let img = document.getElementById('uploadedImage').src.split('/img/uploads/')[1];

    return { intro, options, schoolCase, author, img }
  }

}

export default SchoolCase