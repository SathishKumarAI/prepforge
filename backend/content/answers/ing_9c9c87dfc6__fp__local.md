---
qid: ing_9c9c87dfc6__fp__local
question: 'Explain: With the compound key, it makes removal — FAANG System Design
  Interview: Design A Location Based Service (Yelp, Google Places)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 386
total_tokens: 575
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:38:06-05:00'
sources: []
---

In a geo‑indexed store (e.g., a Yelp clone), every review is stored once but must be reachable by two orthogonal queries:  

* **By business** – list all reviews for *B*.  
* **By location** – find all reviews within radius *r* of point *(lat,lon)*.  

A naïve design would keep two separate tables and maintain a foreign‑key link; deleting a review would require two deletes (one per table) plus an index scan to locate the row in the second table. The cost grows with the number of replicas and can cascade through cascading deletes or distributed locks.

**Compound key = (business_id, location_bucket)**  
*The bucket is a deterministic hash or geohash of *(lat,lon)*.*  

1. **Uniqueness across both dimensions** – a single primary key guarantees that any review appears exactly once in the table.  
2. **Single‑step delete** – to remove review *R*, we compute its compound key from the stored attributes and issue one `DELETE WHERE pk = (…)`. No secondary index lookup is needed; the storage engine directly finds the row.  
3. **Index locality** – queries by business or location translate into range scans on the same primary‑key space, keeping data physically clustered and cache‑friendly.  

The deeper principle at work is *data co‑locality*: by embedding both access patterns in the key, we avoid cross‑partition traffic and maintain amortized constant‑time deletes. A non‑obvious insight: the hash bucket does not need to be perfect—any deterministic bucketing that preserves spatial locality suffices; it simply trades a modest amount of false positives for the huge win of a single delete operation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
