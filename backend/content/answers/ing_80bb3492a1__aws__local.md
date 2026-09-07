---
qid: ing_80bb3492a1__aws__local
question: 'Explain: Verify Before Parsing Business Data — Webhooks | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 424
total_tokens: 657
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:16:08-05:00'
sources: []
---

**Situation & Task**  
In my last role I built a webhook‑driven ingestion pipeline for a SaaS client that received >10 M events/day from third‑party partners. A single malformed payload caused downstream model training to stall, costing the team ~$4k/month in compute and delaying releases by 3 days.

**Action**  
I introduced a *Verify‑Before‑Parse* microservice (AWS Lambda + API Gateway). It performs:

1. **Schema validation** via Amazon DynamoDB for partner‑specific JSON schemas (FastJSON + AWS Glue Schema Registry).  
2. **Business rule checks** (e.g., timestamp freshness, required fields) using an in‑memory cache (ElastiCache Redis).  
3. If valid, it publishes to an encrypted Kinesis Data Stream; if invalid, it writes the payload to S3 (bucket lifecycle 30 days) and sends a CloudWatch alarm.

The service is **stateless** and auto‑scales with Lambda concurrency limits, keeping cold‑start latency <50 ms. We added *AWS Step Functions* for retry logic, ensuring at most one re‑parse per event.

**Result**  
- 99.9% of invalid events caught before parsing (vs 0% previously).  
- Compute cost dropped from $4k to $1.2k/month (~70 % savings).  
- Release cycle time shortened by 2 days, improving customer satisfaction scores from 84 % to 92 %.  

**Learnings & Bar‑Raiser Signals**  
I owned the end‑to‑end flow, dove deep into schema evolution patterns, and quantified impact with clear metrics. I iterated on failure cases (e.g., new partner schema) and shared lessons in a retrospective, demonstrating continuous learning—exactly what Amazon looks for in a high‑bar candidate.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
