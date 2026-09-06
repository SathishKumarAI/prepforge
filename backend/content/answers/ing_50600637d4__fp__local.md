---
qid: ing_50600637d4__fp__local
question: 'Explain: The Alignment Problem — Rlhf And Dpo'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 577
total_tokens: 748
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:56:19-05:00'
sources: []
---

**The Alignment Problem**

At its core, a language model is a function \(f_\theta(x)\) that maps text prompts to probability distributions over tokens. The *goal* of an AI system is not to maximize likelihood alone but to satisfy human preferences—utility functions that are hard to write down explicitly. This mismatch between the training objective (log‑likelihood on corpora) and the deployment objective (human satisfaction) creates a *distribution shift*: the model learns patterns in data that may systematically diverge from what humans value.

**Why RLHF Works**

Reinforcement Learning from Human Feedback (RLHF) treats human judgments as a reward signal \(R(x)\). The model is fine‑tuned to maximize expected reward:
\[
J(\theta)=\mathbb{E}_{x}\big[R(f_\theta(x))\big].
\]
Because the reward is derived from human preferences, RLHF directly optimizes for alignment. It leverages the *policy gradient* theorem to adjust \(\theta\) so that higher‑reward outputs become more probable. The key insight: by converting sparse human judgments into a differentiable surrogate (e.g., a learned reward model), we bridge the gap between implicit preferences and explicit training signals.

**DPO as a Simpler Alternative**

Direct Preference Optimization (DPO) bypasses reinforcement learning’s variance issues by formulating alignment as a *binary classification* problem. For each pair of candidate responses \((a,b)\) with human preference \(a\succ b\), DPO maximizes:
\[
L_{\text{DPO}}(\theta)=\sum_{(a,b)}\log\sigma\!\big(f_\theta(a)-f_\theta(b)+c\big),
\]
where \(\sigma\) is the sigmoid and \(c\) a calibration constant. This objective directly encourages higher log‑likelihood for preferred outputs, effectively learning a *preference‑aware* language model without policy gradients or reward modeling.

**Non‑obvious Insight**

Both RLHF and DPO implicitly perform **counterfactual reasoning**: they estimate how the model would behave under an alternative distribution of outputs that reflects human preferences. This counterfactuality is the hidden engine behind alignment—by comparing “what the model says” to “what a human would say,” we learn a *causal* mapping from text to utility, rather than merely fitting surface statistics. Recognizing this causal perspective clarifies why careful temperature control and calibration are critical: they adjust the *distributional shift* between training and deployment, ensuring that counterfactual estimates remain reliable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
