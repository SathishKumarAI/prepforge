---
qid: ing_61314e3913__faang__local
question: How do you serve fine-tuned models at scale - merged checkpoints vs adapters,
  versioning, rollback?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 484
total_tokens: 727
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:29:48-05:00'
sources: []
---

**Clarify**  
We’re asked how to deploy *fine‑tuned* language models in production at scale—choosing between merging checkpoints or keeping adapters, handling many versions, and rolling back safely.

**Approach**  
1. Decide the *deployment unit*: either a monolithic merged checkpoint (model + weights) or a lightweight adapter on top of a frozen base.  
2. Build a **model registry** that stores artifacts, metadata (source checkpoint, hyper‑params, evaluation metrics), and a version graph.  
3. Use **canary releases** + blue/green routing to roll out new versions, with automated rollback if latency or error rates spike.

**Depth**  
- *Merged checkpoints* give the fastest inference but inflate storage (each new fine‑tune is a full model) and make rollbacks expensive—must copy or rebuild.  
- *Adapters* keep a single base checkpoint; each adapter (~1–5 % of size) can be swapped in/out, enabling cheap versioning, faster rollbacks, and easier multi‑model inference (e.g., prompt‑based routing).  
- Versioning: tag artifacts with semantic tags (`v2.3`, `experiment‑42`), store lineage in the registry, and expose an API that selects the adapter based on request metadata.  
- Rollback: keep a hot standby of the last stable checkpoint/adapters; rollback is simply swapping pointers in the inference service.

**Edge cases**  
- Diverging adapters that modify overlapping weights → conflict resolution via hashing or merge‑conflict detection.  
- Adapter drift (e.g., due to catastrophic forgetting) → schedule periodic re‑fine‑tuning and automatic promotion.  
- Memory limits on GPU: use adapter compression (quantization, pruning).

**Optimize & Communicate**  
Adopt **model slicing**: split adapters into shards for distributed inference; cache frequently used adapters in memory. Explain trade‑offs to stakeholders: merged models give marginal latency gains but cost storage and rollback complexity; adapters scale linearly with the number of fine‑tunes and simplify A/B testing. This structured plan satisfies FAANG interview expectations—clear assumptions, systematic strategy, technical depth, edge‑case awareness, and concise communication.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
