---
qid: ing_4f35bc4513__fp__local
question: Even random sampling can eventually generate the correct answer with a large
  enough k . So doesn't that make your result—that RL improves over base model's pass@
  k —meaningless?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 384
total_tokens: 579
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:53:48-05:00'
sources: []
---

The claim that “random sampling will eventually hit the correct answer if we draw enough samples” is true, but it only speaks to **sample complexity**, not to *efficiency* or *generalisation*.  
In a language‑model setting each sample \(a\) has probability \(p=\Pr(a\text{ solves the task})\). The expected number of draws needed for the first success is \(1/p\); this expectation explodes as \(p\) shrinks. Random search treats every candidate equally, ignoring any structure in the reward landscape that a model could exploit.

Reinforcement learning (RL) turns the problem into an optimisation over policy parameters \(\theta\). By observing which actions yield higher rewards it learns to bias future samples toward regions of high \(p\). Formally, RL minimises the KL‑divergence between the induced action distribution and a *reward‑weighted* distribution, effectively performing importance sampling. This reduces variance in the estimator for expected reward and lowers the required number of queries to achieve a target success rate.

**Non‑obvious insight:**  
The benefit is not merely “more samples” but *better allocation of those samples*. Even if random search eventually finds the correct answer, RL can achieve the same pass@\(k\) with orders of magnitude fewer calls, preserving API costs and enabling real‑time deployment. Thus, the improvement over a base model’s pass@\(k\) remains meaningful and practically significant.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
