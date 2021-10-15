const alignments = ['text-left', 'text-center', 'text-right', 'text-justify'];

export const measurment = {
  paddingX: ['px-2', 'px-4', 'px-8', 'px-12', 'px-16', 'px-20', 'px-24', 'px-28', 'px-32', 'px-36', 'px-40', 'px-44', 'px-48', 'px-52', 'px-56', 'px-60', 'px-64', 'px-72', 'px-80', 'px-96'],
  paddingL: ['pl-2', 'pl-4', 'pl-8', 'pl-12', 'pl-16', 'pl-20', 'pl-24', 'pl-28', 'pl-32', 'pl-36', 'pl-40', 'pl-44', 'pl-48', 'pl-52', 'pl-56', 'pl-60', 'pl-64', 'pl-72', 'pl-80', 'pl-96'],
  paddingR: ['pr-2', 'pr-4', 'pr-8', 'pr-12', 'pr-16', 'pr-20', 'pr-24', 'pr-28', 'pr-32', 'pr-36', 'pr-40', 'pr-44', 'pr-48', 'pr-52', 'pr-56', 'pr-60', 'pr-64', 'pr-72', 'pr-80', 'pr-96'],
  paddingY: ['py-2', 'py-4', 'py-8', 'py-12', 'py-16', 'py-20', 'py-24', 'py-28', 'py-32', 'py-36', 'py-40', 'py-44', 'py-48', 'py-52', 'py-56', 'py-60', 'py-64', 'py-72', 'py-80', 'py-96'],
  paddingT: ['pt-2', 'pt-4', 'pt-8', 'pt-12', 'pt-16', 'pt-20', 'pt-24', 'pt-28', 'pt-32', 'pt-36', 'pt-40', 'pt-44', 'pt-48', 'pt-52', 'pt-56', 'pt-60', 'pt-64', 'pt-72', 'pt-80', 'pt-96'],
  paddingB: ['pb-2', 'pb-4', 'pb-8', 'pb-12', 'pb-16', 'pb-20', 'pb-24', 'pb-28', 'pb-32', 'pb-36', 'pb-40', 'pb-44', 'pb-48', 'pb-52', 'pb-56', 'pb-60', 'pb-64', 'pb-72', 'pb-80', 'pb-96'],
  
  marginX: ['mx-2', 'mx-4', 'mx-8', 'mx-12', 'mx-16', 'mx-20', 'mx-24', 'mx-28', 'mx-32', 'mx-36', 'mx-40', 'mx-44', 'mx-48', 'mx-52', 'mx-56', 'mx-60', 'mx-64', 'mx-72', 'mx-80', 'mx-96'],
  marginL: ['ml-2', 'ml-4', 'ml-8', 'ml-12', 'ml-16', 'ml-20', 'ml-24', 'ml-28', 'ml-32', 'ml-36', 'ml-40', 'ml-44', 'ml-48', 'ml-52', 'ml-56', 'ml-60', 'ml-64', 'ml-72', 'ml-80', 'ml-96'],
  marginR: ['mr-2', 'mr-4', 'mr-8', 'mr-12', 'mr-16', 'mr-20', 'mr-24', 'mr-28', 'mr-32', 'mr-36', 'mr-40', 'mr-44', 'mr-48', 'mr-52', 'mr-56', 'mr-60', 'mr-64', 'mr-72', 'mr-80', 'mr-96'],
  marginY: ['my-2', 'my-4', 'my-8', 'my-12', 'my-16', 'my-20', 'my-24', 'my-28', 'my-32', 'my-36', 'my-40', 'my-44', 'my-48', 'my-52', 'my-56', 'my-60', 'my-64', 'my-72', 'my-80', 'my-96'],
  marginT: ['-mt-6', '-mt-4', '-mt-3', '-mt-2', '-mt-1', 'mt-0', 'mt-1', 'mt-2', 'mt-4', 'mt-8', 'mt-12', 'mt-16', 'mt-20', 'mt-24', 'mt-28', 'mt-32', 'mt-36', 'mt-40', 'mt-44', 'mt-48', 'mt-52', 'mt-56', 'mt-60', 'mt-64', 'mt-72', 'mt-80', 'mt-96'],
  marginB: ['mb-2', 'mb-4', 'mb-8', 'mb-12', 'mb-16', 'mb-20', 'mb-24', 'mb-28', 'mb-32', 'mb-36', 'mb-40', 'mb-44', 'mb-48', 'mb-52', 'mb-56', 'mb-60', 'mb-64', 'mb-72', 'mb-80', 'mb-96'],

  ten: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,20,24,28,32,36],
  wide: ['w-full', 'w-1/2', 'w-1/3', 'w-2/3', 'w-1/4', 'w-3/4', 'w-1/5', 'w-2/5', 'w-3/5', 'w-4/5'],
  wideBox: ['w-2', 'w-6', 'w-4', 'w-8', 'w-10','w-12', 'w-16', 'w-20', 'w-24', 'w-28', 'w-32', 'w-36', 'w-40', 'w-44', 'w-48', 'w-56'],
  wideNumber: ['w-2', 'w-4', 'w-8', 'w-12', 'w-16', 'w-24', 'w-32', 'w-48', 'w-64', 'w-80', 'w-96', 'w-auto', 'w-1/12', 'w-1/6', 'w-1/5', 'w-1/4', 'w-1/3', 'w-2/5', 'w-1/2', 'w-7/12', 'w-2/3', 'w-3/4', 'w-5/6', 'w-11/12', 'w-full'],
  border: ['border-0', 'border-1', 'border-2', 'border-t-2', 'border-b-2', 'border-l-2', 'border-r-2', 'border-4', 'border-t-4', 'border-b-4', 'border-l-4', 'border-r-4', 'border-8', 'border-t-8', 'border-b-8', 'border-l-8', 'border-r-8',],
  shadow: ['shadow-none', 'shadow-sm', 'shadow-md', 'shadow-lg', 'shadow-xl', 'shadow-2xl', 'shadow-inner', ],

  fontSizes: ['text-xs', 'text-sm', 'text-base', 'text-lg', 'text-xl', 'text-2xl', 'text-3xl', 'text-4xl', 'text-5xl', 'text-6xl', 'text-7xl', 'text-8xl', 'text-9xl'],
  fontFamily: ['font-sans', 'font-serif', 'font-mono', 'font-roboto', 'font-oswald', 'font-sourse', 'font-poppins'],
  fontWeight: ['font-thin', 'font-extralight', 'font-light', 'font-normal', 'font-medium', 'font-semibold', 'font-bold', 'font-extrabold', 'font-black'],
  bgRadius: ['rounded-none', 'rounded-sm', 'rounded', 'rounded-md', 'rounded-lg', 'rounded-xl', 'rounded-2xl', 'rounded-3xl', 'rounded-full'],
}

