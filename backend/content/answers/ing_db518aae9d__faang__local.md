---
qid: ing_db518aae9d__faang__local
question: 'Explain: Score a trace — Ai Evals Comprehensive Study Guide'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 527
total_tokens: 761
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:08:15-05:00'
sources: []
---

## 1️⃣ Clarify  
The interviewer wants you to describe **how an “AI evaluation” system scores a single execution trace** (e.g., a dialogue, a decision‑making path).  
Assumptions I’d confirm:  
- The trace is a sequence of states/actions with optional rewards.  
- Evaluation criteria are objective metrics (accuracy, efficiency) and subjective ones (human satisfaction).  

## 2️⃣ Approach  
1. **Collect raw data** from the trace (timestamps, actions, outcomes).  
2. **Map each event to predefined metrics** (e.g., *success*, *time‑to‑completion*).  
3. **Normalize** metric values to a common scale (0–1 or z‑score).  
4. **Weight and aggregate** according to the evaluation rubric.  
5. **Post‑process**: flag anomalies, compute confidence intervals.

## 3️⃣ Depth  
- **Metric extraction**: For each step, record `reward`, `policy entropy`, and any *human feedback*.  
- **Normalization**: Use min–max scaling across a validation set to handle skewed distributions.  
- **Aggregation**: Compute a weighted sum \(S = \sum_i w_i m_i\) where \(w_i\) are rubric weights (e.g., accuracy = 0.4, latency = 0.3).  
- **Complexity**: O(n) per trace; memory‑efficient streaming if traces are long.  
- **Trade‑offs**: Simple linear scoring is fast but ignores interactions; a learned regression model can capture non‑linearities at the cost of interpretability.

## 4️⃣ Edge Cases  
- *Missing data*: impute with global means or flag as invalid.  
- *Outliers*: cap extreme values to avoid skewing aggregate scores.  
- *Non‑deterministic policies*: average over multiple rollouts to reduce variance.  

## 5️⃣ Optimize & Communicate  
- **Caching**: Pre‑compute normalization parameters for speed.  
- **Parallelism**: Batch process traces on GPUs if many are evaluated nightly.  
- **Explainability**: Log per‑metric contributions so stakeholders see why a trace scored low.  
When narrating, emphasize the pipeline from raw events to a single, interpretable score and how each step balances precision, speed, and fairness—key for FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
