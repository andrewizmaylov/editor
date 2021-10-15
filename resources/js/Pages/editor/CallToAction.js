import * as utils from './editorUtility.js';

class CallToAction {
	static get toolbox() {
	  return {
	    title: 'Call to Action',
	    icon: '<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.5 21.5c-5.216 0-9.5-4.03-9.5-8.983 0 1.702.712 3.334 1.979 4.537 1.267 1.203 2.986 1.88 4.778 1.88 1.792 0 3.51-.677 4.777-1.88 1.268-1.203 1.98-2.835 1.98-4.537h-1.27a.15.15 0 01-.075-.279L19 10l3.51 2.236a.152.152 0 01-.082.28h-.928c0 4.954-4.5 8.984-9 8.984z" "/><path d="M8.316 7.395c-.061.841-.373 1.504-.935 1.987-.559.484-1.296.725-2.213.725-1.002 0-1.792-.336-2.368-1.01-.573-.676-.86-1.604-.86-2.782v-.478c0-.752.133-1.414.398-1.987.265-.573.642-1.011 1.133-1.316.494-.308 1.067-.462 1.719-.462.902 0 1.629.242 2.18.725.552.484.87 1.162.956 2.036h-1.61c-.04-.505-.182-.87-.425-1.096-.24-.229-.607-.343-1.101-.343-.537 0-.94.193-1.209.58-.265.383-.4.979-.408 1.788v.591c0 .845.127 1.463.381 1.853.258.39.663.585 1.214.585.498 0 .869-.112 1.112-.338.247-.229.389-.582.424-1.058h1.612zm7.003-3.91h-2.395V10h-1.611V3.485H8.948V2.18h6.37v1.305zm4.915 4.904h-2.826L16.872 10h-1.713l2.911-7.82h1.493L22.49 10h-1.713l-.542-1.611zm-2.39-1.305h1.955l-.983-2.928-.973 2.928z" "/></svg>',
	  };
	}
	constructor({data, api}) {
		this.api = api;
		this.data = data;
		this.nodes = {
			output: null,
			btnBlock: null,
			btnSetup: null,
			row4: utils.make('div', ['flex', 'items-center', 'my-1']),
			title: null,
			subtitle: null,
			description: null,
		}

		this.CTA = {
			title: 'Start your awesome career',
			subtitle: 'become a Product Manager',
			description: 'productstar.co',
		};
		this.actionButtonCount = 0;
	}

