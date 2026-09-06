---
qid: ing_e972d30b4b__fp__local
question: 'Explain: Fine-tuning, RLHF & Alignment - Interview Questions'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 636
total_tokens: 808
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:15:11-05:00'
sources: []
---

**Fine‑tuning, RLHF & Alignment – What do they really solve?**  
At the heart of any language model is a probability distribution \(p_\theta(x)\) learned from billions of tokens. The *fundamental problem* is that this distribution reflects the raw frequency of patterns in data, not necessarily the *desirable behavior* we want from an AI. Fine‑tuning and RLHF are two ways to warp \(p_\theta\) so that its mass concentrates on *human‑aligned* outcomes.

---

### 1. **Fine‑tuning (supervised adaptation)**  
We add a small, curated dataset \(\{(x_i,y_i)\}\) where \(y_i\) is the *correct* response to prompt \(x_i\). We minimize cross‑entropy:
\[
L_{\text{FT}} = -\sum_i \log p_\theta(y_i|x_i).
\]
This forces the model to shift probability mass toward the labeled pairs. **Why it works:** gradient descent on a convex surrogate of KL‑divergence pulls the learned distribution closer to the target distribution defined by the labels. The *non‑obvious insight* is that fine‑tuning implicitly performs *importance sampling*: it re‑weights rare but valuable patterns, allowing the model to learn from a tiny fraction of data without overfitting.

### 2. **RLHF (Reinforcement Learning with Human Feedback)**  
Human raters score outputs \(\{r_j\}\) for prompts \(x\). We train a *reward model* \(R_\phi(y|x)\) to predict these scores, then optimize the policy:
\[
L_{\text{RL}} = -\mathbb{E}_{y\sim p_\theta}[R_\phi(y|x)] + \lambda\, \text{KL}(p_\theta||p_{\text{pre} }).
\]
The KL term preserves the pretrained knowledge; the reward term nudges the policy toward higher‑scoring outputs. **Why it works:** RL turns a static probability distribution into an *adaptive* one that maximizes expected human utility, bridging the gap between statistical fidelity and pragmatic usefulness.

### 3. **Alignment**  
Both techniques aim to align \(p_\theta\) with *human values*. Alignment is not just about correctness; it's about safety, robustness, and fairness. The deeper principle is *incentive compatibility*: we shape the model’s internal objective so that following its own optimal policy coincides with human preferences.

---

**Non‑obvious takeaway:** Fine‑tuning and RLHF are *not* separate layers of correction; they are two ends of a continuum from *static distribution shift* to *dynamic utility maximization*. Understanding them as manipulating the same underlying probability mass clarifies why small, well‑curated datasets can dramatically improve real‑world behavior without retraining from scratch.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
