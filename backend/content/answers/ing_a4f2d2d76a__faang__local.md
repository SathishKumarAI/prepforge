---
qid: ing_a4f2d2d76a__faang__local
question: 'Explain: 250+ Interactive Animations — Course Introduction | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 458
total_tokens: 695
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:08:37-05:00'
sources: []
---

**Clarify**  
The client wants a scalable system that can serve **> 250 interactive animations** for a course‑intro video. Each animation is an SVG/Canvas/WebGL component that users may load on demand while keeping latency < 200 ms. We’ll assume:  

* 100 k concurrent users, 1 k per second new sessions.  
* Animations are pre‑rendered assets (no heavy compute).  
* Users can pause/resume; caching must survive a day.  

**Approach**  
1. **Asset Layer:** Store each animation as an optimized SVG/GLTF in a CDN.  
2. **Metadata Service:** A lightweight API that returns the list of available animations, their URLs, and a short‑lived auth token.  
3. **Client SDK:** Loads the chosen asset via HTTP(S) and renders it using WebGL or Canvas.  
4. **Metrics & Cache Control:** Use CDN edge caching with `Cache-Control: public, max-age=86400` and embed ETags for invalidation.  

**Depth**  
*CDN:* 99 % of traffic served from the nearest edge → < 50 ms.  
*API:* Stateless REST (or gRPC) on a managed Kubernetes cluster; latency ~10 ms.  
*Storage:* Object store (S3/Blob) with versioning for rollback.  
*Security:* Signed URLs ensure only authenticated users can access assets.  

**Edge Cases**  
*Bandwidth spikes*: CDN auto‑scales, but we reserve a burst buffer in the origin.  
*Large animation (> 5 MB)*: Offer progressive loading (split into layers).  
*Client failures*: Fallback to a lightweight placeholder or low‑poly version.  

**Optimize & Communicate**  
We can add **server‑side pre‑rendering** for complex animations, reducing client load. Also, implement **lazy‑loading** of animation metadata so the initial page loads quickly. In talking to interviewers, emphasize that this design balances latency, cost, and developer experience while meeting FAANG scalability standards.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
