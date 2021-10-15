require('./editorParagraph.css').toString();
import * as utils from './editorUtility.js';

class editorParagraph {
  // Default placeholder for Paragraph Tool
  static get DEFAULT_PLACEHOLDER() {
    return 'You can!';
  }

  //Render plugin`s main Element and fill it with saved data
  constructor({data, config, api, readOnly}) {
    this.api = api;
    this.readOnly = readOnly;

    this._CSS = {
      block: this.api.styles.block,
      wrapper: 'ce-paragraph'
    };

    if (!this.readOnly) {
      this.onKeyUp = this.onKeyUp.bind(this);
    }

    // Placeholder for paragraph if it is first Block
    this._placeholder = config.placeholder ? config.placeholder : editorParagraph.DEFAULT_PLACEHOLDER;

    this._data = this.normalizeData(data);
    this._element = this.drawView();
    this._preserveBlank = config.preserveBlank !== undefined ? config.preserveBlank : false;

    // this.data = data;   
  }
  // Normalize input data
  normalizeData(data) {
    const newData = {};

    if (typeof data !== 'object') {
      data = {};
    }

    newData.text = data.text || '';
    newData.class = data.class !== undefined && data.class.length > 0 ? data.class : [];
    newData.style = data.style !== undefined && typeof data.style === 'object' ? data.style : {};
    newData.stretched = data.stretched !== undefined ? data.stretched : false;
     
    return newData;
  }

  // Check if text content is empty and set empty string to inner html.
  onKeyUp(e) {
    if (e.code !== 'Backspace' && e.code !== 'Delete') {
      return;
    }

    const {textContent} = this._element;
    if (textContent === '') {
      this._element.innerHTML = '';
    }
  }

  // Create Tool's view
  drawView() {
    let div = document.createElement('DIV');

    div.classList.add(this._CSS.wrapper, this._CSS.block);
    div.contentEditable = false;
    div.dataset.placeholder = this.api.i18n.t(this._placeholder);

    if (!this.readOnly) {
      div.contentEditable = true;
      div.addEventListener('keyup', this.onKeyUp);
    }

    return div;
  }

  // Normalize input data
  normalizeData(data) {
    const newData = {};

    if (typeof data !== 'object') {
      data = {};
    }

    newData.text = data.text || '';
    newData.class = data.class !== undefined && data.class.length > 0 ? data.class : [];
    newData.style = data.style !== undefined && typeof data.style === 'object' ? data.style : {};
    newData.stretched = data.stretched !== undefined ? data.stretched : false;
     
    return newData;
  }

  // Return Tool's view
  render() {
    if (this._data.stretched !== undefined && this._data.stretched == true) {
       Promise.resolve().then(() => {
          this.api.blocks.stretchBlock(this.api.blocks.getCurrentBlockIndex(), this._data.stretched);
       })
    }

    if (this._data.class && this._data.class.length) {
      this._data.class.forEach(item => {
        this._element.classList.add(item);
      })
    }
    if (this._data.style && typeof this._data.style !== undefined) {
      for (let key in this._data.style) {
        this._element.style[key] = this._data.style[key];
      }
    } 
    this._element.innerHTML = this._data.text;
    return this._element;
  }

