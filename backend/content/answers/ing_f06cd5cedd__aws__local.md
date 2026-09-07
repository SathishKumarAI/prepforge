---
qid: ing_f06cd5cedd__aws__local
question: 'Explain: System Design Fundamentals — System Design Academy'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 448
total_tokens: 677
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:20:33-05:00'
sources: []
---

**Situation / Task**  
I was asked to architect a real‑time ML inference pipeline for a global e‑commerce platform that needed to serve personalized product recommendations with < 200 ms latency while handling 50M daily requests.

**Action**  
- **Design**: Event‑driven microservices (API Gateway → Lambda → SageMaker endpoint).  
- **AWS services**: Amazon API Gateway, AWS Lambda (concurrency limits), Amazon SageMaker real‑time inference, DynamoDB for feature store, CloudWatch for observability.  
- **Scalability**: Auto‑scaling Lambda with provisioned concurrency; SageMaker endpoints use multi‑AZ deployment and can be auto‑scaled via Endpoint Auto Scaling.  
- **Availability**: 99.99% SLA achieved by deploying in two AZs, using Elastic Load Balancer for API Gateway, and leveraging DynamoDB global tables for low‑latency reads.  
- **Cost**: Lambda reduces idle compute; SageMaker endpoint’s on‑demand mode limits spend to $0.06/GB‑hour. Estimated 30% cost reduction vs a monolithic EC2 solution.

**Result**  
- Latency dropped from 450 ms to 180 ms (40% improvement).  
- Throughput increased from 5k RPS to 25k RPS with zero downtime during a 3‑month test.  
- Monthly inference cost fell by $120K.

**Reflection**  
I owned the end‑to‑end flow, diving deep into cold‑start mitigation and feature‑store latency. The bar‑raiser looked for ownership (clear trade‑offs), depth (Lambda concurrency tuning), quantified impact (latency & cost metrics), and learning from an initial failure when I underestimated Lambda’s memory throttling—leading to the final design tweak.  

**Leadership Principles**: *Ownership*, *Dive Deep*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
