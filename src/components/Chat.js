import { render } from '@testing-library/react';
import React,{Component} from 'react'

class Chat extends Component {
  constructor(props) {
    super(props);
  }


componentDidMount() {
    (function(d, m){
        var kommunicateSettings = 
            {"appId":"22c8629f0f1b5d31124cd4ac00520d728","popupWidget":true,"automaticChatOpenOnNavigation":true};
        var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
        s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
        var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
        window.kommunicate = m; m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
}
render(){
  return (
    <div>
        
    </div>
  )
}
}

export default Chat;