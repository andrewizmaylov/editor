class Card {

	static get toolbox() {
	  return {
	    title: 'TestForm',
	    icon: '<svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 488"><path d="M448.9 125.7c0-.1-.1-.3-.1-.4 0-.2-.1-.3-.1-.5 0-.1-.1-.3-.1-.4-.1-.2-.1-.3-.2-.5 0-.1-.1-.3-.1-.4-.1-.3-.2-.5-.4-.8-.1-.1-.1-.2-.2-.3-.1-.2-.2-.3-.3-.5-.1-.1-.1-.2-.2-.3-.1-.1-.1-.2-.2-.3L357 3.9l-.1-.1c-.2-.2-.3-.4-.5-.6-.1-.1-.1-.2-.2-.2-.2-.3-.5-.5-.8-.7l-.1-.1c-.3-.2-.5-.4-.8-.6-.1-.1-.2-.1-.3-.2-.2-.1-.4-.3-.7-.4-.1 0-.2-.1-.3-.1-.2-.1-.5-.2-.7-.3-.1 0-.2-.1-.3-.1-.2-.1-.5-.2-.7-.2-.1 0-.2-.1-.3-.1-.3-.1-.5-.1-.8-.1h-.3c-.4 0-.7-.1-1.1-.1H49c-5.5 0-10 4.5-10 10v468c0 5.5 4.5 10 10 10h390c5.5 0 10-4.5 10-10V127.4v-.8-.3c0-.2-.1-.4-.1-.6zm-30.2-8.2h-59.5l-.2-77.8 59.7 77.8zM429 468.1H59v-448h280l.2 107.4c0 5.5 4.5 10 10 10H429v330.6z"/><path d="M101.3 183.1c0 5.5 4.5 10 10 10h266.2c5.5 0 10-4.5 10-10s-4.5-10-10-10H111.3c-5.5 0-10 4.5-10 10zM111.3 132.1h173.9c5.5 0 9.9-4.5 9.9-10s-4.5-10-10-10H111.3c-5.5 0-10 4.5-10 10s4.5 10 10 10zM111.3 254.1h266.2c5.5 0 10-4.5 10-10s-4.5-10-10-10H111.3c-5.5 0-10 4.5-10 10s4.5 10 10 10zM285.2 315.1c5.5 0 9.9-4.5 9.9-10s-4.5-10-10-10H111.3c-5.5 0-10 4.5-10 10s4.5 10 10 10h173.9zM370.9 327.9l-84.2 74.4-24.3-32.5c-3.3-4.4-9.6-5.3-14-2s-5.3 9.6-2 14l30.8 41.2c1.7 2.3 4.2 3.7 7 4 .3.1.7.1 1 .1 2.4 0 4.7-.9 6.6-2.6l92.3-81.6c4.2-3.6 4.6-10 .9-14.1-3.6-4.2-10-4.6-14.1-.9z"/></svg>'
	    // icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M375.451 315.733a8.536 8.536 0 00-8.533-8.533h-51.2c-4.71 0-8.533 3.823-8.533 8.533s3.823 8.533 8.533 8.533h51.2c4.71.001 8.533-3.822 8.533-8.533zM341.317 93.867V51.2c0-4.71-3.823-8.533-8.533-8.533s-8.533 3.823-8.533 8.533v42.667c0 23.526 19.14 42.667 42.667 42.667h76.8v162.133c0 4.71 3.823 8.533 8.533 8.533s8.533-3.823 8.533-8.533V128a8.536 8.536 0 00-8.533-8.533h-85.333c-14.115 0-25.601-11.486-25.601-25.6zM366.917 204.8H298.65a8.536 8.536 0 00-8.533 8.533 8.536 8.536 0 008.533 8.533h68.267a8.536 8.536 0 008.533-8.533c.001-4.71-3.822-8.533-8.533-8.533zM273.051 213.333a8.536 8.536 0 00-8.533-8.533h-51.2a8.536 8.536 0 00-8.533 8.533 8.536 8.536 0 008.533 8.533h51.2c4.71.001 8.533-3.822 8.533-8.533zM213.317 256a8.536 8.536 0 00-8.533 8.533 8.536 8.536 0 008.533 8.533h17.067a8.536 8.536 0 008.533-8.533 8.536 8.536 0 00-8.533-8.533h-17.067zM213.317 170.667h85.333a8.536 8.536 0 008.533-8.533 8.536 8.536 0 00-8.533-8.533h-85.333a8.536 8.536 0 00-8.533 8.533 8.536 8.536 0 008.533 8.533zM264.517 273.067h85.333a8.536 8.536 0 008.533-8.533 8.536 8.536 0 00-8.533-8.533h-85.333a8.536 8.536 0 00-8.533 8.533 8.536 8.536 0 008.533 8.533zM315.717 358.4c-4.71 0-8.533 3.823-8.533 8.533s3.823 8.533 8.533 8.533h17.067c4.71 0 8.533-3.823 8.533-8.533s-3.823-8.533-8.533-8.533h-17.067zM281.584 307.2h-68.267c-4.71 0-8.533 3.823-8.533 8.533s3.823 8.533 8.533 8.533h68.267c4.71 0 8.533-3.823 8.533-8.533s-3.823-8.533-8.533-8.533zM281.584 358.4h-68.267c-4.71 0-8.533 3.823-8.533 8.533s3.823 8.533 8.533 8.533h68.267c4.71 0 8.533-3.823 8.533-8.533s-3.823-8.533-8.533-8.533zM484.754 351.497l-17.067-17.067c-13.116-13.116-33.101-13.09-46.199 0L309.684 446.234a8.546 8.546 0 00-2.5 6.033v51.2a8.536 8.536 0 008.533 8.533h51.2a8.546 8.546 0 006.033-2.5l111.804-111.804c13.594-13.594 13.594-32.597 0-46.199zm-74.3 18.099l13.534 13.534-74.138 74.138-13.534-13.534 74.138-74.138zm-86.203 125.337v-39.134l39.134 39.134h-39.134zm51.2-12.066l-13.534-13.534 74.138-74.138 13.534 13.534-74.138 74.138zm97.237-97.237l-11.034 11.034-39.134-39.134 11.034-11.034c6.741-6.733 15.292-6.767 22.067 0l17.067 17.067c6.903 6.912 6.903 15.163 0 22.067z"/><path d="M281.584 494.933H59.717c-14.114 0-25.6-11.486-25.6-25.6V42.667c0-14.114 11.486-25.6 25.6-25.6h269.534L412.084 99.9a8.523 8.523 0 0012.066 0 8.523 8.523 0 000-12.066L338.817 2.5a8.513 8.513 0 00-6.033-2.5H59.717C36.191 0 17.051 19.14 17.051 42.667v426.667c0 23.526 19.14 42.667 42.667 42.667h221.867c4.71 0 8.533-3.823 8.533-8.533s-3.824-8.535-8.534-8.535z"/><path d="M281.584 409.6h-68.267c-4.71 0-8.533 3.823-8.533 8.533s3.823 8.533 8.533 8.533h68.267c4.71 0 8.533-3.823 8.533-8.533s-3.823-8.533-8.533-8.533zM170.651 162.133a8.536 8.536 0 00-8.533-8.533h-51.2a8.536 8.536 0 00-8.533 8.533v51.2a8.536 8.536 0 008.533 8.533h51.2a8.536 8.536 0 008.533-8.533v-51.2zM153.584 204.8h-34.133v-34.133h34.133V204.8zM110.917 426.667h51.2a8.536 8.536 0 008.533-8.533v-51.2a8.536 8.536 0 00-8.533-8.533h-51.2a8.536 8.536 0 00-8.533 8.533v51.2a8.536 8.536 0 008.533 8.533zm8.534-51.2h34.133V409.6h-34.133v-34.133zM121.951 321.766a8.54 8.54 0 006.878 2.457 8.513 8.513 0 006.255-3.755l34.133-51.2c2.611-3.925 1.553-9.225-2.364-11.836a8.533 8.533 0 00-11.836 2.364l-28.356 42.539-9.711-9.702c-3.336-3.337-8.73-3.337-12.066 0s-3.337 8.73 0 12.066l17.067 17.067z"/></svg>'
	    // icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" /><path fill-rule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clip-rule="evenodd" /></svg>'
	  };
	}
	constructor({data, config}){
		// console.log(data);
		this.data = data;
		this.wrapper = undefined
		this.place = ''
		this.config = config || {}
	  this.container = undefined;
	}

	render(){
		this.wrapper = document.createElement('div');
		this.wrapper.classList.add('bg-green-100', 'p6-2', 'm-6', 'rounded', 'border', 'border-gray-400');

		  const question = document.createElement('div');
		  question.setAttribute("id", "question");
		  question.contentEditable = true;
	    question.innerHTML = this.data && this.data.question ? this.data.question : `
	    	Чтобы легче тестировать гипотезы и быстрее вносить изменения в цифровой продукт, для разработки лучше выбрать:
	    `;
	    question.classList.add('p-4', 'm-4', 'bg-white', 'border', 'border-gray-400', 'rounded');

  	  const opt01 = document.createElement('div');
  	  opt01.setAttribute("id", "opt01");
  	  opt01.contentEditable = true;
      opt01.innerHTML = this.data.options ? this.data.options[0].text : `
      	Визуализация процесса с помощью канбан-доски
      `;
      opt01.classList.add('p-4', 'm-4', 'bg-white', 'border', 'border-gray-400', 'rounded');

  	  const opt02 = document.createElement('div');
  	  opt02.setAttribute("id", "opt02");
  	  opt02.contentEditable = true;
      opt02.innerHTML = this.data.options ? this.data.options[1].text : `
      	Каскадную модель и продуманное техническое задание
      `;
      opt02.classList.add('p-4', 'm-4', 'bg-white', 'border', 'border-gray-400', 'rounded');

  	  const opt03 = document.createElement('div');
  	  opt03.setAttribute("id", "opt03");
  	  opt03.contentEditable = true;
      opt03.innerHTML = this.data.options ? this.data.options[2].text : `
      	Agile-методологию разработки
      `;
      opt03.classList.add('p-4', 'm-4', 'bg-white', 'border', 'border-gray-400', 'rounded');

  	  const opt04 = document.createElement('div');
  	  opt04.setAttribute("id", "opt04");
  	  opt04.contentEditable = true;
      opt04.innerHTML = this.data.options ? this.data.options[3].text : `
      	Ничего не предпринимать
      `;
      opt04.classList.add('p-4', 'm-4', 'bg-white', 'border', 'border-gray-400', 'rounded');


  	  const answer1 = document.createElement('div');
      answer1.classList.add('p-4', 'm-4', 'bg-white', 'border', 'border-gray-400', 'rounded', 'flex', 'items-center');
  	  const answer1_span = document.createElement('div')
  	  answer1_span.setAttribute("id", "answer1");
  	  answer1_span.contentEditable = true;
      answer1_span.innerHTML = this.data.comments ? this.data.comments[0].text : `
      	Нет, вам бы еще подумать немного
      `;
      answer1_span.classList.add('mr-4');
      const answer1_checkbox = document.createElement("INPUT");
      answer1_checkbox.setAttribute("type", "checkbox");
      answer1_checkbox.checked = this.data.comments ? this.data.comments[0].right : false;
      answer1_checkbox.setAttribute("id", "answer1_checkbox");
      answer1_checkbox.classList.add('ml-auto');
      answer1.appendChild(answer1_span);
      answer1.appendChild(answer1_checkbox);


  	  const answer2 = document.createElement('div');
      answer2.classList.add('p-4', 'm-4', 'bg-white', 'border', 'border-gray-400', 'rounded', 'flex', 'items-center');
  	  const answer2_span = document.createElement('div')
  	  answer2_span.setAttribute("id", "answer2");
  	  answer2_span.contentEditable = true;
      answer2_span.innerHTML = this.data.comments ? this.data.comments[1].text : `
      	Cнова неверно...
      `;
      answer2_span.classList.add('mr-4');
      const answer2_checkbox = document.createElement("INPUT");
      answer2_checkbox.setAttribute("type", "checkbox");
      answer2_checkbox.checked = this.data.comments ? this.data.comments[1].right : false;
      answer2_checkbox.setAttribute("id", "answer2_checkbox");
      answer2_checkbox.classList.add('ml-auto');
      answer2.appendChild(answer2_span);
      answer2.appendChild(answer2_checkbox);

      // answer2_checkbox.addEventListener('change', this.checkInput('answer2_checkbox'));

  	  const answer3 = document.createElement('div');
      answer3.classList.add('p-4', 'm-4', 'bg-white', 'border', 'border-gray-400', 'rounded', 'flex', 'items-center');
  	  const answer3_span = document.createElement('div')
  	  answer3_span.setAttribute("id", "answer3");
  	  answer3_span.contentEditable = true;
      answer3_span.innerHTML = this.data.comments ? this.data.comments[2].text : `
      	У всех подходов моделей ведения разработки есть свои достоинства, но в текущих реалиях чаще всего побеждает Agile. И не только на коммерческих проектах. В государственном управлении, одной из самых традиционных и нетерпимых к риску сфер, начинает побеждать Agile. В США, где его применяют в том числе и военные, закупки разработок скорее будут с применением Agile, чем нет. В России госуправление также поворачивается в сторону Agile, не в последнюю очередь благодаря позитивному опыту «Сбера», который смог стать ближе к аудитории и значительно повысить качество обслуживания.
      `;
      answer3_span.classList.add('mr-4');
      const answer3_checkbox = document.createElement("INPUT");
      answer3_checkbox.setAttribute("type", "checkbox");
      answer3_checkbox.checked = this.data.comments ? this.data.comments[2].right : false;
      answer3_checkbox.setAttribute("id", "answer3_checkbox");
      answer3_checkbox.classList.add('ml-auto');
      answer3.appendChild(answer3_span);
      answer3.appendChild(answer3_checkbox);

      // answer3_checkbox.addEventListener('change',this.checkInput('answer3_checkbox'));

  	  const answer4 = document.createElement('div');
      answer4.classList.add('p-4', 'm-4', 'bg-white', 'border', 'border-gray-400', 'rounded', 'flex', 'items-center');
  	  const answer4_span = document.createElement('div')
  	  answer4_span.setAttribute("id", "answer4");
  	  answer4_span.contentEditable = true;
      answer4_span.innerHTML = this.data.comments ? this.data.comments[3].text : `
      	Человек, который рассказал вам о профессии продакт-менеджера вас сильно переоценил!
      `;
      answer4_span.classList.add('mr-4');
      const answer4_checkbox = document.createElement("INPUT");
      answer4_checkbox.setAttribute("type", "checkbox");
      answer4_checkbox.setAttribute("id", "answer4_checkbox");
      answer4_checkbox.checked = this.data.comments ? this.data.comments[3].right : false;
      answer4_checkbox.classList.add('ml-auto');
      answer4.appendChild(answer4_span);
      answer4.appendChild(answer4_checkbox);

      // answer4_checkbox.addEventListener('change', this.checkInput('answer4_checkbox'));




    this.wrapper.appendChild(question);
    this.wrapper.appendChild(opt01);
    this.wrapper.appendChild(answer1);
    this.wrapper.appendChild(opt02);
    this.wrapper.appendChild(answer2);
    this.wrapper.appendChild(opt03);
    this.wrapper.appendChild(answer3);
    this.wrapper.appendChild(opt04);
    this.wrapper.appendChild(answer4);


          answer1_checkbox.addEventListener('change', function () {
          	if (this.checked) {
          		console.log('cheked: answ1');
          		document.getElementById("answer1_checkbox").checked = true;
          		document.getElementById("answer2_checkbox").checked = false;
          		document.getElementById("answer3_checkbox").checked = false;
          		document.getElementById("answer4_checkbox").checked = false;
          	} else {
          		document.getElementById("answer1_checkbox").checked = false;
          		document.getElementById("answer2_checkbox").checked = false;
          		document.getElementById("answer3_checkbox").checked = false;
          		document.getElementById("answer4_checkbox").checked = false;
          		console.log('uncheked answ1');
          	}
          });

          answer2_checkbox.addEventListener('change', function () {
          	if (this.checked) {
          		console.log('cheked: answ2');
          		document.getElementById("answer1_checkbox").checked = false;
          		document.getElementById("answer2_checkbox").checked = true;
          		document.getElementById("answer3_checkbox").checked = false;
          		document.getElementById("answer4_checkbox").checked = false;
          	} else {
          		document.getElementById("answer1_checkbox").checked = false;
          		document.getElementById("answer2_checkbox").checked = false;
          		document.getElementById("answer3_checkbox").checked = false;
          		document.getElementById("answer4_checkbox").checked = false;
          		console.log('uncheked answ2');
          	}
          });

          answer3_checkbox.addEventListener('change', function () {
          	if (this.checked) {
          		console.log('cheked: answ3');
          		document.getElementById("answer1_checkbox").checked = false;
          		document.getElementById("answer2_checkbox").checked = false;
          		document.getElementById("answer3_checkbox").checked = true;
          		document.getElementById("answer4_checkbox").checked = false;
          	} else {
          		document.getElementById("answer1_checkbox").checked = false;
          		document.getElementById("answer2_checkbox").checked = false;
          		document.getElementById("answer3_checkbox").checked = false;
          		document.getElementById("answer4_checkbox").checked = false;
          		console.log('uncheked answ3');
          	}
          });

          answer4_checkbox.addEventListener('change', function () {
          	if (this.checked) {
          		console.log('cheked: answ4');
          		document.getElementById("answer1_checkbox").checked = false;
          		document.getElementById("answer2_checkbox").checked = false;
          		document.getElementById("answer3_checkbox").checked = false;
          		document.getElementById("answer4_checkbox").checked = true;
          	} else {
          		document.getElementById("answer1_checkbox").checked = false;
          		document.getElementById("answer2_checkbox").checked = false;
          		document.getElementById("answer3_checkbox").checked = false;
          		document.getElementById("answer4_checkbox").checked = false;
          		console.log('uncheked answ4');
          	}
          });




	  return this.wrapper;
	}

	checkInput(item) {
		console.log(item);
	}

	save(blockContent){
		const qe = blockContent.querySelector('#question');
		const opt01 = blockContent.querySelector('#opt01');
		const opt02 = blockContent.querySelector('#opt02');
		const opt03 = blockContent.querySelector('#opt03');
		const opt04 = blockContent.querySelector('#opt04');
		const answ1 = blockContent.querySelector('#answer1');
		const answ2 = blockContent.querySelector('#answer2');
		const answ3 = blockContent.querySelector('#answer3');
		const answ4 = blockContent.querySelector('#answer4');

		// const checkboxes = blockContent.querySelector('#answer4_checkbox');
		// console.log(checkboxes);

	  return {
	    question: qe.innerHTML || '',
	    options: [
		    {id:1, text: opt01.innerHTML || ''},
		    {id:2, text: opt02.innerHTML || ''},
		    {id:3, text: opt03.innerHTML || ''},
		    {id:4, text: opt04.innerHTML || ''},
	    ],
	    comments: [
		    {id:1, text: answ1.innerHTML || '', right: document.getElementById("answer1_checkbox").checked},
		    {id:2, text: answ2.innerHTML || '', right: document.getElementById("answer2_checkbox").checked},
		    {id:3, text: answ3.innerHTML || '', right: document.getElementById("answer3_checkbox").checked},
		    {id:4, text: answ4.innerHTML || '', right: document.getElementById("answer4_checkbox").checked},
	    ]
	  }
	}
}

export default Card