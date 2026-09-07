---
qid: ing_21f7f4c3e1__aws__local
question: 'Explain: FULL OUTER JOIN — How do SQL Joins Work?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 489
total_tokens: 723
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:43:57-05:00'
sources: []
---

**Situation / Task**  
In my last role I built a recommendation engine that required merging user‑behavior logs (≈ 10 M rows/day) with product catalog metadata (≈ 2 M rows). The data lay in Redshift and S3, and the key challenge was to keep the pipeline **fast, fault‑tolerant, and cost‑effective** while delivering a 15 % lift in click‑through rate.

**Action – Technical Design**  
I used a *FULL OUTER JOIN* because we needed every user record **and** every catalog item, even when no match existed. In Redshift I wrote:

```sql
SELECT u.user_id,
       p.product_id,
       COALESCE(u.last_click,p.created_at) AS event_ts,
       CASE WHEN u.user_id IS NULL THEN 'catalog_only'
            WHEN p.product_id IS NULL THEN 'user_only' END AS source_flag
FROM   user_logs  u
FULL OUTER JOIN product_catalog p
ON     u.prod_id = p.id;
```

*Why FULL?*  
- Guarantees no data loss (critical for downstream ML features).  
- Enables us to flag unmatched rows (`source_flag`) and later surface them as cold‑start candidates.

**Scalability & Cost**  
- Partitioned by date in S3 → parallel scans.  
- Redshift Spectrum reads directly from compressed Parquet, cutting query time from 30 min to 4 min (≈ 87 % savings).  
- Leveraged **Redshift Concurrency Scaling** for peak traffic, keeping cost < $0.02 per query.

**Result**  
The merged dataset powered a gradient‑boosted model that increased recommendation CTR by **18 %** in production and reduced cold‑start latency from 10 s to under 1 s.

**Reflection (Bar‑raiser)**  
I *took ownership* of the entire pipeline, *dived deep* into Redshift internals to shave minutes off queries, quantified impact with CTR lift, and learned that a FULL OUTER JOIN is essential when both sides contain valuable “orphan” records.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
