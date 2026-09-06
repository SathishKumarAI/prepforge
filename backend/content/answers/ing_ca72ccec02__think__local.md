---
qid: ing_ca72ccec02__think__local
question: 'Explain: Metadata Storage — Web Crawler System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 473
total_tokens: 662
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T14:18:04-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
   - Identify what “metadata” means for a crawler (URL list, fetch timestamps, HTTP headers, content‑type, size, crawl depth, link graph).  
   - Assume we’re designing for large‑scale web crawling: millions of URLs per day, distributed workers, and eventual consistency.  

**2️⃣ Adopt a layered mental model**  
   1. *Ingestion layer*: how crawlers submit metadata to the store.  
   2. *Storage engine*: choice of database (relational vs NoSQL vs graph).  
   3. *Indexing & query patterns*: fetch by URL, by host, by crawl status.  
   4. *Scalability & fault‑tolerance*: replication, sharding, and consistency guarantees.  

**3️⃣ Step‑by‑step reasoning**  
   - Map each metadata field to a storage column or document attribute.  
   - Determine write frequency vs read patterns: URLs are written once but queried often for “next URL to fetch.”  
   - Choose a key/value store (e.g., RocksDB) for fast lookups, and a graph DB (Neo4j/JanusGraph) for link analysis.  
   - Design sharding on host/domain to balance load and preserve locality of related URLs.  
   - Plan replication factor to tolerate node failures while keeping latency low.  

**4️⃣ Common pitfalls to avoid**  
   - Over‑normalizing: splitting metadata into too many tables causes join overhead.  
   - Ignoring write amplification when using immutable append‑only logs for high‑throughput.  
   - Forgetting cache eviction policies, leading to stale or duplicated URLs.  

**5️⃣ Sanity checks & verbalization**  
   - Verify that a single URL insertion triggers exactly one write per shard.  
   - Confirm that queries like “next URL from domain X” hit at most O(log N) nodes.  
   - Explain the design aloud: “We store each URL as a key with its metadata as a JSON blob; sharding by host ensures related URLs stay together, and we replicate across three nodes for durability.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
