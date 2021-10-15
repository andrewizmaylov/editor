import * as utils from './editorUtility.js';

class FontSize {

  static get isInline() {
    return true;
  }

  get state() {
    return this._state;
  }

  set state(state) {
    this._state = state;
  }

  constructor({api}) {
    this.api = api;
    this._state = false;

    this.selector = null;
    this.colorPicker = null;
    this.button = null;
    this.tag = 'SPAN';
    this.mark = null;

    this.iconClasses = {
      base: this.api.styles.inlineToolButton,
      active: this.api.styles.inlineToolButtonActive
    };
    this.classes = ['text-xs', 'text-sm', 'text-base', 'text-lg', 'text-xl', 'text-2xl', 'text-3xl', 'text-4xl', 'text-5xl', 'text-6xl', 'text-7xl', 'text-8xl', 'text-9xl'];
    this.class = null;
  }

  render() {
    this.button = document.createElement('button');
    this.button.type = 'button';
    this.button.innerHTML = '<svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.9 4.5a.3.3 0 00.24-.48l-1.65-2.2a.3.3 0 00-.48 0l-1.65 2.2a.3.3 0 00.24.48h.6a.3.3 0 01.3.3v2.4a.3.3 0 01-.3.3h-.6a.3.3 0 00-.24.48l1.65 2.2a.3.3 0 00.48 0l1.65-2.2a.3.3 0 00-.24-.48h-.6a.3.3 0 01-.3-.3V4.8a.3.3 0 01.3-.3h.6zM7.188 3a.3.3 0 00-.28.195l-4.276 11.4a.3.3 0 00.281.405h.962a.3.3 0 00.281-.195l1.26-3.36a.3.3 0 01.281-.195h4.357a.3.3 0 01.28.195l1.26 3.36a.3.3 0 00.282.195h.962a.3.3 0 00.28-.405l-4.274-11.4A.3.3 0 008.563 3H7.188zm-.704 6.75a.3.3 0 01-.281-.405l1.391-3.71a.3.3 0 01.562 0l1.391 3.71a.3.3 0 01-.28.405H6.483z" /></svg>';
    this.button.classList.add(this.iconClasses.base); // basic style of inline element hover so on...
    return this.button;
  }

  surround(range) {   
    if (!range) {
      return;
    }
    let termWrapper = this.api.selection.findParentTag(this.tag);
    if (termWrapper) {
      this.unwrap(termWrapper);
    } else {
      this.wrap(range);
    }
  }
  
  wrap(range) {
    let span = document.createElement(this.tag);
    span.appendChild(range.extractContents());
    range.insertNode(span);
    this.api.selection.expandToTag(span);
  }

  unwrap(termWrapper) {
    this.api.selection.expandToTag(termWrapper);
    let sel = window.getSelection();
    let range = sel.getRangeAt(0);
    let unwrappedContent = range.extractContents();
    termWrapper.parentNode.removeChild(termWrapper);
    range.insertNode(unwrappedContent);
    sel.removeAllRanges();
    sel.addRange(range);
  }

  checkState() {
    this.mark = this.api.selection.findParentTag(this.tag, this.class);
    this.state = !!this.mark;
    if (this.state) {
      this.showActions();
      if (this.mark.style && this.mark.style.color) {
        this.fontColorPicker.getElementsByTagName('input')[0].value = utils.convertToHex(this.mark.style.color);
      }
      if (this.mark.classList && this.mark.classList.length) {
        Array.from(this.mark.classList).forEach(item => {
          if (utils.measurment.fontSizes.includes(item)) {
            this.fontSize.value = item;
          }
          if (utils.measurment.fontWeight.includes(item)) {
            this.fontWeight.value = item;
          }
          if (utils.measurment.fontFamily.includes(item)) {
            this.fontFamily.value = item;
          }
          if (utils.measurment.marginT.includes(item)) {
            this.mt.value = item;
          }
          if (utils.measurment.marginB.includes(item)) {
            this.mb.value = item;
          }
          if (utils.measurment.paddingY.includes(item)) {
            this.py.value = item;
          }
        })
      }
    } else {
      this.hideActions();
    }
  }

