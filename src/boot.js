import './vendor';

if (process.env.HMR) {
  document.getElementById('app').innerHTML = '';
}

async function boot() {
  try {
    await import('./app');
  } catch (e) {
    ((console && console.error) || console.log || (v => v))(`error: ${e.toString()}`, e);
  }
}

boot();
