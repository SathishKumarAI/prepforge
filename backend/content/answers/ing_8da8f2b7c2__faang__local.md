---
qid: ing_8da8f2b7c2__faang__local
question: 'Explain: Types of Back of the Envelope Calculations in System Design Interviews'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 469
total_tokens: 706
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:13:18-05:00'
sources: []
---

**Clarify**  
In a system‑design interview we’re asked to sketch high‑level math that justifies our design choices (e.g., latency, cost, capacity). I’ll assume the interviewer wants *order‑of‑magnitude* estimates for throughput, storage, and bandwidth—nothing more detailed than a quick “back‑of‑the‑envelope” (BOE) calculation.  

**Approach**  
1. Identify the key metric(s): traffic per second, user count, data size, latency budget.  
2. Convert units to a common base (e.g., requests/second → bytes/second).  
3. Use “rule‑of‑thumb” constants: 1 GB ≈ 10⁹ B, 1 ms = 0.001 s, etc.  
4. Chain the components (client → load balancer → service → database) to propagate bottlenecks.  

**Depth**  
- *Throughput*: `T = U × R`, where `U` is users and `R` requests/user/second.  
- *Storage*: `S = U × D`, with `D` average data per user (bytes).  
- *Bandwidth*: `B = T × P`, `P` payload size.  
- *Latency*: sum of each layer’s service time; use a 95th‑percentile guard.  
Complexity: O(1) arithmetic, but the challenge is selecting realistic constants.

**Edge Cases**  
- Skewed traffic (flash crowds).  
- Variable payload sizes or bursty patterns.  
- Distributed storage overheads (replication factor > 1).  
Test with extreme values to ensure no negative numbers or unrealistic bottlenecks.

**Optimize & Communicate**  
Show how tightening a latency budget forces more powerful instances, or how sharding reduces per‑node load. Narrate: “If we double users but keep the same request rate per user, our throughput doubles, so we need twice the bandwidth; therefore we’ll add an extra CDN edge.” Keep it concise, use bullet points, and iterate on assumptions with the interviewer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
