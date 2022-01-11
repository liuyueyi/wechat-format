let defaultTheme = {
  BASE: {
    'text-align': 'left',
    'color': '#3f3f3f',
    'line-height': '1.4',
  },
  BASE_BLOCK: {
    'margin': '1em 8px'
  },
  addition: '.preview-wrapper pre::before{font-family:"SourceSansPro","HelveticaNeue",Arial,sans-serif;position:absolute;top:0;right:0;color:#ccc;text-align:right;font-size:0.8em;padding:5px10px0;line-height:15px;height:15px;font-weight:600;}#output h2:after{display:inline-block;content:" ";vertical-align:bottom;border-bottom:28px solid #efebe9;border-right:20px solid transparent;}',
  // block element
  block: {
    h1: {
      'font-size': '1.5em',
      'text-align': 'center',
      'font-weight': 'bold',
      'display': 'table',
      'margin': '2em auto 1em auto',
      'padding': '0 1em',
      'border-bottom': '1px solid rgb(248,57,41)'
    },
    h2: {
      'font-size': '1.5em',
      'text-align': 'center',
      'font-weight': 'bold',
      'display': 'table',
      'margin': '4em auto 2em auto',
      'padding': '0 1em',
      'border-bottom': '1px solid rgb(248,57,41)'
    },
    h3: {
      'font-weight': 'bold',
      'font-size': '1.1em',
      'margin': '2em 8px 0.75em 0',
      'padding-bottom': '.1em',
      // 'border-bottom': '1px solid #eaecef',
      'padding-left': '8px',
      'border-left': '4px solid rgb(248,57,41)'
    },
    h4: {
      'font-weight': 'bold',
      'font-size': '1em',
      'margin': '2em 8px 0.5em 8px',
    },
    p: {
      'margin': '1.5em 8px',
      'letter-spacing': '0.1em'
    },
    blockquote: {
      'font-style': 'normal',
      'border-left': '3px solid rgb(239, 112, 96)',
      'padding': '1em',
      'border-radius': '4px',
      'color': '#FEEEED',
      'background': '#fff9f9',
      'margin': '2em 8px'
    },
    blockquote_p: {
      'letter-spacing': '0.1em',
      'color': 'rgb(80, 80, 80)',
      'font-family': 'PingFangSC-light, PingFangTC-light, Open Sans, Helvetica Neue, sans-serif',
      'font-size': '1em',
      'display': 'inline',
    },
    code: {
      'font-size': '80%',
      'overflow': 'auto',
      'color': '#333',
      'background': 'rgb(247, 247, 247)',
      'border-radius': '2px',
      'padding': '10px',
      'line-height': '1.5',
      'border': '1px solid rgb(236,236,236)',
      'margin': '20px 0',
    },
    image: {
      'border-radius': '4px',
      'display': 'block',
      'margin': '0.5em auto',
      'width': '100%'
    },
    image_org: {
      'border-radius': '4px',
      'display': 'block'
    },
    ol: {
      'margin-left': '0',
      'padding-left': '1em'
    },
    ul: {
      'margin-left': '0',
      'padding-left': '1em',
      'list-style': 'circle'
    },
    footnotes: {
      'margin': '0.5em 8px',
      'font-size': '80%'
    },
    figure: {
      'margin': '1.5em 8px',
    },
    a: {	
      "color": "rgb(239, 112, 96)",
 	  "border-bottom": "1px solid rgb(239, 112, 96)"
    }
  },
  inline: {
    // inline element
    listitem: {
      'text-indent': '-1em',
      'display': 'block',
      'margin': '0.5em 8px'
    },
    codespan: {
      'font-size': '90%',
      'color': 'rgb(239, 112, 96)',
      'background': 'rgba(27,31,35,.05)',
      'padding': '3px 5px',
      'border-radius': '4px',
    },
    link: {
      'color': '#ff3502'
    },
    wx_link: {
      'color': '#0080ff',
      'text-decoration': 'none',
      'border-bottom': '1px solid #d1e9ff'
    },
    strong: {
      'font-weight': 'bold',
    },
    table: {
      'border-collapse': 'collapse',
      'text-align': 'center',
      'margin': '1em 8px'
    },
    thead: {
      'background': 'rgba(0, 0, 0, 0.05)'
    },
    td: {
      'font-size': '80%',
      'border': '1px solid #dfdfdf',
      'padding': '0.25em 0.5em'
    },
    footnote: {
      'font-size': '12px'
    },
    figcaption: {
      'text-align': 'center',
      'color': '#888',
      'font-size': '0.8em'
    }
  }
};
