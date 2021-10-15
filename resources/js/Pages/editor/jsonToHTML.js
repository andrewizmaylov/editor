// export default {

//   methods: {
//     makeParagraph(obj) {
//       // console.log('paragraph data in converter', obj);
       
//       return 
//       `<p class="my-2">
//         ${obj.data.text}    
//       </p>`
//     },
//     makeHeader(obj) {
//       switch(obj.data.level) {
//         case '1' :
//           return `<h${obj.data.level} class="text-3xl font-semibold">${obj.data.text}</h${obj.data.level}>`
//           break;
//         case '2' :
//           return `<h${obj.data.level} class="text-2xl font-semibold">${obj.data.text}</h${obj.data.level}>`
//           break;
//         case '3' :
//           return `<h${obj.data.level} class="text-xl font-semibold">${obj.data.text}</h${obj.data.level}>`
//           break;
//         case '4' :
//           return `<h${obj.data.level} class="text-lg font-semibold">${obj.data.text}</h${obj.data.level}>`
//           break;
//         case '5' :
//           return `<h${obj.data.level} class="text-base font-semibold">${obj.data.text}</h${obj.data.level}>`
//           break;
//         case '6' :
//           return `<h${obj.data.level} class="text-sm font-semibold">${obj.data.text}</h${obj.data.level}>`
//           break;          
//       }     
//       // return `<h${obj.data.level} class="blog_post_h${obj.data.level}">${obj.data.text}</h${obj.data.level}>`
//     },
//     makeImage(obj) {
//       const caption = obj.data.caption ?
//         `<div class="text-center my-2 text-sm">
//             <p>${obj.data.caption}</p>
//          </div>` : ''
//       return 
//         `<div class="block w-2/3 mx-auto" @click="Event.$emit('image', obj.data.file.url)">
//           <img src="${obj.data.file.url}" alt="${obj.data.caption}" class="object-contain"/>
//           ${caption}
//         </div>`
//     },
//     makeDelimeter(obj) {
//       return 
//       `<div class="block">
//         <div class="my-2 mx-auto text-center">
//           <div class=""></div>
//         </div>
//       </div>\n`
//     },


    
//     makeEmbed(obj) {
//       // const caption = obj.data.caption ? 
//       //   `<div class="list_item_btm_text">
//       //     <p class="nws3_text1"> ${obj.data.caption}</p>
//       //   </div>` : ''
//     //         return `<section class="nws3_sec4">
//     //         <div class="row justify-content-center">
//     //             <div class="col-12 col-md-10 col-lg-8">
        
//     //                 <div class="list_item_btm">
//     //                         <div class="list_item_btm_img">
//     //                         <iframe width="730" height="415" src="${obj.data.embed}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
//     //                         </div>
//     //                         ${caption}
//     //                     </div>
        
        
//     //             </div>
//     //         </div>
//     //     </section>`
//     },

//         makeCode(obj) {
//         //     return `<section class="nws3_sec4">
//         //     <div class="row justify-content-center">
//         //         <div class="col-12 col-md-10 col-lg-8">
        
//         //            <div class="news_code">
//         //                 <pre>
//         //                     <code class="html">
//         //                     ${obj.data.code}
//         //                     </code>
//         //                  </pre>
//         //             </div>
        
        
//         //         </div>
//         //     </div>
//         // </section>	`

//         },
//     makeList(obj) {
//       // if (obj.data.style === 'unordered') {
//       //   const list = obj.data.items.map(item => {
//       //     return `<li>${item}</li>`;
//       //   });
//       //   return `<ul class="blog_post_ul">
//       //               ${list.join('')}
//       //           </ul>`;
//       // } else {
//       //   const list = obj.data.items.map(item => {
//       //           return `<li>${item}</li>`;
//       //       });
//       //       return `<ul class="blog_post_ul">
//       //               ${list.join('')}
//       //           </ul>`           
//       // }
//     },
//     makeQuote(obj) {
//       // return 
//       // `<div class="spcl_line mar_b30">
//       //   <blockquote>
//       //     <p class="spcl_line_p">
//       //        ${obj.data.text}
//       //      </p>
//       //   </blockquote>
//       //   <p> - ${obj.data.caption}</p>
//       // </div>`
//     },
//     makeWarning(obj) {
//     //   return `<section class="nws3_sec4">
//     //   <div class="row justify-content-center">
//     //     <div class="col-12 col-md-10 col-lg-8">
//     //       <div class="table_warning">
//     //         <h3><span><i class="fas fa-exclamation"></i></span>${obj.data.title}</h3>
//     //         <p>${obj.data.message}</p>
//     //       </div>
//     //     </div>
//     //   </div>
//     // </section>	`
//     },
//     makeChecklist(obj) {
//         // const list = obj.data.items.map(item => {
//         //   return 
//         //   `<div class="_1checkbox">
//         //     <span class="_1checkbox_round"></span>
//         //     ${item.text}
//         //   </div>`;
//         // });
//         // return 
//         // `<section class="nws3_sec4">
//         //   <div class="row justify-content-center">
//         //     <div class="col-12 col-md-10 col-lg-8">
//         //       <div class="table_top_sec">
//         //         ${list.join('')}
//         //       </div>
//         //     </div>
//         //   </div>
//         // </section>`;
//     },




//   }
// }