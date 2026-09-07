---
qid: ing_1a807ae8c6__faang__local
question: 'Explain: Push CDN Use-Case: — tech-prep-jeremy.io/systems-design/topics/cdns.md
  at master \u00b7 jeremyyew/tech-prep-jeremy.io \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 272
output_tokens: 448
total_tokens: 720
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:46:52-05:00'
sources: []
---

**Clarify**  
The question asks for a *push‑based* Content Delivery Network (CDN) use‑case: how a CDN can proactively deliver content to edge nodes rather than waiting for pull requests. I’ll assume we’re dealing with large media assets (e.g., video, software releases) that must be available instantly across many regions.

**Approach**  
1. Identify the *push trigger* (origin upload or CI pipeline).  
2. Outline the *distribution flow*: origin → CDN edge cache → user.  
3. Highlight key benefits: latency reduction, bandwidth savings, and load mitigation.

**Depth**  
A push CDN works by having the origin explicitly instruct the CDN to fetch a new asset when it becomes available. Once the push request arrives, each edge node retrieves the file from the origin (or a nearby replica) and stores it locally. Subsequent user requests hit the nearest cache, eliminating the “cold‑start” latency of a pull model.  
- **Latency**: Edge nodes already have the data; responses are < 10 ms.  
- **Bandwidth**: Origin traffic is limited to the push event; peers share cached copies.  
- **Scalability**: Push events can be throttled, and cache eviction policies keep storage bounded.

**Edge Cases**  
- *Origin failure*: If the origin is down when pushing, the CDN must retry or serve stale content.  
- *Large payloads*: Push may overwhelm edge bandwidth; rate‑limiting per node helps.  
- *Invalidation*: Updating a pushed asset requires explicit invalidation commands to avoid stale data.

**Optimize & Communicate**  
For production, combine push with “pre‑warm” strategies (e.g., prefetch popular items during off‑peak hours) and use health checks to route around failing edges. I’d explain this flow in a diagram on the whiteboard, quantify expected latency savings (~30–50 % over pull), and discuss trade‑offs such as increased complexity versus performance gains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
