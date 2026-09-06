---
qid: ing_7ff026c631__think__local
question: Training a trillion-parameter model, attention logits can blow up and destabilise
  the run. What is going on, and how does something like MuonClip address it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 212
output_tokens: 543
total_tokens: 755
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T09:27:22-05:00'
sources: []
---

**1. Clarify the problem & set assumptions**  
- *What* exactly is “blowing up” – are logits exploding (→ NaNs), gradients vanishing, or training diverging?  
- *Assume* we’re in a standard transformer setting: large batch, high‑dim precision, softmax over many tokens.  
- *Goal*: understand why huge models produce unstable attention and how MuonClip mitigates it.

**2. Adopt a mental framework**  
1. **Numerical stability of softmax** → exponentials of logits can overflow if logit spread grows with model size.  
2. **Gradient scaling in back‑prop** → large logits amplify gradients, leading to exploding updates.  
3. **Normalization & regularization techniques** → how they tame these effects (e.g., clipping, weight decay).  

**3. Step‑by‑step reasoning**  
- In a trillion‑parameter transformer, each attention head computes `QK^T / sqrt(d_k)`. As parameters grow, the dot products can become large in magnitude because weights are less constrained.  
- Softmax of large numbers → many entries ≈ 0, a few ≈ 1; numerical under/overflow. This destabilizes forward pass and causes NaNs.  
- Back‑prop through such softmax yields gradients that scale with the logits themselves → exploding gradients in subsequent layers.  
- MuonClip introduces *dynamic clipping* of attention logits: it tracks an estimate of logit variance per head and scales them down if they exceed a threshold, akin to gradient clipping but applied pre‑softmax.  
- Additionally, MuonClip enforces a **softmax temperature** schedule that adapts to the current scale, keeping probabilities well‑formed without manual hyperparameter tuning.  

**4. Common traps to avoid**  
- Mistaking *gradient clipping* for logit clipping; they act at different stages.  
- Assuming batch‑norm fixes attention instability – it doesn’t address softmax overflow directly.  
- Over‑clipping: too aggressive scaling can kill expressivity and slow convergence.

**5. Sanity checks & communication**  
- Verify that after MuonClip, the maximum logit per head is bounded (e.g., < 10) and gradients remain finite.  
- Show a simple toy example where raw logits blow up vs. clipped version.  
- Explain to colleagues: “We’re essentially putting a safety valve on attention before it gets exponentiated—keeping the softmax numerically stable while preserving model capacity.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
