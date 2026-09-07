---
qid: ing_2809ac65e1__faang__local
question: Walk me through why you would disaggregate prefill and decode onto separate
  machines, as Mooncake does. What does that buy you and what does it cost?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 510
total_tokens: 764
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:16:39-05:00'
sources: []
---

**Clarify**  
You’re asking why a system like Mooncake splits *prefill* (embedding lookup + attention) from *decode* (generation step). I’ll assume we’re dealing with large‑scale transformer inference in production, where latency, throughput and cost are critical.

**Approach**  
1. Explain the computational profile of prefill vs decode.  
2. Show how separate machines match resource needs.  
3. Quantify benefits (latency, cost) and trade‑offs (complexity).

**Depth**

| Stage | Compute | Memory | Parallelism |
|-------|---------|--------|-------------|
| **Prefill** | 1‑shot forward pass over *all* tokens of a prompt (∼ O(L²)) | Needs full context embeddings & KV cache | Can batch many prompts together |
| **Decode** | Single token per step, small O(1) attention on cached KV | Reuses same cache, minimal extra memory | Strictly sequential – no batching |

*Why separate?*  
- **Hardware matching:** Prefill benefits from high‑bandwidth GPUs with large VRAM; decode can run on cheaper CPU/GPU nodes because it requires only a small hidden state.  
- **Resource isolation:** Long prompts consume many GPU cores; keeping decoding on lightweight nodes prevents blocking other services.  
- **Cost‑efficiency:** A single powerful GPU is idle during the slow, token‑by‑token decode phase. Running decode on spot instances or low‑power GPUs reduces spend.

**Edge Cases**

- *Very short prompts*: Prefill cost dominates; splitting adds overhead of inter‑node communication—might be wasteful.  
- *High request volume*: Decoding bottleneck can arise if too many sequential tokens hit the same node; need horizontal scaling.  
- *Fault tolerance*: Failure in one group must not stall the entire pipeline.

**Optimize & Communicate**

- Use a lightweight gRPC layer for KV cache transfer to keep latency < 5 ms.  
- Auto‑scale decode nodes based on token‑per‑second metrics.  
- Profile end‑to‑end to verify that the added network hops don’t outweigh GPU savings.

*Bottom line*: Disaggregating prefill and decode lets us allocate expensive GPU resources only when needed, reduce idle time, and keep inference cost per token low—at the price of a modest increase in system complexity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