	render() {
					// if (this.data && this.data.output.stretched !== undefined && this.data.output.stretched == true) {
					//    Promise.resolve().then(() => {
					//       this.api.blocks.stretchBlock(this.api.blocks.getCurrentBlockIndex(), this.data.output.stretched);
					//    })
					// }
		// CTA pannel
		this.nodes.output = utils.make('div', ['w-full', 'py-16', 'flex', 'flex-col', 'relative'], {id: "output"});
			if (this.data && this.data.output) {
				this.getClassForItem(this.nodes.output);
			} else {
				this.nodes.output.style.backgroundColor = '#564C9B';
			}
		this.nodes.title = utils.make('span', ['outline-none'], {contentEditable: true, id: 'title'});
		    this.nodes.title.innerHTML = this.data && this.data.title ? this.data.title.text : this.CTA.title;
		    if (this.data && this.data.title) {
			    this.getClassForItem(this.nodes.title); 
		    } else {
		    	this.nodes.title.classList.add('text-5xl', 'mb-3');
		    	this.nodes.title.style.color = '#FFFFFF';
		    	this.nodes.output.classList.add('text-center'); // for jeneric text-alligments by center
		    }
		this.nodes.subtitle = utils.make('span', ['outline-none'], {contentEditable: true, id: 'subtitle'});
		    this.nodes.subtitle.innerHTML = this.data && this.data.subtitle ? this.data.subtitle.text : this.CTA.subtitle;
		    if (this.data && this.data.subtitle) {
			    this.getClassForItem(this.nodes.subtitle); 
		    } else {
		    	this.nodes.subtitle.classList.add('text-4xl', 'mb-3');
		    	this.nodes.subtitle.style.color = '#D8BA87';
		    }
		this.nodes.description = utils.make('span', ['outline-none'], {contentEditable: true, id: 'description'});
		    this.nodes.description.innerHTML = this.data && this.data.description ? this.data.description.text : this.CTA.description;
		    if (this.data && this.data.description) {
			    this.getClassForItem(this.nodes.description); 
		    } else {
		    	this.nodes.description.classList.add('text-base', 'mb-16');
		    	this.nodes.description.style.color = 'rgb(213, 195, 249)';
		    }
		utils.appendMany(this.nodes.output, [this.nodes.title, this.nodes.subtitle, this.nodes.description]);
		// define container for the setup elements. call before actionButtonBlock
		this.nodes.btnSetup = utils.make('div', []);
		// check or create actions btns list	
			this.nodes.btnBlock = utils.make('div', null, {id: 'buttonBlock'});
				if (this.data && this.data.buttonBlock && Object.keys(this.data.buttonBlock).length > 0) {
					for (var i = 0; i < Object.keys(this.data.buttonBlock).length; i++) {
						let index = Object.keys(this.data.buttonBlock)[i];
						this.createNewButton(this.data.buttonBlock[index]);
					}
				} else if (!this.data.buttonBlock) {
					this.createNewButton({
		        		id: 'button1',
			            text: "Book your spot",
			            class: [ "px-4", "py-3", "mr-2", "rounded-full", "text-base", "shadow-lg" ],
			            style: { backgroundColor: "rgb(186, 154, 253)", color: "rgb(255, 255, 255)" }
			        });
			        this.createNewButton({
			        	id: 'button2',
			            text: "Join now",
			            class: [ "px-8", "py-3", "rounded-full", "ml-2", "text-base", "shadow-lg" ],
			            style: { backgroundColor: "rgb(116, 81, 152)", color: "rgb(217, 209, 250)" }
			        });
				}
			this.nodes.output.appendChild(this.nodes.btnBlock);
		return this.nodes.output;
	}

