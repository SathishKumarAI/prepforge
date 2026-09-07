---
qid: ing_83bba2287d__faang__local
question: 'Explain: Evaluate every interaction in production'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 417
total_tokens: 647
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:51:13-05:00'
sources: []
---

**Clarify**  
The interviewer asks how we *evaluate* every user‑interaction (click, view, purchase) that occurs in a live ML system—i.e., how do we measure model performance while the model is serving traffic?  
Assumptions:  
- Interactions are logged with ground‑truth labels (e.g., click‑through).  
- We have an online A/B test framework or can inject probes.  
- Latency budgets and data privacy constraints apply.

**Approach**  
1. Instrument production to capture predictions, true outcomes, timestamps, and context.  
2. Batch the stream into micro‑batches (e.g., 5‑second windows).  
3. Compute metrics per batch (accuracy, precision/recall, AUC) and aggregate online.  
4. Feed aggregated statistics to a real‑time dashboard; trigger alerts if drift or performance drops.

**Depth**  
- **Data pipeline:** Use Kafka → Spark Structured Streaming → Redis cache for low‑latency lookup.  
- **Metrics:** For classification, calculate *log loss* (for calibration), *AUROC*, and *confusion matrix* per label.  
- **Statistical significance:** Apply Wilson score intervals or Bayesian A/B testing to decide if observed differences are real.  
- **Latency impact:** Keep the evaluation overhead <1 ms; push heavy aggregations to a nightly job.

**Edge Cases**  
- Sparse labels (rare events) → use F‑score and precision@k.  
- Concept drift → monitor mean prediction score shifts; trigger retraining if >3σ change.  
- Data leakage in logs → ensure no future information is used for evaluation.

**Optimize & Communicate**  
Explain that real‑time metrics give immediate feedback, while batch analyses capture long‑term trends. Highlight trade‑offs: more granular monitoring increases cost but catches failures early. Conclude by noting the importance of automated alerts and rollback mechanisms to maintain service reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
