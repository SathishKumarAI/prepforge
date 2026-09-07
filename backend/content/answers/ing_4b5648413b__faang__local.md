---
qid: ing_4b5648413b__faang__local
question: 'Explain: Sources: — tech-prep-jeremy.io/systems-design/topics/cdns.md at
  master \u00b7 jeremyyew/tech-prep-jeremy.io \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 268
output_tokens: 624
total_tokens: 892
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:39:34-05:00'
sources: []
---

## 1️⃣ Clarify  
The interviewer wants a concise explanation of how **Content Delivery Networks (CDNs)** work and why they’re crucial for modern web systems.  
*Assumptions:*  
- Audience knows basic HTTP, DNS, and caching concepts.  
- Focus on the *architecture*, *caching strategy*, and *performance impact*.  

## 2️⃣ Approach  
1. Define CDNs and their purpose.  
2. Outline key architectural components (edge nodes, origin servers, load balancers).  
3. Explain request flow: DNS resolution → edge cache lookup → origin fetch if miss.  
4. Highlight benefits (latency reduction, bandwidth savings, DDoS protection).  

## 3️⃣ Depth (Core Answer)  
A CDN is a globally distributed network of **edge caches** that sit between users and the origin server. When a client requests content:  

1. **DNS hijack** – The user’s DNS query resolves to an edge node closest in RTT.  
2. **Cache lookup** – The edge checks if the object (image, JS bundle, video segment) is cached with its TTL.  
   - *Hit*: Serve directly, reducing round‑trip time and load on origin.  
   - *Miss*: Forward request upstream to the origin or a regional pull server.  
3. **Origin fetch & cache store** – The edge downloads the object, stores it locally, and returns it to the client. Subsequent requests hit the cache until TTL expires or invalidated via purges (e.g., CloudFront’s `invalidate`).  

Edge nodes also handle SSL/TLS termination, HTTP/2 multiplexing, and optional compression.  
Performance gains:  
- **Latency** ≈ 1–3 ms per hop vs ~200 ms to a distant origin.  
- **Bandwidth cost** drops by caching popular assets at the edge.  
- **Scalability & resilience**: Edge nodes absorb traffic spikes and mitigate DDoS attacks.

## 4️⃣ Edge Cases  
- **Dynamic content** (user‑specific pages) requires *edge computing* or *origin fetch every time*.  
- **Cache coherency**: Need invalidation strategies for frequent updates.  
- **Geo‑routing errors**: Incorrect DNS mapping can route users to distant edges, negating benefits.

## 5️⃣ Optimize & Communicate  
To further improve the CDN:  
- Use **object versioning** (hash in URL) to avoid stale caches.  
- Implement **cache key policies** that respect query strings or cookies only when necessary.  
- Leverage **regional edge caching** for multi‑region origins to reduce latency even more.

When explaining, start with a high‑level diagram, walk through the request path, then dive into cache logic and performance metrics. This shows clear structure, depth of understanding, and awareness of real‑world trade‑offs—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
