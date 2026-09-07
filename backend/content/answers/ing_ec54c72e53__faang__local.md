---
qid: ing_ec54c72e53__faang__local
question: 'Explain: A customer''s LLM endpoint p99 latency jumped from 2s to 20s this
  week. No code changes on their side. Debug it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 482
total_tokens: 736
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:50:04-05:00'
sources: []
---

**Clarify**  
We’re seeing a jump in the 99th‑percentile latency of an LLM inference endpoint from ~2 s to ~20 s this week, with no client‑side code changes. Confirm:  
1. Is the metric per request or aggregated?  
2. Which deployment (cloud region, instance type) hosts the model?  
3. Are there concurrent deployments or A/B tests?  
4. Was any internal infra update (autoscaling, patching, network) applied this week?

**Approach**  
1. **Data sanity check** – verify metric source and sampling window.  
2. **Infrastructure audit** – inspect autoscaler logs, CPU/memory usage, GPU queue lengths, batch sizes.  
3. **Model‑level inspection** – look at token‑generation times, attention matrix size, possible new input patterns.  
4. **External dependencies** – latency to storage (S3/Blob), KV caches, or model‑weights pulls.

**Depth**  
- If autoscaler throttled GPU slots, queue latency spikes; check the `max_concurrent_requests` config.  
- High CPU/GPU utilization (>90 %) leads to context switching and longer inference times; monitor with Prometheus/KubeMetrics.  
- A sudden increase in input length (e.g., user requests 10× more tokens) directly inflates compute time; analyze request payloads for token counts.  
- Cache misses or cold starts of model weights can add seconds; confirm cache hit ratios.  
Complexity: O(n) over recent request logs; trade‑off between granularity and overhead.

**Edge Cases**  
- Sudden spike due to a single long‑running request skewing p99.  
- Network partition causing retries, artificially inflating latency.  
- Model version drift (automatic rollback) unintentionally serving a heavier variant.

**Optimize & Communicate**  
Explain the root cause clearly: e.g., “The autoscaler reduced GPU slots from 4 to 2 this week, causing queue delays.” Suggest mitigations—adjust scaling thresholds, enable request batching, or increase GPU count. Summarize findings in a concise slide deck and propose monitoring alerts on queue depth and CPU utilization to catch similar regressions early.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
