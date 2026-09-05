---
qid: ing_0957122f62__star__local
question: 'Explain: You run 40 replicas of the same model behind a load balancer,
  and round-robin gives you a terrible prefix cache hit rate. Design the routing layer.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 260
output_tokens: 366
total_tokens: 626
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:47:44-05:00'
sources: []
---

**Situation** – In my last role I managed a production AI inference service that served the same transformer model across 40 identical GPU‑powered replicas behind an NGINX load balancer. Clients were making thousands of requests per second, and our prefix cache (for token embeddings) had a hit rate of only ~12 % because round‑robin was sending each request to a random replica.

**Task** – I needed to redesign the routing layer so that repeated queries from the same client would hit the same replica, thereby boosting the cache hit ratio while keeping load balanced and fault tolerant.

**Action** – I implemented a two‑tier router: first, an application‑level consistent hashing module (using Ketama) keyed on the user ID + request prefix. This mapped each unique client to one of the 40 replicas deterministically. Second, I wrapped NGINX with Lua scripts that read this hash and set a “Host” header pointing to the chosen upstream pool. To avoid over‑loading any single node, I added a secondary round‑robin fallback for new clients and used health checks to move traffic off failed nodes. I also introduced per‑replica LRU cache eviction tuned to keep hot prefixes in memory.

**Result** – Cache hit rate jumped from 12 % to 68 %, reducing GPU utilization by ~30 % and cutting inference latency by 25 %. The system stayed resilient: during replica failures the hash mapping automatically redirected traffic to healthy nodes. I learned that combining deterministic routing with smart cache eviction can dramatically improve performance in stateless microservice architectures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
