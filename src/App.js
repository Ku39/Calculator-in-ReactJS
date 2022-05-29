import React from "react";
import styles from "./styles/styles.css"
import {useState} from "react"

let result = 0;

function App() {
    // let [up, setUp] = useState("0");
    let [down, setDown] = useState("0");

    function reduce(arg){
        if(arg =="DEL"){
            setDown(down = "0");
            result = 0
            // setUp(up = "0")
        }else if(arg =="C"){
            if(down != "0"){
                if(down.length == 1){
                    setDown(down = "0");
                }else{
                    setDown(down = down.substring(0, down.length-1))
                }
            }
        }else if(arg =="="){
            result = eval(down);
            setDown(down = String(result));
            console.log(result)
        }
    }
    const symbols = ["/","*","-","+","."]
    
    function click(arg){
        if(down == "0"){
            let check = false
            symbols.forEach(item => {
                if(arg == item){
                    check = true
                }
            })
            if(!check){
                setDown(down = arg)
            }
        }else{
            if(result != 0){
                symbols.forEach(item => {
                    if(arg == item){
                        console.log(result)
                        setDown(down = String(result)+arg)
                        result = 0
                        return
                    }
                })
            }else{
                symbols.forEach(item => {
                    if(down[down.length-1]==item){
                        symbols.forEach(el => {
                            if(arg == el){
                                setDown(down = down.substring(0, down.length-1))
                                return
                            }
                        })
                        return
                    }
                })
                setDown(down = down+arg)
            }
        }
        
    }
    return(
        <div className="container">
            <div className="calculator">
                <div className="output">
                    {/* <div className="up">{up}</div> */}
                    <div className="down">{down}</div>
                </div>
                <div className="keyboard">
                    <button className="btn two" onClick={()=> reduce("DEL")}>DEL</button>
                    <button className="btn" onClick={()=> reduce("C")}>C</button>
                    <button className="btn" onClick={()=> click("/")} >/</button>
                    <button className="btn" onClick={()=> click("1")} >1</button>
                    <button className="btn" onClick={()=> click("2")} >2</button>
                    <button className="btn" onClick={()=> click("3")} >3</button>
                    <button className="btn" onClick={()=> click("*")} >*</button>
                    <button className="btn" onClick={()=> click("4")} >4</button>
                    <button className="btn" onClick={()=> click("5")} >5</button>
                    <button className="btn" onClick={()=> click("6")} >6</button>
                    <button className="btn" onClick={()=> click("-")} >-</button>
                    <button className="btn" onClick={()=> click("7")} >7</button>
                    <button className="btn" onClick={()=> click("8")} >8</button>
                    <button className="btn" onClick={()=> click("9")} >9</button>
                    <button className="btn" onClick={()=> click("+")} >+</button>
                    <button className="btn" onClick={()=> click(".")} >.</button>
                    <button className="btn" onClick={()=> click("0")} >0</button>
                    <button className="btn two" onClick={()=> reduce("=")}>=</button>
                </div>
            </div>
        </div>    
    )
  
}

export default App;
