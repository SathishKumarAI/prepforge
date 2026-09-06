---
qid: ing_78638bb8c1__fp__local
question: 'Explain: Results. — Rethinking On-Policy Distillation of Large Language
  Models: Phenomenology, Mechanism, and Recipe'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 187
output_tokens: 475
total_tokens: 662
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:20:49-05:00'
sources: []
---

**Results – why they look the way they do**

The paper tackles *on‑policy distillation* (OPD) of a large language model (LLM): a teacher generates a stream of prompts, a student learns only from those same prompts, and the goal is to transfer the teacher’s knowledge without replaying a fixed dataset.  
From first principles the loss can be written as  

\[
L(\theta)=\mathbb{E}_{p_{\text{teach}}(x)} \bigl[ D_{\mathrm{KL}}\!\bigl(p_{\text{teach}}(\cdot|x)\,\Vert\,p_\theta(\cdot|x)\bigr) \bigr] ,
\]

where \(p_{\text{teach}}\) is the teacher’s predictive distribution and \(p_\theta\) the student’s.  
Because OPD samples from the *student’s own policy* during training, the expectation becomes  

\[
L(\theta)=\mathbb{E}_{p_\theta(x)} \bigl[ D_{\mathrm{KL}}\!\bigl(p_{\text{teach}}(\cdot|x)\,\Vert\,p_\theta(\cdot|x)\bigr) \bigr].
\]

This self‑generated distribution introduces a **covariate shift** that the paper quantifies: the student’s trajectory drifts away from the teacher’s most informative states. The empirical results show precisely this drift—validation perplexity rises, but *conditional* perplexity on the teacher’s “high‑confidence” prompts stays low.

The non‑obvious insight is that **OPD implicitly performs a form of importance weighting**: states where the student diverges from the teacher are down‑weighted because they rarely appear in the student’s own rollouts. The authors’ recipe—injecting *teacher‑guided exploration* and *entropy regularization*—restores the missing high‑confidence prompts, leading to the sharp drop in perplexity observed in Figure 3.

Thus, the results stem directly from the geometry of KL divergence under a changing sampling distribution; OPD works because it balances learning fidelity with policy‑induced exploration.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
