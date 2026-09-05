---
qid: ing_3014af812c__fp__local
question: 'Explain: Cache-Aware Load Balancer — SGLang v0.4: Zero-Overhead Batch Scheduler,
  Cache-Aware Load Balancer, Faster Structured Outputs - LMSYS Org'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 198
output_tokens: 374
total_tokens: 572
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:47:02-05:00'
sources: []
---

**Cache‑Aware Load Balancer (SGLang v0.4)**  
At the heart of any high‑throughput inference engine is a *queueing problem*: we have a stream of input tensors and a finite set of GPU cores that can process them in parallel. If we schedule batches naively, each core may repeatedly load the same weight matrix into its local cache, wasting memory bandwidth and incurring stall cycles.

SGLang’s zero‑overhead batch scheduler first *predicts* the exact GPU memory footprint of every candidate batch (size × model depth). It then formulates a **knapsack‑like optimization**: choose the largest set of batches that fit into the on‑device cache without spilling. Because the cache is *structured* (e.g., per‑layer weight tiles), the scheduler treats each layer as an independent item and uses a greedy algorithm that guarantees optimal packing under the assumption of uniform access patterns—an assumption justified by the self‑attention mechanism’s fixed positional bias.

The **cache‑aware load balancer** extends this idea to *multiple GPUs*. It monitors the real‑time cache hit rate per device, then reallocates pending batches so that each GPU’s *effective utilization* (computed as throughput × hit rate) is balanced. This dynamic rebalancing is *zero‑overhead*: it uses only metadata already emitted by the kernel launch and requires no additional synchronization primitives.

A non‑obvious insight: by treating weight tiles as *first‑class objects* in the scheduler, we exploit the fact that modern deep nets reuse the same weights across many inputs. Thus, a single tile can serve dozens of batches simultaneously, dramatically reducing effective memory traffic—something conventional batch schedulers overlook.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
