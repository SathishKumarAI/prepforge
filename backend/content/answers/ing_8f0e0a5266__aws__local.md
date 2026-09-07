---
qid: ing_8f0e0a5266__aws__local
question: 'Explain: Multiple Dimensions of Quality — Llm Evaluation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 450
total_tokens: 679
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:49:42-05:00'
sources: []
---

**Scenario (S)**  
While leading the LLM‑evaluation team for our generative‑AI product, we discovered that a single “accuracy” score masked critical failures—bias drift, hallucination frequency, and latency spikes. The business demanded a holistic quality framework before launching to production.

**Task (T)**  
Design a multi‑dimensional evaluation pipeline that scores an LLM on *Accuracy*, *Fairness*, *Robustness*, *Latency*, and *Cost* so we could prioritize fixes with the highest ROI.

**Action (A)**  

1. **Define metrics** – Accuracy via BLEU/NIST, Fairness through demographic parity gaps, Robustness using adversarial prompt stress tests, Latency from CloudWatch traces, Cost from per‑token billed rates.
2. **Build a data lake** – Ingest raw inference logs into Amazon S3, catalog with Glue; store evaluation results in DynamoDB for low‑latency queries.
3. **Automate scoring** – Lambda functions trigger on new batches, invoke SageMaker endpoints that run the tests and write scores back to DynamoDB.
4. **Dashboard & alerts** – QuickSight visualizes each dimension; CloudWatch alarms fire if any metric falls below thresholds.
5. **Prioritize fixes** – Use a weighted score (70% accuracy, 10% fairness, 10% robustness, 5% latency, 5% cost) to surface the highest‑impact issues.

**Result (R)**  
Within two sprints we reduced hallucinations by **35 %**, eliminated a 12 % bias gap, cut inference latency from 1.8 s to 0.9 s, and lowered per‑token costs by **18 %**—a net uplift of **$2M/year** for the product line.

> *Leadership Principles:* **Customer Obsession** (bias & hallucinations), **Ownership** (end‑to‑end pipeline).  
> *Bar‑raiser focus:* depth in metric selection, quantified impact, and learning loop from failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
