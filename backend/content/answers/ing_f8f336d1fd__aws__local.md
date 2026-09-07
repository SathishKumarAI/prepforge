---
qid: ing_f8f336d1fd__aws__local
question: 'Explain: However if an applicant has a criminal — Python Full Course for
  Beginners'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 386
total_tokens: 621
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:41:18-05:00'
sources: []
---

**Situation & Task**  
At a fintech startup we launched a fraud‑detection ML pipeline that scored every transaction in real time. The model flagged suspicious activity and routed those cases to compliance for review. When the first batch of alerts came back, a large portion were false positives caused by a newly discovered “criminal” pattern—transactions from accounts linked to known money‑laundering rings. We had to redesign the pipeline without compromising latency or cost.

**Action (Design & AWS Services)**  
1. **Feature enrichment** – added a *Criminal‑Risk* score via Amazon SageMaker Feature Store, pulling data from an external AML API.  
2. **Model retraining** – used Amazon SageMaker Pipelines to schedule nightly retrains; the new model achieved 98 % precision at 92 % recall (up from 88 %/80 %).  
3. **Real‑time inference** – deployed with Amazon SageMaker Real-Time Endpoint behind an Application Load Balancer, ensuring <50 ms latency.  
4. **Cost control** – leveraged Spot Instances for training and Auto Scaling on the endpoint; cost dropped 35 % while maintaining SLA.

**Result**  
False positives fell from 12 % to 3 %, freeing 1,200 compliance hours per month (≈$180K). The pipeline now processes 500k transactions daily with <99.9 % availability.

**Reflection (Bar‑raiser)**  
I took ownership of the end‑to‑end flow, dove deep into feature engineering and model metrics, quantified impact in both dollars and time, and iterated quickly after the first failure—exactly what Amazon expects from a high‑performing ML engineer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
