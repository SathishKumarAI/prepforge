---
qid: ing_02d44cff12__faang__local
question: 'Explain: Push vs Pull model — Socialnetworkfacebookinstagram'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 591
total_tokens: 825
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:50:36-05:00'
sources: []
---

**Clarify**  
The interview question asks how a *push* versus a *pull* content delivery model works for social‑network apps (e.g., Facebook, Instagram). I’ll assume we’re talking about user‑visible feeds: push = server‑initiated updates; pull = client requests data on demand. We want to compare trade‑offs in latency, bandwidth, battery life, and scalability.

**Approach**  
1. Define each model in the context of a mobile app.  
2. Map core metrics (latency, network usage, freshness).  
3. Discuss how Facebook/Instagram actually implement hybrids.  
4. Highlight pitfalls and mitigations.

**Depth**  
| Metric | Push | Pull |
|--------|------|------|
| **Latency** | Near‑instant when server pushes via WebSocket/APNs; ideal for real‑time notifications. | Depends on polling interval or user action; can be delayed. |
| **Bandwidth** | Only changed data sent; efficient if updates are sparse. | Full feed or delta fetched each time; higher overhead unless smart caching. |
| **Battery / Device load** | Keeps connection alive (WebSocket/APNs) → moderate drain; push notifications light. | Periodic polling drains CPU & radio; mitigated by long‑polling or background fetch limits on iOS/Android. |
| **Scalability** | Requires persistent connections for millions of users—challenging but feasible with sharded WebSocket servers and CDNs. | Easier to scale stateless HTTP requests, but can spike traffic during peak times. |
| **Freshness** | Real‑time; suitable for stories or live events. | Acceptable for static posts; stale if interval too long. |

*Hybrid*:  
- Facebook uses *pull* for the main newsfeed (HTTP GET) with incremental updates via GraphQL subscriptions.  
- Instagram pushes story notifications and DM alerts through APNs/WebSocket, then pulls media on demand.

**Edge Cases**  
- Poor network → push may fail; fallback to pull.  
- Battery‑constrained devices → aggressive polling leads to rapid drain.  
- High fan‑out (e.g., celebrity posts) can overwhelm push servers; rate limiting needed.

**Optimize & Communicate**  
Explain that a hybrid strategy balances freshness with resource constraints: use push for time‑sensitive signals, pull for bulk content. To improve, one could implement *edge caching* of feeds and *delta compression* on WebSocket streams. In an interview, I’d emphasize my ability to quantify trade‑offs (e.g., 30 % bandwidth reduction vs. 200 ms latency) and design a fallback path that maintains user experience under failure conditions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
