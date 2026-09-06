---
qid: ing_b711143686__fp__local
question: Why is load balancing LLM inference different from load balancing stateless
  HTTP, and what does a good routing layer do?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 183
output_tokens: 438
total_tokens: 621
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:33:13-05:00'
sources: []
---

**Why the difference matters**

A language‑model (LLM) inference request is not a single, isolated operation; it is a *sequence of stateful micro‑steps*—token generation, attention computation, cache look‑ups—that must be executed on the same GPU or accelerator to preserve intermediate tensors. In contrast, stateless HTTP requests are independent key–value pairs that can be dropped into any worker and immediately discarded.

Because LLM inference is *stateful*, a routing layer cannot treat each request as an atomic unit; it must keep the *session context* (past hidden states, KV‑cache) on the same device. This creates two constraints:

1. **Temporal locality** – subsequent tokens of one query must stay on the same accelerator to avoid costly data shuffling.
2. **Capacity coupling** – a single user’s request may occupy a significant fraction of GPU memory for its entire lifetime.

Stateless HTTP traffic, by contrast, can be split arbitrarily; load is balanced purely by arrival rate and average service time.

**What a good routing layer does**

| Goal | Mechanism |
|------|-----------|
| **Preserve session affinity** | Assign a user/session to a single worker until the cache expires or the request ends. |
| **Maximize throughput** | Batch tokens from multiple sessions on the same GPU, respecting memory limits (dynamic batching). |
| **Adapt to workload variance** | Monitor per‑worker queue lengths and GPU utilization; steer new sessions toward underutilized nodes while keeping affinity. |
| **Graceful degradation** | Detect overcommitment early; pre‑emptively spill or pause low‑priority sessions rather than dropping high‑value ones. |

The subtle insight most miss: *load balancing for LLMs is a two‑stage problem—first, an affinity‑aware assignment that respects memory state; second, a dynamic batching optimizer that turns those affinities into the maximum possible GPU utilization.* This duality turns what looks like a simple “dispatch” problem into a constrained optimization over time‑varying resource constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
