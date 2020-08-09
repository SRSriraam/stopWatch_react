import React,{Component} from 'react';
import './Timer.css'

class Timer extends Component{
    constructor(){
        super()
        this.state={
            hours:0,
            minutes:0,
            seconds:0,
            displayForm:false
        }
    }
    getForm=()=>{
        this.setState({
            displayForm:true
        })
    }
   

     setClock=(e)=>{
         this.setState({
             [e.target.name]:e.target.value,
             [e.target.value]: ''
        })
     }
     clockStart=()=>{
        this.timerID = setInterval(
            () =>this.decreaseSecond(),
            1000
          );
     }

     decreaseSecond=()=>{
         var second=this.state.seconds;
         if(second>0){
             this.setState({
                 seconds:(second-1)
             })
         }else{
             return this.decreaseMinute()
         }
     }
    decreaseMinute=()=>{
        var minute=this.state.minutes
        if(minute>0){
            this.setState({
                minutes:(minute-1),
                seconds:59
            })
        }else{
            return this.decreaseHours();
        }
    }
    decreaseHours=()=>{
        var hour=this.state.hours;
        if(hour>0){
            this.setState({
                hours:(hour-1),
                minutes:59,
                seconds:59
            })
        }else{
            return  clearInterval(this.timerID);
        }
    }
    StopWatch=()=>{
        return  clearInterval(this.timerID);
      }

      resetWatch=()=>{
        this.setState({
            hours:0,
            minutes:0,
            seconds:0
        })
    }
  

    submitForm=()=>{
        this.setState({
            displayForm:false
        })
    }


    render(){
        let  displayForms =  <div className=' container '>
        <div className='custom-form'>
        <form>
            <div className="form-group">
                <label for="number">Enter hours</label>
                <input type="number" className="form-control" name='hours' onChange={this.setClock}/>
            </div>
            <div className="form-group">
                <label for="number">Enter minutes</label>
                <input type="number" className="form-control" name='minutes' onChange={this.setClock}/>
            </div>
            <div className="form-group">
                <label for="number">Enter seconds</label>
                <input type="number" className="form-control" name='seconds' onChange={this.setClock}/>
            </div>
            <butoon className='btn btn-secondary'  onClick={this.submitForm}>Submit Form</butoon>
        </form>
        </div>
    </div>
        return(

            <div className='text-center'>
                <nav className="navbar navbar-dark bg-dark custom-navbar">
                   <div className='custom-navbar-div'>TIMER WATCH...</div> 
                </nav>
                <br/>
                <br/>
                <div className="container card shadow-lg p-3 mb-5 bg-white rounded">
                <h1>Set Your Time</h1>
                <div>
                    <h2>
                        {this.state.hours}-{this.state.minutes}-{this.state.seconds}
                    </h2>
                </div>
                <div>
                   {this.state.displayForm ? displayForms:null}
                </div>
                <div>
                    <butto className='btn btn-secondary mr-3' onClick={this.getForm}>Form To Set Time</butto>
                    <button className='btn btn-primary mr-3' onClick={this.clockStart}>Start</button>
                    <button className='btn btn-danger mr-3' onClick={this.StopWatch}>Stop</button>
                    <button className='btn btn-secondary' onClick={this.resetWatch}>Reset</button>
                </div>
                </div>
               
            </div>
        )
    }
}
export default Timer;