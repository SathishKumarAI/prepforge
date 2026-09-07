---
qid: ing_a1e09bc823__aws__local
question: 'Explain: Full-Text, Spatial, and Inverted Indexes'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 441
total_tokens: 674
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:31:06-05:00'
sources: []
---

**Situation – Task:**  
When I joined the data‑engineering team at a fintech startup, we had to expose millions of transaction records to our compliance analysts for real‑time search. The existing key‑value store only supported exact lookups, so I owned the redesign of our query layer.

**Action – Design & Implementation (Technical):**  
I scoped three indexing strategies:  

1. **Full‑Text Index** – enabled natural‑language queries on merchant descriptions using Amazon OpenSearch Service; configured analyzers to strip stop words and apply stemming.  
2. **Spatial Index** – leveraged the K‑d tree within OpenSearch’s Geo‑Point field to filter transactions by latitude/longitude, supporting radius searches in under 200 ms.  
3. **Inverted Index** – built on DynamoDB Streams + Lambda to maintain a reverse lookup table (keyword → transaction IDs), ensuring eventual consistency and sub‑second reads for keyword queries.

I chose OpenSearch for its managed scalability and native support for these index types, while DynamoDB handled high write throughput with 99.9 % availability. Cost was kept below \$1k/month by using on‑demand capacity and spot instances for heavy search periods.

**Result (Data‑Driven):**  
After deployment, compliance analysts reduced query time from **12 s → 0.3 s** (40× faster) and increased successful detections by **18%** due to richer search semantics. The solution also cut storage costs by 25% through deduplication in the inverted index.

**Reflection – Bar‑Raiser Insight:**  
I demonstrated *Ownership* by leading from requirement gathering to production roll‑out, *Dive Deep* by benchmarking each index type, and *Deliver Results* with measurable performance gains. The biggest learning was that a hybrid approach—combining OpenSearch’s full‑text/spatial capabilities with DynamoDB’s low‑latency key lookups—delivers both flexibility and scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
