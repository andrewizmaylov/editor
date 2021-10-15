require('./editorHeader.css').toString();
import * as utils from './editorUtility.js';

class editorHeader {
  // Render plugin`s main Element and fill it with saved data
  constructor({ data, config, api, readOnly }) {
    this.api = api;
    this.readOnly = readOnly;
    // default class set will be defined later by level in this.innerStylesSet() method
    this.class = [];
    // Styles
    this._CSS = {
      block: this.api.styles.block,
      // settingsButton: 'cdx-settings-button',
      settingsButton: this.api.styles.settingsButton,
      settingsButtonActive: this.api.styles.settingsButtonActive,
      wrapper: 'ai-header', // override default style defenition remove padding and changed margin-bottom 
    };
    // Tool's settings passed from Editor
    this._settings = config;
    // Block's data @type {HeaderData} @private
    this._data = this.normalizeData(data);
    // List of settings buttons @type {HTMLElement[]} H1-H6
    this.settingsButtons = [];
    // Main Block wrapper  @type {HTMLElement} @private
    this._element = this.getTag();
  }

  // Normalize input data
  normalizeData(data) {
    const newData = {};

    if (typeof data !== 'object') {
      data = {};
    }

    newData.text = data.text || '';
    newData.level = parseInt(data.level) || this.defaultLevel.number;
    newData.class = data.class !== undefined && data.class.length > 0 ? data.class : [];
    newData.style = data.style !== undefined && typeof data.style === 'object' ? data.style : {};
    newData.stretched = data.stretched !== undefined ? data.stretched : false;
     
    return newData;
  }
  // Allow to use native Enter behaviour
  // static get enableLineBreaks() {
  //   return true;
  // }

  //  Return Tool's view
  render() {
    if (this._data.stretched !== undefined && this._data.stretched == true) {
       Promise.resolve().then(() => {
          this.api.blocks.stretchBlock(this.api.blocks.getCurrentBlockIndex(), this._data.stretched);
       })
    }
    if (this._data.class) {
      this._element.className = (this._data.class.join(' '));
    }
    this._element.classList.add(this._CSS.wrapper);
    if (this._data.style.backgroundColor) {
      this._element.style.backgroundColor = utils.convertToHex(this._data.style.backgroundColor);
    }
    if (this._data.style.color) {
      this._element.style.color = utils.convertToHex(this._data.style.color);
    }

    return this._element;
  }

