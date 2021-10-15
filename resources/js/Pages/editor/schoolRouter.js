import * as utils from './editorUtility.js';

class SchoolRouter {

	static get toolbox() {
	  return {
	    title: 'SchoolRouter',
	    icon: '<svg class="w-8 h-8" viewBox="0 0 183 126" xmlns="http://www.w3.org/2000/svg"><path d="M100.43 9.08H63.51c-2.39 0-4.57.41-6.54 1.22-1.98.82-3.81 2.06-5.48 3.74l.01.01c-.68.68-1.28 1.38-1.82 2.1-3.02.12-5.92.57-8.71 1.35.08-.22.17-.44.26-.65 1.19-2.88 2.94-5.48 5.27-7.8l.01.01.01-.01c2.33-2.33 4.93-4.08 7.79-5.26C57.15 2.59 60.22 2 63.51 2H117.16c3.28 0 6.36.59 9.23 1.77 2.88 1.19 5.48 2.94 7.8 5.26l-.01.01c2.34 2.34 4.09 4.94 5.27 7.79 1.18 2.87 1.77 5.94 1.77 9.23v.09h-7.08v-.09c0-2.39-.41-4.57-1.22-6.54-.82-1.98-2.06-3.81-3.73-5.48l-.01-.01-.01.01c-1.69-1.69-3.51-2.93-5.48-3.74-1.97-.81-4.16-1.22-6.54-1.22h-16.72zM47.84 83.07c.81 1.88 2.03 3.62 3.64 5.24l.16.17c1.63 1.58 3.41 2.78 5.34 3.57 1.97.81 4.15 1.22 6.53 1.22h15.86a3.54 3.54 0 013.54 3.54c0 .42-.07.83-.21 1.21-.58 2.24-1.25 4.44-1.99 6.58-.78 2.25-1.63 4.42-2.56 6.49a28 28 0 01-1.37 2.74c3.07-1.39 5.95-2.97 8.65-4.75h.01l-.01-.01a60.51 60.51 0 008.27-6.49c2.57-2.41 4.91-5.04 7.04-7.87.69-.92 1.75-1.41 2.82-1.41v-.01h13.61c2.38 0 4.56-.41 6.53-1.22 1.99-.82 3.83-2.07 5.51-3.74 1.67-1.67 2.91-3.5 3.73-5.48l.08-.2h7.42c-.26.99-.58 1.95-.97 2.89-1.18 2.86-2.94 5.47-5.28 7.81-2.34 2.32-4.94 4.08-7.8 5.26-2.86 1.18-5.93 1.78-9.21 1.78h-11.9c-2.09 2.65-4.34 5.1-6.75 7.36a66.791 66.791 0 01-9.23 7.27l-.01-.01a70.557 70.557 0 01-10.57 5.72c-3.73 1.63-7.7 2.99-11.89 4.08-1.24.32-2.62-.05-3.53-1.08a3.537 3.537 0 01.3-4.98c1.87-1.66 3.46-3.33 4.78-5.01l.15-.21c1.33-1.72 2.38-3.47 3.15-5.23l.01-.03c.87-1.94 1.66-3.92 2.35-5.93.22-.64.44-1.29.65-1.95H63.51c-3.28 0-6.35-.6-9.21-1.78-2.78-1.15-5.31-2.84-7.6-5.06-.08-.06-.15-.13-.22-.2-2.32-2.32-4.08-4.92-5.26-7.8-.52-1.26-.92-2.56-1.22-3.91 2.48.72 5.09 1.21 7.84 1.43zM30.313 55.206h-6.185V69h-7.764V31.32h14c4.452 0 7.885.992 10.3 2.976 2.416 1.984 3.624 4.788 3.624 8.411 0 2.57-.561 4.719-1.682 6.444-1.105 1.708-2.787 3.07-5.047 4.089l8.152 15.398V69h-8.333l-7.065-13.794zm-6.185-6.288h6.263c1.95 0 3.459-.492 4.528-1.475 1.07-1 1.605-2.372 1.605-4.115 0-1.777-.509-3.174-1.527-4.192-1-1.018-2.545-1.527-4.632-1.527h-6.237v11.309zm24.43 5.823c0-2.778.534-5.254 1.604-7.428 1.07-2.173 2.605-3.855 4.607-5.046 2.018-1.19 4.356-1.786 7.013-1.786 3.778 0 6.858 1.156 9.239 3.468 2.398 2.312 3.735 5.452 4.01 9.42l.052 1.915c0 4.296-1.199 7.747-3.597 10.352-2.398 2.588-5.615 3.882-9.653 3.882-4.037 0-7.263-1.294-9.678-3.882-2.398-2.588-3.597-6.108-3.597-10.559v-.336zm7.479.543c0 2.657.5 4.693 1.5 6.108 1.001 1.397 2.433 2.096 4.297 2.096 1.811 0 3.226-.69 4.244-2.07 1.017-1.398 1.526-3.624 1.526-6.677 0-2.605-.508-4.624-1.526-6.056-1.018-1.432-2.45-2.148-4.296-2.148-1.829 0-3.244.716-4.244 2.148-1.001 1.415-1.501 3.614-1.501 6.6zm40.423 10.87c-1.847 2.242-4.4 3.364-7.66 3.364-3.003 0-5.297-.863-6.885-2.588-1.57-1.726-2.372-4.253-2.406-7.583V41h7.479v18.09c0 2.915 1.328 4.373 3.985 4.373 2.536 0 4.279-.88 5.228-2.64V41h7.505V69h-7.04l-.206-2.847zM118.3 34.114V41h4.788v5.486h-4.788V60.46c0 1.035.199 1.777.595 2.225.397.45 1.156.673 2.278.673.828 0 1.561-.06 2.2-.18v5.667a15.403 15.403 0 01-4.529.673c-5.245 0-7.919-2.649-8.023-7.945V46.485h-4.089V41h4.089v-6.884h7.479zm21.842 35.403c-4.106 0-7.453-1.26-10.041-3.779-2.571-2.519-3.856-5.874-3.856-10.067v-.724c0-2.812.544-5.323 1.63-7.531 1.087-2.226 2.623-3.934 4.607-5.124 2.001-1.208 4.279-1.812 6.832-1.812 3.83 0 6.841 1.208 9.032 3.623 2.208 2.416 3.312 5.84 3.312 10.274v3.054h-17.83c.241 1.829.966 3.295 2.173 4.4 1.225 1.104 2.769 1.656 4.633 1.656 2.881 0 5.132-1.044 6.754-3.132l3.675 4.115c-1.121 1.587-2.64 2.83-4.555 3.727-1.915.88-4.037 1.32-6.366 1.32zm-.854-22.98c-1.484 0-2.691.5-3.623 1.5-.914 1-1.501 2.433-1.76 4.296h10.404v-.595c-.035-1.656-.484-2.933-1.346-3.83-.863-.915-2.088-1.372-3.675-1.372zm32.375 1.474a20.323 20.323 0 00-2.692-.207c-2.829 0-4.684.958-5.564 2.873V69h-7.479V40.999h7.065l.207 3.338c1.501-2.57 3.58-3.856 6.237-3.856.828 0 1.604.113 2.329.337l-.103 7.194z"/></svg>',
	  };
	}
		constructor({data, config}) {
			this.data = data;
			this.wrapper = undefined;
			this.config = config || {};
		  this.container = undefined;
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
						title.innerHTML = `Утверждение #${step+1}`;
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
						
					utils.appendMany(header, [title, content_header_block_btn]);
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

		render() {
			this.wrapper = utils.make('div', ['bg-gray-200', 'pt-4', 'm-6', 'rounded', 'flex', 'flex-col', 'w-full', 'text-sm', 'mx-auto'], {id: "SchoolCase"});

			let introContainer = utils.make('div', ['flex', 'items-center', 'p-1', 'mx-4', 'mb-4', 'bg-white', 'rounded', 'order-1'] );
				let text_block = utils.make('div', ['flex-1', 'mr-2']);
				  	let intro_title = utils.make('div', ['text-xs', 'font-semibold', 'px-8', 'mt-3', '-mb-1']);
				  	intro_title.innerHTML = "Условие задачи";

					const intro = utils.make('div', ['p-4', 'm-4', 'rounded', 'bg-gray-100'], {id: "intro", contentEditable: true});
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
			  utils.appendMany(button_set, [add_option_btn]);  
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
	      options: true,
	      comments: true,
	      img: true,
	    };
	  }

	  save(blockContent) {
	  	let options = [];
	  	let comments = [];
			let actual_indexes = Array.from(document.getElementsByName('option_block')).map(item => item.id.replace("block_", ""));
	  	for (var i = 0; i < this.quantity; i++) {
	  		options.push({ id: i, text: document.getElementById('option_'+actual_indexes[i]).innerHTML || '' });
	  		comments.push({ id: i, text: document.getElementById('answer_'+actual_indexes[i]).innerHTML || '' });
	  	}
			let intro = document.getElementById('intro').innerHTML || '';
			let img = document.getElementById('uploadedImage').src.split('/img/uploads/')[1];
			
	    return { intro, options, comments, img }
	  }

}

export default SchoolRouter