  // Create Block's settings block
  renderSettings() {
    const holder = utils.make('DIV', ['bg-gray-100', 'p-1']);
    // define the row element for placing alignments, stretch and colorpickers element
    let row1 = utils.make('div', ['flex', 'items-center']);
    let row2 = utils.make('div', ['flex', 'items-center', 'mt-1']);
    let row3 = utils.make('div', ['flex', 'items-center', 'mt-1']);
    utils.appendMany(holder, [row1, row2, row3]);


    let alignment = utils.createLayoutPosition(['left', 'center', 'right'], this._element);
        this.api.tooltip.onHover(alignment, 'Text alignment', { placement: 'top', });
    // colorpickers
    let hideFonColor = utils.createCheckbox();
        this.api.tooltip.onHover(hideFonColor, 'On/Off background color', { placement: 'top', });
        hideFonColor.checked = this._element.style.backgroundColor ? true : false;
        hideFonColor.classList.add('ml-1', 'mr-2');
    let fonColor = utils.colorPickerModule('backgroundColor', this._element);
        this.api.tooltip.onHover(fonColor, 'Background color', { placement: 'top', });
        fonColor.getElementsByTagName('input')[0].value = this._element.style.backgroundColor ? utils.convertToHex(this._element.style.backgroundColor) : '#FBFBFB';
        fonColor.onchange = () => hideFonColor.checked = true;
        hideFonColor.onchange = () => {
          fonColor.getElementsByTagName('input')[0].value = '#FBFBFB';
          this._element.style.backgroundColor = '';
        }
    let textColor = utils.colorPickerModule('color', this._element);
        this.api.tooltip.onHover(textColor, 'Text color', { placement: 'top', });
        textColor.getElementsByTagName('input')[0].value = this._element.style.color ? utils.convertToHex(this._element.style.color) : '#282828';
    // selectors
    const shadow = utils.createSelector('Shadow', utils.measurment.shadow, this._element);
        this.api.tooltip.onHover(shadow, 'Font size', { placement: 'top', });
        shadow.classList.add('w-24');
        shadow.value = utils.getClassFromData(this._element, 'shadow'); 
    const fontSize = utils.createSelector('Font size', utils.measurment.fontSizes, this._element);
        this.api.tooltip.onHover(fontSize, 'Font size', { placement: 'top', });
        fontSize.classList.add('w-24');
        fontSize.value = utils.getClassFromData(this._element, 'fontSizes'); 
    const fontSelector = utils.createSelector('Font family', utils.measurment.fontFamily, this._element);
        this.api.tooltip.onHover(fontSelector, 'Font family', { placement: 'top', });
        fontSelector.classList.add('w-28');
        fontSelector.value = utils.getClassFromData(this._element, 'fontFamily'); 
    const fontWeight = utils.createSelector('Font weight', utils.measurment.fontWeight, this._element);
        this.api.tooltip.onHover(fontWeight, 'Font weight', { placement: 'top', });
        fontWeight.classList.add('w-28');
        fontWeight.value = utils.getClassFromData(this._element, 'fontWeight'); 
    const my = utils.createSelector('my', utils.measurment.marginY, this._element);
        this.api.tooltip.onHover(my, 'Margin Y', { placement: 'top', });
        my.classList.add('w-20');
        my.value = utils.getClassFromData(this._element, 'marginY'); 
    const pl = utils.createSelector('pl', utils.measurment.paddingL, this._element);
        this.api.tooltip.onHover(pl, 'Padding left', { placement: 'top', });
        pl.classList.add('w-20');
        pl.value = utils.getClassFromData(this._element, 'paddingL'); 
    const pr = utils.createSelector('pr', utils.measurment.paddingR, this._element);
        this.api.tooltip.onHover(pr, 'Padding right', { placement: 'top', });
        pr.classList.add('w-20');
        pr.value = utils.getClassFromData(this._element, 'paddingR'); 
    const py = utils.createSelector('py', utils.measurment.paddingY, this._element);
        this.api.tooltip.onHover(py, 'Padding Y', { placement: 'top', });
        py.classList.add('w-20');
        py.value = utils.getClassFromData(this._element, 'paddingY');
    const roundnes = utils.createSelector('BG radius', utils.measurment.bgRadius, this._element);
        this.api.tooltip.onHover(roundnes, 'Roundness', { placement: 'top', });
        roundnes.classList.add('w-28');
        roundnes.value = utils.getClassFromData(this._element, 'bgRadius'); 

    let border = utils.createCheckbox();
    let borderColor = utils.colorPickerModule('borderColor', this._element);  
      this.api.tooltip.onHover(borderColor, 'Button border color', { placement: 'top', });
      borderColor.getElementsByTagName('input')[0].value = this._element.style.borderColor ? utils.convertToHex(this._element.style.borderColor) : '#FBFBFB';
      borderColor.onchange = () => {
        border.checked = true;
        this._element.classList.add('border-2');
        borderWidth.value = 'border-2';
      }
    border.classList.add('ml-1', 'mr-2');
      this.api.tooltip.onHover(border, 'On/Off Button border', { placement: 'top', });
      border.checked = this._element.getAttribute('style') && this._element.style.borderColor ? true : false;
        border.onchange = () => {
          if (border.checked === false) { 
            this._element.style.borderColor = '';
            utils.measurment.border.filter(item => this._element.classList.remove(item));
            borderColor.getElementsByTagName('input')[0].value = '#FBFBFB';
          } else {
            this._element.style.borderColor = utils.convertToHex(borderColor.getElementsByTagName('input')[0].value);
          }
        }   
    let borderWidth = utils.createSelector('Border width', utils.measurment.border, this._element);
      this.api.tooltip.onHover(borderWidth, 'Button border width', { placement: 'top', });
      borderWidth.classList.add('w-28', 'my-1', 'mr-auto');
      borderWidth.value = utils.getClassFromData(this._element, 'border');  


    // buttons
    let stretched = utils.createButton(utils.btn.stretched);
        this.api.tooltip.onHover(stretched, 'Stretch container', { placement: 'top', });
        stretched.classList.add('mr-auto', 'ml-1');
        if (this._data.stretched) {
          stretched.classList.add('text-blue-500');
        } else {
          stretched.classList.add('text-gray-600');
        }
        stretched.addEventListener('click', () => {
          this._data.stretched = !this._data.stretched;
          stretched.classList.toggle('text-gray-600', !this._data.stretched)
          stretched.classList.toggle('text-blue-500', this._data.stretched)
          this.api.blocks.stretchBlock(this.api.blocks.getCurrentBlockIndex(), !!this._data.stretched);
        })

    const collection = utils.createButton(utils.btn.collection);
        collection.classList.add('mx-1', 'bg-white', 'text-gray-600', 'flex', 'justify-center', 'items-center', 'rounded', 'hover:bg-blue-500', 'hover:text-white', 'cursor-pointer');
        this.api.tooltip.onHover(collection, 'Load from template', { placement: 'top', });
        collection.addEventListener('click', () => {
          collection.classList.add('hidden');
          axios.get('/getParagraphs')
            .then(response => {              
              if (Object.keys(response.data).length) {
                this.updateParagraphSelector(response.data)
              };
            })
            .catch(error => {
                console.log(error);
            });      
        })

    const upload = utils.createButton(utils.btn.upload);
        upload.classList.add('bg-white', 'text-gray-600', 'mx-1', 'flex', 'justify-center', 'items-center', 'rounded', 'hover:bg-blue-500', 'hover:text-white', 'cursor-pointer');
        this.api.tooltip.onHover(upload, 'Save layout', { placement: 'top', });
        upload.addEventListener('click', () => {
          collection.classList.remove('hidden');
          this.ParagraphSelector.classList.add('hidden');
          let newTemplate = {
            stretched: this._data.stretched,
            text: '',
            class: utils.getClasses(this._element), 
            style: utils.getStyles(this._element),
          }
           
          let templateName = prompt('Save new template from current module', 'Enter template title');
          if (templateName) {
            axios.post('/saveParagraph', {
                templateName,
                params: JSON.stringify(newTemplate)
              })
              .then(response => {
                console.log(response);
              })
              .catch(error => {
                console.log(error);
              });
          }  
        })
    this.ParagraphSelector = document.createElement('select');
    this.ParagraphSelector.classList.add('py-1', 'px-2', 'hidden', 'bg-white', 'outline-none', 'border-none', 'rounded', 'cursor-pointer', 'ml-auto', 'w-32', 'text-xs');
        let option = document.createElement('option');
        option.text = 'Choose template';
        option.value = null;
        this.ParagraphSelector.appendChild(option);
        this.ParagraphSelector.onchange = () => {
          this.renderParagraph(JSON.parse(this.ParagraphSelector.value));
        }

    let clearBg = utils.createButton(utils.btn.clearBg);
        clearBg.classList.add('mx-1', 'w-36', 'text-xs', 'rounded', 'bg-white', 'hover:bg-red-400', 'hover:text-white');
        clearBg.style.height = '24px';
        clearBg.addEventListener('click', () => {
          this._element.style.backgroundColor = '';
          fonColor.getElementsByTagName('input')[0].value = "#FBFBFB";
          borderColor.getElementsByTagName('input')[0].value = "#FBFBFB";
          border.checked = hideFonColor.checked = false;
          utils.measurment.paddingL.filter(item => this._element.classList.remove(item));
          utils.measurment.paddingR.filter(item => this._element.classList.remove(item));
          utils.measurment.paddingY.filter(item => this._element.classList.remove(item));
          utils.measurment.marginY.filter(item => this._element.classList.remove(item));
          utils.measurment.bgRadius.filter(item => this._element.classList.remove(item));
          utils.measurment.shadow.filter(item => this._element.classList.remove(item));
          utils.measurment.border.filter(item => this._element.classList.remove(item));
          pl.value = pr.value = py.value = my.value = roundnes.value = shadow.value = borderWidth.value = null;
        })

    const reset = utils.createButton(utils.btn.reset, ['ml-6', 'text-gray-600', 'rounded-full', 'hover:bg-red-400', 'hover:text-white']);
        this.api.tooltip.onHover(reset, 'Reset layout', { placement: 'top', });
        reset.style.width = '26px';
        reset.style.height = '26px';
        reset.addEventListener('click', () => {
          this._element.style = '';
          this._element.className = '';
          this._data.stretched = false;
          pl.value = pr.value = py.value = my.value = roundnes.value = shadow.value = borderWidth.value = fontWeight.value = fontSize.value = fontSelector.value = null;
          textColor.getElementsByTagName('input')[0].value = '#282828';
          fonColor.getElementsByTagName('input')[0].value = '#FBFBFB';
          borderColor.getElementsByTagName('input')[0].value = '#FBFBFB';
          border.checked = hideFonColor.checked = false;
          this.api.blocks.stretchBlock(this.api.blocks.getCurrentBlockIndex(), !!this._data.stretched);
          this._element.classList.add('ai-header');
        })

    let control = utils.createControlGroup(this.api);  


    utils.appendMany(row1, [textColor, fontSize, fontSelector, fontWeight, alignment,  pl, pr, py, reset]);
    utils.appendMany(row2, [fonColor, hideFonColor, roundnes, shadow, my,  stretched, this.ParagraphSelector, collection, upload, clearBg]);
    utils.appendMany(row3, [borderColor, border, borderWidth, control]);
      
    return holder;
  }
  // get data from BD for template
  updateParagraphSelector(data) {    
    for(let key in data) {
      let option = document.createElement('option');
      option.text = key;
      option.value = data[key];
       
      this.ParagraphSelector.appendChild(option);
    }
    this.ParagraphSelector.classList.remove('hidden');
  }
  renderParagraph(data) {
    console.log('this updated data: ', data);
    data.text = this._element.innerHTML;
    // save index of current block in variable
    let index = this.api.blocks.getCurrentBlockIndex();
    // remove block by index
    this.api.blocks.delete(index);
    // insert new block with saved index and data
    this.api.blocks.insert("paragraph", data, null, index, true);
  }

