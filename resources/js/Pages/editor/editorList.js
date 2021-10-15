require('./editorList.css').toString();
import * as utils from './editorUtility.js';

class editorList {

  //Notify core that read-only mode is supported
  static get isReadOnlySupported() {
    return true;
  }

  // Allow to use native Enter behaviour
  static get enableLineBreaks() {
    return true;
  }

  //Get Tool toolbox settings
  static get toolbox() {
    return {
      icon: '<svg width="17" height="13" viewBox="0 0 17 13" xmlns="http://www.w3.org/2000/svg"> <path d="M5.625 4.85h9.25a1.125 1.125 0 0 1 0 2.25h-9.25a1.125 1.125 0 0 1 0-2.25zm0-4.85h9.25a1.125 1.125 0 0 1 0 2.25h-9.25a1.125 1.125 0 0 1 0-2.25zm0 9.85h9.25a1.125 1.125 0 0 1 0 2.25h-9.25a1.125 1.125 0 0 1 0-2.25zm-4.5-5a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25zm0-4.85a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25zm0 9.85a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25z"/></svg>',
      title: 'List Tool',
    };
  }

  /**
   * Render plugin`s main Element and fill it with saved data
   * @param {object} params - tool constructor options
   * @param {ListData} params.data - previously saved data
   * @param {object} params.config - user config for Tool
   * @param {object} params.api - Editor.js API
   * @param {boolean} params.readOnly - read-only mode flag
   */
  constructor({ data, config, api, readOnly }) {
    //  HTML nodes
    this._elements = {
      wrapper: null,
    };

    this.api = api;
    this.readOnly = readOnly;

    this.settings = [
      {
        name: 'ordered',
        style: 'decimal',
        title: this.api.i18n.t('Ordered'),
        icon: '<svg width="17" height="13" viewBox="0 0 17 13" xmlns="http://www.w3.org/2000/svg"><path d="M5.819 4.607h9.362a1.069 1.069 0 0 1 0 2.138H5.82a1.069 1.069 0 1 1 0-2.138zm0-4.607h9.362a1.069 1.069 0 0 1 0 2.138H5.82a1.069 1.069 0 1 1 0-2.138zm0 9.357h9.362a1.069 1.069 0 0 1 0 2.138H5.82a1.069 1.069 0 0 1 0-2.137zM1.468 4.155V1.33c-.554.404-.926.606-1.118.606a.338.338 0 0 1-.244-.104A.327.327 0 0 1 0 1.59c0-.107.035-.184.105-.234.07-.05.192-.114.369-.192.264-.118.475-.243.633-.373.158-.13.298-.276.42-.438a3.94 3.94 0 0 1 .238-.298C1.802.019 1.872 0 1.975 0c.115 0 .208.042.277.127.07.085.105.202.105.351v3.556c0 .416-.15.624-.448.624a.421.421 0 0 1-.32-.127c-.08-.085-.121-.21-.121-.376zm-.283 6.664h1.572c.156 0 .275.03.358.091a.294.294 0 0 1 .123.25.323.323 0 0 1-.098.238c-.065.065-.164.097-.296.097H.629a.494.494 0 0 1-.353-.119.372.372 0 0 1-.126-.28c0-.068.027-.16.081-.273a.977.977 0 0 1 .178-.268c.267-.264.507-.49.722-.678.215-.188.368-.312.46-.371.165-.11.302-.222.412-.334.109-.112.192-.226.25-.344a.786.786 0 0 0 .085-.345.6.6 0 0 0-.341-.553.75.75 0 0 0-.345-.08c-.263 0-.47.11-.62.329-.02.029-.054.107-.101.235a.966.966 0 0 1-.16.295c-.059.069-.145.103-.26.103a.348.348 0 0 1-.25-.094.34.34 0 0 1-.099-.258c0-.132.031-.27.093-.413.063-.143.155-.273.279-.39.123-.116.28-.21.47-.282.189-.072.411-.107.666-.107.307 0 .569.045.786.137a1.182 1.182 0 0 1 .618.623 1.18 1.18 0 0 1-.096 1.083 2.03 2.03 0 0 1-.378.457c-.128.11-.344.282-.646.517-.302.235-.509.417-.621.547a1.637 1.637 0 0 0-.148.187z"/></svg>',
        default: true,
      },
      {
        name: 'zero', 
        style: 'decimal-leading-zero',
        title: this.api.i18n.t('Leading zero'),
        icon: '<svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)" fill="currentColor"><path d="M7.781 8.8h9.25a1.125 1.125 0 110 2.25h-9.25a1.125 1.125 0 110-2.25zm0-4.85h9.25a1.125 1.125 0 110 2.25h-9.25a1.125 1.125 0 010-2.25zm0 9.85h9.25a1.125 1.125 0 110 2.25h-9.25a1.125 1.125 0 110-2.25zM3.26 7.48c0 .492-.102.868-.306 1.128-.203.26-.501.39-.893.39-.388 0-.684-.127-.89-.382-.204-.256-.31-.622-.314-1.1v-.653c0-.497.102-.874.308-1.13.206-.258.503-.387.89-.387.388 0 .684.128.89.384.204.254.31.62.314 1.096v.654zm-.706-.718c0-.294-.041-.508-.122-.642-.08-.135-.205-.202-.376-.202a.403.403 0 00-.369.193c-.078.127-.12.326-.125.598v.864c0 .29.04.505.118.647.08.14.206.21.38.21.173 0 .298-.068.374-.203.077-.135.116-.341.12-.62v-.845zM5.452 8.95h-.706V6.23l-.842.261v-.573l1.472-.528h.076v3.56zm-2.193 4.53c0 .492-.101.868-.305 1.128-.203.26-.501.39-.893.39-.388 0-.684-.127-.89-.382-.204-.256-.31-.622-.314-1.1v-.653c0-.497.102-.874.308-1.13.206-.258.503-.386.89-.386.388 0 .684.127.89.383.204.254.31.62.314 1.096v.654zm-.705-.718c0-.294-.041-.508-.122-.642-.08-.135-.205-.202-.376-.202a.404.404 0 00-.369.193c-.078.127-.12.326-.125.598v.864c0 .29.04.505.118.647.08.14.206.21.38.21.173 0 .298-.068.374-.203.077-.135.116-.341.12-.62v-.845zm3.62 2.188H3.738v-.483l1.15-1.226c.158-.172.274-.323.349-.452a.72.72 0 00.115-.366.539.539 0 00-.12-.371c-.08-.091-.194-.137-.342-.137a.468.468 0 00-.378.166.652.652 0 00-.137.433h-.708c0-.217.051-.415.154-.594.104-.179.25-.319.44-.42.188-.102.402-.153.641-.153.367 0 .65.087.852.263.204.176.306.424.306.745 0 .176-.046.355-.137.537a2.984 2.984 0 01-.469.637l-.808.852h1.528v.569z"/></g><defs><clipPath id="clip0"><path fill="currentColor" d="M0 0h20v20H0z"/></clipPath></defs></svg>',
        default: true,
      },
      {
        name: 'unordered',
        style: 'disc',
        title: this.api.i18n.t('Unordered'),
        icon: '<svg width="17" height="13" viewBox="0 0 17 13" xmlns="http://www.w3.org/2000/svg"> <path d="M5.625 4.85h9.25a1.125 1.125 0 0 1 0 2.25h-9.25a1.125 1.125 0 0 1 0-2.25zm0-4.85h9.25a1.125 1.125 0 0 1 0 2.25h-9.25a1.125 1.125 0 0 1 0-2.25zm0 9.85h9.25a1.125 1.125 0 0 1 0 2.25h-9.25a1.125 1.125 0 0 1 0-2.25zm-4.5-5a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25zm0-4.85a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25zm0 9.85a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25z"/></svg>',
        default: false,
      },           
      {
        name: 'circle', 
        style: 'circle',
        title: this.api.i18n.t('Circle'),
        icon: '<svg width="17" height="13" viewBox="0 0 17 13" xmlns="http://www.w3.org/2000/svg"> <path d="M5.625 4.85h9.25a1.125 1.125 0 0 1 0 2.25h-9.25a1.125 1.125 0 0 1 0-2.25zm0-4.85h9.25a1.125 1.125 0 0 1 0 2.25h-9.25a1.125 1.125 0 0 1 0-2.25zm0 9.85h9.25a1.125 1.125 0 0 1 0 2.25h-9.25a1.125 1.125 0 0 1 0-2.25zm-4.5-5a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25zm0-4.85a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25zm0 9.85a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25z"/></svg>',
        default: false,
      },      
      {
        name: 'square', 
        style: 'square',
        title: this.api.i18n.t('Square'),
        icon: '<svg width="17" height="13" viewBox="0 0 17 13" xmlns="http://www.w3.org/2000/svg"> <path d="M5.625 4.85h9.25a1.125 1.125 0 0 1 0 2.25h-9.25a1.125 1.125 0 0 1 0-2.25zm0-4.85h9.25a1.125 1.125 0 0 1 0 2.25h-9.25a1.125 1.125 0 0 1 0-2.25zm0 9.85h9.25a1.125 1.125 0 0 1 0 2.25h-9.25a1.125 1.125 0 0 1 0-2.25zm-4.5-5a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25zm0-4.85a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25zm0 9.85a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25z"/></svg>',
        default: false,
      },
      {
        name: 'upper_roman', 
        style: 'upper-roman',
        title: this.api.i18n.t('Upper roman'),
        icon: '<svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)" fill="currentColor"><path d="M7.781 8.8h9.25a1.125 1.125 0 110 2.25h-9.25a1.125 1.125 0 110-2.25zm0-4.85h9.25a1.125 1.125 0 110 2.25h-9.25a1.125 1.125 0 010-2.25zm0 9.85h9.25a1.125 1.125 0 110 2.25h-9.25a1.125 1.125 0 110-2.25zM4.272 13.75H2.808V6.64h1.464v7.11z"/></g><defs><clipPath id="clip0"><path fill="currentColor" d="M0 0h20v20H0z"/></clipPath></defs></svg>',
        default: true,
      },      
      {
        name: 'roman', 
        style: 'lower-roman',
        title: this.api.i18n.t('Lower roman'),
        icon: '<svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)" fill="currentColor"><path d="M7.781 8.8h9.25a1.125 1.125 0 110 2.25h-9.25a1.125 1.125 0 110-2.25zm0-4.85h9.25a1.125 1.125 0 110 2.25h-9.25a1.125 1.125 0 010-2.25zm0 9.85h9.25a1.125 1.125 0 110 2.25h-9.25a1.125 1.125 0 110-2.25zM4.375 13.75H2.959V8.467h1.416v5.283zM2.876 7.1c0-.212.07-.386.21-.523.143-.137.337-.205.581-.205.24 0 .433.068.576.205a.69.69 0 01.215.523c0 .214-.073.39-.22.527-.143.137-.333.205-.571.205-.238 0-.43-.068-.576-.205a.697.697 0 01-.215-.527z"/></g><defs><clipPath id="clip0"><path fill="currentColor" d="M0 0h20v20H0z"/></clipPath></defs></svg>',
        default: true,
      },       
      {
        name: 'upper_alpha', 
        style: 'upper-alpha',
        title: this.api.i18n.t('Upper alpha'),
        icon: '<svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)" fill="currentColor"><path d="M7.781 8.8h9.25a1.125 1.125 0 110 2.25h-9.25a1.125 1.125 0 110-2.25zm0-4.85h9.25a1.125 1.125 0 110 2.25h-9.25a1.125 1.125 0 010-2.25zm0 9.85h9.25a1.125 1.125 0 110 2.25h-9.25a1.125 1.125 0 110-2.25zM4.754 7.075H2.956L2.614 8.1h-1.09l1.852-4.977h.95L6.19 8.1H5.1l-.345-1.025zm-1.521-.831h1.244l-.625-1.863-.62 1.863zM1.944 16.1v-4.977h1.744c.603 0 1.061.117 1.374.35.312.23.468.568.468 1.014 0 .244-.063.46-.188.646-.126.185-.3.32-.523.407.255.064.456.193.601.386.149.194.223.43.223.711 0 .479-.153.84-.458 1.087-.306.246-.741.371-1.306.376H1.944zm1.026-2.167v1.343h.878c.242 0 .43-.057.564-.17a.595.595 0 00.205-.48c0-.455-.236-.686-.707-.693h-.94zm0-.725h.759c.517-.009.775-.215.775-.618 0-.226-.066-.388-.198-.486-.13-.1-.336-.15-.619-.15H2.97v1.254z"/></g><defs><clipPath id="clip0"><path fill="currentColor" d="M0 0h20v20H0z"/></clipPath></defs></svg>',
        default: true,
      },
      {
        name: 'alpha', 
        style: 'lower-alpha',
        title: this.api.i18n.t('Lower alpha'),
        icon: '<svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)" fill="currentColor"><path d="M7.781 8.8h9.25a1.125 1.125 0 110 2.25h-9.25a1.125 1.125 0 110-2.25zm0-4.85h9.25a1.125 1.125 0 110 2.25h-9.25a1.125 1.125 0 010-2.25zm0 9.85h9.25a1.125 1.125 0 110 2.25h-9.25a1.125 1.125 0 110-2.25zM4.397 8.05a1.097 1.097 0 01-.099-.332c-.239.267-.55.4-.933.4-.362 0-.663-.104-.902-.314a1.013 1.013 0 01-.356-.793c0-.392.145-.693.434-.902.292-.21.713-.316 1.262-.318h.454v-.212a.604.604 0 00-.133-.41c-.087-.103-.224-.154-.414-.154a.596.596 0 00-.393.12.409.409 0 00-.14.328H2.19c0-.215.067-.413.199-.595s.319-.325.56-.427c.242-.105.513-.158.814-.158.455 0 .817.115 1.083.346.27.227.404.549.404.963v1.604c.002.35.05.616.147.796v.058h-.999zm-.816-.687c.145 0 .28-.032.403-.096a.65.65 0 00.273-.263v-.636h-.369c-.494 0-.757.171-.79.513l-.003.058c0 .123.044.225.13.304.087.08.205.12.356.12zm2.006 6.872c0 .593-.127 1.055-.38 1.388-.252.33-.606.495-1.059.495-.401 0-.721-.153-.96-.461l-.045.393h-.889V10.8h.988v1.883c.228-.266.528-.4.9-.4.45 0 .803.167 1.059.5.257.33.386.796.386 1.397v.055zm-.988-.072c0-.373-.06-.646-.178-.817-.118-.173-.295-.26-.53-.26-.314 0-.53.13-.649.387v1.46c.121.26.34.389.656.389.32 0 .53-.157.63-.472.047-.15.071-.38.071-.687z"/></g><defs><clipPath id="clip0"><path fill="currentColor" d="M0 0h20v20H0z"/></clipPath></defs></svg>',
        default: true,
      },
    ];

    // Tool's data
    // this._data = {
    //   style: this.settings.find((tune) => tune.default === true).name,
    //   items: [],
    // };

    this._data = this.normalizeData(data);

    this.lineSpaceValue = 2;
    this.position = 'outside';

    // this.data = data;
  }
  // Normalize input data
  normalizeData(data) {
    const newData = {};

    if (typeof data !== 'object') {
      data = {};
    }
    newData.items = data.items || [];
    newData.style = data.style !== undefined ? data.style : 'ordered';
    newData.lineSpace = data.lineSpace !== undefined ? data.lineSpace : 2;
    newData.position = data.position !== undefined ? data.position : 'outside';
    newData.class = data.class !== undefined && data.class.length > 0 ? data.class : [];
    newData.styles = data.styles !== undefined && typeof data.styles === 'object' ? data.styles : {};
     
    return newData;
  }


