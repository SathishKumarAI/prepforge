---
qid: ing_0c28f65c14__star__local
question: 'Explain: Take-Aways for Capacity Planning — Llm Infrastructure'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 350
total_tokens: 587
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:52:59-05:00'
sources: []
---

**Situation**  
In my last role at a fintech startup, we launched an on‑prem LLM service that handled real‑time fraud detection queries. Within the first month, latency spiked from 120 ms to 350 ms during peak trading hours, and our SLA of <200 ms was breached.

**Task**  
I had to design a capacity plan that would keep response times under 200 ms while staying within a $50K quarterly budget. The plan needed to anticipate traffic spikes, support future model upgrades, and provide visibility for the ops team.

**Action**  
First, I instrumented the inference pipeline with Prometheus metrics (CPU, GPU utilization, queue depth) and set up Grafana dashboards. Using historical request logs, I built a Poisson arrival model to estimate peak load (~3k QPS). I then ran a cost‑benefit analysis of scaling options: adding 2x GPUs vs. switching to mixed‑precision inference with TensorRT. After benchmarking, the mixed‑precision path cut latency by 30 % and reduced GPU usage by 40 %. I drafted an autoscaling policy that spun up additional nodes only when queue depth exceeded 200 requests for 60 s, keeping costs under control.

**Result**  
Post‑deployment, average latency dropped to 165 ms during peak periods, restoring SLA compliance. The autoscaler reduced GPU hours by 35 %, saving $18K annually. I learned that coupling real‑time telemetry with probabilistic load modeling is key to proactive capacity planning for LLM workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
