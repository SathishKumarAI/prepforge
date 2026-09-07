---
qid: ing_2df279fe55__aws__local
question: Design the SLOs for a new LLM-powered feature. What do you promise, and
  how do you measure it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 568
total_tokens: 812
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:09:11-05:00'
sources: []
---

**Leadership Principles:**  
*Customer Obsession* – we define SLOs that keep users happy with latency and accuracy.  
*Ownership* – I take full responsibility for the feature’s reliability from prototype to production.

### Situation
A new LLM‑powered “Smart Reply” was slated for launch in our messaging app. The product team needed clear, measurable SLOs so we could ship safely while guaranteeing a great user experience.

### Task
Define SLOs that balance **response latency**, **model accuracy** (F1 score), and **cost per request**. Also outline how to monitor, alert, and iterate on them.

### Action
| Metric | Target | Measurement Tool |
|--------|--------|-----------------|
| **Latency** – 95 % of requests < 200 ms | `p95 latency <= 200 ms` | CloudWatch + Lambda edge logs |
| **Accuracy** – F1 ≥ 0.92 on live traffic | `f1_score >= 0.92` | Real‑time A/B test with SageMaker Ground Truth |
| **Cost** – $0.002 per inference (incl. GPU, data transfer) | `cost_per_request <= $0.002` | Cost Explorer + custom Lambda cost logger |

*Design:*  
- Deploy the model in **AWS Inferentia** behind an **API Gateway** for low‑latency routing.  
- Use **SageMaker Endpoint Auto Scaling** to keep CPU/GPU resources proportional to traffic spikes, ensuring the latency SLO even during flash crowds.  
- Store inference logs in **Amazon Kinesis Data Firehose → S3** for offline quality analysis, feeding back into model retraining pipelines.

*Monitoring:*  
1. CloudWatch Alarms on `p95_latency` and `cost_per_request`.  
2. Custom SageMaker metrics for F1, pushed to CloudWatch every 5 min.  
3. PagerDuty escalation if any SLO breaches > 10 % over a 30‑minute window.

*Iterate:* If latency dips below 200 ms but cost rises above target, we’ll switch from GPU to Inferentia or reduce batch size—illustrating **Bias for Action**.

### Result
After launch:  
- **Latency p95:** 185 ms (15 % improvement vs. baseline).  
- **Accuracy F1:** 0.93 (10 % higher than target).  
- **Cost per request:** $0.0018 (20 % under budget).  

We reduced churn by 12 % in the first month, proving that well‑defined SLOs directly translate to customer satisfaction and operational efficiency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
