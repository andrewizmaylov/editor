class FormatParagraph {

	static get isInline() {
	    return true;
	}
	constructor({api}) {
		this.api = api;
    this.button = null;
    this.resetBTN = null;
    this.sizes = ['text-xs', 'text-sm', 'text-base', 'text-lg', 'text-xl', 'text-2xl', 'text-3xl', 'text-4xl', 'text-5xl', 'text-6xl', 'text-7xl', 'text-8xl', 'text-9xl'];
    this.borderRadiuses = ['rounded-none', 'rounded-sm', 'rounded', 'rounded-md', 'rounded-lg', 'rounded-xl', 'rounded-2xl', 'rounded-3xl', 'rounded-full'];
		this.alignments = ['text-left', 'text-center', 'text-right', 'text-justify'];
		this.steps = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 20, 24, 28, 32, 36, 40, 44, 48,  52, 56, 60, 64, 72];
		this.fonts = ['font-sans', 'font-serif', 'font-mono', 'font-roboto', 'font-oswald', 'font-sourse', 'font-poppins'];
    this.pl = 0;
    this.pr = 0;
    this.pt = 0;
    this.pb = 0;    
    this.ml = 0;
    this.mr = 0;
    this.mt = 0;
    this.mb = 0;
    this.icons = {
    	plus: {name: 'plus', action: '', path: '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="none"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" /></svg>' },
    	reset: {name: 'reset', action: '', path: '<svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 10.778c.928 0 1.667-.74 1.667-1.667S9.928 7.444 9 7.444s-1.667.74-1.667 1.667.739 1.667 1.667 1.667z" /><path d="M13.898 8.103a4.966 4.966 0 00-.752-1.788 5.028 5.028 0 00-1.35-1.35 4.971 4.971 0 00-2.81-.853V3L6.778 4.667l2.208 1.666v-1.11a3.866 3.866 0 012.187.663 3.89 3.89 0 11-6.062 3.225H4a5.011 5.011 0 002.204 4.146c.825.558 1.8.856 2.796.854a5.007 5.007 0 004.146-2.205A4.973 4.973 0 0014 9.111c0-.338-.034-.676-.102-1.008z" /></svg> ' },
    	minus: {name: 'minus', action: '', path: '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="none"><path fill-rule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clip-rule="evenodd" /></svg>' },
    	expand: {name: 'expand', action: '', path: '<svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.75 7.95a.3.3 0 00.3.3h3.9a.3.3 0 00.3-.3V6.724a.3.3 0 01.512-.212l2.276 2.276a.3.3 0 010 .424l-2.276 2.276a.3.3 0 01-.512-.212V10.05a.3.3 0 00-.3-.3h-3.9a.3.3 0 00-.3.3v1.226a.3.3 0 01-.512.212L3.962 9.212a.3.3 0 010-.424l2.276-2.276a.3.3 0 01.512.212V7.95zM1.8 15a.3.3 0 01-.3-.3V3.3a.3.3 0 01.3-.3h.9a.3.3 0 01.3.3v11.4a.3.3 0 01-.3.3h-.9zm13.5 0a.3.3 0 01-.3-.3V3.3a.3.3 0 01.3-.3h.9a.3.3 0 01.3.3v11.4a.3.3 0 01-.3.3h-.9z" /></svg>' },
    }
	}

	render() {
		this.button = document.createElement('button');
		this.button.type = 'button';
		this.button.innerHTML = '<svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.25 3.6a.6.6 0 01.6-.6h4.05a.6.6 0 01.6.6v.3a.6.6 0 01-.6.6h-4.05a.6.6 0 01-.6-.6v-.3zm.75 3a.6.6 0 01.6-.6h3.3a.6.6 0 01.6.6v.3a.6.6 0 01-.6.6h-3.3a.6.6 0 01-.6-.6v-.3zm1.5 3a.6.6 0 01.6-.6h1.8a.6.6 0 01.6.6v.3a.6.6 0 01-.6.6h-1.8a.6.6 0 01-.6-.6v-.3zM7.396 3a.6.6 0 00-.562.39l-4.05 10.8a.6.6 0 00.562.81h.321a.6.6 0 00.562-.39l1.26-3.36h4.772l1.26 3.36a.6.6 0 00.563.39h.32a.6.6 0 00.563-.81l-4.05-10.8A.6.6 0 008.354 3h-.959zM6.051 9.75l1.824-4.864L9.699 9.75H6.051z" /></svg>';

		return this.button;
	}

	surround(range) {
		if (!range) {
		    return;
		}

		this.controlPannel.classList.toggle('hidden');
		// check and render all saved styles for selected element
		if (this.anchorElement && typeof this.anchorElement.style == 'object') {
			if (this.anchorElement.style.color) {
				this.textColor.getElementsByTagName('input')[0].value = this.convertToHex(this.anchorElement.style.color);
			} 
			if (this.anchorElement.style.backgroundColor) {
				this.fonColor.getElementsByTagName('input')[0].value = this.convertToHex(this.anchorElement.style.backgroundColor);
			} 
		} 

		if (this.anchorElement && this.anchorElement.classList.length > 0) {
			 Array.from(this.anchorElement.classList).filter(item => {
			 		if (this.sizes.indexOf(item) !== -1) {
			 			this.textSize.value = item;
			 		}
			 		if (this.borderRadiuses.indexOf(item) !== -1) {
			 			this.roundness.value = item;
			 		}
			 		if (this.alignments.indexOf(item) !== -1) {
			 			console.log('text alignment: ', item);
			 		}
			 		if (this.fonts.indexOf(item) !== -1) {
			 			this.fontSelector.value = item;
			 		}
			 });
		}
	} 
	// render adjustment block
	renderActions() {
		this.controlPannel = document.createElement('div');
		this.controlPannel.classList.add('hidden', 'pb-3', 'p-2', 'bg-gray-100', 'rounded', 'flex', 'flex-col');
		let row0 = document.createElement('div');
		row0.classList.add( 'flex', 'justify-between', 'items-center', 'my-1', 'px-1');
		let row1 = document.createElement('div');
		row1.classList.add( 'flex', 'items-center', 'my-1', 'px-1');
		let row2 = document.createElement('div');
		row2.classList.add( 'flex', 'items-center', 'my-1', 'justify-center');

			let title = document.createElement('span');
			title.classList.add('text-xs', 'text-gray-600', 'ml-3', 'my-2');
			title.innerHTML = 'Paragraph adjustment block';

			this.resetBTN = document.createElement('span');
			this.resetBTN.classList.add('bg-white', 'font-semibold', 'text-xs', 'border', 'border-red-600', 'ml-6', 'px-2', 'py-1', 'rounded', 'hover:bg-red-600', 'text-red-600', 'hover:text-white', 'cursor-pointer');
			this.resetBTN.innerHTML = 'Reset paragraph';

			this.resetBTN.addEventListener('click', () => {
				this.anchorElement.className = '';
				this.anchorElement.style = '';
				this.controlPannel.classList.add('hidden');
			})

			this.fontSelector = this.createSelector('Font Family', this.fonts);
			this.fontSelector.classList.add('w-28', 'border-none');

			this.textSize = this.createSelector('Text Size', this.sizes);
			this.textSize.classList.add('w-28', 'border-none');

			this.roundness = this.createSelector('BG roundness', this.borderRadiuses);
			this.roundness.classList.add('w-32', 'mx-auto', 'my-2', 'border', 'border-gray-400');

			this.textColor = this.colorPickerModule('color', this.textColor);

			this.fonColor = this.colorPickerModule('backgroundColor', this.textColor);
			this.fonColor.getElementsByTagName('input')[0].value ='#FBFBFB';

						// let expand = document.createElement('span');
						// expand.classList.add('bg-white', 'rounded', 'hover:bg-blue-500', 'text-gray-600', 'hover:text-white', 'cursor-pointer', 'ml-auto');
						// expand.innerHTML = '<svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.75 7.95a.3.3 0 00.3.3h3.9a.3.3 0 00.3-.3V6.724a.3.3 0 01.512-.212l2.276 2.276a.3.3 0 010 .424l-2.276 2.276a.3.3 0 01-.512-.212V10.05a.3.3 0 00-.3-.3h-3.9a.3.3 0 00-.3.3v1.226a.3.3 0 01-.512.212L3.962 9.212a.3.3 0 010-.424l2.276-2.276a.3.3 0 01.512.212V7.95zM1.8 15a.3.3 0 01-.3-.3V3.3a.3.3 0 01.3-.3h.9a.3.3 0 01.3.3v11.4a.3.3 0 01-.3.3h-.9zm13.5 0a.3.3 0 01-.3-.3V3.3a.3.3 0 01.3-.3h.9a.3.3 0 01.3.3v11.4a.3.3 0 01-.3.3h-.9z" /></svg>';

						// expand.addEventListener('click', () => {
						// 	this.anchorElement.classList.toggle('absolute', 'left-0');
						// })

		row0.appendChild(title);
		row0.appendChild(this.resetBTN);
		row1.appendChild(this.fontSelector);
		row1.appendChild(this.textSize);
		row1.appendChild(this.textColor);
		row1.appendChild(this.createLayoutPosition());
		// row1.appendChild(expand);

		row2.appendChild(this.createBox('padding'));
		row2.appendChild(this.createBackgroundSettingBlock());
		row2.appendChild(this.createBox('margin'));
		
		this.controlPannel.appendChild(row0);
		this.controlPannel.appendChild(row1);
		this.controlPannel.appendChild(row2);
		return this.controlPannel;
	}

	createBox(title) {
		let wrapper = document.createElement('div');
		wrapper.classList.add('p-1', 'bg-white', 'rounded', 'flex', 'items-center', 'mx-2');
		
			let center = document.createElement('div');
			center.classList.add('flex', 'flex-col', 'items-center');
			center.appendChild(this.createFlatBlock(`${title.substr(0,1)}t`));
			center.appendChild(this.createTitle(title));
			center.appendChild(this.createFlatBlock(`${title.substr(0,1)}b`));

		wrapper.appendChild(this.createSideBlock(`${title.substr(0,1)}l`))
		wrapper.appendChild(center);
		wrapper.appendChild(this.createSideBlock(`${title.substr(0,1)}r`))

		return wrapper;
	}

	createBackgroundSettingBlock() {
		let background = document.createElement('div');
		background.classList.add('flex', 'flex-col', 'justify-center', 'bg-white', 'rounded', 'mx-2', 'px-2');
						// let backgroundTitle = document.createElement('span');
						// backgroundTitle.innerHTML = "Background color";
						// backgroundTitle.classList.add('text-xs', 'mx-auto', 'my-2', 'text-gray-600');

						// background.appendChild(backgroundTitle);
		let backgroundRow = document.createElement('div');
		backgroundRow.classList.add('flex', 'items-center', 'justify-between', 'mt-2');
			let backgroundBtn = document.createElement('span');
			backgroundBtn.innerHTML = 'Reset BG';
			backgroundBtn.classList.add('px-2', 'py-1', 'text-xs', 'bg-white', 'rounded', 'border', 'border-gray-400', 'hover:bg-blue-500', 'hover:text-white', 'mx-2');
			backgroundBtn.addEventListener('click', () => {
				// console.log('reset bg-color style and bg roundness from paragraph');
				this.fonColor.getElementsByTagName('input')[0].value ='#FBFBFB';
				this.anchorElement.style.backgroundColor = '';
				Array.from(this.anchorElement.classList).filter(element => {
					if (element.substr(0,7) == 'rounded') {
						this.anchorElement.classList.remove(element);
						this.roundness.value = null;
					}
				})
			})
		backgroundRow.appendChild(this.fonColor);
		backgroundRow.appendChild(backgroundBtn);

		background.appendChild(backgroundRow);
		background.appendChild(this.roundness);

		return background;
	}

	createSideBlock(tag) {
		let sideBtn = document.createElement('div');
		sideBtn.classList.add('flex', 'flex-col', 'justify-center', 'mx-1');
			sideBtn.appendChild(this.createBtn(this.icons['plus'], tag));
			sideBtn.appendChild(this.createBtn(this.icons['reset'], tag));
			sideBtn.appendChild(this.createBtn(this.icons['minus'], tag));
		return sideBtn;
	}

	createFlatBlock(tag) {
		let flatBtn = document.createElement('div');
		flatBtn.classList.add('flex', 'items-center', 'mx-1');
			flatBtn.appendChild(this.createBtn(this.icons['minus'], tag));
			flatBtn.appendChild(this.createBtn(this.icons['reset'], tag));
			flatBtn.appendChild(this.createBtn(this.icons['plus'], tag));
		return flatBtn;
	}

	createTitle(title) {
		let name = document.createElement('span');
		name.classList.add('px-6', 'py-1', 'font-semibold', 'text-sm', 'bg-gray-100', 'border', 'border-gray-400', 'rounded'); 
		name.innerHTML = title;
		return name;
	}

	createBtn(icon, tag) {
		let btn = document.createElement('span');
		btn.classList.add('bg-white', 'rounded', 'hover:bg-blue-500', 'text-gray-600', 'hover:text-white', 'cursor-pointer');
		btn.innerHTML = icon.path;

		btn.addEventListener('click', () => {
			console.log('clicked', icon.name, tag);
			// update this[tag] initial value with index of actual value of a class (if it exiata at instanse) 
			// remove previously added class if exists
			Array.from(this.anchorElement.classList).filter(item => {
				if (item.substr(0,2) == tag) {
					this[tag] = this.steps.indexOf(parseInt(item.substr(3)));
					this.anchorElement.classList.remove(item);
				}
			})
			// update correspondent increment
			if (icon.name == 'plus') {
				this[tag]++;
			} 
			if (icon.name == 'minus') {
				this[tag]--;
			}
			if (icon.name == 'reset') {
				this[tag] = 0;
			}
			// check min/max value
			if (this[tag] < 0) {
				this[tag] = 0;
			}
			if (this[tag] >= this.steps.length - 1) {
				this[tag] = this.steps.length -1;
			}
			// update class list with new value
			this.anchorElement.classList.add(`${tag}-${this.steps[this[tag]]}`);
		})
		return btn;
	}

	colorPickerModule(property, clr = null) { 
		const newColorPicker = document.createElement('div');
		newColorPicker.setAttribute('id', `${property}CP`);
		newColorPicker.classList.add('mx-1', 'w-6', 'h-6', 'rounded-full', 'overflow-hidden');
		newColorPicker.style.border = "solid 2px #bdbcbc";
			const currentPicker = document.createElement('input');
			currentPicker.classList.add('w-24', 'h-24', '-ml-4', '-mt-4', 'cursor-pointer');
			currentPicker.type = 'color';
		newColorPicker.appendChild(currentPicker);
			currentPicker.onchange = () => {
				this.anchorElement.style[property] = currentPicker.value;
				return;
			}
		return newColorPicker;
	}

	createSelector(param, sizes) {
		let newSelector = document.createElement('select');
		newSelector.classList.add('py-1', 'px-2', 'bg-white', 'outline-none', 'rounded', 'cursor-pointer', 'mx-1', 'text-xs');
		let option = document.createElement('option');
		option.text = param;
		option.value = null;
		newSelector.appendChild(option);
		for (var i = 0;  i < sizes.length; i++) {
		  let option = document.createElement('option');
		  option.text = sizes[i];
		  option.value = sizes[i];
		  newSelector.appendChild(option);
		}
		newSelector.onchange = () => {
			sizes.filter(item => this.anchorElement.classList.remove(item));
			this.anchorElement.classList.add(newSelector.value);
		}
		return newSelector;
	}
		
	createLayoutPosition() {  // render text alignment icons 
		const icons = [
			{active: false, name: 'text-left', path: '<svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg" class="mx-auto"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.25 14.063a.562.562 0 01.563-.563h7.874a.562.562 0 110 1.125H2.814a.563.563 0 01-.563-.563zm0-3.376a.562.562 0 01.563-.562h12.374a.562.562 0 110 1.125H2.813a.563.563 0 01-.563-.563zm0-3.374a.563.563 0 01.563-.563h7.874a.562.562 0 110 1.125H2.814a.563.563 0 01-.563-.563zm0-3.375a.563.563 0 01.563-.563h12.374a.562.562 0 110 1.125H2.813a.563.563 0 01-.563-.563z" /></svg>'},
			{active: false, name: 'text-center', path: '<svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg" class="mx-auto"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 14.063a.562.562 0 01.563-.563h7.875a.562.562 0 110 1.125H5.061a.563.563 0 01-.562-.563zm-2.25-3.376a.562.562 0 01.563-.562h12.374a.562.562 0 110 1.125H2.813a.563.563 0 01-.563-.563zM4.5 7.313a.563.563 0 01.563-.563h7.875a.562.562 0 110 1.125H5.061a.563.563 0 01-.562-.563zM2.25 3.938a.563.563 0 01.563-.563h12.374a.562.562 0 110 1.125H2.813a.563.563 0 01-.563-.563z" /></svg>'},
			{active: false, name: 'text-right', path: '<svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg" class="mx-auto"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.75 14.063a.562.562 0 01.563-.563h7.875a.562.562 0 110 1.125H7.311a.563.563 0 01-.562-.563zm-4.5-3.376a.562.562 0 01.563-.562h12.374a.562.562 0 110 1.125H2.813a.563.563 0 01-.563-.563zm4.5-3.374a.563.563 0 01.563-.563h7.875a.562.562 0 110 1.125H7.311a.563.563 0 01-.562-.563zm-4.5-3.375a.563.563 0 01.563-.563h12.374a.562.562 0 110 1.125H2.813a.563.563 0 01-.563-.563z" /></svg>'},
			{active: false, name: 'text-justify', path: '<svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg" class="mx-auto"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 13.688a.562.562 0 01.563-.563h12.374a.562.562 0 110 1.125H2.563A.563.563 0 012 13.687zm0-3.376a.562.562 0 01.563-.562h12.374a.562.562 0 110 1.125H2.563A.563.563 0 012 10.312zm0-3.374a.563.563 0 01.563-.563h12.374a.562.562 0 110 1.125H2.563A.563.563 0 012 6.937zm0-3.375A.563.563 0 012.563 3h12.374a.562.562 0 110 1.125H2.563A.563.563 0 012 3.562z" /></svg>'},
		]
		const alignmentsButtonSet = document.createElement('div');
		alignmentsButtonSet.classList.add('flex', 'mx-2', 'items-center');
			const alignmentsButton = document.createElement('div');
			alignmentsButton.classList.add('flex', 'justify-center');
			for (var i = 0; i < icons.length; i++) {
				let alligmentClass = icons[i].name;
				let btn = document.createElement('button');
				btn.setAttribute('id', icons[i].name);
				btn.type = 'button';
				btn.classList.add('bg-white', 'mx-1', 'w-8', 'h-8', 'rounded', 'hover:bg-blue-500', 'hover:text-white', 'cursor-pointer', 'hover:border', 'hover:border-gray-500');
				btn.innerHTML = icons[i].path;
				  btn.addEventListener('click', () => {
				    this.alignments.filter(item => this.anchorElement.classList.remove(item));
				    this.anchorElement.classList.add(alligmentClass);
				  }) 
				alignmentsButton.appendChild(btn);
			}
		alignmentsButtonSet.appendChild(alignmentsButton);

		return alignmentsButtonSet;
	}

	convertToHex(color) {
	  const rgb = color.match(/(\d+)/g);

	  let hexr = parseInt(rgb[0]).toString(16);
	  let hexg = parseInt(rgb[1]).toString(16);
	  let hexb = parseInt(rgb[2]).toString(16);

	  hexr = hexr.length === 1 ? '0' + hexr : hexr;
	  hexg = hexg.length === 1 ? '0' + hexg : hexg;
	  hexb = hexb.length === 1 ? '0' + hexb : hexb;

	  return '#' + hexr + hexg + hexb;
	}

	checkState(selection) {
		const textContainer = selection.anchorNode.parentNode;
		 
		if (!textContainer) {
		    return;
		}
		this.anchorElement = textContainer;
	}
}

export default FormatParagraph