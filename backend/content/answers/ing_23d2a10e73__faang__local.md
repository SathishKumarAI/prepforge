---
qid: ing_23d2a10e73__faang__local
question: 'Explain: Maybe you note down 50 devices or — System Design: Content Delivery
  Networks (Simplified)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 474
total_tokens: 718
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:07:29-05:00'
sources: []
---

**Clarify**  
You’re asking for a high‑level design of a **Content Delivery Network (CDN)** that can serve static assets (images, JS/CSS) to ~50 devices worldwide with low latency and high reliability.  
Assumptions:  
- Devices are static endpoints; no dynamic content.  
- Traffic is read‑heavy; writes happen only during deployment.  
- 99.9% availability target.  

**Approach**  
1. **Edge placement** – place a small number of edge nodes (e.g., one per continent).  
2. **Caching strategy** – use LRU eviction with TTLs, store objects in SSD for low read latency.  
3. **Load balancing & routing** – employ DNS‑based GeoIP lookup + HTTP/HTTPS keep‑alive.  
4. **Replication** – sync primary origin to edges via incremental delta pushes or pull‑based requests on cache miss.  
5. **Failure handling** – health checks, automatic failover, and a fallback CDN tier.  

**Depth**  
- Each edge node runs Nginx/HAProxy + a local key‑value store (e.g., Redis) for metadata.  
- Cache hit ratio >95% with 10 MB cache per node gives ~100 GB total storage for 50 devices.  
- Latency < 30 ms from edge to device; origin latency only on miss.  
- Complexity: O(1) lookup, O(log n) replication sync; overall system scales linearly with added edges.  

**Edge Cases**  
- Sudden traffic spike → auto‑scale edge nodes via container orchestration.  
- Stale content after update → use versioned URLs or ETag/Cache‑Control headers.  
- Device offline → fallback to origin, log for later sync.  

**Optimize & Communicate**  
Explain trade‑offs: fewer edges reduce cost but increase miss rate; more edges improve hit ratio but add replication overhead. Highlight monitoring (latency dashboards, cache hit metrics) and rollback strategy. Conclude with a quick diagram of DNS → edge ↔ origin flow to illustrate your design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
