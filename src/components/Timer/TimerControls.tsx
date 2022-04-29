import { ControlTimerProps } from "../../interface/ControlTimer"

export const TimerControls = (props : ControlTimerProps) => {
    const handleStartTimer = () => {
        return props.controlTimer(props.timeLeft)
    }
    const handleStopTimer = () => {
        return props.controlTimer()
    }
    
    if (props.isPaused) {
        return(
            <div
                onClick={handleStartTimer}
                className={props.hovered ? 'timer_controls_paused' : 'timer_controls_paused--hidden'}
            >
                <img className='timer_controls--button' src={props.srcIcon} />
            </div>
        )
    } else {
        return(
            <div
                onClick={handleStopTimer}
                className={props.hovered ? 'timer_controls_unPaused' : 'timer_controls_unPaused--hidden'}
            >
                <img className='timer_controls--button' src={props.srcIcon} />
            </div>
        )
    }
} 