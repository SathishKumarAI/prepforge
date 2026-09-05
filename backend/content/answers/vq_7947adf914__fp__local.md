---
qid: vq_7947adf914__fp__local
question: What's the acceptable latency?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 400
total_tokens: 565
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:42:08-05:00'
sources: []
---

**Why “acceptable latency” exists at all**

In any data‑engineering pipeline we trade *freshness* against *throughput*.  
Freshness is the time between an event’s occurrence and its availability to downstream consumers; throughput is the number of events processed per second. The fundamental constraint is that a system can only keep up with a stream if  

\[
\text{latency} \;\ge\; \frac{\text{average payload size}}{\text{throughput capacity}}
\]

otherwise back‑pressure builds and the queue length grows unbounded.  
This inequality is simply an instantiation of Little’s Law in queuing theory: \(L = \lambda W\). Here \(W\) is latency, \(\lambda\) is arrival rate, and \(L\) is buffer size.  

**Deriving a rule‑of‑thumb**

1. **Measure the critical path**: time to ingest, transform, and write a single record.  
2. **Compute the “throughput budget”**: \(\text{budget} = \frac{\text{max queue depth}}{\lambda}\).  
3. **Set latency ≤ budget**.

In practice most enterprises target 1–5 s for near‑real‑time analytics and 10–30 min for batch reporting, because those intervals satisfy the inequality above while keeping storage costs manageable.  

**Non‑obvious insight**

Many teams assume “lower is always better.” In reality, pushing latency below the threshold defined by Little’s Law can *worsen* overall system reliability: it forces higher hardware utilization, increases failure probability, and erodes the benefits of horizontal scaling. A slightly relaxed latency that respects the queuing equilibrium often yields higher throughput and lower operational cost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
