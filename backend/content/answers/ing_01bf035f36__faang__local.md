---
qid: ing_01bf035f36__faang__local
question: 'Explain: The service sends a query to the — FAANG System Design Interview:
  Design A Location Based Service (Yelp, Google Places)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 638
total_tokens: 889
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:48:09-05:00'
sources: []
---

**Clarify**

We’re asked to design a *location‑based service* (think Yelp/Google Places).  
Key requirements:  

1. **Fast, scalable query** for “businesses near point X within radius R”.  
2. **High write throughput** (new listings, reviews, ratings).  
3. **Rich filtering & ranking** (price, rating, category, distance).  
4. **Fault‑tolerant, low latency**, multi‑region availability.

Assumptions to confirm: data model size (~10 M places), read/write ratio, acceptable latency (<200 ms).

---

**Approach**

1. **Data partitioning** – use a *geohash* or *S2 cell* grid to shard by location.  
2. **Storage layers** –  
   - Primary: NoSQL (Cassandra/Spanner) for fast writes and eventual consistency.  
   - Secondary: Read‑optimized index in an in‑memory store (Redis, Memcached) or a search engine (Elasticsearch).  
3. **Query flow** –  
   1. Convert query point to cell(s).  
   2. Retrieve candidate IDs from the grid index.  
   3. Pull full records and compute precise distance (Haversine).  
   4. Apply filters, rank by score (rating × distance penalty + category weight).  
4. **Caching** – per‑region cache for hot queries; TTLs to keep freshness.

---

**Depth**

*Geohash Grid*: 10 km cells → ~1 M shards globally.  
*Write Path*: Client → API → Partitioned write (lat/long → cell) → Primary store + async update of secondary index.  
*Read Path*: API → Cell lookup → Candidate list (~100–200 per query) → Fetch details → Rank.  
Complexities:  
- **Read**: O(log N) for grid lookup + O(k) distance calc (k≈200).  
- **Write**: O(1) partitioned write, async replication.

Trade‑offs: Larger cells reduce lookups but increase candidate set; smaller cells vice versa. Use adaptive cell sizing near dense urban areas.

---

**Edge Cases**

- **Boundary queries** crossing multiple cells → ensure all adjacent cells are queried.  
- **High churn** (many updates) → throttle secondary index refresh.  
- **Cold starts** for new regions → pre‑populate grid with default empty cells.

---

**Optimize & Communicate**

Potential improvements:  
- Use *vector embeddings* of textual reviews for semantic search.  
- Apply *real‑time ML ranking* (learning‑to‑rank models).  
- Shard by region to keep latency low; employ CDN edge caches for static assets.

In an interview, I’d narrate this flow step‑by‑step, justify each design choice with trade‑offs, and conclude with a quick sketch of the architecture diagram.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
