import request from '../api/request.js';
import cookie from '../api/cookie.js';
export default class MyUploadAdapter {
    constructor( loader ) {
        this.loader = loader;
    }
    upload() {
        return  new Promise((resolve,reject) => {
                resolve(this.loader.file)
            })
            .then( file => new Promise( ( resolve, reject ) => {
                this._sendRequest( file ,resolve);
            } ) );
    }
    _sendRequest( file,resolve ) {
        const data = new FormData();
        data.append( 'upload', file );
        request.axios({
            url:'http://test.crm.huayuejiaoyu.com:8520/prtApp/portal/image/upFaceImg',
            method: 'post',
            data: data,
            processData: false,// 告诉axios不要去处理发送的数据(重要参数)
            contentType: false,   // 告诉axios不要去设置Content-Type请求头
            headers:{
                'token': cookie.get('token')
            }
        }).then((data)=>{
            resolve( {
                default: data.data.url
            } );
        })
    }
}