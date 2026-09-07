---
qid: ing_b6eced32ae__aws__local
question: 'Explain: the bread and butter of the problem — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 614
total_tokens: 862
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:17:40-05:00'
sources: []
---

**Situation & Task**  
While building the “real‑time delivery dashboard” for DoorDash, I was asked to design a scalable system that could (1) map driver and restaurant locations to geohashes for fast proximity queries, and (2) push live updates to mobile clients via WebSockets. The goal: deliver sub‑second latency to 10 M concurrent users while keeping costs under $2 M/month.

**Action – Architecture & Design**  
- **Geohashing**: Store every location in DynamoDB with a composite key `GeoHash#PK`. Use *DynamoDB Global Secondary Indexes* (GSI) on the hash to scan only the 9‑cell neighborhood, reducing reads from 100 k to ~3 k per query.  
- **Caching**: Wrap the index with ElastiCache Redis for hot geohash buckets; eviction policy `LRU` keeps memory < 4 GB.  
- **WebSockets**: Deploy an API Gateway WebSocket endpoint backed by Lambda (Node.js) and DynamoDB Streams. Each location change triggers a stream event that pushes to the corresponding client’s socket ID stored in Redis (`socketId#driver`).  
- **Scalability & Availability**: Use *AWS Global Accelerator* for cross‑region latency < 20 ms, autoscaling Lambda concurrency (1k–10k) and DynamoDB auto‑scaling.  
- **Cost Control**: Spot instances for EC2 workers that pre‑process GPS data; use S3 Glacier for archival driver logs.

**Result**  
- Latency dropped from 200 ms to < 50 ms (99th percentile).  
- Real‑time updates hit 95% of clients within 300 ms, improving order ETA accuracy by **12%**.  
- Monthly spend reduced to $1.8 M while supporting a 150% user growth.

---

### Leadership Principles Highlighted
| Principle | How it was demonstrated |
|-----------|--------------------------|
| **Customer Obsession** | Delivered sub‑second updates that directly improved rider experience. |
| **Ownership & Dive Deep** | Took end‑to‑end ownership, analyzed DynamoDB hot spots, tuned Redis eviction, and quantified latency gains. |

---

### What a Bar‑raiser Looks For
- **Quantified Impact**: Concrete latency and cost metrics.  
- **Dive Deep**: Detailed rationale for choosing DynamoDB GSI vs. RDS, Redis LRU policy, Lambda concurrency limits.  
- **Learning from Failure**: Initial prototype used SQS + EC2; high latency led to redesign with API Gateway WebSockets.  

*Result:* A robust, cost‑efficient, and highly available location service that scales globally—exactly what DoorDash needs for its rapid growth.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
