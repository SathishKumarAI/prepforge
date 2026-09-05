---
qid: ing_39ab81589d__star__local
question: 'Explain: NFR — Youtubestreaminghld'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 510
total_tokens: 748
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:24:05-05:00'
sources: []
---

**Situation** – I was part of the core platform team tasked with launching a new video‑recommendation service for YouTube’s next‑generation streaming app. The product needed to serve millions of concurrent users worldwide while keeping latency under 200 ms and uptime above 99.9%.

**Task** – My job was to translate those high‑level expectations into concrete non‑functional requirements (NFRs) that the engineering, ops, and data science teams could measure and audit against.

**Action** – I led a cross‑function workshop where we mapped each user story to NFRs:  
- *Latency*: 95th percentile < 200 ms, measured via Prometheus metrics on request traces.  
- *Scalability*: Auto‑scale Kubernetes clusters using HPA based on CPU and queue depth; target capacity for a 10× traffic spike.  
- *Reliability*: Multi‑region deployment with active‑active load balancers; failover in < 30 s, monitored by Grafana dashboards.  
- *Data freshness*: Ingest pipeline (Kafka → Flink → BigQuery) kept model inputs ≤ 5 min stale, verified through daily data quality checks.  
We documented SLAs and built automated alerts for each NFR.

**Result** – After launch, we achieved 99.97% uptime and a 190 ms median latency under peak load, surpassing the target by 5%. The service handled a 12× traffic surge during a global event without degradation. I learned that embedding clear, measurable NFRs early in the design phase turns abstract goals into actionable checkpoints that keep teams aligned across disciplines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
