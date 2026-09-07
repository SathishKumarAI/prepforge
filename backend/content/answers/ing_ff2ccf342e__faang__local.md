---
qid: ing_ff2ccf342e__faang__local
question: 'Explain: Composite Indices — Benchmarks And Leaderboards'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 427
total_tokens: 660
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:33:17-05:00'
sources: []
---

**Clarify**  
Composite indices in AI aggregate multiple evaluation metrics (accuracy, latency, energy, fairness, etc.) into a single score so that models can be compared across heterogeneous dimensions. I’ll assume we’re dealing with supervised learning benchmarks (e.g., ImageNet, GLUE) and public leaderboards that publish these composite scores.

**Approach**  
1. Define the constituent metrics and their relative importance (weights).  
2. Normalize each metric to a common scale (z‑score or min–max).  
3. Aggregate via a weighted sum or geometric mean.  
4. Publish both raw metrics and the composite for transparency.  

**Depth**  
- **Normalization**: For latency, lower is better; invert before aggregation.  
- **Weights**: Derived from stakeholder interviews or Pareto frontier analysis.  
- **Formula** (example):  
  \[
  C = \sum_{i} w_i \cdot \frac{m_i - \mu_i}{\sigma_i}
  \]  
  where \(m_i\) is the model’s metric, \(\mu_i,\sigma_i\) are dataset statistics.  
- **Complexity**: O(n) per submission; negligible overhead for leaderboard updates.  

**Edge Cases**  
- Missing metrics → impute with dataset averages.  
- Extremely skewed distributions → use robust scaling (median, IQR).  
- Cheating via metric manipulation → enforce cross‑validation and blind test splits.

**Optimize & Communicate**  
Explain that the composite score balances trade‑offs; a higher score means better overall performance but doesn’t hide poor latency or unfairness. Suggest periodic re‑weighting to reflect evolving priorities (e.g., energy efficiency). Narrate by walking through an example model’s metrics, showing how each contributes to its final leaderboard rank. This demonstrates clear reasoning, technical depth, and awareness of practical pitfalls—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
