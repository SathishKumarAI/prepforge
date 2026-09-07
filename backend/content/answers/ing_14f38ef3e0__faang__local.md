---
qid: ing_14f38ef3e0__faang__local
question: You have 500k instruction examples of mixed quality and compute budget to
  train on 20k. How do you choose the 20k?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 518
total_tokens: 769
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:31:47-05:00'
sources: []
---

**Clarify**  
We need to pick a *representative* subset of 20 k training examples from a pool of 500 k mixed‑quality instruction pairs, under a fixed compute budget (e.g., 50 k GPU‑hours). Assumptions:  
- Each example has an associated quality score or proxy (human rating, loss on a validation set, etc.).  
- The distribution of tasks and languages in the pool is non‑uniform.  
- We care about generalization to unseen instructions.

**Approach**  
1. **Stratify by task & language** – ensure every major category appears proportionally.  
2. **Score‑based filtering** – rank examples within each stratum by quality.  
3. **Budget‑aware sampling** – allocate the 20 k quota per stratum proportional to its prevalence and importance.  
4. **Diversity bonus** – apply a distance metric (e.g., embedding cosine) to avoid clustering of similar prompts.

**Depth**  
- Compute the *effective quality* \(q_i = \alpha\,\text{human}_i + (1-\alpha)\,\text{loss}_i\).  
- For each stratum, sort by descending \(q_i\), pick top‑\(k_s\) where \(\sum k_s=20{,}000\).  
- To enforce diversity, after initial selection run a greedy max‑min algorithm on embeddings: iteratively add the example that maximizes minimum cosine distance to already chosen ones until the quota is met.  
Complexity: \(O(n \log n)\) for sorting, plus \(O(k^2 d)\) for diversity (k=20 k, d≈768). This fits within a day on a single GPU.

**Edge Cases**  
- If a stratum has fewer than its quota, spill over to the next best stratum.  
- Extremely noisy examples may still slip in if their quality score is corrupted; mitigate by cross‑validating scores.  
- Over‑diversification can reduce overall performance; tune the diversity weight.

**Optimize & Communicate**  
Iterate on \(\alpha\) and the diversity threshold using a small validation set, measuring downstream task accuracy. Explain that this method balances *quality*, *representativeness*, and *compute efficiency*, aligning with the interviewer's focus on structured reasoning and practical trade‑offs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
