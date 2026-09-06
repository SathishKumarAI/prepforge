---
qid: ing_d7bd89479f__think__local
question: 'Explain: 4.4 Media Storage — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 198
output_tokens: 547
total_tokens: 745
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T15:11:02-05:00'
sources: []
---

**1️⃣ Clarify the ask & assumptions**  
- The question is about designing *Media Storage* for a platform like Instagram, not the whole app.  
- Assume millions of users, daily uploads in photos/videos (~10 GB/day).  
- Key constraints: high write/read throughput, low latency, durability, cost‑efficiency, regional availability.

**2️⃣ Mental model / framework**  
Use the classic *CAP + 3‑Tier architecture* + *data partitioning & replication*:
1. **Client → Edge CDN** (latency).  
2. **Storage Tier**: Object store for raw media + CDN cache for hot data.  
3. **Metadata service** (NoSQL/Graph) to map user→media, tags, permissions.

Apply *sharding*, *replication* and *consistent hashing* to scale horizontally. Think of *eventual consistency* for reads vs *strong consistency* for writes where needed.

**3️⃣ Step‑by‑step reasoning**  
1. **Write path**: Client uploads → CDN edge → API gateway → Object store (e.g., S3). Trigger async job to generate thumbnails, transcode videos. Store metadata in a fast key/value DB.  
2. **Read path**: User requests feed → service queries metadata → CDN serves media URLs; if cache miss, fetch from object store and populate CDN.  
3. **Scalability**: Partition objects by hash of user ID + timestamp → balanced across storage nodes. Replicate each shard to 3+ datacenters for durability.  
4. **Cost control**: Use tiered storage (hot SSD for recent media, cold archive for older). Apply lifecycle policies.  
5. **Security & compliance**: Encrypt at rest and in transit; enforce ACLs via metadata service.

**4️⃣ Common traps to avoid**  
- Mixing *metadata* with *media* in the same store → bottlenecks.  
- Relying on a single CDN provider → single point of failure.  
- Ignoring eventual consistency pitfalls when serving thumbnails.  
- Over‑optimizing for write speed at expense of read latency.

**5️⃣ Sanity‑check & articulate**  
Ask: “Does this design meet the 99.9 % availability, <200 ms read latency, and $0.02/GB/month cost targets?” If yes, explain how each component contributes (e.g., CDN for latency, sharded object store for throughput). Then summarize trade‑offs: write amplification vs cache hit rate, replication factor vs consistency guarantees.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
