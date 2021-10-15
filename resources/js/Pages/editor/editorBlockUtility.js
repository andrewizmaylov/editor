
const alignments = ['text-left', 'text-center', 'text-right'];

const btn = {
  stretched: {name: 'stretched', active: false, path: '<svg class="w-full h-full p-1 bg-white rounded hover:bg-blue-500 hover:text-white cursor-pointer" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.75 7.95a.3.3 0 00.3.3h3.9a.3.3 0 00.3-.3V6.724a.3.3 0 01.512-.212l2.276 2.276a.3.3 0 010 .424l-2.276 2.276a.3.3 0 01-.512-.212V10.05a.3.3 0 00-.3-.3h-3.9a.3.3 0 00-.3.3v1.226a.3.3 0 01-.512.212L3.962 9.212a.3.3 0 010-.424l2.276-2.276a.3.3 0 01.512.212V7.95zM1.8 15a.3.3 0 01-.3-.3V3.3a.3.3 0 01.3-.3h.9a.3.3 0 01.3.3v11.4a.3.3 0 01-.3.3h-.9zm13.5 0a.3.3 0 01-.3-.3V3.3a.3.3 0 01.3-.3h.9a.3.3 0 01.3.3v11.4a.3.3 0 01-.3.3h-.9z" /></svg>' },
  reset: {name: 'reset', active: false, path: '<svg class="w-full h-full bg-white rounded hover:bg-red-500 text-red-500 hover:text-white cursor-pointer" viewBox="0 0 18 18"><path d="M9 10.778c.928 0 1.667-.74 1.667-1.667S9.928 7.444 9 7.444s-1.667.74-1.667 1.667.739 1.667 1.667 1.667z" /><path d="M13.898 8.103a4.966 4.966 0 00-.752-1.788 5.028 5.028 0 00-1.35-1.35 4.971 4.971 0 00-2.81-.853V3L6.778 4.667l2.208 1.666v-1.11a3.866 3.866 0 012.187.663 3.89 3.89 0 11-6.062 3.225H4a5.011 5.011 0 002.204 4.146c.825.558 1.8.856 2.796.854a5.007 5.007 0 004.146-2.205A4.973 4.973 0 0014 9.111c0-.338-.034-.676-.102-1.008z" /></svg>' },
}


// Create Block's settings block
function createRenderSettings(...atr) {
	console.log('dvvv', ...atr);
	console.log('element', atr[0]._element);
	 
  const holder = document.createElement('DIV');
  holder.classList.add('bg-gray-100', 'p-1');
  // define the row element for placing alignments, stretch and colorpickers element
  let row1 = document.createElement('div');
  row1.classList.add('flex', 'items-center', 'justify-center');

  let fonColor = colorPickerModule('backgroundColor');
  fonColor.getElementsByTagName('input')[0].value = atr[0]._data.style.backgroundColor ? convertToHex(atr[0]._data.style.backgroundColor) : '#FBFBFB';
  let alignment = createLayoutPosition();
  let textColor = colorPickerModule('color');
  textColor.getElementsByTagName('input')[0].value = atr[0]._data.style.color ?convertToHex(atr[0]._data.style.color) : '#282828';
  
  let stretched = createButton(btn.stretched);
  stretched.classList.add('ml-5');
  if (atr[0]._data.stretched) {
    stretched.classList.add('text-blue-500');
  } else {
    stretched.classList.add('text-gray-600');
  }
  stretched.addEventListener('click', () => {
    atr[0]._data.stretched = !atr[0]._data.stretched;
    stretched.classList.toggle('text-gray-600', !atr[0]._data.stretched)
    stretched.classList.toggle('text-blue-500', atr[0]._data.stretched)
    atr[0].api.blocks.stretchBlock(atr[0].api.blocks.getCurrentBlockIndex(), !!atr[0]._data.stretched);
  })

  const px = createSelector('px', ['px-2', 'px-4', 'px-8', 'px-12', 'px-16', 'px-20', 'px-24', 'px-28', 'px-32', 'px-36', 'px-40', 'px-44', 'px-48', 'px-52', 'px-56', 'px-60', 'px-64', 'px-72', 'px-80', 'px-96']);
  px.classList.add('w-20', 'outline-none');
        Array.from(atr[0]._element.classList).filter(item => {
          if (item.substr(0,2) == 'px') {
            px.value = item;
          }
        })
  const py = createSelector('py', ['py-2', 'py-4', 'py-8', 'py-12', 'py-16', 'py-20', 'py-24', 'py-28', 'py-32', 'py-36', 'py-40', 'py-44', 'py-48', 'py-52', 'py-56', 'py-60', 'py-64', 'py-72', 'py-80', 'py-96']);
  py.classList.add('w-20', 'outline-none');
        Array.from(atr[0]._element.classList).filter(item => {
          if (item.substr(0,2) == 'py') {
            py.value = item;
          }
        })

  let reset = createButton(btn.reset);
  reset.classList.add('ml-12');
  reset.addEventListener('click', () => {
    atr[0]._element.style = '';
    atr[0]._element.className = '';
    atr[0]._data.stretched = false;
    px.value = null;
    py.value = null;
    fontSelector.value = null;
    fontWeight.value = null;
    textColor.getElementsByTagName('input')[0].value = '#282828';
    fonColor.getElementsByTagName('input')[0].value = '#FBFBFB';
    atr[0].api.blocks.stretchBlock(atr[0].api.blocks.getCurrentBlockIndex(), !!atr[0]._data.stretched);
    // atr[0]._element.classList.add('ai-header');
    // atr[0].innerClassSet(atr[0].currentLevel.tag).forEach(item => atr[0]._element.classList.add(item));
  })

  row1.appendChild(fonColor);
  row1.appendChild(alignment);
  row1.appendChild(textColor);
  row1.appendChild(stretched);
  row1.appendChild(px);
  row1.appendChild(py);
  row1.appendChild(reset);

  holder.appendChild(row1);
  // define the row element for H1-H6
  let row2 = document.createElement('div');
  row2.classList.add('flex', 'items-center');
  holder.appendChild(row2);

  let fontSelector = createSelector('Font Family', ['font-sans', 'font-serif', 'font-mono', 'font-roboto', 'font-oswald', 'font-sourse', 'font-poppins']);
  fontSelector.classList.add('w-28', 'border-none', 'outline-none');
        Array.from(atr[0]._element.classList).filter(item => {
          if (['font-sans', 'font-serif', 'font-mono', 'font-roboto', 'font-oswald', 'font-sourse', 'font-poppins'].includes(item)) {
            fontSelector.value = item;
          }
        })
  row2.appendChild(fontSelector);

  let fontWeight = createSelector('Font Weight', ['font-thin', 'font-extralight', 'font-light', 'font-normal', 'font-medium', 'font-semibold', 'font-bold', 'font-extrabold', 'font-black']);
  fontWeight.classList.add('w-28', 'border-none', 'outline-none', 'ml-1', 'mr-4');
        Array.from(atr[0]._element.classList).filter(item => {
          if (['font-thin', 'font-extralight', 'font-light', 'font-normal', 'font-medium', 'font-semibold', 'font-bold', 'font-extrabold', 'font-black'].includes(item)) {
            fontWeight.value = item;
          }
        })
  row2.appendChild(fontWeight);


  return holder;
}


