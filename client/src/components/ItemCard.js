import React, {Component} from "react"
import {withInventory} from "../context/InventoryProvider.js"
import {withUser} from "../context/UserProvider.js"
import Toggle from "../shared/toggler.js"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ItemCard extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }

    handleCart = () => {
        this.props.addToCart(this.props.object,this.props.user._id)
    }
        
    handleClick = e => {
            e.preventDefault()
            this.props.updateFavorites(this.props.id)
    }
    
    render(){
        // console.log(this.props)
        return(
            <Toggle render={({ toggler, modal}) =>
                <>
                    <Modal isOpen={modal} toggle={toggler}>
                        <ModalHeader toggle={toggler}>cool stuff</ModalHeader>
                        <ModalBody>
                            <section style={{height: "50%", width: "50%"}}><div className="modalSubContainer" style={{backgroundImage: `url(${"props.background"})`}}></div><div>{this.props.description}</div></section>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={this.handleCart}>Add To Cart</Button>
                            <Button color="secondary" onClick={this.props.handleClick}>Favorite</Button>
                        </ModalFooter>
                    </Modal>
                    <div className="itemCard">
                        <div className="imageContainer">
                            <img className="imageFit" alt="itemPic" src={this.props.image}></img>
                        </div>
                        <p>${this.props.price}</p>
                        <p>{this.props.brand}</p>
                        <p>favorited by {this.props.favorites} others</p>
                        <div>
                            <button onClick={this.handleClick}>Favorite</button>
                            <button onClick={toggler}>check it out</button>
                        </div>
                    
                    </div>
                </>
            }/>


            )
        }
    }

export default withUser(withInventory(ItemCard))