---
qid: ing_0dd40a9650__fp__local
question: 'Explain: Bandwidth — Latency vs Throughput vs Bandwidth | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 402
total_tokens: 578
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:34:58-05:00'
sources: []
---

**Bandwidth – Latency vs Throughput: A First‑Principles View**

In any distributed ML pipeline we transport data packets (examples, gradients) across a network.  
Let  

* **Latency \(L\)** = time for one packet to travel end‑to‑end.  
* **Throughput \(\Theta\)** = number of packets per second that the link can carry.  
* **Bandwidth \(B\)** = the *maximum* data rate the physical medium supports, i.e. the asymptotic value of \(\Theta\) when packet sizes are large enough to saturate the channel.

Why these distinctions matter?  
When a model update is required, we care about *when* it arrives (latency). If each gradient is tiny, a link with high bandwidth but high latency can still be slow because the first few packets must wait. Conversely, if gradients are huge, throughput dominates: even a low‑latency link will choke once its packet‑rate limit is reached.

Mathematically, for packet size \(s\),

\[
\Theta(s)=\frac{s}{L+\frac{s}{B}}
\]

shows that as \(s \to 0\), latency dominates; as \(s \to \infty\), throughput (bandwidth) governs.  
**Non‑obvious insight:** In asynchronous SGD, *reducing the variance of each gradient* shrinks its size \(s\), shifting the system from a bandwidth‑limited regime to a latency‑limited one—so improving model quality can paradoxically increase communication cost if not paired with batching or compression.

Thus, designing ML systems requires aligning packet sizes, batching strategies, and network characteristics so that neither latency nor throughput becomes the bottleneck.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
