---
qid: ing_927f9c76c5__fp__local
question: 'Q: Why is a distilled 8B model better than an 8B model trained from scratch
  on the same tokens?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 184
output_tokens: 458
total_tokens: 642
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:16:58-05:00'
sources: []
---

**Why a distilled 8 B transformer outperforms an equally sized model trained from scratch on the same corpus**

The core objective of training is to approximate the true data distribution \(p_{\text{data}}\). A student network learns this distribution by mimicking a teacher’s *soft* predictions, which encode richer information than hard labels.  
1. **Implicit regularization** – The teacher’s logits are a smoothed version of \(p_{\text{data}}\), effectively performing *label smoothing*. This reduces variance and combats over‑parameterization without extra hyper‑parameters.  
2. **Knowledge transfer via KL divergence** – Minimizing \(\mathcal{L}_{\text{KD}}=\text{KL}(T||S)\) forces the student to match higher‑order moments of the teacher’s posterior, not just first‑moment accuracy. The gradient signal is denser across all classes, improving generalization.  
3. **Data efficiency** – Distillation supplies a *proxy supervision* that acts like additional data: each training token now carries \(K\) soft targets instead of one hard label. Empirically this boosts effective sample size by an order of magnitude, which is critical when the student’s capacity matches the teacher’s.  
4. **Optimization dynamics** – The teacher’s logits smooth the loss landscape (lower curvature), enabling larger learning rates and faster convergence. A fresh 8 B model must first learn a sharp, multimodal posterior from scratch, often getting trapped in suboptimal local minima.

**Non‑obvious insight:** *The teacher does not merely “compress” knowledge; it reshapes the target distribution into one that is easier for the student to approximate with its limited representational power.* By aligning the student’s objective with a smoothed surrogate of \(p_{\text{data}}\), distillation effectively rewires the learning problem from fitting raw data to fitting an intermediate, more tractable manifold. This subtle shift explains why a distilled 8 B model consistently outperforms its freshly trained counterpart on identical tokens.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
