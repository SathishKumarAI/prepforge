---
qid: ing_f6b6b87611__fp__local
question: 'Explain: Best-of-N with Reward Model — Ensemble Methods'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 482
total_tokens: 652
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:43:56-05:00'
sources: []
---

**Best‑of‑N with a Reward Model (BORN)** is an *ensemble* technique that turns any deterministic policy into a stochastic “searcher” without changing the underlying model.

---

### From the fundamental problem

A language model (LM) trained by maximum likelihood often generates safe, bland text. We want higher‑quality outputs while keeping training cheap. The key idea: **sample several candidates, then pick the one that a *reward model* rates best**. This is exactly what BORN does.

### Why it must work this way

1. **Decoupling exploration and scoring**  
   Sampling \(N\) tokens from the LM explores the distribution’s support. The reward model, trained on human‑rated examples, approximates a *utility function* over completions. By selecting the max‑reward token we perform a greedy maximization in the sample space, which is a biased but computationally cheap surrogate for full optimization.

2. **Theoretical link to bandit and importance sampling**  
   The process is equivalent to an \(\epsilon\)-greedy policy where \(\epsilon=0\) on the chosen token and \((1-\epsilon)/N\) elsewhere. This satisfies the *exploration–exploitation* trade‑off: we explore via the LM, exploit via the reward model.

3. **Information‑theoretic view**  
   The KL divergence between the sampled distribution and a delta at the best token is bounded by \(\log N\). Thus, BORN trades a logarithmic amount of uncertainty for a potentially exponential gain in expected reward.

### Non‑obvious insight

The *reward model need not be perfect*; it only needs to rank candidates correctly. Even a weak classifier can drastically improve output quality because the LM’s diversity guarantees that some sample will have high true utility, and the reward model merely selects among them. This “rank‑only” requirement explains why BORN works with small, cheap reward models trained on limited data.

In short, Best‑of‑N with Reward Model is a principled, low‑cost approximation to global optimization in language generation that leverages sampling for exploration and a learned utility function for exploitation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
