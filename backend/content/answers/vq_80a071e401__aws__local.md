---
qid: vq_80a071e401__aws__local
question: What is accumulator in spark?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 467
total_tokens: 693
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:00:24-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Leadership Principles:** *Ownership* & *Dive Deep*  

### Situation  
At my previous role I led a migration of our nightly ETL pipeline from Python‑based scripts to Apache Spark on EMR. The new job had to aggregate terabytes of clickstream data and feed downstream analytics in under 30 min.

### Task  
I needed to ensure that any mis‑parsed or corrupted records did not silently contaminate the final counts, while still keeping the job fast and cost‑effective.

### Action  
Spark’s **Accumulator** was the perfect tool. I created a long‑type accumulator (`errorCount`) in the driver program and registered it with `sc.longAccumulator("BadRows")`. Inside each map/flatMap transformation I wrapped record parsing in a try/catch; on exception I incremented the accumulator instead of letting the task fail.  

Because accumulators are *write‑only* from workers and *read‑only* on the driver, they do not introduce shuffles or network traffic. The job remained single‑stage, so it stayed within the 30 min SLA. I also added a CloudWatch alarm that fired if `errorCount > 10_000`, giving us instant visibility.

### Result  
- Reduced silent data corruption from ~0.3 % to <0.01 %.  
- Cut the nightly run time from 45 min to 27 min (≈40 % faster).  
- Lowered EMR spot‑instance usage by 15 %, saving ~$1,200/month.

### What a bar‑raiser hears  
*Ownership:* I took full responsibility for data quality and performance.  
*Dive Deep:* I understood how accumulators work under the hood (driver aggregation, no shuffle) and leveraged that knowledge to design a fault‑tolerant pipeline.  
*Quantified Impact:* I provided concrete metrics on accuracy and cost savings.  
*Learning from Failure:* After an initial mis‑configured accumulator that caused stale values, I documented the correct pattern and added unit tests for future regressions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
