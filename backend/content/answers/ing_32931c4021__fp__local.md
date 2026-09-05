---
qid: ing_32931c4021__fp__local
question: 'Explain: Cache Repeated Work — Client-Server Architecture | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 451
total_tokens: 625
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:52:30-05:00'
sources: []
---

**Why a client‑server system must cache repeated work**

When a client asks a server for data, the server executes *computation* \(f(x)\) and returns \(y=f(x)\).  
If many clients request the same \(x\), the server repeats the same expensive computation.  
From an **information‑theoretic** point of view, each distinct request carries \(\log_2|X|\) bits of information; re‑executing it wastes bandwidth and CPU cycles.  

Let \(T_{\text{comp}}\) be the time to compute \(f(x)\), \(T_{\text{net}}\) the network latency, and \(C\) the cache hit rate.  
The expected response time is

\[
E[T] = C \cdot T_{\text{net}} + (1-C)(T_{\text{comp}}+T_{\text{net}})
      = T_{\text{net}} + (1-C)T_{\text{comp}}
\]

Thus, as \(C \to 1\), the latency collapses to network time alone.  
This simple linear model shows that *caching is an optimization of the overall cost function*.

**Design principle**

Treat the cache as a *statistical memoization* layer: it stores the mapping \(x \mapsto y\) for the most frequent queries, turning a deterministic computation into an almost‑instant lookup.  
The deeper insight many miss is that **caching turns a high‑variance, expensive operation into a low‑variance, cheap one**—the variance of response time drops from \(T_{\text{comp}}\) to near zero, improving tail latency and user experience.

In practice, pick an LRU or LFU policy based on the empirical query distribution, size the cache so that \((1-C)T_{\text{comp}}\) is below the acceptable SLA, and use a distributed key‑value store (Redis, Memcached) to keep consistency across server replicas.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
