---
qid: vq_b63a5b1d1a__aws__local
question: what is accumulator?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 224
output_tokens: 374
total_tokens: 598
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:10:26-05:00'
sources: []
---

**Answer (Amazon Interview Style)**  

> *What’s an accumulator and how would you use it safely in a distributed data‑engineering pipeline?*  

**Situation / Task**  
In my last role I built a nightly ETL on EMR that processed 15 TB of clickstream logs. The job needed to count malformed rows without corrupting the downstream analytics tables.

**Action**  
I used Spark’s **Accumulator** (a write‑only shared variable) to aggregate error counts across all executors. To avoid race conditions I declared it as a `LongAccumulator` and registered it with the driver. Each partition incremented it inside the transformation, then I logged the final value after the job finished.  
I also added a unit test that ran the job on a 5‑node cluster and asserted that the accumulator matched the expected count of injected bad rows (≈ 0.3 % of total).

**Result**  
The solution reduced debugging time by **70 %** because I could surface the exact error rate in real time. The job’s runtime stayed under the SLA of 45 min, and we avoided costly re‑processing of entire datasets.

**Why it matters (Leadership Principles)**  
- **Ownership**: I took full responsibility for data quality downstream.  
- **Dive Deep**: I profiled the failure patterns to design a precise accumulator strategy.  

**Technical takeaway**  
Accumulators are *write‑only*; they should never be used for state that needs to be read during execution. For more complex aggregations, consider `mapPartitions` with local counters or materialized views in Redshift.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
