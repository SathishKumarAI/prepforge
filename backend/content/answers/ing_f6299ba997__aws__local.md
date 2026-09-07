---
qid: ing_f6299ba997__aws__local
question: 'Explain: Cost model — Mcp Knowledge Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 448
total_tokens: 676
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:33:33-05:00'
sources: []
---

**Situation / Task**  
At my last role I led the migration of a legacy “MCP Knowledge Agent” (Microsoft Cognitive Platform) to an on‑premises AI service that needed to process ~4 M user queries/day while staying under $30k/month. The leadership principle *Customer Obsession* drove us to keep latency <200 ms and cost predictable.

**Action**  
1. **Cost model design** – I split the workload into three tiers:  
   - *Cold tier* (70 % of traffic) → **Amazon S3 + Lambda** for pre‑computed answers, 10 % storage cost.  
   - *Warm tier* (20 %) → **AWS Elastic Container Service (ECS)** with Spot instances, autoscaling on CPU/Memory, saving ~30 % vs On‑Demand.  
   - *Hot tier* (10 %) → **Amazon SageMaker Endpoint** for real‑time inference, reserved 1‑year instance to lock in a 50 % discount.  

2. **Savings plan & Spot usage** – negotiated an AWS Savings Plan covering 80 % of the compute footprint, yielding a projected 40 % reduction.

3. **Monitoring & Optimization** – set up CloudWatch dashboards; after 30 days, traffic patterns revealed peak windows, so I added auto‑scaling thresholds that cut idle capacity by 25 %.

**Result**  
- Monthly spend fell from $35k to **$28k** (20 % savings).  
- Latency improved from 350 ms to **180 ms** (30 % faster).  
- The solution was 99.9 % available, meeting SLAs.

**Reflection**  
I took *Ownership* by driving the end‑to‑end cost model and *Dive Deep* into usage telemetry; learned that pre‑computing high‑frequency queries can drastically cut inference costs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
