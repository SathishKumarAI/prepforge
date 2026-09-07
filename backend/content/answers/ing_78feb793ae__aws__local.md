---
qid: ing_78feb793ae__aws__local
question: How would you detect that a parser silently corrupted documents, at scale,
  without reading every page?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 411
total_tokens: 649
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:58:57-05:00'
sources: []
---

**Situation / Task**  
At my previous role I managed a document‑ingestion pipeline that fed AI models for legal discovery. A recent update to the parser caused silent corruption of ~3 % of PDFs—pages were truncated but no error logs surfaced. The business impact: downstream NLP models produced inaccurate entity extraction, costing ~$120K/month in manual re‑review.

**Action**  
I framed this as a *Customer Obsession* + *Ownership* problem. I built an automated “health audit” service:

1. **Sampling & Fingerprinting** – Randomly pick 0.5 % of new documents each hour, compute SHA‑256 hashes of full PDFs and of the parsed text length.  
2. **Metric Engine** – Store hash pairs in DynamoDB with TTL; trigger a Lambda that compares expected vs actual lengths against historical baselines (mean ± 3σ).  
3. **Alerting & Rollback** – If deviation > 5 %, CloudWatch Alarm triggers an SNS topic, auto‑rolls back the parser version and flags the batch for manual QA.

The system processes 200k docs/day with < $0.05/day cost, scales via Lambda concurrency controls, and guarantees ≥99.9 % availability by using multiple Availability Zones.

**Result**  
Within two weeks I reduced silent corruption from 3 % to < 0.01 %, cutting manual review costs by $115K/month. The pipeline now self‑heals in under 30 min of anomaly detection, keeping our AI models accurate and customers confident.  

**Reflection (Bar‑raiser focus)**  
I owned the issue end‑to‑end, dove deep into hashing & statistical thresholds, quantified impact with cost savings, and learned that lightweight sampling can replace exhaustive checks at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
