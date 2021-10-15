import './editorPersonality.css';
import Uploader from './editorImageUploader';
import * as utils from './editorUtility.js';

//  Timeout when loader should be removed
const LOADER_DELAY = 500;

export default class editorPersonality {

  constructor({ data, config, api }) {
    this.api = api;

    this.nodes = {
      wrapper: null,
      photo: null, // div for template img for real photo
      imageWrapper: null,
      text: null, // section container for care 3 text fields
      name: null,
      company: null,
      uid: null,
    };
    this.config = {
      endpoints: config.endpoints || '',
      field: config.field || 'image',
      types: config.types || 'image/*',
      namePlaceholder: config.namePlaceholder || 'Person First/Last name',
      companyPlaceholder: config.companyPlaceholder || 'Company, position',
      uidPlaceholder: config.uidPlaceholder || 'user_id for database search. in this realisation this field is for internal use only'
    };
    // Set saved state
    this._data = this.normalizeData(data);
    // Module for image files uploading
    this.uploader = new Uploader({
      config: this.config,
      onUpload: (response) => this.onUpload(response),
      onError: (error) => this.uploadingFailed(error)
    });
  }
  // Normalize input data
  normalizeData(data) {
    const newData = {};

    if (typeof data !== 'object') {
      data = {};
    }
    newData.wrapper = data.wrapper !== undefined ? data.wrapper : {};
    newData.text = data.text !== undefined ? data.text : {};
    newData.imageWrapper = data.imageWrapper !== undefined ? data.imageWrapper : {};
    newData.photo = data.photo !== undefined ? data.photo : {};
    newData.name = data.name !== undefined ? data.name : {};
    newData.company = data.company !== undefined ? data.company : {};
    newData.uid = data.uid !== undefined ? data.uid : {};
     
    return newData;
  }
  // Get Tool toolbox settings
  static get toolbox() {
    return {
      icon: '<svg width="13" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M5.27 7.519a3.114 3.114 0 0 1-1.014-.44 3.354 3.354 0 0 1-.973-1.002C2.865 5.42 2.65 4.62 2.65 3.8c0-.82.215-1.62.633-2.277.251-.394.574-.737.973-1.002a3.094 3.094 0 0 1 3.438 0c.399.265.722.608.973 1.002.418.657.633 1.456.633 2.277 0 .82-.215 1.62-.633 2.277a3.353 3.353 0 0 1-.973 1.002c-.31.206-.655.357-1.023.442.93.054 1.826.212 2.591.45.503.155.95.345 1.324.576.27.167.511.358.725.6a2.441 2.441 0 0 1-.109 3.408c-.25.247-.525.424-.828.568-.38.181-.816.311-1.32.413-.853.172-1.937.264-3.079.264-1.142 0-2.226-.092-3.078-.264-.505-.102-.941-.232-1.321-.413a2.969 2.969 0 0 1-.828-.568 2.449 2.449 0 0 1-.13-3.384c.21-.246.45-.441.717-.61a5.63 5.63 0 0 1 1.316-.587c.77-.243 1.675-.403 2.618-.455zM5.974 5.5c.594 0 1.075-.761 1.075-1.7s-.481-1.7-1.075-1.7S4.9 2.861 4.9 3.8s.481 1.7 1.075 1.7zm0 6.05c2.057 0 3.725-.336 3.725-.75S8.007 9.75 5.95 9.75s-3.7.636-3.7 1.05c0 .414 1.668.75 3.725.75z" id="a"/></svg>',
      title: 'Personality'
    };
  }
  // File uploading callback
  onUpload(response) {
    const { success, file } = response;

    if (success && file && file.url) {
      this._data.photo.url = file.url; // assign path to image saved in storage

      this.showFullImage(file.url);
    }
  }
  // On success: remove loader and show full image
  showFullImage(url) { 
    setTimeout(() => {
      this.nodes.photo.classList.remove('w-6', 'mx-auto', 'my-auto'); // remove spinner.gif padding if exists
      this.nodes.photo.classList.add(...this.CSS.photo);
      this.nodes.photo.src = window.location.origin+url;
    }, LOADER_DELAY);
  }
  // On fail: remove loader and reveal default image placeholder
  stopLoading() {
    setTimeout(() => {
      this.nodes.photo.classList.remove('w-6', 'mx-auto', 'my-auto'); // remove spinner.gif padding if exists
      this.nodes.photo.src = window.location.origin+'/img/personality.svg';
    }, LOADER_DELAY);
  }
  // Show loader when file upload started
  addLoader() {
    this.nodes.photo.className = '';
    this.nodes.photo.classList.add('w-6', 'mx-auto', 'my-auto');  // add spinner.gif padding for loading time
    this.nodes.photo.src = window.location.origin+'/img/spinner.gif';
  }

  // If file uploading failed, remove loader and show notification @param {string} errorMessage -  error message
  uploadingFailed(errorMessage) {
    let message = errorMessage;
    this.stopLoading();
    // accept server response with html 
    if (errorMessage.body !== 'undefined') {
      // create dummy HTML element
      let el = document.createElement('html');
      el.innerHTML = errorMessage.body;
      message = el.querySelector('title').innerHTML;
    }

    this.api.notifier.show({
      message: message,
      style: 'error'
    });
  }

  get CSS() {
    return {
      photo: ['absolute', 'cursor-pointer', 'outline-none', 'w-full', 'h-full', 'object-cover'],
      render_BTN: ['bg-white', 'mx-1', 'flex', 'justify-center', 'items-center', 'rounded', 'hover:bg-blue-500', 'hover:text-white', 'cursor-pointer'],
    };
  }

