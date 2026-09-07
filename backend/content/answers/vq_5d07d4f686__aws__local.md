---
qid: vq_5d07d4f686__aws__local
question: How to display departmentwise and monthwise maximum salary?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 414
total_tokens: 645
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:53:16-05:00'
sources: []
---

**Situation & Task**  
In my previous role at a mid‑size retailer, the finance team needed a real‑time dashboard that displayed *department‑wise and month‑wise maximum salaries* for the payroll analytics portal. The existing batch ETL ran nightly on EMR, leaving stakeholders with stale data and forcing manual Excel work.

**Action (Technical Design)**  
I architected an **event‑driven Lambda pipeline** triggered by each payroll S3 upload.  
1. **Lambda** parses the CSV → extracts `department`, `month`, and `salary`.  
2. It writes a single row to **Amazon DynamoDB** with a composite key `(department, month)` and updates the `max_salary` using an atomic conditional write (optimistic locking).  
3. A scheduled **AWS Glue crawler** populates an **Athena** table for ad‑hoc reporting.  
4. The front‑end pulls data via API Gateway → Lambda → DynamoDB, cached in **ElastiCache Redis** to keep latency < 100 ms.

**Result**  
The new pipeline reduced salary‑max lookup time from *12 hours* to *under 1 minute*, cutting analyst effort by **85%** and enabling the finance team to publish monthly reports within 2 hours. Cost fell from $200/month (EMR) to <$20/month (Lambda/DynamoDB).  

**Leadership Principles Highlighted**  
- **Customer Obsession:** Delivered a friction‑less, real‑time experience for stakeholders.  
- **Ownership & Dive Deep:** Took end‑to‑end responsibility and engineered the solution with minimal operational overhead.

**Bar‑raiser Takeaway**  
Showed ownership by replacing an entire nightly job, quantified impact through measurable time savings, and learned that atomic updates in DynamoDB can replace complex aggregation jobs when data volume is moderate.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
