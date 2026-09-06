---
qid: ing_2142a76bfd__think__local
question: 'Explain: Streaming Traffic — Design Spotify | System Design Interview |
  AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 387
total_tokens: 581
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T04:53:58-05:00'
sources: []
---

**Metacognition for “Streaming Traffic – Design Spotify”**

1. **Clarify Scope & Constraints**  
   * Ask what “traffic” refers to (user requests, data flow, latency).  
   * Note key constraints: millions of users, low‑latency streaming, high availability, cost limits, data privacy.  
   * Assume we’re designing the core request–to–stream pipeline (infrastructure + API).

2. **Choose a High‑Level Framework**  
   * Use a layered architecture: Front‑end → Load Balancer → API Service → Cache/DB → Streaming Service → CDN.  
   * Apply CAP principles to decide where consistency vs. availability matters.

3. **Step‑by‑Step Reasoning**  
   * Map user actions (search, play, pause) to system components.  
   * Detail data flow: request → auth → metadata lookup → content location → packet delivery via CDN.  
   * Consider scaling: auto‑scaling groups, sharded databases, rate limiting, sticky sessions.

4. **Common Pitfalls to Avoid**  
   * Forgetting the cold‑start problem for new users.  
   * Overlooking cache invalidation and stale data.  
   * Ignoring network heterogeneity (Wi‑Fi vs mobile).  
   * Underestimating storage costs of user playlists & analytics.

5. **Sanity‑Check & Communicate**  
   * Verify latency targets: < 200 ms for UI, < 10 s for buffering.  
   * Run through a failure scenario (CDN outage) and show failover logic.  
   * Summarize trade‑offs in a one‑page diagram before diving into details.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
