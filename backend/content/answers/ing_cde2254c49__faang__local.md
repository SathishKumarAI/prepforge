---
qid: ing_cde2254c49__faang__local
question: 'Explain: This is pretty standard for an API — FAANG System Design Interview:
  Design A Location Based Service (Yelp, Google Places)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 836
total_tokens: 1087
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:39:20-05:00'
sources: []
---

**Clarify**

We’re asked to design a *location‑based service* (LBS) like Yelp or Google Places that supports  
1. **search**: “restaurants near me within 5 km, average rating ≥4.0”  
2. **add/update**: users can add new places or edit existing ones  
3. **recommendation**: personalized top‑k results using ML (ratings, reviews, user history).  

Assumptions to confirm:  
- Expected traffic: millions of queries per day, ~10 k writes/day.  
- Latency target: <200 ms for search.  
- Data size: 100M+ places globally, 1B reviews.  
- Geo‑coverage: worldwide.  

**Approach**

| Layer | Responsibility |
|-------|----------------|
| **Ingestion & ETL** | Accept writes → validate → enrich (geo‑hash, category) → write to OLTP + stream to analytics. |
| **Storage** | 1️⃣ Primary store: NoSQL (Cassandra / DynamoDB) keyed by `place_id`. 2️⃣ Geo‑index: S3‑style prefix tree or HNSW graph in a dedicated service. |
| **Search Service** | Query the geo‑index for candidate IDs → fetch details from primary store. Use caching (Redis) for hot queries. |
| **Recommendation Engine** | Offline batch: build user–item matrix, run matrix factorization / neural CF. Online: serve top‑k via a fast key‑value cache or microservice. |
| **API Gateway & Auth** | Rate‑limit, authenticate, route to search/recommendation endpoints. |

**Depth**

1. *Geo‑index*: Use geohash at 9‑char precision (~30 m). Partition by first 5 chars → ~32k shards globally. Each shard stores a sorted list of place IDs. For a radius query we generate the minimal set of overlapping geohashes, fetch candidate lists (≤10 k per request), then filter by Haversine distance.  
2. *Primary store*: Cassandra with `place_id` as partition key; columns: name, address, categories, rating, review_count, last_updated. Secondary index on category & rating for quick filtering.  
3. *Caching*: Hot queries (e.g., “pizza near me”) cached in Redis for 5 min. Cache invalidation triggered by write streams.  
4. *Recommendation*: Precompute `user_embedding` and `place_embedding`. Online service does a K‑NN lookup in an IVF index (FAISS) to get top‑k places, then merges with geo filter. Complexity: O(log N) per request.

**Edge Cases**

- **Large radius / sparse area** → fallback to broader geohash search + client-side filtering.  
- **Newly added place** → may not appear in cache; serve via primary store and mark as “unindexed” until batch runs.  
- **Rate spikes** → auto‑scaling of shards, burst queue for writes.  
- **Data consistency** → eventual consistency acceptable; strong read after write on critical paths.

**Optimize & Communicate**

1. *Batching*: Group multiple user requests in a single geo‑query to reduce shard hops.  
2. *Hybrid indexing*: Combine geohash with HNSW graph for sub‑meter precision when needed.  
3. *Observability*: Instrument query latency, cache hit rates, and recommendation quality metrics (MAP@k).  

When explaining this design, I’d start by mapping the high‑level requirements to architectural layers, justify each technology choice (e.g., Cassandra for write throughput, Redis for low‑latency caching), then walk through a sample request path, highlighting where ML feeds in. Finally, I’d discuss trade‑offs—eventual consistency vs latency, index granularity vs storage cost—and how we’d monitor and iterate.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
