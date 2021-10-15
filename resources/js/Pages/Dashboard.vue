<template>
    <Head title="Dashboard" />

    <Guest>
        <div id="editorjs" />
        <span @click="invokeSave">save</span>
    </Guest>
</template>

<script>
import Guest from '@/Layouts/Guest.vue'
import FontSize from '@/Pages/editor/inlineFontSize.js'; // homemade inline FontSize Tool
import editorHeader from '@/Pages/editor/editorHeader.js'; // replacement for Header Tool with Style snd Class options
import editorParagraph from '@/Pages/editor/editorParagraph.js'; // replacement for Text Tool with Style snd Class options

import BreezeAuthenticatedLayout from '@/Layouts/Authenticated.vue'
import { Head } from '@inertiajs/inertia-vue3';
// import EditorJS from '@editorjs/editorjs';

export default {
    components: {
        BreezeAuthenticatedLayout,
        Guest,
        Head,
    },
    methods: {
      async invokeSave() {
        console.log(this.editor);    
        await this.editor.save()
          .then((response) => {
              console.log('save response: ', response);    
              // this.saveText(response);
          })
          .catch(err => { console.log(err) });
      },
    },
    created() {
      this.editor = new EditorJS({
        holder: 'editorjs', 
        sanitizerConfig: {},
        tools: { 
          FontSize,
          paragraph: {
            class: editorParagraph,
            config: {},
            inlineToolbar: ['bold', 'italic', 'link', 'FontSize', 'inlineCode',],
          },
          header: {
            class: editorHeader,
              inlineToolbar: ['bold', 'italic', 'link', 'FontSize'],
              config: {
                placeholder: 'Enter a header',
                levels: [1, 2, 3, 4, 5, 6],
                defaultLevel: 3
              }
          },

        },
        // defaultBlock: "editorParagraph",
        onReady: () => {
          console.log('on ready')
        },
        onChange: (args) => {
          console.log('Now I know that Editor\'s content changed!');
        },
        data: {
          blocks: [

          ]
        },    
      });
    },
}
</script>
