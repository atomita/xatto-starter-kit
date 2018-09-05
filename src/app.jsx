import { x, atto } from 'xatto';

import { Counter } from './components/Counter';

const view = ({ xa: { context }, ...attrs }, children) => (
  <div>
    <Counter xa={{ slice: 'counters.0' }} />
    <Counter xa={{ slice: 'counters.1' }} />

    <h1>{context.counters.reduce((acc, v) => acc + v.count, 0)}</h1>
  </div>
);

atto(view, document.getElementById('app'))({
  counters: [{ count: 0 }, { count: 10 }],
});
