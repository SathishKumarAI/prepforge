---
qid: ing_49a9ae2b7d__star__local
question: 'Explain: Why Systems Become Unreliable — Reliability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 325
total_tokens: 564
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:55:48-05:00'
sources: []
---

**Situation:**  
At my previous company we launched a recommendation engine that powered the homepage for over 4 million daily users. Within two weeks of production, A/B test traffic started showing a 12% drop in click‑through rate and latency spiked from 200 ms to almost 1 s during peak hours.

**Task:**  
I had to diagnose why the system was becoming unreliable after deployment, pinpoint root causes, and deliver a fix that restored performance without sacrificing recommendation quality.

**Action:**  
First, I instrumented the inference pipeline with Prometheus metrics (queue depth, batch latency) and traced requests through OpenTelemetry. The data revealed that GPU memory fragmentation from repeated model reloads caused OOM errors in certain shards, forcing fallback to CPU execution. I refactored the model serving layer to use TorchServe with a static worker pool and implemented exponential back‑off for retraining jobs. Next, I introduced an adaptive batching strategy based on request rate, which reduced GPU idle time by 35%. Finally, I added automated health checks that restarted workers before memory thresholds were hit.

**Result:**  
Latency fell below 250 ms during peak traffic, and the click‑through rate rebounded to its pre‑deployment level (+10%). The system now self‑heals within 30 seconds of a failure. I learned that monitoring low‑level resource usage and coupling it with dynamic scaling is critical for ML service reliability in production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
