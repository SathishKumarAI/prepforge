---
qid: ing_6b13e050e1__fp__local
question: 'Explain: Fine-tuning & Adaptation <a name="finetuning"></a>'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 414
total_tokens: 591
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:52:17-05:00'
sources: []
---

### Fine‑tuning & Adaptation

At its core, a pretrained language model learns a **joint distribution** \(P_{\theta}(x)\) over token sequences by maximizing likelihood on massive corpora. This distribution is universal but generic; it encodes grammar, world knowledge, and statistical regularities but not task‑specific structure.  

Fine‑tuning addresses the *covariate shift* between the pretraining data and a downstream dataset \(D_{\text{task}}\). Formally we seek parameters \(\theta'\) that minimize  
\[
\mathcal L_{\text{task}}(\theta') = -\,\mathbb E_{(x,y)\sim D_{\text{task}}}\big[\log P_{\theta'}(y|x)\big].
\]
Because \(D_{\text{task}}\) is typically small, we impose a *regularizer* that keeps \(\theta'\) close to the pretrained \(\theta\), e.g., \(\|\theta'-\theta\|^2\). This is equivalent to **Bayesian posterior inference** with a Gaussian prior centered at \(\theta\). The model thus trades off fitting new data against staying near its high‑probability region in parameter space.

Adaptation methods (prompt tuning, adapters, LoRA) can be seen as *parameter‑efficient* fine‑tuning: they introduce low‑rank or sparse perturbations that span a subspace aligned with the task gradients. This aligns with the observation that **task gradients lie in a low‑dimensional manifold** of the full parameter space—an insight often overlooked. By constraining updates to this manifold, we preserve the model’s expressive geometry while avoiding overfitting.

In short, fine‑tuning is Bayesian updating on a pre‑trained prior; adaptation exploits the intrinsic low‑rank structure of task gradients, enabling efficient, robust specialization.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
