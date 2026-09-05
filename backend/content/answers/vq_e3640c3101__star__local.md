---
qid: vq_e3640c3101__star__local
question: WHAT ARE THE DIFFERENT TYPES OF INDEXES?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 362
total_tokens: 598
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:24:20-05:00'
sources: []
---

**Situation** – In my last role I was tasked with optimizing the search performance for a customer‑segmentation tool that served over 2 million users daily. The query latency on the “customer_id” column had ballooned to 350 ms, hurting our real‑time recommendation engine.

**Task** – My goal was to reduce the average lookup time to under 50 ms while keeping write throughput high enough for the nightly batch jobs that updated customer profiles.

**Action** – I first profiled the workload and identified three key query patterns: exact lookups on “customer_id”, range scans on “signup_date”, and joins between “customers” and “orders”. For each pattern I chose a different index type:

1. **B‑Tree** for the primary key “customer_id” (exact match).
2. **Composite B‑Tree** on (“signup_date”, “last_login”) to accelerate range queries.
3. **Hash Index** on “email_hash” to speed up equality joins that were previously scanning a full table.
4. Finally, I added a **Partial Index** on (“status” = 'active') because only active users needed fast access.

I also tuned `fillfactor` and used `DROP INDEX CONCURRENTLY` to avoid locking during deployment.

**Result** – Post‑deployment, the average query latency dropped from 350 ms to 42 ms, a 88% improvement. Write throughput remained within 5% of baseline. I learned that matching index type to access pattern—and using partial indexes for sparse data—can deliver huge gains without compromising writes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
