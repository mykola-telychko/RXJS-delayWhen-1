import { interval, timer } from 'rxjs';
import { delayWhen } from 'rxjs/operators';

// https://www.learnrxjs.io/learn-rxjs/operators/utility/delaywhen
// Example 1: Delay based on observable

//emit value every second
const message = interval(1000);
//emit value after five seconds
const delayForFiveSeconds = () => timer(5000);
//after 5 seconds, start emitting delayed interval values
const delayWhenExample = message.pipe(delayWhen(delayForFiveSeconds));
const subscribe = delayWhenExample.subscribe((val) => console.log(val));
//ex. output: 5s....1...2...3
