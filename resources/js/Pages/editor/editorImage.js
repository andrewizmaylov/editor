import css from './editorImage.css';
import Uploader from './editorImageUploader.js';
import * as utils from './editorUtility.js';

export default class ImageTool {
  // Notify core that read-only mode is supported
  static get isReadOnlySupported() {
    return true;
  }

  // Get Tool toolbox settings
  static get toolbox() {
    return {
      icon: '<svg width="17" height="15" viewBox="0 0 336 276" xmlns="http://www.w3.org/2000/svg"><path d="M291 150.242V79c0-18.778-15.222-34-34-34H79c-18.778 0-34 15.222-34 34v42.264l67.179-44.192 80.398 71.614 56.686-29.14L291 150.242zm-.345 51.622l-42.3-30.246-56.3 29.884-80.773-66.925L45 174.187V197c0 18.778 15.222 34 34 34h178c17.126 0 31.295-12.663 33.655-29.136zM79 0h178c43.63 0 79 35.37 79 79v118c0 43.63-35.37 79-79 79H79c-43.63 0-79-35.37-79-79V79C0 35.37 35.37 0 79 0z"/></svg>',
      title: 'Editor Image',
    };
  }

  //  @param {object} tool - tool properties got from editor.js
  constructor({ data, config, api, readOnly }) {
    this.api = api;
    this.readOnly = readOnly;

    // Tool's initial config
    this.config = {
      endpoints: config.endpoints || '',
      additionalRequestData: config.additionalRequestData || {},
      additionalRequestHeaders: config.additionalRequestHeaders || {},
      field: config.field || 'image',
      types: config.types || 'image/*',
      captionPlaceholder: this.api.i18n.t(config.captionPlaceholder || 'Caption'),
      buttonContent: config.buttonContent || '',
      uploader: config.uploader || undefined,
      actions: config.actions || [],
    };

    // Module for file uploading
    this.uploader = new Uploader({
      config: this.config,
      onUpload: (response) => this.onUpload(response),
      onError: (error) => this.uploadingFailed(error),
    });

    this.CSS = {
      containerStart: ['my-4', 'w-2/3', 'mx-auto', 'py-16', 'bg-gray-100', 'rounded', 'shadow'],
      captionBlockStart: ['text-xs', 'text-gray-500', 'ml-4'],
      imageBlockStart: ['w-6', 'text-gray-500'],

      // imagePreloader: 'image-tool__image-preloader', 
    };

    // this.statuses = ['empty', 'filled'];
    // this.paste = false;

    this.container = utils.make('div', ['flex', 'items-center', 'justify-center', ...this.CSS.containerStart], {id: 'container'});
    this.imageBlock = utils.make('img', [...this.CSS.imageBlockStart, 'cursor-pointer'], {id: 'imageBlock', src: window.location.origin+'/img/spinner.gif'});
    this.captionBlock = utils.make('span', ['outline-none', ...this.CSS.captionBlockStart], {id: 'captionBlock', contentEditable: true});

    // Set saved state
    this._data = this.normalizeData(data);
    this.data = data;
  }
  // Normalize input data
  normalizeData(data) {
    const newData = {};

    if (typeof data !== 'object') {
      data = {};
    }
    newData.file = data.file || {};
    newData.container = data.container !== undefined ? data.container : {};
    newData.imageBlock = data.imageBlock !== undefined ? data.imageBlock : {};
    newData.captionBlock = data.captionBlock !== undefined ? data.captionBlock : {};
     
    return newData;
  }

