---
qid: ing_95b137ad7a__fp__local
question: 'Explain: The Cost of Hitting the Database — What is Caching? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 490
total_tokens: 668
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:23:37-05:00'
sources: []
---

**Why “hitting” a database costs so much**

In a distributed system every request that must read data from disk incurs *latency* (disk seek, network hop) and *resource consumption* (CPU, memory, I/O).  
A single query may traverse several layers: application → load balancer → cache server → DB engine.  
The total response time is the sum of all these steps; any one step that repeats for many users becomes a bottleneck.

**From an optimization viewpoint**

Let  

- \(t_{\text{disk}}\) = time to read a row from disk,  
- \(t_{\text{net}}\) = network round‑trip,  
- \(p\) = probability the data is *already* in memory.

The expected latency per request without caching is  
\(L_0 = t_{\text{disk}} + t_{\text{net}}\).  

With a cache that stores the row in RAM, the latency becomes  
\(L_c = (1-p)(t_{\text{disk}}+t_{\text{net}}) + p\,t_{\text{mem}}\),  
where \(t_{\text{mem}}\ll t_{\text{disk}}\).

Even if \(p=0.5\), the cost drops by more than half, and as \(p\to1\) the benefit asymptotically approaches \(\frac{L_0}{t_{\text{mem}}}\).  
Thus caching turns a *resource‑intensive* problem into an *information‑theoretic* one: we trade space (RAM) for time.

**Non‑obvious insight**

Most designers focus on “keep everything in memory.”  The deeper principle is that **only the most frequently accessed items should be cached**.  
A small cache can achieve a high hit‑rate if it stores the *right* keys, not just any data.  
Hence caching is essentially an *entropy reduction* problem: we compress the access pattern by keeping the low‑entropy subset in fast storage.

In short, caching eliminates repeated expensive I/O by exploiting locality of reference; its effectiveness hinges on correctly identifying and storing the high‑probability items.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
