---
qid: ing_8ede79bd15__faang__local
question: 'Explain: Round Trip Time (RTT) — Top 9 Website Performance Metrics You
  Cannot Ignore'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 479
total_tokens: 721
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:16:37-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise explanation of *Round‑Trip Time (RTT)* and why it ranks among the top 9 website performance metrics. I’ll assume they’re referring to HTTP/2 or HTTP/3 traffic, where RTT is measured from when a request is sent until the first byte of the response arrives.

**Approach**  
1. Define RTT in networking terms.  
2. Explain how RTT influences key web KPIs (TTFB, Speed Index).  
3. List the other 8 critical metrics to give context.  
4. Highlight why ignoring RTT hurts SEO and UX.  

**Depth**  
- **RTT** = *time elapsed between a client sending a packet and receiving an acknowledgment*. In browsers, it’s the “First Byte” latency that drives Time‑to‑First‑Byte (TTFB).  
- A high RTT stalls TCP/TLS handshakes, multiplexed streams, and reduces effective bandwidth. Even with HTTP/3, each connection still pays the cost of RTT for establishing QUIC sessions.  
- **Impact**: 100 ms extra RTT can add ~200 ms to TTFB on a 5‑hop path, pushing Speed Index past 1 s and hurting Core Web Vitals (LCP). Search engines penalize high TTFB in ranking algorithms.  

**Edge Cases**  
- Low‑latency local networks vs. satellite links; the same RTT can have different perceptual effects.  
- CDN edge servers reduce RTT by shortening hop count—test with `traceroute`.  

**Optimize & Communicate**  
To mitigate RTT:  
1. Deploy CDNs closer to users.  
2. Use HTTP/3 (QUIC) for zero‑RTT handshakes.  
3. Keep TLS certificates short and enable session resumption.  
Explain that monitoring RTT alongside the other metrics—TTFB, Speed Index, LCP, FID, CLS, First Contentful Paint, Cumulative Layout Shift, Largest Contentful Paint—provides a holistic view of performance. Conclude by stressing that ignoring RTT is like neglecting the “fuel” that powers all other KPIs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
