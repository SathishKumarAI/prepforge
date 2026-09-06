---
qid: ing_5d356c8187__fp__local
question: 'Explain: So that is remote procedure calls. So — System Design BASICS:
  Horizontal vs. Vertical Scaling'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 344
total_tokens: 525
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:22:42-05:00'
sources: []
---

**Horizontal vs. Vertical Scaling – a first‑principles view**

The core problem is *capacity*: we must keep response time \(T\) below a target while handling load \(\lambda\). Queueing theory tells us  
\[ T \approx \frac{1}{\mu - \lambda} \]  
where \(\mu\) is the service rate of our server. Increasing \(\mu\) (vertical scaling) means buying a faster CPU, more RAM, or better I/O; this reduces latency linearly but hits a hard limit: the physical capacity of a single machine and its power‑wall.

Horizontal scaling—adding replicas—shifts the problem to *load distribution*. With \(N\) identical nodes, each sees \(\lambda/N\), so  
\[ T_N \approx \frac{1}{\mu - \lambda/N} \]  
and as \(N \to \infty\), \(T_N\) approaches a lower bound determined by the single‑node overhead. The trade‑off is that replication introduces consistency and coordination costs (CAP theorem).  

**Non‑obvious insight:** *Scalability is not just adding more machines; it’s about reducing per‑request coupling.* A monolithic service has internal state that grows with \(\lambda\); splitting the state into fine‑grained, stateless shards turns a vertical bottleneck into a horizontal one. Thus, the real lever for scaling is *decomposition*, not merely commodity hardware.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
