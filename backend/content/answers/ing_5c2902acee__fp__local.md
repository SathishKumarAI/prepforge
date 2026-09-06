---
qid: ing_5c2902acee__fp__local
question: 'Explain: sort between two ranges of keys means — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 419
total_tokens: 607
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:19:55-05:00'
sources: []
---

### Why “sort between two ranges” matters  
In a ride‑or‑food delivery service the core query is *“find all active drivers/shops whose current position lies between these two latitude–longitude bounds.”*  
This boils down to ordering points by their **geohash** (a space‑filling curve that maps 2‑D coordinates to 1‑D strings). A geohash preserves locality: any point inside a rectangular region will have hashes that fall into contiguous intervals. Thus the problem reduces to *range query* on a sorted key set—exactly what a B‑tree or key‑value store can answer in \(O(\log n + k)\) time, where \(k\) is the number of hits.

### System design sketch  
1. **Geohash ingestion** – Every driver’s GPS stream updates a record keyed by `geohash:driver_id`.  
2. **Range query** – The backend issues a *scan* from `min_hash` to `max_hash`; the DB returns all active drivers in that rectangle without scanning the whole table.  
3. **WebSocket push** – Clients subscribe via a persistent WebSocket; the server pushes a delta whenever any driver’s geohash enters or exits their query window, avoiding polling overhead.

### Non‑obvious insight  
Because a geohash is deterministic, two drivers that are *geographically far* can still share an identical prefix if one lies on the same longitudinal strip. Thus, **choosing the right precision** (number of hash bits) is crucial: too coarse and you’ll retrieve many false positives; too fine and you’ll need many range scans to cover a single city block. Optimizing this trade‑off is what makes geohashing practical for real‑time delivery platforms.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
