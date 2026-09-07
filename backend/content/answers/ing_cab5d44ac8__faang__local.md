---
qid: ing_cab5d44ac8__faang__local
question: You're building evals for a new LLM feature from scratch. How many examples
  do you need, and where do they come from?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 477
total_tokens: 726
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:30:48-05:00'
sources: []
---

**Clarify**  
We’re asked: *How many evaluation examples are needed for a new LLM feature, and what should be their source?*  
Assumptions to confirm:  
1. Feature type (e.g., few‑shot reasoning vs. factual recall).  
2. Desired statistical confidence (95 % CI ±5 %).  
3. Acceptable cost/annotation budget.  

**Approach**  
1. Define the target metric (accuracy, F1, BLEU, etc.).  
2. Estimate variance of that metric on a pilot set.  
3. Use the normal approximation to solve for sample size:  
   \[
   n = \frac{z^2\sigma^2}{\epsilon^2}
   \]  
4. If variance is unknown, run a quick bootstrap on ~200 examples to estimate σ².  

**Depth**  
- For binary accuracy with σ≈0.5 and ε=0.05 (±5 %), n ≈ 385.  
- For multi‑class F1 or regression metrics, variance typically lower; sample size drops to ~150–250.  
- If the feature is highly imbalanced (rare failure modes), oversample those cases until the minority class has ≥30 instances.  
Sources:  
* *Curated datasets* (SQuAD, MTurk‑generated prompts).  
* *Synthetic generation* using prompt templates + diverse seed inputs to cover edge scenarios.  
* *Real‑world logs* from beta users, filtered for privacy and relevance.  

**Edge Cases**  
- Extremely low variance → over‑sampling wastes resources; use adaptive sampling to stop early.  
- Non‑independent examples (e.g., user sessions) inflate effective sample size; cluster by user ID before counting.  

**Optimize & Communicate**  
Present the math in a slide: formula, σ estimate, resulting n, and a budget table. Explain that we’ll start with 200 bootstrap examples to pin down variance, then scale to the calculated n, ensuring coverage of edge cases via synthetic augmentation. This plan balances statistical rigor, cost, and practical data sourcing—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