  renderActions() {
    this.actionSet = utils.make('div', ['flex', 'flex-col', 'hidden', 'mx-auto', 'p-1', 'bg-gray-100']);
    let row1 = utils.make('div', ['flex', 'items-center', 'mb-1']);
    let row2 = utils.make('div', ['flex', 'items-center', 'mb-1']);
    

      this.fontColorPicker = this.colorPickerModule('color');
          this.api.tooltip.onHover(this.fontColorPicker, 'Background color', { placement: 'top', });
      this.fontSize = utils.createSimpleSelector('Font Size', utils.measurment.fontSizes);
          this.api.tooltip.onHover(this.fontSize, 'Font size', { placement: 'top', });
          this.fontSize.classList.add('w-28');
      this.fontFamily = utils.createSimpleSelector('Font Family', utils.measurment.fontFamily);
          this.api.tooltip.onHover(this.fontFamily, 'Font family', { placement: 'top', });
          this.fontFamily.classList.add('w-28');
      this.fontWeight = utils.createSimpleSelector('Font Weight', utils.measurment.fontWeight);
          this.api.tooltip.onHover(this.fontWeight, 'Font weight', { placement: 'top', });
          this.fontWeight.classList.add('w-28');
      this.mt = utils.createSimpleSelector('mt', utils.measurment.marginT);
          this.api.tooltip.onHover(this.mt, 'Margin top', { placement: 'top', });
          this.mt.classList.add('w-20');
      this.mb = utils.createSimpleSelector('mb', utils.measurment.marginB);
          this.api.tooltip.onHover(this.mb, 'Margin bottom', { placement: 'top', });
          this.mb.classList.add('w-20');      
      this.py = utils.createSimpleSelector('py', utils.measurment.paddingY);
          this.api.tooltip.onHover(this.py, 'Padding Y', { placement: 'top', });
          this.py.classList.add('w-20');

      this.newLine = utils.make('button', ['mx-1', 'w-28', 'h-8', 'rounded', 'bg-white', 'hover:bg-blue-500', 'hover:text-white', 'text-xs'], {id: 'newLineBtn', type: 'button'});
          this.newLine.style.height = '24px';
          this.newLine.innerHTML = 'Add new line';
          this.newLine.addEventListener('click', () => {
            this.mark.classList.toggle('block');
          })

      let reset = utils.createButton(utils.btn.reset);
          reset.classList.add('ml-6', 'text-gray-600', 'rounded-full', 'hover:bg-red-400', 'hover:text-white');
          this.api.tooltip.onHover(reset, 'Reset layout', { placement: 'top', });
          reset.addEventListener('click', () => {
            this.unwrap(this.mark);
            this.actionSet.classList.add('hidden');
          })

      let eye = utils.make('span', ['ml-12', 'mr-2', 'cursor-pointer', 'text-gray-500']);
      eye.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" ><path fill-rule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clip-rule="evenodd" /><path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" /></svg>';
      eye.addEventListener('click', () => {
        this.actionSet.classList.add('hidden');
      })

    // this.actionSet.appendChild(this.selector);
    utils.appendMany(row1, [this.fontColorPicker, this.fontSize, this.fontFamily, this.fontWeight, reset]);
    utils.appendMany(row2, [this.newLine, this.mt, this.mb, this.py]);
    utils.appendMany(this.actionSet, [row1, row2]);
    return this.actionSet;
  }

  colorPickerModule(property, clearColor = null) {     
    const newColorPicker = document.createElement('div');
    newColorPicker.setAttribute('id', `${property}CP`);
    newColorPicker.classList.add('mx-1', 'w-6', 'h-6', 'rounded-full', 'overflow-hidden');
    newColorPicker.style.border = "solid 2px #bdbcbc";
      const currentPicker = document.createElement('input');
      currentPicker.classList.add('w-24', 'h-24', '-ml-4', '-mt-4', 'cursor-pointer');
      currentPicker.type = 'color';
    newColorPicker.appendChild(currentPicker);
      currentPicker.onchange = () => {
        this.mark.style[property] = currentPicker.value;
        return;
      }
    return newColorPicker;
  }

  showActions() {
    this.fontSize.onchange = () => {
      utils.measurment.fontSizes.filter(item => this.mark.classList.remove(item));
      this.mark.classList.add(this.fontSize.value);
    }
    this.fontFamily.onchange = () => {
      utils.measurment.fontFamily.filter(item => this.mark.classList.remove(item));
      this.mark.classList.add(this.fontFamily.value);
    }
    this.fontWeight.onchange = () => {
      utils.measurment.fontWeight.filter(item => this.mark.classList.remove(item));
      this.mark.classList.add(this.fontWeight.value);
    }
    this.py.onchange = () => {
      utils.measurment.paddingY.filter(item => this.mark.classList.remove(item));
      this.mark.classList.add(this.py.value);
    }
    this.mt.onchange = () => {
      utils.measurment.marginT.filter(item => this.mark.classList.remove(item));
      this.mark.classList.add(this.mt.value);
    }
    this.mb.onchange = () => {
      utils.measurment.marginB.filter(item => this.mark.classList.remove(item));
      this.mark.classList.add(this.mb.value);
    }
    this.actionSet.classList.remove('hidden');
  }

  hideActions() { 
    // this.selector.onchange = null;
    this.fontColorPicker.getElementsByTagName('input')[0].value = '#2F3647';

    this.actionSet.classList.add('hidden');
  }

  static get sanitize() {
    return {
      span: true
    };
  }
}

export default FontSize