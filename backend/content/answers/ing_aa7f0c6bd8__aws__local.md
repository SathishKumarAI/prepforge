---
qid: ing_aa7f0c6bd8__aws__local
question: 'Explain: A Spark job that joins a 2 TB fact table to a 50 GB dimension
  table has one straggler task running 100× longer than the rest. Diagnose and fix
  it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 259
output_tokens: 491
total_tokens: 750
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:51:42-05:00'
sources: []
---

**Situation / Task**  
In an EMR cluster running a nightly ETL, we joined a 2 TB fact table (orders) with a 50 GB dimension table (customers). One task in the shuffle phase ran **100× longer** than others, causing the job to miss its SLA.

**Action**  
1. **Diagnose skew** – checked `spark.sql.shuffle.partitions` and found 200 partitions; the slow task had >10 % of the rows (`orders.customer_id = 42`).  
2. **Re‑partition by key** – used `repartitionByRange("customer_id")` to spread heavy keys across multiple buckets, then ran a histogram to confirm even distribution.  
3. **Broadcast dimension table** – because it is < 1 GB after compression, broadcasted it with `broadcastJoin`.  
4. **Tuned shuffle parameters** – increased `spark.sql.shuffle.partitions` to 800 and set `spark.reducer.maxSizeInFlight=48m` to reduce network I/O.  
5. **Implemented retry logic** – added a small back‑off for the straggler using Spark’s dynamic allocation (`spark.dynamicAllocation.enabled=true`).  

**Result**  
Job runtime dropped from **4 h 15 min → 1 h 12 min**, saving ~$30 per run on EMR. The SLA hit rate improved to **99.9%** over the next month.

---

### Leadership Principles

- **Ownership** – Took full responsibility for the downstream impact and fixed it before customers noticed delays.  
- **Dive Deep** – Used Spark UI, histograms, and custom metrics to pinpoint skew at the partition level.  

### Bar‑raiser check

- Quantified impact (time & cost).  
- Showed depth of analysis (skew detection, partition strategy).  
- Demonstrated learning: added automated skew checks in CI for future jobs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
