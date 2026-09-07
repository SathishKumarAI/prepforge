---
qid: ing_61fb3fb644__faang__local
question: What is loss masking in SFT, and why do you mask the prompt tokens?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 478
total_tokens: 717
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:31:40-05:00'
sources: []
---

**Clarify**  
We’re talking about *Supervised Fine‑Tuning (SFT)* of a language model on human‑labelled Q&A data. “Loss masking” means we zero out the loss contribution for certain tokens when computing gradients. The question asks why we mask prompt tokens.

**Approach**  
1. Explain what loss masking is in SFT.  
2. Describe the typical input format (prompt + completion).  
3. State the reason to ignore prompt tokens during loss calculation.  

**Depth**  
In SFT, each training example is a concatenated sequence: `prompt || completion`. The model predicts every token; we compute cross‑entropy over all positions. Loss masking applies a binary mask `m[i] ∈ {0,1}` so that the total loss is  
\[
L = \frac{1}{N}\sum_i m[i]\;\text{CE}(y_i,\hat y_i).
\]
We set `m[i]=0` for tokens belonging to the prompt and `m[i]=1` only for completion tokens.  

Why? The prompt represents *context* we want the model to use, not something it should learn to reproduce. If we back‑propagate through prompt tokens, the model will try to “predict” them from their own past, which is a trivial task and would dominate gradients, leading to overfitting on the prompt distribution rather than learning to generate correct completions. Masking ensures gradients flow only into weights that influence generation of the target text.

**Edge Cases**  
- Very short prompts: still mask; loss becomes small but valid.  
- Over‑long prompts: same rule applies; no gradient leakage.  
- Tokenization boundaries: ensure mask aligns with token indices, not character offsets.

**Optimize & Communicate**  
A simple implementation uses a boolean tensor of shape `[batch_size, seq_len]`. During training we multiply the per‑token loss by this mask before reduction. This adds negligible overhead but guarantees that fine‑tuning focuses on output quality. Communicating this to interviewers: “We mask prompt tokens so the model learns to generate responses conditioned on context, not to memorize the prompt itself.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
