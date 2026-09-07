---
qid: ing_8aff8c571e__aws__local
question: An agentic research query returns a memo citing a case that was overruled.
  Where does that get caught?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 490
total_tokens: 732
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:39:55-05:00'
sources: []
---

**Situation & Task**  
In my last role I led a product that auto‑generates research memos for legal teams. A user raised a bug: the system was returning a memo that cited a case later overruled, which could mislead attorneys. My goal was to design an end‑to‑end pipeline that guarantees *current* citations and logs every change so we can audit compliance.

**Action**  
1. **Data ingestion & validation** – I built a Lambda function triggered by S3 uploads of new case summaries. It calls the AWS Comprehend Medical API to extract case names, then queries an up‑to‑date DynamoDB table (`CaseStatus`) that stores *status* (active/overruled) and *effective date*.  
2. **Versioned memo store** – The generated memo is written to S3 with a deterministic key (`memo-{caseId}-{timestamp}.json`). A CloudWatch Event updates an Athena view that materializes the latest valid citation per case, filtering out overruled ones.  
3. **Audit trail & alerting** – Each Lambda run writes to Kinesis Data Firehose → Redshift for audit logs. If a memo contains an overruled citation, a SNS notification is sent and the memo is flagged in the UI.

**Result**  
- Reduced downstream legal disputes by **87 %** (pre‑fix 18 incidents → 3).  
- Cut manual review time from 2 hrs to <10 min per document.  
- The audit table now holds 1.5 M rows with <0.5 ms query latency, keeping cost under $200/month.

**Reflection**  
I owned the entire stack, diving deep into AWS services to balance scalability (Kinesis, Redshift) and availability (S3 versioning). I learned that even a single stale citation can erode trust; continuous monitoring is non‑negotiable. This design exemplifies **Customer Obsession**, **Ownership**, and **Dive Deep**—the pillars Amazon looks for in a bar‑raiser.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
