import React from "react";
import {localParam} from "../../assets/js/utils";
import request from '../../assets/js/utils/request'

class personal extends React.Component{
    constructor() {
        super();
        this.state={
            code:'',
            access_token:'',
            proxy_url:process.env.REACT_APP_PROXY_URL
        }
    }
    componentDidMount() {
        this.getGithub();
       // setTimeout(()=>{
       //     this.getAccess_Token();
       //     setTimeout(()=>{
       //         this.getGiteeInfo();
       //     },1000)
       // },1000);
       setTimeout(()=>{
           this.getGitHub();
       },1000)
    }

    //获取 code
    getGithub=()=>{
        let code=localParam(window.location.search).search.code;
        this.setState({code: code})
    }
    //获取gitHub
    getGitHub=()=>{
        let url = this.state.proxy_url,
            data={code: this.state.code};
        request(url,'post',data).then((res)=>{
            console.log(res)
        })
    }
    //获取码gitee access_token
    getAccess_Token=()=>{
        let url = `${window.base.config.baseUrlw}oauth/token?grant_type=authorization_code&code=${this.state.code}&client_id=${window.base.config.client_id}&redirect_uri=${window.base.config.redirect_uri}&client_secret=${window.base.config.client_secret}`;
        request(url, 'post').then((res)=>{
            console.log(res)
            this.setState({access_token:res.access_token})
        })

    }
    //获取gitee个人信息
    getGiteeInfo=()=>{
        let url = window.base.config.baseUrlw+'api/v5/user?access_token='+this.state.access_token+'';
        request(url,'get').then((res)=>{
            console.log(res)
        })
    }

    render() {
        return(
            <div>
                个人中心
            </div>
        )
    }
}
export default personal