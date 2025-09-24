// Small interactive pipeline simulation (client-side only)
(function(){
  const log = document.getElementById('pipelineLog');
  const run = document.getElementById('runBtn');
  const reset = document.getElementById('resetBtn');

  function appendLine(line){
    log.textContent += '\n' + line;
    log.scrollTop = log.scrollHeight;
  }

  run.addEventListener('click', function(){
    log.textContent = '[pipeline] starting...';
    appendLine('[ci] Checkout code');
    setTimeout(()=>appendLine('[ci] Run unit tests — passed'),600);
    setTimeout(()=>appendLine('[ci] Build artifact'),1200);
    setTimeout(()=>appendLine('[ci] Run integration tests — passed'),1800);
    setTimeout(()=>appendLine('[cd] Deploy to staging'),2400);
    setTimeout(()=>appendLine('[cd] Smoke checks — passed'),3000);
    setTimeout(()=>appendLine('[cd] Promote to production (manual gate)'),3600);
    setTimeout(()=>appendLine('[pipeline] finished'),4200);
  });

  reset.addEventListener('click', function(){
    log.textContent = '[idle] Ready to run pipeline...';
  });
})();
