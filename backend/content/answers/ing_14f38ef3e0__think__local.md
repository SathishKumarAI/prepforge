---
qid: ing_14f38ef3e0__think__local
question: You have 500k instruction examples of mixed quality and compute budget to
  train on 20k. How do you choose the 20k?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 207
output_tokens: 512
total_tokens: 719
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T04:05:32-05:00'
sources: []
---

**1️⃣ Clarify the goal & constraints**  
- *Goal*: Pick a high‑value subset that maximizes downstream performance under a fixed compute budget (≈ 20 k examples).  
- *Assumptions*: The 500 k set contains noisy, duplicate, and varied‑skill data; we can evaluate each example’s “quality” cheaply (e.g., via metadata or quick heuristics).

**2️⃣ Adopt a selection framework**  
Use a **utility‑based sampling** approach: treat each example as having an *expected marginal gain* to the model. This is analogous to active learning but offline—compute a score per example and rank.

**3️⃣ Reason step‑by‑step**  
1. **Feature extraction**: For every example, compute inexpensive signals (label confidence, prompt length, presence of rare tokens, human rating proxies).  
2. **Quality estimation**: Train a small surrogate model or use rule‑based thresholds to predict how well the model will learn from that example.  
3. **Diversity check**: Cluster examples by intent/semantic similarity; ensure each cluster is represented proportionally to avoid over‑fitting to a narrow niche.  
4. **Budget‑aware ranking**: Combine quality and diversity into a single score (e.g., `score = quality * λ + diversity_bonus`).  
5. **Greedy selection**: Pick the top‑ranked 20 k examples, optionally re‑ranking after each batch to respect diminishing returns.

**4️⃣ Avoid common traps**  
- Don’t rely solely on human ratings—expensive and noisy.  
- Beware of over‑optimizing for a single metric (e.g., perplexity) that may ignore downstream tasks.  
- Don’t ignore duplicates; they waste compute.  
- Skip hard‑coding a fixed λ; tune it on a small hold‑out set.

**5️⃣ Sanity‑check & communicate**  
- Plot the distribution of scores: confirm you’re not picking only high‑score “noise” points.  
- Verify that selected examples span all major clusters (visualize with t‑SNE).  
- Present the selection pipeline as a simple, reproducible script so others can audit or tweak parameters.

By treating the 20 k pick as a *budgeted utility maximization* problem—balancing quality signals and diversity—you’ll systematically harvest the most informative examples from your noisy pool.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
