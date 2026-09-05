---
qid: ing_7e79e10a50__star__local
question: 'Explain: Your LLM endpoint''s p99 latency doubled after a deploy. The model
  weights didn''t change. Walk me through your debugging.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 327
total_tokens: 579
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:46:41-05:00'
sources: []
---

**Situation:**  
During a production rollout of our customer‑support chatbot, we noticed the p99 latency for the LLM inference endpoint jumped from ~350 ms to ~700 ms right after deploying a new container image that only updated the request‑routing logic.

**Task:**  
Identify the root cause of the spike and bring latency back below 400 ms without compromising throughput or model accuracy.

**Action:**  
1. Collected metrics with Prometheus/Thanos: CPU, GPU utilization, queue depth, and batch size per request.  
2. Compared container resource limits between pre‑ and post‑deploy images; discovered the new image had a lower `--max_batch_size` flag, causing more single‑instance calls.  
3. Re‑enabled batching by restoring the original flag and added a dynamic scheduler that caps queue length at 200 requests.  
4. Instrumented request traces in OpenTelemetry to confirm each batch hit the same GPU kernel path; no weight changes were observed.  
5. Deployed a canary with A/B testing, monitored p99, and rolled back if latency exceeded 450 ms.

**Result:**  
Latency returned to ~320 ms (p99) within 15 minutes of rollback. Throughput increased by 12% due to efficient batching. Learned that even non‑model changes—like container flags or scheduler tweaks—can double tail latency, so I now include batch‑size and queue‑depth checks in every deployment pipeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
