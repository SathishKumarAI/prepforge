---
qid: ing_61314e3913__fp__local
question: How do you serve fine-tuned models at scale - merged checkpoints vs adapters,
  versioning, rollback?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 372
total_tokens: 552
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:31:59-05:00'
sources: []
---

**Serving fine‑tuned LLMs at scale**

The core problem is *efficient inference* on a fixed GPU/CPU pool while preserving **model fidelity** across many users and experiments.  
1. **Model representation** – A full checkpoint (≈ 10 GB for GPT‑3) is heavy to copy, upload, or reload.  An *adapter* is a small Δ (few MB) that modulates the base weights; inference cost stays O(1) in adapter size because it only adds a few linear layers per transformer block.  
2. **Optimization principle** – Inference latency ≈ ∑ (cost of weight read + compute).  By keeping the base frozen and loading adapters into fast on‑chip memory, we reduce I/O and enable *parameter‑efficient fine‑tuning* (PEFT), a direct application of sparsity‑induced regularization.  
3. **Versioning & rollback** – Treat each adapter as an immutable artifact tagged by hash.  The inference engine keeps a *catalog* mapping user requests → base model + set of adapters.  Rollback is simply swapping the adapter hash; no weight recomputation is needed because the underlying base never changes.  

**Non‑obvious insight:**  
Most practitioners treat adapters as “add‑ons”, but they can be **composed** to form a *hierarchical policy* that mirrors multi‑task learning: a top‑level adapter selects a task, lower adapters refine style or domain. This composition is mathematically equivalent to a block‑wise mixture of experts, allowing graceful degradation when an adapter fails—roll back to the previous level without restarting inference.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
