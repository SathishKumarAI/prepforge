---
qid: ing_fdad8fdb9a__aws__local
question: 'Explain: F2: Distribution shift between training and serving'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 408
total_tokens: 638
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:51:47-05:00'
sources: []
---

**Situation / Task**  
I led a fraud‑detection model for an e‑commerce platform that had been trained on historical transaction data. During rollout we noticed the online traffic pattern changed (new payment methods, holiday spikes), causing a *distribution shift* that hurt accuracy by 18 % and increased false positives from 3 % to 12 %.  

**Action**  
1. **Ownership & Bias for Action** – I immediately set up a *real‑time monitoring pipeline* in **Amazon CloudWatch** + **Kinesis Data Streams** to capture feature distributions at inference time.  
2. **Dive Deep** – Compared incoming feature histograms with training ones using **AWS Glue** jobs and flagged significant deviations (e.g., average transaction amount, device type).  
3. **Invent & Simplify** – Implemented a *re‑training trigger* in **Step Functions** that automatically retrains the model on the latest 30 days of data via **SageMaker Pipelines**, then rolls out the new model through **AWS Lambda** + API Gateway with A/B testing.  
4. **Deliver Results** – The automated loop reduced drift‑induced error by **23 %** in two weeks and cut manual intervention time from 3 days to a few hours.

**Result**  
- Accuracy improved from 82 % to 95 %.  
- False positives dropped back to 4 %, saving ~$2M/month in chargebacks.  
- Cost of the monitoring stack was <$200/month, a 90 % reduction versus manual re‑training cycles.

**Bar‑raiser takeaway** – I demonstrated ownership by proactively detecting shift, deep technical insight into feature drift, quantified impact with clear metrics, and learned to automate feedback loops rather than rely on ad‑hoc fixes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
