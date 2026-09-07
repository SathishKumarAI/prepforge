---
qid: ing_5d52ba9a52__faang__local
question: 'Explain: Storing and Delivering your Content with Speed and Scale'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 429
total_tokens: 665
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:20:58-05:00'
sources: []
---

**Clarify**  
We’re asked how a large‑scale ML service can store user‑generated content (images, videos, text) and deliver it quickly to millions of requests while keeping costs under control. Key assumptions: • Content is immutable once uploaded. • Reads far outnumber writes. • Latency target < 200 ms globally.  

**Approach**  
1. **Storage tiering** – hot (SSD) for recent data, cold (object store) for archival.  
2. **Metadata catalog** – a fast NoSQL index mapping user ID → object key + region.  
3. **Edge caching** – CDN pull‑through with invalidation on update.  
4. **Replication strategy** – multi‑region read replicas, write‑once sync to all regions.  

**Depth**  
- Use S3/Blob for durability; store content hash in DynamoDB/GCP Spanner for O(log n) lookup.  
- CDN (CloudFront/EdgeCache) caches at edge nodes; TTLs of 24h reduce origin hits.  
- For ML inference, pre‑compute embeddings and cache results in Redis clusters.  
- Cost: storage ~ $0.023/GB/month, CDN ~ $0.08/GB for first 10 TB, cache ~$0.50/GB per month.  
- Latency: < 100 ms read from edge; write latency dominated by S3 (~200 ms).  

**Edge Cases**  
- Sudden traffic spikes → auto‑scale CDN and cache shards.  
- Data consistency after updates → versioning + cache invalidation.  
- Regional outages → fallback to nearest replica.  

**Optimize & Communicate**  
Explain trade‑offs: higher cache hit rates cut S3 reads but increase memory cost; tighter TTLs improve freshness at the expense of origin traffic. Highlight that this architecture satisfies scalability, speed, and cost targets while being resilient to failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
