---
qid: ing_6df4b506cb__star__local
question: 'Explain: Number of documents in the shard cannot exceed [2147483519]'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 444
total_tokens: 686
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:07:14-05:00'
sources: []
---

**Situation:**  
While migrating our customer support knowledge base from a single-node ElasticSearch cluster to a sharded architecture, we hit an error: *“Number of documents in the shard cannot exceed 2147483519.”* The project was on a tight three‑month deadline to meet Q4 release.

**Task:**  
I needed to understand why that exact limit appeared, determine whether our data volume would ever approach it, and design a sharding strategy that kept each shard safely below the threshold while preserving query performance.

**Action:**  
First I looked into the Lucene internals: the document ID is stored as a 32‑bit signed integer (`int`). Lucene uses `Integer.MAX_VALUE` (2,147,483,647) as the maximum valid doc id. ElasticSearch subtracts a small safety margin for internal bookkeeping, giving us the 2,147,483,519 cap. I confirmed this by reading the `org.apache.lucene.index.IndexWriterConfig` docs and checking the source on GitHub.

Next, I calculated our projected document count: we had ~1.8 million support tickets plus 200k FAQ articles, totaling roughly 2.0 million documents per shard if we used a single shard per index. To stay well under the limit, I re‑partitioned into five shards (one for each product line) and added an additional “archived” index with its own shards to separate older tickets.

I also implemented a nightly script that queries the `_cat/indices` API, parses `docs.count`, and alerts if any shard exceeds 80% of the limit. This gives us early warning before hitting the hard cap.

**Result:**  
All indices now run without hitting the document‑limit error. We maintain sub‑millisecond query latency on product‑specific searches, and the alerting system prevented a potential outage during peak ticket volume in November. I learned that understanding low‑level storage limits can save time and prevent costly downtime—plus it gave me confidence to explain these constraints to non‑technical stakeholders when planning capacity upgrades.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
