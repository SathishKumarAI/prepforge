---
qid: ing_c52bafa47f__faang__local
question: 'Q: Why is Continuous Batching superior to Static Batching for LLMs?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 442
total_tokens: 681
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:19:15-05:00'
sources: []
---

**Clarify**  
We’re comparing *continuous batching* (dynamic, on‑the‑fly grouping of requests) vs. *static batching* (fixed groups set before inference). The goal: maximize GPU utilization and minimize latency for large language model (LLM) serving.

**Approach**  
1. Identify metrics: throughput, latency, queue size.  
2. Examine how each batching strategy maps requests to GPU kernels.  
3. Quantify overheads: padding, waiting time, kernel launch cost.  

**Depth**  
- **Static Batching** groups a pre‑determined set of inputs. It can suffer from *under‑utilization* when the batch size is too small (GPU idle) or *wasted compute* when padding dominates (different sequence lengths). Latency spikes because requests must wait for the full batch to fill, creating a queuing delay proportional to batch size.  
- **Continuous Batching** continuously pulls ready requests from a queue and immediately packs them into the largest possible GPU‑friendly group. It adapts to traffic patterns: during peak load it forms large batches; during lull it reduces size, keeping latency low. Padding is minimized by grouping similar‑length sequences on the fly. Kernel launch overhead is amortized across many small launches because batching decisions are made per request arrival rather than at fixed intervals.

**Edge Cases**  
- *Burst traffic*: continuous batching may still form large batches but could momentarily increase queue length if incoming rate exceeds GPU capacity.  
- *Very short sequences*: padding may dominate; a hybrid strategy that groups short vs. long sequences separately can help.  

**Optimize & Communicate**  
Implement a two‑tier scheduler: an outer loop that aggregates requests into size buckets, and an inner loop that triggers GPU inference once the bucket exceeds a threshold or a timeout occurs. This reduces latency while preserving high throughput. Explain to interviewers how this dynamic approach aligns with real‑world LLM serving constraints—elastic traffic, heterogeneous input lengths, and strict SLAs—demonstrating both deep technical understanding and pragmatic system design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
