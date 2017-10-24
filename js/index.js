window.onload=function(){
	

//=======轮播图开始carousel=======
    function carousel(){
    	   var oView = document.getElementById("view");
			var oPic=document.getElementById("pic");
			var aLis = oPic.children;
			var oBtnGroup=document.getElementById("btn_group");
			var aBtns = oBtnGroup.children;
			var oLeft = aLis[0].offsetWidth;//一个 li的宽度
			var oBtnL=document.getElementById("btn_L");//左按钮
			var oBtnR=document.getElementById("btn_R");//右按钮
			var oBtnLeft=getClass(document,'btn_left')[0];
			var oBtnRight=getClass(document,'btn_right')[0];
			var oBtn=getClass(document,'btn');
			var iNum = 0;
			var iNum1=0;
			/*无缝滚动的原理：假设轮播区域有7张图片进行轮播，当第一张图片向左移动后，轮播区域尾部必然会有空缺的区域；
			为了不让不能播区域有空缺，我们可以在布局的7张图片后面再加上7张同样的照片，当第一张图片向左移动后，第八张图片
			就会补位到轮播区域的第7个位置。然而这样只能实现一次的轮播，那么我们就考虑 使用定时器来实现无限循环*/
			
			
			//累加并赋值语句i+=1 等同于 i=i+1

			oPic.innerHTML+=oPic.innerHTML;// 补缺空缺区域的ul  
			
			//oPic.innerHTML=oPic.innerHTML+1
			oPic.style.width = aLis[0].offsetWidth*aLis.length+'px';
			
			//选项卡效果
			for(var i=0;i<aBtns.length;i++){
				aBtns[i].index=i;
				aBtns[i].onclick=function(){
					for(var i=0;i<aBtns.length;i++){
						aBtns[i].className='';
					}
					aBtns[this.index].className='active';
					iNum1=this.index;
					animate(oPic,{'left':-oLeft*this.index})
				}
			}
			
			
			//鼠标移入移出
			oView.onmouseover=function(){
				animate(oBtn[0],{'opacity':100});
				animate(oBtn[1],{'opacity':100})
			};
			oView.onmouseout=function(){
				animate(oBtn[0],{'opacity':0});
				animate(oBtn[1],{'opacity':0})
			};
			
			oBtnLeft.onmouseover=function(){
				this.style.backgroundPositionY=-62+'px';
			};
			oBtnRight.onmouseover=function(){
				this.style.backgroundPositionY=-190+'px';
			};
			oBtnLeft.onmouseout=function(){
				this.style.backgroundPositionY=0+'px';
			};
			oBtnRight.onmouseout=function(){
				this.style.backgroundPositionY=-128+'px';
			};
			
			oBtnR.onclick=function(){
				//控制选项卡切换
				iNum1++;
				if(iNum1==aBtns.length){
					iNum1=0;
				}
				for(var i=0;i<aBtns.length;i++){
					aBtns[i].className='';
				}
				
				aBtns[iNum1].className='active';
				
				//控制轮播图移动
				iNum++;
				if(iNum==aLis.length/2+1){
					oPic.style.left = 0;
					iNum=1;
				}
				animate(oPic,{'left':iNum*-oLeft});
				
				
			};
			
			
			oBtnL.onclick=function(){
				
				//控制选项卡切换
				iNum1--;
				if(iNum1<0){
					iNum1=aBtns.length-1;
				}
				for(var i=0;i<aBtns.length;i++){
					aBtns[i].className='';
				}
				
				aBtns[iNum1].className='active';
				
				//控制轮播图移动
				iNum--;
				if(iNum<0){
					oPic.style.left = -oPic.offsetWidth/2+'px'
					iNum=aLis.length/2-1;
				}
				animate(oPic,{'left':iNum*-oLeft});
			}
			}
	carousel()
	
//=======轮播图结束carousel=======
	



   	
}
