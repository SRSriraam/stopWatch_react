import React,{Component} from 'react';
import './stopWatch.css'



class StopWatch extends Component{
    constructor(){
        super()
        this.state={
            hours:0,
            minutes:0,
            seconds:0
        }
    }

    startWatch=()=>{
        this.timerID = setInterval(
            () =>this.increaseSecond(),
            1000
          );
    }

    increaseSecond=()=>{
        let second= this.state.seconds;
        if(second<59){
            this.setState({
                seconds:(second+1)
            })
        }else{
            return this.increaseMinutes()
        }
    }

    increaseMinutes=()=>{
        let minute = this.state.minutes;
        if(minute<59){
            this.setState({
                minutes:(minute+1),
                seconds:0
            })
        }else{
            return this.increaseHours();
        }
    }


    increaseHours=()=>{
        let hour= this.state.hours;
        if(hour<59){
            this.setState({
                hours:hour+1,
                minutes:0,
                seconds:0
            })
        }else{
            return  clearInterval(this.timerID);
            };
        
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

    render(){
        return(
            <div className="text-center">
                <div class="shadow-lg  mb-5 bg-white rounded">
                    <nav class="navbar navbar-dark bg-dark">
                        <div className='custom-nav'> StopWatch 2020 vr-4.31</div>
                    </nav>
                </div>
                <div>
                    <h2>
                    {this.state.hours}-{this.state.minutes}-{this.state.seconds}
                    </h2>
                    
                </div>
                <div>
                    <button className='btn btn-primary mr-2' onClick={this.startWatch}>Start</button>
                    <button className='btn btn-danger mr-2' onClick={this.StopWatch}>Stop</button>
                    <button className='btn btn-secondary mr-2' onClick={this.resetWatch}>Reset</button>
                </div>

                
            </div>
        )
    }
}


export default StopWatch;
   


