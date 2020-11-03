import React, {Component} from 'react';
import Item from '../Item/Item';
import Navbar from '../Navbar/Navbar';

class Layout extends Component{
    render(){
        return(
         <div>
             <Navbar/>
              <div className="container">
                    <Item />
            </div>  
         </div>
        )
    }
}

export default Layout;