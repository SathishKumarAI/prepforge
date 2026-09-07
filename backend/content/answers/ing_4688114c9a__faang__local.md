---
qid: ing_4688114c9a__faang__local
question: 'Explain: Q24: Compare batching strategies for LLM serving'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 582
total_tokens: 816
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:28:06-05:00'
sources: []
---

**Clarify**  
The interviewer wants a comparison of *batching* approaches used when deploying large language models (LLMs) in production—i.e., how requests are grouped before inference to maximize throughput while keeping latency acceptable. I’ll assume we’re talking about GPU‑based inference, real‑time user traffic, and that the model is already quantized/fused for speed.

**Approach**  
1. Define the goals: *throughput* vs. *latency*.  
2. Enumerate batching strategies: **Static (fixed‑size)**, **Dynamic (variable‑size)**, **Queue‑based** (request‑queue + scheduler), and **Hybrid** (e.g., micro‑batching within a larger batch).  
3. For each, list pros/cons, typical use‑case, and complexity.

**Depth**  

| Strategy | Mechanics | Throughput | Latency | Complexity |
|----------|-----------|------------|---------|------------|
| Static (fixed) | Pre‑defined batch size (e.g., 32). | High – GPU fully utilized. | Poor for small traffic; idle GPU cycles wasted. | Low – simple buffer. |
| Dynamic (variable) | Grow until timeout or max size. | Good – adapts to load. | Better latency; still can hit tail if many short requests. | Medium – requires timer & resizing logic. |
| Queue‑based + Scheduler | Separate queues per priority, scheduler picks optimal batch. | Very high – fine‑grained control. | Variable; can guarantee SLA by enforcing max wait. | High – needs orchestration, load‑balancing. |
| Hybrid (micro‑batch) | Small micro‑batches sent immediately; larger batches formed later. | Balanced throughput/latency. | Good for mixed traffic patterns. | Medium–High – two layers of buffering. |

**Edge Cases**  
- *Sudden traffic spike*: static batching stalls, dynamic may burst.  
- *Very small payloads*: dynamic can waste GPU cycles if batch size remains large.  
- *Model size > GPU memory*: hybrid needed to shard requests.

**Optimize & Communicate**  
Start with a **dynamic batching** baseline (fastest implementation). If SLA demands strict latency, add a **queue‑based scheduler** that caps wait times per priority tier. For ultra‑high throughput, switch to a **static or hybrid** approach and monitor GPU utilization. Explain the trade‑off curve: as batch size ↑ → throughput ↑ but tail latency ↑. Use real‑time metrics (GPU load, request queue length) to auto‑tune thresholds. This shows clear problem framing, technical depth, and pragmatic optimization—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
