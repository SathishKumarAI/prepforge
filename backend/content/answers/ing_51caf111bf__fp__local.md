---
qid: ing_51caf111bf__fp__local
question: 'Explain: Endpoint: GET /recommendations — Design Spotify | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 627
total_tokens: 806
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:59:02-05:00'
sources: []
---

### Endpoint: `GET /recommendations`

**Problem to solve**  
A user requests a list of tracks that are *most likely* to be enjoyed now. The system must return high‑confidence suggestions in < 200 ms while handling millions of concurrent users.

---

#### 1. **Input & Output**
```http
GET /recommendations?user_id=1234&limit=20&context=playlist:987
```
Return a JSON array of track IDs with metadata (artist, genre, popularity).

---

#### 2. **Core Logic**

| Layer | Responsibility |
|-------|----------------|
| **User Profile** | Stores long‑term preferences (favorite artists, genres) and short‑term listening history (last 50 tracks). |
| **Feature Engine** | Converts raw data into a *feature vector* per user:  
  *Collaborative*: cosine similarity to other users.  
  *Content*: embedding of track attributes via a pre‑trained model. |
| **Scoring Model** | A lightweight gradient‑boosted tree (GBDT) that takes the feature vector and outputs a *relevance score* for each candidate track. |
| **Candidate Generation** | Pulls top‑N candidates from:  
  – Popularity cache (global hot tracks).  
  – User’s “liked” artist list (artist‑based retrieval).  
  – Contextual playlist/album seeds. |

The GBDT is trained offline; the inference engine runs on a vector‑search service (e.g., Faiss) for sub‑millisecond lookup.

---

#### 3. **Caching & Latency**

* **Hot cache**: Redis holds pre‑computed recommendation lists for the most active users, refreshed every 10 min.  
* **Cold start**: If no cache hit, compute on‑demand and populate the cache.  
* **Back‑pressure**: Queue heavy candidate generation jobs in a distributed queue; serve a lower‑quality but faster list immediately.

---

#### 4. **Scalability & Fault Tolerance**

* Partition user profiles by hash of `user_id`.  
* Use stateless HTTP servers behind a CDN to handle spikes.  
* Monitor cache hit ratios and auto‑scale the inference cluster when latency exceeds SLA.

---

### Non‑obvious Insight

**Treat the recommendation problem as a *dynamic graph traversal*.**  
Each track is a node; edges encode co‑listen frequency or feature similarity. A user’s listening history forms a subgraph; recommending neighbors that are not yet visited yields natural novelty while preserving relevance. This perspective lets you use efficient graph databases (e.g., Neo4j) for real‑time exploration, avoiding the combinatorial explosion of pairwise similarity calculations in large corpora.

---

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
