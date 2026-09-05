---
qid: ing_6395e40a8b__star__local
question: 'Explain: Deriving the Simplest Policy Gradient ¶ — Part 3: Intro to Policy
  Optimization \u2014 Spinning Up  documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 394
total_tokens: 648
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:46:55-05:00'
sources: []
---

**Situation:**  
During my final semester project, I had to build a reinforcement learning agent for a custom grid‑world game where the agent earned points by collecting treasures while avoiding traps. The baseline algorithm was a vanilla policy network trained with cross‑entropy loss, but its performance plateaued around 15 % reward after 10K episodes.

**Task:**  
I needed to implement a more principled training objective that directly optimizes expected return—specifically the simplest form of Policy Gradient (REINFORCE) as described in Spinning Up’s “Intro to Policy Optimization” chapter, part 3.

**Action:**  
1. I rewrote the loss function to use the log‑probability of taken actions multiplied by the discounted cumulative reward (`L = -∑_t log π(a_t|s_t) * G_t`).  
2. For each episode I accumulated rewards on the fly, then reversed the list to compute `G_t` efficiently using a single backward pass with discount factor γ = 0.99.  
3. To reduce variance I subtracted a baseline: the mean return of all episodes in the current minibatch.  
4. Implemented gradient clipping (`max_norm=5`) and Adam optimizer (lr=1e‑4) to stabilize updates.  
5. Benchmarked against the cross‑entropy baseline, tracking average reward over 100 evaluation runs every 500 steps.

**Result:**  
The REINFORCE agent surpassed the baseline in just 6 K episodes, achieving an average reward of 0.78 (vs. 0.45). The training curve flattened around 8 K steps, showing consistent improvement. I learned that a clear mathematical derivation directly translates into simpler code and that variance reduction techniques are critical for practical policy optimization.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