  //  Renders Block content  @returns {HTMLDivElement}
  render() {
    if (this.data && this.data.container.stretched !== undefined && this.data.container.stretched == true) {
       Promise.resolve().then(() => {
          this.api.blocks.stretchBlock(this.api.blocks.getCurrentBlockIndex(), this.data.container.stretched);
       })
    }
    // define imageBlock if exists
    if (this.data && this.data.file && Object.keys(this.data.file).length !== 0) {

      // set status for prevent select file dialog
//       this.toggleStatus('filled');
// console.log('check status empty, data image exists: ', this.container.classList.contains('empty'));
// console.log('check status upload, data image exists: ', this.container.classList.contains('loading'));

      // clear initial decoration
      this.container.classList.remove(...this.CSS.containerStart);
      this.imageBlock.classList.remove(...this.CSS.imageBlockStart);
      this.captionBlock.classList.remove(...this.CSS.captionBlockStart);
      // set image url
      this.imageBlock.src = this.data.file.url;
      this.imageBlock.addEventListener('click', () => {
          this.uploader.uploadSelectedFile({
            onPreview: (src) => {

              console.log('onPreview: (src) 413', 'mini with spinner arround here');
            },
          });
        })
      // set image decoration
      if (this.data.imageBlock && this.data.imageBlock.class) {
        this.imageBlock.classList.add('h-full', ...this.data.imageBlock.class);
      } 
      if (this.data.imageBlock && this.data.imageBlock.style) {
        for (let key in this.data.imageBlock.style) {
          this.imageBlock.style[key] = this.data.imageBlock.style[key];
        }
      }
      // define container if exists
      if (this.data && this.data.container && this.data.container.class) {
        this.container.classList.add(...this.data.container.class);
      } 
      if (this.data && this.data.container && this.data.container.style) {
        for (let key in this.data.container.style) {
          this.container.style[key] = this.data.container.style[key];
        }
      }
      // define captionBlock if exists
      if (this.data && this.data.captionBlock && this.data.captionBlock.class) {
        // this.captionBlock.classList.remove('hidden');
        this.captionBlock.classList.add(...this.data.captionBlock.class);
      } 
      if (this.data && this.data.captionBlock && this.data.captionBlock.style) {
        for (let key in this.data.captionBlock.style) {
          this.captionBlock.style[key] = this.data.captionBlock.style[key];
        }
      }
      if (this.data && this.data.captionBlock && this.data.captionBlock.text) {
        this.captionBlock.innerHTML = this.data.captionBlock.text;
      }
    } else {
      // this.captionBlock.innerHTML = `Select image for uploadascascasa`;
      // this.imageBlock.innerHTML = window.location.origin+'/img/spinner.gif'+'  Select image for upload';
      this.uploader.uploadSelectedFile({});

      // this.captionBlock.classList.add('cursor-pointer');
      // this.captionBlock.addEventListener('click', () => {
      //   this.captionBlock.removeEventListener('click', () => this.uploader.uploadSelectedFile({}) );
      //   this.captionBlock.classList.remove('cursor-pointer');
      // });
      // set status for activate select file dialog
//       this.toggleStatus('empty');
// console.log('check status empty: ', this.container.classList.contains('empty'));
// console.log('check status upload: ', this.container.classList.contains('loading'));
//       if (this.paste === false) {
//         this.uploader.uploadSelectedFile({});
//       }
    }

    this.container.appendChild(this.imageBlock);
    this.container.appendChild(this.captionBlock);
    return this.container;
  }

  // Return Block data @returns {ImageToolData}
  save(blockContent) {
    const container = blockContent.querySelector('span').parentElement;
    const image = blockContent.querySelector('img');
    const caption = blockContent.querySelector('span');

    return {
      file: {url: image.src},
      container: {class: utils.getClasses(container), style: utils.getStyles(container), stretched: this.data.container.stretched},
      imageBlock: {class: utils.getClasses(image), style: utils.getStyles(image), url: image.src}, 
      captionBlock: {text: caption.innerHTML, class: utils.getClasses(caption), style: utils.getStyles(caption)},
    }

  }

  // Sanitizer Rules
  static get sanitize() {
    return {
      file: true,
      container: true,
      imageBlock: true,
      captionBlock: true,
    };
  }

