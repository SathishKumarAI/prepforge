---
qid: ing_bb31091e42__aws__local
question: 'Explain: Core APIs — Design WhatsApp | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 405
total_tokens: 641
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:26:57-05:00'
sources: []
---

**Situation / Task**  
I led a cross‑functional squad at my previous company to build an end‑to‑end ML pipeline that would auto‑tag WhatsApp chat logs for compliance. The goal was 95 % accuracy on new languages while keeping latency under 200 ms per message.

**Action**  
*Ownership & Bias for Action*: I scoped the problem, drafted a design doc, and owned the prototype sprint.  
- **Data ingestion**: Kinesis Data Streams → Lambda → S3 (raw + processed).  
- **Feature extraction**: SageMaker Processing jobs that run NLP models in containers; we use Hugging‑Face transformers fine‑tuned on 1 M labeled WhatsApp messages.  
- **Model serving**: SageMaker Endpoint with autoscaling, backed by an Application Load Balancer to hit our SLA.  
- **Monitoring & Retraining**: CloudWatch Alarms + SageMaker Model Monitor; retrain every week using new data from the stream.  
*Dive Deep*: I benchmarked 3 transformer variants (BERT‑base, DistilBERT, XLM‑Roberta) and chose DistilBERT for a 30 % cost reduction while maintaining 94.7 % F1 on our validation set.

**Result**  
Deployment reduced manual review time by **70 %**, cut storage costs from $12k/month to $4k/month, and hit the latency target in 98 % of requests. The model’s precision improved from 88 % to 94.7 % after a month of continuous learning.

**Learning**  
We initially over‑provisioned Lambda concurrency; later we shifted to Step Functions for better observability, demonstrating iterative improvement and resilience—core Amazon traits.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
