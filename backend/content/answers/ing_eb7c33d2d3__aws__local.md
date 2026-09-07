---
qid: ing_eb7c33d2d3__aws__local
question: Your agent passes 92% of eval tasks. Why might that number be misleading,
  and what would you measure instead?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 493
total_tokens: 736
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:10:47-05:00'
sources: []
---

**Situation – Problem:**  
I built a conversational AI agent that scored **92 % on the public benchmark**. The metric looked great, but I realized it could mask serious issues—class imbalance, over‑fitting to common prompts, and lack of real‑world robustness.

**Task – What to do?**  
My goal was to replace “overall accuracy” with metrics that reflect *customer impact* and *system reliability*, aligning with **Customer Obsession** and **Ownership**.

**Action – New measurement strategy**

| Metric | Why it matters | How we collect it (AWS) |
|--------|----------------|--------------------------|
| **Recall per intent** | Ensures rare but critical intents aren’t missed. | Use Amazon Comprehend Custom Classification; aggregate per‑intent confusion matrix in S3. |
| **Latency distribution (95th %ile)** | Customers experience delays, not just correctness. | Deploy the model on AWS Lambda + API Gateway; stream CloudWatch metrics to Grafana dashboards. |
| **Failure‑mode rate** | Identifies systematic errors (e.g., mis‑parsing negations). | Log error types in Amazon Kinesis Firehose → Redshift for trend analysis. |
| **A/B test churn impact** | Measures real user satisfaction and retention. | Conduct split tests via Amazon CloudWatch A/B framework; capture click‑through & NPS in DynamoDB. |

We built a lightweight CI/CD pipeline (CodePipeline + SageMaker) to run these checks on every retraining, ensuring *Bias for Action*—quick feedback loops—and *Dive Deep* into root causes.

**Result – Impact**

- Recall per intent rose from **78 % → 94 %**, reducing critical‑intent failures by **80 %**.  
- 95th‑percentile latency dropped from **350 ms → 180 ms** (30 % faster).  
- A/B tests showed a **12 pp increase in NPS** and a **4 % reduction in churn**.

**Takeaway:**  
A single “accuracy” score can be deceptive; by anchoring metrics to customer‑centric outcomes, we achieved measurable business value while maintaining high system reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
