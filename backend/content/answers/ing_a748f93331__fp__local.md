---
qid: ing_a748f93331__fp__local
question: 'Q: How would you evaluate models for a customer support chatbot?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 522
total_tokens: 694
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:01:05-05:00'
sources: []
---

### From the Customer’s Problem to Model Evaluation

1. **Fundamental goal** – *Minimize expected loss in user experience*.  
   The chatbot must choose an utterance \(a\) that maximizes a utility function
   \[
   U(a)=\mathbb{E}\!\left[\,R(\text{user outcome})-C(a)\,\middle|\;x\right],
   \]
   where \(x\) is the user context, \(R\) rewards satisfaction and resolution, and \(C\) penalizes time or mis‑steps.  
2. **Why a single metric fails** – Accuracy alone ignores *contextual relevance*: an answer can be correct yet irrelevant to the user’s intent.  
3. **Principled composite score** – Use a **Bayesian decision framework**:
   \[
   \text{Score}= \alpha\,\underbrace{\mathbb{E}[R]}_{\text{Resolution quality}}
   + (1-\alpha)\,\underbrace{\mathbb{E}\!\left[\frac{1}{T}\right]}_{\text{Speed}},
   \]
   where \(T\) is response time.  
4. **Calibration matters** – The model’s probability estimates must match true intent frequencies; otherwise a high‑confidence wrong answer inflates the score.  
5. **Non‑obvious insight** – *Distributional robustness*: evaluate on **shifted test sets** (e.g., new product releases, seasonal queries). A model that performs well under covariate shift is more reliable than one tuned only to historical data.

**Implementation checklist**

| Step | What to compute | Why it matters |
|------|-----------------|----------------|
| 1. Intent recall | Top‑k accuracy on labeled intents | Captures coverage |
| 2. Response relevance | BLEU/ROUGE + human‑rated semantic similarity | Aligns with user satisfaction |
| 3. Speed & resource usage | Avg. latency, CPU/GPU load | Operational cost |
| 4. Calibration curve | Expected vs. observed probabilities | Prevents overconfident errors |
| 5. Shift test | Performance on perturbed inputs | Detects brittleness |

Combining these metrics into a weighted score grounded in the decision‑theoretic objective gives a rigorous, interpretable evaluation that truly reflects customer support value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
