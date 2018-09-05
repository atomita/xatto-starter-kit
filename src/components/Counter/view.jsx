import { x } from 'xatto';

const down = (event, context) => ({ count: context.count - 1 });
const up = (event, context) => ({ count: context.count + 1 });

export const CounterView = ({ xa: { context }, ...attrs }, children) => (
  <div class="c-counter">
    <h1>{context.count}</h1>
    <button onclick={down} data-test="down-button">
      -
    </button>
    <button onclick={up}>+</button>
  </div>
);
