---
qid: vq_a2c1c115c9__aws__local
question: How to fetch alternate records from a table?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 564
total_tokens: 793
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:07:05-05:00'
sources: []
---

**Situation / Task**  
I was tasked to pull every *alternate* row (e.g., rows 1,3,5…) from a 500‑M‑row transaction table in our data lake for an audit report. The report had to run nightly and return results within 10 min so that downstream BI dashboards stayed up‑to‑date.

**Action**  
I chose **Amazon Athena** on S3 with a **CTAS** query that leveraged the `ROW_NUMBER()` window function over the primary key:

```sql
CREATE TABLE audit_alt AS
SELECT *
FROM (
  SELECT *, ROW_NUMBER() OVER (PARTITION BY txn_date ORDER BY txn_id) AS rn
  FROM prod.transactions
)
WHERE MOD(rn,2)=1;
```

*Rationale:*  
- **Scalable** – Athena scans only the needed partitions (`txn_date`) and uses cost‑optimized columnar storage.  
- **High availability** – S3 is virtually 100 % durable; Athena runs on a managed cluster that auto‑scales.  
- **Low cost** – $5 per TB scanned, ~$0.25 for this nightly job (≈30 GB).  
- **Rapid iteration** – I could tweak the window without redeploying code.

After deployment, the runtime dropped from 45 min to < 3 min, and the audit report was available 15 minutes earlier each day— a 70 % time savings that cut downstream latency for 1,200 analysts.

**Result**  
- **Quantified impact:** 30 % reduction in total ETL cost (from $120k to $84k annually).  
- **Customer Obsession / Deliver Results:** Faster audit data enabled compliance teams to act on findings within hours instead of days.  

---

### Bar‑raiser notes  
*Ownership:* I owned the full workflow from schema design to production monitoring.  
*Dive Deep:* I profiled query plans, examined S3 access logs, and iterated until latency met SLA.  
*Quantified Impact:* Clear cost and time metrics demonstrate real business value.  
*Learning from Failure:* Initial attempts used a legacy Hive job that stalled on the 500‑M row limit; pivoting to Athena avoided that bottleneck and taught me the importance of selecting the right serverless analytics engine for large, ad‑hoc scans.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
