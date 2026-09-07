---
qid: ing_b77c2fb3bd__faang__local
question: 'Explain: Trade-offs and Things That Can Go Wrong — Content Delivery Network
  (CDN) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 589
total_tokens: 833
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:49:37-05:00'
sources: []
---

**Clarify**  
The problem asks you to discuss the trade‑offs and failure modes when designing a CDN for large‑scale content delivery (e.g., video, images). Key assumptions: *global user base*, *low latency*, *high throughput*, *caching hierarchy*, *consistent updates*, and *budget constraints*.

---

**Approach**  
1. Identify core objectives: low RTT, high cache hit ratio, fault isolation, scalability.  
2. Enumerate layers (edge servers, regional caches, origin).  
3. For each layer list trade‑offs (latency vs cost, consistency vs availability).  
4. Highlight typical failure points and mitigation strategies.

---

**Depth**  

| Layer | Trade‑off | Common Pitfall |
|-------|-----------|----------------|
| **Edge Cache** | *Latency* → place more nodes; *Cost* → storage per node ↑ | **Stale content**: cache invalidation lags, leading to outdated videos. |
| **Regional Replication** | *Consistency* vs *Availability*: strong consistency hurts write throughput; eventual consistency can serve wrong versions. | **Split‑brain**: two replicas diverge, causing 404 or corrupted streams. |
| **Origin Servers** | *Scalability* → load‑balancing increases complexity; *Reliability* → single point of failure if not replicated. | **Thundering herd**: all edge nodes hit origin simultaneously on cache miss. |
| **Routing / DNS** | *Geo‑proximity* vs *Health checks*: simple round‑robin cheap, but ignores node health. | **DNS TTL** limits rapid failover; users stuck on dead edge. |

Mitigations: versioned URLs, signed tokens, pull‑through caching, graceful degradation, and multi‑region active‑active setups.

---

**Edge Cases**  
- Sudden traffic spike (e.g., viral content) causing cache thrashing.  
- Region‑specific regulations (GDPR) requiring data residency.  
- Network partition between edge and origin leading to inconsistent updates.

Test scenarios: simulate 10× peak load, introduce artificial latency on origins, drop entire edge region, verify fallback paths.

---

**Optimize & Communicate**  
Start by explaining the user‑centric goal of minimal RTT, then walk through each layer’s trade‑offs in order. Use clear examples (e.g., “if we double edge nodes we cut RTT by 30 ms but triple cost”). Conclude with a balanced design: hierarchical caching + versioned content + health‑aware routing, and outline the monitoring stack to detect stale or failed nodes early. This demonstrates structured thinking, depth of knowledge, and practical awareness—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
