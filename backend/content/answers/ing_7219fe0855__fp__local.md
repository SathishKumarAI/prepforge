---
qid: ing_7219fe0855__fp__local
question: 'Explain: 🎛️ Fine-tuning, RLHF & Alignment — Cheatsheet'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 527
total_tokens: 702
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:07:05-05:00'
sources: []
---

**Fine‑tuning, RLHF & Alignment – A First‑Principles Cheat Sheet**

1. **Fine‑Tuning**  
   *Problem*: Large language models (LLMs) learn a generic distribution \(p_\theta(x)\) over text but are not task‑specific.  
   *Solution*: Treat the target dataset as a small perturbation of the pre‑training objective and update \(\theta\) with maximum likelihood or cross‑entropy on that data.  
   *Why it works*: The model’s parameters already encode a rich prior; fine‑tuning only needs to adjust a few “delta” directions in parameter space, so learning converges quickly and avoids catastrophic forgetting.

2. **RLHF (Reinforcement Learning from Human Feedback)**  
   *Problem*: Even after fine‑tuning, the model’s outputs may not align with human preferences or safety constraints.  
   *Solution*: Build a reward model \(R_\phi\) that scores candidate responses by comparing them to ranked human judgments. Then treat generation as an RL problem: maximize \(\mathbb{E}_{x\sim p_{\theta}}[R_\phi(x)]\).  
   *Why it works*: The reward model translates sparse, subjective feedback into a differentiable signal; policy gradient or proximal methods then push the generator toward higher‑reward regions of the output space.

3. **Alignment**  
   *Problem*: Even with RLHF, models can still produce harmful or incoherent outputs because the reward landscape is incomplete or biased.  
   *Solution*: Combine multiple safety constraints (e.g., toxicity classifiers, factuality checks) into a composite objective, often via constrained optimization or multi‑objective RL.  
   *Why it works*: By embedding human values as hard or soft constraints, we regularize policy updates so that the model cannot exploit loopholes in the reward signal—mirroring how physical systems obey conservation laws.

**Non‑obvious Insight**  
Fine‑tuning and RLHF can be viewed as successive approximations of a *single* Bayesian posterior: first, we condition on task data; second, we refine the posterior with human‑derived likelihoods. Alignment then imposes a *prior* over acceptable policy space, ensuring that the final model is not just good at a narrow task but also respects broader ethical and factual priors. This perspective explains why improvements in one stage often degrade performance elsewhere unless all components are jointly optimized under a coherent probabilistic framework.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
