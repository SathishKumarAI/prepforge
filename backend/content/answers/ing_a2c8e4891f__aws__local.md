---
qid: ing_a2c8e4891f__aws__local
question: 'Explain: Building a File Semantic Analyzer: Guarding Outbound Data at Scale
  with AI'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 406
total_tokens: 643
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:33:17-05:00'
sources: []
---

**Situation & Task (Customer Obsession + Ownership)**  
At my last role I led a data‑privacy team that needed to block sensitive outbound files from leaking in an enterprise storage system used by ~200 k users. The business required zero‑false‑negatives and compliance with GDPR, but existing keyword filters were brittle and slowed uploads by 30 %.  

**Action (Dive Deep + Bias for Action)**  
I designed a *File Semantic Analyzer* that leveraged Amazon SageMaker to train a lightweight transformer on labeled corpora of PII, trade secrets, and regulatory‑sensitive content. The model was containerized in ECS Fargate and deployed behind an API Gateway with throttling.  

- **AWS services:** SageMaker (training & inference), S3 (object store), Lambda (pre‑upload hook), CloudWatch for metrics.  
- **Scalability/Availability:** Autoscaling on CPU/GPU spikes, multi‑AZ deployment, and a fallback rule‑based engine in case of model outage.  
- **Cost trade‑off:** Using spot instances for training reduced spend by 45 % while maintaining >95 % recall.

**Result (Deliver Results)**  
Within two weeks of rollout the false‑negative rate dropped from 12 % to <0.5 %, and upload latency fell back to baseline. The solution processed ~1.2 TB/day with a cost of $0.03/GB, saving the company ~$200K annually.

**Bar‑raiser notes**  
- Demonstrated ownership by owning the entire ML pipeline from data prep to production.  
- Dive deep into model choice, hyperparameters, and failure modes.  
- Quantified impact (recall improvement, cost savings).  
- Learned from early false positives and iterated on feature engineering.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
