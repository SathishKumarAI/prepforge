---
qid: ing_d86a7e613b__faang__local
question: 'Explain: The Interview Question — Real Time Search'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 455
total_tokens: 686
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:02:50-05:00'
sources: []
---

**Clarify**  
We’re asked to design a *real‑time search* system (e.g., autocomplete, instant results). Key assumptions:  
1. Queries arrive at high throughput (tens of thousands per second).  
2. Results must be returned within ~100 ms.  
3. The corpus is large but relatively static; updates are batched.  

**Approach**  
1. **Indexing** – build a forward index for documents and an inverted index for terms, plus a prefix trie (or compressed radix tree) for autocomplete.  
2. **Scoring** – use TF‑IDF or BM25 to rank candidates.  
3. **Serving layer** – shard the indices horizontally; cache hot queries in memory (e.g., Redis).  
4. **Query pipeline** – parse, expand prefixes, lookup candidate IDs via trie → fetch postings → score & top‑k → return.

**Depth**  
*Index construction*: O(N log N) time, O(total terms + docs) space.  
*Lookup*: Trie prefix search is O(L) where L is query length; posting merge is linear in matched docs but pruned by early stopping (top‑k).  
*Scoring*: BM25 per candidate is O(1); overall O(k log k) for sorting.  
Latency: dominated by cache hit (~10 µs) or disk read (~5–10 ms).  

**Edge Cases**  
- Empty or very long queries → fallback to default ranking.  
- Updates that invalidate cache → use versioned shards and eventual consistency.  
- Highly skewed term frequencies → apply document frequency caps to prevent hot spots.

**Optimize & Communicate**  
We could pre‑compute top‑k per prefix (materialized autocomplete) for the most frequent queries, trading space for 1 ms latency. Additionally, using SIMD‑accelerated vector similarity (FAISS) would lower scoring time. I’d explain each trade‑off to interviewers: memory vs speed, consistency vs freshness, and how we monitor SLAs with A/B tests.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