  // Returns list tag with items
  render() {
    this._elements.wrapper = this.makeMainTag(this._data.style);
 
    if (this._data.style !== undefined && this._data.style == "ordered") {
      this._elements.wrapper.style.listStyle = 'decimal';
    } else {
      this._elements.wrapper.style.listStyle = 'disc';
    }
    if (this._data && this._data.class.length) {
      this._elements.wrapper.className = this._data.class.join(' ');
    }
    if (this._data && typeof this._data.styles !== undefined) {
      for (let key in this._data.styles) {
        this._elements.wrapper.style[key] = this._data.styles[key];
      }
    } 
    // fill with data
    if (this._data.items.length) {
      this._data.items.forEach((item) => {
        let el = this._make('li', this.CSS.item, {
          innerHTML: item,
        });
        el.style.paddingBottom = `${this.lineSpaceValue}px`;
        this._elements.wrapper.appendChild(el);
      });
    } else {
      this._elements.wrapper.appendChild(this._make('li', this.CSS.item));
    }

    if (!this.readOnly) {
      // detect keydown on the last item to escape List
      this._elements.wrapper.addEventListener('keydown', (event) => {
        const [ENTER, BACKSPACE] = [13, 8]; // key codes

        switch (event.keyCode) {
          case ENTER:
            this.getOutofList(event);
            break;
          case BACKSPACE:
            this.backspace(event);
            break;
        }
      }, false);
    }

    return this._elements.wrapper;
  }

