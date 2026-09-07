---
qid: ing_16569e983e__faang__local
question: 'Explain: Anthropic''s Original Performance Take-Home'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 514
total_tokens: 747
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:36:29-05:00'
sources: []
---

**Clarify**  
*Problem:* Describe the “Original Performance” (OP) metric used by Anthropic to benchmark language‑model quality.  
*Assumptions to confirm:* – OP compares a new model against a baseline on the same tasks; – it aggregates multiple metrics; – higher is better.

---

**Approach**  
1. Define the baseline and evaluation suite.  
2. Explain how each metric contributes to a single score.  
3. Show the aggregation formula.  
4. Discuss how OP drives research decisions.

---

**Depth**

| Component | Description |
|-----------|-------------|
| **Baseline model** | A fixed, well‑known reference (e.g., GPT‑3 175B). |
| **Evaluation tasks** | 1 k+ benchmarks covering factual recall, reasoning, safety, and instruction following. |
| **Per‑task metric** | Normalized score \(s_i\) ∈ [0, 1] (higher = better). |
| **Weighting** | Uniform or task‑specific weights \(w_i\), \(\sum w_i=1\). |
| **OP formula** | \[
\text{OP} = \frac{\displaystyle\sum_{i} w_i\, s^{(A)}_i}{\displaystyle\sum_{i} w_i\, s^{(B)}_i}
\] where \(s^{(A)}_i\) is the new model’s score and \(s^{(B)}_i\) the baseline’s. |
| **Interpretation** | OP = 1 → parity; >1 → improvement; <1 → regression. |

*Complexity:* O(T) where T = number of tasks (≈ 1000).  

---

**Edge Cases**

- *Zero‑divisor*: if baseline score is 0, clamp to a small epsilon.  
- *Task drift*: new tasks not in baseline set—flag for separate analysis.  
- *Overfitting*: high OP on synthetic benchmarks but low real‑world utility.

---

**Optimize & Communicate**

- **Improvements:** incorporate confidence intervals via bootstrapping; add safety‑specific penalty terms.  
- **Narration:** “OP gives us a single, interpretable ratio that captures overall gains while keeping the baseline fixed, enabling fast iteration and transparent reporting to stakeholders.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
