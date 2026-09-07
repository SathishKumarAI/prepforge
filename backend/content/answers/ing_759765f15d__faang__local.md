---
qid: ing_759765f15d__faang__local
question: 'Explain: Hey everyone! Today we are going to — System Design: Content Delivery
  Networks (Simplified)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 448
total_tokens: 692
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:18:04-05:00'
sources: []
---

**Clarify**  
We’re asked to design a simplified CDN: cache static assets close to users, handle fail‑over, and keep consistency with the origin. Key assumptions:  
1️⃣ Content is immutable (or versioned) after upload.  
2️⃣ Traffic is read‑heavy; writes are rare.  
3️⃣ Latency target < 50 ms globally.

**Approach**  
1. **Edge cache nodes** – deploy a set of geographically distributed servers (e.g., CloudFront‑style).  
2. **Cache key strategy** – use URL + content hash or ETag as the key; TTL controls freshness.  
3. **Origin fetch & invalidation** – on miss, pull from origin and store in edge cache; provide an API to purge keys when content updates.  
4. **Replication** – each edge node stores a subset of popular objects; use consistent hashing to balance load.  
5. **Health checks & fail‑over** – monitor node health; route traffic to nearest healthy node or fallback to origin.

**Depth**  
- *Latency*: TCP handshake + 1–2 RTTs to edge ≈30 ms; cached content served in <10 ms.  
- *Scalability*: Horizontal scaling of edge nodes; consistent hashing keeps rebalancing O(log N).  
- *Consistency*: Versioned URLs (e.g., `/v1/img.png`) eliminate stale cache issues; invalidation API forces refresh.

**Edge Cases**  
- Sudden traffic spike → auto‑scale edge pool.  
- Cache miss on high‑frequency content → origin bottleneck; mitigate with pre‑warming or CDN edge compute.  
- Partial node failure → ensure graceful degradation and load balancing across healthy nodes.

**Optimize & Communicate**  
Future improvements: use object compression, HTTP/3 for reduced head‑of‑line blocking, and real‑time analytics to predict cache hit ratios. I’d narrate by first outlining the architecture diagram, then walking through a request path, highlighting how each component satisfies latency, consistency, and scalability goals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
