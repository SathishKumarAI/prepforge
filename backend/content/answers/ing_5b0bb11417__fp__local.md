---
qid: ing_5b0bb11417__fp__local
question: 'Explain: Title: Training language models to follow instructions with human
  feedback'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 400
total_tokens: 572
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:17:46-05:00'
sources: []
---

**Why instruction‑following LM training must use human feedback**

The core problem is *inverse reinforcement learning* on an open‑ended text distribution: we want a policy \( \pi_\theta(y|x) \) that maximises expected utility over all possible outputs \(y\) given a prompt \(x\). The true reward function \(R(x,y)\)—“does this answer the user’s instruction correctly?”—is not directly observable. If we naïvely optimise for likelihood on a static corpus, the model inherits spurious correlations (biases, hallucinations) because the training data encode many *undesirable* behaviours.

Mathematically, we approximate \(R\) by a learned reward model \( \hat R_\phi(x,y)\). Human annotators supply pairwise comparisons: given two candidate responses, they indicate which better satisfies the instruction. These comparisons induce an ordering over outputs, from which we can construct a *pairwise ranking loss* that converges to the true reward under mild consistency assumptions (e.g., Bradley–Terry model). Once \(\hat R_\phi\) is trained, policy optimisation (RL‑PPO or RLHF) maximises \( \mathbb{E}_{y\sim \pi_\theta}[\hat R_\phi(x,y)]\), aligning the LM with human preferences.

**Non‑obvious insight:** The reward model acts as a *bridge* between discrete text and continuous optimisation. Its gradients flow through the softmax of token probabilities, allowing backpropagation across entire sequences. Thus, even though humans only provide scalar comparisons, we implicitly learn a differentiable surrogate that captures higher‑order linguistic structure—far more powerful than simple classification on pre‑labelled data. This duality between discrete human judgments and continuous model optimisation is what makes RLHF uniquely effective for instruction following.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
