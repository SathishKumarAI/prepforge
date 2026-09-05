---
qid: ing_16735ab460__star__local
question: Do we need a dedicated vector database, or is pgvector enough? How do you
  decide?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 393
total_tokens: 637
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:13:37-05:00'
sources: []
---

**Situation** – At my last role I was building a recommendation engine for an e‑commerce platform that had to serve millions of users in real time. We were already using PostgreSQL for transactional data and we had the pgvector extension installed, but our team debated whether to switch to a specialized vector store like Milvus or Vespa.

**Task** – My job was to evaluate both options on latency, throughput, cost, and developer effort so that we could meet a 50 ms response SLA for top‑10 product suggestions while keeping operational overhead low.

**Action** – I started by profiling the query patterns: bulk insert of 1M vectors nightly, followed by millions of similarity searches per day. Using pgvector, inserts were simple but queries hit ~15 ms on a single node; scaling required adding replicas and tuning indexing. I then benchmarked Milvus on the same dataset; it returned top‑10 results in <3 ms with sharding across two nodes, but introduced an extra service layer and required Docker orchestration. I compared costs: pgvector ran on existing PostgreSQL instances (no extra license), while Milvus needed a dedicated cluster (~$1200/month). I also assessed data consistency needs; our use case allowed eventual consistency in the vector store.

**Result** – We chose to stay with pgvector, adding a dedicated read replica for similarity queries and caching hot vectors in Redis. Latency dropped to 8 ms, cost saved $1000/month, and we avoided the complexity of a second database. I learned that the “right” choice hinges on data volume, latency budgets, and operational simplicity—pgvector can be enough if you design for scaling rather than defaulting to specialized tooling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
