---
qid: ing_c21788fb3d__think__local
question: 'Explain: Search Request — Design Instagram | System Design Interview |
  AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 464
total_tokens: 658
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T13:45:07-05:00'
sources: []
---

**1️⃣ Clarify the ask & assumptions**  
- Confirm that the interview question is *designing a search feature for Instagram* (e.g., “Search Request”).  
- Assume we’re focusing on the *backend search service*: indexing posts, users, hashtags; low latency; high scalability.  
- Note constraints: millions of daily queries, real‑time updates, multi‑tenant data.

**2️⃣ Pick a mental framework**  
- **Requirements → Architecture → Data & Algorithms → Scaling → Edge cases**  
- Use the classic *“system design” layers*: client, API gateway, search service, index store, cache, analytics.  
- Map to known patterns: inverted index, sharding, replication, eventual consistency.

**3️⃣ Reason step‑by‑step**  
1. List functional requirements (text search, hashtag lookup, user search, relevance).  
2. Identify non‑functional ones (latency < 200 ms, 99.9% uptime).  
3. Choose an indexing strategy: full‑text inverted index per shard.  
4. Decide on storage: distributed key‑value store + Lucene/ElasticSearch cluster.  
5. Sketch data flow: query → gateway → routing layer → relevant shard(s) → cache hit? → response.  
6. Add write pipeline: new posts → async indexing; handle deletions.  
7. Address scaling: horizontal sharding, read replicas, load balancer.  
8. Consider failure modes and recovery (retry, circuit breaker).

**4️⃣ Avoid common traps**  
- Don’t ignore *real‑time indexing* – users expect fresh results.  
- Don’t over‑optimize for a single metric; balance latency vs consistency.  
- Beware of “search too broad” → use query expansion sparingly.  
- Skip discussing UI or front‑end pagination unless asked.

**5️⃣ Sanity‑check & communicate**  
- Recount the architecture in one paragraph to confirm coherence.  
- Highlight trade‑offs (e.g., sharding granularity vs query complexity).  
- End with a quick “next steps” (monitoring, A/B testing relevance scores).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
