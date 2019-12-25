import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
export default new Vuex.Store({
	state: {
		answer:[],
		lastHistoryTime:'',
		count:{}
	},
	getters: {},
	mutations: {
		getAnswer(state, playload) { //--------------重要
			let say,nowDate;
			//判断时间
			if((playload.receivedTime-state.lastHistoryTime)> 5*60*1000){
				state.lastHistoryTime = playload.receivedTime;
				nowDate = playload.receivedTime;
			}else{
				nowDate = '';
			}

			switch(playload.messageType){
				case "TextMessage" :
					say = { //自定义消息组件所需参数
						sender:playload.sender,
						type: 1,
						css:'left',
						txt: playload.content,
						date: nowDate,
					}
					break;
				case "ImageMessage" :
					say = { //自定义消息组件所需参数
						sender:playload.sender,
						type: 4,
						css:'left',
						img: playload.imageUri,
						date: nowDate,
					}
					break;	
			}
			state.answer.push(say)
		},

		saveCount(state,openid){
			let __VALUE__ = JSON.parse(JSON.stringify(state.count))
		  	__VALUE__[openid] = parseInt(__VALUE__[openid])+1;
		  	state.count = __VALUE__;
		}
	},
	actions: {}
})