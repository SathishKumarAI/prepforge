---
qid: ing_fa3ea50ee1__faang__local
question: 'Explain: Describe the throughput - latency tradeoff curve for an LLM server,
  and explain goodput.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 499
total_tokens: 742
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:21:43-05:00'
sources: []
---

**Clarify**  
We’re asked to sketch how *throughput* (requests per second) trades against *latency* (time from request to response) for a large‑language‑model (LLM) serving endpoint, and to explain what *goodput* means in this context. I’ll assume a single‑node inference server with a fixed GPU/CPU pool and no queueing beyond a simple round‑robin scheduler.

**Approach**  
1. Draw the classic concave curve: high throughput → long queues → higher latency; low throughput → idle resources → lower latency.  
2. Define *goodput* as the amount of useful payload delivered per unit time (e.g., tokens generated).  
3. Show how batching affects both axes.

**Depth**  
- **Latency vs Throughput**: For a batch size `b`, inference cost ≈ `C(b)`. Latency = `queue_delay + C(b)/b`. As we increase `b` to raise throughput, `queue_delay` grows because requests wait for the next batch, while `C(b)` improves sub‑linearly due to GPU parallelism. The trade‑off curve is thus convex: an optimal operating point balances queue delay against compute efficiency.  
- **Goodput**: \( G = \frac{b \times \text{tokens per request}}{\text{latency}} \). It peaks near the sweet spot of the latency–throughput curve because it captures *useful* output rather than raw requests. Goodput is what matters for billing or SLA, not just throughput.

**Edge Cases**  
- Extremely small batch sizes → high latency, low GPU utilization.  
- Very large batches → minimal queue delay but excessive memory use and possible OOM errors.  
- Variable request lengths: a fixed‑size batch may waste compute on short inputs.

**Optimize & Communicate**  
I’d recommend dynamic batching that adapts `b` based on current arrival rate, coupled with *prefill* strategies (e.g., KV cache reuse) to flatten the curve. I would explain this by showing how moving right along the curve improves GPU utilization up to a point, after which latency dominates and goodput drops. This narrative demonstrates clear problem framing, analytic reasoning, and practical optimization—key signals for FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
