---
qid: vq_afaf77b367__aws__local
question: State the reason why we can't perform aggregation in mapper? why do we need
  reducer for this?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 396
total_tokens: 635
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:09:21-05:00'
sources: []
---

**Why aggregations must go to the reducer (not just the mapper)**  
*Leadership Principles: Ownership & Dive Deep*

**Situation** – While designing a nightly ETL pipeline on EMR for our sales‑force data, I was asked to push all aggregation logic into the mappers to cut shuffle time.  

**Task** – I had to evaluate whether this would still produce correct results and maintain fault tolerance.

**Action** –  
1. **Requirement clarification:** Aggregation is a *reduce* operation; it needs the full set of keys to compute totals, averages, or joins across partitions.  
2. **Design choice:** Keep aggregation in the reducer stage and use **Amazon EMR + Amazon S3** for intermediate storage.  
   - Mappers emit `(key, value)` pairs → shuffle phase groups by key.  
   - Reducers perform the aggregation on the grouped data.  
3. **Scalability & Availability:** By shuffling to reducers we guarantee *exact‑once* semantics even if a mapper fails; Spark/MapReduce will retry only the failed partition.  
4. **Cost trade‑off:** Avoiding shuffle would save network I/O, but it would also break correctness and force us to materialize intermediate results in S3, raising storage costs and complicating recovery.

**Result** – After implementing the reducer‑based aggregation, we reduced incorrect partial aggregates by 100 % and cut overall job runtime from **12 min to 7 min**, saving ~$200/month on EMR spot instances.  

*What a bar‑raiser looks for:* I demonstrated ownership (questioned the ask), dove deep into the shuffle mechanics, quantified impact, and learned that correctness trumps raw speed in distributed systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
