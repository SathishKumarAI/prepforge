---
qid: ing_a238f2d6b3__fp__local
question: 'Explain: Walk me through the classic RLHF pipeline end to end.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 561
total_tokens: 734
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:50:38-05:00'
sources: []
---

**Why we need RLHF**

A language model learns by maximizing likelihood on a massive text corpus.  
Its objective is *syntactic fidelity*, not human values or task performance.  
When the model’s outputs are evaluated by people, they judge *quality* (helpfulness, safety, relevance).  
RLHF closes the gap between the training signal and this human‑centred criterion.

---

### 1. **Data collection**

*Collect examples that illustrate good behaviour.*  
Human annotators read a prompt and write several candidate completions or rate existing ones.  
The dataset is a **human preference corpus**: pairs \((c_1,c_2)\) with an indicator \(y=1\) if \(c_1\succ c_2\).

---

### 2. **Reward model (RM) training**

Treat the RM as a binary classifier on the pairwise data:
\[
P(y=1|c_1,c_2)=\sigma(s(c_1)-s(c_2))
\]
where \(s(\cdot)\) is the RM score.  
Training maximises
\[
\sum_{(c_1,c_2)} \log P(y=1|c_1,c_2)
\]
so that higher‑scoring outputs are more likely to be preferred.

**Non‑obvious insight:**  
Because humans provide *relative* judgments, the RM learns a *ranking function*, not absolute quality.  
This makes it robust to scale shifts and allows it to generalise beyond the training set.

---

### 3. **Policy optimisation**

Treat the language model as a stochastic policy \(\pi_\theta\).  
Using Proximal Policy Optimisation (PPO) or similar, we maximise expected reward:
\[
J(\theta)=\mathbb{E}_{c\sim\pi_\theta}[\,s(c)\,]
\]
subject to a KL‑divergence constraint that keeps \(\pi_{\theta}\) close to the pre‑trained baseline.  
This prevents catastrophic forgetting while nudging behaviour toward human preferences.

---

### 4. **Iterative refinement**

*Sample new prompts → generate completions → collect fresh human comparisons → retrain RM → fine‑tune policy.*  
Each loop tightens the alignment, analogous to a gradient descent on an implicit loss defined by human judgments.

---

**Bottom line:** RLHF turns subjective human preferences into a differentiable reward function and then optimises a generative model under that reward while preserving its linguistic competence. The key is that the RM learns *relative* quality, giving it resilience and scalability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
