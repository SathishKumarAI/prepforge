---
qid: ing_fef910fb72__fp__local
question: 'Explain: Calculating Throughput — Latency vs Throughput vs Bandwidth |
  System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 335
total_tokens: 513
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T01:02:07-05:00'
sources: []
---

**Throughput versus latency and bandwidth – the geometry of data flow**

At its core a system is an *information‑transport network*: data packets traverse links that have a finite capacity (bandwidth) while each processing stage adds a deterministic delay (latency).  
Let  

\[
B=\text{bits/s} \quad (\text{channel capacity}),\qquad
L=\text{seconds per packet}
\]

A single packet of size \(S\) bits occupies the link for \(S/B\) seconds. While it is in transit, no other packet can use that bandwidth; thus the *effective* throughput \(T\) (bits/s) satisfies

\[
T = \frac{S}{L + S/B}.
\]

This expression shows two regimes:

1. **Latency‑bound**: when \(S/B \ll L\), \(T \approx S/L\). Adding bandwidth does nothing; the bottleneck is processing time.
2. **Bandwidth‑bound**: when \(S/B \gg L\), \(T \approx B\). Increasing packet size or reducing latency yields negligible gains.

The non‑obvious insight: *throughput is a harmonic mean of latency and bandwidth*. Optimizing for throughput means balancing the two – e.g., in ML inference, batching reduces per‑sample latency but increases per‑batch size, shifting the system from latency‑bound to bandwidth‑bound. Thus, system designers must model both components jointly rather than treating them as separate knobs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
