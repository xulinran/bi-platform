define(["template"],function(a){function b(b){"use strict";b=b||{};var c=a.utils,d=(c.$helpers,c.$each),e=b.factTables,f=(b.$item,b.$index,c.$escape),g=b.prefixs,h=(b.index,"");return h+='<div class="title fs-14">请选择要使用的事实表（可多选）</div>\n<ul>\n    ',d(e,function(a){h+='\n    <li class="data-line c-p',a.selected&&(h+=" selected"),h+=' j-item" data-id="',h+=f(a.id),h+='">',h+=f(a.name),h+="</li>\n    "}),h+='\n</ul>\n<div class="con-set-group j-root-set-group">\n    <span class="btn-has-icon btn-has-icon-info c-p j-set-group">添加分表匹配规则</span>\n    ',d(g,function(a){h+='\n    <div class="form-common-line j-item">\n        <div class="form-common-text form-common-text-big">\n            <input type="text" class="" placeholder="分表匹配规则" value="',h+=f(a),h+='"/>\n            <span class="form-common-text-validation hide"></span>\n            <span class="form-common-btn-extend form-common-btn-extend-absolute j-delete" title="删除">×</span>\n        </div>\n    </div>\n    '}),h+='\n    <div class="form-common-line hide j-template">\n        <div class="form-common-text form-common-text-big">\n            <input type="text" class="" placeholder="分表匹配规则"/>\n            <span class="form-common-text-validation hide"></span>\n            <span class="form-common-btn-extend form-common-btn-extend-absolute j-delete" title="删除">×</span>\n        </div>\n    </div>\n</div>\n\n'}return{render:b}});