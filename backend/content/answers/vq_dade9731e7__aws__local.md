---
qid: vq_dade9731e7__aws__local
question: Can you copy the PROGRAM UNIT into an Object group ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 473
total_tokens: 704
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:17:59-05:00'
sources: []
---

**Situation & Task**  
I was tasked to move a legacy “Program Unit” (a large binary blob, ~250 MB) from an on‑prem data lake into a new *Object Group* in S3 for downstream analytics. The goal was to preserve metadata, ensure auditability, and keep cost under $0.10 per GB/month.

**Action**  
I designed a **serverless pipeline**:  

| Step | AWS Service | Why |
|------|-------------|-----|
| Trigger on upload | **S3 Event Notification** | Low‑latency, zero‑cost trigger |
| Copy & tag | **AWS Lambda (Python)** | Idempotent copy; adds `ProgramUnit=true` and lineage tags |
| Validation | **Amazon SQS + Step Functions** | Retry logic for >10 % failure window |
| Archival | **S3 Glacier Deep Archive** | 99.999999999% durability at $0.004/GB |

The Lambda reads the object key, copies it to the target group using `CopyObject`, and writes an audit log to DynamoDB (`ProgramUnitCopies`). I added a CloudWatch metric filter that counts successful vs failed copies.

**Result**  
- **99.9 % success rate** on first run (1,200 objects).  
- Reduced storage cost by **35 %** compared to keeping all in S3 Standard.  
- Audit log enabled compliance reviews within 2 hrs of upload.  

**Leadership Principles**  
*Customer Obsession*: Ensured data owners could query lineage instantly.  
*Ownership & Dive Deep*: Built the entire pipeline, monitored edge cases, and documented rollback procedures.

**Bar‑raiser takeaway** – I owned the solution end‑to‑end, quantified impact (cost, reliability), and learned that a tiny Lambda retry loop can dramatically improve resilience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
