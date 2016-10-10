# eqidian.layer

### 准备
1. 下载（克隆）项目源文件
	`$ git clone https://github.com/aoxiaoqiang/eqidian.layer.git`
2. 安装运行相关的包。插件是基于 [Node.js](https://nodejs.org)，需要安装 Node.js
	`$ npm install`
3. 编译生成开发所需文件
	`$ cd eaidian.layer`  
	`$ gulp dist`


### 用法
1. 在项目中引用相关 css，js 文件
	`<link rel="stylesheet" href="css/eqidian.layer.css">`
	`<script type="text/javascript" src="js/eqidian.layer.js"></script>`
2. 使用 layer 组件
	```
	var layer = new YungouLayer({
			        type: 'info',
			        title: '普通提示框',
			        text: '一起云购 Layer 插件，翼起点科技公司',
			        isTextCenter: true,
			        btns: ['取消', '确定'],
			        ok: function(){
			            window.location.reload();
			        }
			    })
	```

##### 实例化对象参数
| 参数名 | 描述 |
|-----|----|
| `type`    | `取值: info' 或 'comfirm', 默认 'confirm'。'info' 是普通弹窗，只有一个基本的确定按钮； 'confirm'是确认弹窗，有一个确认和一个取消按钮。`|
| `title`  | `弹窗标题`    |
| `text`    | `弹窗提示内容文字`    |
| `isTextCenter`    | `取值：true 或 flase。弹窗提示内容文字，是否居中。默认为 true`    |
| `btns`    | `弹窗交互按钮文字，默认为 ['取消', '确认']`    |
| `ok`    | `点击确认后的回调方法`    |
| `cancel`    | `点击取消后的回调方法`    |

##### 对象方法
| 参数名 | 描述 |
|-----|----|
| `show`    | ` 显示弹窗。layer.show()`|
| `hide`  | `隐藏弹窗。layer.hide()`    |



