---
qid: ing_1fff2ba47d__star__local
question: 'Explain: It requires a table scan. With 200 — FAANG System Design Interview:
  Design A Location Based Service (Yelp, Google Places)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 256
output_tokens: 350
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:33:24-05:00'
sources: []
---

**Situation** – While leading the data‑engineering team at a startup that was pivoting from a simple review app to a full‑featured Yelp clone, we discovered our recommendation engine was running slow. The model had to score every nearby business for each user request, but the underlying user‑business interaction table was 1 TB and our queries were hitting a full table scan every time.

**Task** – Reduce query latency from ~2 s per request to under 200 ms while still feeding fresh data into the ML pipeline, so that users could get personalized “top‑rated” spots on the fly.

**Action** – First I introduced a composite index on `(user_id, location_hash, rating)` and added a materialized view that pre‑aggregated top‑N businesses per city bucket. Next, I rewrote the scoring function to run in Spark, reading only the relevant slice of the table via partition pruning (using the `location_hash`), thus avoiding a scan of the entire dataset. Finally, I set up a nightly job that refreshed the materialized view and updated the ML model weights on a separate GPU cluster, keeping inference latency low.

**Result** – After deployment we saw request latency drop from 2 s to 180 ms (a 90% improvement) and recommendation accuracy improved by 12% as measured by click‑through rate. I learned that careful indexing combined with pre‑aggregation can turn a table‑scan nightmare into a scalable, low‑latency service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
