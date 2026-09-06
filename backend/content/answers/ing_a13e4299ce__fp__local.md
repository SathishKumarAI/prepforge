---
qid: ing_a13e4299ce__fp__local
question: Implement nucleus (top-p) sampling. What failure mode of top-k does it fix?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 487
total_tokens: 664
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:48:34-05:00'
sources: []
---

**Why nucleus (top‑p) sampling matters**

A language model outputs a probability distribution \(P(w|h)\) over tokens given a context \(h\).  
The goal of *sampling* is to draw from this distribution while keeping the text coherent and diverse.

---

### 1. The problem that top‑k solves

Top‑k truncates the distribution to the \(k\) most probable tokens, discarding the rest.  
It guarantees a fixed vocabulary size per step but introduces **bias toward frequent words**: even if a rare token has a high relative probability, it may be dropped because its absolute probability is tiny compared to the cumulative mass of the top‑\(k\).  

### 2. What top‑p (nucleus) fixes

Top‑p keeps *all* tokens whose cumulative probability reaches a threshold \(p\) (e.g., \(0.9\)).  
Thus it **adapts** the vocabulary size to the *entropy* of the distribution:

- In low‑entropy situations (one or few dominant tokens), only those tokens survive; the model behaves greedily, preserving coherence.
- In high‑entropy situations, many tokens are retained, allowing genuine diversity.

This dynamic truncation eliminates the failure mode where top‑k mistakenly discards informative but low‑probability tokens that would otherwise enrich the output.

### 3. Deeper principle

Top‑p sampling enforces a **fixed information budget**: it guarantees that the sampled token lies within the smallest set of words carrying at least \(p\) probability mass.  
In terms of *Shannon entropy*, this is equivalent to maintaining a constant expected surprise per step, which aligns with the model’s training objective.

### 4. Non‑obvious insight

Top‑p sampling automatically **normalizes for varying temperature**: a higher temperature flattens \(P\), increasing the number of tokens needed to reach \(p\).  
Thus, by adjusting \(p\) rather than \(k\), one can control *effective* diversity without hard‑coding vocabulary size. This subtle coupling between temperature and truncation is often overlooked but crucial for stable generation across different models.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