  // Return Block data @param {HTMLElement} toolsContent @return {PersonalityToolData}
  save(toolsContent) {
    const photo = toolsContent.querySelector('#photo');
    const text = toolsContent.querySelector('#text');
    const wrapper = toolsContent.querySelector('#text').parentElement;
    const imageWrapper = toolsContent.querySelector('#photo').parentElement;
    const name = toolsContent.querySelector('#name');
    const company = toolsContent.querySelector('#company');
    const uid = toolsContent.querySelector('#puid');
    // Fill missing fields with empty strings
    Object.assign(this._data, {
      photo: { url: this._data.photo.url ? this._data.photo.url : '', class: utils.getClasses(photo), style: utils.getStyles(photo) },
      imageWrapper: { class: utils.getClasses(imageWrapper), style: utils.getStyles(imageWrapper) },
      text: { class: utils.getClasses(text), style: utils.getStyles(text), },
      name: { text: name.textContent.trim() || '', class: utils.getClasses(name), style: utils.getStyles(name) },
      company: { text: company.textContent.trim() || '', class: utils.getClasses(company), style: utils.getStyles(company) },
      uid: { text: uid.textContent.trim() || '', class: utils.getClasses(uid), style: utils.getStyles(uid) },
      wrapper: { class: utils.getClasses(wrapper), style: utils.getStyles(wrapper), id: wrapper.getAttribute('id') },
    });

    return this._data;
  }
  // set classes and styles for given element if it exists in this._data
  setTargetDecoration(input, name) {
    if (input && input.class ) {
      // this.nodes[name].classList.remove(this.CSS[name]);
      this.nodes[name].classList.add(...input.class);
    }
    if (input && input.style) {
      for (let st in input.style) {        
        this.nodes[name].style[st] = input.style[st];
      }
    }
  }

  // Renders Block content
  render() {
    const { name, company, uid, text, wrapper, imageWrapper } = this._data;
    var photo = this._data.photo;
    // initial module setup
    this.nodes.wrapper = utils.make('div', null, {id: 'wrapper'}); // full module wrapper
        if (Object.keys(wrapper).length !== 0) {
          this.setTargetDecoration(wrapper, 'wrapper');
        } else {
          this.nodes.wrapper.classList.add('items-center', 'flex', 'w-2/3', 'mx-auto', 'p-2');
        }
    this.nodes.text = utils.make('section', ['flex-1'], {id: 'text'});
        if (text && Object.keys(text).length !== 0) {
          this.setTargetDecoration(text, 'text');
        } else {
          this.nodes.text.classList.add('px-2');
        }
    this.nodes.name = utils.make('div', ['outline-none'], { id: 'name' });
    this.nodes.company = utils.make('div', ['outline-none', 'text-xcompany'], { id: 'company' });
    this.nodes.uid = utils.make('div', ['outline-none', 'text-xuid', 'hidden'], { id: 'puid' });
    this.nodes.imageWrapper = utils.make('div');

    if (Object.keys(imageWrapper).length !== 0) {
      this.setTargetDecoration(imageWrapper, 'imageWrapper');
    } else {
      this.nodes.imageWrapper.classList.add('relative', 'w-16', 'h-16', 'overflow-hidden', 'flex', 'justify-center', 'bg-gray-300', 'rounded');
    }

    if (uid && uid.text && uid.text.length > 0) {
      this.nodes.uid.textContent = uid.text;
      this.nodes.photo = utils.make('img', null, {id: 'photo'})
      this.setTargetDecoration(uid, 'uid');
      this.setTargetDecoration(photo, 'photo');
      this.setTargetDecoration(name, 'name');
      this.setTargetDecoration(company, 'company');
    // get user data from db
      axios.get('/getUserData/'+uid.text)
        .then(response => {
          if (Object.keys(response.data).length) {
            // this.renderUser(response.data);
            this.nodes.name.textContent = response.data.contact.first_name+' '+response.data.contact.last_name;
            this.nodes.company.textContent = response.data.job.company+', '+response.data.job.position;
            this.nodes.photo.src = '/img/uploads/'+response.data.contact.avatar;
          };
        })
        .catch(error => {
            console.log(error);
        });

    } else {
      // new instance without DB
      this.nodes.uid.textContent = null;
      this.nodes.company.textContent = company.text && company.text.length ? company.text : this.config.companyPlaceholder;
      this.nodes.company.contentEditable = true;
      this.nodes.name.textContent = name.text && name.text.length ? name.text : this.config.namePlaceholder;
      this.nodes.name.contentEditable = true;
      this.nodes.photo = utils.make('img', [...this.CSS.photo], {id: 'photo'});
      this.nodes.photo.src = photo && photo.url ? window.location.origin+photo.url : window.location.origin+'/img/personality.svg', 
      this.nodes.photo.addEventListener('click', () => {
        this.uploader.uploadSelectedFile({
          onPreview: () => {
            this.addLoader();
          }
        });
      });
    }
    this.nodes.imageWrapper.appendChild(this.nodes.photo);
    utils.appendMany(this.nodes.text, [this.nodes.name, this.nodes.company, this.nodes.uid]);
    utils.appendMany(this.nodes.wrapper, [this.nodes.imageWrapper, this.nodes.text]);

    return this.nodes.wrapper;
  }

