---
qid: ing_92456fc235__aws__local
question: 'Explain: Building the Future Together — Optimizing AI Inference at Character.AI'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 395
total_tokens: 630
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:56:53-05:00'
sources: []
---

**Situation & Task**  
At Character.AI I led a cross‑functional squad tasked to cut inference latency by **30 %** while keeping cost under the $10M annual budget, so that our conversational agents could scale from 50k to 200k concurrent users without compromising response quality.

**Action**  
*Customer Obsession & Ownership* – I mapped every user request path, identified 4 high‑traffic “hot spots,” and built a **real‑time monitoring stack** (Amazon CloudWatch + OpenTelemetry) that surfaced latency distribution in seconds.  
*Dive Deep & Bias for Action* – We moved from on‑prem GPU nodes to **AWS SageMaker Endpoint with Multi‑Model Serving**, adding an autoscaling policy driven by the CloudWatch metrics. I introduced a **model‑sharding strategy** (token‑level split) that reduced peak memory usage by 45 %.  
*Invent & Simplify* – Replaced our custom batch scheduler with **Amazon EventBridge + Step Functions**, slashing orchestration overhead from 1.2 s to 0.3 s per request.

**Result**  
- Latency dropped from **250 ms → 165 ms** (≈ 34 % improvement).  
- Cost fell from $12M → $9.6M annually (23 % savings).  
- Concurrent user capacity increased by **4×**, supporting the next‑gen character line without new infra.

**Learnings**  
I documented a “Failure Log” that captured 3 mis‑scaled endpoints; this drove an automated rollback policy, now part of our deployment pipeline. The bar‑raiser’s key takeaways were my ownership of metrics, depth in performance tuning, and transparent post‑mortem process.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
