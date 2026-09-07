---
qid: ing_d0a5a57a71__faang__local
question: 'Explain: Content delivery network — GitHub - donnemartin/system-design-primer:
  Learn how to design large-scale systems. Prep for the system design interview.  Includes
  Anki flashcards. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 270
output_tokens: 639
total_tokens: 909
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:45:51-05:00'
sources: []
---

**Clarify**  
The question asks for an explanation of a *Content Delivery Network (CDN)* in the context of the “system‑design‑primer” repo, which is a learning resource for large‑scale systems. I’ll assume you want: 1) what a CDN does, 2) its core components and design trade‑offs, and 3) how it’s described in that primer.

**Approach**  
1. Define the purpose of a CDN (latency reduction, load offload, resiliency).  
2. Map the high‑level architecture: edge caches, origin servers, DNS/Anycast routing, cache invalidation.  
3. Highlight key design choices (replication strategy, consistency model, failure handling).  
4. Tie back to the primer’s learning objectives (scalable data distribution, fault tolerance).

**Depth**  
A CDN is a globally distributed network of edge nodes that cache content close to users. When a request arrives, DNS Anycast points it to the nearest node; if the object is cached, the node serves it instantly; otherwise it fetches from the origin, caches it, and returns it. Core components:

| Component | Role | Design trade‑offs |
|-----------|------|-------------------|
| **Edge cache** | Low‑latency storage (SSD/NVM) | Replication vs. consistency: eventual consistency keeps updates cheap but may serve stale copies. |
| **Origin server** | Authoritative source | Must handle cache miss bursts; often sharded or replicated for durability. |
| **DNS/Anycast** | Global routing | Simple lookup vs. dynamic load‑balancing; Anycast reduces latency but complicates failover. |
| **Cache invalidation** | Consistency control | Push (e.g., HTTP header) vs. pull (TTL). Pull is simpler but may leave stale data longer. |

The primer emphasizes *scalable, fault‑tolerant* design: use consistent hashing for cache placement, Bloom filters to reduce miss traffic, and a separate “purge” service for invalidation.

**Edge Cases**  
- **Cache stampede** when many users hit a missing object simultaneously → use mutex or token bucket.  
- **Geopolitical restrictions** that block edge nodes → fallback to origin via secure tunnel.  
- **Large dynamic content** (personalized pages) that can’t be cached → route directly to origin.

**Optimize & Communicate**  
To improve performance, add *prefetching* based on access patterns and use *edge compute* (Lambda@Edge) for lightweight transformations. When explaining this in an interview, start with the high‑level goal, walk through each component, quantify trade‑offs (e.g., 10 ms latency vs. 5 % stale reads), and finish by mapping back to the primer’s learning goals: “This example shows how to design a system that is both scalable and fault tolerant—exactly what the primer teaches.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
