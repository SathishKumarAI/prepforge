---
qid: ing_b37a95d691__aws__local
question: 'Explain: Ensemble Cost Matrix — Ensemble Methods'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 399
total_tokens: 626
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:10:41-05:00'
sources: []
---

**Situation / Task**  
At my previous company we built a fraud‑detection model for a payment gateway that processed ~10 M transactions/day. The baseline single‑model accuracy was 92 % but the false‑negative cost (missed fraud) was $4 M/month, far exceeding our SLA of $1 M. I owned the problem and drove an ensemble solution with a *cost matrix* to prioritize low‑cost errors.

**Action**  
I gathered business‑critical costs for each error type, built a weighted loss matrix, and trained three diverse base learners (XGBoost, Random Forest, Neural Net). Using **AWS SageMaker** I deployed the models as endpoints behind an API Gateway. A Lambda orchestrator applied the cost matrix: it aggregated predictions via majority vote but re‑weighted votes according to the cost of each class. The ensemble was tuned with Bayesian optimization in SageMaker Hyperparameter Tuning, targeting a 0.5 % reduction in false negatives while keeping latency <100 ms.

**Result**  
Post‑deployment, fraud loss dropped from $4 M to **$1.2 M/month** (70 % cost saving), and the overall accuracy rose to 94.8 %. The system scaled automatically with SageMaker’s managed endpoints; we saved ~$30 k annually on compute by using spot instances for training.  

**Reflection**  
I learned that embedding business costs directly into model decisions (the cost matrix) turns ML from a technical exercise into a revenue‑protecting lever. It also reinforced the *Customer Obsession* principle: we treated fraud risk as a customer pain point and measured impact in dollars, not just metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
