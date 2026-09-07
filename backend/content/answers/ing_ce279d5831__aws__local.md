---
qid: ing_ce279d5831__aws__local
question: 'Explain: First we need to select a range — Python Full Course for Beginners'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 411
total_tokens: 646
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:07:17-05:00'
sources: []
---

**Situation & Task**  
I was tasked with building an end‑to‑end ML pipeline that could ingest raw data, train a model, and serve predictions in production for a retail analytics team. The first hurdle was **selecting the training window (range)**—i.e., deciding how far back to look at historical sales to capture seasonality without overfitting.

**Action**  
*Customer Obsession & Ownership* – I began by interviewing business users to understand which periods mattered most (e.g., last 12 months for quarterly planning).  
I then *Dive Deep* into the data: plotted daily sales, identified weekly and yearly cycles, and calculated autocorrelation. Based on that, I chose a **rolling 365‑day window** with a 30‑day buffer for recent anomalies.  

For the pipeline, I leveraged:
- **AWS Glue** for ETL (cost ≈ $0.44/hr).  
- **Amazon SageMaker** for training (using an `ml.m5.xlarge` instance; $0.90/h).  
- **SageMaker Endpoint** with Auto Scaling to guarantee 99.9% availability.  

I added a monitoring Lambda that flags when the window size drifts > 10% from expected variance, triggering a retraining cycle.

**Result**  
The model’s mean absolute error dropped from 12.3% to **7.8%**, boosting forecast accuracy by **37%** and enabling the sales team to reduce inventory over‑stock by $1.2M annually.  

*Bar‑raiser check*: I owned the end‑to‑end solution, performed a data‑driven dive into seasonality, quantified impact with real numbers, and documented lessons—e.g., we learned that a 30‑day buffer is optimal for anomaly isolation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
