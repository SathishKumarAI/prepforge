---
qid: ing_25d73e9fd7__fp__local
question: 'Explain: MySQL at Canva: Growing Pains — From Zero to 50 Million Uploads
  per Day: Scaling Media at Canva - Canva Engineering Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 403
total_tokens: 593
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:25:33-05:00'
sources: []
---

**Scaling MySQL for 50 M uploads/day – a principled view**

The core problem is *throughput*: every image upload triggers a write (metadata) and a read‑back for the UI.  
With \(N=5\times10^7\) writes per day, the average write rate is

\[
r = \frac{N}{24\times3600}\approx 580~\text{s}^{-1}.
\]

A single MySQL instance can sustain ≈ 200 writes/second (depending on disk I/O and locking).  
Thus a naïve design would need \(k=\lceil r/200\rceil \approx 3\) replicas just to keep up, but this ignores **write amplification** caused by transaction logs, index updates, and row‑level locks.  

The deeper principle is *sharding as a dimensionality reduction*: we partition the key space (e.g., by upload bucket or hash of user ID) so that each shard handles a disjoint subset \(r_s = r/k\).  
Because MySQL’s InnoDB uses MVCC, concurrent writes on different shards do not contend for locks.  

**Non‑obvious insight:** Instead of sharding purely on the primary key, Canva shards by **time‑windowed bucket IDs** (e.g., day × bucket). This aligns with the natural write burst pattern: uploads spike in a narrow window and then become cold. By routing writes to fresh shards, the system avoids hot spots and lets old shards be archived or moved to cheaper storage without affecting live traffic.

In short, the solution is a *time‑bucketed, horizontally partitioned MySQL* that transforms a monolithic write load into many independent, low‑contention streams—exactly what distributed systems theory predicts for scaling write‑heavy workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
