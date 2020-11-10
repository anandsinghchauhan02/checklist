import React, { Component } from 'react';
import ItemView from '../ItemView/ItemView';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';


class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            portugal: [
                {
                    id: '01',
                    check: false,
                    text: 'Aasiya Jayavant'
                },
                {
                    id: '02',
                    check: false,
                    text: 'Luvleen'
                },
                {
                    id: '03',
                    check: false,
                    text: 'Rey Mibourne'
                },
                {
                    id: '04',
                    check: false,
                    text: 'Cayla Brister'
                }
            ],
            nicaragua: [
                {
                    id: '001',
                    check: false,
                    text: 'Deveedaas Nandi'
                },
                {
                    id: '002',
                    check: false,
                    text: 'Obasey Chidy'
                },
                {
                    id: '003',
                    check: false,
                    text: 'Xenie Dolezelova'
                },
                {
                    id: '004',
                    check: false,
                    text: 'Ezequiel Dengra'
                }
            ],
            marshall_islands: [
                {
                    id: '0001',
                    check: false,
                    text: 'Aaron Almaraz'
                },
                {
                    id: '0002',
                    check: false,
                    text: 'Jelena Denisova'
                },

            ],

        }
    }
    
    checkListChange = (key,index) =>{
      const portugalCheck = this.state.portugal;
        const nicaraguaCheck = this.state.nicaragua;
        const marshall_islandsCheck = this.state.marshall_islands;
        portugalCheck.map(list =>{
            if (list.id === key && list.check === false){
                list.check = true;
            } else{
                if (list.id === key){
                    list.check = false;
                }
            }
        })

        this.setState({
            portugal: portugalCheck
        });
        nicaraguaCheck.map(list =>{
            if (list.id === key && list.check === false) {
                list.check = true;
            } else {
                if (list.id === key) {
                    list.check = false;
                }
            }
        })
        this.setState({
            nicaragua: nicaraguaCheck
        });
        marshall_islandsCheck.map(list =>{
            if (list.id === key && list.check === false) {
                list.check = true;
            } else {
                if (list.id === key) {
                    list.check = false;
                }
            }
        })
        this.setState({
            marshall_islands: marshall_islandsCheck
        });
    }

    deleteCheckList = (key) => {
        const portugalCheck = this.state.portugal;
        const nicaraguaCheck = this.state.nicaragua;
        const marshall_islandsCheck = this.state.marshall_islands;
        portugalCheck.map(list => {
            if (list.id === key) {
                list.check = false;
            }
        })
        this.setState({
            portugal: portugalCheck
        });
        nicaraguaCheck.map(list => {
            if (list.id === key) {
                list.check = false;
            }
        })
        this.setState({
            nicaragua: nicaraguaCheck
        });
        marshall_islandsCheck.map(list => {
            if (list.id === key) {
                list.check = false;
            }
        })
        this.setState({
            marshall_islands: marshall_islandsCheck
        });
    }

    render() {
        const portugal = this.state.portugal;
        const nicaragua = this.state.nicaragua;
        const marshall_islands = this.state.marshall_islands;
        
        const newPortugal = [];
        for (let i = 0; i < portugal.length; i++) {
            if (portugal[i]) {
                if (portugal[i].check === true) {
                    newPortugal.push(portugal[i]);
                }
            }
        };
        const newNicaragua = [];
        for (let i = 0; i < nicaragua.length; i++) {
            if (nicaragua[i]) {
                if (nicaragua[i].check === true) {
                    newNicaragua.push(nicaragua[i]);
                }
            }
        };
        const newMarshall_islands = [];
        for (let i = 0; i < marshall_islands.length; i++) {
            if (marshall_islands[i]) {
                if (marshall_islands[i].check === true) {
                    newMarshall_islands.push(marshall_islands[i]);
                }
            }
        };
        return (
            <div className="pt-5">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card p-4 card-size">
                            <div className="pt-3">
                                <h4 className="pl-2">Portugal</h4>
                                {portugal.map((item,index) => {
                                    return (
                                        <InputGroup className="ddd">
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText className="border-0 bg-white" >
                                                    <Input addon type="checkbox" 
                                                    id={item.id} 
                                                    checked={item.check}
                                                    onChange={this.checkListChange.bind(this,item.id,index)} 
                                                    aria-label="Checkbox for following text input" />
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input className="border-0" value={item.text} />
                                        </InputGroup>
                                    )
                                })}
                            </div>
                            <div className="pt-3">
                                <h4 className="pl-2">Nicaragua</h4>
                                {nicaragua.map(item => {
                                    return (
                                        <InputGroup className="ddd">
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText className="border-0 bg-white" >
                                                    <Input addon type="checkbox" 
                                                    id={item.id} 
                                                    checked={item.check}
                                                    onChange={this.checkListChange.bind(this,item.id)} aria-label="Checkbox for following text input" />
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input className="border-0" value={item.text} />
                                        </InputGroup>
                                    )
                                })}
                            </div>
                            <div className="pt-3">
                                <h4 className="pl-2">Marshall Islands</h4>
                                {marshall_islands.map(item => {
                                    return (
                                        <InputGroup className="ddd">
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText className="border-0 bg-white" >
                                                    <Input addon type="checkbox" 
                                                    id={item.id} 
                                                    checked={item.check}
                                                    onChange={this.checkListChange.bind(this,item.id)} aria-label="Checkbox for following text input" />
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input className="border-0" value={item.text} />
                                        </InputGroup>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card p-4 card-size">
                            <ItemView 
                            portugal={newPortugal}
                            deleteCheckList={this.deleteCheckList}
                            nicaragua={newNicaragua}
                            marshall_islands={newMarshall_islands}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Item;