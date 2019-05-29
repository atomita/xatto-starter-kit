import { x } from 'xatto';

const down = context => ({ count: context.count - 1 });
const up = context => ({ count: context.count + 1 });

export const CounterView = (props, children, context) => (
  <div class="c-counter">
    <h1>{context.count}</h1>
    <button onclick={down}>-</button>
    <button onclick={up}>+</button>
  </div>
);
