import React, { Component } from 'react'
import './Body.css';
import Button from './Button';
class Body extends Component {
   constructor(){
      super();
      this.state={
         mainInput:'',
         firstSec:'',
         secondSec:'',
         operator:'',
         result:'',
         operClick:0
      }
   }
   valueJoma(va){
        if(this.state.done==true){
            this.setState({
               firstSec:'',
               secondSec:'',
               operator:'',
               result:'',
               done:false
            });
        }
         this.setState({
           mainInput:this.state.mainInput.concat(va),
         });
   }
   oper(op){
   if(this.state.operClick==0){
     this.setState({
       firstSec:this.state.mainInput,
       operator:op,
       mainInput:'',
       operClick:1
     });
   }
   else{
      this.calculate();
   }
   }
   clear(){
     this.setState({
      mainInput:'',
      firstSec:'',
      secondSec:'',
      operator:'',
      result:'',
      operClick:0
     });
   }
   calculate(){
   if(this.state.firstSec!='' && this.state.mainInput!=''){
      var res=0;
    try{
     res = eval(this.state.firstSec.concat(this.state.operator).concat(this.state.mainInput));
     this.setState({
      secondSec:this.state.mainInput,
      mainInput:'',
      result:res,
      operClick:0,
      ["done"]:true
    });
    }
    catch(err){
        alert(err);
        this.setState({
         mainInput:'',
         firstSec:'',
         secondSec:'',
         operator:'',
         result:'',
         operClick:0
        });
    }
   
   }
   }
   backpress(){
     
   }
    render() {
        return (
            <div className="body">
                <p className={"upperPara"}>{this.state.firstSec+" "+this.state.operator+" "+this.state.secondSec+ `${this.state.result!==''?" = ":''}`+this.state.result}</p>
                <input type="text" value={this.state.mainInput}></input>
                <div className="calBodyRow">
                   <Button val="1" onClick={()=>{
                      this.valueJoma('1');
                   }}/>
                   <Button val="2" onClick={()=>{
                      this.valueJoma('2');
                   }}/>
                   <Button val="3" onClick={()=>{
                      this.valueJoma('3');
                   }}/>
                </div>
                <div className="calBodyRow">
                   <Button val="4" onClick={()=>{
                      this.valueJoma('4');
                   }}/>
                   <Button val="5" onClick={()=>{
                      this.valueJoma('5');
                   }}/>
                   <Button val="6" onClick={()=>{
                      this.valueJoma('6');
                   }}/>
                </div>
                <div className="calBodyRow">
                   <Button val="7" onClick={()=>{
                      this.valueJoma('7');
                   }}/>
                   <Button val="8" onClick={()=>{
                      this.valueJoma('8');
                   }}/>
                   <Button val="9" onClick={()=>{
                      this.valueJoma('9');
                   }}/>
                </div>
                <div className="calBodyRow">
                   <Button val="+" onClick={()=>{
                      this.state.mainInput!=''?this.oper('+'):this.valueJoma('+');
                   }}/>
                   <Button val="0" onClick={()=>{
                      this.valueJoma('0');
                   }}/>
                   <Button val="-" onClick={()=>{
                       this.state.mainInput!=''?this.oper('-'):this.valueJoma('-');
                   }}/>
                </div>
                <div className="calBodyRow">
                   <Button val="/" onClick={()=>{
                      this.state.mainInput!=''?this.oper('/'):this.valueJoma('');
                   }}/>
                   <Button val="=" onClick={()=>{
                      this.calculate();
                   }}/>
                   <Button val="*" onClick={()=>{
                      this.state.mainInput!=''?this.oper('*'):this.valueJoma('');;
                   }}/>
                </div>
                <div className="calBodyRow">
                   <Button val="C" onClick={()=>{
                      this.clear();
                   }}/>
                   <Button val="X" onClick={()=>{
                      this.backpress();
                   }}/>
                   <Button val="Off" onClick={()=>{
                      this.clear();
                   }}/>
                </div>
            </div>
        )
    }
}

export default Body
