---
qid: ing_4f4e75423a__faang__local
question: 'Explain: 5.9 Search Users — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 515
total_tokens: 757
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:48:53-05:00'
sources: []
---

**Clarify**

We’re asked to design the *“search users”* feature on Instagram – i.e., given a query string, return matching usernames (or display names) ranked by relevance.  
Assumptions:  
1. Millions of users, each with a unique username and public profile name.  
2. Search is typed‑ahead; results must appear within ~100 ms.  
3. Results are cached aggressively but can be updated in near real‑time.  

**Approach**

1. **Data model** – store user metadata (username, full name, bio, tags) in a key‑value store keyed by user ID.  
2. **Indexing** – build an inverted index of all tokens → list of user IDs. Use a distributed search engine (Elasticsearch/Apache Solr).  
3. **Sharding & replication** – shard the index horizontally on token prefixes; replicate shards for high availability.  
4. **Query pipeline** –  
   - Tokenize input, apply stemming/stop‑word removal.  
   - Lookup matching tokens in the inverted index → candidate set.  
   - Score candidates (TF‑IDF + click‑through rate).  
5. **Caching** – keep hot queries and their top results in a distributed LRU cache (Redis).  

**Depth**

- Each shard holds ~1 M users; query latency <50 ms per shard, aggregate <100 ms.  
- Update propagation: incremental delta index updates every 30 s to reflect new usernames or edits.  
- Complexity: O(log N) for lookup in each shard; overall O(k log N) where k = #shards queried (≈1–3).  

**Edge Cases**

- Very common prefixes (“a”, “john”) → large candidate set → need query‑time filtering and pagination.  
- Unicode/accents – normalise all strings during indexing and search.  
- Deleted or private accounts – filter out in final result step.  

**Optimize & Communicate**

1. **Batching updates** reduces write load.  
2. **Prefix compression** on tokens saves storage.  
3. **Explainability**: expose top‑scoring terms to the UI for better UX.  
I would iterate by monitoring query latency, hit‑rate of cache, and search relevance metrics (precision@k) and adjust shard count or index refresh cadence accordingly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
