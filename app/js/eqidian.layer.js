/**
 * title: Layer
 * author: aoxiaoqiang
 */
(function() {
    /* Layer的DOM结构
    *------------------
    <div class="eqidian-layer-hide"></div>
    <div class="eqidian-layer">
        <div class="btn-close"></div>
        <div class="eqidian-layer-header">标题</div>
        <div class="eqidian-layer-content">
            操作成功！
        </div>
        <div class="eqidian-layer-footer">
            <button class="eqidian-btns-cancel">取消</button>
            <button class="eqidian-btns-confirm">确定</button>
        </div>
    </div>
    --------------*/

    // 构造函数
    function YungouLayer(obj) {
        this.type = obj.type || 'confirm';

        this.title = obj.title;
        this.text = obj.text;
        this.btns = obj.btns || ['取消', '确定'];

        this.cancel = obj.cancel || null;
        this.ok = obj.ok || null;

        this.isTextCenter = obj.isTextCenter;
        this.createElement = function(tag, classNameText) {
            var el = document.createElement(tag);
            el.className = classNameText;
            return el;
        };
        this.init();
    }

    // 初始化构造函数
    YungouLayer.prototype.init = function() {
        this.initDom();
        this.initEvent();
    }

    // 装配DOM节点
    YungouLayer.prototype.initDom = function() {
        var eaidianLayer = this.createElement('div', 'eqidian-layer animated fadeIn');
        var layerTitle = this.createElement('div', 'eqidian-layer-header'),
            layerCloseBtn = this.createElement('div', 'btn-close'),
            layerContent = this.createElement('div', 'eqidian-layer-content'),
            layerFooter = this.createElement('div', 'eqidian-layer-footer');
        layerTitle.innerText = this.title;
        layerContent.innerHTML = this.text;

        var infoBtn = this.createElement('button', 'eqidian-btns-info'),
            cancelBtn = this.createElement('button', 'eqidian-btns-cancel'),
            confirmBtn = this.createElement('button', 'eqidian-btns-confirm');
        infoBtn.innerText = this.btns[0];
        cancelBtn.innerText = this.btns[0];
        confirmBtn.innerText = this.btns[1];

        // 提示文字居中
        if (this.isTextCenter == true) {
            layerContent.className += ' text-center';
        }

        // 是否装载标题
        if (this.title != null && this.title != undefined) {
            eaidianLayer.appendChild(layerTitle);
        }

        // 装载确认按钮
        if (this.type == 'info') {
            layerFooter.appendChild(infoBtn);
        } else if (this.type == 'confirm') {
            layerFooter.appendChild(cancelBtn);
            layerFooter.appendChild(confirmBtn);
        }

        eaidianLayer.appendChild(layerContent);
        eaidianLayer.appendChild(layerFooter);
        this.dom = eaidianLayer;

        var hideShadow = this.createElement('div', 'eqidian-layer-hide animated fadeIn');
        this.hideShadow = hideShadow;
    }

    // 装配事件
    YungouLayer.prototype.initEvent = function() {
        this.dom.addEventListener('click', function(event) {
            // 取消回调方法
            if (event.target.tagName == 'BUTTON' && event.target.className == 'eqidian-btns-cancel') {
                if (this.cancel) {
                    this.cancel();
                }
                this.hide();
            }
            // 确定回调方法
            if (event.target.tagName == 'BUTTON' && event.target.className == 'eqidian-btns-confirm') {
                if (this.ok) {
                    this.ok();
                }
                this.hide();
            }
            // 关闭回调方法
            if (event.target.className == 'btn-close' || event.target.className == 'eqidian-btns-info') {
                this.hide();
            }
        }.bind(this));
    }

    // 显示 Layer 弹窗
    YungouLayer.prototype.show = function() {
        document.body.appendChild(this.dom);
        document.body.appendChild(this.hideShadow);
    }

    // 移出 Layer 弹窗
    YungouLayer.prototype.hide = function() {
        document.body.removeChild(this.dom);
        document.body.removeChild(this.hideShadow);
    }

    // 将Layer暴露给全局，供外界访问
    window.YungouLayer = YungouLayer;

})(window)
