---
qid: ing_e1deb6c207__faang__local
question: Full fine-tuning vs. parameter-efficient fine-tuning - how do you choose?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 521
total_tokens: 760
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:24:40-05:00'
sources: []
---

**Clarify**  
You’re deciding between (1) full‑model fine‑tuning and (2) parameter‑efficient methods (PEFT) such as LoRA, adapters, or prefix tuning. Key assumptions:  
* Size of base model (e.g., 13B vs. 175B).  
* Amount of labeled data for the downstream task.  
* Available compute & memory during training and inference.  
* Deployment constraints (latency, storage).  

**Approach**  
1. Profile resource budget.  
2. Estimate performance gains per method on a validation set.  
3. Choose the technique that meets accuracy targets while staying within budget.  

**Depth**  
- **Full fine‑tuning** updates all \(O(N^2)\) parameters; training time ≈ \(T_{\text{full}}\), memory ≈ model size × 2 (activations + gradients). It yields the best task performance but is costly for large models.  
- **PEFT** freezes most weights, adding a small trainable module:  
  * LoRA inserts rank‑r matrices into attention layers; parameters added ≈ \(O(r \cdot d)\), with \(r\) typically 4–32.  
  * Adapters insert bottleneck MLPs (size \(b\)), adding ≈ \(2d b\).  
  Training time drops to ~10‑30% of full fine‑tuning, memory to ~20‑30%, while accuracy loss is often < 1–3 %.  

**Edge cases**  
- Very low data regimes: PEFT may overfit less due to fewer trainable params.  
- Extremely large models (175B): full fine‑tuning is infeasible; PEFT mandatory.  
- Real‑time inference: PEFT modules add negligible latency, but full fine‑tuned weights might be cached better.

**Optimize & Communicate**  
Start with a quick LoRA experiment on 1 % of data to gauge error gap. If < 2 %, adopt LoRA; otherwise, consider adapters or hybrid approaches (e.g., fine‑tune only the classifier head). Explain trade‑offs clearly: “We’ll keep the backbone frozen to preserve general knowledge and reduce compute, accepting a small accuracy hit that is acceptable for our latency target.” This structured reasoning satisfies FAANG interviewers’ emphasis on clarity, depth, and pragmatic optimization.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
