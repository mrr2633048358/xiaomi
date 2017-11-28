window.onload=function(){
	let banles=document.getElementsByClassName('banner-list')[0];
	let banle=banles.getElementsByTagName('li');
	let item=document.getElementsByClassName('item');
	// console.log(item.length);
	for(let i=0;i<banle.length;i++){
		banle[i].onmousemove=function(){
			item[i].style.display='block';
		}
		banle[i].onmouseout=function(){
			item[i].style.display='none';
		}
	}

	let navcen=document.getElementsByClassName('nav-center')[0];
	let navle=navcen.getElementsByTagName('li');
	let nit=document.getElementsByClassName('nav-items')[0];
	let navs=document.querySelectorAll('.nav-item');
		console.log(nit);
	navcen.onmousemove=function(){
		nit.style.height='390px';
		for(let i=0;i<navle.length;i++){
			console.log(navle.length);
			navle[i].onmouseover=function(){
				navs[i].style.display='block';
			}
			navle[i].onmouseout=function(){
				navs[i].style.display='none';
			}
		}
	}
	navcen.onmouseout=function(){
		nit.style.height='100px';
	}

	let gou=document.getElementsByClassName('gouitem')[0];
	let heagou=document.getElementsByClassName('header-gou')[0];
	heagou.onmousemove=function(){
		gou.style.height='100px';
	}
	heagou.onmouseout=function(){
		gou.style.height='0px';
	}

	function jia(num){
		let jia=jisdian[num].getElementsByClassName('jiadian-right');
		let jd=jisdian[num].getElementsByClassName('jd-right1');
		for(let i=0;i<jd.length;i++){
			jd[i].onmouseover=function(){
				for(let j=0;j<jia.length;j++){
					jia[j].className='jiadian-right';
					jd[j].className='jd-right1';
				}
				jia[i].className='jiadian-right jia';
				jd[i].className='jd-right1 jdright1';
			}
		}
	}
	let jisdian=document.getElementsByClassName('jisdian');
		for(var j=0;j<jisdian.length;j++){
			jia(j);
		}
	/*let banmib=document.getElementsByName('xiaomibox')[0];
	// let widths=banmib.offsetWidth;
	let banmi=document.getElementsByClassName('xiaomi');
	let right1=document.getElementsByClassName('right1');
	let mi=document.getElementsByClassName('xiaomibox')[0];
	let mit;
	let num=0;
	// let minow=minext=0
	right1[0].onclick=mifn;
	right1[1].onclick=mifn1;
	mit=setInterval(mifn,3000);
	mi.onmouseover=function(){
		clearInterval(mit);
	}
	mi.onmouseout=function(){
		mit=setInterval(mifn,3000);
	}
	function mifn(){
		num--;
		if(num==-1){
			num=banmi.length-1;
		}
		for(let i=0;i<banmi.length;i++){
			banmi[i].className='xiaomi';
			right1[i].className='right1';
		}
		banmi[num].className='xiaomi mi';
		right1[num].className='right1 r1';
	}
	function mifn1(){
		num++;
		if(num==banmi.length){
			num=0;
		}
		for(let i=0;i<banmi.length;i++){
			banmi[i].className='xiaomi';
			right1[i].className='right1';
		}
		banmi[num].className='xiaomi mi';
		right1[num].className='right1 r1';
	}*/

	// 小米商品
	let mibox=document.getElementsByClassName('mi')[0];
	let button=document.getElementsByClassName('right1');
	let butL=button[1];
	let butR=button[0];
	// console.log(button.length);
	let box=document.getElementsByClassName('xiaomi')[0];
	let boxs=box.children;
	let sons=box.childElementCount;
	// console.log(sons);
	let sonw=boxs[0].offsetWidth+parseInt(getComputedStyle(boxs[0],null).marginRight);
	// console.log(sonw);
	box.style.width=`${sons*sonw}px`;
	// console.log(box.style.width);
	let num=0;
	let mit;
	butR.onclick=function(){
		mifn2();
		return;
	}
	butL.onclick=function(){
		mifn1();
		return;
	}
	mit=setInterval(mifn,2000);
	mibox.onmouseover=function(){
		clearInterval(mit);
	}
	mibox.onmouseout=function(){
		mit=setInterval(mifn,2000);
	}
	function mifn(){
		if(num==0){	
			mifn1();
		}
		else if(num==1){
			mifn2();
		}
	}
	function mifn1(){
		if(num==1){
			return;
		}
		num++;
        butR.className='right1';
        butL.className='right1 r1';
		box.style.transform=`translateX(${-1240*num}px)`;
	}
	function mifn2(){
		if(num==0){
			return;	
		}
		num--;
        butR.className='right1 r1';
        butL.className='right1';
		box.style.transform=`translateX(${-1240*num}px)`;
	}

	// banner轮播
	let banlun=document.getElementsByClassName('banner-pic')[0];
	let banli=banlun.getElementsByTagName('li');
	let btnle=document.getElementsByClassName('bth-list')[0];
	let btnles=btnle.getElementsByTagName('li');
	let banleft=document.getElementsByClassName('banner-left')[0];
	let banrig=document.getElementsByClassName('banner-right')[0];
	let ban=document.getElementsByClassName('banner')[0];
	// console.log(btnles.length);
	let t;
	let bannum=0;
	banleft.onclick=fn1;
	banrig.onclick=fn;
	t=setInterval(fn,2000);
	ban.onmousemove=function(){
		clearInterval(t);
	}
	ban.onmouseout=function(){
		t=setInterval(fn,2000);
	}
	function fn(){
		bannum++;
		if(bannum==banli.length){
			bannum=0;
		}
		// console.log(bannum);
		for(let i=0;i<banli.length;i++){
			banli[i].className='';
			btnles[i].className='';
			// console.log(btnles[i].className);
		}
		banli[bannum].className='ban';
		btnles[bannum].className='b';
	}
	function fn1(){
		bannum--;
		if(bannum==-1){
			bannum=banli.length-1;
		}
		for(let i=0;i<banli.length;i++){
			banli[i].className='';
			btnles[i].className='';
		}
		banli[bannum].className='ban';
		btnles[bannum].className='b';
	}
	for(let i=0;i<btnles.length;i++){
		btnles[i].onclick=function(){
			banli[bannum].className='';
			btnles[bannum].className='';
			banli[i].className='ban';
			btnles[i].className='b';
			bannum=i;
		}
	}
	// 内容
	function neirong(num){
		let neironglb=document.getElementsByClassName("nr-content-main1");
		let biaoyu=neironglb[num].getElementsByClassName("nr-banner");
		// console.log(biaoyu.length);
		let widths=neironglb[num].offsetWidth;
		

		let back=document.getElementsByClassName("nr-content-left")[num];
		let forward=document.getElementsByClassName("nr-content-right")[num];
		
		// let neirongbtn=document.getElementsByClassName("nnr-main-bth");
		let btnlist1=neironglb[num].getElementsByClassName("nr-main-bth-son");
		// console.log(btnlist1.length);

		let flag=true;
		let now=next=0;
		///let time2=setInterval(fn4,1000);
		function fn3(){
			if(next==biaoyu.length-1){
				// next=0;
				return;
			}
			next++;
			// console.log(next);
			biaoyu[next].style.left=`${widths}px`;
			animate(biaoyu[now],{left:-widths});
			animate(biaoyu[next],{left:0},btnfn);
			now=next;

		}
		function fn4(){
			if(next==0){
				// next=biaoyu.length-1;
				return;
			}
			next--;
			biaoyu[next].style.left=`-${widths}px`;
			animate(biaoyu[now],{left:widths});
			animate(biaoyu[next],{left:0},btnfn);
			now=next;

		}
		back.onclick=function(){
			if(flag){
				fn4();
			}			
				// flag=false;
		}
		// console.log(fn4());
		forward.onclick=function(){
			if(flag){
				fn3();
			}
				// flag=false;

		}

		function btnfn(){
			for(let i=0;i<btnlist1.length;i++){
				btnlist1[i].className="nr-main-bth-son";
			}
			btnlist1[now].className="nr-main-bth-son son1";

			flag=true;
		}


		for(let i=0;i<btnlist1.length;i++){
			// console.log(i);
			btnlist1[i].onclick=function(){
				if(i==now){return}
				else if(i<now){
					animate(biaoyu[now],{left:widths});
					animate(biaoyu[i],{left:0});
					for(let j=0;j<btnlist1.length;j++){
						btnlist1[j].className="nr-main-bth-son";
					}
					btnlist1[i].className="nr-main-bth-son son1";
				}
				else if(i>now){
					animate(biaoyu[now],{left:-widths});
					animate(biaoyu[i],{left:0});
					for(let j=0;j<btnlist1.length;j++){
						btnlist1[j].className="nr-main-bth-son";
					}
					btnlist1[i].className="nr-main-bth-son son1";
				}
				now=next=i;
			}
		}
	}


	var nei1=new neirong(0);
	var nei2=new neirong(1);
	var nei3=new neirong(2);
	var nei4=new neirong(3);

}