  // Method that specified how to merge two Text blocks.
  merge(data) {
    let newData = {
      text : this.data.text + data.text
    };

    this.data = newData;
  }

  // Validate Paragraph block data: check for emptiness
  validate(savedData) {
    if (savedData.text.trim() === '' && !this._preserveBlank) {
      return false;
    }

    return true;
  }

  //  Extract Tool's data from the view
  save(toolsContent) {
    return {
      text: toolsContent.innerHTML,
      style: utils.getStyles(toolsContent),
      class: toolsContent.getAttribute('class').split(' '),
      stretched: this._data.stretched,
    };
  }

  // Get current Tools`s data
  get data() {
    // let text = this._element.innerHTML;
    this._data.text = text;
    this._data.class = this._element.class !== undefined && this._element.class.length > 0 ? this._element.class : [];
    this._data.style = this._element.style !== undefined && typeof this._element.style === 'object' ? this._element.style : {};
    this._data.stretched = data.stretched !== undefined ? data.stretched : false;

    return this._data;
  }

  // Store data in plugin:
  set data(data) {
    this._data = data || {};

    this._element.innerHTML = this._data.text || '';
  }

  // On paste callback fired from Editor.
  onPaste(event) {
    const data = {
      text: event.detail.data.innerHTML
    };

    this.data = data;
  }
  // Enable Conversion Toolbar. Paragraph can be converted to/from other tools
  static get conversionConfig() {
    return {
      export: 'text', // to convert Paragraph to other block, use 'text' property of saved data
      import: 'text' // to covert other block's exported string to Paragraph, fill 'text' property of tool data
    };
  }

