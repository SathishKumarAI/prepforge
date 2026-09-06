---
qid: ing_45fce3bb72__fp__local
question: Explain continuous (in-flight) batching. Why does it beat static batching,
  and what new problems does it create?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 400
total_tokens: 582
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:34:27-05:00'
sources: []
---

**Continuous (in‑flight) batching** is a runtime policy that aggregates inference requests as they arrive and submits them to the accelerator *on the fly* rather than waiting for a fixed queue size or period.  
The fundamental problem it solves is **latency–throughput trade‑off**: static batches either wait too long for enough samples (high latency) or send tiny groups (low throughput). By maintaining a sliding window of active requests and sending whatever fits the accelerator’s preferred batch size whenever resources free up, continuous batching guarantees that every request experiences the *optimal* throughput‑per‑cycle while keeping tail latencies bounded.

Why it beats static batching?  
1. **Work‑to‑data alignment** – the GPU or TPU is kept busy with full‑capacity kernels; idle cycles shrink to zero.  
2. **Statistical multiplexing** – requests are treated as random arrivals; the scheduler implicitly balances load, exploiting the law of large numbers to smooth variance in request sizes.  
3. **Dynamic adaptation** – if traffic drops, the policy automatically reduces batch size rather than holding back, preserving responsiveness.

New challenges arise:  
* **Stateful models** become harder to reconcile because requests that share hidden state may be split across batches.  
* **Memory fragmentation**: continuous grouping can lead to uneven memory allocation patterns, hurting cache locality.  
* **Fairness**: a high‑arrival stream can starve low‑priority jobs unless explicit admission control is added.

**Non‑obvious insight:** Continuous batching implicitly turns the inference service into a *fluid queue*. The queue’s effective capacity scales with the batch size distribution; by tuning that distribution, one can shape latency tails without changing hardware—an optimization that treats batching as a resource allocation problem rather than just a scheduling heuristic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
