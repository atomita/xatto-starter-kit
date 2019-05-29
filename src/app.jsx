import { x, atto, Context } from 'xatto';

import { Counter } from './components/Counter';

const view = (props, children, context) => (
  <div>
    <Context slice="counters.0"><Counter /></Context>
    <Context slice="counters.1"><Counter /></Context>

    <h1>{context.counters.reduce((acc, v) => acc + v.count, 0)}</h1>
  </div>
);

atto(view, document.getElementById('app'))({
  counters: [{ count: 0 }, { count: 10 }],
});
