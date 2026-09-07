---
qid: ing_54e5f60e93__aws__local
question: 'Explain: F7: Catastrophic forgetting on rarely-seen tasks'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 435
total_tokens: 668
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:38:11-05:00'
sources: []
---

**Situation & Task**  
At my previous role I was building a continuous‑learning chatbot for an e‑commerce platform. Every day it received new product descriptions, but we noticed that after a week of heavy traffic on “holiday décor” queries the model’s performance on older categories (“hardware tools”) dropped by 42 %—classic catastrophic forgetting.

**Action (Dive Deep + Ownership)**  
I first profiled training logs in CloudWatch and identified that the data pipeline was feeding an imbalanced mini‑batch to SageMaker. I re‑architected the ingestion with a **S3 event trigger → Lambda → DynamoDB FIFO queue** that tags each example with its category weight. Then I switched from standard SGD to **Elastic Weight Consolidation (EWC)** implemented in PyTorch, packaging it as a **Docker image on Amazon ECR** and training in a **SageMaker Training Job** with Spot Instances for cost control.

To keep rare classes alive I set up an **AWS Step Functions** workflow that runs a 24‑hour “replay” job pulling the last 10 % of each category from DynamoDB into a balanced validation set, then triggers a new training cycle. I monitored accuracy via SageMaker Model Monitor and set a CloudWatch alarm for any drop >5 %.

**Result (Deliver Results)**  
Within two weeks the recall on hardware tools rose from 58 % to **93 %**, while holiday décor precision improved by 7 %. Overall model latency stayed under 200 ms, and we cut training cost by 30 % using Spot Instances. The solution was adopted platform‑wide, reducing support tickets by 18 %.  

**Reflection (Bias for Action + Learn from Failure)**  
I learned that catastrophic forgetting is not just a theoretical problem; it manifests in real traffic patterns. By treating data imbalance as a first‑class service, we turned a recurring failure into an automated resilience pipeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
