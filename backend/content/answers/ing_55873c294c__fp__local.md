---
qid: ing_55873c294c__fp__local
question: 'Explain: Why geography affects latency — Understanding latency | ElevenLabs
  Documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 452
total_tokens: 625
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:06:41-05:00'
sources: []
---

**Why geography forces latency in machine‑learning pipelines**

At its core, any networked ML system must transfer a payload \(x\) from source to destination.  
The round‑trip time \(T\) is the sum of

1. **Propagation delay** – the signal travels at ≤ \(c/2\) (≈ 200 000 km/s in fiber).  
   The minimum possible delay for distance \(d\) is \(d/(c/2)\), so a 3000 km hop incurs ≈ 15 ms even before any processing.  

2. **Transmission delay** – \(\frac{|x|}{B}\), where \(B\) is the link bandwidth.  
   Longer geographic spans usually mean more hops, each with its own capacity and queuing delays.  

3. **Processing & routing overhead** – every router or switch performs lookup, encapsulation, etc., adding a few microseconds that accumulate over thousands of hops.

Thus, **latency grows roughly linearly with physical distance**, but the coefficient is shaped by network topology: fiber routes are seldom straight; they snake around terrain, land‑masses, and political borders. Moreover, *peering arrangements* can force traffic through congested inter‑exchange points far from the shortest path.

**Non‑obvious insight:**  
A 100 ms latency gap between two cities is often caused not by the raw distance but by **the placement of edge caches or inference nodes**. If an ML model is hosted in a distant data centre, every request must traverse the long physical route; placing a lightweight inference container at a regional CDN can reduce propagation to sub‑10 ms even though the underlying data centre remains far away. Hence, geography matters less than *where* the computation is anchored relative to end users.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
