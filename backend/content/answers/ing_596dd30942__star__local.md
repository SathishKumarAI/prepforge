---
qid: ing_596dd30942__star__local
question: 'Explain: Step 2: Define Evaluation Criteria — Answer Frameworks'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 344
total_tokens: 582
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:26:47-05:00'
sources: []
---

**Situation** – In my last role as a data scientist for a fintech startup, we were building an automated credit‑risk model to replace the manual underwriting process. The initial prototype had high accuracy on training data but was flagged by compliance for potential bias.

**Task** – I needed to design robust evaluation criteria that balanced predictive performance with fairness, interpretability, and regulatory requirements before deployment.

**Action** – First, I mapped out three answer frameworks:  
1) **Statistical Metrics** – AUC‑ROC, precision‑recall curves, and calibration plots.  
2) **Fairness Benchmarks** – disparate impact ratio, equal opportunity difference across income brackets, and demographic parity.  
3) **Operational Constraints** – inference latency (< 50 ms per request), memory footprint (< 200 MB), and explainability via SHAP value summaries.  
I created a weighted scoring rubric (70% predictive, 15% fairness, 10% operational, 5% compliance) and automated the evaluation pipeline in Python using scikit‑learn, AIF360, and MLflow for reproducibility.

**Result** – The refined model achieved an AUC of 0.92, reduced disparate impact from 1.3 to 1.05, maintained latency at 45 ms, and earned a compliance green light. I learned that clear, multi‑dimensional evaluation frameworks turn abstract regulatory concerns into actionable metrics, ensuring both business value and ethical integrity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
