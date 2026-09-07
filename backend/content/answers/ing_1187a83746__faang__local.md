---
qid: ing_1187a83746__faang__local
question: 'Explain: Adoption Status — IP Address | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 481
total_tokens: 714
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:24:28-05:00'
sources: []
---

**Clarify**  
We’re asked to design a system that reports the *adoption status* of an **IP address**—i.e., whether a given client’s IP has been seen, how many times it appears, and when it last interacted. Assume we need real‑time queries, high write throughput, and eventual consistency across global regions.

**Approach**  
1. **Data ingestion**: Stream logs (Kafka) → Lambda/Stream Processor → update per‑IP counters in a distributed KV store.  
2. **Storage**: Use DynamoDB / Bigtable with composite key `(ip, timestamp)`; secondary index on `last_seen`.  
3. **Query layer**: Cache hot IPs in Redis/Memcached; fallback to DB for cold data.  
4. **Metrics**: Expose via Prometheus + Grafana dashboards.

**Depth**  
- **Write path**: Each event increments a counter (`ADD`) and updates `last_seen`. DynamoDB’s conditional writes keep atomicity with O(1) latency.  
- **Read path**: Cache hit → 1‑ms; miss → DB read (≈10‑15 ms).  
- **Scalability**: Partition by IP hash to avoid hotspots.  
- **Consistency**: Eventual consistency is acceptable; strong consistency only for critical queries.

**Edge Cases**  
- **IPv6 vs IPv4**: Normalize CIDR blocks.  
- **Spoofed IPs**: Add a validation layer (e.g., reverse DNS lookup).  
- **Burst traffic**: Use DynamoDB’s provisioned throughput or on‑demand mode; throttle with Kinesis buffer.

**Optimize & Communicate**  
We can shard by prefix to reduce contention, batch writes for cost savings, and employ TTL to purge stale IPs. I’d explain the trade‑off between read latency (cache) vs write amplification (batching), and justify choosing DynamoDB for its global replication and managed scaling—key for a FAANG‑grade system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
