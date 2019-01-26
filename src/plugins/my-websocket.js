window.$websocket = null;

window.$websocket = (option) => {
    return new Promise((resolve, reject) => {
        try{
            var _websocket = new WebSocket(option.url);
            _websocket.onopen = function(){
                console.log("开始连接");
                _websocket.send(option.data);
                console.log("开始连接1",option.data);
            };
            _websocket.onmessage = function(res){
                console.log(1234,res)
                resolve(res);
            };
            _websocket.onclose = function(){
                console.log('连接关闭');
                _websocket.closed();
            };
            _websocket.onerror = function(error){
                reject(error);
            };
        }catch (e) {
            reject(e);
        }
    });

};
