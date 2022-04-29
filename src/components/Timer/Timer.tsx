import React from 'react';
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import { TimerState } from '../../interface/TimerState';
import { TimerControls } from './TimerControls';

class Timer extends React.Component<any, TimerState> {
    constructor(props : Object) {
        super(props);
        this.startTimer = this.startTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
        this.handleHover = this.handleHover.bind(this);
        this.handleLeave = this.handleLeave.bind(this);
        this.timeLeftConvertToPercent = this.timeLeftConvertToPercent.bind(this);
        this.formatTimer = this.formatTimer.bind(this);
        this.state = {
            isPaused: true,
            srcIcon: require("../../asset/resource/play.svg"),
            color: '#F6E05E',
            totalTime: 600,
            timeLeft: 600,
            timer: null,
            hovered: false
        }
    }

    startTimer(timeLeft: number) {
        this.setState({
            isPaused: false,
            srcIcon: require('../../asset/resource/stop.svg'),
            color: '#48BB78'
        })

        if (this.state.timer) clearInterval(this.state.timer);

        let timer = setInterval(() => {
            if(!this.state.isPaused) {
                let timeLeft = this.state.timeLeft - 1
                if (timeLeft === 0) clearInterval(timer)

                this.setState({
                    timeLeft: timeLeft
                })
            }
        }, 1000)


        return this.setState({
            timeLeft: timeLeft,
            timer: timer
        })
    }

    stopTimer() {
        this.setState({
            isPaused: true,
            srcIcon: require("../../asset/resource/play.svg"),
            color: '#F6E05E'
        })
    }

    formatTimer(timeLeft : number) {
        let minutes : number;
        let seconds : number | string;

        minutes = Math.floor(timeLeft / 60);
        seconds = timeLeft % 60;
        if (seconds < 10) seconds = `0${seconds}`;

        return `${minutes}:${seconds}`;
    }

    timeLeftConvertToPercent() {
        return this.state.timeLeft / this.state.totalTime * 100; 
    }

    handleHover() {
        this.setState({hovered: true});
    }

    handleLeave() {
        this.setState({hovered: false});
    }

    render() {
        return (
            <div className='timer_body'>

                <CircularProgress
                    onMouseLeave={this.handleLeave}
                    onMouseEnter={this.handleHover}
                    thickness={7}
                    color={this.state.color}
                    size={348}
                    value={this.timeLeftConvertToPercent()}>

                    <CircularProgressLabel
                        fontSize='4.5rem'
                        fontFamily='clockicons'
                        color={this.state.color}
                    >
                            {this.formatTimer(this.state.timeLeft)}
                    </CircularProgressLabel>

                    <TimerControls
                        controlTimer={this.state.isPaused ? this.startTimer : this.stopTimer}
                        hovered={this.state.hovered}
                        srcIcon={this.state.srcIcon}
                        timeLeft={this.state.timeLeft}
                        isPaused={this.state.isPaused}/>
    
                </CircularProgress>
            </div>
        )
    }
}

export { Timer }
