---
qid: ing_827da5518e__fp__local
question: 'Explain: Latency Numbers Every Programmer Should Know'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 513
total_tokens: 683
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:42:47-05:00'
sources: []
---

### Latency Numbers Every Programmer Should Know

In machine‑learning pipelines the *latency* of a model is the time it takes to transform an input into an output once the system is running.  
At its core, latency is **the reciprocal of throughput** (samples per second) multiplied by the number of samples processed at once.  When you measure a batch of size \(B\), the end‑to‑end time \(T_B\) satisfies  

\[
T_B = \underbrace{t_{\text{prep}}}_{\text{data I/O}}\;+\;\underbrace{\frac{B}{P}\cdot t_{\text{step}}}_{\text{GPU/CPU compute}}\;+\;\underbrace{t_{\text{post}}}_{\text{output handling}},
\]

where \(P\) is the number of parallel workers and \(t_{\text{step}}\) is the per‑sample computation time.  Inference on a single GPU with no batching gives

\[
T_1 \approx t_{\text{prep}} + t_{\text{step}} + t_{\text{post}},
\]

while training, where each gradient step processes \(B\) samples, yields  

\[
T_{\text{train}} \approx \frac{B}{P}\cdot t_{\text{step}}.
\]

**Why this matters:**  
- The *prep* and *post* terms dominate for small models; improving I/O can cut latency by >50 %.  
- For large neural nets, \(t_{\text{step}}\) scales roughly with the number of floating‑point operations (FLOPs); reducing FLOPs or increasing parallelism reduces latency linearly.  

**Non‑obvious insight:**  
Latency is *not* a fixed hardware property; it depends on **batch scheduling**.  If you interleave inference requests, the effective batch size shrinks, so the per‑sample cost rises dramatically.  Designing an *adaptive batching policy* that clusters similar requests can keep latency low while still exploiting parallelism—an optimization rooted in queueing theory rather than raw compute.  

Understanding these equations lets you pinpoint bottlenecks: is it I/O, kernel launch overhead, or compute? Once identified, you can target the right level of the stack for improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
