---
qid: ing_98cf3bec4f__star__local
question: 'Explain: F10: Browser crash leaves orphaned VM — Computer Use Agent Production'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 368
total_tokens: 609
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:38:06-05:00'
sources: []
---

**Situation:**  
During a quarterly release of our AI‑driven web interface, one of the edge browsers (F10) would sometimes terminate abruptly while users were running heavy inference jobs in isolated VMs. The crash left the VM process alive but detached from the browser UI, consuming memory and blocking GPU resources.

**Task:**  
I had to design a robust recovery system that could detect orphaned VMs, reclaim their resources, and prevent data loss for any ongoing inference tasks—all without affecting normal user sessions or compromising security.

**Action:**  
1. Instrumented the Browser‑VM bridge with a lightweight heartbeat over gRPC; if no ping in 30 s, flagged the VM as orphaned.  
2. Implemented a watchdog daemon that listened to these flags and triggered a graceful shutdown of the orphaned VM’s Docker container, then re‑spawned it behind the same session token using our existing orchestration API (Kubernetes).  
3. Added an idempotent checkpointing layer: before shutting down, the VM persisted its model state to S3; upon restart it resumed from that checkpoint.  
4. Updated the front‑end to show a “Reconnecting…” overlay and queued any new inference requests until the VM was fully restored.

**Result:**  
Post‑deployment, orphaned VMs dropped from 12 % of crash incidents to <1 %. Memory usage stabilized, GPU idle time fell by 35 %, and user‑reported “session lost” complaints decreased by 70 %. I learned that proactive health checks coupled with stateless container orchestration can turn a fragile browser–VM coupling into a resilient service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
