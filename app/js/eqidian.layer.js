/**
 * title: Layer
 * author: aoxiaoqiang
 */
(function() {
    // Layer的DOM结构
    var html = '<div class="layer">\
					<div class="layer-content">\
				        <h2 class="tit">{title}</h2>\
				        <p class="info">{text}</p>\
				        <button class="btn">我知道了</button>\
				    </div>\
			    </div>';

    // 构造函数
    function Layer(obj) {
        this.title = obj.title;
        this.text = obj.text;
        this.init();
    }

    // 初始化构造函数
    Layer.prototype.init = function() {
        this.initDom();
        this.initEvent();
    }

    // 装配DOM节点
    Layer.prototype.initDom = function() {
        var node = document.createElement('div');
        node.innerHTML = html.replace('{text}', this.text).replace('{title}', this.title);
        this.dom = node.childNodes[0];
    }

    // 装配事件
    Layer.prototype.initEvent = function() {
        this.dom.addEventListener('click', function(event) {
            if (event.target.tagName == 'BUTTON') {
                this.hide();
            }
        }.bind(this));
    }

    // 显示 Layer 弹窗
    Layer.prototype.show = function() {
        document.body.appendChild(this.dom);
    }

    // 移出 Layer 弹窗
    Layer.prototype.hide = function() {
        document.body.removeChild(this.dom);
    }

    // 将Layer暴露给全局，供外界访问
    window.Layer = Layer;

})(window)
