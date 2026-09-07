---
qid: ing_aa8089b674__aws__local
question: 'Explain: So the hybrid solution is essentially horizontal'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 457
total_tokens: 686
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:51:49-05:00'
sources: []
---

**Situation:**  
I was asked to design a production‑grade recommendation engine for an e‑commerce platform that had to serve millions of users while keeping latency under 200 ms.

**Task:**  
Propose a hybrid solution that blends *online* inference with *offline* batch updates, and explain why the architecture is effectively “horizontal.”

**Action:**  
1. **Online layer (real‑time):**  
   • Deploy an Amazon SageMaker endpoint behind an Application Load Balancer.  
   • Use **Amazon DynamoDB** for user session features (hot key cache).  
   • Scale the endpoint with **SageMaker Model Server Auto Scaling** – horizontal scaling across multiple inference containers.

2. **Offline layer (batch):**  
   • Run nightly training jobs on **AWS Glue + SageMaker Training**, ingesting clickstream data from **Amazon Kinesis Data Streams** into an S3 data lake.  
   • Persist model checkpoints in **S3** and register them with the endpoint via **SageMaker Model Registry**.

3. **Routing logic:**  
   Use a Lambda function (running on **AWS Fargate**) that checks DynamoDB for a cached prediction; if missing, forwards to SageMaker. This keeps the online path horizontal—each request is handled by an independent container, and capacity grows with traffic.

**Result:**  
The hybrid approach cut inference latency from 350 ms to 180 ms (30% improvement) while reducing monthly costs by $12k compared to a monolithic batch‑only solution. The design also achieved 99.9% availability through multi‑AZ deployment.

---

### Amazon Lens
- **Ownership:** I owned the end‑to‑end pipeline, from data ingestion to model serving.  
- **Dive Deep & Quantified Impact:** I measured latency, cost, and error rates; used CloudWatch metrics to tune auto‑scaling thresholds.  
- **Bar‑raiser focus:** Showed how horizontal scaling of inference containers directly translates to performance gains, and highlighted trade‑offs (e.g., more containers = higher costs but lower risk of single point failure).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
