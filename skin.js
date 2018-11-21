// Garden Gnome Software - Skin
// Pano2VR 5.2.2/15983
// Filename: mobile ? ??????.ggsk
// Generated чт нояб. 1 19:27:35 2018

function pano2vrSkin(player,base) {
	var ggSkinVars = [];
	ggSkinVars['ht_anivar1'] = true;
	var me=this;
	var flag=false;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=me.player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	this.player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		this._rectangle_3=document.createElement('div');
		this._rectangle_3.ggId="Rectangle 3";
		this._rectangle_3.ggTop=-48;
		this._rectangle_3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._rectangle_3.ggVisible=true;
		this._rectangle_3.className='ggskin ggskin_rectangle ';
		this._rectangle_3.ggType='rectangle';
		hs ='';
		hs+='background : #2a8c0f;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='opacity : 0.80003;';
		hs+='position : absolute;';
		hs+='top : -48px;';
		hs+='visibility : inherit;';
		hs+='width : 101%;';
		hs+='pointer-events:auto;';
		this._rectangle_3.setAttribute('style',hs);
		this._rectangle_3.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_3.ggIsActive=function() {
			return false;
		}
		me._rectangle_3.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		me._rectangle_3.ggCurrentLogicStateVisible = -1;
		this._rectangle_3.ggUpdateConditionNodeChange=function () {
			var newLogicStateVisible;
			if (
				(me.player.getIsMobile() == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._rectangle_3.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._rectangle_3.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._rectangle_3.style[domTransition]='';
				if (me._rectangle_3.ggCurrentLogicStateVisible == 0) {
					me._rectangle_3.style.visibility="hidden";
					me._rectangle_3.ggVisible=false;
				}
				else {
					me._rectangle_3.style.visibility=(Number(me._rectangle_3.style.opacity)>0||!me._rectangle_3.style.opacity)?'inherit':'hidden';
					me._rectangle_3.ggVisible=true;
				}
			}
		}
		this._rectangle_3.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._rectangle_3.ggNodeChange=function () {
			me._rectangle_3.ggUpdateConditionNodeChange();
		}
		this.divSkin.appendChild(this._rectangle_3);
		this._controller2=document.createElement('div');
		this._controller2.ggId="controller2";
		this._controller2.ggLeft=-185;
		this._controller2.ggTop=-49;
		this._controller2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._controller2.ggVisible=true;
		this._controller2.className='ggskin ggskin_container ';
		this._controller2.ggType='container';
		hs ='';
		hs+='height : 46px;';
		hs+='left : -185px;';
		hs+='position : absolute;';
		hs+='top : -49px;';
		hs+='visibility : inherit;';
		hs+='width : 181px;';
		hs+='pointer-events:none;';
		this._controller2.setAttribute('style',hs);
		this._controller2.style[domTransform + 'Origin']='50% 50%';
		me._controller2.ggIsActive=function() {
			return false;
		}
		me._controller2.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		me._controller2.ggCurrentLogicStateVisible = -1;
		this._controller2.ggUpdateConditionNodeChange=function () {
			var newLogicStateVisible;
			if (
				(me.player.getIsMobile() == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._controller2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._controller2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._controller2.style[domTransition]='';
				if (me._controller2.ggCurrentLogicStateVisible == 0) {
					me._controller2.style.visibility="hidden";
					me._controller2.ggVisible=false;
				}
				else {
					me._controller2.style.visibility=(Number(me._controller2.style.opacity)>0||!me._controller2.style.opacity)?'inherit':'hidden';
					me._controller2.ggVisible=true;
				}
			}
		}
		this._controller2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._controller2.ggNodeChange=function () {
			me._controller2.ggUpdateConditionNodeChange();
		}
		this._image_2=document.createElement('div');
		this._image_2__img=document.createElement('img');
		this._image_2__img.className='ggskin ggskin_image';
		this._image_2__img.setAttribute('src',basePath + 'images/image_2.png');
		this._image_2__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._image_2__img.className='ggskin ggskin_image';
		this._image_2__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._image_2__img);
		this._image_2.appendChild(this._image_2__img);
		this._image_2.ggId="Image 2";
		this._image_2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._image_2.ggVisible=true;
		this._image_2.className='ggskin ggskin_image ';
		this._image_2.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 38px;';
		hs+='left : 140px;';
		hs+='opacity : 0.7;';
		hs+='position : absolute;';
		hs+='top : 6px;';
		hs+='visibility : inherit;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		this._image_2.setAttribute('style',hs);
		this._image_2.style[domTransform + 'Origin']='50% 50%';
		me._image_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._image_2.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._image_2.onclick=function (e) {
			me.player.toggleFullscreen();
		}
		this._image_2.onmouseover=function (e) {
			me.elementMouseOver['image_2']=true;
		}
		this._image_2.onmouseout=function (e) {
			me.elementMouseOver['image_2']=false;
		}
		this._image_2.ontouchend=function (e) {
			me.elementMouseOver['image_2']=false;
		}
		me._image_2.ggCurrentLogicStateAlpha = -1;
		this._image_2.ggUpdateConditionTimer=function () {
			var newLogicStateAlpha;
			if (
				(me.elementMouseOver['image_2'] == true)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._image_2.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._image_2.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._image_2.style[domTransition]='opacity none, visibility none';
				if (me._image_2.ggCurrentLogicStateAlpha == 0) {
					me._image_2.style.visibility=me._image_2.ggVisible?'inherit':'hidden';
					me._image_2.style.opacity=1;
				}
				else {
					me._image_2.style.visibility=me._image_2.ggVisible?'inherit':'hidden';
					me._image_2.style.opacity=0.7;
				}
			}
		}
		this._image_2.ggUpdatePosition=function (useTransition) {
		}
		this._controller2.appendChild(this._image_2);
		this.divSkin.appendChild(this._controller2);
		this._controller=document.createElement('div');
		this._controller.ggId="controller";
		this._controller.ggLeft=-145;
		this._controller.ggTop=-46;
		this._controller.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._controller.ggVisible=true;
		this._controller.className='ggskin ggskin_container ';
		this._controller.ggType='container';
		hs ='';
		hs+='height : 43px;';
		hs+='left : -145px;';
		hs+='position : absolute;';
		hs+='top : -46px;';
		hs+='visibility : inherit;';
		hs+='width : 295px;';
		hs+='pointer-events:none;';
		this._controller.setAttribute('style',hs);
		this._controller.style[domTransform + 'Origin']='50% 50%';
		me._controller.ggIsActive=function() {
			return false;
		}
		me._controller.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		me._controller.ggCurrentLogicStateVisible = -1;
		this._controller.ggUpdateConditionNodeChange=function () {
			var newLogicStateVisible;
			if (
				(me.player.getIsMobile() == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._controller.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._controller.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._controller.style[domTransition]='';
				if (me._controller.ggCurrentLogicStateVisible == 0) {
					me._controller.style.visibility="hidden";
					me._controller.ggVisible=false;
				}
				else {
					me._controller.style.visibility=(Number(me._controller.style.opacity)>0||!me._controller.style.opacity)?'inherit':'hidden';
					me._controller.ggVisible=true;
				}
			}
		}
		this._controller.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._controller.ggNodeChange=function () {
			me._controller.ggUpdateConditionNodeChange();
		}
		this._image_3=document.createElement('div');
		this._image_3__img=document.createElement('img');
		this._image_3__img.className='ggskin ggskin_image';
		this._image_3__img.setAttribute('src',basePath + 'images/image_3.png');
		this._image_3__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._image_3__img.className='ggskin ggskin_image';
		this._image_3__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._image_3__img);
		this._image_3.appendChild(this._image_3__img);
		this._image_3.ggId="Image 3";
		this._image_3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._image_3.ggVisible=true;
		this._image_3.className='ggskin ggskin_image ';
		this._image_3.ggType='image';
		hs ='';
		hs+='height : 38px;';
		hs+='left : 254px;';
		hs+='opacity : 0.7;';
		hs+='position : absolute;';
		hs+='top : 3px;';
		hs+='visibility : inherit;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		this._image_3.setAttribute('style',hs);
		this._image_3.style[domTransform + 'Origin']='50% 50%';
		me._image_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._image_3.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._image_3.onclick=function (e) {
			me.player.toggleAutorotate();
		}
		this._image_3.onmouseover=function (e) {
			me.elementMouseOver['image_3']=true;
		}
		this._image_3.onmouseout=function (e) {
			me.elementMouseOver['image_3']=false;
		}
		this._image_3.ontouchend=function (e) {
			me.elementMouseOver['image_3']=false;
		}
		me._image_3.ggCurrentLogicStateAlpha = -1;
		this._image_3.ggUpdateConditionTimer=function () {
			var newLogicStateAlpha;
			if (
				(me.elementMouseOver['image_3'] == true)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._image_3.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._image_3.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._image_3.style[domTransition]='opacity none, visibility none';
				if (me._image_3.ggCurrentLogicStateAlpha == 0) {
					me._image_3.style.visibility=me._image_3.ggVisible?'inherit':'hidden';
					me._image_3.style.opacity=1;
				}
				else {
					me._image_3.style.visibility=me._image_3.ggVisible?'inherit':'hidden';
					me._image_3.style.opacity=0.7;
				}
			}
		}
		this._image_3.ggUpdatePosition=function (useTransition) {
		}
		this._controller.appendChild(this._image_3);
		this._move_right=document.createElement('div');
		this._move_right__img=document.createElement('img');
		this._move_right__img.className='ggskin ggskin_button';
		this._move_right__img.setAttribute('src',basePath + 'images/move_right.png');
		this._move_right__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._move_right__img.className='ggskin ggskin_button';
		this._move_right__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._move_right__img);
		this._move_right.appendChild(this._move_right__img);
		this._move_right.ggId="move_right";
		this._move_right.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._move_right.ggVisible=true;
		this._move_right.className='ggskin ggskin_button ';
		this._move_right.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 37px;';
		hs+='left : 212px;';
		hs+='opacity : 0.7;';
		hs+='position : absolute;';
		hs+='top : 3px;';
		hs+='visibility : inherit;';
		hs+='width : 37px;';
		hs+='pointer-events:auto;';
		this._move_right.setAttribute('style',hs);
		this._move_right.style[domTransform + 'Origin']='50% 50%';
		me._move_right.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._move_right.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._move_right.onmouseover=function (e) {
			me.elementMouseOver['move_right']=true;
		}
		this._move_right.onmouseout=function (e) {
			me.elementMouseDown['move_right']=false;
			me.elementMouseOver['move_right']=false;
		}
		this._move_right.onmousedown=function (e) {
			me.elementMouseDown['move_right']=true;
		}
		this._move_right.onmouseup=function (e) {
			me.elementMouseDown['move_right']=false;
		}
		this._move_right.ontouchend=function (e) {
			me.elementMouseDown['move_right']=false;
			me.elementMouseOver['move_right']=false;
		}
		me._move_right.ggCurrentLogicStateAlpha = -1;
		this._move_right.ggUpdateConditionTimer=function () {
			var newLogicStateAlpha;
			if (
				(me.elementMouseOver['move_right'] == true)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._move_right.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._move_right.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._move_right.style[domTransition]='opacity none, visibility none';
				if (me._move_right.ggCurrentLogicStateAlpha == 0) {
					me._move_right.style.visibility=me._move_right.ggVisible?'inherit':'hidden';
					me._move_right.style.opacity=1;
				}
				else {
					me._move_right.style.visibility=me._move_right.ggVisible?'inherit':'hidden';
					me._move_right.style.opacity=0.7;
				}
			}
		}
		this._move_right.ggUpdatePosition=function (useTransition) {
		}
		this._controller.appendChild(this._move_right);
		this._move_left=document.createElement('div');
		this._move_left__img=document.createElement('img');
		this._move_left__img.className='ggskin ggskin_button';
		this._move_left__img.setAttribute('src',basePath + 'images/move_left.png');
		this._move_left__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._move_left__img.className='ggskin ggskin_button';
		this._move_left__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._move_left__img);
		this._move_left.appendChild(this._move_left__img);
		this._move_left.ggId="move_left";
		this._move_left.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._move_left.ggVisible=true;
		this._move_left.className='ggskin ggskin_button ';
		this._move_left.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 37px;';
		hs+='left : 170px;';
		hs+='opacity : 0.7;';
		hs+='position : absolute;';
		hs+='top : 3px;';
		hs+='visibility : inherit;';
		hs+='width : 37px;';
		hs+='pointer-events:auto;';
		this._move_left.setAttribute('style',hs);
		this._move_left.style[domTransform + 'Origin']='50% 50%';
		me._move_left.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._move_left.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._move_left.onmouseover=function (e) {
			me.elementMouseOver['move_left']=true;
		}
		this._move_left.onmouseout=function (e) {
			me.elementMouseDown['move_left']=false;
			me.elementMouseOver['move_left']=false;
		}
		this._move_left.onmousedown=function (e) {
			me.elementMouseDown['move_left']=true;
		}
		this._move_left.onmouseup=function (e) {
			me.elementMouseDown['move_left']=false;
		}
		this._move_left.ontouchend=function (e) {
			me.elementMouseDown['move_left']=false;
			me.elementMouseOver['move_left']=false;
		}
		me._move_left.ggCurrentLogicStateAlpha = -1;
		this._move_left.ggUpdateConditionTimer=function () {
			var newLogicStateAlpha;
			if (
				(me.elementMouseOver['move_left'] == true)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._move_left.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._move_left.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._move_left.style[domTransition]='opacity none, visibility none';
				if (me._move_left.ggCurrentLogicStateAlpha == 0) {
					me._move_left.style.visibility=me._move_left.ggVisible?'inherit':'hidden';
					me._move_left.style.opacity=1;
				}
				else {
					me._move_left.style.visibility=me._move_left.ggVisible?'inherit':'hidden';
					me._move_left.style.opacity=0.7;
				}
			}
		}
		this._move_left.ggUpdatePosition=function (useTransition) {
		}
		this._controller.appendChild(this._move_left);
		this._move_up=document.createElement('div');
		this._move_up__img=document.createElement('img');
		this._move_up__img.className='ggskin ggskin_button';
		this._move_up__img.setAttribute('src',basePath + 'images/move_up.png');
		this._move_up__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._move_up__img.className='ggskin ggskin_button';
		this._move_up__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._move_up__img);
		this._move_up.appendChild(this._move_up__img);
		this._move_up.ggId="move_up";
		this._move_up.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._move_up.ggVisible=true;
		this._move_up.className='ggskin ggskin_button ';
		this._move_up.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 37px;';
		hs+='left : 128px;';
		hs+='opacity : 0.7;';
		hs+='position : absolute;';
		hs+='top : 3px;';
		hs+='visibility : inherit;';
		hs+='width : 37px;';
		hs+='pointer-events:auto;';
		this._move_up.setAttribute('style',hs);
		this._move_up.style[domTransform + 'Origin']='50% 50%';
		me._move_up.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._move_up.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._move_up.onmouseover=function (e) {
			me.elementMouseOver['move_up']=true;
		}
		this._move_up.onmouseout=function (e) {
			me.elementMouseDown['move_up']=false;
			me.elementMouseOver['move_up']=false;
		}
		this._move_up.onmousedown=function (e) {
			me.elementMouseDown['move_up']=true;
		}
		this._move_up.onmouseup=function (e) {
			me.elementMouseDown['move_up']=false;
		}
		this._move_up.ontouchend=function (e) {
			me.elementMouseDown['move_up']=false;
			me.elementMouseOver['move_up']=false;
		}
		me._move_up.ggCurrentLogicStateAlpha = -1;
		this._move_up.ggUpdateConditionTimer=function () {
			var newLogicStateAlpha;
			if (
				(me.elementMouseOver['move_up'] == true)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._move_up.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._move_up.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._move_up.style[domTransition]='opacity none, visibility none';
				if (me._move_up.ggCurrentLogicStateAlpha == 0) {
					me._move_up.style.visibility=me._move_up.ggVisible?'inherit':'hidden';
					me._move_up.style.opacity=1;
				}
				else {
					me._move_up.style.visibility=me._move_up.ggVisible?'inherit':'hidden';
					me._move_up.style.opacity=0.7;
				}
			}
		}
		this._move_up.ggUpdatePosition=function (useTransition) {
		}
		this._controller.appendChild(this._move_up);
		this._move_down=document.createElement('div');
		this._move_down__img=document.createElement('img');
		this._move_down__img.className='ggskin ggskin_button';
		this._move_down__img.setAttribute('src',basePath + 'images/move_down.png');
		this._move_down__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._move_down__img.className='ggskin ggskin_button';
		this._move_down__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._move_down__img);
		this._move_down.appendChild(this._move_down__img);
		this._move_down.ggId="move_down";
		this._move_down.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._move_down.ggVisible=true;
		this._move_down.className='ggskin ggskin_button ';
		this._move_down.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 37px;';
		hs+='left : 86px;';
		hs+='opacity : 0.7;';
		hs+='position : absolute;';
		hs+='top : 3px;';
		hs+='visibility : inherit;';
		hs+='width : 37px;';
		hs+='pointer-events:auto;';
		this._move_down.setAttribute('style',hs);
		this._move_down.style[domTransform + 'Origin']='50% 50%';
		me._move_down.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._move_down.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._move_down.onmouseover=function (e) {
			me.elementMouseOver['move_down']=true;
		}
		this._move_down.onmouseout=function (e) {
			me.elementMouseDown['move_down']=false;
			me.elementMouseOver['move_down']=false;
		}
		this._move_down.onmousedown=function (e) {
			me.elementMouseDown['move_down']=true;
		}
		this._move_down.onmouseup=function (e) {
			me.elementMouseDown['move_down']=false;
		}
		this._move_down.ontouchend=function (e) {
			me.elementMouseDown['move_down']=false;
			me.elementMouseOver['move_down']=false;
		}
		me._move_down.ggCurrentLogicStateAlpha = -1;
		this._move_down.ggUpdateConditionTimer=function () {
			var newLogicStateAlpha;
			if (
				(me.elementMouseOver['move_down'] == true)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._move_down.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._move_down.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._move_down.style[domTransition]='opacity none, visibility none';
				if (me._move_down.ggCurrentLogicStateAlpha == 0) {
					me._move_down.style.visibility=me._move_down.ggVisible?'inherit':'hidden';
					me._move_down.style.opacity=1;
				}
				else {
					me._move_down.style.visibility=me._move_down.ggVisible?'inherit':'hidden';
					me._move_down.style.opacity=0.7;
				}
			}
		}
		this._move_down.ggUpdatePosition=function (useTransition) {
		}
		this._controller.appendChild(this._move_down);
		this._zoom_out=document.createElement('div');
		this._zoom_out__img=document.createElement('img');
		this._zoom_out__img.className='ggskin ggskin_button';
		this._zoom_out__img.setAttribute('src',basePath + 'images/zoom_out.png');
		this._zoom_out__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._zoom_out__img.className='ggskin ggskin_button';
		this._zoom_out__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._zoom_out__img);
		this._zoom_out.appendChild(this._zoom_out__img);
		this._zoom_out.ggId="zoom_out";
		this._zoom_out.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._zoom_out.ggVisible=true;
		this._zoom_out.className='ggskin ggskin_button ';
		this._zoom_out.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 37px;';
		hs+='left : 44px;';
		hs+='opacity : 0.7;';
		hs+='position : absolute;';
		hs+='top : 3px;';
		hs+='visibility : inherit;';
		hs+='width : 37px;';
		hs+='pointer-events:auto;';
		this._zoom_out.setAttribute('style',hs);
		this._zoom_out.style[domTransform + 'Origin']='50% 50%';
		me._zoom_out.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._zoom_out.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._zoom_out.onmouseover=function (e) {
			me.elementMouseOver['zoom_out']=true;
		}
		this._zoom_out.onmouseout=function (e) {
			me.elementMouseDown['zoom_out']=false;
			me.elementMouseOver['zoom_out']=false;
		}
		this._zoom_out.onmousedown=function (e) {
			me.elementMouseDown['zoom_out']=true;
		}
		this._zoom_out.onmouseup=function (e) {
			me.elementMouseDown['zoom_out']=false;
		}
		this._zoom_out.ontouchend=function (e) {
			me.elementMouseDown['zoom_out']=false;
			me.elementMouseOver['zoom_out']=false;
		}
		me._zoom_out.ggCurrentLogicStateAlpha = -1;
		this._zoom_out.ggUpdateConditionTimer=function () {
			var newLogicStateAlpha;
			if (
				(me.elementMouseOver['zoom_out'] == true)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._zoom_out.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._zoom_out.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._zoom_out.style[domTransition]='opacity none, visibility none';
				if (me._zoom_out.ggCurrentLogicStateAlpha == 0) {
					me._zoom_out.style.visibility=me._zoom_out.ggVisible?'inherit':'hidden';
					me._zoom_out.style.opacity=1;
				}
				else {
					me._zoom_out.style.visibility=me._zoom_out.ggVisible?'inherit':'hidden';
					me._zoom_out.style.opacity=0.7;
				}
			}
		}
		this._zoom_out.ggUpdatePosition=function (useTransition) {
		}
		this._controller.appendChild(this._zoom_out);
		this._zoom_in=document.createElement('div');
		this._zoom_in__img=document.createElement('img');
		this._zoom_in__img.className='ggskin ggskin_button';
		this._zoom_in__img.setAttribute('src',basePath + 'images/zoom_in.png');
		this._zoom_in__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._zoom_in__img.className='ggskin ggskin_button';
		this._zoom_in__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._zoom_in__img);
		this._zoom_in.appendChild(this._zoom_in__img);
		this._zoom_in.ggId="zoom_in";
		this._zoom_in.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._zoom_in.ggVisible=true;
		this._zoom_in.className='ggskin ggskin_button ';
		this._zoom_in.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 37px;';
		hs+='left : 2px;';
		hs+='opacity : 0.7;';
		hs+='position : absolute;';
		hs+='top : 3px;';
		hs+='visibility : inherit;';
		hs+='width : 37px;';
		hs+='pointer-events:auto;';
		this._zoom_in.setAttribute('style',hs);
		this._zoom_in.style[domTransform + 'Origin']='50% 50%';
		me._zoom_in.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._zoom_in.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._zoom_in.onmouseover=function (e) {
			me.elementMouseOver['zoom_in']=true;
		}
		this._zoom_in.onmouseout=function (e) {
			me.elementMouseDown['zoom_in']=false;
			me.elementMouseOver['zoom_in']=false;
		}
		this._zoom_in.onmousedown=function (e) {
			me.elementMouseDown['zoom_in']=true;
		}
		this._zoom_in.onmouseup=function (e) {
			me.elementMouseDown['zoom_in']=false;
		}
		this._zoom_in.ontouchend=function (e) {
			me.elementMouseDown['zoom_in']=false;
			me.elementMouseOver['zoom_in']=false;
		}
		me._zoom_in.ggCurrentLogicStateAlpha = -1;
		this._zoom_in.ggUpdateConditionTimer=function () {
			var newLogicStateAlpha;
			if (
				(me.elementMouseOver['zoom_in'] == true)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._zoom_in.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._zoom_in.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._zoom_in.style[domTransition]='opacity none, visibility none';
				if (me._zoom_in.ggCurrentLogicStateAlpha == 0) {
					me._zoom_in.style.visibility=me._zoom_in.ggVisible?'inherit':'hidden';
					me._zoom_in.style.opacity=1;
				}
				else {
					me._zoom_in.style.visibility=me._zoom_in.ggVisible?'inherit':'hidden';
					me._zoom_in.style.opacity=0.7;
				}
			}
		}
		this._zoom_in.ggUpdatePosition=function (useTransition) {
		}
		this._controller.appendChild(this._zoom_in);
		this.divSkin.appendChild(this._controller);
		this._controller3=document.createElement('div');
		this._controller3.ggId="controller3";
		this._controller3.ggTop=-43;
		this._controller3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._controller3.ggVisible=true;
		this._controller3.className='ggskin ggskin_container ';
		this._controller3.ggType='container';
		hs ='';
		hs+='height : 38px;';
		hs+='left : 9px;';
		hs+='position : absolute;';
		hs+='top : -43px;';
		hs+='visibility : inherit;';
		hs+='width : 82px;';
		hs+='pointer-events:none;';
		this._controller3.setAttribute('style',hs);
		this._controller3.style[domTransform + 'Origin']='50% 50%';
		me._controller3.ggIsActive=function() {
			return false;
		}
		me._controller3.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		me._controller3.ggCurrentLogicStateVisible = -1;
		this._controller3.ggUpdateConditionNodeChange=function () {
			var newLogicStateVisible;
			if (
				(me.player.getIsMobile() == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._controller3.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._controller3.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._controller3.style[domTransition]='';
				if (me._controller3.ggCurrentLogicStateVisible == 0) {
					me._controller3.style.visibility="hidden";
					me._controller3.ggVisible=false;
				}
				else {
					me._controller3.style.visibility=(Number(me._controller3.style.opacity)>0||!me._controller3.style.opacity)?'inherit':'hidden';
					me._controller3.ggVisible=true;
				}
			}
		}
		this._controller3.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._controller3.ggNodeChange=function () {
			me._controller3.ggUpdateConditionNodeChange();
		}
		this._hiidemenu=document.createElement('div');
		this._hiidemenu__img=document.createElement('img');
		this._hiidemenu__img.className='ggskin ggskin_button';
		this._hiidemenu__img.setAttribute('src',basePath + 'images/hiidemenu.png');
		this._hiidemenu__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._hiidemenu__img.className='ggskin ggskin_button';
		this._hiidemenu__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._hiidemenu__img);
		this._hiidemenu.appendChild(this._hiidemenu__img);
		this._hiidemenu.ggId="hiidemenu";
		this._hiidemenu.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._hiidemenu.ggVisible=true;
		this._hiidemenu.className='ggskin ggskin_button ';
		this._hiidemenu.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 38px;';
		hs+='left : -1px;';
		hs+='opacity : 0.7;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		this._hiidemenu.setAttribute('style',hs);
		this._hiidemenu.style[domTransform + 'Origin']='50% 50%';
		me._hiidemenu.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._hiidemenu.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._hiidemenu.onclick=function (e) {
			var flag=me._minipano.ggOpacitiyActive;
			if (me.player.transitionsDisabled) {
				me._minipano.style[domTransition]='none';
			} else {
				me._minipano.style[domTransition]='all 500ms ease-out 0ms';
			}
			if (flag) {
				me._minipano.style.opacity='1';
				me._minipano.style.visibility=me._minipano.ggVisible?'inherit':'hidden';
			} else {
				me._minipano.style.opacity='0';
				me._minipano.style.visibility='hidden';
			}
			me._minipano.ggOpacitiyActive=!flag;
		}
		this._hiidemenu.onmouseover=function (e) {
			me.elementMouseOver['hiidemenu']=true;
		}
		this._hiidemenu.onmouseout=function (e) {
			me.elementMouseOver['hiidemenu']=false;
		}
		this._hiidemenu.ontouchend=function (e) {
			me.elementMouseOver['hiidemenu']=false;
		}
		me._hiidemenu.ggCurrentLogicStateAlpha = -1;
		this._hiidemenu.ggUpdateConditionTimer=function () {
			var newLogicStateAlpha;
			if (
				(me.elementMouseOver['hiidemenu'] == true)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hiidemenu.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hiidemenu.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._hiidemenu.style[domTransition]='opacity none, visibility none';
				if (me._hiidemenu.ggCurrentLogicStateAlpha == 0) {
					me._hiidemenu.style.visibility=me._hiidemenu.ggVisible?'inherit':'hidden';
					me._hiidemenu.style.opacity=1;
				}
				else {
					me._hiidemenu.style.visibility=me._hiidemenu.ggVisible?'inherit':'hidden';
					me._hiidemenu.style.opacity=0.7;
				}
			}
		}
		this._hiidemenu.ggUpdatePosition=function (useTransition) {
		}
		this._controller3.appendChild(this._hiidemenu);
		this.divSkin.appendChild(this._controller3);
		this._minipano=document.createElement('div');
		this._minipano__content=document.createElement('div');
		this._minipano.ggContent=this._minipano__content;
		this._minipano.appendChild(this._minipano__content);
		hs ='';
		hs+='left : 50%;';
		hs+='margin-left : -100px;';
		hs+='margin-top : -43.5px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 50%;';
		this._minipano__content.setAttribute('style',hs);
		this._minipano.ggId="minipano";
		this._minipano.ggTop=-158;
		this._minipano.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._minipano.ggVisible=true;
		this._minipano.className='ggskin ggskin_scrollarea ';
		this._minipano.ggType='scrollarea';
		hs ='';
		hs+='-webkit-overflow-scrolling : touch;';
		hs+='border : 1px solid rgba(0, 0, 0, 0);';
		hs+='height : 106px;';
		hs+='left : 0px;';
		hs+='overflow-x : auto;';
		hs+='overflow-y : hidden;';
		hs+='position : absolute;';
		hs+='top : -158px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		this._minipano.setAttribute('style',hs);
		this._minipano.style[domTransform + 'Origin']='50% 50%';
		me._minipano.ggIsActive=function() {
			return false;
		}
		me._minipano.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		me._minipano.ggCurrentLogicStateVisible = -1;
		this._minipano.ggUpdateConditionNodeChange=function () {
			var newLogicStateVisible;
			if (
				(me.player.getIsMobile() == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._minipano.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._minipano.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._minipano.style[domTransition]='';
				if (me._minipano.ggCurrentLogicStateVisible == 0) {
					me._minipano.style.visibility="hidden";
					me._minipano.ggVisible=false;
				}
				else {
					me._minipano.style.visibility=(Number(me._minipano.style.opacity)>0||!me._minipano.style.opacity)?'inherit':'hidden';
					me._minipano.ggVisible=true;
				}
			}
		}
		this._minipano.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
			{
				var containerWidth = this.clientWidth;
				var contentWidth = this.ggContent.scrollWidth;
				if (contentWidth < containerWidth) {
					this.ggContent.style.left = '50%';
					this.ggContent.style.marginLeft = (contentWidth/-2) + 'px';
				}
				else {
					this.ggContent.style.left = '0px';
					this.ggContent.style.marginLeft = '0px';
				}
				var containerHeight = this.clientHeight;
				var contentHeight = this.ggContent.scrollHeight;
				if (contentHeight < containerHeight) {
					this.ggContent.style.top = '50%';
					this.ggContent.style.marginTop = (contentHeight/-2) + 'px';
				}
				else {
					this.ggContent.style.top = '0px';
					this.ggContent.style.marginTop = '0px';
				}
			}
		}
		this._minipano.ggNodeChange=function () {
			me._minipano.ggUpdateConditionNodeChange();
		}
		this._thumbnail_cloner1=document.createElement('div');
		this._thumbnail_cloner1.ggNumRepeat = 1;
		this._thumbnail_cloner1.ggWidth = 195;
		this._thumbnail_cloner1.ggHeight = 80;
		this._thumbnail_cloner1.ggUpdating = false;
		this._thumbnail_cloner1.ggFilter = [];
		this._thumbnail_cloner1.ggUpdate = function(filter) {
			if(me._thumbnail_cloner1.ggUpdating == true) return;
			me._thumbnail_cloner1.ggUpdating = true;
			if (typeof filter=='object') {
				me._thumbnail_cloner1.ggFilter = filter;
			} else {
				filter = me._thumbnail_cloner1.ggFilter;
			};
			if (me._thumbnail_cloner1.hasChildNodes() == true) {
				while (me._thumbnail_cloner1.firstChild) {
					me._thumbnail_cloner1.removeChild(me._thumbnail_cloner1.firstChild);
				}
			}
			var tourNodes = me.player.getNodeIds();
			var row = 0;
			var column = 0;
			var numRows = me._thumbnail_cloner1.ggNumRepeat;
			if (numRows < 1) numRows = 1;
			for (i=0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = false;
				if (filter.length > 0) {
					var nodeData = me.player.getNodeUserdata(nodeId);
					for (j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j]) != -1) passed = true;
					}
				}
				else passed = true;
				if (passed) {
					me._thumbnail_cloner1__node = document.createElement('div');
					me._thumbnail_cloner1.appendChild(me._thumbnail_cloner1__node);
					me._thumbnail_cloner1__node.setAttribute('style','position: absolute; top: ' + (row * me._thumbnail_cloner1.ggHeight) + 'px; left:' + (column * me._thumbnail_cloner1.ggWidth) + 'px; height: ' + me._thumbnail_cloner1.ggHeight + 'px; width: ' + me._thumbnail_cloner1.ggWidth + 'px; overflow: hidden;');
					var inst = new SkinCloner_thumbnail_cloner1_Class(nodeId, me);
					me._thumbnail_cloner1__node.appendChild(inst.__div);
					me._thumbnail_cloner1__node.ggObj=inst;
					me.updateSize(inst.__div);
					row++;
					if (row >= numRows) {
						row = 0;
						column++;
					}
				}
			}
			me._thumbnail_cloner1.ggClonerCallChildFunctions('ggUpdateConditionTimer');
			me._thumbnail_cloner1.ggClonerCallChildFunctions('ggNodeChange');
			me._thumbnail_cloner1.ggUpdating = false;
		}
		this._thumbnail_cloner1.ggClonerCallChildFunctions = function(functionname){
			var stack = [];
			var i;
			for(i=0; i<me._thumbnail_cloner1.childNodes.length; i++) {
				stack.push(me._thumbnail_cloner1.childNodes[i]);
			}
			while (stack.length > 0) {
				var e = stack.pop();
				if (typeof e[functionname] == 'function')
					e[functionname]();
				if(e.hasChildNodes()) {
					for(i=0; i<e.childNodes.length; i++) {
						stack.push(e.childNodes[i]);
					}
				}
			}
		}
		this._thumbnail_cloner1.ggTags = [];
		this._thumbnail_cloner1.ggId="Thumbnail Cloner";
		this._thumbnail_cloner1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._thumbnail_cloner1.ggVisible=true;
		this._thumbnail_cloner1.className='ggskin ggskin_cloner ';
		this._thumbnail_cloner1.ggType='cloner';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 79px;';
		hs+='left : 5px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 7px;';
		hs+='visibility : inherit;';
		hs+='width : 194px;';
		hs+='pointer-events:none;';
		this._thumbnail_cloner1.setAttribute('style',hs);
		this._thumbnail_cloner1.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_cloner1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._thumbnail_cloner1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._thumbnail_cloner1.ggUpdateConditionNodeChange=function () {
			var cnode=me.player.getCurrentNode();
			for(var i=0; i<me._thumbnail_cloner1.childNodes.length; i++) {
				var child=me._thumbnail_cloner1.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							if ((p.scrollLeft + p.clientWidth) < (childOffX + child.clientWidth)) {
								p.scrollLeft = (childOffX + child.clientWidth) - p.clientWidth;
							}
							if ((p.scrollTop + p.clientHeight) < (childOffY + child.clientHeight)) {
								p.scrollTop = (childOffY + child.clientHeight) - p.clientHeight;
							}
							if (childOffX < p.scrollLeft) {
								p.scrollLeft = childOffX;
							}
							if (childOffY < p.scrollTop) {
								p.scrollTop = childOffY;
							}
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		this._thumbnail_cloner1.ggUpdatePosition=function (useTransition) {
			var w=me.player.getViewerSize().width;
			var h=me.player.getViewerSize().height
			if ((!me._thumbnail_cloner1.ggLastSize) || (me._thumbnail_cloner1.ggLastSize.w!=w) || (me._thumbnail_cloner1.ggLastSize.h!=h)) {
				me._thumbnail_cloner1.ggLastSize={ w:w, h:h };
				me._thumbnail_cloner1.ggUpdate();
			}
		}
		this._thumbnail_cloner1.ggNodeChange=function () {
			me._thumbnail_cloner1.ggUpdateConditionNodeChange();
		}
		this._minipano__content.appendChild(this._thumbnail_cloner1);
		this.divSkin.appendChild(this._minipano);
		this._minipanover=document.createElement('div');
		this._minipanover__content=document.createElement('div');
		this._minipanover.ggContent=this._minipanover__content;
		this._minipanover.appendChild(this._minipanover__content);
		hs ='';
		hs+='left : 50%;';
		hs+='margin-left : -97.5px;';
		hs+='margin-top : -43.5px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 50%;';
		this._minipanover__content.setAttribute('style',hs);
		this._minipanover.ggId="minipanover";
		this._minipanover.ggTop=-158;
		this._minipanover.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._minipanover.ggVisible=false;
		this._minipanover.className='ggskin ggskin_scrollarea ';
		this._minipanover.ggType='scrollarea';
		hs ='';
		hs+='-webkit-overflow-scrolling : touch;';
		hs+='border : 1px solid rgba(0, 0, 0, 0);';
		hs+='height : 106px;';
		hs+='left : 0px;';
		hs+='overflow-x : auto;';
		hs+='overflow-y : hidden;';
		hs+='position : absolute;';
		hs+='top : -158px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		this._minipanover.setAttribute('style',hs);
		this._minipanover.style[domTransform + 'Origin']='50% 50%';
		me._minipanover.ggIsActive=function() {
			return false;
		}
		me._minipanover.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		me._minipanover.ggCurrentLogicStateVisible = -1;
		this._minipanover.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(me.player.getIsMobile() == true) && 
				(me.player.getViewerSize().width / me.player.getViewerSize().height < 1)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._minipanover.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._minipanover.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._minipanover.style[domTransition]='';
				if (me._minipanover.ggCurrentLogicStateVisible == 0) {
					me._minipanover.style.visibility=(Number(me._minipanover.style.opacity)>0||!me._minipanover.style.opacity)?'inherit':'hidden';
					me._minipanover.ggVisible=true;
				}
				else {
					me._minipanover.style.visibility="hidden";
					me._minipanover.ggVisible=false;
				}
			}
		}
		this._minipanover.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
			{
				var containerWidth = this.clientWidth;
				var contentWidth = this.ggContent.scrollWidth;
				if (contentWidth < containerWidth) {
					this.ggContent.style.left = '50%';
					this.ggContent.style.marginLeft = (contentWidth/-2) + 'px';
				}
				else {
					this.ggContent.style.left = '0px';
					this.ggContent.style.marginLeft = '0px';
				}
				var containerHeight = this.clientHeight;
				var contentHeight = this.ggContent.scrollHeight;
				if (contentHeight < containerHeight) {
					this.ggContent.style.top = '50%';
					this.ggContent.style.marginTop = (contentHeight/-2) + 'px';
				}
				else {
					this.ggContent.style.top = '0px';
					this.ggContent.style.marginTop = '0px';
				}
			}
		}
		this._thumbnail_cloner0=document.createElement('div');
		this._thumbnail_cloner0.ggNumRepeat = 1;
		this._thumbnail_cloner0.ggWidth = 190;
		this._thumbnail_cloner0.ggHeight = 80;
		this._thumbnail_cloner0.ggUpdating = false;
		this._thumbnail_cloner0.ggFilter = [];
		this._thumbnail_cloner0.ggUpdate = function(filter) {
			if(me._thumbnail_cloner0.ggUpdating == true) return;
			me._thumbnail_cloner0.ggUpdating = true;
			if (typeof filter=='object') {
				me._thumbnail_cloner0.ggFilter = filter;
			} else {
				filter = me._thumbnail_cloner0.ggFilter;
			};
			if (me._thumbnail_cloner0.hasChildNodes() == true) {
				while (me._thumbnail_cloner0.firstChild) {
					me._thumbnail_cloner0.removeChild(me._thumbnail_cloner0.firstChild);
				}
			}
			var tourNodes = me.player.getNodeIds();
			var row = 0;
			var column = 0;
			var numRows = me._thumbnail_cloner0.ggNumRepeat;
			if (numRows < 1) numRows = 1;
			for (i=0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = false;
				if (filter.length > 0) {
					var nodeData = me.player.getNodeUserdata(nodeId);
					for (j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j]) != -1) passed = true;
					}
				}
				else passed = true;
				if (passed) {
					me._thumbnail_cloner0__node = document.createElement('div');
					me._thumbnail_cloner0.appendChild(me._thumbnail_cloner0__node);
					me._thumbnail_cloner0__node.setAttribute('style','position: absolute; top: ' + (row * me._thumbnail_cloner0.ggHeight) + 'px; left:' + (column * me._thumbnail_cloner0.ggWidth) + 'px; height: ' + me._thumbnail_cloner0.ggHeight + 'px; width: ' + me._thumbnail_cloner0.ggWidth + 'px; overflow: hidden;');
					var inst = new SkinCloner_thumbnail_cloner0_Class(nodeId, me);
					me._thumbnail_cloner0__node.appendChild(inst.__div);
					me._thumbnail_cloner0__node.ggObj=inst;
					me.updateSize(inst.__div);
					row++;
					if (row >= numRows) {
						row = 0;
						column++;
					}
				}
			}
			me._thumbnail_cloner0.ggClonerCallChildFunctions('ggUpdateConditionTimer');
			me._thumbnail_cloner0.ggClonerCallChildFunctions('ggNodeChange');
			me._thumbnail_cloner0.ggUpdating = false;
		}
		this._thumbnail_cloner0.ggClonerCallChildFunctions = function(functionname){
			var stack = [];
			var i;
			for(i=0; i<me._thumbnail_cloner0.childNodes.length; i++) {
				stack.push(me._thumbnail_cloner0.childNodes[i]);
			}
			while (stack.length > 0) {
				var e = stack.pop();
				if (typeof e[functionname] == 'function')
					e[functionname]();
				if(e.hasChildNodes()) {
					for(i=0; i<e.childNodes.length; i++) {
						stack.push(e.childNodes[i]);
					}
				}
			}
		}
		this._thumbnail_cloner0.ggTags = [];
		this._thumbnail_cloner0.ggId="Thumbnail Cloner";
		this._thumbnail_cloner0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._thumbnail_cloner0.ggVisible=true;
		this._thumbnail_cloner0.className='ggskin ggskin_cloner ';
		this._thumbnail_cloner0.ggType='cloner';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 79px;';
		hs+='left : 5px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 7px;';
		hs+='visibility : inherit;';
		hs+='width : 189px;';
		hs+='pointer-events:none;';
		this._thumbnail_cloner0.setAttribute('style',hs);
		this._thumbnail_cloner0.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_cloner0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._thumbnail_cloner0.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._thumbnail_cloner0.ggUpdateConditionNodeChange=function () {
			var cnode=me.player.getCurrentNode();
			for(var i=0; i<me._thumbnail_cloner0.childNodes.length; i++) {
				var child=me._thumbnail_cloner0.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							if ((p.scrollLeft + p.clientWidth) < (childOffX + child.clientWidth)) {
								p.scrollLeft = (childOffX + child.clientWidth) - p.clientWidth;
							}
							if ((p.scrollTop + p.clientHeight) < (childOffY + child.clientHeight)) {
								p.scrollTop = (childOffY + child.clientHeight) - p.clientHeight;
							}
							if (childOffX < p.scrollLeft) {
								p.scrollLeft = childOffX;
							}
							if (childOffY < p.scrollTop) {
								p.scrollTop = childOffY;
							}
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		this._thumbnail_cloner0.ggUpdatePosition=function (useTransition) {
			var w=me.player.getViewerSize().width;
			var h=me.player.getViewerSize().height
			if ((!me._thumbnail_cloner0.ggLastSize) || (me._thumbnail_cloner0.ggLastSize.w!=w) || (me._thumbnail_cloner0.ggLastSize.h!=h)) {
				me._thumbnail_cloner0.ggLastSize={ w:w, h:h };
				me._thumbnail_cloner0.ggUpdate();
			}
		}
		this._thumbnail_cloner0.ggNodeChange=function () {
			me._thumbnail_cloner0.ggUpdateConditionNodeChange();
		}
		this._minipanover__content.appendChild(this._thumbnail_cloner0);
		this.divSkin.appendChild(this._minipanover);
		this._minipanohor=document.createElement('div');
		this._minipanohor__content=document.createElement('div');
		this._minipanohor.ggContent=this._minipanohor__content;
		this._minipanohor.appendChild(this._minipanohor__content);
		hs ='';
		hs+='left : 0px;';
		hs+='margin-top : -43.5px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 50%;';
		this._minipanohor__content.setAttribute('style',hs);
		this._minipanohor.ggId="minipanohor";
		this._minipanohor.ggLeft=-180;
		this._minipanohor.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._minipanohor.ggVisible=false;
		this._minipanohor.className='ggskin ggskin_scrollarea ';
		this._minipanohor.ggType='scrollarea';
		hs ='';
		hs+='-webkit-overflow-scrolling : touch;';
		hs+='border : 1px solid rgba(0, 0, 0, 0);';
		hs+='height : 100%;';
		hs+='left : -180px;';
		hs+='overflow-x : hidden;';
		hs+='overflow-y : auto;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 195px;';
		hs+='pointer-events:auto;';
		this._minipanohor.setAttribute('style',hs);
		this._minipanohor.style[domTransform + 'Origin']='50% 50%';
		me._minipanohor.ggIsActive=function() {
			return false;
		}
		me._minipanohor.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		me._minipanohor.ggCurrentLogicStateVisible = -1;
		this._minipanohor.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(me.player.getIsMobile() == true) && 
				(me.player.getViewerSize().width / me.player.getViewerSize().height > 1)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._minipanohor.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._minipanohor.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._minipanohor.style[domTransition]='';
				if (me._minipanohor.ggCurrentLogicStateVisible == 0) {
					me._minipanohor.style.visibility=(Number(me._minipanohor.style.opacity)>0||!me._minipanohor.style.opacity)?'inherit':'hidden';
					me._minipanohor.ggVisible=true;
				}
				else {
					me._minipanohor.style.visibility="hidden";
					me._minipanohor.ggVisible=false;
				}
			}
		}
		this._minipanohor.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
			}
			{
				var containerWidth = this.clientWidth;
				var contentWidth = this.ggContent.scrollWidth;
				if (contentWidth < containerWidth) {
					this.ggContent.style.left = '50%';
					this.ggContent.style.marginLeft = (contentWidth/-2) + 'px';
				}
				else {
					this.ggContent.style.left = '0px';
					this.ggContent.style.marginLeft = '0px';
				}
				var containerHeight = this.clientHeight;
				var contentHeight = this.ggContent.scrollHeight;
				if (contentHeight < containerHeight) {
					this.ggContent.style.top = '50%';
					this.ggContent.style.marginTop = (contentHeight/-2) + 'px';
				}
				else {
					this.ggContent.style.top = '0px';
					this.ggContent.style.marginTop = '0px';
				}
			}
		}
		this._thumbnail_cloner=document.createElement('div');
		this._thumbnail_cloner.ggNumRepeat = 1;
		this._thumbnail_cloner.ggWidth = 190;
		this._thumbnail_cloner.ggHeight = 80;
		this._thumbnail_cloner.ggUpdating = false;
		this._thumbnail_cloner.ggFilter = [];
		this._thumbnail_cloner.ggUpdate = function(filter) {
			if(me._thumbnail_cloner.ggUpdating == true) return;
			me._thumbnail_cloner.ggUpdating = true;
			if (typeof filter=='object') {
				me._thumbnail_cloner.ggFilter = filter;
			} else {
				filter = me._thumbnail_cloner.ggFilter;
			};
			if (me._thumbnail_cloner.hasChildNodes() == true) {
				while (me._thumbnail_cloner.firstChild) {
					me._thumbnail_cloner.removeChild(me._thumbnail_cloner.firstChild);
				}
			}
			var tourNodes = me.player.getNodeIds();
			var row = 0;
			var column = 0;
			var numCols = me._thumbnail_cloner.ggNumRepeat;
			if (numCols < 1) numCols = 1;
			for (i=0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = false;
				if (filter.length > 0) {
					var nodeData = me.player.getNodeUserdata(nodeId);
					for (j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j]) != -1) passed = true;
					}
				}
				else passed = true;
				if (passed) {
					me._thumbnail_cloner__node = document.createElement('div');
					me._thumbnail_cloner.appendChild(me._thumbnail_cloner__node);
					me._thumbnail_cloner__node.setAttribute('style','position: absolute; top: ' + (row * me._thumbnail_cloner.ggHeight) + 'px; left:' + (column * me._thumbnail_cloner.ggWidth) + 'px; height: ' + me._thumbnail_cloner.ggHeight + 'px; width: ' + me._thumbnail_cloner.ggWidth + 'px; overflow: hidden;');
					var inst = new SkinCloner_thumbnail_cloner_Class(nodeId, me);
					me._thumbnail_cloner__node.appendChild(inst.__div);
					me._thumbnail_cloner__node.ggObj=inst;
					me.updateSize(inst.__div);
					column++;
					if (column >= numCols) {
						column = 0;
						row++;
					}
				}
			}
			me._thumbnail_cloner.ggClonerCallChildFunctions('ggUpdateConditionTimer');
			me._thumbnail_cloner.ggClonerCallChildFunctions('ggNodeChange');
			me._thumbnail_cloner.ggUpdating = false;
		}
		this._thumbnail_cloner.ggClonerCallChildFunctions = function(functionname){
			var stack = [];
			var i;
			for(i=0; i<me._thumbnail_cloner.childNodes.length; i++) {
				stack.push(me._thumbnail_cloner.childNodes[i]);
			}
			while (stack.length > 0) {
				var e = stack.pop();
				if (typeof e[functionname] == 'function')
					e[functionname]();
				if(e.hasChildNodes()) {
					for(i=0; i<e.childNodes.length; i++) {
						stack.push(e.childNodes[i]);
					}
				}
			}
		}
		this._thumbnail_cloner.ggTags = [];
		this._thumbnail_cloner.ggId="Thumbnail Cloner";
		this._thumbnail_cloner.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._thumbnail_cloner.ggVisible=true;
		this._thumbnail_cloner.className='ggskin ggskin_cloner ';
		this._thumbnail_cloner.ggType='cloner';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 79px;';
		hs+='left : 5px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 7px;';
		hs+='visibility : inherit;';
		hs+='width : 189px;';
		hs+='pointer-events:none;';
		this._thumbnail_cloner.setAttribute('style',hs);
		this._thumbnail_cloner.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_cloner.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._thumbnail_cloner.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._thumbnail_cloner.ggUpdateConditionNodeChange=function () {
			var cnode=me.player.getCurrentNode();
			for(var i=0; i<me._thumbnail_cloner.childNodes.length; i++) {
				var child=me._thumbnail_cloner.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							if ((p.scrollLeft + p.clientWidth) < (childOffX + child.clientWidth)) {
								p.scrollLeft = (childOffX + child.clientWidth) - p.clientWidth;
							}
							if ((p.scrollTop + p.clientHeight) < (childOffY + child.clientHeight)) {
								p.scrollTop = (childOffY + child.clientHeight) - p.clientHeight;
							}
							if (childOffX < p.scrollLeft) {
								p.scrollLeft = childOffX;
							}
							if (childOffY < p.scrollTop) {
								p.scrollTop = childOffY;
							}
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		this._thumbnail_cloner.ggUpdatePosition=function (useTransition) {
			var w=me.player.getViewerSize().width;
			var h=me.player.getViewerSize().height
			if ((!me._thumbnail_cloner.ggLastSize) || (me._thumbnail_cloner.ggLastSize.w!=w) || (me._thumbnail_cloner.ggLastSize.h!=h)) {
				me._thumbnail_cloner.ggLastSize={ w:w, h:h };
				me._thumbnail_cloner.ggUpdate();
			}
		}
		this._thumbnail_cloner.ggNodeChange=function () {
			me._thumbnail_cloner.ggUpdateConditionNodeChange();
		}
		this._minipanohor__content.appendChild(this._thumbnail_cloner);
		this.divSkin.appendChild(this._minipanohor);
		this._timer_1=document.createElement('div');
		this._timer_1.ggTimestamp=this.ggCurrentTime;
		this._timer_1.ggLastIsActive=true;
		this._timer_1.ggTimeout=1000;
		this._timer_1.ggId="Timer 1";
		this._timer_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._timer_1.ggVisible=true;
		this._timer_1.className='ggskin ggskin_timer ';
		this._timer_1.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 270px;';
		hs+='position : absolute;';
		hs+='top : 488px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		this._timer_1.setAttribute('style',hs);
		this._timer_1.style[domTransform + 'Origin']='50% 50%';
		me._timer_1.ggIsActive=function() {
			return (me._timer_1.ggTimestamp==0 ? false : (Math.floor((me.ggCurrentTime - me._timer_1.ggTimestamp) / me._timer_1.ggTimeout) % 2 == 0));
		}
		me._timer_1.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._timer_1.ggActivate=function () {
			ggSkinVars['ht_anivar1'] = true;
		}
		this._timer_1.ggDeactivate=function () {
			ggSkinVars['ht_anivar1'] = false;
		}
		this._timer_1.ggUpdatePosition=function (useTransition) {
		}
		this.divSkin.appendChild(this._timer_1);
		this._loading=document.createElement('div');
		this._loading.ggId="loading";
		this._loading.ggLeft=-101;
		this._loading.ggTop=-63;
		this._loading.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loading.ggVisible=true;
		this._loading.className='ggskin ggskin_container ';
		this._loading.ggType='container';
		hs ='';
		hs+='height : 60px;';
		hs+='left : -101px;';
		hs+='position : absolute;';
		hs+='top : -63px;';
		hs+='visibility : inherit;';
		hs+='width : 210px;';
		hs+='pointer-events:none;';
		this._loading.setAttribute('style',hs);
		this._loading.style[domTransform + 'Origin']='50% 50%';
		me._loading.ggIsActive=function() {
			return false;
		}
		me._loading.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._loading.onclick=function (e) {
			me._loading.style[domTransition]='none';
			me._loading.style.visibility='hidden';
			me._loading.ggVisible=false;
		}
		this._loading.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._loadingbg=document.createElement('div');
		this._loadingbg.ggId="loadingbg";
		this._loadingbg.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loadingbg.ggVisible=true;
		this._loadingbg.className='ggskin ggskin_rectangle ';
		this._loadingbg.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 14px;';
		hs+='border-radius : 14px;';
		hs+='background : rgba(53,159,15,0.666667);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 60px;';
		hs+='left : 0px;';
		hs+='opacity : 0.5;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 210px;';
		hs+='pointer-events:auto;';
		this._loadingbg.setAttribute('style',hs);
		this._loadingbg.style[domTransform + 'Origin']='50% 50%';
		me._loadingbg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._loadingbg.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._loadingbg.ggUpdatePosition=function (useTransition) {
		}
		this._loading.appendChild(this._loadingbg);
		this._loadingtext=document.createElement('div');
		this._loadingtext__text=document.createElement('div');
		this._loadingtext.className='ggskin ggskin_textdiv';
		this._loadingtext.ggTextDiv=this._loadingtext__text;
		this._loadingtext.ggId="loadingtext";
		this._loadingtext.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loadingtext.ggVisible=true;
		this._loadingtext.className='ggskin ggskin_text ';
		this._loadingtext.ggType='text';
		hs ='';
		hs+='height : 23px;';
		hs+='left : 16px;';
		hs+='position : absolute;';
		hs+='top : 12px;';
		hs+='visibility : inherit;';
		hs+='width : 176px;';
		hs+='pointer-events:auto;';
		this._loadingtext.setAttribute('style',hs);
		this._loadingtext.style[domTransform + 'Origin']='0% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._loadingtext__text.setAttribute('style',hs);
		this._loadingtext.ggUpdateText=function() {
			var hs="\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f.... "+(me.player.getPercentLoaded()*100.0).toFixed(0)+"%";
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._loadingtext.ggUpdateText();
		this._loadingtext.appendChild(this._loadingtext__text);
		me._loadingtext.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._loadingtext.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._loadingtext.ggUpdatePosition=function (useTransition) {
		}
		this._loading.appendChild(this._loadingtext);
		this._loadingbar=document.createElement('div');
		this._loadingbar.ggId="loadingbar";
		this._loadingbar.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loadingbar.ggVisible=true;
		this._loadingbar.className='ggskin ggskin_rectangle ';
		this._loadingbar.ggType='rectangle';
		hs ='';
		hs+='background : #177d07;';
		hs+='border : 0px solid #808080;';
		hs+='cursor : default;';
		hs+='height : 13px;';
		hs+='left : 15px;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : inherit;';
		hs+='width : 182px;';
		hs+='pointer-events:auto;';
		this._loadingbar.setAttribute('style',hs);
		this._loadingbar.style[domTransform + 'Origin']='0% 50%';
		me._loadingbar.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._loadingbar.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._loadingbar.ggUpdatePosition=function (useTransition) {
		}
		this._loading.appendChild(this._loadingbar);
		this.divSkin.appendChild(this._loading);
		this._information=document.createElement('div');
		this._information.ggId="information";
		this._information.ggLeft=-142;
		this._information.ggTop=-181;
		this._information.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._information.ggVisible=false;
		this._information.className='ggskin ggskin_container ';
		this._information.ggType='container';
		hs ='';
		hs+='height : 133px;';
		hs+='left : -142px;';
		hs+='position : absolute;';
		hs+='top : -181px;';
		hs+='visibility : hidden;';
		hs+='width : 300px;';
		hs+='pointer-events:none;';
		this._information.setAttribute('style',hs);
		this._information.style[domTransform + 'Origin']='50% 50%';
		me._information.ggIsActive=function() {
			return false;
		}
		me._information.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._information.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._information_bg=document.createElement('div');
		this._information_bg.ggId="information_bg";
		this._information_bg.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._information_bg.ggVisible=true;
		this._information_bg.className='ggskin ggskin_rectangle ';
		this._information_bg.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 5px;';
		hs+='border-radius : 5px;';
		hs+='background : rgba(232,216,40,0.666667);';
		hs+='border : 1px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 134px;';
		hs+='left : -16px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 315px;';
		hs+='pointer-events:auto;';
		this._information_bg.setAttribute('style',hs);
		this._information_bg.style[domTransform + 'Origin']='50% 50%';
		me._information_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._information_bg.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._information_bg.ggUpdatePosition=function (useTransition) {
		}
		this._information.appendChild(this._information_bg);
		this._info_text_body=document.createElement('div');
		this._info_text_body__text=document.createElement('div');
		this._info_text_body.className='ggskin ggskin_textdiv';
		this._info_text_body.ggTextDiv=this._info_text_body__text;
		this._info_text_body.ggId="info_text_body";
		this._info_text_body.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._info_text_body.ggVisible=true;
		this._info_text_body.className='ggskin ggskin_text ';
		this._info_text_body.ggType='text';
		hs ='';
		hs+='height : 91px;';
		hs+='left : 3px;';
		hs+='position : absolute;';
		hs+='top : 30px;';
		hs+='visibility : inherit;';
		hs+='width : 274px;';
		hs+='pointer-events:auto;';
		this._info_text_body.setAttribute('style',hs);
		this._info_text_body.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 274px;';
		hs+='height: 91px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		this._info_text_body__text.setAttribute('style',hs);
		this._info_text_body__text.innerHTML="3\u0414-\u0422\u0443\u0440 \u0440\u043e\u0437\u0440\u043e\u0431\u0438\u0432 \u0417\u0430\u0432\u0433\u043e\u0440\u043e\u0434\u043d\u0456\u0439 \u0414.<br\/><br\/>www.zavgorodniy.net<br\/><br\/>+38 (050) 178 05 00";
		this._info_text_body.appendChild(this._info_text_body__text);
		me._info_text_body.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._info_text_body.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._info_text_body.ggCurrentLogicStateVisible = -1;
		this._info_text_body.ggUpdateConditionNodeChange=function () {
			var newLogicStateVisible;
			if (
				(me.player.getIsMobile() == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._info_text_body.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._info_text_body.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._info_text_body.style[domTransition]='';
				if (me._info_text_body.ggCurrentLogicStateVisible == 0) {
					me._info_text_body.style.visibility=(Number(me._info_text_body.style.opacity)>0||!me._info_text_body.style.opacity)?'inherit':'hidden';
					me._info_text_body.ggVisible=true;
				}
				else {
					me._info_text_body.style.visibility=(Number(me._info_text_body.style.opacity)>0||!me._info_text_body.style.opacity)?'inherit':'hidden';
					me._info_text_body.ggVisible=true;
				}
			}
		}
		this._info_text_body.ggUpdatePosition=function (useTransition) {
		}
		this._info_text_body.ggNodeChange=function () {
			me._info_text_body.ggUpdateConditionNodeChange();
		}
		this._information.appendChild(this._info_text_body);
		this._info_popup_close=document.createElement('div');
		this._info_popup_close__img=document.createElement('img');
		this._info_popup_close__img.className='ggskin ggskin_svg';
		this._info_popup_close__img.setAttribute('src',basePath + 'images/info_popup_close.svg');
		this._info_popup_close__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._info_popup_close__img['ondragstart']=function() { return false; };
		this._info_popup_close.appendChild(this._info_popup_close__img);
		this._info_popup_close__imgo=document.createElement('img');
		this._info_popup_close__imgo.className='ggskin ggskin_svg';
		this._info_popup_close__imgo.setAttribute('src',basePath + 'images/info_popup_close__o.svg');
		this._info_popup_close__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._info_popup_close__imgo['ondragstart']=function() { return false; };
		this._info_popup_close.appendChild(this._info_popup_close__imgo);
		this._info_popup_close.ggId="info_popup_close";
		this._info_popup_close.ggLeft=-37;
		this._info_popup_close.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._info_popup_close.ggVisible=false;
		this._info_popup_close.className='ggskin ggskin_svg ';
		this._info_popup_close.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -37px;';
		hs+='position : absolute;';
		hs+='top : 4px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._info_popup_close.setAttribute('style',hs);
		this._info_popup_close.style[domTransform + 'Origin']='50% 50%';
		me._info_popup_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._info_popup_close.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._info_popup_close.onclick=function (e) {
			me._information.style[domTransition]='none';
			me._information.style.visibility='hidden';
			me._information.ggVisible=false;
		}
		this._info_popup_close.onmouseover=function (e) {
			me._info_popup_close__img.style.visibility='hidden';
			me._info_popup_close__imgo.style.visibility='inherit';
		}
		this._info_popup_close.onmouseout=function (e) {
			me._info_popup_close__img.style.visibility='inherit';
			me._info_popup_close__imgo.style.visibility='hidden';
		}
		this._info_popup_close.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
			}
		}
		this._information.appendChild(this._info_popup_close);
		this.divSkin.appendChild(this._information);
		this._image_1=document.createElement('div');
		this._image_1__img=document.createElement('img');
		this._image_1__img.className='ggskin ggskin_image';
		this._image_1__img.setAttribute('src',basePath + 'images/image_1.png');
		this._image_1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._image_1__img.className='ggskin ggskin_image';
		this._image_1__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._image_1__img);
		this._image_1.appendChild(this._image_1__img);
		this._image_1.ggId="Image 1";
		this._image_1.ggTop=-42;
		this._image_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._image_1.ggVisible=true;
		this._image_1.className='ggskin ggskin_image ';
		this._image_1.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 37px;';
		hs+='left : 52px;';
		hs+='opacity : 0.70007;';
		hs+='position : absolute;';
		hs+='top : -42px;';
		hs+='visibility : inherit;';
		hs+='width : 37px;';
		hs+='pointer-events:auto;';
		this._image_1.setAttribute('style',hs);
		this._image_1.style[domTransform + 'Origin']='50% 50%';
		me._image_1.ggIsActive=function() {
			return false;
		}
		me._image_1.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._image_1.onclick=function (e) {
			me._information.style[domTransition]='none';
			me._information.style.visibility=(Number(me._information.style.opacity)>0||!me._information.style.opacity)?'inherit':'hidden';
			me._information.ggVisible=true;
			me._info_popup_close.style[domTransition]='none';
			me._info_popup_close.style.visibility=(Number(me._info_popup_close.style.opacity)>0||!me._info_popup_close.style.opacity)?'inherit':'hidden';
			me._info_popup_close.ggVisible=true;
			me._info_text_body.style[domTransition]='none';
			me._info_text_body.style.visibility=(Number(me._info_text_body.style.opacity)>0||!me._info_text_body.style.opacity)?'inherit':'hidden';
			me._info_text_body.ggVisible=true;
		}
		this._image_1.onmouseover=function (e) {
			me.elementMouseOver['image_1']=true;
		}
		this._image_1.onmouseout=function (e) {
			me.elementMouseOver['image_1']=false;
		}
		this._image_1.ontouchend=function (e) {
			me.elementMouseOver['image_1']=false;
		}
		me._image_1.ggCurrentLogicStateVisible = -1;
		me._image_1.ggCurrentLogicStateAlpha = -1;
		this._image_1.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['image_1'] == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._image_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_1.style[domTransition]='opacity none, visibility none';
				if (me._image_1.ggCurrentLogicStateVisible == 0) {
					me._image_1.style.visibility=(Number(me._image_1.style.opacity)>0||!me._image_1.style.opacity)?'inherit':'hidden';
					me._image_1.ggVisible=true;
				}
				else {
					me._image_1.style.visibility=(Number(me._image_1.style.opacity)>0||!me._image_1.style.opacity)?'inherit':'hidden';
					me._image_1.ggVisible=true;
				}
			}
			var newLogicStateAlpha;
			if (
				(me.elementMouseOver['image_1'] == true)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._image_1.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._image_1.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._image_1.style[domTransition]='opacity none, visibility none';
				if (me._image_1.ggCurrentLogicStateAlpha == 0) {
					me._image_1.style.visibility=me._image_1.ggVisible?'inherit':'hidden';
					me._image_1.style.opacity=1;
				}
				else {
					me._image_1.style.visibility=me._image_1.ggVisible?'inherit':'hidden';
					me._image_1.style.opacity=0.70007;
				}
			}
		}
		this._image_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this.divSkin.appendChild(this._image_1);
		this._container_1=document.createElement('div');
		this._container_1.ggId="Container 1";
		this._container_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._container_1.ggVisible=true;
		this._container_1.className='ggskin ggskin_container ';
		this._container_1.ggType='container';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 685px;';
		hs+='position : absolute;';
		hs+='top : 568px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		this._container_1.setAttribute('style',hs);
		this._container_1.style[domTransform + 'Origin']='50% 50%';
		me._container_1.ggIsActive=function() {
			return false;
		}
		me._container_1.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._container_1.ggUpdatePosition=function (useTransition) {
		}
		this.divSkin.appendChild(this._container_1);
		this._image_4=document.createElement('div');
		this._image_4__img=document.createElement('img');
		this._image_4__img.className='ggskin ggskin_image';
		this._image_4__img.setAttribute('src',basePath + 'images/image_4.png');
		this._image_4__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._image_4__img.className='ggskin ggskin_image';
		this._image_4__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._image_4__img);
		this._image_4.appendChild(this._image_4__img);
		this._image_4.ggId="Image 4";
		this._image_4.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._image_4.ggVisible=false;
		this._image_4.className='ggskin ggskin_image ';
		this._image_4.ggType='image';
		hs ='';
		hs+='height : 79px;';
		hs+='left : 9px;';
		hs+='position : absolute;';
		hs+='top : 6px;';
		hs+='visibility : hidden;';
		hs+='width : 174px;';
		hs+='pointer-events:auto;';
		this._image_4.setAttribute('style',hs);
		this._image_4.style[domTransform + 'Origin']='50% 50%';
		me._image_4.ggIsActive=function() {
			return false;
		}
		me._image_4.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		me._image_4.ggCurrentLogicStateVisible = -1;
		this._image_4.ggUpdateConditionResize=function () {
			var newLogicStateVisible;
			if (
				(me.player.getIsFullscreen() == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._image_4.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_4.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_4.style[domTransition]='';
				if (me._image_4.ggCurrentLogicStateVisible == 0) {
					me._image_4.style.visibility=(Number(me._image_4.style.opacity)>0||!me._image_4.style.opacity)?'inherit':'hidden';
					me._image_4.ggVisible=true;
				}
				else {
					me._image_4.style.visibility="hidden";
					me._image_4.ggVisible=false;
				}
			}
		}
		this._image_4.ggUpdatePosition=function (useTransition) {
			me._image_4.ggUpdateConditionResize();
		}
		this.divSkin.appendChild(this._image_4);
		this.divSkin.ggUpdateSize=function(w,h) {
			me.updateSize(me.divSkin);
		}
		this.divSkin.ggViewerInit=function() {
			me._thumbnail_cloner1.ggUpdate(me._thumbnail_cloner1.ggTags);
			me._thumbnail_cloner0.ggUpdate(me._thumbnail_cloner0.ggTags);
			me._thumbnail_cloner.ggUpdate(me._thumbnail_cloner.ggTags);
		}
		this.divSkin.ggLoaded=function() {
			me._loading.style[domTransition]='none';
			me._loading.style.visibility='hidden';
			me._loading.ggVisible=false;
		}
		this.divSkin.ggReLoaded=function() {
			me._loading.style[domTransition]='none';
			me._loading.style.visibility=(Number(me._loading.style.opacity)>0||!me._loading.style.opacity)?'inherit':'hidden';
			me._loading.ggVisible=true;
		}
		this.divSkin.ggLoadedLevels=function() {
		}
		this.divSkin.ggReLoadedLevels=function() {
		}
		this.divSkin.ggEnterFullscreen=function() {
		}
		this.divSkin.ggExitFullscreen=function() {
		}
		this.skinTimerEvent();
	};
	this.hotspotProxyClick=function(id) {
	}
	this.hotspotProxyOver=function(id) {
	}
	this.hotspotProxyOut=function(id) {
	}
	this.ggHotspotCallChildFunctions=function(functionname) {
		var stack = me.player.getCurrentPointHotspots();
		while (stack.length > 0) {
			var e = stack.pop();
			if (typeof e[functionname] == 'function') {
				e[functionname]();
			}
			if(e.hasChildNodes()) {
				for(var i=0; i<e.childNodes.length; i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	this.changeActiveNode=function(id) {
		me.ggUserdata=me.player.userdata;
		me._rectangle_3.ggNodeChange();
		me._controller2.ggNodeChange();
		me._controller.ggNodeChange();
		me._controller3.ggNodeChange();
		me._minipano.ggNodeChange();
		me._thumbnail_cloner1.ggNodeChange();
		me._thumbnail_cloner1.ggClonerCallChildFunctions('ggNodeChange');
		me._thumbnail_cloner0.ggNodeChange();
		me._thumbnail_cloner0.ggClonerCallChildFunctions('ggNodeChange');
		me._thumbnail_cloner.ggNodeChange();
		me._thumbnail_cloner.ggClonerCallChildFunctions('ggNodeChange');
		me._info_text_body.ggNodeChange();
	}
	this.skinTimerEvent=function() {
		setTimeout(function() { me.skinTimerEvent(); }, 10);
		me.ggCurrentTime=new Date().getTime();
		if (me.elementMouseOver['image_2']) {
		}
		me._image_2.ggUpdateConditionTimer();
		if (me.elementMouseOver['image_3']) {
		}
		me._image_3.ggUpdateConditionTimer();
		if (me.elementMouseDown['move_right']) {
			me.player.changePanLog(-1.5,true);
		}
		if (me.elementMouseOver['move_right']) {
		}
		me._move_right.ggUpdateConditionTimer();
		if (me.elementMouseDown['move_left']) {
			me.player.changePanLog(1.5,true);
		}
		if (me.elementMouseOver['move_left']) {
		}
		me._move_left.ggUpdateConditionTimer();
		if (me.elementMouseDown['move_up']) {
			me.player.changeTiltLog(1,true);
		}
		if (me.elementMouseOver['move_up']) {
		}
		me._move_up.ggUpdateConditionTimer();
		if (me.elementMouseDown['move_down']) {
			me.player.changeTiltLog(-1,true);
		}
		if (me.elementMouseOver['move_down']) {
		}
		me._move_down.ggUpdateConditionTimer();
		if (me.elementMouseDown['zoom_out']) {
			me.player.changeFovLog(1,true);
		}
		if (me.elementMouseOver['zoom_out']) {
		}
		me._zoom_out.ggUpdateConditionTimer();
		if (me.elementMouseDown['zoom_in']) {
			me.player.changeFovLog(-1,true);
		}
		if (me.elementMouseOver['zoom_in']) {
		}
		me._zoom_in.ggUpdateConditionTimer();
		if (me.elementMouseOver['hiidemenu']) {
		}
		me._hiidemenu.ggUpdateConditionTimer();
		me._thumbnail_cloner1.ggClonerCallChildFunctions('ggUpdateConditionTimer');
		me._minipanover.ggUpdateConditionTimer();
		me._thumbnail_cloner0.ggClonerCallChildFunctions('ggUpdateConditionTimer');
		me._minipanohor.ggUpdateConditionTimer();
		me._thumbnail_cloner.ggClonerCallChildFunctions('ggUpdateConditionTimer');
		if (me._timer_1.ggLastIsActive!=me._timer_1.ggIsActive()) {
			me._timer_1.ggLastIsActive=me._timer_1.ggIsActive();
			if (me._timer_1.ggLastIsActive) {
				ggSkinVars['ht_anivar1'] = true;
			} else {
				ggSkinVars['ht_anivar1'] = false;
			}
		}
		me._loadingtext.ggUpdateText();
		var hs='';
		if (me._loadingbar.ggParameter) {
			hs+=parameterToTransform(me._loadingbar.ggParameter) + ' ';
		}
		hs+='scale(' + (1 * me.player.getPercentLoaded() + 0) + ',1.0) ';
		me._loadingbar.style[domTransform]=hs;
		if (me.elementMouseOver['image_1']) {
		}
		me._image_1.ggUpdateConditionTimer();
		me.ggHotspotCallChildFunctions('ggUpdateConditionTimer');
	};
	function SkinHotspotClass(skinObj,hotspot) {
		var me=this;
		var flag=false;
		this.player=skinObj.player;
		this.skin=skinObj;
		this.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		this.ggUserdata=this.skin.player.getNodeUserdata(nodeId);
		this.elementMouseDown=[];
		this.elementMouseOver=[];
		
		this.findElements=function(id,regex) {
			return me.skin.findElements(id,regex);
		}
		
		{
			this.__div=document.createElement('div');
			this.__div.ggId="ht_node";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 5px;';
			hs+='left : 146px;';
			hs+='position : absolute;';
			hs+='top : 279px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			hs+='pointer-events:auto;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function (e) {
				me.player.startAutorotate("0.05");
				me.player.openNext(me.hotspot.url,me.hotspot.target);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function (e) {
				me.player.setActiveHotspot(me.hotspot);
				me.player.stopAutorotate();
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function (e) {
				me.player.setActiveHotspot(null);
				me.player.startAutorotate("0.05");
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function (useTransition) {
			}
			this._upanicircle=document.createElement('div');
			this._upanicircle.ggId="upanicircle";
			this._upanicircle.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._upanicircle.ggVisible=true;
			this._upanicircle.className='ggskin ggskin_container ';
			this._upanicircle.ggType='container';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 60px;';
			hs+='left : -30px;';
			hs+='position : absolute;';
			hs+='top : -29px;';
			hs+='visibility : inherit;';
			hs+='width : 60px;';
			hs+='pointer-events:none;';
			this._upanicircle.setAttribute('style',hs);
			this._upanicircle.style[domTransform + 'Origin']='50% 50%';
			me._upanicircle.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._upanicircle.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._upanicircle.ggUpdatePosition=function (useTransition) {
			}
			this._rectangle_1=document.createElement('div');
			this._rectangle_1.ggId="Rectangle 1";
			this._rectangle_1.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5 };
			this._rectangle_1.ggVisible=true;
			this._rectangle_1.className='ggskin ggskin_rectangle ';
			this._rectangle_1.ggType='rectangle';
			hs ='';
			hs+=cssPrefix + 'border-radius : 999px;';
			hs+='border-radius : 999px;';
			hs+='border : 4px solid #6b44a3;';
			hs+='cursor : pointer;';
			hs+='height : 76px;';
			hs+='left : -11px;';
			hs+='position : absolute;';
			hs+='top : -12px;';
			hs+='visibility : inherit;';
			hs+='width : 76px;';
			hs+='pointer-events:auto;';
			this._rectangle_1.setAttribute('style',hs);
			this._rectangle_1.style[domTransform + 'Origin']='50% 50%';
			this._rectangle_1.style[domTransform]=parameterToTransform(this._rectangle_1.ggParameter);
			me._rectangle_1.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._rectangle_1.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			me._rectangle_1.ggCurrentLogicStateScaling = -1;
			me._rectangle_1.ggCurrentLogicStateAlpha = -1;
			me._rectangle_1.ggCurrentLogicStateBorderColor = -1;
			this._rectangle_1.ggUpdateConditionTimer=function () {
				var newLogicStateScaling;
				if (
					(ggSkinVars['ht_anivar1'] == true)
				)
				{
					newLogicStateScaling = 0;
				}
				else {
					newLogicStateScaling = -1;
				}
				if (me._rectangle_1.ggCurrentLogicStateScaling != newLogicStateScaling) {
					me._rectangle_1.ggCurrentLogicStateScaling = newLogicStateScaling;
					me._rectangle_1.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms, opacity 1000ms ease 0ms, visibility 1000ms ease 0ms, border-color 1000ms ease 0ms';
					if (me._rectangle_1.ggCurrentLogicStateScaling == 0) {
						me._rectangle_1.ggParameter.sx = 1;
						me._rectangle_1.ggParameter.sy = 1;
						me._rectangle_1.style[domTransform]=parameterToTransform(me._rectangle_1.ggParameter);
					}
					else {
						me._rectangle_1.ggParameter.sx = 0.5;
						me._rectangle_1.ggParameter.sy = 0.5;
						me._rectangle_1.style[domTransform]=parameterToTransform(me._rectangle_1.ggParameter);
					}
				}
				var newLogicStateAlpha;
				if (
					(ggSkinVars['ht_anivar1'] == true)
				)
				{
					newLogicStateAlpha = 0;
				}
				else {
					newLogicStateAlpha = -1;
				}
				if (me._rectangle_1.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
					me._rectangle_1.ggCurrentLogicStateAlpha = newLogicStateAlpha;
					me._rectangle_1.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms, opacity 1000ms ease 0ms, visibility 1000ms ease 0ms, border-color 1000ms ease 0ms';
					if (me._rectangle_1.ggCurrentLogicStateAlpha == 0) {
						me._rectangle_1.style.visibility="hidden";
						me._rectangle_1.style.opacity=0;
					}
					else {
						me._rectangle_1.style.visibility=me._rectangle_1.ggVisible?'inherit':'hidden';
						me._rectangle_1.style.opacity=1;
					}
				}
				var newLogicStateBorderColor;
				if (
					(ggSkinVars['ht_anivar1'] == true)
				)
				{
					newLogicStateBorderColor = 0;
				}
				else {
					newLogicStateBorderColor = -1;
				}
				if (me._rectangle_1.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
					me._rectangle_1.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
					me._rectangle_1.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms, opacity 1000ms ease 0ms, visibility 1000ms ease 0ms, border-color 1000ms ease 0ms';
					if (me._rectangle_1.ggCurrentLogicStateBorderColor == 0) {
						me._rectangle_1.style.borderColor="rgba(255,255,255,1)";
					}
					else {
						me._rectangle_1.style.borderColor="rgba(107,68,163,1)";
					}
				}
			}
			this._rectangle_1.ggUpdatePosition=function (useTransition) {
			}
			this._upanicircle.appendChild(this._rectangle_1);
			this._rectangle_2=document.createElement('div');
			this._rectangle_2.ggId="Rectangle 2";
			this._rectangle_2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._rectangle_2.ggVisible=true;
			this._rectangle_2.className='ggskin ggskin_rectangle ';
			this._rectangle_2.ggType='rectangle';
			hs ='';
			hs+=cssPrefix + 'border-radius : 999px;';
			hs+='border-radius : 999px;';
			hs+='border : 4px solid #19950b;';
			hs+='cursor : pointer;';
			hs+='height : 76px;';
			hs+='left : -12px;';
			hs+='opacity : 0;';
			hs+='position : absolute;';
			hs+='top : -12px;';
			hs+='visibility : hidden;';
			hs+='width : 76px;';
			hs+='pointer-events:auto;';
			this._rectangle_2.setAttribute('style',hs);
			this._rectangle_2.style[domTransform + 'Origin']='50% 50%';
			me._rectangle_2.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._rectangle_2.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			me._rectangle_2.ggCurrentLogicStateScaling = -1;
			me._rectangle_2.ggCurrentLogicStateAlpha = -1;
			me._rectangle_2.ggCurrentLogicStateBorderColor = -1;
			this._rectangle_2.ggUpdateConditionTimer=function () {
				var newLogicStateScaling;
				if (
					(ggSkinVars['ht_anivar1'] == true)
				)
				{
					newLogicStateScaling = 0;
				}
				else {
					newLogicStateScaling = -1;
				}
				if (me._rectangle_2.ggCurrentLogicStateScaling != newLogicStateScaling) {
					me._rectangle_2.ggCurrentLogicStateScaling = newLogicStateScaling;
					me._rectangle_2.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms, opacity 1000ms ease 0ms, visibility 1000ms ease 0ms, border-color 1000ms ease 0ms';
					if (me._rectangle_2.ggCurrentLogicStateScaling == 0) {
						me._rectangle_2.ggParameter.sx = 0.5;
						me._rectangle_2.ggParameter.sy = 0.5;
						me._rectangle_2.style[domTransform]=parameterToTransform(me._rectangle_2.ggParameter);
					}
					else {
						me._rectangle_2.ggParameter.sx = 1;
						me._rectangle_2.ggParameter.sy = 1;
						me._rectangle_2.style[domTransform]=parameterToTransform(me._rectangle_2.ggParameter);
					}
				}
				var newLogicStateAlpha;
				if (
					(ggSkinVars['ht_anivar1'] == true)
				)
				{
					newLogicStateAlpha = 0;
				}
				else {
					newLogicStateAlpha = -1;
				}
				if (me._rectangle_2.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
					me._rectangle_2.ggCurrentLogicStateAlpha = newLogicStateAlpha;
					me._rectangle_2.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms, opacity 1000ms ease 0ms, visibility 1000ms ease 0ms, border-color 1000ms ease 0ms';
					if (me._rectangle_2.ggCurrentLogicStateAlpha == 0) {
						me._rectangle_2.style.visibility=me._rectangle_2.ggVisible?'inherit':'hidden';
						me._rectangle_2.style.opacity=1;
					}
					else {
						me._rectangle_2.style.visibility="hidden";
						me._rectangle_2.style.opacity=0;
					}
				}
				var newLogicStateBorderColor;
				if (
					(ggSkinVars['ht_anivar1'] == true)
				)
				{
					newLogicStateBorderColor = 0;
				}
				else {
					newLogicStateBorderColor = -1;
				}
				if (me._rectangle_2.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
					me._rectangle_2.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
					me._rectangle_2.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms, opacity 1000ms ease 0ms, visibility 1000ms ease 0ms, border-color 1000ms ease 0ms';
					if (me._rectangle_2.ggCurrentLogicStateBorderColor == 0) {
						me._rectangle_2.style.borderColor="rgba(255,255,255,1)";
					}
					else {
						me._rectangle_2.style.borderColor="rgba(25,149,11,1)";
					}
				}
			}
			this._rectangle_2.ggUpdatePosition=function (useTransition) {
			}
			this._upanicircle.appendChild(this._rectangle_2);
			this.__div.appendChild(this._upanicircle);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				me._rectangle_1.ggUpdateConditionTimer();
				me._rectangle_2.ggUpdateConditionTimer();
			}
			this.hotspotTimerEvent();
		}
	};
	this.addSkinHotspot=function(hotspot) {
		return new SkinHotspotClass(me,hotspot);
	}
	function SkinCloner_thumbnail_cloner1_Class(nodeId, parent) {
		var me=this;
		this.skin=parent;
		this.player=this.skin.player;
		this.findElements=this.skin.findElements;
		this.ggNodeId=nodeId;
		this.ggUserdata=this.skin.player.getNodeUserdata(nodeId);
		this.elementMouseDown=[];
		this.elementMouseOver=[];
		this.__div=document.createElement('div');
		this.__div.setAttribute('style','position: absolute; left: 0px; top: 0px; width: 195px; height: 80px; visibility: inherit;');
		this.__div.ggIsActive = function() {
			return me.player.getCurrentNode()==me.ggNodeId;
		}
		this.__div.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		this._thumbnail_nodeimage1=document.createElement('div');
		this._thumbnail_nodeimage1__img=document.createElement('img');
		this._thumbnail_nodeimage1__img.className='ggskin ggskin_nodeimage';
		this._thumbnail_nodeimage1__img.setAttribute('src',basePath + "images/thumbnail_nodeimage1_" + nodeId + ".jpg");
		this._thumbnail_nodeimage1.ggNodeId=nodeId;
		this._thumbnail_nodeimage1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._thumbnail_nodeimage1__img.className='ggskin ggskin_nodeimage';
		this._thumbnail_nodeimage1__img['ondragstart']=function() { return false; };
		this._thumbnail_nodeimage1.appendChild(this._thumbnail_nodeimage1__img);
		this._thumbnail_nodeimage1.ggId="Thumbnail NodeImage";
		this._thumbnail_nodeimage1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._thumbnail_nodeimage1.ggVisible=true;
		this._thumbnail_nodeimage1.className='ggskin ggskin_nodeimage ';
		this._thumbnail_nodeimage1.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 75px;';
		hs+='left : 2px;';
		hs+='position : absolute;';
		hs+='top : 2px;';
		hs+='visibility : inherit;';
		hs+='width : 190px;';
		hs+='pointer-events:auto;';
		this._thumbnail_nodeimage1.setAttribute('style',hs);
		this._thumbnail_nodeimage1.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_nodeimage1.ggIsActive=function() {
			return me.player.getCurrentNode()==this.ggElementNodeId();
		}
		me._thumbnail_nodeimage1.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		this._thumbnail_nodeimage1.onclick=function (e) {
			me.player.openNext("{"+me.ggNodeId+"}",me.player.hotspot.target);
		}
		this._thumbnail_nodeimage1.ggUpdatePosition=function (useTransition) {
		}
		this._checkervisited1=document.createElement('div');
		this._checkervisited1__img=document.createElement('img');
		this._checkervisited1__img.className='ggskin ggskin_svg';
		this._checkervisited1__img.setAttribute('src',basePath + 'images/checkervisited1.svg');
		this._checkervisited1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._checkervisited1__img['ondragstart']=function() { return false; };
		this._checkervisited1.appendChild(this._checkervisited1__img);
		this._checkervisited1.ggId="checkervisited";
		this._checkervisited1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._checkervisited1.ggVisible=false;
		this._checkervisited1.className='ggskin ggskin_svg ';
		this._checkervisited1.ggType='svg';
		hs ='';
		hs+='height : 19px;';
		hs+='left : 3px;';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='top : 3px;';
		hs+='visibility : hidden;';
		hs+='width : 19px;';
		hs+='pointer-events:auto;';
		this._checkervisited1.setAttribute('style',hs);
		this._checkervisited1.style[domTransform + 'Origin']='50% 50%';
		me._checkervisited1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._checkervisited1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._checkervisited1.ggCurrentLogicStateVisible = -1;
		this._checkervisited1.ggUpdateConditionNodeChange=function () {
			var newLogicStateVisible;
			if (
				(me.player.nodeVisited(me._checkervisited1.ggElementNodeId()) == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._checkervisited1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._checkervisited1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._checkervisited1.style[domTransition]='';
				if (me._checkervisited1.ggCurrentLogicStateVisible == 0) {
					me._checkervisited1.style.visibility=(Number(me._checkervisited1.style.opacity)>0||!me._checkervisited1.style.opacity)?'inherit':'hidden';
					me._checkervisited1.ggVisible=true;
				}
				else {
					me._checkervisited1.style.visibility="hidden";
					me._checkervisited1.ggVisible=false;
				}
			}
		}
		this._checkervisited1.ggUpdatePosition=function (useTransition) {
		}
		this._checkervisited1.ggNodeChange=function () {
			me._checkervisited1.ggUpdateConditionNodeChange();
		}
		this._thumbnail_nodeimage1.appendChild(this._checkervisited1);
		this._checker1=document.createElement('div');
		this._checker1__img=document.createElement('img');
		this._checker1__img.className='ggskin ggskin_svg';
		this._checker1__img.setAttribute('src',basePath + 'images/checker1.svg');
		this._checker1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._checker1__img['ondragstart']=function() { return false; };
		this._checker1.appendChild(this._checker1__img);
		this._checker1.ggId="checker";
		this._checker1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._checker1.ggVisible=false;
		this._checker1.className='ggskin ggskin_svg ';
		this._checker1.ggType='svg';
		hs ='';
		hs+='height : 19px;';
		hs+='left : 3px;';
		hs+='position : absolute;';
		hs+='top : 3px;';
		hs+='visibility : hidden;';
		hs+='width : 19px;';
		hs+='pointer-events:auto;';
		this._checker1.setAttribute('style',hs);
		this._checker1.style[domTransform + 'Origin']='50% 50%';
		me._checker1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._checker1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._checker1.ggCurrentLogicStateVisible = -1;
		this._checker1.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(me._checker1.ggIsActive() == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._checker1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._checker1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._checker1.style[domTransition]='';
				if (me._checker1.ggCurrentLogicStateVisible == 0) {
					me._checker1.style.visibility=(Number(me._checker1.style.opacity)>0||!me._checker1.style.opacity)?'inherit':'hidden';
					me._checker1.ggVisible=true;
				}
				else {
					me._checker1.style.visibility="hidden";
					me._checker1.ggVisible=false;
				}
			}
		}
		this._checker1.ggUpdatePosition=function (useTransition) {
		}
		this._thumbnail_nodeimage1.appendChild(this._checker1);
		this._thumbnail_active1=document.createElement('div');
		this._thumbnail_active1.ggId="Thumbnail Active";
		this._thumbnail_active1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._thumbnail_active1.ggVisible=true;
		this._thumbnail_active1.className='ggskin ggskin_rectangle ';
		this._thumbnail_active1.ggType='rectangle';
		hs ='';
		hs+='border : 2px solid #a6a6a6;';
		hs+='cursor : pointer;';
		hs+='height : 73px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 188px;';
		hs+='pointer-events:auto;';
		this._thumbnail_active1.setAttribute('style',hs);
		this._thumbnail_active1.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_active1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._thumbnail_active1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._thumbnail_active1.onmouseover=function (e) {
			me.elementMouseOver['thumbnail_active1']=true;
		}
		this._thumbnail_active1.onmouseout=function (e) {
			me.elementMouseOver['thumbnail_active1']=false;
		}
		this._thumbnail_active1.ontouchend=function (e) {
			me.elementMouseOver['thumbnail_active1']=false;
		}
		me._thumbnail_active1.ggCurrentLogicStateBorderColor = -1;
		this._thumbnail_active1.ggUpdateConditionTimer=function () {
			var newLogicStateBorderColor;
			if (
				(me.elementMouseOver['thumbnail_active1'] == true)
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._thumbnail_active1.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._thumbnail_active1.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._thumbnail_active1.style[domTransition]='border-color none';
				if (me._thumbnail_active1.ggCurrentLogicStateBorderColor == 0) {
					me._thumbnail_active1.style.borderColor="rgba(255,255,255,1)";
				}
				else {
					me._thumbnail_active1.style.borderColor="rgba(166,166,166,1)";
				}
			}
		}
		this._thumbnail_active1.ggUpdatePosition=function (useTransition) {
		}
		this._thumbnail_nodeimage1.appendChild(this._thumbnail_active1);
		this.__div.appendChild(this._thumbnail_nodeimage1);
	};
	function SkinCloner_thumbnail_cloner0_Class(nodeId, parent) {
		var me=this;
		this.skin=parent;
		this.player=this.skin.player;
		this.findElements=this.skin.findElements;
		this.ggNodeId=nodeId;
		this.ggUserdata=this.skin.player.getNodeUserdata(nodeId);
		this.elementMouseDown=[];
		this.elementMouseOver=[];
		this.__div=document.createElement('div');
		this.__div.setAttribute('style','position: absolute; left: 0px; top: 0px; width: 190px; height: 80px; visibility: inherit;');
		this.__div.ggIsActive = function() {
			return me.player.getCurrentNode()==me.ggNodeId;
		}
		this.__div.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		this._thumbnail_nodeimage0=document.createElement('div');
		this._thumbnail_nodeimage0__img=document.createElement('img');
		this._thumbnail_nodeimage0__img.className='ggskin ggskin_nodeimage';
		this._thumbnail_nodeimage0__img.setAttribute('src',basePath + "images/thumbnail_nodeimage0_" + nodeId + ".jpg");
		this._thumbnail_nodeimage0.ggNodeId=nodeId;
		this._thumbnail_nodeimage0__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._thumbnail_nodeimage0__img.className='ggskin ggskin_nodeimage';
		this._thumbnail_nodeimage0__img['ondragstart']=function() { return false; };
		this._thumbnail_nodeimage0.appendChild(this._thumbnail_nodeimage0__img);
		this._thumbnail_nodeimage0.ggId="Thumbnail NodeImage";
		this._thumbnail_nodeimage0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._thumbnail_nodeimage0.ggVisible=true;
		this._thumbnail_nodeimage0.className='ggskin ggskin_nodeimage ';
		this._thumbnail_nodeimage0.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 75px;';
		hs+='left : 2px;';
		hs+='position : absolute;';
		hs+='top : 2px;';
		hs+='visibility : inherit;';
		hs+='width : 185px;';
		hs+='pointer-events:auto;';
		this._thumbnail_nodeimage0.setAttribute('style',hs);
		this._thumbnail_nodeimage0.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_nodeimage0.ggIsActive=function() {
			return me.player.getCurrentNode()==this.ggElementNodeId();
		}
		me._thumbnail_nodeimage0.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		this._thumbnail_nodeimage0.onclick=function (e) {
			me.player.openNext("{"+me.ggNodeId+"}",me.player.hotspot.target);
		}
		this._thumbnail_nodeimage0.ggUpdatePosition=function (useTransition) {
		}
		this._checkervisited0=document.createElement('div');
		this._checkervisited0__img=document.createElement('img');
		this._checkervisited0__img.className='ggskin ggskin_svg';
		this._checkervisited0__img.setAttribute('src',basePath + 'images/checkervisited0.svg');
		this._checkervisited0__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._checkervisited0__img['ondragstart']=function() { return false; };
		this._checkervisited0.appendChild(this._checkervisited0__img);
		this._checkervisited0.ggId="checkervisited";
		this._checkervisited0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._checkervisited0.ggVisible=false;
		this._checkervisited0.className='ggskin ggskin_svg ';
		this._checkervisited0.ggType='svg';
		hs ='';
		hs+='height : 19px;';
		hs+='left : 3px;';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='top : 3px;';
		hs+='visibility : hidden;';
		hs+='width : 19px;';
		hs+='pointer-events:auto;';
		this._checkervisited0.setAttribute('style',hs);
		this._checkervisited0.style[domTransform + 'Origin']='50% 50%';
		me._checkervisited0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._checkervisited0.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._checkervisited0.ggCurrentLogicStateVisible = -1;
		this._checkervisited0.ggUpdateConditionNodeChange=function () {
			var newLogicStateVisible;
			if (
				(me.player.nodeVisited(me._checkervisited0.ggElementNodeId()) == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._checkervisited0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._checkervisited0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._checkervisited0.style[domTransition]='';
				if (me._checkervisited0.ggCurrentLogicStateVisible == 0) {
					me._checkervisited0.style.visibility=(Number(me._checkervisited0.style.opacity)>0||!me._checkervisited0.style.opacity)?'inherit':'hidden';
					me._checkervisited0.ggVisible=true;
				}
				else {
					me._checkervisited0.style.visibility="hidden";
					me._checkervisited0.ggVisible=false;
				}
			}
		}
		this._checkervisited0.ggUpdatePosition=function (useTransition) {
		}
		this._checkervisited0.ggNodeChange=function () {
			me._checkervisited0.ggUpdateConditionNodeChange();
		}
		this._thumbnail_nodeimage0.appendChild(this._checkervisited0);
		this._checker0=document.createElement('div');
		this._checker0__img=document.createElement('img');
		this._checker0__img.className='ggskin ggskin_svg';
		this._checker0__img.setAttribute('src',basePath + 'images/checker0.svg');
		this._checker0__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._checker0__img['ondragstart']=function() { return false; };
		this._checker0.appendChild(this._checker0__img);
		this._checker0.ggId="checker";
		this._checker0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._checker0.ggVisible=false;
		this._checker0.className='ggskin ggskin_svg ';
		this._checker0.ggType='svg';
		hs ='';
		hs+='height : 19px;';
		hs+='left : 3px;';
		hs+='position : absolute;';
		hs+='top : 3px;';
		hs+='visibility : hidden;';
		hs+='width : 19px;';
		hs+='pointer-events:auto;';
		this._checker0.setAttribute('style',hs);
		this._checker0.style[domTransform + 'Origin']='50% 50%';
		me._checker0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._checker0.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._checker0.ggCurrentLogicStateVisible = -1;
		this._checker0.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(me._checker0.ggIsActive() == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._checker0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._checker0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._checker0.style[domTransition]='';
				if (me._checker0.ggCurrentLogicStateVisible == 0) {
					me._checker0.style.visibility=(Number(me._checker0.style.opacity)>0||!me._checker0.style.opacity)?'inherit':'hidden';
					me._checker0.ggVisible=true;
				}
				else {
					me._checker0.style.visibility="hidden";
					me._checker0.ggVisible=false;
				}
			}
		}
		this._checker0.ggUpdatePosition=function (useTransition) {
		}
		this._thumbnail_nodeimage0.appendChild(this._checker0);
		this._thumbnail_active0=document.createElement('div');
		this._thumbnail_active0.ggId="Thumbnail Active";
		this._thumbnail_active0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._thumbnail_active0.ggVisible=true;
		this._thumbnail_active0.className='ggskin ggskin_rectangle ';
		this._thumbnail_active0.ggType='rectangle';
		hs ='';
		hs+='border : 2px solid #a6a6a6;';
		hs+='cursor : pointer;';
		hs+='height : 73px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 183px;';
		hs+='pointer-events:auto;';
		this._thumbnail_active0.setAttribute('style',hs);
		this._thumbnail_active0.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_active0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._thumbnail_active0.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._thumbnail_active0.onmouseover=function (e) {
			me.elementMouseOver['thumbnail_active0']=true;
		}
		this._thumbnail_active0.onmouseout=function (e) {
			me.elementMouseOver['thumbnail_active0']=false;
		}
		this._thumbnail_active0.ontouchend=function (e) {
			me.elementMouseOver['thumbnail_active0']=false;
		}
		me._thumbnail_active0.ggCurrentLogicStateBorderColor = -1;
		this._thumbnail_active0.ggUpdateConditionTimer=function () {
			var newLogicStateBorderColor;
			if (
				(me.elementMouseOver['thumbnail_active0'] == true)
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._thumbnail_active0.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._thumbnail_active0.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._thumbnail_active0.style[domTransition]='border-color none';
				if (me._thumbnail_active0.ggCurrentLogicStateBorderColor == 0) {
					me._thumbnail_active0.style.borderColor="rgba(255,255,255,1)";
				}
				else {
					me._thumbnail_active0.style.borderColor="rgba(166,166,166,1)";
				}
			}
		}
		this._thumbnail_active0.ggUpdatePosition=function (useTransition) {
		}
		this._thumbnail_nodeimage0.appendChild(this._thumbnail_active0);
		this.__div.appendChild(this._thumbnail_nodeimage0);
	};
	function SkinCloner_thumbnail_cloner_Class(nodeId, parent) {
		var me=this;
		this.skin=parent;
		this.player=this.skin.player;
		this.findElements=this.skin.findElements;
		this.ggNodeId=nodeId;
		this.ggUserdata=this.skin.player.getNodeUserdata(nodeId);
		this.elementMouseDown=[];
		this.elementMouseOver=[];
		this.__div=document.createElement('div');
		this.__div.setAttribute('style','position: absolute; left: 0px; top: 0px; width: 190px; height: 80px; visibility: inherit;');
		this.__div.ggIsActive = function() {
			return me.player.getCurrentNode()==me.ggNodeId;
		}
		this.__div.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		this._thumbnail_nodeimage=document.createElement('div');
		this._thumbnail_nodeimage__img=document.createElement('img');
		this._thumbnail_nodeimage__img.className='ggskin ggskin_nodeimage';
		this._thumbnail_nodeimage__img.setAttribute('src',basePath + "images/thumbnail_nodeimage0_" + nodeId + ".jpg");
		this._thumbnail_nodeimage.ggNodeId=nodeId;
		this._thumbnail_nodeimage__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._thumbnail_nodeimage__img.className='ggskin ggskin_nodeimage';
		this._thumbnail_nodeimage__img['ondragstart']=function() { return false; };
		this._thumbnail_nodeimage.appendChild(this._thumbnail_nodeimage__img);
		this._thumbnail_nodeimage.ggId="Thumbnail NodeImage";
		this._thumbnail_nodeimage.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._thumbnail_nodeimage.ggVisible=true;
		this._thumbnail_nodeimage.className='ggskin ggskin_nodeimage ';
		this._thumbnail_nodeimage.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 75px;';
		hs+='left : 2px;';
		hs+='position : absolute;';
		hs+='top : 2px;';
		hs+='visibility : inherit;';
		hs+='width : 185px;';
		hs+='pointer-events:auto;';
		this._thumbnail_nodeimage.setAttribute('style',hs);
		this._thumbnail_nodeimage.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_nodeimage.ggIsActive=function() {
			return me.player.getCurrentNode()==this.ggElementNodeId();
		}
		me._thumbnail_nodeimage.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		this._thumbnail_nodeimage.onclick=function (e) {
			me.player.openNext("{"+me.ggNodeId+"}",me.player.hotspot.target);
		}
		this._thumbnail_nodeimage.ggUpdatePosition=function (useTransition) {
		}
		this._checkervisited=document.createElement('div');
		this._checkervisited__img=document.createElement('img');
		this._checkervisited__img.className='ggskin ggskin_svg';
		this._checkervisited__img.setAttribute('src',basePath + 'images/checkervisited.svg');
		this._checkervisited__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._checkervisited__img['ondragstart']=function() { return false; };
		this._checkervisited.appendChild(this._checkervisited__img);
		this._checkervisited.ggId="checkervisited";
		this._checkervisited.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._checkervisited.ggVisible=false;
		this._checkervisited.className='ggskin ggskin_svg ';
		this._checkervisited.ggType='svg';
		hs ='';
		hs+='height : 19px;';
		hs+='left : 3px;';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='top : 3px;';
		hs+='visibility : hidden;';
		hs+='width : 19px;';
		hs+='pointer-events:auto;';
		this._checkervisited.setAttribute('style',hs);
		this._checkervisited.style[domTransform + 'Origin']='50% 50%';
		me._checkervisited.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._checkervisited.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._checkervisited.ggCurrentLogicStateVisible = -1;
		this._checkervisited.ggUpdateConditionNodeChange=function () {
			var newLogicStateVisible;
			if (
				(me.player.nodeVisited(me._checkervisited.ggElementNodeId()) == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._checkervisited.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._checkervisited.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._checkervisited.style[domTransition]='';
				if (me._checkervisited.ggCurrentLogicStateVisible == 0) {
					me._checkervisited.style.visibility=(Number(me._checkervisited.style.opacity)>0||!me._checkervisited.style.opacity)?'inherit':'hidden';
					me._checkervisited.ggVisible=true;
				}
				else {
					me._checkervisited.style.visibility="hidden";
					me._checkervisited.ggVisible=false;
				}
			}
		}
		this._checkervisited.ggUpdatePosition=function (useTransition) {
		}
		this._checkervisited.ggNodeChange=function () {
			me._checkervisited.ggUpdateConditionNodeChange();
		}
		this._thumbnail_nodeimage.appendChild(this._checkervisited);
		this._checker=document.createElement('div');
		this._checker__img=document.createElement('img');
		this._checker__img.className='ggskin ggskin_svg';
		this._checker__img.setAttribute('src',basePath + 'images/checker.svg');
		this._checker__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._checker__img['ondragstart']=function() { return false; };
		this._checker.appendChild(this._checker__img);
		this._checker.ggId="checker";
		this._checker.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._checker.ggVisible=false;
		this._checker.className='ggskin ggskin_svg ';
		this._checker.ggType='svg';
		hs ='';
		hs+='height : 19px;';
		hs+='left : 3px;';
		hs+='position : absolute;';
		hs+='top : 3px;';
		hs+='visibility : hidden;';
		hs+='width : 19px;';
		hs+='pointer-events:auto;';
		this._checker.setAttribute('style',hs);
		this._checker.style[domTransform + 'Origin']='50% 50%';
		me._checker.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._checker.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._checker.ggCurrentLogicStateVisible = -1;
		this._checker.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(me._checker.ggIsActive() == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._checker.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._checker.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._checker.style[domTransition]='';
				if (me._checker.ggCurrentLogicStateVisible == 0) {
					me._checker.style.visibility=(Number(me._checker.style.opacity)>0||!me._checker.style.opacity)?'inherit':'hidden';
					me._checker.ggVisible=true;
				}
				else {
					me._checker.style.visibility="hidden";
					me._checker.ggVisible=false;
				}
			}
		}
		this._checker.ggUpdatePosition=function (useTransition) {
		}
		this._thumbnail_nodeimage.appendChild(this._checker);
		this._thumbnail_active=document.createElement('div');
		this._thumbnail_active.ggId="Thumbnail Active";
		this._thumbnail_active.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._thumbnail_active.ggVisible=true;
		this._thumbnail_active.className='ggskin ggskin_rectangle ';
		this._thumbnail_active.ggType='rectangle';
		hs ='';
		hs+='border : 2px solid #a6a6a6;';
		hs+='cursor : pointer;';
		hs+='height : 73px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 183px;';
		hs+='pointer-events:auto;';
		this._thumbnail_active.setAttribute('style',hs);
		this._thumbnail_active.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._thumbnail_active.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._thumbnail_active.onmouseover=function (e) {
			me.elementMouseOver['thumbnail_active']=true;
		}
		this._thumbnail_active.onmouseout=function (e) {
			me.elementMouseOver['thumbnail_active']=false;
		}
		this._thumbnail_active.ontouchend=function (e) {
			me.elementMouseOver['thumbnail_active']=false;
		}
		me._thumbnail_active.ggCurrentLogicStateBorderColor = -1;
		this._thumbnail_active.ggUpdateConditionTimer=function () {
			var newLogicStateBorderColor;
			if (
				(me.elementMouseOver['thumbnail_active'] == true)
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._thumbnail_active.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._thumbnail_active.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._thumbnail_active.style[domTransition]='border-color none';
				if (me._thumbnail_active.ggCurrentLogicStateBorderColor == 0) {
					me._thumbnail_active.style.borderColor="rgba(255,255,255,1)";
				}
				else {
					me._thumbnail_active.style.borderColor="rgba(166,166,166,1)";
				}
			}
		}
		this._thumbnail_active.ggUpdatePosition=function (useTransition) {
		}
		this._thumbnail_nodeimage.appendChild(this._thumbnail_active);
		this.__div.appendChild(this._thumbnail_nodeimage);
	};
	this.addSkin();
};