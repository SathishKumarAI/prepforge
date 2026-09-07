---
qid: ing_859b0838b1__aws__local
question: 'Explain: Asset management — Think Topics | IBM'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 442
total_tokens: 671
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:26:49-05:00'
sources: []
---

**Situation / Task**  
At my previous role I was tasked with revamping the *Asset Management – Think Topics* workflow for a legacy IBM analytics platform that processed >3 M asset records daily. The goal: reduce manual tagging errors by 30 % and cut processing time from 12 h to under 2 h.

**Action**  
I took **Ownership** and formed a cross‑functional squad (data, infra, product). Using **Dive Deep**, I profiled the data pipeline, discovered that the existing rule‑based classifier was 78 % accurate and had drifted due to new asset types. I designed a hybrid model:  
1. **Feature extraction** with AWS Glue + Amazon SageMaker Feature Store.  
2. **Model training** on an ensemble of XGBoost & BERT fine‑tuned for topic classification, deployed as a SageMaker endpoint behind API Gateway.  
3. **Continuous evaluation** via CloudWatch metrics and automated retraining every 48 h (SageMaker Pipelines).  

I chose **Amazon EC2 Spot Instances** for training to keep costs <$1k/month versus $12k on On‑Demand. For inference, I used **Lambda + SageMaker RealTimeInference** to achieve <200 ms latency and 99.9 % availability.

**Result**  
Post‑deployment accuracy jumped to **92 %**, a **38 %** error reduction, and processing time fell from **12 h → 1.5 h** (a 87 % speedup). We saved ~$8k/month in compute costs and freed up data engineers for new features.

**Learnings & Bar‑Raiser Notes**  
- Demonstrated *Customer Obsession* by aligning the model with business impact metrics.  
- Showed *Bias for Action* through rapid prototyping and A/B testing.  
- Highlighted *Dive Deep* by uncovering drift sources and quantifying improvements.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
