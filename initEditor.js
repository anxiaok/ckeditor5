// 初始化编辑器
    initEditor(){
      ClassicEditor.create( document.querySelector( '#editor' ),{
        extraPlugins: [ MyCustomUploadAdapterPlugin],
        placeholder: '请输入内容',
        fontSize: {
          options: ['小二',14,15,'default',17,18,20,22,24,26,28,30,32]
        },
        heading: {
          options: [
            { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
            { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
            { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' },
            { model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3' },
            { model: 'heading4', view: 'h4', title: 'Heading 4', class: 'ck-heading_heading4' },
            { model: 'heading5', view: 'h5', title: 'Heading 5', class: 'ck-heading_heading5' },
            { model: 'heading6', view: 'h6', title: 'Heading 6', class: 'ck-heading_heading6' }
          ]
        },
        fontColor: {
          colors: [
            {
              color: 'hsl(0, 0%, 0%)',label: 'Black'
            },
            {
              color: 'hsl(0, 0%, 30%)',label: 'Dim grey'
            },
            {
              color: 'hsl(0, 0%, 60%)', label: 'Grey'
            },
            {
              color: 'hsl(0, 0%, 90%)', label: 'Light grey'
            },
            {
              color: 'hsl(0, 0%, 100%)', label: 'White', hasBorder: true
            },
            {
              color: 'rgb(255, 0, 0)', label: 'Red'
            },
            {
              color: 'hsl(30, 75%, 60%)', label: 'Orange'
            },
            {
              color: 'hsl(60, 75%, 60%)',label: 'Yellow'
            },
            {
              color: 'hsl(90, 75%, 60%)',label: 'Light green'
            },
            {
              color: 'hsl(120, 75%, 60%)',label: 'Green'
            },
            {
              color: 'hsl(150, 75%, 60%)',label: 'Aquamarine'
            },
            {
              color: 'hsl(180, 75%, 60%)',label: 'Turquoise'
            },
            {
              color: 'hsl(210, 75%, 60%)',label: 'Light blue'
            },
            {
              color: 'hsl(240, 75%, 60%)',label: 'Blue'
            },
            {
              color: 'hsl(270, 75%, 60%)',label: 'Purple'
            }
          ]
        },
        fontFamily: {
          options: [
              '宋体',
              '仿宋',
              '新宋体',
              '华文宋体',
              '华文中宋',
              '华文仿宋',
              '新细明体',
              '仿宋_GB2312',
              '楷体',
              '楷体_GB2312',
              '微软雅黑',
              '微软正黑体',
              '黑体',
              '隶书',
              '幼圆',
              '华文细黑',
              'Ubuntu, Arial, sans-serif',
              'Ubuntu Mono, Courier New, Courier, monospace'
          ]
        },
      })
      .then( editor => {
        window.editor = editor;
        this.editor = editor;
      } )
      .catch( err => {
        console.error( err.stack );
      } );
    },