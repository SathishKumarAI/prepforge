---
qid: ing_34e6567de5__aws__local
question: 'Explain: High Availability Patterns — Availability | System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 366
total_tokens: 595
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:24:20-05:00'
sources: []
---

**High‑Availability Design for an AI inference service**

*Situation*: Our recommendation engine served ~1 M concurrent users daily. A single‑region deployment suffered 12 % latency spikes during traffic bursts, breaching SLA.  
*Task*: Redesign to achieve 99.99 % uptime while keeping cost < $50k/month.  
*Action*:  

- **Architecture**: Multi‑AZ ELB → API Gateway → Lambda@Edge + SageMaker Real‑Time Inference endpoints (one per AZ).  
- **Stateful caching**: DAX in each AZ for feature vectors, TTL 5 min, ensuring sub‑10 ms cache hits.  
- **Chaos engineering**: Weekly simulated AZ failures; metrics collected in CloudWatch.  
- **Cost trade‑off**: Use spot instances for batch retraining jobs (≈30 % cheaper) while keeping inference on On‑Demand for reliability.  

*Result*: Uptime rose from 99.92 % to 99.998 %, latency dropped 35 % during peak, and cost stayed within budget.  
**Leadership Principles**: *Customer Obsession* – we reduced user wait times; *Ownership* – I led the end‑to‑end redesign and post‑mortem analysis.  

Bar‑raiser signals: clear ownership of metrics, deep dive into failure modes (AZ outages), quantified impact on latency/uptime, and lessons learned (e.g., adding DAX eliminated cache miss penalty).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
