---
qid: ing_ddd9d1c8fc__aws__local
question: 'Explain: What to Log — Safety And Governance'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 527
total_tokens: 755
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:40:57-05:00'
sources: []
---

**Situation (S)**  
When we launched our generative‑model platform in 2024, regulators demanded real‑time audit trails for every inference to prove bias mitigation and data privacy compliance. The risk was a $3 M fine if we failed.

**Task (T)**  
I owned the “Safety & Governance Logging” feature: capture model inputs, outputs, metadata, and internal state changes without impacting latency or violating user privacy.

**Action (A)**  
1. **Define what to log** – all request payloads, response scores, audit‑trail IDs, model version, and inference timestamp.  
2. **AWS design** –  
   * **API Gateway + Lambda@Edge** for first‑class logging with 0 ms latency overhead.  
   * **Kinesis Data Firehose → S3 Glacier Deep Archive** (encryption via KMS) for immutable audit data.  
   * **CloudWatch Logs & Insights** for real‑time alerts on anomalous patterns.  
   * **Athena + Glue** for ad‑hoc compliance queries (e.g., “how many requests contained PII?”).  
3. **Governance controls** – IAM roles restrict read/write; data retention policy auto‑purges after 5 years per GDPR.  
4. **Cost & scalability** – Kinesis cost ≈ $0.015/GB, S3 Glacier Deep Archive $0.004/GB/month; total projected $12K/month vs. a potential $3M fine.

**Result (R)**  
Within three months we achieved 99.9 % log ingestion success, cut inference latency from 120 ms to 115 ms, and passed an external audit with zero findings—avoiding the $3 M penalty and earning a “Compliance Champion” badge for the team.

---

**Leadership Principles Highlighted**

* **Customer Obsession** – ensuring customers’ data privacy.  
* **Ownership** – taking end‑to‑end responsibility for logging.  

Bar‑raiser notes: depth of AWS service choice, quantified latency & cost savings, and learning from prior failures (e.g., earlier manual log stores that hit 99 % loss).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
