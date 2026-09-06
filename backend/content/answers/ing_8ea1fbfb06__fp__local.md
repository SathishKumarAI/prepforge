---
qid: ing_8ea1fbfb06__fp__local
question: 'Explain: Back-of-the-Envelope Estimation — Design Spotify | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 424
total_tokens: 604
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:08:20-05:00'
sources: []
---

**Back‑of‑the‑Envelope Estimation in a Spotify Design Interview**

When an interviewer asks you to sketch a music streaming service, the first hurdle is *feasibility*. We must show that the architecture can handle billions of requests without breaking the bank.  
The trick is to reduce the problem to a handful of numbers:

1. **Users** – say 200 M active users.  
2. **Tracks per user** – average 50 k playlists × 20 songs ≈ 10 M songs stored.  
3. **Requests per second** – 200 M users × 0.01 req/s (one play every minute) = 2 M req/s.  

Now apply the *law of large numbers* to each layer:

- **CDN cache hit rate** ~90 % → only 200 k req/s hit origin.  
- **DB read/write throughput**: 200 k writes (song uploads) + 2 M reads ≈ 2.2 M ops/s.  

Translate ops/s into hardware: a single modern SSD can sustain ~10⁵ I/O ops/s, so we need ≈ 22 nodes for persistence and ≈ 20–30 nodes for stateless HTTP servers.

**Why this works:**  
We’re bounding the *worst‑case* traffic with simple arithmetic; the deeper principle is that a system’s capacity scales linearly with the dominant resource (CPU, I/O, bandwidth). By pinning each dimension to a concrete number we expose bottlenecks early.

**Non‑obvious insight:**  
The cache hit rate dramatically changes the cost curve. A 5 % improvement from 90 % to 95 % halves the origin traffic, saving hundreds of servers—yet interviewers rarely consider this first step.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
