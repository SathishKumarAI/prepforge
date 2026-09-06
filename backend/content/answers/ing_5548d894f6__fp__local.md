---
qid: ing_5548d894f6__fp__local
question: 'Explain: Summary — Back of the Envelope - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 386
total_tokens: 557
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:06:09-05:00'
sources: []
---

### “Back‑of‑the‑Envelope” for Machine‑Learning System Design

When you first sketch a production ML system, the *back‑of‑the‑envelope* (BOE) serves as a sanity‑check that turns intuition into math.  
1. **Identify the bottleneck**: compute time ≈ (#examples) × (steps per example).  
2. **Break down the steps**: forward pass, backward pass, optimizer update; each has a per‑sample cost \(c_f,c_b,c_o\).  
3. **Estimate throughput**: if you can process \(B\) samples per GPU per second, then total time ≈ \(N/(B\,G)\), where \(G\) is the number of GPUs.  
4. **Memory budget**: activations ≈ batch size × feature dimension; gradient buffers add another factor.  

These simple equations stem from *resource‑allocation theory*: you’re solving a linear program where compute and memory are limited resources, and you must allocate them to maximize throughput while keeping latency below a target.

#### Non‑obvious insight  
The BOE often reveals that **increasing batch size** can be more effective than adding GPUs. Because \(B\) appears in the denominator of time but *not* linearly in memory, you can push batch size until GPU memory saturates, then add a second GPU to share the load—this yields near‑ideal scaling before communication overhead dominates.

By deriving these numbers from first principles, you avoid costly over‑engineering and ensure that every design choice is justified by the underlying optimization constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
