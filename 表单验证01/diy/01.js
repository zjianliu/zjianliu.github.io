$(document).ready(function(){

  $('.dropdown').dropdown();
  $('.ui.checkbox').checkbox();

  $('.formexample .form')
  .form({
    on: 'blur',
    fields: {
      empty: {
        identifier  : 'empty',
        rules: [
          {
            type   : 'empty',
            prompt : '昵称不能为空'
          }
        ]
      },
      dropdown: {
        identifier  : 'dropdown',
        rules: [
          {
            type   : 'empty',
            prompt : '性别不能为空'
          }
        ]
      },
      digit: {
        identifier  : 'digit',
        rules: [
        {
          type: 'isExactly[篮球]',
          prompt: '爱好只能输入“篮球”'
        }
      ]
      },
      email: {
        identifier  : 'email',
        rules: [
          {
            type   : 'email',
            prompt : '请输入合法的邮箱'
          }
        ]
      },
      checkbox: {
        identifier  : 'checkbox',
        rules: [
          {
            type   : 'checked',
            prompt : '请同意“协议”'
          }
        ]
      }
    }
  });

})