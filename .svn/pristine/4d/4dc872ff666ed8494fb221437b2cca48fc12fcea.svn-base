<template>
	<div class="homeNews">
		<!-- 1:文字，2：红包，3：文章 ,4:图片,css:类型 -->
		<div v-if="data.type == 1&&data.css == 'left'">
			<div class="colora1 fz12 lh40 pt10 timeDate">{{data.date | updateTimeShow(data.date)}}</div>
			<div class="flex pl20 pr20 borBox">
				<img :src="targetPortrait?targetPortrait:require('@/assets/jiazai.png')" class='head borRad'>
				<div class="frame borRad bgf lh24 fz16 tl color3 pl10 pr10 pt5 pb5 borBox w250 ml15 posRel">
					{{changeTex(data.txt)}}
				</div>
			</div>
		</div>
		<div v-if="data.type == 4&&data.css == 'left'">
			<div class="colora1 fz12 lh40 pt10 timeDate">{{data.date | updateTimeShow(data.date)}}</div>
			<div class="flex pl20 pr20 borBox">
				<img :src="targetPortrait?targetPortrait:require('@/assets/jiazai.png')" class='head borRad'>
				<div class="frame frame-image borRad lh24 fz16 tl color3 pl10 pr10 pt5 pb5 borBox w250 mr15 posRel" @click='openPreview(data.img)' style="margin-left: 0.4rem;height: 222px;">
					<img :src="data.img" class="dataImg">
				</div>
			</div>
		</div>
		<!-- <router-link to="/homeRedBag" v-else-if="data.type == 2&&data.css == 'left'">
			<div class="colora1 fz12 lh40 pt10">{{data.date}}</div>
			<div class="flex pl20 pr20 borBox">
				<img :src="data.headImg" class="head borRad">
				<div class="frame borRad bgf9 lh24 fz16 tl colorF w200 ml15 posRel redFrame">
					<div class="flex alic pl10 pr10 pt10 pb10 borBox">
						<img src="../assets/images/redTabs.png" class="redTabs" />
						<span class="pl10">{{data.title}}</span>
					</div>
					<div class="fz12 color6 bgf pl15 borBox txt">{{data.txt}}</div>
				</div>
			</div>
		</router-link>
		<router-link to="/homeArticle" v-else-if="data.type == 3&&data.css == 'left'">
			<div class="colora1 fz12 lh40 pt10">{{data.date}}</div>
			<div class="flex pl20 pr20 borBox">
				<img :src="data.headImg" class="head borRad">
				<div class="frame borRad bgf fz16 tl color3 pl10 pr10 pt10 pb10 borBox w250 ml15 posRel">
					<div class="fz20 txt2 mb10 lh30">{{data.title}}</div>
					<div class="flex justsa alic">
						<div class="colora1 txt2 flex1 lh20">{{data.txt}}</div>
						<img :src="data.banner" class="banner" />
					</div>
				</div>
			</div>
		</router-link> -->

		<div v-if="data.type == 1&&data.css == 'right'">
			<div class="colora1 fz12 lh40 pt10 timeDate">{{data.date | updateTimeShow(data.date)}}</div>
			<div class="flex pl20 pr20 borBox juste">
				<div class="frame-right borRad lh24 fz16 tl color3 pl10 pr10 pt5 pb5 borBox w250 mr15 posRel">
					{{changeTex(data.txt)}}
				</div>
				<img :src="userPortrait?userPortrait:require('@/assets/jiazai.png')" class='head borRad'>	
			</div>
		</div>

		<div v-if="data.type == 4&&data.css == 'right'">
			<div class="colora1 fz12 lh40 pt10 timeDate">{{data.date | updateTimeShow(data.date)}}</div>
			<div class="flex pl20 pr20 borBox juste">
				<div class="frame-right frame-image borRad lh24 fz16 tl color3 pl10 pr10 pt5 pb5 borBox w250 mr15 posRel" @click='openPreview(data.img)' style="height: 222px;">
					<img :src="data.img" class="dataImg">
				</div>
				<img :src="userPortrait?userPortrait:require('@/assets/jiazai.png')" class='head borRad'>
			</div>
		</div>
		<van-image-preview
		  v-model="showPreview"
		  :images="images"
		  :showIndex='false'
		  :loop='false'
		>
		</van-image-preview>
	</div>
</template>
<script>
	export default {
		name: "homeNews",
		props: ['data','targetPortrait','userPortrait'],
		data() {
			return {
				showPreview:false,
				images:[]
			};
		},
		created() {

		},
		methods: {
			openPreview(src){
				this.images.push(src);
				this.showPreview = true;
			},
			changeTex(text){//将消息进行base64解密,并将emoji文字转位图像
				let Base64 = require('js-base64').Base64;
				return RongIMLib.RongIMEmoji.symbolToEmoji(Base64.decode(text));
			}
		}
	};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang=less>
	.timeDate{
		// height: 80px;
	}
	.homeNews{
		padding-top: 30px;
		.dataImg{
			max-width:250px;
			max-height: 100%;
		}
		.frame-image{
			background:transparent;
			padding: 0;
			img{
				-webkit-border-radius: 10px;
	            -moz-border-radius: 10px;
	            border-radius: 10px;
			}
		}

	}
	.head {
		width: 72px;
		height: 72px;
	}
	
	.frame::before {
		display: block;
		content: '';
		width: 0px;
		/* 宽高设置为0，很重要，否则达不到效果 */
		height: 0px;
		border: 20px solid #fff;
		border-bottom-color: transparent;
		/* 设置透明背景色 */
		border-top-color: transparent;
		border-left-color: transparent;
		position: absolute;
		left: -40px;
		top: 20px;
	}
	.frame-right{
		background: #5DB0F4;
		color: #fff;
		position: relative;
	}
	
	.frame-right::before{
		 display: block;
		 content: '';
		 width: 0px; /* 宽高设置为0，很重要，否则达不到效果 */
		 height: 0px;
		 border: 20px solid #5DB0F4;
		 border-bottom-color: transparent; /* 设置透明背景色 */
		 border-top-color: transparent;
		 border-right-color: transparent;
		 position: absolute;right:-40px;top:20px;
	}
	
	.redFrame::before {
		display: block;
		content: '';
		width: 0px;
		/* 宽高设置为0，很重要，否则达不到效果 */
		height: 0px;
		border: 20px solid #F99F3E;
		border-bottom-color: transparent;
		/* 设置透明背景色 */
		border-top-color: transparent;
		border-left-color: transparent;
		position: absolute;
		left: -40px;
		top: 20px;
	}
	
	.redFrame-right::before {
		display: block;
		content: '';
		width: 0px;
		/* 宽高设置为0，很重要，否则达不到效果 */
		height: 0px;
		border: 20px solid #F99F3E;
		border-bottom-color: transparent;
		/* 设置透明背景色 */
		border-top-color: transparent;
		border-left-color: transparent;
		position: absolute;
		right: -40px;
		top: 20px;
	}
	
	.w250 {
		max-width: 500px;
	}
	
	.w200 {
		max-width: 400px;
	}
	
	.redTabs {
		width: 64px;
		height: 78px;
	}
	
	.txt {
		border-bottom-left-radius: 10px;
		border-bottom-right-radius: 10px;
	}
	
	.banner {
		width: 80px;
		height: 80px;
	}
	.frame-image::before{
		border: 20px solid transparent;
	 	border-bottom-color: transparent; /* 设置透明背景色 */
	 	border-top-color: transparent;
	 	border-right-color: transparent;	
	}
	.colora1{
		text-align: center;
	}
</style>