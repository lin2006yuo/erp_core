export default {
    data(){
        return {
            $websocket:null
        }
    },
    beforeCreate(){
        this.$websocket = new WebSocket('ws://172.19.23.35:3002');
        this.$websocket.onmessage = (data) =>{
            this.$websocket.message(data);
        };
        this.$websocket.onopen = () =>{
            console.log('open');
            this.$websocket.connected();
        };
        this.$websocket.onclose = () =>{
            this.$websocket.closed();
        };
    },
    methods:{
        $sendCmd(cmd, data, callback = null) {
            return this.$websocket.sendCmd(cmd,data,callback);
        },
        $subscibe(eventName,callback){
            this.$websocket.subscibe(eventName,callback);
        },
        $unsubscibe(eventName,callback){
            this.$websocket.unsubscibe(eventName,callback);
        }
    },
    destroy(){
        this.$websocket.unsubscibe();
        this.$websocket.close();
    }
}