  // Makes buttons with tunes: add background, add border, stretch image
  renderSettings() {
    // return this.tunes.render(this.data);
    const holder = utils.make('DIV', ['bg-gray-100', 'p-2']);
    // define the row element for placing alignments, stretch and colorpickers element
    const row1 = utils.make('div', ['flex', 'items-center', 'mt-1', 'ml-1']);
    const row2 = utils.make('div', ['flex', 'items-center', 'mt-1', 'ml-1']);
    const row3 = utils.make('div', ['flex', 'items-center']);
    const row4 = utils.make('div', ['flex', 'items-center', 'mt-1']);

    const alignment = utils.createLayoutPosition(['left', 'center', 'right'], this.captionBlock);
        this.api.tooltip.onHover(alignment, 'Text alignment', { placement: 'top', });
    // colorpickers and checkbox
    const hideFonColor = utils.createCheckbox();
    const hideBorder = utils.createCheckbox();
    const hideImageBorder = utils.createCheckbox();
    const hideTextColor = utils.createCheckbox();
    const imageBorder = utils.colorPickerModule('borderColor', this.imageBlock);
        this.api.tooltip.onHover(imageBorder, 'Image border color', { placement: 'top', });
        imageBorder.getElementsByTagName('input')[0].value = this.imageBlock.style.borderColor ? utils.convertToHex(this.imageBlock.style.borderColor) : '#FBFBFB';
        imageBorder.onchange = () => {
          hideImageBorder.checked = true;
          this.imageBlock.classList.add('border-2');
          imageBorderWidth.value = 'border-2';
        }
    const fonColor = utils.colorPickerModule('backgroundColor', this.container);
        this.api.tooltip.onHover(fonColor, 'Background color', { placement: 'top', });
        fonColor.getElementsByTagName('input')[0].value = this.container.style.backgroundColor ? utils.convertToHex(this.container.style.backgroundColor) : '#FBFBFB';
        fonColor.onchange = () => {
          hideFonColor.checked = true;
        }
    const borderColor = utils.colorPickerModule('borderColor', this.container);
        this.api.tooltip.onHover(borderColor, 'Border color', { placement: 'top', });
        borderColor.getElementsByTagName('input')[0].value = this.container.style.borderColor ? utils.convertToHex(this.container.style.borderColor) : '#FBFBFB';
        borderColor.onchange = () => {
          hideBorder.checked = true;
          this.container.classList.add('border-2');
          borderWidth.value = 'border-2';
        }
    const textColor = utils.colorPickerModule('color', this.captionBlock);
        this.api.tooltip.onHover(textColor, 'Text color', { placement: 'top', });
        textColor.getElementsByTagName('input')[0].value = this.captionBlock.style.color ? utils.convertToHex(this.captionBlock.style.color) : '#282828';
        textColor.onchange = () => {
          hideTextColor.checked = true;
        }
    // selectors
    const textSize = utils.createSelector('Size', utils.measurment.fontSizes, this.captionBlock);
        this.api.tooltip.onHover(textSize, 'Text size', { placement: 'top', });
        textSize.classList.add('w-20');
        textSize.value = utils.getClassFromData(this.captionBlock, 'fontSizes'); 
    const plText = utils.createSelector('pl', utils.measurment.paddingL, this.captionBlock);
        this.api.tooltip.onHover(plText, 'Text Padding Left', { placement: 'top', });
        plText.classList.add('w-20');
        plText.value = utils.getClassFromData(this.captionBlock, 'paddingL'); 
    const prText = utils.createSelector('pr', utils.measurment.paddingR, this.captionBlock);
        this.api.tooltip.onHover(prText, 'Text Padding Right', { placement: 'top', });
        prText.classList.add('w-20');
        prText.value = utils.getClassFromData(this.captionBlock, 'paddingR'); 
    const ptText = utils.createSelector('pt', utils.measurment.paddingT, this.captionBlock);
        this.api.tooltip.onHover(ptText, 'Text Padding Top', { placement: 'top', });
        ptText.classList.add('w-20');
        ptText.value = utils.getClassFromData(this.captionBlock, 'paddingT'); 
    const pbText = utils.createSelector('pb', utils.measurment.paddingB, this.captionBlock);
        this.api.tooltip.onHover(pbText, 'Text Padding Bottom', { placement: 'top', });
        pbText.classList.add('w-20');
        pbText.value = utils.getClassFromData(this.captionBlock, 'paddingB'); 
    const pxText = utils.createSelector('px', utils.measurment.paddingX, this.captionBlock);
        this.api.tooltip.onHover(pxText, 'Text Padding X', { placement: 'top', });
        pxText.classList.add('w-20');
        pxText.value = utils.getClassFromData(this.captionBlock, 'paddingX');
    const mx = utils.createSelector('mx', utils.measurment.marginX, this.container);
        this.api.tooltip.onHover(mx, 'Container MarginX', { placement: 'top', });
        mx.classList.add('w-20');
        mx.value = utils.getClassFromData(this.container, 'marginX'); 
    const my = utils.createSelector('my', utils.measurment.marginY, this.container);
        this.api.tooltip.onHover(my, 'Container MarginY', { placement: 'top', });
        my.classList.add('w-20');
        my.value = utils.getClassFromData(this.container, 'marginY'); 
    const px = utils.createSelector('px', utils.measurment.paddingX, this.container);
        this.api.tooltip.onHover(px, 'Container PaddingX', { placement: 'top', });
        px.classList.add('w-20');
        px.value = utils.getClassFromData(this.container, 'paddingX'); 
    const py = utils.createSelector('py', utils.measurment.paddingY, this.container);
        this.api.tooltip.onHover(py, 'Container PaddingY', { placement: 'top', });
        py.classList.add('w-20');
        py.value = utils.getClassFromData(this.container, 'paddingY');
    const elementWide = utils.createSelector('Wide', utils.measurment.wideNumber, this.container);
        this.api.tooltip.onHover(elementWide, 'Container wide', { placement: 'top', });
        elementWide.classList.add('w-20', 'ml-5', 'mr-3');
        elementWide.value = utils.getClassFromData(this.container, 'wideNumber');
    const imageWide = utils.createSelector('Wide', utils.measurment.wideNumber, this.imageBlock);
        this.api.tooltip.onHover(imageWide, 'Image wide', { placement: 'top', });
        imageWide.classList.add('w-20');
        imageWide.value = utils.getClassFromData(this.imageBlock, 'wideNumber');    
    const roundness = utils.createSelector('Roundness', utils.measurment.bgRadius, this.imageBlock);
        this.api.tooltip.onHover(roundness, 'Image roundness', { placement: 'top', });
        roundness.classList.add('w-28');
        roundness.value = utils.getClassFromData(this.imageBlock, 'bgRadius');     
    const bgRoundness = utils.createSelector('Roundness', utils.measurment.bgRadius, this.container);
        this.api.tooltip.onHover(bgRoundness, 'Container roundness', { placement: 'top', });
        bgRoundness.classList.add('w-28', 'ml-3');
        bgRoundness.value = utils.getClassFromData(this.imageBlock, 'bgRadius'); 
    const borderWidth = utils.createSelector('Border width', utils.measurment.border, this.container);
        this.api.tooltip.onHover(borderWidth, 'Container border width', { placement: 'top', });
        borderWidth.classList.add('w-28');
        borderWidth.value = utils.getClassFromData(this.container, 'border');
    const imageBorderWidth = utils.createSelector('Border width', utils.measurment.border, this.imageBlock);
        this.api.tooltip.onHover(imageBorderWidth, 'Image border width', { placement: 'top', });
        imageBorderWidth.classList.add('w-28');
        imageBorderWidth.value = utils.getClassFromData(this.imageBlock, 'border');  
    const imageShadow = utils.createSelector('Shadow', utils.measurment.shadow, this.imageBlock);
        this.api.tooltip.onHover(imageShadow, 'Image shadow', { placement: 'top', });
        imageShadow.classList.add('w-28');
        imageShadow.value = utils.getClassFromData(this.imageBlock, 'shadow'); 
    const elementShadow = utils.createSelector('Shadow', utils.measurment.shadow, this.container);
        this.api.tooltip.onHover(elementShadow, 'Container shadow', { placement: 'top', });
        elementShadow.classList.add('w-28');
        elementShadow.value = utils.getClassFromData(this.container, 'shadow'); 
    //checkbox
    const hideCaption = utils.createCheckbox(this.captionBlock, 'hidden');
        hideCaption.classList.add('ml-4');
        hideCaption.checked = this.captionBlock.classList.contains('hidden') ? false : true;
        this.api.tooltip.onHover(hideCaption, 'On/Off Text block', { placement: 'top', });
    const overflow = utils.createCheckbox(this.container, 'overflow-hidden');
        overflow.classList.add('ml-4');
        overflow.checked = false;
        this.api.tooltip.onHover(overflow, 'On/Off Container overflow', { placement: 'top', });
    // hideFonColor and hideBorder created before colorPicker   
        hideTextColor.classList.add('ml-1', 'mr-2');
        this.api.tooltip.onHover(hideTextColor, 'On/Off Text color', { placement: 'top', });
        hideTextColor.checked = this.captionBlock.getAttribute('style') && this.captionBlock.style.color ? true : false;
          hideTextColor.onchange = () => {
            if (hideTextColor.checked === false) { 
              this.captionBlock.style.color = '';
            } else {
              this.captionBlock.style.color = utils.convertToHex(textColor.getElementsByTagName('input')[0].value);
            }
          }  

        hideFonColor.classList.add('ml-1', 'mr-2');
        this.api.tooltip.onHover(hideFonColor, 'On/Off Container background color', { placement: 'top', });
        hideFonColor.checked = this.container.getAttribute('style') && this.container.style.backgroundColor ? true : false;
        // hideFonColor.checked = false;
          hideFonColor.onchange = () => {
            if (hideFonColor.checked === false) { 
              this.container.style.backgroundColor = '';
            } else {
              this.container.style.backgroundColor = utils.convertToHex(fonColor.getElementsByTagName('input')[0].value);
            }
          }     

        hideImageBorder.classList.add('ml-1', 'mr-2');
        this.api.tooltip.onHover(hideImageBorder, 'On/Off Image border', { placement: 'top', });
        hideImageBorder.checked = this.imageBlock.getAttribute('style') && this.imageBlock.style.borderColor ? true : false;
          hideImageBorder.onchange = () => {
            if (hideImageBorder.checked === false) { 
              this.imageBlock.style.borderColor = '';
              utils.measurment.border.filter(item => this.imageBlock.classList.remove(item));
              imageBorderWidth.value = null;
              this.imageBlock.classList.remove('border');
            } else {
              this.imageBlock.style.borderColor = utils.convertToHex(imageBorder.getElementsByTagName('input')[0].value);
            }
          }   

        hideBorder.classList.add('ml-1', 'mr-2');
        this.api.tooltip.onHover(hideBorder, 'On/Off Container border', { placement: 'top', });
        hideBorder.checked = this.container.getAttribute('style') && this.container.style.borderColor ? true : false;
          hideBorder.onchange = () => {
            if (hideBorder.checked === false) { 
              this.container.style.borderColor = '';
              utils.measurment.border.filter(item => this.container.classList.remove(item));
              borderWidth.value = null;
              // utils.measurment.bgRadius.filter(item => this.container.classList.remove(item));
              // bgRoundness.value = null;
              this.container.classList.remove('border');
            } else {
              this.container.style.borderColor = utils.convertToHex(borderColor.getElementsByTagName('input')[0].value);
              this.container.classList.add('border');
            }
          }

    // buttons
    const stretched = utils.createButton(utils.btn.stretched);
        stretched.classList.add('ml-4');
        this.api.tooltip.onHover(stretched, 'Stretch container', { placement: 'top', });
        if (this.data.container.stretched) {
          stretched.classList.add('text-blue-500');
        } else {
          stretched.classList.add('text-gray-600');
        }
        stretched.addEventListener('click', () => {
          this.data.container.stretched = !this.data.container.stretched;
          stretched.classList.toggle('text-gray-600', !this._data.stretched)
          stretched.classList.toggle('text-blue-500', this._data.stretched)
          this.api.blocks.stretchBlock(this.api.blocks.getCurrentBlockIndex(), !!this.data.container.stretched);
        })

    const clearBg = utils.createButton(utils.btn.clearBg);
        clearBg.classList.add('ml-8', 'w-36', 'text-xs', 'rounded', 'bg-white', 'hover:bg-red-400', 'hover:text-white');
        clearBg.style.height = '24px';
        clearBg.addEventListener('click', () => {
          this.container.style.backgroundColor = '';
          fonColor.getElementsByTagName('input')[0].value = "#FBFBFB";
          borderColor.getElementsByTagName('input')[0].value = "#FBFBFB";
          utils.measurment.paddingX.filter(item => this.container.classList.remove(item));
          utils.measurment.paddingY.filter(item => this.container.classList.remove(item));
          utils.measurment.marginY.filter(item => this.container.classList.remove(item));
          utils.measurment.bgRadius.filter(item => this.container.classList.remove(item));
          utils.measurment.border.filter(item => this.container.classList.remove(item));
          utils.measurment.wide.filter(item => this.container.classList.remove(item));          
          utils.measurment.shadow.filter(item => this.container.classList.remove(item));
          px.value = py.value = my.value = bgRoundness.value = borderWidth.value = elementWide.value = elementShadow.value = null;
          hideFonColor.checked = hideBorder.checked = false;
          this.api.blocks.stretchBlock(this.api.blocks.getCurrentBlockIndex(), !!this._data.stretched);
        })
    const loadImage = utils.createButton(utils.btn.image);
        loadImage.classList.add('mr-2', 'bg-white', 'text-gray-600', 'mx-1', 'flex', 'justify-center', 'items-center', 'rounded', 'hover:bg-blue-500', 'hover:text-white', 'cursor-pointer');
        this.api.tooltip.onHover(loadImage, 'Change image', { placement: 'top', });
        loadImage.addEventListener('click', () => {
          this.uploader.uploadSelectedFile({
            onPreview: (src) => {
              console.log('onPreview: (src) 413', 'mini with spinner arround here');
            },
          });
        })
    const imgLeft = utils.createButton(utils.btn.imageLeft);
        imgLeft.classList.add('bg-white', 'mx-1', 'flex', 'justify-center', 'items-center', 'rounded', 'hover:bg-blue-500', 'hover:text-white', 'cursor-pointer');
        imgLeft.classList.add(this.checkActiveBtn('imgLeft'));
        this.api.tooltip.onHover(imgLeft, 'Image left', { placement: 'top', });
        imgLeft.addEventListener('click', () => {
          this.imageBlock.classList.remove('order-last');
          this.captionBlock.classList.add('order-last');
          this.container.classList.remove('flex-col');
          this.container.classList.remove('justify-center');

          this.markActiveBtn(imgLeft, [imgLeft, imgCenter, imgRight], 'imgLeft');
        })
    const imgCenter = utils.createButton(utils.btn.imageCenter);
        imgCenter.classList.add('bg-white', 'mx-1', 'flex', 'justify-center', 'items-center', 'rounded', 'hover:bg-blue-500', 'hover:text-white', 'cursor-pointer');
        imgCenter.classList.add(this.checkActiveBtn('imgCenter'));
        this.api.tooltip.onHover(imgCenter, 'Image center', { placement: 'top', });
        imgCenter.addEventListener('click', () => {
          this.imageBlock.classList.remove('order-last');
          this.captionBlock.classList.add('order-last');
          this.container.classList.add('flex-col');
          this.container.classList.add('justify-center');

          this.markActiveBtn(imgCenter, [imgLeft, imgCenter, imgRight], 'imgCenter');
        })
    const imgRight = utils.createButton(utils.btn.imageRight);
        imgRight.classList.add('bg-white', 'mx-1', 'flex', 'justify-center', 'items-center', 'rounded', 'hover:bg-blue-500', 'hover:text-white', 'cursor-pointer');
        imgRight.classList.add(this.checkActiveBtn('imgRight')); //check and set active status if selected
        this.api.tooltip.onHover(imgRight, 'Image right', { placement: 'top', });
        imgRight.addEventListener('click', () => {
          this.imageBlock.classList.add('order-last');
          this.captionBlock.classList.remove('order-last');
          this.container.classList.remove('flex-col');
          this.container.classList.remove('justify-center');

          this.markActiveBtn(imgRight, [imgLeft, imgCenter, imgRight], 'imgRight');
        })
    const blockLeft = utils.createButton(utils.btn.blockLeft);
        blockLeft.classList.add('ml-4', 'bg-white', 'text-gray-600', 'mx-1', 'flex', 'justify-center', 'items-center', 'rounded', 'hover:bg-blue-500', 'hover:text-white', 'cursor-pointer');
        blockLeft.classList.add(this.checkActiveBtn('blockLeft')); //check and set active status if selected
        this.api.tooltip.onHover(blockLeft, 'Container Align Left', { placement: 'top', });
        blockLeft.addEventListener('click', () => {
          this.container.classList.add('ml-0');
          this.container.classList.remove('mx-auto');
          this.container.classList.remove('ml-auto');

          this.markActiveBtn(blockLeft, [blockLeft, blockCenter, blockRight], 'blockLeft');
        })
    const blockCenter = utils.createButton(utils.btn.blockCenter);
        blockCenter.classList.add('bg-white', 'text-gray-600', 'mx-1', 'flex', 'justify-center', 'items-center', 'rounded', 'hover:bg-blue-500', 'hover:text-white', 'cursor-pointer');
        blockCenter.classList.add(this.checkActiveBtn('blockCenter'));
        this.api.tooltip.onHover(blockCenter, 'Container Align Center', { placement: 'top', });
        blockCenter.addEventListener('click', () => {
          this.container.classList.remove('ml-0');
          this.container.classList.add('mx-auto');
          this.container.classList.remove('ml-auto');

          this.markActiveBtn(blockCenter, [blockLeft, blockCenter, blockRight], 'blockCenter');
        })
    const blockRight = utils.createButton(utils.btn.blockRight);
        blockRight.classList.add('bg-white', 'text-gray-600', 'mx-1', 'flex', 'justify-center', 'items-center', 'rounded', 'hover:bg-blue-500', 'hover:text-white', 'cursor-pointer');
        blockRight.classList.add(this.checkActiveBtn('blockRight'));
        this.api.tooltip.onHover(blockRight, 'Container Align Right', { placement: 'top', });
        blockRight.addEventListener('click', () => {
          this.container.classList.remove('ml-0');
          this.container.classList.remove('mx-auto');
          this.container.classList.add('ml-auto');

          this.markActiveBtn(blockRight, [blockLeft, blockCenter, blockRight], 'blockRight');
        })

    const blockVStart = utils.createButton(utils.btn.blockLeft);
        blockVStart.id = 'blockVStart';
        blockVStart.classList.add('ml-4', 'bg-white', 'text-gray-600', 'transform', 'rotate-90', 'mx-1', 'flex', 'justify-center', 'items-center', 'rounded', 'hover:bg-blue-500', 'hover:text-white', 'cursor-pointer');
        blockVStart.classList.add(this.checkActiveBtn('blockVStart')); //check and set active status if selected
        this.api.tooltip.onHover(blockVStart, 'Container Align Top', { placement: 'top', });
        blockVStart.addEventListener('click', () => {
          this.container.classList.add('items-start');
          this.container.classList.remove('items-center');
          this.container.classList.remove('items-end');

          this.markActiveBtn(blockVStart, [blockVStart, blockVCenter, blockVEnd], 'blockVStart');
        })
    const blockVCenter = utils.createButton(utils.btn.blockCenter);
        blockVCenter.id = 'blockVCenter';
        blockVCenter.classList.add('bg-white', 'text-gray-600', 'transform', 'rotate-90', 'mx-1', 'flex', 'justify-center', 'items-center', 'rounded', 'hover:bg-blue-500', 'hover:text-white', 'cursor-pointer');
        blockVCenter.classList.add(this.checkActiveBtn('blockVCenter'));
        this.api.tooltip.onHover(blockVCenter, 'Container Align Center', { placement: 'top', });
        blockVCenter.addEventListener('click', () => {
          this.container.classList.remove('items-start');
          this.container.classList.add('items-center');
          this.container.classList.remove('items-end');

          this.markActiveBtn(blockVCenter, [blockVStart, blockVCenter, blockVEnd], 'blockVCenter');
        })
    const blockVEnd = utils.createButton(utils.btn.blockRight);
        blockVEnd.id = 'blockVEnd';
        blockVEnd.classList.add('bg-white', 'text-gray-600', 'transform', 'rotate-90', 'mx-1', 'flex', 'justify-center', 'items-center', 'rounded', 'hover:bg-blue-500', 'hover:text-white', 'cursor-pointer');
        blockVEnd.classList.add(this.checkActiveBtn('blockVEnd'));
        this.api.tooltip.onHover(blockVEnd, 'Container Align Bottom', { placement: 'top', });
        blockVEnd.addEventListener('click', () => {
          this.container.classList.remove('items-start');
          this.container.classList.remove('items-center');
          this.container.classList.add('items-end');

          this.markActiveBtn(blockVEnd, [blockVStart, blockVCenter, blockVEnd], 'blockVEnd');
        })

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
          axios.get('/getTemplates')
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

          const wrapper = this.container;
          const image = this.imageBlock;
          const caption = this.captionBlock;

          let newTemplate = {
            file: {url: ''},
            container: {class: utils.getClasses(wrapper), style: utils.getStyles(wrapper), stretched: this.data.container.stretched},
            imageBlock: {class: utils.getClasses(image), style: utils.getStyles(image), url: ''}, 
            captionBlock: {class: utils.getClasses(caption), style: utils.getStyles(caption)},
          }
          let templateName = prompt('Save new template from current module', 'Enter template title');
          if (templateName) {
            axios.post('/saveTemplate', {
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
    const reset = utils.createButton(utils.btn.reset);
        reset.classList.add('ml-6', 'text-gray-600', 'rounded-full', 'hover:bg-red-400', 'hover:text-white');
        this.api.tooltip.onHover(reset, 'Reset layout', { placement: 'top', });
        reset.style.width = '26px';
        reset.style.height = '26px';
        reset.addEventListener('click', () => {
          this.container.style = this.imageBlock.style = this.captionBlock.style = this.container.className = this.imageBlock.className = this.captionBlock.className = '';
          roundness.value = bgRoundness.value = borderWidth.value = imageBorderWidth.value = imageShadow.value = elementShadow.value = textSize.value = pxText.value = pyText.value = mx.value = my.value = px.value = py.value = elementWide.value = imageWide.value = null;
          hideCaption.checked = true; 
          overflow.checked = hideTextColor.checked = hideFonColor.checked = hideImageBorder.checked = hideBorder.checked = false;
          this.container.classList.add('flex', 'items-center', 'justify-center');
          textColor.getElementsByTagName('input')[0].value = '#282828';
          fonColor.getElementsByTagName('input')[0].value = '#FBFBFB';
          borderColor.getElementsByTagName('input')[0].value = '#FBFBFB';
          imageBorder.getElementsByTagName('input')[0].value = '#FBFBFB';
          this.captionBlock.style.color = "#282828";
          // this.api.blocks.stretchBlock(this.api.blocks.getCurrentBlockIndex(), !!this._data.stretched);
        })
        let control = utils.createControlGroup(this.api); 

    // row1.appendChild(prText);
    utils.appendMany(row1, [textColor, hideTextColor, alignment, textSize, pxText, ptText, pbText, hideCaption]);  
    utils.appendMany(row2, [fonColor, hideFonColor, mx, my, borderColor, hideBorder, borderWidth, bgRoundness, elementShadow, overflow, clearBg,]);
    utils.appendMany(row4, [px, py, blockLeft, blockCenter, blockRight, blockVStart, blockVCenter, blockVEnd, elementWide, stretched, control]);
    utils.appendMany(row3, [loadImage, imgLeft, imgCenter, imgRight, imageWide, roundness, imageBorder, hideImageBorder, imageBorderWidth, imageShadow, this.templateSelector, collection, upload, reset]);

    holder.appendChild(row3);
    holder.appendChild(row1);
    holder.appendChild(row2);
    holder.appendChild(row4);
    return holder;
  }
  // set decoration for linked button based on fake class
  markActiveBtn(targetBtn, targetArray, marker) {
    // remove any text color from given array of buttons 
    let removed = ['text-blue-500', 'text-gray-600'];
    targetArray.forEach(item => item.classList.remove(...removed));
    
    targetBtn.classList.add('text-blue-500');
    // remove marker from container classes array
    targetArray.map(item => item.id).forEach(btnID => this.container.classList.remove(btnID))
    // set marker for container classes array
    this.container.classList.add(targetBtn.id);
  }
  // check decoration for linked button based on fake class
  checkActiveBtn(marker) {
    if (Array.from(this.container.classList).includes(marker)) {
      return 'text-blue-500';
    } else {
      return 'text-gray-600';
    }
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
    data.file.url = data.imageBlock.url = this.imageBlock.src;
    // save index of current block in variable
    let index = this.api.blocks.getCurrentBlockIndex();
    // remove block by index
    this.api.blocks.delete(index);
    // insert new block with saved index and data
    this.api.blocks.insert("image", data, null, index, true);
  }

  /**
   * Specify paste substitutes
   * @see {@link https://github.com/codex-team/editor.js/blob/master/docs/tools.md#paste-handling}
   * @returns {{tags: string[], patterns: object<string, RegExp>, files: {extensions: string[], mimeTypes: string[]}}}
   */
  static get pasteConfig() {
    return {
      // Paste HTML into Editor
      tags: [ 'img' ],
      // Paste URL of image into the Editor
      patterns: {
        image: /https?:\/\/\S+\.(gif|jpe?g|tiff|png)$/i,
      },
      // Drag n drop file from into the Editor
      files: {
        mimeTypes: [ 'image/*' ],
      },
    };
  }

  /**
   * Specify paste handlers
   * @public
   * @see {@link https://github.com/codex-team/editor.js/blob/master/docs/tools.md#paste-handling}
   * @param {CustomEvent} event - editor.js custom paste event
   *                              {@link https://github.com/codex-team/editor.js/blob/master/types/tools/paste-events.d.ts}
   * @returns {void}
   */
  async onPaste(event) {
    // this.paste = true;
    // this.toggleStatus('filled');
    // console.log('event on paste 731: ', event);
     
    switch (event.type) {
      case 'tag': {
        const image = event.detail.data;
        /** Images from PDF */
        if (/^blob:/.test(image.src)) {
          const response = await fetch(image.src);
          const file = await response.blob();

          this.uploadFile(file);
          break;
        }
        this.uploadUrl(image.src);
        break;
      }
      case 'pattern': {
        const url = event.detail.data;
        this.uploadUrl(url);
        break;
      }
      case 'file': {
        const file = event.detail.file;
        this.uploadFile(file);
        break;
      }
    }
  }

  /**
   * Private methods
   * ̿̿ ̿̿ ̿̿ ̿'̿'\̵͇̿̿\з= ( ▀ ͜͞ʖ▀) =ε/̵͇̿̿/’̿’̿ ̿ ̿̿ ̿̿ ̿̿
   */

  // Stores all Tool's data
  set data(data) {
    this.image = data.file;
  }

  // Return Tool data
  get data() {
    return this._data;
  }

  // Set new image file  @param {object} file - uploaded file data
  set image(file) {
    this._data.file = file || {};
  }

  // File uploading callback
  onUpload(response) {

    // console.log('onUpload(response) 787', response);
      
    if (response.success && response.file) {
      this.container.classList.remove(...this.CSS.containerStart);
      this.imageBlock.classList.remove(...this.CSS.imageBlockStart);
      if (typeof this.data.captionBlock.text == 'undefined') {
        console.log('we are here');
         
        // set the imageBlock.src and remove default decoration
        this.captionBlock.classList.remove(...this.CSS.captionBlockStart);
        this.captionBlock.classList.add('hidden');
        this.captionBlock.innerHTML = '...lorem ipsum dolores sit amet...';
      }
      this.imageBlock.src = response.file.url;
      this.image = response.file;
    } else {
      this.uploadingFailed('incorrect response: ' + JSON.stringify(response));
    }
  }

  // Handle uploader errors @param {string} errorText - uploading error text
  uploadingFailed(errorText) {
    console.log('Image Tool: uploading failed because of', errorText);

    this.api.notifier.show({
      message: this.api.i18n.t('Couldn’t upload image. Please try another.'),
      style: 'error',
    });

  }


  // Show preloader and upload image file @param {File} file - file that is currently uploading (from paste)
  uploadFile(file) {
    // this.paste = true;
    // this.toggleStatus('filled');
    this.uploader.uploadByFile(file, {
      onPreview: (src) => {

      },
    });
  }

  // Show preloader and upload image by target url
  uploadUrl(url) {
    // this.paste = true;
    // this.toggleStatus('filled');
    this.uploader.uploadByUrl(url);
  }

  // Ui statuses:  @returns {{EMPTY: string, UPLOADING: string, FILLED: string}}
  // static get status() {

    // return {
    //   EMPTY: 'empty',
    //   UPLOADING: 'loading',
    //   FILLED: 'filled',
    // };
  // }
  // Changes UI status @param {string} status - see {@link Ui.status} constants
  // toggleStatus(status) {
  //   console.log('param pam pam: ', status);

  //   this.statuses.forEach(item => this.container.classList.remove(item));
  //   this.container.classList.add(status); 
    // for (const statusType in ImageTool.status) {
    //   if (Object.prototype.hasOwnProperty.call(ImageTool.status, statusType)) {
    //     this.container.classList.toggle(status === ImageTool.status[statusType]);
    //   }
    // }
  // }
}