  //  Sanitizer rules
  static get sanitize() {
    return {
      text: true,
      style: true,
      class: true,
      stretched: true,
    };
  }
  // Returns true to notify the core that read-only mode is supported
  static get isReadOnlySupported() {
    return true;
  }
  // Used by Editor paste handling API. Provides configuration to handle P tags. @returns {{tags: string[]}}
  static get pasteConfig() {
    return {
      tags: [ 'P' ]
    };
  }
  // Icon and title for displaying at the Toolbox
  static get toolbox() {
    return {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0.2 -0.3 9 11.4" width="12" height="14"><path d="M0 2.77V.92A1 1 0 01.2.28C.35.1.56 0 .83 0h7.66c.28.01.48.1.63.28.14.17.21.38.21.64v1.85c0 .26-.08.48-.23.66-.15.17-.37.26-.66.26-.28 0-.5-.09-.64-.26a1 1 0 01-.21-.66V1.69H5.6v7.58h.5c.25 0 .45.08.6.23.17.16.25.35.25.6s-.08.45-.24.6a.87.87 0 01-.62.22H3.21a.87.87 0 01-.61-.22.78.78 0 01-.24-.6c0-.25.08-.44.24-.6a.85.85 0 01.61-.23h.5V1.7H1.73v1.08c0 .26-.08.48-.23.66-.15.17-.37.26-.66.26-.28 0-.5-.09-.64-.26A1 1 0 010 2.77z"/></svg>',
      title: 'Paragraph Tool'
    };
  }
}

export default editorParagraph;