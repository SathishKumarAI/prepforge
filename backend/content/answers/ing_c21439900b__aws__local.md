---
qid: ing_c21439900b__aws__local
question: What are Type I and Type II Errors ? — Machine Learning Interview Questions
  and Answers - GeeksforGeeks
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 357
total_tokens: 599
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:41:54-05:00'
sources: []
---

**Answer (Amazon‑style)**  

During a recent project building a fraud‑detection model for an online marketplace, I had to explain the trade‑off between **Type I (false positive)** and **Type II (false negative)** errors to stakeholders.

- **Situation:** The business required 99.5 % precision on flagged transactions while keeping loss from undetected fraud below $2 M per quarter.  
- **Task:** Tune the decision threshold to balance these opposing risks.  
- **Action:** I plotted the ROC curve, calculated the cost matrix (false positive = $0.10, false negative = $1 000), and performed a grid search over thresholds. Using AWS SageMaker’s built‑in `ModelMetric` API, I automated this process and stored each model’s metrics in DynamoDB for auditability.  
- **Result:** We chose a threshold yielding 99.7 % precision (≈0.3 % Type I) and 0.4 % false negatives, reducing quarterly fraud loss from $2.8 M to $1.9 M—a 32 % cost saving while meeting compliance requirements.

**Leadership Principles:**  
- **Customer Obsession & Deliver Results** – Prioritized user trust by minimizing false positives.  
- **Dive Deep & Ownership** – Built a repeatable, auditable pipeline that persisted metrics and enabled rapid iteration.  

Bar‑raisers look for quantified impact (32 % savings), deep technical reasoning (ROC, cost matrix), and evidence of ownership (automated, audit‑ready workflow).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
