import React,{Component} from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';

const ItemView = (props) => {
    return (
        <div>
            <div>
                {props.portugal.length > 0 ? <h4 className="pl-2">Portugal</h4> : <></>}
                {props.portugal.map(item => {
                    if (item.check === true) {
                        return (
                            <InputGroup key={item.id}>
                                <InputGroupAddon addonType="prepend" className="flex-fill mb-2">
                                    <Input className="border-0 bg-light" value={item.text} />
                                    <InputGroupText className="border-0 bg-light" >
                                    <i className="fas fa-times" onClick={() => (props.deleteCheckList(item.id))}></i>
                                    </InputGroupText>
                                </InputGroupAddon>
                            </InputGroup>
                        )
                    }
                })}
            </div>
            <div>
                {props.nicaragua.length > 0 ? <h4 className="pl-2">Nicaragua</h4> : <></>}
                {props.nicaragua.map(item => {
                    if (item.check === true) {
                        return (
                            <InputGroup key={item.id}>
                                <InputGroupAddon addonType="prepend" className="flex-fill mb-2">
                                    <Input className="border-0 bg-light" value={item.text} />
                                    <InputGroupText className="border-0 bg-light" >
                                    <i className="fas fa-times" onClick={() => (props.deleteCheckList(item.id))}></i>
                                    </InputGroupText>
                                </InputGroupAddon>
                            </InputGroup>
                        )
                    }
                })}
            </div>
            <div>
                {props.marshall_islands.length > 0 ? <h4 className="pl-2">Marshall Islands</h4> : <></>}
                {props.marshall_islands.map(item => {
                    if (item.check === true) {
                        return (
                            <InputGroup key={item.id}>
                                <InputGroupAddon addonType="prepend" className="flex-fill mb-2">
                                    <Input className="border-0 bg-light" value={item.text} />
                                    <InputGroupText className="border-0 bg-light" >
                                    <i className="fas fa-times" onClick={() => (props.deleteCheckList(item.id))}></i>
                                    </InputGroupText>
                                </InputGroupAddon>
                            </InputGroup>
                        )
                    }
                })}
            </div>
            {props.portugal.length || props.nicaragua.length || props.marshall_islands.length > 0 ? <></> : <h4 className="no-select">No Value Selected</h4>}
        </div>
    )
}

export default ItemView;