export type TimerState = {
    isPaused: boolean,
    srcIcon: string,
    color: string,
    totalTime: number,
    timeLeft: number,
    timer: null | ReturnType<typeof setTimeout>,
    hovered: boolean
}