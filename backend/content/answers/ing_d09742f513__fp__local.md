---
qid: ing_d09742f513__fp__local
question: In our build session you get two hours and any AI tools you want. How do
  you decide what to build and how do you spend the time?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 479
total_tokens: 668
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:24:01-05:00'
sources: []
---

**Choosing a problem first, then the tool**

1. **Define the *goal space***  
   Every AI project lives in a space of “what we want to change” (e.g., reduce latency, increase accuracy, improve interpretability).  
   - *Why this matters*: The cost function that optimisation solves is only meaningful if it aligns with an objective that can be measured.  

2. **Map the goal to a *mathematical form***  
   Translate the business question into a formal loss (cross‑entropy, MSE, KL divergence) or constraint set.  
   - *Deep insight*: Even a seemingly qualitative aim (“make the chatbot sound human”) can be expressed as minimizing mutual information between utterances and a style classifier.

3. **Assess data & constraints**  
   Count samples, label quality, compute budget, and latency requirements.  
   - *Why*: The feasibility of an algorithm is bounded by the *information* available; no amount of cleverness can overcome insufficient entropy in the training set.

4. **Match tool to form**  
   - Small data → Bayesian optimisation or few‑shot learning.  
   - Large data & latency constraints → distillation + quantisation.  
   - Interpretability needs → symbolic regression or attention‑visualisation pipelines.

5. **Iterative prototyping (30 min each)**  
   Build a 1‑line “proof of concept” for each candidate tool, evaluate on a quick validation split, and pick the one with the best *expected* performance‑over‑cost ratio.

6. **Deep dive (remaining time)**  
   - Refine hyperparameters via Bayesian sweeps.  
   - Add regularisation or data augmentation to push boundaries.  
   - Wrap up with a reproducible notebook that logs every experiment’s seeds and metrics.

**Non‑obvious insight:** *The true bottleneck is often the entropy of the evaluation metric itself.* If your test set contains only 10 distinct classes, no model can achieve more than log₂ 10 ≈ 3.3 bits of predictive information—no matter how sophisticated the architecture. Thus, before spending hours on a complex transformer, first quantify whether the target performance is even theoretically attainable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
