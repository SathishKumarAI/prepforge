---
qid: ing_d7564914f6__faang__local
question: Explain sequence packing in SFT. What's the attention contamination problem
  and how is it solved?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 511
total_tokens: 751
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:00:10-05:00'
sources: []
---

**Clarify**  
You’re asking about *sequence packing* in **Supervised Fine‑Tuning (SFT)** of large language models: how we batch variable‑length prompts and responses into tensors, and why “attention contamination” arises when we do this naively. I’ll assume the model uses transformer blocks with self‑attention and that we’re training on teacher‑forced token pairs.

**Approach**  
1. Pack all prompt–response pairs into one long 2‑D tensor, padding to the longest sequence in the batch.  
2. Create a *mask* so the loss is computed only on the response tokens.  
3. Detect contamination: when attention heads look at future prompt tokens or see padded positions that influence earlier outputs.

**Depth**  
- **Packing** concatenates `[prompt₁, resp₁, prompt₂, resp₂,…]` and pads to a max length `L`.  
- The *attention mask* is binary; for each token we set 0 if it’s padding or a prompt position that should not influence the loss.  
- **Attention contamination** occurs when the self‑attention matrix lets query tokens in the response attend to prompt positions that are “future” relative to the current decoding step (or to other responses). This leaks target information and biases gradients.  
- The fix: use a *causal* attention mask on top of the padding mask, ensuring that each token can only attend to tokens ≤ its position **within its own response segment**. Practically we slice the combined tensor into segments per example, compute separate causal masks, then stack them back.

**Edge cases**  
- Very long prompts that exceed `L`: truncate or split.  
- Mixed‑length batches where one prompt is much longer than others: leads to excessive padding—use bucketing.  
- Overlap between responses in the same batch: ensure segment boundaries are respected in the mask.

**Optimize & communicate**  
Batch by *bucketed lengths* to reduce padding overhead. Use efficient masked attention kernels (e.g., FlashAttention) that natively support combined causal+padding masks. Communicate the logic clearly: “We pack for GPU parallelism, but we guard against leakage with a composite mask that enforces causality per response.” This shows awareness of both engineering efficiency and training fidelity—exactly what FAANG interviewers value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
