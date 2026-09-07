---
qid: ing_d82df3e1eb__aws__local
question: 'Explain: Cons — Availability | System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 361
total_tokens: 588
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:28:22-05:00'
sources: []
---

**Answer (Amazon style)**  

During a recent **AI inference platform redesign**, I led the effort to trade *availability* for *performance* and *cost*.  

| Situation | Task | Action | Result |
|-----------|------|--------|--------|
| Our ML‑model serving cluster hit 99.9 % SLA, but latency spiked during traffic bursts (200 ms → 700 ms). | Reduce cost while keeping acceptable latency for 95 % of requests. | • Deployed **Amazon SageMaker Endpoint** with **Multi‑Model Endpoints** to share GPU resources across models.<br>• Enabled **Provisioned Concurrency** only during peak hours and switched to **On‑Demand** otherwise.<br>• Added a **Redis Cache** (ElastiCache) for pre‑computed embeddings, cutting inference time by 60 %. | *Availability dropped from 99.9 % to 98.7 %*, but **latency fell to 250 ms** and **monthly spend decreased by 35 %**. The trade‑off was acceptable because our customer SLA allowed a slight dip in availability for faster responses, and the new architecture still met business KPIs.  

I practiced *Ownership* by owning the post‑implementation monitoring (CloudWatch dashboards) and *Dive Deep* to understand cache hit ratios that drove latency gains. I learned that **slight availability erosion can be justified** when it yields measurable performance & cost benefits, but only after rigorous data analysis and stakeholder alignment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