  // Create Block's settings block
  renderSettings() {
    const holder = utils.make('DIV', ['bg-gray-100', 'p-1']);
    // define the row element for placing alignments, stretch and colorpickers element
    let row1 = utils.make('div', ['flex', 'items-center']);
    let row2 = utils.make('div', ['flex', 'items-center', 'mt-1']);
    utils.appendMany(holder, [row1, row2]);
    // H1-H6 row set
    let tags = utils.make('div', ['flex', 'items-center', 'mr-3']);
        this.api.tooltip.onHover(tags, 'Header size', { placement: 'top', });
    // Add type selectors 
    this.levels.forEach(level => {
      const selectTypeButton = utils.make('SPAN', [this._CSS.settingsButton, 'bg-white', 'w-7', 'h-7']);
      //  Highlight current level button
      if (this.currentLevel.number === level.number) {
        selectTypeButton.classList.add(this._CSS.settingsButtonActive);
      }
      //  Add SVG icon
      selectTypeButton.innerHTML = level.svg;
      // Save level to its button
      selectTypeButton.dataset.level = level.number;
      // Set up click handler
      selectTypeButton.addEventListener('click', () => {
        this.setLevel(level.number);
      });
      // Append settings button to holder
      tags.appendChild(selectTypeButton);
      //  Save settings buttons
      this.settingsButtons.push(selectTypeButton);
    });
    let alignment = utils.createLayoutPosition(['left', 'center', 'right'], this._element);
        this.api.tooltip.onHover(alignment, 'Text alignment', { placement: 'top', });
    // colorpickers
    let fonColor = utils.colorPickerModule('backgroundColor', this._element);
        this.api.tooltip.onHover(fonColor, 'Background color', { placement: 'top', });
        fonColor.getElementsByTagName('input')[0].value = this._element.style.backgroundColor ? utils.convertToHex(this._element.style.backgroundColor) : '#FBFBFB';
    let textColor = utils.colorPickerModule('color', this._element);
        this.api.tooltip.onHover(textColor, 'Text color', { placement: 'top', });
        textColor.getElementsByTagName('input')[0].value = this._element.style.color ? utils.convertToHex(this._element.style.color) : '#282828';
    // selectors
    // const fontSize = utils.createSelector('Font Size', utils.measurment.fontSizes, this._element);
        // this.api.tooltip.onHover(fontSize, 'Font size', { placement: 'top', });
    //     fontSize.classList.add('w-24');
    //     fontSize.value = utils.getClassFromData(this._element, 'fontSizes'); 
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
    const px = utils.createSelector('px', utils.measurment.paddingX, this._element);
        this.api.tooltip.onHover(px, 'Padding X', { placement: 'top', });
        px.classList.add('w-20');
        px.value = utils.getClassFromData(this._element, 'paddingX'); 
    const py = utils.createSelector('py', utils.measurment.paddingY, this._element);
        this.api.tooltip.onHover(py, 'Padding Y', { placement: 'top', });
        py.classList.add('w-20');
        py.value = utils.getClassFromData(this._element, 'paddingY');
    const roundnes = utils.createSelector('BG radius', utils.measurment.bgRadius, this._element);
        this.api.tooltip.onHover(roundnes, 'Roundness', { placement: 'top', });
        roundnes.classList.add('w-28');
        roundnes.value = utils.getClassFromData(this._element, 'bgRadius'); 
    // buttons
    let stretched = utils.createButton(utils.btn.stretched);
        this.api.tooltip.onHover(stretched, 'Stretch container', { placement: 'top', });
        stretched.classList.add('ml-5');
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

    let clearBg = utils.createButton(utils.btn.clearBg);
        clearBg.classList.add('ml-5', 'w-36', 'text-xs', 'rounded', 'bg-white', 'hover:bg-red-400', 'hover:text-white');
        clearBg.style.height = '24px';
        clearBg.addEventListener('click', () => {
          this._element.style.backgroundColor = '';
          fonColor.getElementsByTagName('input')[0].value = "#FBFBFB";
          utils.measurment.paddingX.filter(item => this._element.classList.remove(item));
          px.value = null;
          utils.measurment.paddingY.filter(item => this._element.classList.remove(item));
          py.value = null;
          utils.measurment.marginY.filter(item => this._element.classList.remove(item));
          my.value = null;
          utils.measurment.bgRadius.filter(item => this._element.classList.remove(item));
          roundnes.value = null;
        })

    const reset = utils.createButton(utils.btn.reset);
        reset.classList.add('ml-auto', 'text-gray-600', 'rounded-full', 'hover:bg-red-400', 'hover:text-white');
        this.api.tooltip.onHover(reset, 'Reset layout', { placement: 'top', });
        reset.style.width = '26px';
        reset.style.height = '26px';
        reset.addEventListener('click', () => {
          let level = this.currentLevel.tag;
          this._element.style = '';
          this._element.className = '';
          this._data.stretched = false;
          px.value = null;
          py.value = null;
          my.value = null;
          roundnes.value = null;
          fontSelector.value = null;
          fontWeight.value = null;
          textColor.getElementsByTagName('input')[0].value = '#282828';
          fonColor.getElementsByTagName('input')[0].value = '#FBFBFB';
          // this._element.style.color = "#282828";
          this.api.blocks.stretchBlock(this.api.blocks.getCurrentBlockIndex(), !!this._data.stretched);
          this._element.classList.add('ai-header', 'text-center');
          this.innerClassSet(level).forEach(item => this._element.classList.add(item));
        })
    let control = utils.createControlGroup(this.api);  
    // template elements
    this.templateSelector = document.createElement('select');
        this.api.tooltip.onHover(this.templateSelector, 'Choose template', { placement: 'top', });
        this.templateSelector.classList.add('hidden', 'py-1', 'w-32', 'bg-white', 'outline-none', 'border-none', 'rounded', 'hover:bg-blue-50', 'cursor-pointer', 'mx-1', 'text-xs');
        let option = document.createElement('option');
        option.text = 'Choose template';
        option.value = null;
        this.templateSelector.appendChild(option);
        this.templateSelector.onchange = () => {
          this.api.tooltip.hide();
          this.renderTemplate(JSON.parse(this.templateSelector.value));
        }

    const collection = utils.createButton(utils.btn.collection);
        collection.classList.add('ml-6', 'bg-white', 'ml-auto', 'text-gray-600', 'mx-1', 'flex', 'justify-center', 'items-center', 'rounded', 'hover:bg-blue-500', 'hover:text-white', 'cursor-pointer');
        this.api.tooltip.onHover(collection, 'Load from template', { placement: 'top', });
        collection.addEventListener('click', () => {
          collection.classList.add('hidden');
          axios.get('/getHeaders')
            .then(response => {
              if (Object.keys(response.data).length) {
                this.updateTemplateSelector(response.data)
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
          this.templateSelector.classList.add('hidden');
          let newTemplate = {
            text: '',
            level: this.currentLevel.number,
            style: utils.getStyles(this._element),
            class: utils.getClasses(this._element),
            stretched: this._data.stretched,
          }
          let templateName = prompt('Save new template from current module', 'Enter template title');
          if (templateName) {
            axios.post('/saveHeader', {
                // category: 'header',
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


    // row1.appendChild(fontSize);
    utils.appendMany(row1, [textColor, tags, fontSelector, fontWeight, alignment, this.templateSelector, collection, upload, reset]);
    utils.appendMany(row2, [fonColor, roundnes, my, px, py, stretched, clearBg, control]);

    return holder;
  }
  // get data from BD for template
  updateTemplateSelector(data) {
    for(let key in data) {
      let option = document.createElement('option');
      option.text = key;
      option.value = data[key];
       
      this.templateSelector.appendChild(option);
    }
    this.templateSelector.classList.remove('hidden');
  }
  renderTemplate(data) {
    console.log('this updated data: ', data);
    data.text = this._element.innerHTML;
    // save index of current block in variable
    let index = this.api.blocks.getCurrentBlockIndex();
    // remove block by index
    this.api.blocks.delete(index);
    // insert new block with saved index and data
    this.api.blocks.insert("header", data, null, index, true);
  }
  // filter given classes and set initial vallue for the selector
  getClassFromData(targetElement, data) {
    Array.from(this._element.classList).filter(item => {
      if (data.includes(item)) {
        targetElement.value = item;
      } 
    })
  }

  //  Callback for Block's settings buttons
  setLevel(level) {
    this.data = {
      level: level,
      text: this.data.text,
              class: this._data.class,
              style: this._data.style,
              stretched: this._data.stretched,
    };
    // Highlight button by selected level
    this.settingsButtons.forEach(button => {
      button.classList.toggle(this._CSS.settingsButtonActive, parseInt(button.dataset.level) === level);
    });
  }

  /**
   * Method that specified how to merge two Text blocks.
   * Called by Editor.js by backspace at the beginning of the Block
   */
  merge(data) {
    const newData = {
      text: this.data.text + data.text,
      level: this.data.level,
    };

    this.data = newData;
  }

  // Validate Text block data: check for emptiness
  validate(blockData) {
    return blockData.text.trim() !== '';
  }

  // Extract Tool's data from the view
  save(toolsContent) {
    return {
      text: toolsContent.innerHTML,
      level: this.currentLevel.number,
      style: utils.getStyles(this._element),
      class: utils.getClasses(this._element),
      stretched: this._data.stretched,
    };
  }

  // Allow Header to be converted to/from other blocks
  static get conversionConfig() {
    return {
      export: 'text', // use 'text' property for other blocks
      import: 'text', // fill 'text' property from other block's export string
    };
  }

  // Sanitizer Rules
  static get sanitize() {
    return {
      level: false,
      text: {},
      style: true,
      class: true,
      stretched: true,
    };
  }

  // Returns true to notify core that read-only is supported
  static get isReadOnlySupported() {
    return true;
  }

  // Get current Tools`s data. called then H1-H6 is pushed 
  get data() {
    console.log('pushed', this._data);
    this._data.text = this._element.innerHTML;
    this._data.level = this.currentLevel.number;
    this._data.class = this._data.class;
    this._data.style = this._data.style;
    this._data.stretched = this._data.stretched;
    return this._data;
  }

  /**
   * Store data in plugin:
   * - at the this._data property
   * - at the HTML
   *
   * @param {HeaderData} data — data to set
   * @private
   */
  set data(data) {
                    // console.log('data setting: ', data);
                    // console.log(data.class);
    // class array before H1-H6 pushed without previouse text-6xl --- text-xl 
    let classArray = data.class.filter(item => item.substr(6) !== 'xl'); 
                  // console.log(classArray);
     
    this._data = this.normalizeData(data);
                  // console.log('after norm', this._data);
                  // console.log('after norm from _element', this._element);
       
    // If level is set and block in DOM then replace it to a new block
    if (data.level !== undefined && this._element.parentNode) {
      // Create a new tag @type {HTMLHeadingElement} with predefined size 7xl-2xl
      const newHeader = this.getTag();
      // add previouse classes and styles
      classArray.forEach(el => newHeader.classList.add(el));
      if (data.style.backgroundColor) {
        newHeader.style.backgroundColor = data.style.backgroundColor;
      }
      if (data.style.color) {
        newHeader.style.color = data.style.color;
      }
      // Save Block's content
      newHeader.innerHTML = this._element.innerHTML;
      // Replace blocks
      this._element.parentNode.replaceChild(newHeader, this._element);
      //  Save new block to private variable
      this._element = newHeader;
    }
    // If data.text was passed then update block's content
    if (data.text !== undefined) {
      this._element.innerHTML = this._data.text || '';
    }
  }

  //  Get tag for target level. By default returns second-leveled header
  getTag() {   
    // Create element for current Block's level
    const tag = document.createElement(this.currentLevel.tag);
    // Add text to block
    tag.innerHTML = this._data.text || '';
    // Add styles class
    tag.classList.add(this._CSS.wrapper);
    // set and reformat H1-H6 accordinally
    tag.classList.add(this.innerClassSet(this.currentLevel.tag));
    
    // Make tag editable
    tag.contentEditable = this.readOnly ? 'false' : 'true';
    //Add Placeholder
    tag.dataset.placeholder = this.api.i18n.t(this._settings.placeholder || '');
 
    return tag;
  }
  // new H1-H6 classes for render view and output
  innerClassSet(tag) {
    switch (tag) {
      case 'H1':
        return 'text-7xl';
        break;
      case 'H2':
        return 'text-6xl';
        break;
      case 'H3':
        return 'text-5xl';
        break;
      case 'H4':
        return 'text-4xl';
        break;
      case 'H5':
        return 'text-3xl';
        break;
      case 'H6':
        return 'text-2xl';
        break;
    }
    // console.log(class);
    // return this.class;
  }

  // Get current level
  get currentLevel() {
    let level = this.levels.find(levelItem => levelItem.number === this._data.level);

    if (!level) {
      level = this.defaultLevel;
    }

    return level; // { number, tag, path }
  }

  // Return default level
  get defaultLevel() {
    // User can specify own default level value
    if (this._settings.defaultLevel) {
      const userSpecified = this.levels.find(levelItem => {
        return levelItem.number === this._settings.defaultLevel;
      });

      if (userSpecified) {
        return userSpecified;
      } else {
        console.warn('(ง\'̀-\'́)ง Heading Tool: the default level specified was not found in available levels');
      }
    }
    // With no additional options, there will be H2 by default
    return this.levels[1];
  }

  // Available header levels @returns {level[]}
  get levels() {
    const availableLevels = [
      { number: 1, tag: 'H1', svg: '<svg width="16" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M2.14 1.494V4.98h4.62V1.494c0-.498.098-.871.293-1.12A.927.927 0 0 1 7.82 0c.322 0 .583.123.782.37.2.246.3.62.3 1.124v9.588c0 .503-.101.88-.303 1.128a.957.957 0 0 1-.779.374.921.921 0 0 1-.77-.378c-.193-.251-.29-.626-.29-1.124V6.989H2.14v4.093c0 .503-.1.88-.302 1.128a.957.957 0 0 1-.778.374.921.921 0 0 1-.772-.378C.096 11.955 0 11.58 0 11.082V1.494C0 .996.095.623.285.374A.922.922 0 0 1 1.06 0c.321 0 .582.123.782.37.199.246.299.62.299 1.124zm11.653 9.985V5.27c-1.279.887-2.14 1.33-2.583 1.33a.802.802 0 0 1-.563-.228.703.703 0 0 1-.245-.529c0-.232.08-.402.241-.511.161-.11.446-.25.854-.424.61-.259 1.096-.532 1.462-.818a5.84 5.84 0 0 0 .97-.962c.282-.355.466-.573.552-.655.085-.082.246-.123.483-.123.267 0 .481.093.642.28.161.186.242.443.242.77v7.813c0 .914-.345 1.371-1.035 1.371-.307 0-.554-.093-.74-.28-.187-.186-.28-.461-.28-.825z"/></svg>', },
      { number: 2, tag: 'H2', svg: '<svg width="18" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M2.152 1.494V4.98h4.646V1.494c0-.498.097-.871.293-1.12A.934.934 0 0 1 7.863 0c.324 0 .586.123.786.37.2.246.301.62.301 1.124v9.588c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378c-.194-.251-.29-.626-.29-1.124V6.989H2.152v4.093c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378C.097 11.955 0 11.58 0 11.082V1.494C0 .996.095.623.286.374A.929.929 0 0 1 1.066 0c.323 0 .585.123.786.37.2.246.3.62.3 1.124zm10.99 9.288h3.527c.351 0 .62.072.804.216.185.144.277.34.277.588 0 .22-.073.408-.22.56-.146.154-.368.23-.665.23h-4.972c-.338 0-.601-.093-.79-.28a.896.896 0 0 1-.284-.659c0-.162.06-.377.182-.645s.255-.478.399-.631a38.617 38.617 0 0 1 1.621-1.598c.482-.444.827-.735 1.034-.875.369-.261.676-.523.922-.787.245-.263.432-.534.56-.81.129-.278.193-.549.193-.815 0-.288-.069-.546-.206-.773a1.428 1.428 0 0 0-.56-.53 1.618 1.618 0 0 0-.774-.19c-.59 0-1.054.26-1.392.777-.045.068-.12.252-.226.554-.106.302-.225.534-.358.696-.133.162-.328.243-.585.243a.76.76 0 0 1-.56-.223c-.149-.148-.223-.351-.223-.608 0-.31.07-.635.21-.972.139-.338.347-.645.624-.92a3.093 3.093 0 0 1 1.054-.665c.426-.169.924-.253 1.496-.253.69 0 1.277.108 1.764.324.315.144.592.343.83.595.24.252.425.544.558.875.133.33.2.674.2 1.03 0 .558-.14 1.066-.416 1.523-.277.457-.56.815-.848 1.074-.288.26-.771.666-1.45 1.22-.677.554-1.142.984-1.394 1.29a3.836 3.836 0 0 0-.331.44z"/></svg>', },
      { number: 3, tag: 'H3', svg: '<svg width="18" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M2.152 1.494V4.98h4.646V1.494c0-.498.097-.871.293-1.12A.934.934 0 0 1 7.863 0c.324 0 .586.123.786.37.2.246.301.62.301 1.124v9.588c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378c-.194-.251-.29-.626-.29-1.124V6.989H2.152v4.093c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378C.097 11.955 0 11.58 0 11.082V1.494C0 .996.095.623.286.374A.929.929 0 0 1 1.066 0c.323 0 .585.123.786.37.2.246.3.62.3 1.124zm11.61 4.919c.418 0 .778-.123 1.08-.368.301-.245.452-.597.452-1.055 0-.35-.12-.65-.36-.902-.241-.252-.566-.378-.974-.378-.277 0-.505.038-.684.116a1.1 1.1 0 0 0-.426.306 2.31 2.31 0 0 0-.296.49c-.093.2-.178.388-.255.565a.479.479 0 0 1-.245.225.965.965 0 0 1-.409.081.706.706 0 0 1-.5-.22c-.152-.148-.228-.345-.228-.59 0-.236.071-.484.214-.745a2.72 2.72 0 0 1 .627-.746 3.149 3.149 0 0 1 1.024-.568 4.122 4.122 0 0 1 1.368-.214c.44 0 .842.06 1.205.18.364.12.679.294.947.52.267.228.47.49.606.79.136.3.204.622.204.967 0 .454-.099.843-.296 1.168-.198.324-.48.64-.848.95.354.19.653.408.895.653.243.245.426.516.548.813.123.298.184.619.184.964 0 .413-.083.812-.248 1.198-.166.386-.41.73-.732 1.031a3.49 3.49 0 0 1-1.147.708c-.443.17-.932.256-1.467.256a3.512 3.512 0 0 1-1.464-.293 3.332 3.332 0 0 1-1.699-1.64c-.142-.314-.214-.573-.214-.777 0-.263.085-.475.255-.636a.89.89 0 0 1 .637-.242c.127 0 .25.037.367.112a.53.53 0 0 1 .232.27c.236.63.489 1.099.759 1.405.27.306.65.46 1.14.46a1.714 1.714 0 0 0 1.46-.824c.17-.273.256-.588.256-.947 0-.53-.145-.947-.436-1.249-.29-.302-.694-.453-1.212-.453-.09 0-.231.01-.422.028-.19.018-.313.027-.367.027-.25 0-.443-.062-.579-.187-.136-.125-.204-.299-.204-.521 0-.218.081-.394.245-.528.163-.134.406-.2.728-.2h.28z"/></svg>', },
      { number: 4, tag: 'H4',  svg: '<svg width="18" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M2.152 1.494V4.98h4.646V1.494c0-.498.097-.871.293-1.12A.934.934 0 0 1 7.863 0c.324 0 .586.123.786.37.2.246.301.62.301 1.124v9.588c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378c-.194-.251-.29-.626-.29-1.124V6.989H2.152v4.093c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378C.097 11.955 0 11.58 0 11.082V1.494C0 .996.095.623.286.374A.929.929 0 0 1 1.066 0c.323 0 .585.123.786.37.2.246.3.62.3 1.124zm13.003 10.09v-1.252h-3.38c-.427 0-.746-.097-.96-.29-.213-.193-.32-.456-.32-.788 0-.085.016-.171.048-.259.031-.088.078-.18.141-.276.063-.097.128-.19.195-.28.068-.09.15-.2.25-.33l3.568-4.774a5.44 5.44 0 0 1 .576-.683.763.763 0 0 1 .542-.212c.682 0 1.023.39 1.023 1.171v5.212h.29c.346 0 .623.047.832.142.208.094.313.3.313.62 0 .26-.086.45-.256.568-.17.12-.427.179-.768.179h-.41v1.252c0 .346-.077.603-.23.771-.152.168-.356.253-.612.253a.78.78 0 0 1-.61-.26c-.154-.173-.232-.427-.232-.764zm-2.895-2.76h2.895V4.91L12.26 8.823z"/></svg>', },
      { number: 5, tag: 'H5', svg: '<svg width="18" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M2.152 1.494V4.98h4.646V1.494c0-.498.097-.871.293-1.12A.934.934 0 0 1 7.863 0c.324 0 .586.123.786.37.2.246.301.62.301 1.124v9.588c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378c-.194-.251-.29-.626-.29-1.124V6.989H2.152v4.093c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378C.097 11.955 0 11.58 0 11.082V1.494C0 .996.095.623.286.374A.929.929 0 0 1 1.066 0c.323 0 .585.123.786.37.2.246.3.62.3 1.124zm14.16 2.645h-3.234l-.388 2.205c.644-.344 1.239-.517 1.783-.517.436 0 .843.082 1.222.245.38.164.712.39.998.677.286.289.51.63.674 1.025.163.395.245.82.245 1.273 0 .658-.148 1.257-.443 1.797-.295.54-.72.97-1.276 1.287-.556.318-1.197.477-1.923.477-.813 0-1.472-.15-1.978-.45-.506-.3-.865-.643-1.076-1.031-.21-.388-.316-.727-.316-1.018 0-.177.073-.345.22-.504a.725.725 0 0 1 .556-.238c.381 0 .665.22.85.66.182.404.427.719.736.943.309.225.654.337 1.035.337.35 0 .656-.09.919-.272.263-.182.466-.431.61-.749.142-.318.214-.678.214-1.082 0-.436-.078-.808-.232-1.117a1.607 1.607 0 0 0-.62-.69 1.674 1.674 0 0 0-.864-.229c-.39 0-.67.048-.837.143-.168.095-.41.262-.725.5-.316.239-.576.358-.78.358a.843.843 0 0 1-.592-.242c-.173-.16-.259-.344-.259-.548 0-.022.025-.177.075-.463l.572-3.26c.063-.39.181-.675.354-.852.172-.177.454-.265.844-.265h3.595c.708 0 1.062.27 1.062.81a.711.711 0 0 1-.26.572c-.172.145-.426.218-.762.218z"/></svg>', },
      { number: 6, tag: 'H6', svg: '<svg width="18" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M2.152 1.494V4.98h4.646V1.494c0-.498.097-.871.293-1.12A.934.934 0 0 1 7.863 0c.324 0 .586.123.786.37.2.246.301.62.301 1.124v9.588c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378c-.194-.251-.29-.626-.29-1.124V6.989H2.152v4.093c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378C.097 11.955 0 11.58 0 11.082V1.494C0 .996.095.623.286.374A.929.929 0 0 1 1.066 0c.323 0 .585.123.786.37.2.246.3.62.3 1.124zM12.53 7.058a3.093 3.093 0 0 1 1.004-.814 2.734 2.734 0 0 1 1.214-.264c.43 0 .827.08 1.19.24.365.161.684.39.957.686.274.296.485.645.635 1.048a3.6 3.6 0 0 1 .223 1.262c0 .637-.145 1.216-.437 1.736-.292.52-.699.926-1.221 1.218-.522.292-1.114.438-1.774.438-.76 0-1.416-.186-1.967-.557-.552-.37-.974-.919-1.265-1.645-.292-.726-.438-1.613-.438-2.662 0-.855.088-1.62.265-2.293.176-.674.43-1.233.76-1.676.33-.443.73-.778 1.2-1.004.47-.226 1.006-.339 1.608-.339.579 0 1.089.113 1.53.34.44.225.773.506.997.84.224.335.335.656.335.964 0 .185-.07.354-.21.505a.698.698 0 0 1-.536.227.874.874 0 0 1-.529-.18 1.039 1.039 0 0 1-.36-.498 1.42 1.42 0 0 0-.495-.655 1.3 1.3 0 0 0-.786-.247c-.24 0-.479.069-.716.207a1.863 1.863 0 0 0-.6.56c-.33.479-.525 1.333-.584 2.563zm1.832 4.213c.456 0 .834-.186 1.133-.56.298-.373.447-.862.447-1.468 0-.412-.07-.766-.21-1.062a1.584 1.584 0 0 0-.577-.678 1.47 1.47 0 0 0-.807-.234c-.28 0-.548.074-.804.224-.255.149-.461.365-.617.647a2.024 2.024 0 0 0-.234.994c0 .61.158 1.12.475 1.527.316.407.714.61 1.194.61z"/></svg>', },
    ];

    return this._settings.levels ? availableLevels.filter(
      l => this._settings.levels.includes(l.number)
    ) : availableLevels;
  }

  // Handle H1-H6 tags on paste to substitute it with header Tool @param {PasteEvent} event - event with pasted content
  onPaste(event) {
    const content = event.detail.data;
    // Define default level value
    let level = this.defaultLevel.number;

    switch (content.tagName) {
      case 'H1':
        level = 1;
        break;
      case 'H2':
        level = 2;
        break;
      case 'H3':
        level = 3;
        break;
      case 'H4':
        level = 4;
        break;
      case 'H5':
        level = 5;
        break;
      case 'H6':
        level = 6;
        break;
    }

    if (this._settings.levels) {
      // Fallback to nearest level when specified not available
      level = this._settings.levels.reduce((prevLevel, currLevel) => {
        return Math.abs(currLevel - level) < Math.abs(prevLevel - level) ? currLevel : prevLevel;
      });
    }

    this.data = {
      level,
      text: content.innerHTML,
    };
  }

  // Used by Editor.js paste handling API.  Provides configuration to handle H1-H6 tags. @returns {{handler: (function(HTMLElement): {text: string}), tags: string[]}}
  static get pasteConfig() {
    return {
      tags: ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'],
    };
  }

  // Get Tool toolbox settings
  static get toolbox() {
    return {
      icon: '<svg width="10" height="14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 14"><path d="M7.6 8.15H2.25v4.525a1.125 1.125 0 0 1-2.25 0V1.125a1.125 1.125 0 1 1 2.25 0V5.9H7.6V1.125a1.125 1.125 0 0 1 2.25 0v11.55a1.125 1.125 0 0 1-2.25 0V8.15z"/></svg>',
      title: 'Header Tool',
    };
  }

}
export default editorHeader;