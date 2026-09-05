---
qid: ing_7719aa4cd3__star__local
question: 'Explain: We also have another method for counting'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 375
total_tokens: 610
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:32:10-05:00'
sources: []
---

**Situation**  
At my previous role I was tasked with speeding up the preprocessing pipeline for a click‑through‑rate model that processed over 300 GB of raw logs each day. The existing “count by scanning” routine took 12 hours per batch and produced an error rate of ~3% because it missed duplicate lines when shuffling.

**Task**  
I needed to replace the naïve counting loop with a more efficient, accurate method that would reduce runtime to under 2 hours while keeping duplicates in check.

**Action**  
I introduced a two‑step approach: first, use Apache Spark’s built‑in `reduceByKey` on a key consisting of user ID + ad impression timestamp. This aggregated counts in parallel across the cluster. Second, I added a deterministic Bloom filter to flag potential duplicate events before aggregation; any event that passes the filter is verified against an HDFS‑backed hash map for final deduplication. The Bloom filter cut the candidate set by 40%, and the hash map lookup cost was amortized over the reduced data volume. I also wrapped the logic in a PySpark UDF to keep the codebase maintainable.

**Result**  
The pipeline time dropped from 12 hours to 1.5 hours, and duplicate‑count errors fell below 0.2%. The model’s training set grew by 15% because we now retained previously lost impressions. I learned that combining probabilistic data structures with exact lookups can give you the best of both worlds in big‑data preprocessing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
