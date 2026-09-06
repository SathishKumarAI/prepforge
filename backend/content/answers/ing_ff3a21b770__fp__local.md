---
qid: ing_ff3a21b770__fp__local
question: 'Explain: Training Efficiency: KD vs. SFT. — What Makes Low-Bit Quantization-Aware
  Training Work for Reasoning LLMs? A Systematic Study'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 415
total_tokens: 608
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T01:02:33-05:00'
sources: []
---

### Why Low‑Bit Quantization‑Aware Training (QAT) Works for Reasoning LLMs

**Fundamental problem:**  
Large language models (LLMs) carry billions of parameters, yet inference on edge devices demands *few‑bit* weights. Directly quantizing a pretrained model typically destroys the delicate internal arithmetic that underpins multi‑step reasoning—small perturbations in logits can cascade into wildly different chain‑of‑thoughts.

**Key insight:**  
QAT injects the quantization error into the loss gradient during training, making the network *learn* to compensate for bit‑loss. It turns the quantizer into a differentiable regularizer that reshapes the loss landscape toward “robust” directions where small perturbations no longer flip reasoning outcomes.

**Why it beats Knowledge Distillation (KD) or Supervised Fine‑Tuning (SFT):**  
- **KD** preserves teacher logits but ignores the *quantization noise* of the student; the student learns a smooth function that collapses once weights are clipped.  
- **SFT** optimizes for task loss only, letting quantization act as an afterthought and often producing brittle inference.  

QAT, by contrast, co‑optimises *task performance* and *bit‑wise robustness*, essentially performing an implicit form of *probabilistic calibration*: the model’s posterior over reasoning paths is regularised to be flat in directions that the quantizer will later perturb.

**Non‑obvious takeaway:**  
The most critical hyperparameter isn’t the target bit‑width but the *quantization schedule*—gradually tightening the clipping range during training yields a smoother convergence, akin to annealing in simulated optimisation. This subtle curriculum allows reasoning LLMs to retain long‑range dependencies even when compressed to 4 bits.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