	textFieldSetup(name) {
	  let hideTextColor = utils.createCheckbox();
	  let hideTextBlock = utils.createCheckbox();
		  this.api.tooltip.onHover(hideTextBlock, `On/Off ${name} visibility`, { placement: 'top', });
	  	  hideTextBlock.checked = this.nodes[name].classList.contains('hidden') ? false : true;
		  hideTextBlock.classList.add('ml-1', 'mr-2');
		  hideTextBlock.onchange = () => this.nodes[name].classList.toggle('hidden');
	  let textColor = utils.colorPickerModule('color', this.nodes[name]);
	      this.api.tooltip.onHover(textColor, `${name.charAt(0).toUpperCase() + name.slice(1)}-field color`, { placement: 'top', });
	      textColor.getElementsByTagName('input')[0].value = this.nodes[name].style.color ? utils.convertToHex(this.nodes[name].style.color) : '#282828';
	      textColor.onchange = () => {
	        hideTextColor.checked = true;
	      }
	  // hideFonColor and hideBorder created before colorPicker   
	  hideTextColor.classList.add('ml-1', 'mr-2');
	  this.api.tooltip.onHover(hideTextColor, `On/Off ${name} color`, { placement: 'top', });
	  hideTextColor.checked = this.nodes[name].getAttribute('style') && this.nodes[name].style.color ? true : false;
	  // hideFonColor.checked = false;
	    hideTextColor.onchange = () => {
	      if (hideTextColor.checked === false) { 
	        this.nodes[name].style.color = '';
	        textColor.getElementsByTagName('input')[0].value = '#282828';
	      } else {
	        this.nodes[name].style.color = utils.convertToHex(textColor.getElementsByTagName('input')[0].value);
	      }
	    }
	  let fontSize = utils.createSelector('Font size', utils.measurment.fontSizes, this.nodes[name]);
	      this.api.tooltip.onHover(fontSize, `${name} font size`, { placement: 'top', });
	      fontSize.classList.add('w-24');
	      fontSize.value = utils.getClassFromData(this.nodes[name], 'fontSizes'); 
	  let mbText = utils.createSelector('mb', utils.measurment.marginB, this.nodes[name]);
		  this.api.tooltip.onHover(mbText, `${name} Margin Bottom`, { placement: 'top', });
		  mbText.classList.add('w-20');
		  mbText.value = utils.getClassFromData(this.nodes[name], 'marginB'); 

		let wrapper = utils.make('div', ['flex', 'items-center']);
		if (name !== 'description') {
			wrapper.classList.add('mr-3')
		}		  
	  utils.appendMany(wrapper, [textColor, hideTextColor, fontSize, mbText, hideTextBlock]);
	  return wrapper;     
	}
	renderSettings() {
		let holder = utils.make('div', ['bg-gray-100', 'p-2']);
		// define the row element for placing alignments, stretch and colorpickers element
		let row1 = utils.make('div', ['flex', 'items-center', 'my-1']);
		let row2 = utils.make('div', ['flex', 'items-center', 'my-1', 'justify-between']);
		let row3 = utils.make('div', ['flex', 'items-center', 'my-1']);

		let hideFonColor = utils.createCheckbox();
		let fonColor = utils.colorPickerModule('color', this.nodes.output);
		    this.api.tooltip.onHover(fonColor, `Fon color`, { placement: 'top', }); 
		    fonColor.getElementsByTagName('input')[0].value = this.nodes.output.style.backgroundColor ? utils.convertToHex(this.nodes.output.style.backgroundColor) : '#282828';
		    fonColor.onchange = () => {
		      hideFonColor.checked = true;
		      this.nodes.output.style.backgroundColor = fonColor.getElementsByTagName('input')[0].value;
		    }
			// hideFonColor and hideBorder created before colorPicker   
			hideFonColor.classList.add('ml-1', 'mr-2');
			this.api.tooltip.onHover(hideFonColor, `On/Off fon color`, { placement: 'top', });
			hideFonColor.checked = this.nodes.output.getAttribute('style') && this.nodes.output.style.backgroundColor ? true : false;
			// hideFonColor.checked = false;
			hideFonColor.onchange = () => {
				if (hideFonColor.checked === false) { 
				  this.nodes.output.style.backgroundColor = '';
				  fonColor.getElementsByTagName('input')[0].value = '#F2F2F2';
				} else {
				  this.nodes.output.style.backgroundColor = utils.convertToHex(fonColor.getElementsByTagName('input')[0].value);
				}
			}

		let alignment = utils.createLayoutPosition(['left', 'center', 'right'], this.nodes.output);
		    alignment.classList.remove('mx-2');
		    this.api.tooltip.onHover(alignment, 'Text alignment', { placement: 'top', });
	    let outputFontFamily = utils.createSelector('Font family', utils.measurment.fontFamily, this.nodes.output);
	    	this.api.tooltip.onHover(outputFontFamily, 'Font family', { placement: 'top', });			
	    	outputFontFamily.classList.add('w-28', 'my-1');
	    	outputFontFamily.value = utils.getClassFromData(this.nodes.output, 'fontFamily');
		let outputPL = utils.createSelector('pl', utils.measurment.paddingL, this.nodes.output);
		    this.api.tooltip.onHover(outputPL, `Container Padding left`, { placement: 'top', });
		    outputPL.classList.add('w-16');
		    outputPL.value = utils.getClassFromData(this.nodes.output, 'paddingL'); 
		let outputPR = utils.createSelector('pr', utils.measurment.paddingR, this.nodes.output);
		    this.api.tooltip.onHover(outputPR, `Container Padding Right`, { placement: 'top', });
		    outputPR.classList.add('w-16');
		    outputPR.value = utils.getClassFromData(this.nodes.output, 'paddingR');     
		let outputPY = utils.createSelector('py', utils.measurment.paddingY, this.nodes.output);
		    this.api.tooltip.onHover(outputPY, `Container Padding Y`, { placement: 'top', });
		    outputPY.classList.add('w-16');
		    outputPY.value = utils.getClassFromData(this.nodes.output, 'paddingY');     	
	    let outputMY = utils.createSelector('my', utils.measurment.marginY, this.nodes.output);
	        this.api.tooltip.onHover(outputMY, `Container Margin Y`, { placement: 'top', });
	        outputMY.classList.add('w-16');
	        outputMY.value = utils.getClassFromData(this.nodes.output, 'marginY');  
	    let outputMT = utils.createSelector('mt', utils.measurment.marginT, this.nodes.output);
	        this.api.tooltip.onHover(outputMT, `Container Margin Top`, { placement: 'top', });
	        outputMT.classList.add('w-16');
	        outputMT.value = utils.getClassFromData(this.nodes.output, 'marginT');  
	    let outputMB = utils.createSelector('mb', utils.measurment.marginB, this.nodes.output);
	        this.api.tooltip.onHover(outputMB, `Container Margin Bottom`, { placement: 'top', });
	        outputMB.classList.add('w-16');
	        outputMB.value = utils.getClassFromData(this.nodes.output, 'marginB');
	    let outputShadow = utils.createSelector('shadow', utils.measurment.shadow, this.nodes.output);
	        this.api.tooltip.onHover(outputShadow, `Container shadow`, { placement: 'top', });
	        outputShadow.classList.add('w-20');
	        outputShadow.value = utils.getClassFromData(this.nodes.output, 'shadow');  
	    let outputRoundness = utils.createSelector('roundness', utils.measurment.bgRadius, this.nodes.output);
	        this.api.tooltip.onHover(outputRoundness, `Container border radius`, { placement: 'top', });
	        outputRoundness.classList.add('w-24');
	        outputRoundness.value = utils.getClassFromData(this.nodes.output, 'bgRadius');      
	        	    // let stretched = utils.createButton(utils.btn.stretched);
	        	    //     stretched.classList.add('ml-4');
	        	    //     this.api.tooltip.onHover(stretched, 'Stretch container', { placement: 'top', });
	        	    //     if (this.data.output.stretched) {
	        	    //       stretched.classList.add('text-blue-500');
	        	    //     } else {
	        	    //       stretched.classList.add('text-gray-600');
	        	    //     }
	        	    //     stretched.addEventListener('click', () => {
	        	    //     	console.log('csdss', this.data);
	        	        	 
	        	    //       this.data.output.stretched = !this.data.output.stretched;
	        	    //       stretched.classList.toggle('text-gray-600', !this.data.stretched)
	        	    //       stretched.classList.toggle('text-blue-500', this.data.stretched)
	        	    //       this.api.blocks.stretchBlock(this.api.blocks.getCurrentBlockIndex(), !!this.data.output.stretched);
	        	    //     }) 

                    // let input = utils.make('input', ['hidden'], {type: 'file', id: 'imageUpload'});    
                    // let inputLabel = utils.make('label', ['ml-auto', 'bg-white', 'text-gray-600', 'mx-1', 'w-8', 'h-8', 'flex', 'justify-center', 'items-center', 'rounded', 'hover:bg-blue-500', 'hover:text-white', 'cursor-pointer'], {});
    	               //  inputLabel.setAttribute('for', 'imageUpload');
    	               //  inputLabel.innerHTML = utils.btn.image.path;
    	               //  input.onchange = () => {
    	               //  	let image = document.getElementById("imageUpload").files[0];
    	               //  	let formData = new FormData();
    	                	        
    	               //  	formData.append("image", image);
                    // 		axios.post('/change_image', formData, {
                    // 	        headers: {
                    // 	          'Content-Type': 'multipart/form-data'
                    // 	        }
                    // 		})
                    // 		.then(response => {
                    // 			console.log(response.data.file.url);
                    // 			let file = response.data.file.url;
                    // 			// let img = utils.make('img', ['h-full', 'w-full', 'absolute', 'object-cover']);
                    // 			// 	img.src = response.data.file.url;
                    // 			// 	this.nodes.output.appendChild(img);
                    // 			// 	this.nodes.output.classList.add('relative', );
    		              //   	// this.nodes.output.style.backgroundImage = 'url(" + response.data.file.url + ")';
    		              //   	// this.nodes.output.setAttribute("style", "background: #ffffff; background-image: url(" + response.data.file.url + ");background-repeat: no-repeat; background-size: 100%");
                    // 		});
    		              //   	// this.nodes.output.style.backgroundImage = "url(${this.file})";
        

    	               //  }
	        	    
	                // let loadImage = utils.createButton(utils.btn.image);
	                //     loadImage.classList.add('ml-auto', 'bg-white', 'text-gray-600', 'mx-1', 'flex', 'justify-center', 'items-center', 'rounded', 'hover:bg-blue-500', 'hover:text-white', 'cursor-pointer');
	                //     this.api.tooltip.onHover(loadImage, 'Select new image', { placement: 'top', });
	                //     loadImage.classList.add();
	                //     loadImage.addEventListener('click', () => {
	                //       this.uploader.uploadSelectedFile({
	                //         onPreview: (src) => {

	                //           console.log('onPreview: (src) 413', 'mini with spinner arround here');
	                //         },
	                //       });
	                //     })


	    let createNewButton = utils.make('span', ['px-3', 'py-1', 'text-center', 'cursor-pointer', 'text-xs', 'rounded', 'bg-white', 'hover:bg-blue-500', 'hover:text-white', 'ml-auto', 'mr-3']);
	    	createNewButton.innerHTML = 'Add new Button'; 
	    	createNewButton.addEventListener('click', () => {
	    		this.createNewButton();
	    	});   
		let control = utils.createControlGroup(this.api);
			control.classList.remove('ml-auto'); 
		utils.appendMany(row1, [this.textFieldSetup('title'), this.textFieldSetup('subtitle'), this.textFieldSetup('description')]);
		utils.appendMany(row2, [fonColor, hideFonColor, alignment, outputFontFamily, outputPL, outputPR, outputPY, outputMT, outputMB, , outputShadow, , outputRoundness]);
		utils.appendMany(row3, [this.nodes.btnSetup, createNewButton,  control]);

		utils.appendMany(holder, [row1, row2, row3, this.nodes.row4]);
		return holder;
	}

