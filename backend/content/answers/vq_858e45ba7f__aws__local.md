---
qid: vq_858e45ba7f__aws__local
question: Is it possible to open a cursor which is in a Package in another procedure
  ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 502
total_tokens: 738
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:01:25-05:00'
sources: []
---

**Situation & Task**  
I was on the data‑engineering team building an ETL pipeline that consumed Oracle database snapshots. A downstream analytics service needed to read rows from a cursor defined in a PL/SQL package (`pkg_sales`). The cursor was declared with `PRAGMA RESTRICT_REFERENCES` and opened only inside procedure `proc_load`. My goal: expose those rows without breaking encapsulation or performance.

**Action**  
1. **Dive Deep into the Package** – Reviewed the source; the cursor was a *REF CURSOR* returned by `func_get_sales_cursor(p_date IN DATE) RETURN SYS_REFCURSOR`.  
2. **Design a Thin Wrapper** – Created a new procedure `proc_expose_sales` that internally calls `func_get_sales_cursor`, opens the returned ref cursor, and streams it out via an `OUT SYS_REFCURSOR`.  
3. **Leverage AWS Glue & S3** – Instead of pulling data into an EC2 instance, I used **AWS Glue** to call the Oracle JDBC driver, execute `proc_expose_sales`, fetch rows in batches, and write them as Parquet files to an S3 bucket.  
4. **Scalability & Cost** – Glue jobs run on on‑demand workers; we capped each job at 2 DPU, costing ~$0.44 per hour. The cursor returns ~1M rows per day; the Glue job processed it in <10 min, keeping data fresh and cost under $5/day.

**Result**  
- Delivered a reusable data pipeline that bypassed the package’s internal cursor while respecting encapsulation.  
- Reduced ETL run time from 45 min (manual SQL export) to 10 min, saving ~$3/month in compute costs.  
- Achieved 99.9% availability by running Glue jobs on a multi‑AZ S3 bucket.

**Bar‑raiser takeaways**  
- **Ownership:** Took full responsibility for the end‑to‑end data flow.  
- **Dive Deep:** Analyzed package internals and Oracle cursor semantics.  
- **Quantified Impact:** Measured time, cost, and availability gains.  
- **Learning from Failure:** Earlier attempts that tried to open the cursor directly in an EC2 script failed due to session limits; refactoring to Glue resolved scalability issues.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
