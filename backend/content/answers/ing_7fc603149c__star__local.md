---
qid: ing_7fc603149c__star__local
question: 'Explain: Expression Indexes — Indexing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 346
total_tokens: 583
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:49:18-05:00'
sources: []
---

**Situation:**  
At my previous company we built a recommendation engine that served personalized content to millions of users. The model outputs a large set of feature vectors stored in a column‑arithmetic database (PostgreSQL). During A/B testing, query latency for the “top‑N” recommendation API spiked from 120 ms to 450 ms after we added a new composite feature that combined user age and purchase history.

**Task:**  
I had to reduce the query time back below 200 ms while keeping the feature set intact so that our model accuracy wouldn’t drop.

**Action:**  
I introduced expression indexes. First, I analyzed the most frequent SELECT clauses using `EXPLAIN` and identified the composite expression `(age * purchase_count)`. Then I created a functional B‑tree index on that expression:  
```sql
CREATE INDEX idx_user_age_purchase ON users ((age * purchase_count));
```
I also tuned PostgreSQL’s `enable_seqscan = off` for the recommendation queries to force use of the new index. Finally, I added a small caching layer with Redis to serve the top‑N results for the most active users.

**Result:**  
Query latency dropped to 140 ms on average, and the overall system throughput increased by 35%. The A/B test showed no degradation in recommendation quality (AUC remained 0.82). I learned that expression indexes can dramatically accelerate derived feature lookups when combined with targeted query rewrites.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