export const btn = {
  imgLeft: {name: 'imageLeft', active: 'false', path:'<svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.677 4.085a.3.3 0 00.3.3h6.067a.3.3 0 00.3-.3V3.02a.3.3 0 00-.3-.3h-6.067a.3.3 0 00-.3.3v1.066zM1.657 13.02a.3.3 0 01.3-.3h16.087a.3.3 0 01.3.3v1.066a.3.3 0 01-.3.3H1.956a.3.3 0 01-.3-.3V13.02zm0-10.104a.3.3 0 01.3-.3H9.71a.3.3 0 01.3.3v7.837a.3.3 0 01-.3.3H1.956a.3.3 0 01-.3-.3V2.915zm10.02 6.77a.3.3 0 01.3-.3h6.067a.3.3 0 01.3.3v1.067a.3.3 0 01-.3.3h-6.067a.3.3 0 01-.3-.3V9.685zm0-3.333a.3.3 0 01.3-.3h6.067a.3.3 0 01.3.3V7.42a.3.3 0 01-.3.3h-6.067a.3.3 0 01-.3-.3V6.352zM18.044 15.719H1.956a.3.3 0 00-.3.3v1.066a.3.3 0 00.3.3h16.088a.3.3 0 00.3-.3V16.02a.3.3 0 00-.3-.3z" fill="#7B7B7B"/></svg>' },
  imgCenter: {name: 'imageCenter', active: 'false', path:'<svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.344 13.019a.3.3 0 00-.3-.3H1.956a.3.3 0 00-.3.3v1.066a.3.3 0 00.3.3h16.088a.3.3 0 00.3-.3V13.02zM14.156 2.915a.3.3 0 00-.3-.3H6.102a.3.3 0 00-.3.3v7.837a.3.3 0 00.3.3h7.754a.3.3 0 00.3-.3V2.915zM1.956 15.719h16.088a.3.3 0 01.3.3v1.066a.3.3 0 01-.3.3H1.956a.3.3 0 01-.3-.3V16.02a.3.3 0 01.3-.3z" fill="#7B7B7B"/></svg>' },
  imgRight: {name: 'imageRight', active: 'false', path:'<svg width="18" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.323 2.085a.3.3 0 01-.3.3H.956a.3.3 0 01-.3-.3V1.02a.3.3 0 01.3-.3h6.067a.3.3 0 01.3.3v1.066zm10.02 8.934a.3.3 0 00-.3-.3H.957a.3.3 0 00-.3.3v1.066a.3.3 0 00.3.3h16.088a.3.3 0 00.3-.3V11.02zm0-10.104a.3.3 0 00-.3-.3H9.29a.3.3 0 00-.3.3v7.837a.3.3 0 00.3.3h7.754a.3.3 0 00.3-.3V.915zm-10.02 6.77a.3.3 0 00-.3-.3H.956a.3.3 0 00-.3.3v1.067a.3.3 0 00.3.3h6.067a.3.3 0 00.3-.3V7.685zm0-3.333a.3.3 0 00-.3-.3H.956a.3.3 0 00-.3.3V5.42a.3.3 0 00.3.3h6.067a.3.3 0 00.3-.3V4.352zM.956 13.719h16.088a.3.3 0 01.3.3v1.066a.3.3 0 01-.3.3H.956a.3.3 0 01-.3-.3V14.02a.3.3 0 01.3-.3z" fill="#7B7B7B"/></svg>' },
  
  stretched: {name: 'stretched', active: false, path: '<svg class="w-full h-full p-1 bg-white rounded hover:bg-blue-500 hover:text-white cursor-pointer" viewBox="0 0 18 18" ><path d="M6.75 7.95a.3.3 0 00.3.3h3.9a.3.3 0 00.3-.3V6.724a.3.3 0 01.512-.212l2.276 2.276a.3.3 0 010 .424l-2.276 2.276a.3.3 0 01-.512-.212V10.05a.3.3 0 00-.3-.3h-3.9a.3.3 0 00-.3.3v1.226a.3.3 0 01-.512.212L3.962 9.212a.3.3 0 010-.424l2.276-2.276a.3.3 0 01.512.212V7.95zM1.8 15a.3.3 0 01-.3-.3V3.3a.3.3 0 01.3-.3h.9a.3.3 0 01.3.3v11.4a.3.3 0 01-.3.3h-.9zm13.5 0a.3.3 0 01-.3-.3V3.3a.3.3 0 01.3-.3h.9a.3.3 0 01.3.3v11.4a.3.3 0 01-.3.3h-.9z" /></svg>' },
  reset: {name: 'reset', active: false, path: '<svg class="w-full h-full" viewBox="0 0 18 18" ><path d="M9 10.778c.928 0 1.667-.74 1.667-1.667S9.928 7.444 9 7.444s-1.667.74-1.667 1.667.739 1.667 1.667 1.667z" /><path d="M13.898 8.103a4.966 4.966 0 00-.752-1.788 5.028 5.028 0 00-1.35-1.35 4.971 4.971 0 00-2.81-.853V3L6.778 4.667l2.208 1.666v-1.11a3.866 3.866 0 012.187.663 3.89 3.89 0 11-6.062 3.225H4a5.011 5.011 0 002.204 4.146c.825.558 1.8.856 2.796.854a5.007 5.007 0 004.146-2.205A4.973 4.973 0 0014 9.111c0-.338-.034-.676-.102-1.008z" /></svg>' },
  clearBg: {name: 'clearBg', active: false, path: 'Reset BG decoration' },
 
  left: {name: 'text-left', active: false,  path: '<svg class="w-full h-full p-1 bg-white rounded hover:bg-blue-500 hover:text-white cursor-pointer" viewBox="0 0 18 18" ><path fill-rule="evenodd" clip-rule="evenodd" d="M2.25 14.063a.562.562 0 01.563-.563h7.874a.562.562 0 110 1.125H2.814a.563.563 0 01-.563-.563zm0-3.376a.562.562 0 01.563-.562h12.374a.562.562 0 110 1.125H2.813a.563.563 0 01-.563-.563zm0-3.374a.563.563 0 01.563-.563h7.874a.562.562 0 110 1.125H2.814a.563.563 0 01-.563-.563zm0-3.375a.563.563 0 01.563-.563h12.374a.562.562 0 110 1.125H2.813a.563.563 0 01-.563-.563z" /></svg>'},
  center: {name: 'text-center', active: false,  path: '<svg class="w-full h-full p-1 bg-white rounded hover:bg-blue-500 hover:text-white cursor-pointer" viewBox="0 0 18 18" ><path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 14.063a.562.562 0 01.563-.563h7.875a.562.562 0 110 1.125H5.061a.563.563 0 01-.562-.563zm-2.25-3.376a.562.562 0 01.563-.562h12.374a.562.562 0 110 1.125H2.813a.563.563 0 01-.563-.563zM4.5 7.313a.563.563 0 01.563-.563h7.875a.562.562 0 110 1.125H5.061a.563.563 0 01-.562-.563zM2.25 3.938a.563.563 0 01.563-.563h12.374a.562.562 0 110 1.125H2.813a.563.563 0 01-.563-.563z" /></svg>'},
  right: {name: 'text-right', active: false,  path: '<svg class="w-full h-full p-1 bg-white rounded hover:bg-blue-500 hover:text-white cursor-pointer" viewBox="0 0 18 18" ><path fill-rule="evenodd" clip-rule="evenodd" d="M6.75 14.063a.562.562 0 01.563-.563h7.875a.562.562 0 110 1.125H7.311a.563.563 0 01-.562-.563zm-4.5-3.376a.562.562 0 01.563-.562h12.374a.562.562 0 110 1.125H2.813a.563.563 0 01-.563-.563zm4.5-3.374a.563.563 0 01.563-.563h7.875a.562.562 0 110 1.125H7.311a.563.563 0 01-.562-.563zm-4.5-3.375a.563.563 0 01.563-.563h12.374a.562.562 0 110 1.125H2.813a.563.563 0 01-.563-.563z" /></svg>'},
  justify: {name: 'text-justify', active: false, path: '<svg class="w-full h-full p-1 bg-white rounded hover:bg-blue-500 hover:text-white cursor-pointer" viewBox="0 0 18 18" ><path fill-rule="evenodd" clip-rule="evenodd" d="M2 13.688a.562.562 0 01.563-.563h12.374a.562.562 0 110 1.125H2.563A.563.563 0 012 13.687zm0-3.376a.562.562 0 01.563-.562h12.374a.562.562 0 110 1.125H2.563A.563.563 0 012 10.312zm0-3.374a.563.563 0 01.563-.563h12.374a.562.562 0 110 1.125H2.563A.563.563 0 012 6.937zm0-3.375A.563.563 0 012.563 3h12.374a.562.562 0 110 1.125H2.563A.563.563 0 012 3.562z" /></svg>'},

  imageLeft: {name: 'imgLeft', active: false,  path: '<svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.677 4.085a.3.3 0 00.3.3h6.067a.3.3 0 00.3-.3V3.02a.3.3 0 00-.3-.3h-6.067a.3.3 0 00-.3.3v1.066zM1.657 13.02a.3.3 0 01.3-.3h16.087a.3.3 0 01.3.3v1.066a.3.3 0 01-.3.3H1.956a.3.3 0 01-.3-.3V13.02zm0-10.104a.3.3 0 01.3-.3H9.71a.3.3 0 01.3.3v7.837a.3.3 0 01-.3.3H1.956a.3.3 0 01-.3-.3V2.915zm10.02 6.77a.3.3 0 01.3-.3h6.067a.3.3 0 01.3.3v1.067a.3.3 0 01-.3.3h-6.067a.3.3 0 01-.3-.3V9.685zm0-3.333a.3.3 0 01.3-.3h6.067a.3.3 0 01.3.3V7.42a.3.3 0 01-.3.3h-6.067a.3.3 0 01-.3-.3V6.352zM18.044 15.719H1.956a.3.3 0 00-.3.3v1.066a.3.3 0 00.3.3h16.088a.3.3 0 00.3-.3V16.02a.3.3 0 00-.3-.3z" /></svg>'},
  imageCenter: {name: 'imgCenter', active: false,  path: '<svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.656 13.019a.3.3 0 01.3-.3h16.088a.3.3 0 01.3.3v1.066a.3.3 0 01-.3.3H1.956a.3.3 0 01-.3-.3V13.02zM5.844 2.915a.3.3 0 01.3-.3h7.754a.3.3 0 01.3.3v7.837a.3.3 0 01-.3.3H6.144a.3.3 0 01-.3-.3V2.915zM18.044 15.719H1.956a.3.3 0 00-.3.3v1.066a.3.3 0 00.3.3h16.088a.3.3 0 00.3-.3V16.02a.3.3 0 00-.3-.3z" /></svg>'},
  imageRight: {name: 'imgRight', active: false,  path: '<svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.323 4.085a.3.3 0 01-.3.3H1.956a.3.3 0 01-.3-.3V3.02a.3.3 0 01.3-.3h6.067a.3.3 0 01.3.3v1.066zm10.02 8.934a.3.3 0 00-.3-.3H1.957a.3.3 0 00-.3.3v1.066a.3.3 0 00.3.3h16.088a.3.3 0 00.3-.3V13.02zm0-10.104a.3.3 0 00-.3-.3H10.29a.3.3 0 00-.3.3v7.837a.3.3 0 00.3.3h7.754a.3.3 0 00.3-.3V2.915zm-10.02 6.77a.3.3 0 00-.3-.3H1.956a.3.3 0 00-.3.3v1.067a.3.3 0 00.3.3h6.067a.3.3 0 00.3-.3V9.685zm0-3.333a.3.3 0 00-.3-.3H1.956a.3.3 0 00-.3.3V7.42a.3.3 0 00.3.3h6.067a.3.3 0 00.3-.3V6.352zM1.956 15.719h16.088a.3.3 0 01.3.3v1.066a.3.3 0 01-.3.3H1.956a.3.3 0 01-.3-.3V16.02a.3.3 0 01.3-.3z" /></svg>'},

  collection: {name: 'collection', active: 'false', path: '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" /></svg>' },
  upload: {name: 'upload', active: 'false', path: '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z" /><path d="M9 13h2v5a1 1 0 11-2 0v-5z" /></svg>' },
  image: {name: 'image', active: 'false', path: '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd" /></svg>' },
  remove: {name: 'remove', active: 'false', path: '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>' },
  arrowUp: {name: 'arrowUp', active: 'false', path: '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd" /></svg>' },
  arrowDown: {name: 'arrowDown', active: 'false', path: '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>' },
  editIcon: {name: 'editIcon', active: 'false', path: '<svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>' },
  collapseVertical: {name: 'collapseVertical', active: 'false', path: '<svg width="20" height="20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M3.833 9.5H15.5c.458 0 .833.375.833.833a.836.836 0 01-.833.834H3.833A.836.836 0 013 10.333c0-.458.375-.833.833-.833zm6.667 5.833h1.492c.375 0 .558-.45.291-.708L9.958 12.3a.413.413 0 00-.591 0l-2.325 2.325a.417.417 0 00.3.708h1.491v3.008a.3.3 0 00.3.3H10.2a.3.3 0 00.3-.3v-1.634-.312-1.062zM11.992 5.307H10.5V2.3a.3.3 0 00-.3-.3H9.133a.3.3 0 00-.3.3v3.007H7.342a.417.417 0 00-.3.709L9.367 8.34a.413.413 0 00.591 0l2.325-2.325a.412.412 0 00-.291-.709z" /></svg>' },
  expandVertical: {name: 'expandVertical', active: 'false', path: '<svg width="20" height="20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M4.167 16.667h11.666c.459 0 .834.375.834.833a.836.836 0 01-.834.833H4.167a.836.836 0 01-.834-.833c0-.458.375-.833.834-.833zm0-15h11.666c.459 0 .834.375.834.833a.836.836 0 01-.834.833H4.167a.836.836 0 01-.834-.833c0-.458.375-.833.834-.833zM10.833 7.5h1.492c.375 0 .558-.45.292-.708l-2.325-2.325a.413.413 0 00-.592 0L7.375 6.792a.417.417 0 00.3.708h1.492v5H7.675a.412.412 0 00-.292.708l2.325 2.325a.413.413 0 00.592 0l2.325-2.325a.416.416 0 00-.292-.708h-1.5v-5z" /></svg>' },
  drag: {name: 'drag', active: 'false', path: '<svg width="20" height="20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M10 13.333a.833.833 0 01.828.737l.005.097v1.32l.245-.242a.834.834 0 011.1-.07l.078.07a.834.834 0 01.069 1.1l-.07.078-1.666 1.667-.037.034-.056.046-.093.06-.094.044-.087.03-.099.02-.074.008H9.95l-.048-.004-.097-.016-.09-.028-.067-.028-.082-.044-.08-.055a.841.841 0 01-.075-.067l-1.667-1.667a.833.833 0 011.1-1.248l.079.07.244.243v-1.321a.833.833 0 01.736-.829l.097-.005zm5.244-5.589a.833.833 0 011.1-.069l.078.07L18.09 9.41l.034.037.046.056.06.093.045.094.03.088.02.098.008.075v.098l-.005.048-.016.097-.028.09-.028.068-.043.081-.062.088-.06.068-1.668 1.667a.833.833 0 01-1.248-1.1l.07-.08.242-.243h-1.32a.833.833 0 01-.828-.736L13.333 10a.833.833 0 01.736-.828l.098-.005h1.32l-.243-.244a.833.833 0 01-.07-1.1l.07-.079zm-11.666 0a.833.833 0 011.247 1.1l-.07.08-.243.244h1.321a.833.833 0 01.828.735l.006.097a.834.834 0 01-.737.828l-.097.005h-1.32l.243.244a.833.833 0 01.069 1.1l-.07.079a.833.833 0 01-1.1.069l-.077-.07L1.91 10.59l-.081-.093-.06-.093-.044-.094-.03-.087-.02-.099-.007-.052-.002-.088.003-.058.013-.093.025-.093.036-.091.044-.082.056-.08a.83.83 0 01.067-.075l1.667-1.667zM10 7.708a2.292 2.292 0 110 4.584 2.292 2.292 0 010-4.584zm-.124-6.032l.062-.007h.108l.1.011.114.028.092.037.082.043.087.062.068.06 1.667 1.668a.834.834 0 01-1.1 1.248l-.079-.07-.244-.244v1.321a.834.834 0 01-.736.829L10 6.667a.833.833 0 01-.827-.736l-.006-.098V4.512l-.244.245a.833.833 0 01-1.1.069l-.079-.07a.833.833 0 01-.069-1.1l.07-.079L9.41 1.912l.093-.08.092-.06.095-.044.087-.03.098-.021z" /></svg>' },
  dots: {name: 'dots', active: 'false', path: '<svg width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="5" r="2" fill="currentColor"/><circle cx="9" cy="11.93" r="2" fill="currentColor"/><circle cx="9" cy="18.859" r="2" fill="currentColor"/><circle cx="17" cy="5" r="2" fill="currentColor"/><circle cx="17" cy="11.93" r="2" fill="currentColor"/><circle cx="17" cy="18.859" r="2" fill="currentColor"/></svg>' },
  trash: {name: 'trash', active: 'false', path: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -256 1792 1792" class="w-6 h-6" style="padding: 0.1rem;"><path d="M709.424 455.05v576q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-576q0-14 9-23t23-9h64q14 0 23 9t9 23zm256 0v576q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-576q0-14 9-23t23-9h64q14 0 23 9t9 23zm256 0v576q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-576q0-14 9-23t23-9h64q14 0 23 9t9 23zm128 724v-948h-896v948q0 22 7 40.5t14.5 27q7.5 8.5 10.5 8.5h832q3 0 10.5-8.5t14.5-27q7-18.5 7-40.5zm-672-1076h448l-48-117q-7-9-17-11h-317q-10 2-17 11zm928 32v64q0 14-9 23t-23 9h-96v948q0 83-47 143.5t-113 60.5h-832q-66 0-113-58.5t-47-141.5v-952h-96q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h309l70-167q15-37 54-63t79-26h320q40 0 79 26t54 63l70 167h309q14 0 23 9t9 23z" fill="currentColor"></path></svg>' },
  restoreArrow: {name: 'restoreArrow', active: 'false', path: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"></path></svg>' },
  restore: {name: 'restore', active: 'false', path: '<svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.555 14.415V4.892h-9v9.523a1.14 1.14 0 00.215.678c.05.057.086.085.106.085h8.357c.02 0 .055-.028.106-.085a1.14 1.14 0 00.216-.678zM6.805 3.607h4.5l-.483-1.176a.284.284 0 00-.17-.11H7.467a.284.284 0 00-.17.11l-.493 1.176zm9.321.321v.643c0 .094-.03.17-.09.23a.313.313 0 01-.232.091h-.964v9.523c0 .555-.157 1.036-.472 1.441-.315.405-.693.608-1.135.608H4.876c-.442 0-.82-.196-1.135-.588-.315-.392-.472-.865-.472-1.421V4.892h-.965a.313.313 0 01-.23-.09.313.313 0 01-.091-.231v-.643c0-.094.03-.17.09-.231.06-.06.138-.09.231-.09h3.104l.703-1.678c.1-.248.282-.459.543-.633.261-.174.525-.26.793-.26h3.215c.268 0 .532.086.793.26.261.174.442.385.543.633l.703 1.678h3.104c.093 0 .17.03.23.09s.091.137.091.231z" fill="#000"/><path d="M9 6L5.512 9.488a.3.3 0 00.212.512H8v3.7a.3.3 0 00.3.3h1.4a.3.3 0 00.3-.3V10h2.276a.3.3 0 00.212-.512L9 6z" fill="#000"/><path d="M5.512 9.488L9 6l3.488 3.488a.3.3 0 01-.212.512H10v3.7a.3.3 0 01-.3.3H8.3a.3.3 0 01-.3-.3V10H5.724a.3.3 0 01-.212-.512z" fill="#000"/></svg>' },

  // remove: {name: 'remove', active: 'false', path: '<div class="ce-settings__button ce-tune-move-up"><svg class="icon icon--arrow-up" width="14px" height="14px"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-up"></use></svg></div>' },
  // arrowUp: {name: 'arrowUp', active: 'false', path: '<div class="ce-settings__button ce-settings__button--delete"><svg class="icon icon--cross" width="12px" height="12px"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cross"></use></svg></div>' },
  // arrowDown: {name: 'arrowDown', active: 'false', path: '<div class="ce-settings__button ce-tune-move-down"><svg class="icon icon--arrow-down" width="14px" height="14px"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-down"></use></svg></div>' },

  blockLeft: {name: 'blockLeft', active: false,  path: '<svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.053 1.305a.3.3 0 00-.299-.301l-1.4-.008a.3.3 0 00-.301.299l-.091 17.4a.3.3 0 00.298.301l1.4.008a.3.3 0 00.302-.299l.09-17.4z" /><rect width="8" height="6.013" rx=".3" transform="matrix(-1 0 0 1 13 3)" /><rect width="13" height="7" rx=".3" transform="matrix(-1 0 0 1 18 10)" /></svg>'},
  blockCenter: {name: 'blockCenter', active: false,  path: '<svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.093 1.31a.3.3 0 00-.299-.301l-1.4-.007a.3.3 0 00-.301.298l-.091 17.4A.3.3 0 009.3 19l1.4.008a.3.3 0 00.302-.299l.09-17.4z" /><rect width="8" height="6.013" rx=".3" transform="matrix(-1 0 0 1 14 3)" /><rect width="14" height="7" rx=".3" transform="matrix(-1 0 0 1 17 10)" /></svg>'},
  blockRight: {name: 'blockRight', active: false,  path: '<svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.947 1.305a.3.3 0 01.299-.301l1.4-.008a.3.3 0 01.301.299l.091 17.4a.3.3 0 01-.298.301l-1.4.008a.3.3 0 01-.302-.299l-.09-17.4z" /><rect x="7" y="3" width="8" height="6.013" rx=".3" /><rect x="1.96" y="10" width="13" height="7" rx=".3" /></svg>'},
  
  smileRight: {name: 'smile-right', active: false,  path: '<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.36 14.23a3.76 3.76 0 01-4.72 0 1.001 1.001 0 00-1.28 1.54 5.68 5.68 0 007.28 0 1.001 1.001 0 00-1.28-1.54zM9 11a1 1 0 100-2 1 1 0 000 2zm6-2a1 1 0 100 2 1 1 0 000-2zm-3-7a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16.001A8 8 0 0112 20z" fill="currentColor"/></svg>'},
  smileWrong: {name: 'smile-wrong', active: false,  path: '<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.36 16.858a3.76 3.76 0 00-4.72 0 1.001 1.001 0 01-1.28-1.54 5.68 5.68 0 017.28 0 1.001 1.001 0 01-1.28 1.54zM9 11a1 1 0 100-2 1 1 0 000 2zm6-2a1 1 0 100 2 1 1 0 000-2zm-3-7a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16.001A8 8 0 0112 20z" fill="currentColor"/></svg>'},
  person: {name: 'person', active: false,  path: '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" /></svg>'},
  star: {name: 'star', active: false,  path: '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>'},
  tree: {name: 'tree', active: false,  path: '<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.75 10.875h4.5A1.877 1.877 0 0022.125 9V4.5a1.877 1.877 0 00-1.875-1.875h-4.5A1.877 1.877 0 0013.875 4.5v1.125H13.5A3.379 3.379 0 0010.125 9v1.875h-1.5v-.75A1.877 1.877 0 006.75 8.25H3a1.877 1.877 0 00-1.875 1.875v3.75A1.877 1.877 0 003 15.75h3.75a1.877 1.877 0 001.875-1.875v-.75h1.5V15a3.379 3.379 0 003.375 3.375h.375V19.5a1.877 1.877 0 001.875 1.875h4.5a1.877 1.877 0 001.875-1.875V15a1.877 1.877 0 00-1.875-1.875h-4.5A1.877 1.877 0 0013.875 15v1.125H13.5A1.126 1.126 0 0112.375 15V9A1.126 1.126 0 0113.5 7.875h.375V9a1.877 1.877 0 001.875 1.875zM6.375 13.5h-3v-3h3v3zm9.75 1.875h3.75v3.75h-3.75v-3.75zm0-10.5h3.75v3.75h-3.75v-3.75z" fill="currentColor"/></svg>'},
  calendar: {name: 'calendar', active: false,  path: '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>'},
}

export function colorPickerModule(property, targetElement = null) { 
  const newColorPicker = document.createElement('div');
  newColorPicker.setAttribute('id', `${property}CP`);
  newColorPicker.classList.add('mx-1', 'w-6', 'h-6', 'rounded-full', 'overflow-hidden');
  newColorPicker.style.border = "solid 2px #bdbcbc";
    const currentPicker = document.createElement('input');
    currentPicker.classList.add('w-24', 'h-24', '-ml-4', '-mt-4', 'cursor-pointer');
    currentPicker.type = 'color';
  newColorPicker.appendChild(currentPicker);
    currentPicker.onchange = () => {
      targetElement.style[property] = currentPicker.value;
      return;
    }
  return newColorPicker;
}

export function createSelector(param, sizes, targetElement = null) {
  let newSelector = make('select', ['py-1', 'px-2', 'bg-white', 'outline-none', 'border-none', 'rounded', 'hover:bg-blue-50', 'cursor-pointer', 'mx-1', 'text-xs']);
  let option = make('option', null, {text: param, value: null});
  newSelector.appendChild(option);
  sizes.forEach(size => {
    let option = make('option', null, {text: size, value: size});
    newSelector.appendChild(option);
  })
  newSelector.onchange = () => {
    sizes.filter(item => targetElement.classList.remove(item));
    targetElement.classList.add(newSelector.value);
  }
  return newSelector;
}

export function createCheckbox(targetElement = null, property = null) {
    const currentCheckbox = make('input', ['h-4', 'w-4','rounded', 'cursor-pointer'], {checked: true, type: 'checkbox'});
    if (targetElement) {
      currentCheckbox.onchange = () => {
        targetElement.classList.toggle(property);
      }
    }
    return currentCheckbox;
}

export function createSimpleSelector(param, sizes) {
  let newSelector = make('select', ['py-1', 'px-2', 'bg-white', 'outline-none', 'border-none', 'rounded', 'hover:bg-blue-50', 'cursor-pointer', 'mx-1', 'text-xs']);
  let option = make('option', null, {text: param, value: null});
  newSelector.appendChild(option);
  sizes.forEach(size => {
    let option = make('option', null, {text: size, value: size});
    newSelector.appendChild(option);
  })

  return newSelector;
}

export function appendMany(target, childList) {
  if (Array.isArray(childList)) {
    childList.forEach(item => target.appendChild(item));
  } else {
    target.appendChild(childList);
  }
}

export function make(tagName, classNames = null, attributes = {}) {
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

  export function createControlGroup(api) {
    let row = make('div', ['flex', 'items-center', 'ml-auto']);

    const arrowUp = createButton(btn.arrowUp);
        arrowUp.classList.remove('w-8', 'h-8');
        arrowUp.classList.add('bg-white', 'text-gray-600','w-6', 'h-6', 'ml-auto', 'flex', 'justify-center', 'items-center', 'rounded', 'hover:bg-blue-500', 'hover:text-white', 'cursor-pointer');
        api.tooltip.onHover(arrowUp, 'Move Up', { placement: 'top', });
        arrowUp.classList.add();
        arrowUp.addEventListener('click', () => {
          console.log('Move up', api.blocks.getCurrentBlockIndex());
          let newIndex = api.blocks.getCurrentBlockIndex();
          api.blocks.move(newIndex-1); 
        })
    const arrowDown = createButton(btn.arrowDown);
        arrowDown.classList.remove('w-8', 'h-8');
        arrowDown.classList.add('bg-white', 'text-gray-600','w-6', 'h-6', 'flex', 'justify-center', 'items-center', 'rounded', 'hover:bg-blue-500', 'hover:text-white', 'cursor-pointer');
        api.tooltip.onHover(arrowDown, 'Move Down', { placement: 'top', });
        arrowDown.classList.add();
        arrowDown.addEventListener('click', () => {
          console.log('Move down', api.blocks.getCurrentBlockIndex());
          let newIndex = api.blocks.getCurrentBlockIndex();
          api.blocks.move(newIndex+1); 
        })
    const remove = createButton(btn.remove);
        remove.classList.add('text-gray-600', 'hover:bg-red-400', 'hover:text-white', 'rounded', 'flex', 'items-center', 'justify-center');
        api.tooltip.onHover(remove, 'Click again to remove block', { placement: 'top', });
        remove.style.width = '26px';
        remove.style.height = '26px';
        let counter = 0;
        remove.addEventListener('click', () => {
          counter++;
          remove.classList.add('bg-red-600');
          remove.classList.remove('hover:bg-red-300');
          remove.classList.remove('text-gray-600');
          remove.classList.add('text-white');
          remove.classList.add('hover:bg-red-700');
          if (counter == 2) {
            api.tooltip.hide();
            api.blocks.delete();
          }
        })
      appendMany(row, [arrowUp, remove, arrowDown]);
      return row;
  }



export function createLayoutPosition(params, targetElement) {  // render text alignment icons. params - ['left', 'center', 'right', 'justify']
  const alignmentsButtonSet = document.createElement('div');
  alignmentsButtonSet.classList.add('flex', 'mx-2', 'items-center');
    const alignmentsButton = document.createElement('div');
    alignmentsButton.classList.add('flex', 'justify-center');
    params.forEach(element => {
      let alligmentClass = btn[element].name;
      let newButton = document.createElement('button');
      newButton.setAttribute('id', btn[element].name);
      newButton.type = 'button';
      newButton.classList.add('bg-white', 'mx-1', 'w-8', 'h-8', 'rounded', 'hover:bg-blue-500', 'hover:text-white', 'cursor-pointer');

      if (btn[element].active) { // || Array.from(targetElement.classList).includes(btn[element].name)
        newButton.classList.add('text-blue-500');
      } else {
        newButton.classList.add('text-gray-600');
      }
      newButton.innerHTML = btn[element].path;
        newButton.addEventListener('click', () => {
          params.forEach(bt => {
            btn[bt].active = false; // reset every button active state
            if (bt == element) {
              btn[bt].active = true; // activate currently pressed button
            }
            setActiveAlignment(btn[bt]); // callback for styling every buttons from the set
          });
          // clear and set new class for target element if exists
          if (targetElement) {
            alignments.filter(item => targetElement.classList.remove(item));
            targetElement.classList.add(alligmentClass);
          }
        }) 
      alignmentsButton.appendChild(newButton);
    })
  alignmentsButtonSet.appendChild(alignmentsButton);

  return alignmentsButtonSet;
}
// toggle alignments btn active color
function setActiveAlignment(item) {
  // нужно искать не во всем документе, а среди детей текущего родителя 
  document.getElementById(item.name).classList.toggle('text-blue-500', item.active);
  document.getElementById(item.name).classList.toggle('text-gray-600', !item.active);
}

export function createButton(button, classNames = null) {
  let btn = document.createElement('button');
  btn.setAttribute('id', button.name);
  btn.type = 'button';
  btn.classList.add('mx-1', 'w-8', 'h-8');
  if (Array.isArray(classNames)) {
    btn.classList.add(...classNames);
  } else if (classNames) {
    btn.classList.add(classNames);
  }
  btn.innerHTML = button.path;
  return btn;
}

export function convertToHex(color) {
  const rgb = color.match(/(\d+)/g);

  let hexr = parseInt(rgb[0]).toString(16);
  let hexg = parseInt(rgb[1]).toString(16);
  let hexb = parseInt(rgb[2]).toString(16);

  hexr = hexr.length === 1 ? '0' + hexr : hexr;
  hexg = hexg.length === 1 ? '0' + hexg : hexg;
  hexb = hexb.length === 1 ? '0' + hexb : hexb;

  return '#' + hexr + hexg + hexb;
}

// get actual styles for saving
export function getStyles(input) {
  if (!input || !input.getAttribute('style')) {
    return {};
  }
   
  var obj = {}, s = input.getAttribute('style').toLowerCase().replace(/-(.)/g, function (m, g) {
      return g.toUpperCase();
  }).replace(/;\s?$/g,"").split(/:|;/g);
   
  for (var i = 0; i < s.length; i += 2)
      obj[s[i].replace(/\s/g,"")] = s[i+1].replace(/^\s+|\s+$/g,"");
     
  return obj;
}

// get actual classes array for save block
export function getClasses(input) {
  this.class = [];
  if (input && input.classList && input.classList.length) {
    Array.from(input.classList).forEach(item => {
      this.class.push(item)
    });
  } 
  return this.class;
}


export function getClassFromData(targetElement, data) {
  let result = null;
  if (!targetElement || !targetElement.classList) {
    return;
  } else {
    Array.from(targetElement.classList).filter(item => {
      if (measurment[data].includes(item)) {
        result = item;
      } 
    })
  }
  return result;
}

export function createAuthorBlock(data) {
  let author_block = make('div', ['p-1', 'mx-4', 'mb-3', 'bg-white', 'rounded', 'order-3'], {id: "author_block", });
    // create author content div
    let content = make('div', ['-mt-4'], {id: "author_content", });
    // create author header div with title, collapse-btn, remove-btn
    let author_header = make('div', ['flex', 'justify-between', 'p-4']);

      let author_header_title = make('span', ['text-xs', 'font-semibold', 'px-4', 'py-1']);
      author_header_title.innerHTML = "Author info";

      // wrapper for 2 btn for flex alignment inside the header
      let author_header_block_btn = make('section');
        let author_header_swap_btn = make('span', ['px-2', 'py-1', 'bg-gray-100', 'hover:bg-gray-980', 'hover:text-white', 'cursor-pointer', 'text-xs', 'font-semibold', 'rounded', 'mr-4']);
        author_header_swap_btn.innerHTML = "Сollapse";
        author_header_swap_btn.addEventListener('click', () => {
          if (content.classList.contains('hidden')) {
            content.classList.remove('hidden');
            author_header_swap_btn.innerHTML = "Сollapse";
          } else {
            content.classList.add('hidden');
            author_header_swap_btn.innerHTML = "Expand";
          }
        })

        let author_header_delete_btn = make('span', ['px-2', 'py-1', 'bg-red-400', 'hover:bg-red-500', 'cursor-pointer', 'text-xs', 'font-semibold', 'text-white', 'rounded'], {id: "delete_author_btn"});
        author_header_delete_btn.innerHTML = "Remove";
        author_header_delete_btn.addEventListener('click', () => {
          document.getElementById('author_btn').classList.remove('hidden');
          author_block.classList.add('hidden');
          author_block.remove();
        })

      appendMany(author_header_block_btn, [author_header_swap_btn, author_header_delete_btn]);
    appendMany(author_header, [author_header_title, author_header_block_btn]);

  appendMany(author_block, [author_header, content]);

      let author_name = make('div', ['p-4', 'm-4', 'rounded', 'bg-gray-100'], {id: "author_name", contentEditable: true});
      author_name.innerHTML = data.author ? data.author.name : 'Author name, could be a link to profile on platform';

      let author_company = make('div', ['p-4', 'm-4', 'bg-white', 'rounded', 'bg-gray-100'], {id: "author_company", contentEditable: true});
      author_company.innerHTML = data.author ? data.author.company : 'Company';

      let author_position = make('div', ['p-4', 'm-4', 'bg-white', 'rounded', 'bg-gray-100'], {id: "author_position", contentEditable: true});
      author_position.innerHTML = data.author ? data.author.position : 'position';

    appendMany(content, [author_name, author_company, author_position]);

  return author_block;
}

export function checkAuthorExistsInData(data) {
  if (data.author !== null) {
    return true;
  } else {
    return false;
  }
}

export function imageUpload(data) {
  let form = make('form');                
      form.setAttribute('enctype', 'multipart/form-data');

  let form_input = make('input', ['hidden'], {type: 'file', id: 'file'});
      form_input.setAttribute("name", "file");

  let form_label = make('label');
      form_label.setAttribute('for', 'file');
      let img_container = make('div', ['w-24', 'h-24', 'p-1', 'bg-gray-100', 'mt-1', 'mr-4', 'rounded' ]);
              let img = make('img', ['h-24', 'w-full', 'object-contain', 'cursor-pointer'], {id: 'uploadedImage'});
              img.setAttribute('alt', 'Select new image')
                  img.src = data && data.img ? window.location.origin+'/img/uploads/'+data.img : window.location.origin+'/img/empty.svg';
          img_container.appendChild(img);
      form_label.appendChild(img_container);

      form_input.addEventListener('change', (event) => {         
        let formData = new FormData();
        formData.append('image', event.target.files[0]);

        axios.post('/change_image', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        .then(response => {
          img.src = response.data.file.url;
        })

      });  

  appendMany(form, [form_input, form_label]);
  return form;
}
export function gqlModelName(model) {
  switch (model) {
    case 'quizzes':
      return 'schemaQuiz';
      break;
    case 'surveys':
      return 'schemaSurvey';
      break;
    case 'tests':
      return 'schemaTest';
      break;
    case 'cases':
      return 'schemaCase';
      break;
    case 'routers':
      return 'schemaRouter';
      break;
    case 'cards':
      return 'schemaCard';
      break;
    case 'texts':
      return 'schemaText';
      break;
  }
}
export function getModel(name) {
  switch (name) {
    case 'quiz':
      return 'quizzes';
      break;
    case 'survey':
      return 'surveys';
      break;
    case 'test':
      return 'tests';
      break;
    case 'case':
      return 'cases';
      break;
    case 'router':
      return 'routers';
      break;
    case 'card':
      return 'cards';
      break;
    case 'text':
      return 'texts';
      break;    
  }
}
export function makeStarsRow(level) {
  let row = make('div', ['flex', 'mb-2', '-mt-1', 'mx-4', 'items-center'] );
  let title = make('div', ['text-xs', 'font-semibold', 'ml-4', 'mr-2']);
      title.innerHTML = "Уровень сложности: ";
  row.appendChild(title);
  for (var i=1; i<=5; i++) {
    let star = make('span', ['mx-1', 'cursor-pointer'], {id: `star_index_${i}`});
      if (i>=1 && i <= level) {
        star.classList.add('text-red-400');
      } else {
        star.classList.add('text-gray-500');
      }
      star.innerHTML = btn.star.path;
      // add eventlistner and dispatch new with level to parent 
      star.onclick = () => {
        let event = new CustomEvent('setLevel', { detail: star.id.replace('star_index_', '') });
        for (var i=2; i<=5; i++) {
          document.getElementById(`star_index_${i}`).classList.remove('text-red-400');
        }        
        for (var i=2; i<=star.id.replace('star_index_', ''); i++) {
          document.getElementById(`star_index_${i}`).classList.add('text-red-400');
        }
        row.dispatchEvent(event);
      }
      row.appendChild(star);
  }
  return row;
}

