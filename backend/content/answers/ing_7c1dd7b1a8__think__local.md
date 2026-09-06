---
qid: ing_7c1dd7b1a8__think__local
question: 'Explain: From Zero to 50 Million Uploads per Day: Scaling Media at Canva'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 196
output_tokens: 661
total_tokens: 857
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T09:13:43-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
- The question wants a *why/how* explanation of Canva’s scaling journey, not a code walkthrough.  
- Assume the reader knows basic cloud concepts but may not know Canva’s architecture or constraints (media uploads, CDN, latency).  
- We’ll focus on key dimensions: compute, storage, networking, data consistency, and operational practices.

**2️⃣ Mental model / framework**  
Use the classic *Scalability Stack*:
1. **Load generation & front‑end** – HTTP(S), edge caches, auto‑scaling app servers.  
2. **Storage tiering** – object store (S3/Blob), CDN, caching layers.  
3. **Processing pipeline** – async workers, message queues, microservices.  
4. **Observability & resilience** – metrics, circuit breakers, graceful degradation.  

Apply this to the “Zero → 50 M uploads/day” narrative: start small → identify bottlenecks → iterate on each layer.

**3️⃣ Step‑by‑step reasoning**  
- *Initial state*: a single server + local disk; uploads hit a single database record per file.  
- Identify **bottleneck #1**: I/O saturation and high latency from single point of write.  
- Solution: move to a distributed object store (S3) with CDN edge locations → reduces round‑trips, offloads storage.  
- *Bottleneck #2*: processing (thumbnails, previews). Use **message queues** (Kafka/RabbitMQ) + worker pool; scale workers horizontally.  
- *Bottleneck #3*: database writes for metadata. Switch to a sharded NoSQL store or use a “write‑ahead log” pattern; employ eventual consistency where acceptable.  
- *Network bottleneck*: enable **HTTP/2** and **content‑delivery‑network (CDN)** caching of static assets, reducing load on origin.  
- *Observability*: instrument with Prometheus + Grafana, set up auto‑scaling policies based on request latency & queue depth.

**4️⃣ Common traps to avoid**  
- Over‑optimizing early: don’t add a CDN before profiling traffic.  
- Ignoring data consistency: assume eventual consistency but design for conflict resolution.  
- Forgetting **rate limiting** at the edge; attackers could still saturate backend if not throttled.  
- Assuming horizontal scaling alone solves everything—CPU, memory, and network bandwidth all need to be balanced.

**5️⃣ Sanity‑check & communicate clearly**  
- Verify each layer’s capacity against the target (50 M uploads/day ≈ 580 uploads/sec).  
- Check that queue depth, worker throughput, and storage IOPS meet this rate.  
- Explain trade‑offs: e.g., CDN reduces origin load but adds cost; eventual consistency speeds writes but requires conflict handling.  

Wrap up by summarizing the evolution from monolith to a distributed, event‑driven microservice architecture with layered caching, queueing, and observability—enabling Canva to scale from zero to 50 million daily uploads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
