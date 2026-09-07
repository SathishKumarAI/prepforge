---
qid: ing_6e2eb9625f__aws__local
question: 'Explain: Crib sheet for a non-expert interviewer — Mock Interview Kit'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 577
total_tokens: 811
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:32:58-05:00'
sources: []
---

**AI Interview Crib Sheet – Mock‑Interview Kit**

| **Step** | **What to Cover** | **Why It Matters (LPs)** |
|---|---|---|
| **1️⃣ Problem Framing** | • State the business goal (e.g., “improve recommendation click‑through by 15%”). <br>• Define key metrics, constraints, and user personas. | *Customer Obsession* – start with the customer impact; *Ownership* – own the problem definition. |
| **2️⃣ Data & Assumptions** | • List available data sources (user logs, click‑throughs). <br>• Note missing signals, privacy limits, and volume estimates. | *Dive Deep* – surface hidden assumptions; *Bias for Action* – decide on quick sanity checks. |
| **3️⃣ Model Choices** | • Compare algorithms: linear regression vs. matrix factorization vs. transformer‑based ranking. <br>• Cite sample performance (RMSE 0.12, AUC 0.78). | *Invent & Simplify* – pick the simplest model that meets SLAs; *Deliver Results* – show expected lift. |
| **4️⃣ Architecture Sketch** | • Use SageMaker Pipelines for training → Lambda for inference → API Gateway → CloudFront cache. <br>• Discuss autoscaling, cold‑start latency (≤50 ms). | *Scalability*: Auto‑scaling; *Availability*: Multi‑AZ deployment; *Cost*: Spot instances + reserved capacity. |
| **5️⃣ Evaluation & Rollout** | • A/B test 1% traffic, monitor lift, rollback threshold. <br>• Post‑launch monitoring: drift detection with Evidently. | *Ownership* – end‑to‑end responsibility; *Deliver Results* – measurable KPI changes (e.g., +18% CTR). |
| **6️⃣ Risks & Mitigations** | • Data bias → re‑weight samples.<br>• Model poisoning → monitor input anomalies. | *Dive Deep* – anticipate edge cases; *Bias for Action* – plan quick fixes. |

---

### How a Bar‑Raiser Scores

- **Ownership:** Did the candidate own every step from data to deployment?  
- **Depth (Dive Deep):** Were hidden assumptions surfaced and quantified?  
- **Impact:** Does the solution tie directly to business metrics?  
- **Learning:** Has the candidate reflected on past failures or iterations?

Use this sheet as a quick reference during mock interviews, ensuring you hit Amazon’s Leadership Principles while demonstrating a data‑driven, scalable AI solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