	getClassForItem(element) {
		if (this.data && this.data[element.id].class.length) {
			this.data[element.id].class.filter(item => element.classList.add(item));
		}
		if (this.data && typeof this.data[element.id].style === 'object') {
			for(let st in this.data[element.id].style) {
				element.style[st] = this.data[element.id].style[st];
			}
		}
	}

	createNewButton(element = null) {
 		this.actionButtonCount++;
		let button = utils.make('span', ['outline-none', 'cursor-pointer'], {contentEditable: true, id: 'button'+this.actionButtonCount});
			if (element) {
				button.innerHTML = element.text;
				button.id = element.id;
				// this.getClassForItem(element);
				if (element.class) {
					element.class.filter(item => button.classList.add(item));
				}
				if (typeof element.style == 'object') {
					for(let st in element.style) {
						button.style[st] = element.style[st]
					}
				}
			} else {
				button.innerHTML = `Change Button${this.actionButtonCount} Text`;
				button.id = `button${this.actionButtonCount}`;
			}
		this.nodes.btnBlock.appendChild(button);

		let activeTitle = utils.make('span', ['px-3', 'py-1', 'text-center', 'cursor-pointer', 'text-xs', 'rounded', 'bg-white', 'hover:bg-blue-500', 'hover:text-white', 'mr-4'], {innerHTML: `Button ${this.actionButtonCount}`, id: 'at'+this.actionButtonCount});
			activeTitle.setAttribute('name', 'activeTitle');
		// btn setup block, hidden 
		let newSetup = utils.make('div', ['flex', 'flex-wrap', 'justify-between', 'max-w-7xl', 'items-center', 'hidden' ], {id: 'setupBtn'+this.actionButtonCount});
			newSetup.setAttribute('name', 'newSetup');
			let btnTextColor = utils.colorPickerModule('color', button);
				this.api.tooltip.onHover(btnTextColor, 'Text color', { placement: 'top', });
				btnTextColor.getElementsByTagName('input')[0].value = button.style.color ? utils.convertToHex(button.style.color) : '#FBFBFB';
			let btnFontFamily = utils.createSelector('Font family', utils.measurment.fontFamily, button);
				this.api.tooltip.onHover(btnFontFamily, 'Font family', { placement: 'top', });			
				btnFontFamily.classList.add('w-28', 'my-1');
				btnFontFamily.value = utils.getClassFromData(button, 'fontFamily');
			let btnFontSize = utils.createSelector('Font size', utils.measurment.fontSizes, button);
				this.api.tooltip.onHover(btnFontSize, 'Font size', { placement: 'top', });
				btnFontSize.classList.add('w-24', 'my-1');
				btnFontSize.value = utils.getClassFromData(button, 'fontSizes');
			let btnFontWeight = utils.createSelector('Font weight', utils.measurment.fontWeight, button);
				this.api.tooltip.onHover(btnFontWeight, 'Font weight', { placement: 'top', });
				btnFontWeight.classList.add('w-28', 'my-1');
				btnFontWeight.value = utils.getClassFromData(button, 'fontWeight');
			let btnFonColor = utils.colorPickerModule('backgroundColor', button);
				this.api.tooltip.onHover(btnFonColor, 'Fon color', { placement: 'top', });
				btnFonColor.getElementsByTagName('input')[0].value = button.style.backgroundColor ? utils.convertToHex(button.style.backgroundColor) : '#FBFBFB';
				btnFonColor.onchange = () => {
				  hideBtnFonColor.checked = true;
				}
			const hideBtnFonColor = utils.createCheckbox();
				this.api.tooltip.onHover(hideBtnFonColor, 'On/Off fon color', { placement: 'top', });
				hideBtnFonColor.checked = button.getAttribute('style') && button.style.backgroundColor ? true : false;
				  hideBtnFonColor.onchange = () => {
				    if (hideBtnFonColor.checked === false) { 
				      button.style.backgroundColor = '';
				      btnFonColor.getElementsByTagName('input')[0].value = '#FBFBFB';
				      button = button.cloneNode(true);
				    } else {
				      button.style.backgroundColor = utils.convertToHex(btnFonColor.getElementsByTagName('input')[0].value);
				    }
				  }  
			let btnRoundness = utils.createSelector('Radius', utils.measurment.bgRadius, button);
				this.api.tooltip.onHover(btnRoundness, 'Button roundness', { placement: 'top', });
				btnRoundness.classList.add('w-28', 'my-1');
				btnRoundness.value = utils.getClassFromData(button, 'bgRadius');
			const hideBtnBorder = utils.createCheckbox();
			let btnBorderColor = utils.colorPickerModule('borderColor', button);	
				this.api.tooltip.onHover(btnBorderColor, 'Button border color', { placement: 'top', });
				btnBorderColor.getElementsByTagName('input')[0].value = button.style.borderColor ? utils.convertToHex(button.style.borderColor) : '#FBFBFB';
				btnBorderColor.onchange = () => {
				  hideBtnBorder.checked = true;
				  button.classList.add('border-2');
				  btnBorderWidth.value = 'border-2';
				}
			hideBtnBorder.classList.add('ml-1', 'mr-2');
				this.api.tooltip.onHover(hideBtnBorder, 'On/Off Button border', { placement: 'top', });
				hideBtnBorder.checked = button.getAttribute('style') && button.style.borderColor ? true : false;
				  hideBtnBorder.onchange = () => {
				    if (hideBtnBorder.checked === false) { 
				      button.style.borderColor = '';
				      utils.measurment.border.filter(item => button.classList.remove(item));
				      btnBorderColor.getElementsByTagName('input')[0].value = '#FBFBFB';
				    } else {
				      button.style.borderColor = utils.convertToHex(btnBorderColor.getElementsByTagName('input')[0].value);
				    }
				  }   
			let btnBorderWidth = utils.createSelector('Border width', utils.measurment.border, button);
				this.api.tooltip.onHover(btnBorderWidth, 'Button border width', { placement: 'top', });
				btnBorderWidth.classList.add('w-28', 'my-1');
				btnBorderWidth.value = utils.getClassFromData(button, 'border');  
			let btnShadow = utils.createSelector('Shadow', utils.measurment.shadow, button);
				this.api.tooltip.onHover(btnShadow, 'Button shadow', { placement: 'top', });
				btnShadow.classList.add('w-28', 'my-1');
				btnShadow.value = utils.getClassFromData(button, 'shadow'); 
			let btnMX = utils.createSelector('mx', utils.measurment.marginX, button);
				this.api.tooltip.onHover(btnMX, 'Button margin X', { placement: 'top', });
				btnMX.classList.add('w-20', 'my-1');
				btnMX.value = utils.getClassFromData(button, 'marginX'); 
			let btnMY = utils.createSelector('my', utils.measurment.marginY, button);
				this.api.tooltip.onHover(btnMY, 'Button margin Y', { placement: 'top', });
				btnMY.classList.add('w-20', 'my-1');
				btnMY.value = utils.getClassFromData(button, 'marginY'); 
			let btnPX = utils.createSelector('px', utils.measurment.paddingX, button);
				this.api.tooltip.onHover(btnPX, 'Button padding X', { placement: 'top', });
				btnPX.classList.add('w-20', 'my-1');
				btnPX.value = utils.getClassFromData(button, 'paddingX'); 
			let btnPY = utils.createSelector('py', utils.measurment.paddingY, button);
				this.api.tooltip.onHover(btnPY, 'Button padding Y', { placement: 'top', });
				btnPY.classList.add('w-20', 'my-1');
				btnPY.value = utils.getClassFromData(button, 'paddingY'); 
			const btnReset = utils.createButton(utils.btn.reset);
			    btnReset.classList.add('ml-auto', 'text-gray-600', 'rounded-full', 'hover:bg-red-400', 'hover:text-white');
			    this.api.tooltip.onHover(btnReset, 'Reset button', { placement: 'top', });
			    btnReset.style.width = '26px';
			    btnReset.style.height = '26px';
			    btnReset.addEventListener('click', () => {
			    	button.className = '';
			    	button.style = '';
			    	hideBtnBorder.checked = hideBtnFonColor.checked = false;
			    	btnTextColor.getElementsByTagName('input')[0].value = '#282828';
			    	btnFonColor.getElementsByTagName('input')[0].value = '#FBFBFB';
			    	btnBorderColor.getElementsByTagName('input')[0].value = '#FBFBFB';
			    	btnPY.value = btnPX.value = btnMY.value = btnMX.value = btnShadow.value = btnBorderWidth.value = btnRoundness.value = btnFontSize.value = btnFontWeight.value = btnFontFamily.value = null;
			    });
			const btnRemove = utils.createButton(utils.btn.trash);
			    btnRemove.classList.add('ml-2', 'text-gray-600', 'rounded', 'hover:bg-red-400', 'hover:text-white');
			    this.api.tooltip.onHover(btnRemove, 'Remove button', { placement: 'top', });
			    btnRemove.style.width = '26px';
			    btnRemove.style.height = '26px';
			    btnRemove.addEventListener('click', () => {
			    	this.actionButtonCount --;
			    	button.remove();
			    	activeTitle.remove();
			    	newSetup.remove();
			    });

			utils.appendMany(newSetup, [btnTextColor, btnFontFamily, btnFontSize, btnFontWeight, btnFonColor, hideBtnFonColor, btnRoundness, btnBorderColor, hideBtnBorder,  btnBorderWidth, btnShadow, btnMX, btnMY, btnPX, btnPY, btnReset, btnRemove ]);
			// toggle active btn
			activeTitle.addEventListener('click', () => {
				let blocks = document.getElementsByName('newSetup');
				let buttons = document.getElementsByName('activeTitle');

				Array.from(buttons).filter(btn => {				 
					btn.classList.remove('bg-blue-400', 'text-gray-100');
					if (btn.id.substr(2) === activeTitle.getAttribute('id').substr(2)) {
						btn.classList.add('bg-blue-400', 'text-gray-100');
					}
				})

				Array.from(blocks).filter(block => {
					block.classList.add('hidden');
					if (block.id.substr(8) === activeTitle.getAttribute('id').substr(2)) {
						block.classList.remove('hidden');
					}
				});
			});
			// toggle btn colors
			if (hideBtnFonColor.checked) {
				button.addEventListener("mouseover", () => {
					button.style.backgroundColor = btnTextColor.getElementsByTagName('input')[0].value;
					button.style.color = btnFonColor.getElementsByTagName('input')[0].value;
				})
				button.addEventListener("mouseout", () => {
					button.style.backgroundColor = btnFonColor.getElementsByTagName('input')[0].value;
					button.style.color = btnTextColor.getElementsByTagName('input')[0].value;
				})
			}

		utils.appendMany(this.nodes.btnSetup, [activeTitle]);
		this.nodes.row4.appendChild(newSetup);	
	}

