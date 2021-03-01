import React  from "react";
import ReactDom from "react-dom";
import Modal from "../index";


export default class Main extends React.PureComponent{
    state = {
        showModal: true
    }
    
    toggleModal = () =>{
        const { showModal } = this.state;
        this.setState({showModal:!showModal});
    }
    
    render(){
        const { toggleModal } = this;
        const { showModal } = this.state;
        return (
            <div>
                <ul>
                    <li>
                        <a onClick={this.toggleModal}> Show PopupModal</a>
                    </li>
                </ul>
                {
                    showModal ? (
                        <Modal>
                            <Modal.Header
                                title='Set working days and hours'
                                subTitle='Subtitle comes here'
                                cancelClickHandler={toggleModal}
                            />
                            <Modal.Body>
                                Here comes the Body
                                <ul>
                                    <li>Task 1</li>
                                    <li>Task 2</li>
                                    <li>Task 3</li>
                                    <li>Task 4</li>
                                    <li>Task 5</li>
                                    <li>Task 6</li>
                                    <li>Task 7</li>
                                    <li>Task 8</li>                                    
                                </ul>
                            </Modal.Body>
                            <Modal.Footer 
                                saveText={'Confirm'} 
                                saveClickHandler={toggleModal} 
                                cancelText={'Cancel'} 
                                cancelClickHandler={toggleModal} 
                            />
                            {/* custum footer */}
                            {/* <div>
                                <Modal.Button text={'Yes'} clickHandler={toggleModal} />
                                <Modal.Button cancel text={'No'} clickHandler={toggleModal} />
                            </div> */}
                        </Modal>
                    ) :''
                }
            </div>
        )
    }
}


ReactDom.render(<Main />, document.getElementById('root'));