// utility methods
function colorPickerModule(property, clr = null) { 
  const newColorPicker = document.createElement('div');
  newColorPicker.setAttribute('id', `${property}CP`);
  newColorPicker.classList.add('mx-1', 'w-6', 'h-6', 'rounded-full', 'overflow-hidden');
  newColorPicker.style.border = "solid 2px #bdbcbc";
    const currentPicker = document.createElement('input');
    currentPicker.classList.add('w-24', 'h-24', '-ml-4', '-mt-4', 'cursor-pointer');
    currentPicker.type = 'color';
  newColorPicker.appendChild(currentPicker);
    currentPicker.onchange = () => {
      atr[0]._element.style[property] = currentPicker.value;
      return;
    }
  return newColorPicker;
}

function createSelector(param, sizes) {
  let newSelector = document.createElement('select');
  newSelector.classList.add('py-1', 'px-2', 'bg-white', 'outline-none', 'border-none', 'rounded', 'cursor-pointer', 'mx-1', 'text-xs');
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
    sizes.filter(item => atr[0]._element.classList.remove(item));
    atr[0]._element.classList.add(newSelector.value);
  }
  return newSelector;
}

function createLayoutPosition() {  // render text alignment icons 
  const icons = [
    {active: false, name: 'text-left', path: '<svg  class="w-full h-full p-1 bg-white rounded hover:bg-blue-500 hover:text-white cursor-pointer" viewBox="0 0 18 18" ><path fill-rule="evenodd" clip-rule="evenodd" d="M2.25 14.063a.562.562 0 01.563-.563h7.874a.562.562 0 110 1.125H2.814a.563.563 0 01-.563-.563zm0-3.376a.562.562 0 01.563-.562h12.374a.562.562 0 110 1.125H2.813a.563.563 0 01-.563-.563zm0-3.374a.563.563 0 01.563-.563h7.874a.562.562 0 110 1.125H2.814a.563.563 0 01-.563-.563zm0-3.375a.563.563 0 01.563-.563h12.374a.562.562 0 110 1.125H2.813a.563.563 0 01-.563-.563z" /></svg>'},
    {active: false, name: 'text-center', path: '<svg  class="w-full h-full p-1 bg-white rounded hover:bg-blue-500 hover:text-white cursor-pointer" viewBox="0 0 18 18" ><path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 14.063a.562.562 0 01.563-.563h7.875a.562.562 0 110 1.125H5.061a.563.563 0 01-.562-.563zm-2.25-3.376a.562.562 0 01.563-.562h12.374a.562.562 0 110 1.125H2.813a.563.563 0 01-.563-.563zM4.5 7.313a.563.563 0 01.563-.563h7.875a.562.562 0 110 1.125H5.061a.563.563 0 01-.562-.563zM2.25 3.938a.563.563 0 01.563-.563h12.374a.562.562 0 110 1.125H2.813a.563.563 0 01-.563-.563z" /></svg>'},
    {active: false, name: 'text-right', path: '<svg  class="w-full h-full p-1 bg-white rounded hover:bg-blue-500 hover:text-white cursor-pointer" viewBox="0 0 18 18" ><path fill-rule="evenodd" clip-rule="evenodd" d="M6.75 14.063a.562.562 0 01.563-.563h7.875a.562.562 0 110 1.125H7.311a.563.563 0 01-.562-.563zm-4.5-3.376a.562.562 0 01.563-.562h12.374a.562.562 0 110 1.125H2.813a.563.563 0 01-.563-.563zm4.5-3.374a.563.563 0 01.563-.563h7.875a.562.562 0 110 1.125H7.311a.563.563 0 01-.562-.563zm-4.5-3.375a.563.563 0 01.563-.563h12.374a.562.562 0 110 1.125H2.813a.563.563 0 01-.563-.563z" /></svg>'},
    // {active: false, name: 'stretch', path: '<svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg" class="mx-auto"><path d="M6.75 7.95a.3.3 0 00.3.3h3.9a.3.3 0 00.3-.3V6.724a.3.3 0 01.512-.212l2.276 2.276a.3.3 0 010 .424l-2.276 2.276a.3.3 0 01-.512-.212V10.05a.3.3 0 00-.3-.3h-3.9a.3.3 0 00-.3.3v1.226a.3.3 0 01-.512.212L3.962 9.212a.3.3 0 010-.424l2.276-2.276a.3.3 0 01.512.212V7.95zM1.8 15a.3.3 0 01-.3-.3V3.3a.3.3 0 01.3-.3h.9a.3.3 0 01.3.3v11.4a.3.3 0 01-.3.3h-.9zm13.5 0a.3.3 0 01-.3-.3V3.3a.3.3 0 01.3-.3h.9a.3.3 0 01.3.3v11.4a.3.3 0 01-.3.3h-.9z" /></svg>'},
  ]
  const alignmentsButtonSet = document.createElement('div');
  alignmentsButtonSet.classList.add('flex', 'mx-2', 'items-center');
    const alignmentsButton = document.createElement('div');
    alignmentsButton.classList.add('flex', 'justify-center');
    icons.forEach(icon => {
      let alligmentClass = icon.name;
      let btn = document.createElement('button');
      btn.setAttribute('id', icon.name);
      btn.type = 'button';
      btn.classList.add('bg-white', 'mx-1', 'w-8', 'h-8', 'rounded', 'hover:bg-blue-500', 'hover:text-white', 'cursor-pointer');
      if (icon.active) {
        btn.classList.add('text-blue-500');
      } else {
        btn.classList.add('text-gray-600');
      }
      btn.innerHTML = icon.path;
        btn.addEventListener('click', () => {
          icons.forEach(ic => {
            ic.active=false;
            if (ic == icon) {
              ic.active = true;
            }
            setActiveAlignment(ic);
          });

          alignments.filter(item => atr[0]._element.classList.remove(item));
          atr[0]._element.classList.add(alligmentClass);
        }) 
      alignmentsButton.appendChild(btn);
    })
  alignmentsButtonSet.appendChild(alignmentsButton);

  return alignmentsButtonSet;
}
// toggle alignments btn active color
function setActiveAlignment(item) {
  document.getElementById(item.name).classList.toggle('text-blue-500', item.active);
  document.getElementById(item.name).classList.toggle('text-gray-600', !item.active);
}

function createButton(button) {
  let btn = document.createElement('button');
  btn.setAttribute('id', button.name);
  btn.type = 'button';
  btn.classList.add('mx-1', 'w-8', 'h-8');

  btn.innerHTML = button.path;
  return btn;
}

function convertToHex(color) {
  const rgb = color.match(/(\d+)/g);

  let hexr = parseInt(rgb[0]).toString(16);
  let hexg = parseInt(rgb[1]).toString(16);
  let hexb = parseInt(rgb[2]).toString(16);

  hexr = hexr.length === 1 ? '0' + hexr : hexr;
  hexg = hexg.length === 1 ? '0' + hexg : hexg;
  hexb = hexb.length === 1 ? '0' + hexb : hexb;

  return '#' + hexr + hexg + hexb;
}

export {createRenderSettings}
