---
qid: ing_e497581e5e__fp__local
question: 'Explain: Other Metrics — Latencynumbers'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 666
total_tokens: 835
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:04:54-05:00'
sources: []
---

## Why “Latency” Matters for a Learned System

A machine‑learning pipeline is a **stochastic process** that maps an input \(x\) to an output \(\hat y\).  
Its **throughput** (samples per second) and its **latency** (time between receiving \(x\) and producing \(\hat y\)) are inversely related.  
Latency, denoted \(\tau\), is the expected waiting time for a single prediction:

\[
\tau = \mathbb{E}\bigl[T(x)\bigr],\qquad T(x)=\text{time to evaluate }f_{\theta}(x).
\]

Because \(T(x)\) depends on *hardware*, *software*, and *model* structure, it is a random variable whose distribution we usually approximate by the **mean** or the **95‑th percentile**.  
Deriving \(\tau\) from first principles:

1. **Compute Time**: For a neural net, each layer \(l\) performs a matrix multiplication of size \(m_l\times n_l\). The FLOP count is \(2 m_ln_l\). On a GPU with throughput \(B\) FLOPs/s, the ideal compute time is \(\frac{2 m_ln_l}{B}\).

2. **Memory Bandwidth**: Loading inputs and weights requires bandwidth \(W\); the transfer time is \(\frac{\text{bytes}}{W}\). If layers are pipelined, overlapping compute and memory yields an effective latency of

   \[
   T_{\text{eff}}=\max\Bigl(\sum_l \tfrac{2m_ln_l}{B},\,\sum_l\tfrac{\text{bytes}_l}{W}\Bigr).
   \]

3. **Queueing Delay**: In a production server, requests arrive as a Poisson process with rate \(\lambda\). A single‑threaded inference engine behaves like an M/M/1 queue; the expected waiting time is

   \[
   T_{\text{queue}}=\frac{\rho}{\mu(1-\rho)},\qquad\rho=\tfrac{\lambda}{\mu},
   \]
   where \(\mu=1/\tau_{\text{eff}}\).

Thus, the **overall latency** is

\[
\tau = T_{\text{eff}} + T_{\text{queue}},
\]

and any improvement—faster hardware (larger \(B,W\)), model pruning (smaller \(m_l,n_l\)), or load balancing (reducing \(\lambda\))—must reduce one of these terms.

### Non‑Obvious Insight

Most practitioners focus on the *average* latency, but in safety‑critical systems the **95‑th percentile** is far more informative. Because queueing delays dominate tail behaviour, reducing variance in compute time (e.g., by batching or deterministic kernels) can cut the 95‑th percentile by an order of magnitude without changing the mean—a subtle optimisation that often gets overlooked.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
