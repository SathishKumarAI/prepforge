---
qid: ing_3a6b7c0b4a__fp__local
question: 'Q: How do you evaluate an agent when the environment is non-deterministic
  (e.g., the web)?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 398
total_tokens: 580
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:09:09-05:00'
sources: []
---

When an agent interacts with a stochastic world—think of crawling the Web where page layouts change, links appear or disappear—our goal is still the same: **maximize expected cumulative reward**.  
From first principles this turns into a *policy evaluation* problem in a Markov Decision Process (MDP) whose transition kernel \(T(s,a,s')\) is unknown and noisy. The Bellman equation,
\[
V^\pi(s)=\mathbb{E}_{a\sim \pi(\cdot|s)}[\,r(s,a)+\gamma\,\mathbb{E}_{s'\sim T(s,a,\cdot)}V^\pi(s')\,],
\]
remains valid, but we cannot compute the inner expectations analytically.  
Thus we **approximate** them by sampling: run many episodes, collect \((s_t,a_t,r_{t+1},s_{t+1})\) tuples, and estimate \(T\) and the value function empirically. This is precisely what *Monte‑Carlo* or *Temporal‑Difference* (TD) methods do—each sample gives a noisy but unbiased estimator of the expectation, and averaging over many samples converges to the true expected return.

The non‑obvious insight: in such environments the *variance* of the estimator dominates bias. Therefore, **policy‑gradient** methods that directly optimize expected reward via stochastic gradients (REINFORCE) are often preferable to value‑based bootstrapping, because they do not rely on a model of \(T\). Instead, we treat each trajectory as a single unbiased sample and backpropagate through the policy. This shifts the burden from modeling dynamics to learning a robust mapping from states to actions—exactly what modern deep RL does when scraping unpredictable Web APIs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
