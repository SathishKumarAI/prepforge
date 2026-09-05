---
qid: ing_02548d79ea__fp__local
question: 'Explain: Pitfall 2: Ambiguous Ground Truth — Capability Assessment'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 387
total_tokens: 560
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:09:58-05:00'
sources: []
---

**Pitfall 2 – Ambiguous Ground‑Truth in Capability Assessment**

When we ask an AI “can it do X?” the most naïve answer is *yes* or *no*.  
The underlying problem is that “X” is often defined by a set of labeled examples, and those labels are themselves noisy or subjective. From first principles this is an instance of *label‑bias in supervised learning*: if the target variable \(y\) is not uniquely determined by the input \(x\), any model trained on \((x,y)\) will learn to predict the *average* of all plausible \(y\)’s rather than a single truth.  

Mathematically, we minimize expected loss  
\[
L(\theta)=\mathbb{E}_{(x,y)}[\ell(f_\theta(x),y)] .
\]
If \(\Pr(y|x)\) is multimodal, the Bayes optimal predictor is the *conditional mean* (or median for \(L_1\)), not the true class. Thus a model may appear competent on held‑out data but actually be predicting an “average” that never occurs in practice.

**Why it matters:** The evaluation metric inherits this ambiguity; accuracy can inflate while real‑world performance drops, especially when downstream tasks require *specific* outputs (e.g., medical diagnosis).  

**Non‑obvious insight:** Treat the ground truth as a *distribution* rather than a point. By modeling \(\Pr(y|x)\) (e.g., via Bayesian neural nets or label‑uncertainty loss functions), we can quantify epistemic uncertainty and expose cases where the model’s confidence is misplaced—precisely those scenarios where ambiguous labels hide capability gaps.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
