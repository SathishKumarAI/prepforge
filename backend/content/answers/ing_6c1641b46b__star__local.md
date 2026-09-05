---
qid: ing_6c1641b46b__star__local
question: 'Explain: Why joins deserve extra care — PySpark for Beginners: Building
  Intermediate-Level Skills'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 367
total_tokens: 611
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:03:17-05:00'
sources: []
---

**Situation:**  
While leading a fraud‑detection pipeline for an online marketplace, we had to merge the daily transaction log (≈ 5 M rows) with a master customer profile table (≈ 300 K rows). The goal was to enrich each transaction with risk scores and demographic data before feeding it into a real‑time scoring model.

**Task:**  
I needed to perform this join in PySpark without blowing memory or causing significant shuffle, ensuring the pipeline ran under 15 minutes daily so that the fraud alert system could stay ahead of new activity.

**Action:**  
1. I inspected the cardinality and partitioning of both datasets; the transaction table was heavily skewed toward a handful of high‑volume merchants.  
2. Instead of a naive `join`, I used `broadcast` on the smaller master table, which reduced shuffling to almost zero.  
3. For the remaining skewed keys, I applied `salting`: adding a random suffix to the join key and later aggregating back, so that partitions stayed balanced.  
4. I monitored spill‑to‑disk metrics via Spark UI and tuned executor memory from 8 GB to 12 GB based on GC pauses observed during test runs.

**Result:**  
The daily pipeline completed in **10 minutes**, a 33% improvement over the previous 15‑minute run, and we saw a 20% reduction in out‑of‑memory errors. I learned that joins are not just about combining data; they’re also about managing shuffle cost, skew, and broadcast thresholds to keep Spark efficient.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
