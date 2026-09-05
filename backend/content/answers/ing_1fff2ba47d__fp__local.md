---
qid: ing_1fff2ba47d__fp__local
question: 'Explain: It requires a table scan. With 200 — FAANG System Design Interview:
  Design A Location Based Service (Yelp, Google Places)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 448
total_tokens: 638
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:14:01-05:00'
sources: []
---

### Why a **table scan** is unavoidable in a location‑based service

When you ask “where are all restaurants within 5 km of this point?”, the database must evaluate a *spatial predicate* that compares every record’s latitude/longitude to the query circle. Unlike a key lookup, there is no single index entry that points directly to *all* qualifying rows; an index can only accelerate the search for a bounded set (e.g., “restaurants in city X”). To guarantee **correctness**, the system must verify each candidate against the exact distance formula:

\[
d = R \arccos(\sin\phi_1\sin\phi_2 + \cos\phi_1\cos\phi_2\cos(\Delta\lambda))
\]

where \(R\) is Earth’s radius. Any pre‑computed grid or geohash that over‑approximates the area will still need a **filter pass**—the true distance calculation cannot be avoided.

From an optimization standpoint, the *cost* of scanning \(N\) rows and computing the Haversine distance scales linearly with \(N\). Modern CPUs can compute thousands of such distances per millisecond, so for typical query loads (tens of requests per second), a full scan remains tractable. Moreover, spatial indexes like R‑trees or Quad‑trees trade **memory** and **update cost** for *partial* pruning; the remaining candidates still require a filter pass that is essentially a table scan.

#### Non‑obvious insight
A subtle but powerful trick is to use **approximate filtering**: first compute a cheap bounding box (axis‑aligned rectangle) around the query circle. This reduces the number of rows that must undergo the expensive Haversine calculation, yet it does not eliminate the need for a scan—just a *filtered* scan. In practice, this two‑stage filter (box → exact distance) is the backbone of scalable location services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