  // Sanitizer Rules
  static get sanitize() {
    return {
      wrapper: {},
      text: {},
      photo: {},
      name: {},
      company: {},
      uid: {},
    };
  }

  colorPaddingSet(name) {
    let hideTextColor = utils.createCheckbox();
    let textColor = utils.colorPickerModule('color', this.nodes[name]);
        this.api.tooltip.onHover(textColor, `${name.charAt(0).toUpperCase() + name.slice(1)}-field color`, { placement: 'top', });
        textColor.getElementsByTagName('input')[0].value = this.nodes[name].style.color ? utils.convertToHex(this.nodes[name].style.color) : '#282828';
        textColor.onclick = () => {
          hideTextColor.classList.remove('hidden');
          mtText.classList.remove('hidden');
          this.templateSelector.classList.add('hidden');
          this.staffSelector.classList.add('hidden');
        }
        textColor.onchange = () => {
          hideTextColor.checked = true;
        }
    // hideFonColor and hideBorder created before colorPicker   
    hideTextColor.classList.add('ml-1', 'mr-2', 'hidden');
    this.api.tooltip.onHover(hideTextColor, `On/Off ${name} color`, { placement: 'top', });
    hideTextColor.checked = this.nodes[name].getAttribute('style') && this.nodes[name].style.color ? true : false;
    // hideFonColor.checked = false;
      hideTextColor.onchange = () => {
        if (hideTextColor.checked === false) { 
          this.nodes[name].style.color = '';
          hideTextColor.classList.add('hidden');
          mtText.classList.add('hidden');
          textColor.getElementsByTagName('input')[0].value = '#282828';
        } else {
          this.nodes[name].style.color = utils.convertToHex(textColor.getElementsByTagName('input')[0].value);
        }
      }
    let mtText = utils.createSelector('mt', utils.measurment.marginT, this.nodes[name]);
        this.api.tooltip.onHover(mtText, `${name} Margin Top`, { placement: 'top', });
        mtText.classList.add('w-20', 'hidden');
        mtText.value = utils.getClassFromData(this.nodes[name], 'marginT'); 
    let wrapper = utils.make('div', ['flex', 'items-center', 'ml-3']);
    utils.appendMany(wrapper, [textColor, hideTextColor, mtText]);

    return wrapper;     
  }
  // Makes buttons with tunes: add background, add border, stretch image
  renderSettings() {
    // return this.tunes.render(this.data);
    const holder = utils.make('div', ['bg-gray-100', 'p-2']);
    // define the row element for placing alignments, stretch and colorpickers element
    const row1 = utils.make('div', ['flex', 'items-center', 'ml-1', 'my-1']);
    const row2 = utils.make('div', ['flex', 'items-center', 'mt-1', 'ml-1']);
    const row3 = utils.make('div', ['flex', 'justify-between', 'items-center', 'mt-1', 'ml-1']);
    const row4 = utils.make('div', ['flex', 'items-center', 'mt-1', 'ml-1']);

    const alignment = utils.createLayoutPosition(['left', 'center', 'right'], this.nodes.text);
        alignment.classList.remove('mx-2');
        this.api.tooltip.onHover(alignment, 'Text alignment', { placement: 'top', });
    // colorpickers and checkbox
    const hideFonColor = utils.createCheckbox();
    const hideBorder = utils.createCheckbox();
    const hideImageBorder = utils.createCheckbox();
    const imageBorder = utils.colorPickerModule('borderColor', this.nodes.imageWrapper);
        this.api.tooltip.onHover(imageBorder, 'Image border color', { placement: 'top', });
        imageBorder.getElementsByTagName('input')[0].value = this.nodes.imageWrapper.style.borderColor ? utils.convertToHex(this.nodes.imageWrapper.style.borderColor) : '#FBFBFB';
        imageBorder.onchange = () => {
          hideImageBorder.checked = true;
          this.nodes.imageWrapper.classList.add('border-2');
          imageBorderWidth.value = 'border-2';
        }
    const fonColor = utils.colorPickerModule('backgroundColor', this.nodes.wrapper);
        this.api.tooltip.onHover(fonColor, 'Background color', { placement: 'top', });
        fonColor.getElementsByTagName('input')[0].value = this.nodes.wrapper.style.backgroundColor ? utils.convertToHex(this.nodes.wrapper.style.backgroundColor) : '#FBFBFB';
        fonColor.onchange = () => {
          hideFonColor.checked = true;
        }
    const borderColor = utils.colorPickerModule('borderColor', this.nodes.wrapper);
        this.api.tooltip.onHover(borderColor, 'Border color', { placement: 'top', });
        borderColor.getElementsByTagName('input')[0].value = this.nodes.wrapper.style.borderColor ? utils.convertToHex(this.nodes.wrapper.style.borderColor) : '#FBFBFB';
        borderColor.onchange = () => {
          hideBorder.checked = true;
          this.nodes.wrapper.classList.add('border-2');
          borderWidth.value = 'border-2';
        }
    // selectors
    const fontSelector = utils.createSelector('Font family', utils.measurment.fontFamily, this.nodes.text);
        this.api.tooltip.onHover(fontSelector, 'Font family', { placement: 'top', });
        fontSelector.classList.add('w-28');
        fontSelector.value = utils.getClassFromData(this.nodes.text, 'fontFamily'); 
    const fontWeight = utils.createSelector('Font weight', utils.measurment.fontWeight, this.nodes.text);
        this.api.tooltip.onHover(fontWeight, 'Font weight', { placement: 'top', });
        fontWeight.classList.add('w-28');
        fontWeight.value = utils.getClassFromData(this.nodes.text, 'fontWeight'); 
    const fontSize = utils.createSelector('Font size', utils.measurment.fontSizes, this.nodes.text);
        this.api.tooltip.onHover(fontSize, 'Font size', { placement: 'top', });
        fontSize.classList.add('w-24');
        fontSize.value = utils.getClassFromData(this.nodes.text, 'fontSizes'); 
    const plText = utils.createSelector('pl', utils.measurment.paddingL, this.nodes.text);
        this.api.tooltip.onHover(plText, 'Text Padding Left', { placement: 'top', });
        plText.classList.add('w-20');
        plText.value = utils.getClassFromData(this.nodes.text, 'paddingL'); 
    const prText = utils.createSelector('pr', utils.measurment.paddingR, this.nodes.text);
        this.api.tooltip.onHover(prText, 'Text Padding Right', { placement: 'top', });
        prText.classList.add('w-20');
        prText.value = utils.getClassFromData(this.nodes.text, 'paddingR'); 
    const ptText = utils.createSelector('pt', utils.measurment.paddingT, this.nodes.text);
        this.api.tooltip.onHover(ptText, 'Text Padding Top', { placement: 'top', });
        ptText.classList.add('w-20');
        ptText.value = utils.getClassFromData(this.nodes.text, 'paddingT'); 
    const pbText = utils.createSelector('pb', utils.measurment.paddingB, this.nodes.text);
        this.api.tooltip.onHover(pbText, 'Text Padding Bottom', { placement: 'top', });
        pbText.classList.add('w-20');
        pbText.value = utils.getClassFromData(this.nodes.text, 'paddingB'); 
    const pxText = utils.createSelector('px', utils.measurment.paddingX, this.nodes.text);
        this.api.tooltip.onHover(pxText, 'Text Padding X', { placement: 'top', });
        pxText.classList.add('w-20');
        pxText.value = utils.getClassFromData(this.nodes.text, 'paddingX');
    const mx = utils.createSelector('mx', utils.measurment.marginX, this.nodes.wrapper);
        this.api.tooltip.onHover(mx, 'Container MarginX', { placement: 'top', });
        mx.classList.add('w-20');
        mx.value = utils.getClassFromData(this.nodes.wrapper, 'marginX'); 
    const my = utils.createSelector('my', utils.measurment.marginY, this.nodes.wrapper);
        this.api.tooltip.onHover(my, 'Container MarginY', { placement: 'top', });
        my.classList.add('w-20');
        my.value = utils.getClassFromData(this.nodes.wrapper, 'marginY'); 
    const px = utils.createSelector('px', utils.measurment.paddingX, this.nodes.wrapper);
        this.api.tooltip.onHover(px, 'Container PaddingX', { placement: 'top', });
        px.classList.add('w-20');
        px.value = utils.getClassFromData(this.nodes.wrapper, 'paddingX'); 
    const py = utils.createSelector('py', utils.measurment.paddingY, this.nodes.wrapper);
        this.api.tooltip.onHover(py, 'Container PaddingY', { placement: 'top', });
        py.classList.add('w-20');
        py.value = utils.getClassFromData(this.nodes.wrapper, 'paddingY');
    const elementWide = utils.createSelector('Wide', utils.measurment.wideNumber, this.nodes.wrapper);
        this.api.tooltip.onHover(elementWide, 'Container wide', { placement: 'top', });
        elementWide.classList.add('w-20', 'ml-5', 'mr-3');
        elementWide.value = utils.getClassFromData(this.nodes.wrapper, 'wideNumber');
    const imageWide = utils.createSimpleSelector('Wide', utils.measurment.wideBox, this.nodes.imageWrapper);
        this.api.tooltip.onHover(imageWide, 'Image wide', { placement: 'top', });
        imageWide.classList.add('w-20');
        // this.nodes.imageWrapper.classList.add(this.CSS.imageBox);
        imageWide.onchange = () => {
          utils.measurment.wideBox.filter(item => this.nodes.imageWrapper.classList.remove(item, 'h'+item.substr(1)));
          this.nodes.imageWrapper.classList.add(imageWide.value, 'h'+imageWide.value.substr(1));
        }
        imageWide.value = utils.getClassFromData(this.nodes.imageWrapper, 'wideNumber');    
    const roundness = utils.createSelector('Roundness', utils.measurment.bgRadius, this.nodes.imageWrapper);
        this.api.tooltip.onHover(roundness, 'Image roundness', { placement: 'top', });
        roundness.classList.add('w-28');
        roundness.value = utils.getClassFromData(this.nodes.imageWrapper, 'bgRadius');     
    const bgRoundness = utils.createSelector('Roundness', utils.measurment.bgRadius, this.nodes.wrapper);
        this.api.tooltip.onHover(bgRoundness, 'Container roundness', { placement: 'top', });
        bgRoundness.classList.add('w-28', 'ml-3');
        bgRoundness.value = utils.getClassFromData(this.nodes.imageWrapper, 'bgRadius'); 
    const borderWidth = utils.createSelector('Border width', utils.measurment.border, this.nodes.wrapper);
        this.api.tooltip.onHover(borderWidth, 'Container border width', { placement: 'top', });
        borderWidth.classList.add('w-28');
        borderWidth.value = utils.getClassFromData(this.nodes.wrapper, 'border');
    const imageBorderWidth = utils.createSelector('Border width', utils.measurment.border, this.nodes.imageWrapper);
        this.api.tooltip.onHover(imageBorderWidth, 'Image border width', { placement: 'top', });
        imageBorderWidth.classList.add('w-28');
        imageBorderWidth.value = utils.getClassFromData(this.nodes.imageWrapper, 'border');  
    const imageShadow = utils.createSelector('Shadow', utils.measurment.shadow, this.nodes.imageWrapper);
        this.api.tooltip.onHover(imageShadow, 'Image shadow', { placement: 'top', });
        imageShadow.classList.add('w-28');
        imageShadow.value = utils.getClassFromData(this.nodes.imageWrapper, 'shadow'); 
    const elementShadow = utils.createSelector('Shadow', utils.measurment.shadow, this.nodes.wrapper);
        this.api.tooltip.onHover(elementShadow, 'Container shadow', { placement: 'top', });
        elementShadow.classList.add('w-28');
        elementShadow.value = utils.getClassFromData(this.nodes.wrapper, 'shadow'); 
    //checkbox
    // hideFonColor and hideBorder created before colorPicker   
        hideFonColor.classList.add('ml-1', 'mr-2');
        this.api.tooltip.onHover(hideFonColor, 'On/Off Container background color', { placement: 'top', });
        hideFonColor.checked = this.nodes.wrapper.getAttribute('style') && this.nodes.wrapper.style.backgroundColor ? true : false;
        // hideFonColor.checked = false;
          hideFonColor.onchange = () => {
            if (hideFonColor.checked === false) { 
              this.nodes.wrapper.style.backgroundColor = '';
              fonColor.getElementsByTagName('input')[0].value = "#FBFBFB";
            } else {
              this.nodes.wrapper.style.backgroundColor = utils.convertToHex(fonColor.getElementsByTagName('input')[0].value);
            }
          }     

        hideImageBorder.classList.add('ml-1', 'mr-2');
        this.api.tooltip.onHover(hideImageBorder, 'On/Off Image border', { placement: 'top', });
        hideImageBorder.checked = this.nodes.imageWrapper.getAttribute('style') && this.nodes.imageWrapper.style.borderColor ? true : false;
          hideImageBorder.onchange = () => {
            if (hideImageBorder.checked === false) { 
              this.nodes.imageWrapper.style.borderColor = '';
              utils.measurment.border.filter(item => this.nodes.imageWrapper.classList.remove(item));
              imageBorderWidth.value = null;
              this.nodes.imageWrapper.classList.remove('border');
              imageBorder.getElementsByTagName('input')[0].value = "#FBFBFB";
            } else {
              this.nodes.imageWrapper.style.borderColor = utils.convertToHex(imageBorder.getElementsByTagName('input')[0].value);
            }
          }   

        hideBorder.classList.add('ml-1', 'mr-2');
        this.api.tooltip.onHover(hideBorder, 'On/Off Container border', { placement: 'top', });
        hideBorder.checked = this.nodes.wrapper.getAttribute('style') && this.nodes.wrapper.style.borderColor ? true : false;
          hideBorder.onchange = () => {
            if (hideBorder.checked === false) { 
              this.nodes.wrapper.style.borderColor = '';
              utils.measurment.border.filter(item => this.nodes.wrapper.classList.remove(item));
              borderWidth.value = null;
              this.nodes.wrapper.classList.remove('border');
              borderColor.getElementsByTagName('input')[0].value = "#FBFBFB";
            } else {
              this.nodes.wrapper.style.borderColor = utils.convertToHex(borderColor.getElementsByTagName('input')[0].value);
              this.nodes.wrapper.classList.add('border');
            }
          }
    // buttons
    const clearBg = utils.createButton(utils.btn.clearBg);
        clearBg.classList.add('ml-auto', 'w-36', 'text-xs', 'rounded', 'bg-white', 'hover:bg-red-400', 'hover:text-white');
        clearBg.style.height = '24px';
        clearBg.addEventListener('click', () => {
          this.nodes.wrapper.style.backgroundColor = '';
          fonColor.getElementsByTagName('input')[0].value = "#FBFBFB";
          borderColor.getElementsByTagName('input')[0].value = "#FBFBFB";
          utils.measurment.paddingX.filter(item => this.nodes.wrapper.classList.remove(item));
          utils.measurment.paddingY.filter(item => this.nodes.wrapper.classList.remove(item));
          utils.measurment.marginY.filter(item => this.nodes.wrapper.classList.remove(item));
          utils.measurment.bgRadius.filter(item => this.nodes.wrapper.classList.remove(item));
          utils.measurment.border.filter(item => this.nodes.wrapper.classList.remove(item));
          utils.measurment.wide.filter(item => this.nodes.wrapper.classList.remove(item));
          utils.measurment.shadow.filter(item => this.nodes.wrapper.classList.remove(item));
          px.value = py.value = my.value = bgRoundness.value = borderWidth.value = elementWide.value = elementShadow.value = null;
          hideFonColor.checked = hideBorder.checked = false;
          // this.api.blocks.stretchBlock(this.api.blocks.getCurrentBlockIndex(), !!this._data.stretched);
        })
    const loadImage = utils.createButton(utils.btn.image, ['mr-2', 'text-gray-600', ...this.CSS.render_BTN]);
        if (this._data.uid.text && this._data.uid.text.length > 4) {
          loadImage.classList.add('hidden');
          loadImage.setAttribute('disabled', true);
        }
        this.api.tooltip.onHover(loadImage, 'Select new image', { placement: 'top', });
        loadImage.addEventListener('click', () => {
          this.uploader.uploadSelectedFile({
            onPreview: (src) => {
              console.log('onPreview: (src) 413', 'mini with spinner arround here');
            },
          });
        })
    const imgLeft = utils.createButton(utils.btn.imageLeft, [...this.CSS.render_BTN]);
        imgLeft.classList.add(this.checkActiveBtn('imgLeft'));
        this.api.tooltip.onHover(imgLeft, 'Image left', { placement: 'top', });
        imgLeft.addEventListener('click', () => {
          this.nodes.imageWrapper.classList.remove('order-last');
          this.nodes.text.classList.add('order-last');
          this.nodes.wrapper.classList.remove('flex-col', 'justify-center');

          this.markActiveBtn(imgLeft, [imgLeft, imgCenter, imgRight], 'imgLeft');
        })
    const imgCenter = utils.createButton(utils.btn.imageCenter, [...this.CSS.render_BTN]);
        imgCenter.classList.add(this.checkActiveBtn('imgCenter'));
        this.api.tooltip.onHover(imgCenter, 'Image center', { placement: 'top', });
        imgCenter.addEventListener('click', () => {
          this.nodes.imageWrapper.classList.remove('order-last');
          this.nodes.text.classList.add('order-last');
          this.nodes.wrapper.classList.add('flex-col', 'justify-center');

          this.markActiveBtn(imgCenter, [imgLeft, imgCenter, imgRight], 'imgCenter');
        })
    const imgRight = utils.createButton(utils.btn.imageRight, [...this.CSS.render_BTN]);
        imgRight.classList.add(this.checkActiveBtn('imgRight')); //check and set active status if selected
        this.api.tooltip.onHover(imgRight, 'Image right', { placement: 'top', });
        imgRight.addEventListener('click', () => {
          this.nodes.imageWrapper.classList.add('order-last');
          this.nodes.text.classList.remove('order-last');
          this.nodes.wrapper.classList.remove('flex-col', 'justify-center');

          this.markActiveBtn(imgRight, [imgLeft, imgCenter, imgRight], 'imgRight');
        })
    const blockLeft = utils.createButton(utils.btn.blockLeft, ['ml-4', 'text-gray-600', ...this.CSS.render_BTN]);
        blockLeft.classList.add(this.checkActiveBtn('blockLeft')); //check and set active status if selected
        this.api.tooltip.onHover(blockLeft, 'Container Align Left', { placement: 'top', });
        blockLeft.addEventListener('click', () => {
          this.nodes.wrapper.classList.add('ml-0');
          this.nodes.wrapper.classList.remove('mx-auto', 'ml-auto');

          this.markActiveBtn(blockLeft, [blockLeft, blockCenter, blockRight], 'blockLeft');
        })
    const blockCenter = utils.createButton(utils.btn.blockCenter);
        blockCenter.classList.add('text-gray-600', ...this.CSS.render_BTN);
        blockCenter.classList.add(this.checkActiveBtn('blockCenter'));
        this.api.tooltip.onHover(blockCenter, 'Container Align Center', { placement: 'top', });
        blockCenter.addEventListener('click', () => {
          this.nodes.wrapper.classList.add('mx-auto');
          this.nodes.wrapper.classList.remove('ml-0', 'ml-auto');

          this.markActiveBtn(blockCenter, [blockLeft, blockCenter, blockRight], 'blockCenter');
        })
    const blockRight = utils.createButton(utils.btn.blockRight, ['text-gray-600', ...this.CSS.render_BTN]);
        blockRight.classList.add(this.checkActiveBtn('blockRight'));
        this.api.tooltip.onHover(blockRight, 'Container Align Right', { placement: 'top', });
        blockRight.addEventListener('click', () => {
          this.nodes.wrapper.classList.add('ml-auto');
          this.nodes.wrapper.classList.remove('ml-0', 'mx-auto');

          this.markActiveBtn(blockRight, [blockLeft, blockCenter, blockRight], 'blockRight');
        })

    const blockVStart = utils.createButton(utils.btn.blockLeft, ['ml-4', 'text-gray-600', 'transform', 'rotate-90', ...this.CSS.render_BTN]);
        blockVStart.id = 'blockVStart';
        blockVStart.classList.add(this.checkActiveBtn('blockVStart')); //check and set active status if selected
        this.api.tooltip.onHover(blockVStart, 'Container Align Top', { placement: 'top', });
        blockVStart.addEventListener('click', () => {
          this.nodes.wrapper.classList.add('items-start');
          this.nodes.wrapper.classList.remove('items-center', 'items-end');

          this.markActiveBtn(blockVStart, [blockVStart, blockVCenter, blockVEnd], 'blockVStart');
        })
    const blockVCenter = utils.createButton(utils.btn.blockCenter, ['text-gray-600', 'transform', 'rotate-90', ...this.CSS.render_BTN]);
        blockVCenter.id = 'blockVCenter';
        blockVCenter.classList.add(this.checkActiveBtn('blockVCenter'));
        this.api.tooltip.onHover(blockVCenter, 'Container Align Center', { placement: 'top', });
        blockVCenter.addEventListener('click', () => {
          this.nodes.wrapper.classList.add('items-center');
          this.nodes.wrapper.classList.remove('items-start', 'items-end');

          this.markActiveBtn(blockVCenter, [blockVStart, blockVCenter, blockVEnd], 'blockVCenter');
        })
    const blockVEnd = utils.createButton(utils.btn.blockRight, ['text-gray-600', 'transform', 'rotate-90', ...this.CSS.render_BTN]);
        blockVEnd.id = 'blockVEnd';
        blockVEnd.classList.add(this.checkActiveBtn('blockVEnd'));
        this.api.tooltip.onHover(blockVEnd, 'Container Align Bottom', { placement: 'top', });
        blockVEnd.addEventListener('click', () => {
          this.nodes.wrapper.classList.add('items-end');
          this.nodes.wrapper.classList.remove('items-start', 'items-center');

          this.markActiveBtn(blockVEnd, [blockVStart, blockVCenter, blockVEnd], 'blockVEnd');
        })

    this.templateSelector = utils.make('select', ['py-1', 'px-2', 'hidden', 'bg-white', 'outline-none', 'border-none', 'rounded', 'hover:bg-blue-50', 'cursor-pointer', 'ml-auto', 'w-32', 'text-xs']);
        let template = utils.make('option', null, {text: 'Choose template', value: null});
        this.templateSelector.appendChild(template);
        this.templateSelector.onchange = () => {
          this.renderTemplate(JSON.parse(this.templateSelector.value));
        }
    this.staffSelector = utils.make('select', ['py-1', 'px-2', 'hidden', 'bg-white', 'outline-none', 'border-none', 'rounded', 'hover:bg-blue-50', 'cursor-pointer', 'ml-auto', 'w-32', 'text-xs']);
        let user = utils.make('option', null, {text: 'Choose staff', value: null});
        this.staffSelector.appendChild(user);
        this.staffSelector.onchange = () => {
          this.renderUser(this.staffSelector.value);
        }
    const collection = utils.createButton(utils.btn.collection, ['ml-3', 'text-gray-600', ...this.CSS.render_BTN]);
        this.api.tooltip.onHover(collection, 'Load Template from DB', { placement: 'top', });
        collection.addEventListener('click', () => {
          person.classList.remove('hidden');
          collection.classList.add('hidden');
          this.staffSelector.classList.add('hidden');
          axios.get('/getPersonality')
            .then(response => {
              if (Object.keys(response.data).length) {
                this.updateSelector(response.data, 'templateSelector');
              };
            })
            .catch(error => {
                console.log(error);
            });      
        })

    const person = utils.createButton(utils.btn.person, ['ml-6', 'text-gray-600', ...this.CSS.render_BTN]);
        this.api.tooltip.onHover(person, 'Load User from DB', { placement: 'top', });
        person.addEventListener('click', () => {
          person.classList.add('hidden');
          collection.classList.remove('hidden');
          this.templateSelector.classList.add('hidden');
          axios.get('/getStaff')
            .then(response => {
              if (Object.keys(response.data).length) {
                this.updateStaffSelector(response.data);
              };
            })
            .catch(error => {
                console.log(error);
            });      
        })

    const upload = utils.createButton(utils.btn.upload, ['text-gray-600', ...this.CSS.render_BTN]);
        this.api.tooltip.onHover(upload, 'Save layout', { placement: 'top', });
        upload.addEventListener('click', () => {
          const wrapper = this.nodes.wrapper;
          const imageWrapper = this.nodes.imageWrapper;
          const photo = this.nodes.photo;
          const text = this.nodes.text;
          const name = this.nodes.name;
          const company = this.nodes.company;
          const uid = this.nodes.uid;

          let newTemplate = {
            imageWrapper: { class: utils.getClasses(imageWrapper), style: utils.getStyles(imageWrapper), },
            photo: { url: this._data.photo.url, class: utils.getClasses(photo), style: utils.getStyles(photo) },
            text: { class: utils.getClasses(text), style: utils.getStyles(text), },
            name: { text: name.textContent.trim() || '', class: utils.getClasses(name), style: utils.getStyles(name) },
            company: { text: company.textContent.trim() || '', class: utils.getClasses(company), style: utils.getStyles(company) },
            uid: { text: uid.textContent.trim() || '', class: utils.getClasses(uid), style: utils.getStyles(uid) },
            wrapper: { class: utils.getClasses(wrapper), style: utils.getStyles(wrapper) },
          }

          let templateName = prompt('Save new template from current module', 'Enter template title');
          if (templateName) {
            axios.post('/savePersonality', {
                templateName,
                params: JSON.stringify(newTemplate)
              })
              .catch(error => {
                console.log(error);
              });
          }  
        })
    const reset = utils.createButton(utils.btn.reset, ['ml-6', 'text-gray-600', 'rounded-full', 'hover:bg-red-400', 'hover:text-white']);
        this.api.tooltip.onHover(reset, 'Reset layout', { placement: 'top', });
        reset.style.width = '26px';
        reset.style.height = '26px';
        reset.addEventListener('click', () => {
          this.nodes.wrapper.style = '';
          this.nodes.photo.style = '';
          this.nodes.imageWrapper.style = '';
          this.nodes.name.style = '';
          this.nodes.wrapper.className = '';
          this.nodes.photo.className = '';
          this.nodes.imageWrapper.className = '';
          this.nodes.name.className = '';
          roundness.value = null;
          bgRoundness.value = null; 
          borderWidth.value = null; 
          imageBorderWidth.value = null; 
          imageShadow.value = null; 
          elementShadow.value = null; 
          textSize.value = null; 
          pxText.value = null; 
          pyText.value = null; 
          mx.value = null; 
          my.value = null; 
          px.value = null; 
          py.value = null; 
          elementWide.value = null; 
          imageWide.value = null;

          hideTextColor.checked = false; 
          hideFonColor.checked = false; 
          hideImageBorder.checked = false; 
          hideBorder.checked = false;
          this.nodes.wrapper.classList.add('flex', 'items-center', 'justify-center');
          textColor.getElementsByTagName('input')[0].value = '#282828';
          fonColor.getElementsByTagName('input')[0].value = '#FBFBFB';
          borderColor.getElementsByTagName('input')[0].value = '#FBFBFB';
          imageBorder.getElementsByTagName('input')[0].value = '#FBFBFB';
          this.nodes.name.style.color = "#282828";
          // this.api.blocks.stretchBlock(this.api.blocks.getCurrentBlockIndex(), !!this._data.stretched);
        })
    let control = utils.createControlGroup(this.api); 

    // row1.appendChild(prText);
    utils.appendMany(row1, [fontSelector, fontWeight, fontSize, alignment, pxText, this.colorPaddingSet('name', name), this.colorPaddingSet('company', company)]);  // textColor, hideTextColor, textSize, 
    // utils.appendMany(row1, [alignment, pxText, ptText, pbText, this.templateSelector]);  // textColor, hideTextColor, textSize, 
    utils.appendMany(row2, [fonColor, hideFonColor, mx, my, borderColor, hideBorder, borderWidth, bgRoundness, elementShadow, clearBg,]);
    utils.appendMany(row4, [px, py, blockLeft, blockCenter, blockRight, blockVStart, blockVCenter, blockVEnd, elementWide, control]);
    utils.appendMany(row3, [loadImage, imgLeft, imgCenter, imgRight, imageWide, roundness, imageBorder, hideImageBorder, imageBorderWidth, imageShadow, this.staffSelector, person, this.templateSelector, collection, upload, reset]);

    utils.appendMany(holder, [row3, row1, row2, row4]);
    return holder;
  }
  // set decoration for linked button based on fake class
  markActiveBtn(targetBtn, targetArray, marker) {
    // remove any text color from given array of buttons 
    let removed = ['text-blue-500', 'text-gray-600'];
    targetArray.forEach(item => item.classList.remove(...removed));
    
    targetBtn.classList.add('text-blue-500');
    // remove marker from container classes array
    targetArray.map(item => item.id).forEach(btnID => this.nodes.wrapper.classList.remove(btnID))
    // set marker for container classes array
    this.nodes.wrapper.classList.add(targetBtn.id);
  }
  // check decoration for linked button based on fake class
  checkActiveBtn(marker) {
    if (Array.from(this.nodes.wrapper.classList).includes(marker)) {
      return 'text-blue-500';
    } else {
      return 'text-gray-600';
    }
  }
  // get data from BD for template
  updateStaffSelector(data) {
    data.filter(item => {
      let option = document.createElement('option');
      option.text = item.contact.first_name+' '+item.contact.last_name;
      option.value = JSON.stringify(item);
      this.staffSelector.appendChild(option);
    })
    this.staffSelector.classList.remove('hidden');
  }
  updateSelector(data, selector) {
    for(let key in data) {
      let option = document.createElement('option');
      option.text = key;
      option.value = data[key];
       
      this[selector].appendChild(option);
    }
    this[selector].classList.remove('hidden');
  }
  renderTemplate(data) {
    data.photo.url = this._data.photo.url;
    data.name.text = this._data.name.text;
    data.company.text = this._data.company.text;
    data.uid.text = this._data.uid.text;
    // save index of current block in variable
    let index = this.api.blocks.getCurrentBlockIndex();
    // remove block by index
    this.api.blocks.delete(index);
    // insert new block with saved index and data
    this.api.blocks.insert("personality", data, null, index, true);
  }
  renderUser(user) {
    let input = JSON.parse(user);
    // let input = user;
    let data = {
          "imageWrapper": {
              "class": [ "relative", "overflow-hidden", "rounded-full", "w-16", "h-16" ],
              "style": {},
          },
          "photo": {
              "url": '/img/uploads/'+input.contact.avatar,
              "class": [ "absolute", "cursor-pointer", "outline-none", "w-full", "h-full", "object-cover" ],
              "style": {}
          },
          "text": {
              "class": [ "px-4", "text-base" ],
              "style": {}
          },
          "name": {
              "text": input.contact.first_name+' '+input.contact.last_name,
              "class": [ "outline-none" ],
              "style": { "color": "rgb(66, 58, 63)"
              }
          },
          "company": {
              "text": input.job.company+', '+input.job.position,
              "class": [ "outline-none", "text-xcompany", "mt-0" ],
              "style": { "color": "rgb(164, 81, 81)"
              }
          },
          "uid": {
              "text": input.id,
              "class": [ "outline-none", "text-xuid", "mt-0" ],
              "style": { "color": "rgb(170, 75, 75)" }
          },
          "wrapper": {
              "class": [ "flex", "p-2", "ml-0", "blockLeft", "w-full", "items-center", "blockVCenter"],
              "style": {}
          }
      }
      let index = this.api.blocks.getCurrentBlockIndex();
      // remove block by index
      this.api.blocks.delete(index);
      // insert new block with saved index and data
      this.api.blocks.insert("personality", data, {user_id: input.id}, index, true);
  }
}