	getClasses(element) {
		let classArray = [];
		if (element && element.classList.length) {
			Array.from(element.classList).filter(item => classArray.push(item));
		}
		return classArray;
	} 

	getStyles(styleString) {
		if (!styleString) {
			return {};
		}
		// console.log('style string rushes: ', styleString);
		 
	    var obj = {}, s = styleString.toLowerCase().replace(/-(.)/g, function (m, g) {
	        return g.toUpperCase();
	    }).replace(/;\s?$/g,"").split(/:|;/g);
	    // console.log('styles apart: ', s);
	     
	    for (var i = 0; i < s.length; i += 2)
	        obj[s[i].replace(/\s/g,"")] = s[i+1].replace(/^\s+|\s+$/g,"");
	      // console.log('obg for save ', obj);
	       
	    return obj;
	}

	save(blockContent) {
		const title = blockContent.querySelector('#title');
		const subtitle = blockContent.querySelector('#subtitle');
		const description = blockContent.querySelector('#description');
		const output = blockContent.querySelector('#description').parentElement;

		let buttonBlock = {};

		let buttons = blockContent.querySelector('#buttonBlock');
		for (var i = 0; i < buttons.children.length; i++) {
			let btn = buttons.children[i];
			buttonBlock['button'+i] = {text: btn.innerHTML, class: this.getClasses(btn), style: this.getStyles(btn.getAttribute('style')), id: `button${i}`};
		}
		return {
		  title: {text: title.innerHTML, class: this.getClasses(title), style: this.getStyles(title.getAttribute('style'))},
		  subtitle: {text: subtitle.innerHTML, class: this.getClasses(subtitle), style: this.getStyles(subtitle.getAttribute('style'))},
		  description: {text: description.innerHTML, class: this.getClasses(description), style: this.getStyles(description.getAttribute('style'))},
		  output: {class: this.getClasses(output), style: this.getStyles(output.getAttribute('style'))},
					// output: {class: this.getClasses(output), style: this.getStyles(output.getAttribute('style')), stretched: this.data.output.stretched},
		  buttonBlock,
		}
	}
}

export default CallToAction