  //  @public
  save() {
    // return this.data;
    return {
      style: this.data.style,
      items: this.data.items,
      position: this.position,
      lineSpace: this.lineSpaceValue,
      styles: utils.getStyles(this._elements.wrapper),
      class: this._elements.wrapper.getAttribute('class').split(' '),
    }
  }

  //Allow List Tool to be converted to/from other block
  static get conversionConfig() {
    return {
      //  To create exported string from list, concatenate items by dot-symbol.
      export: (data) => {
        return data.items.join('. ');
      },
      // To create a list from other block's string, just put it at the first item
      import: (string) => {
        return {
          items: [ string ],
          style: 'unordered',
        };
      },
    };
  }

  //  Sanitizer rules
  static get sanitize() {
    return {
      style: {},
      styles: true,
      class: true,
      position: true,
      lineSpace: true,
      items: {
        br: true,
      },
    };
  }

  //  Settings
  renderSettings() {
    const wrapper = this._make('div', ['flex', 'flex-col', 'bg-gray-100', 'px-1', 'py-2' ], {});
    // const wrapper = this._make('div', ['flex', 'flex-col', this.CSS.settingsWrapper ], {});

    let row1 = utils.make('div', ['flex', 'items-center']);
    let row2 = utils.make('div', ['flex', 'items-center', 'mt-1']);
    let row3 = utils.make('div', ['flex', 'items-center', 'mt-1']);
    utils.appendMany(wrapper, [row1, row2, row3]);

    // colorpickers
    let fonColor = utils.colorPickerModule('backgroundColor', this._elements.wrapper);
        this.api.tooltip.onHover(fonColor, 'Background color', { placement: 'top', });
        fonColor.getElementsByTagName('input')[0].value = this._elements.wrapper.style.backgroundColor ? utils.convertToHex(this._elements.wrapper.style.backgroundColor) : '#FBFBFB';
    let textColor = utils.colorPickerModule('color', this._elements.wrapper);
        this.api.tooltip.onHover(textColor, 'Text color', { placement: 'top', });
        textColor.getElementsByTagName('input')[0].value = this._elements.wrapper.style.color ? utils.convertToHex(this._elements.wrapper.style.color) : '#282828';
    // selectors
    const px = utils.createSelector('px', utils.measurment.paddingX, this._elements.wrapper);
        this.api.tooltip.onHover(px, 'Padding X', { placement: 'top', });
        px.classList.add('w-20');
        px.value = utils.getClassFromData(this._elements.wrapper, 'paddingX'); 
    const py = utils.createSelector('py', utils.measurment.paddingY, this._elements.wrapper);
        this.api.tooltip.onHover(py, 'Padding Y', { placement: 'top', });
        py.classList.add('w-20');
        py.value = utils.getClassFromData(this._elements.wrapper, 'paddingY');      
    const my = utils.createSelector('my', utils.measurment.marginY, this._elements.wrapper);
        this.api.tooltip.onHover(my, 'Margin Y', { placement: 'top', });
        my.classList.add('w-20');
        my.value = utils.getClassFromData(this._elements.wrapper, 'marginY');      
    const fontSize = utils.createSelector('Font Size', utils.measurment.fontSizes, this._elements.wrapper);
        this.api.tooltip.onHover(fontSize, 'Text size', { placement: 'top', });
        fontSize.classList.add('w-24');
        fontSize.value = utils.getClassFromData(this._elements.wrapper, 'fontSizes'); 
    const fontSelector = utils.createSelector('Font Family', utils.measurment.fontFamily, this._elements.wrapper);
        this.api.tooltip.onHover(fontSelector, 'Font family', { placement: 'top', });
        fontSelector.classList.add('w-28');
        fontSelector.value = utils.getClassFromData(this._elements.wrapper, 'fontFamily'); 
    const fontWeight = utils.createSelector('Font Weight', utils.measurment.fontWeight, this._elements.wrapper);
        this.api.tooltip.onHover(fontWeight, 'Font weight', { placement: 'top', });
        fontWeight.classList.add('w-28');
        fontWeight.value = utils.getClassFromData(this._elements.wrapper, 'fontWeight'); 
    const shadow = utils.createSelector('Shadow', utils.measurment.shadow, this._elements.wrapper);
        this.api.tooltip.onHover(shadow, 'Background shadow', { placement: 'top', });
        shadow.classList.add('w-28');
        shadow.value = utils.getClassFromData(this._elements.wrapper, 'shadow'); 
    const roundnes = utils.createSelector('Roundnes', utils.measurment.bgRadius, this._elements.wrapper);
        this.api.tooltip.onHover(roundnes, 'Background roundnes', { placement: 'top', });
        roundnes.classList.add('w-28');
        roundnes.value = utils.getClassFromData(this._elements.wrapper, 'bgRadius'); 
    const mt = utils.createSelector('mt', utils.measurment.marginT, this._elements.wrapper);
        this.api.tooltip.onHover(mt, 'Block margin Top', { placement: 'top', });
        mt.classList.add('w-20');
        mt.value = utils.getClassFromData(this._elements.wrapper, 'marginT'); 
    const mb = utils.createSelector('mb', utils.measurment.marginB, this._elements.wrapper);
        this.api.tooltip.onHover(mb, 'Block margin Bottom', { placement: 'top', });
        mb.classList.add('w-20');
        mb.value = utils.getClassFromData(this._elements.wrapper, 'marginB'); 
    const lineSpace = utils.createSelector('Line Space', utils.measurment.ten, this._elements.wrapper);
        this.api.tooltip.onHover(lineSpace, 'Line spacing', { placement: 'top', });
        lineSpace.classList.add('w-28');
        lineSpace.onchange = () => {
          this.lineSpaceValue = lineSpace.value;
          Array.from(this._elements.wrapper.getElementsByTagName('li')).forEach(element => element.style.paddingBottom = `${lineSpace.value}px`);
        } 

    let clearBg = utils.createButton(utils.btn.clearBg);
        clearBg.classList.add('ml-12', 'mr-3', 'w-36', 'text-xs', 'rounded', 'bg-white', 'hover:bg-red-400', 'hover:text-white');
        clearBg.style.height = '24px';
        clearBg.addEventListener('click', () => {
          this._elements.wrapper.style.backgroundColor = '';
          fonColor.getElementsByTagName('input')[0].value = "#FBFBFB";
          utils.measurment.paddingX.filter(item => this._elements.wrapper.classList.remove(item));
          utils.measurment.paddingY.filter(item => this._elements.wrapper.classList.remove(item));
          px.value = py.value = shadow.value = null;
          lineSpace.value = 2;
          Array.from(this._elements.wrapper.getElementsByTagName('li')).forEach(element => element.style.paddingBottom = '2px');
        })

    let listPosition = utils.createButton(utils.btn.clearBg);
        this.api.tooltip.onHover(listPosition, 'List style position', { placement: 'top', });
        listPosition.classList.add('ml-5', 'mr-3', 'w-24', 'text-xs', 'rounded', 'bg-white', 'hover:bg-blue-500', 'hover:text-white');
        listPosition.innerHTML = this.position;
        listPosition.style.height = '24px';
        listPosition.addEventListener('click', () => {
          if (this.position === 'outside') {
            this.position = 'inside';
            listPosition.innerHTML = 'inside';
            this._elements.wrapper.style.listStylePosition = 'inside';
          } else {
            this.position = 'outside';
            listPosition.innerHTML = 'outside';
            this._elements.wrapper.style.listStylePosition = 'outside';
          }
        })
    const reset = utils.createButton(utils.btn.reset);
        reset.classList.add('ml-3', 'text-gray-600', 'rounded-full', 'hover:bg-red-400', 'hover:text-white');
        this.api.tooltip.onHover(reset, 'Reset layout', { placement: 'top', });
        reset.style.width = '26px';
        reset.style.height = '26px';
        reset.addEventListener('click', () => {
          this._elements.wrapper.style = '';
          this._elements.wrapper.className = 'outline-none';
          px.value = py.value = fontSelector.value = fontWeight.value = fontSize.value = shadow.value = null;
          lineSpace.value = 2;
          Array.from(this._elements.wrapper.getElementsByTagName('li')).forEach(element => element.style.paddingBottom = '2px');
          this._elements.wrapper.style.listStylePosition = 'outside';
          this._elements.wrapper.style.listStyle = 'decimal';
          textColor.getElementsByTagName('input')[0].value = '#282828';
          fonColor.getElementsByTagName('input')[0].value = '#FBFBFB';
        })
    let control = utils.createControlGroup(this.api);    
    utils.appendMany(row2, [textColor, fontSize, fontSelector, fontWeight, px, py, lineSpace]);
    this.settings.forEach((item) => {
      const itemEl = this._make('div', this.CSS.settingsButton, {
        innerHTML: item.icon,
      });

      itemEl.addEventListener('click', () => {
        // this.toggleTune(item.name);
        this._elements.wrapper.style.listStyle = item.style;
        // clear other buttons
        const buttons = itemEl.parentNode.querySelectorAll('.' + this.CSS.settingsButton);
        Array.from(buttons).forEach((button) =>
          button.classList.remove(this.CSS.settingsButtonActive)
        );
        // mark active
        itemEl.classList.toggle(this.CSS.settingsButtonActive);

      });

      this.api.tooltip.onHover(itemEl, item.title, {
        placement: 'top',
        hidingDelay: 500,
      });

      if (this._data.style === item.name) {
        itemEl.classList.add(this.CSS.settingsButtonActive);
      }

      row1.appendChild(itemEl);
    });

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
          axios.get('/getLists')
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
            style: this.data.style,
            items: [],
            position: this.position,
            lineSpace: this.lineSpaceValue,
            styles: utils.getStyles(this._elements.wrapper),
            class: this._elements.wrapper.getAttribute('class').split(' '),

          }
          let templateName = prompt('Save new template from current module', 'Enter template title');
          if (templateName) {
            axios.post('/saveList', {
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


    utils.appendMany(row1, [listPosition, this.templateSelector, collection, upload, reset]);
    utils.appendMany(row3, [fonColor, shadow, roundnes, mt, mb, clearBg, control]);
   // row2.appendChild(my);
       
    return wrapper;
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
    data.items = this.data.items;
    // save index of current block in variable
    let index = this.api.blocks.getCurrentBlockIndex();
    // remove block by index
    this.api.blocks.delete(index);
    // insert new block with saved index and data
    this.api.blocks.insert("list", data, null, index, true);
  }

  // On paste callback that is fired from Editor
  onPaste(event) {
    const list = event.detail.data;

    this.data = this.pasteHandler(list);
  }

  // List Tool on paste configuration
  static get pasteConfig() {
    return {
      tags: ['OL', 'UL', 'LI'],
    };
  }

  // Creates main <ul> or <ol> tag depended on style
  makeMainTag(style){
    const styleClass = style === 'ordered' ? this.CSS.wrapperOrdered : this.CSS.wrapperUnordered;
    const tag = style === 'ordered' ? 'ol' : 'ul';

    return this._make(tag, [this.CSS.baseBlock, this.CSS.wrapper, styleClass], {
      contentEditable: !this.readOnly,
    });
  }

  // Toggles List style
  toggleTune(style) {
    const newTag = this.makeMainTag(style);

    while (this._elements.wrapper.hasChildNodes()) {
      newTag.appendChild(this._elements.wrapper.firstChild);
    }

    this._elements.wrapper.replaceWith(newTag);
    this._elements.wrapper = newTag;
    this._data.style = style;
  }

  // Styles
  get CSS() {
    return {
      baseBlock: this.api.styles.block,
      wrapper: 'cdx-list',
      wrapperOrdered: 'cdx-list--ordered',
      wrapperUnordered: 'cdx-list--unordered',
      item: 'cdx-list__item',
      settingsWrapper: 'cdx-list-settings',
      settingsButton: this.api.styles.settingsButton,
      settingsButtonActive: this.api.styles.settingsButtonActive,
    };
  }

  //  List data setter
  set data(listData) {
    console.log('listData: ', listData);
     
    if (!listData) {
      listData = {};
    }

    this._data.style = listData.style || this.settings.find((tune) => tune.default === true).name;
    this._data.items = listData.items || [];
    // this.styles = listData.styles || {};
    // this.class = listData.class || [];
    // this.position = thisData.position || 'outside';
    // this.lineSpace = thisData.lineSpace || 2;

    const oldView = this._elements.wrapper;

    if (oldView) {
      oldView.parentNode.replaceChild(this.render(), oldView);
    }
  }

  // Return List data
  get data() {
    this._data.items = [];

    const items = this._elements.wrapper.querySelectorAll(`.${this.CSS.item}`);

    for (let i = 0; i < items.length; i++) {
      const value = items[i].innerHTML.replace('<br>', ' ').trim();

      if (value) {
        this._data.items.push(items[i].innerHTML);
      }
    }

    return this._data;
  }

  // Helper for making Elements with attributes

  _make(tagName, classNames = null, attributes = {}) {
    const el = document.createElement(tagName);

    if (Array.isArray(classNames)) {
      el.classList.add(...classNames);
    } else if (classNames) {
      el.classList.add(classNames);
    }

    for (const attrName in attributes) {
      el[attrName] = attributes[attrName];
    }

    return el;
  }

  // Returns current List item by the caret position
  get currentItem() {
    let currentNode = window.getSelection().anchorNode;

    if (currentNode.nodeType !== Node.ELEMENT_NODE) {
      currentNode = currentNode.parentNode;
    }

    return currentNode.closest(`.${this.CSS.item}`);
  }

  //  Get out from List Tool
  getOutofList(event) {
    const items = this._elements.wrapper.querySelectorAll('.' + this.CSS.item);
    // Save the last one.
    if (items.length < 2) {
      return;
    }

    const lastItem = items[items.length - 1];
    const currentItem = this.currentItem;

    /** Prevent Default li generation if item is empty */
    if (currentItem === lastItem && !lastItem.textContent.trim().length) {
      /** Insert New Block and set caret */
      currentItem.parentElement.removeChild(currentItem);
      this.api.blocks.insert();
      this.api.caret.setToBlock(this.api.blocks.getCurrentBlockIndex());
      event.preventDefault();
      event.stopPropagation();
    }
  }

  // Handle backspace
  backspace(event) {
    const items = this._elements.wrapper.querySelectorAll('.' + this.CSS.item),
        firstItem = items[0];

    if (!firstItem) {
      return;
    }

    // Save the last one.
    if (items.length < 2 && !firstItem.innerHTML.replace('<br>', ' ').trim()) {
      event.preventDefault();
    }
  }

  // Select LI content by CMD+A
  selectItem(event) {
    event.preventDefault();

    const selection = window.getSelection(),
        currentNode = selection.anchorNode.parentNode,
        currentItem = currentNode.closest('.' + this.CSS.item),
        range = new Range();

    range.selectNodeContents(currentItem);

    selection.removeAllRanges();
    selection.addRange(range);
  }

  // Handle UL, OL and LI tags paste and returns List data
  pasteHandler(element) {
    const { tagName: tag } = element;
    let style;

    switch (tag) {
      case 'OL':
        style = 'ordered';
        break;
      case 'UL':
      case 'LI':
        style = 'unordered';
    }

    const data = {
      style,
      items: [],
    };

    if (tag === 'LI') {
      data.items = [ element.innerHTML ];
    } else {
      const items = Array.from(element.querySelectorAll('LI'));

      data.items = items
        .map((li) => li.innerHTML)
        .filter((item) => !!item.trim());
    }

    return data;
  }
}

export default editorList;