---
qid: ing_6487e38ca9__star__local
question: The customer's CISO says no data can leave their network. How does that
  constrain your architecture, and what are the options?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 353
total_tokens: 603
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:48:44-05:00'
sources: []
---

**Situation**  
I was building a predictive fraud‑detection system for a large financial institution whose CISO had mandated that no customer data could exit their secure perimeter. The client’s existing analytics platform ran on an isolated cloud VPC, and all raw transaction logs were stored in a private S3 bucket behind a WAF.

**Task**  
Design an AI pipeline that delivers real‑time insights while keeping every byte of sensitive data within the regulated network, and still allowing our ML team to iterate on models without compromising compliance.

**Action**  
I adopted a “data‑at‑rest inside, compute outside” strategy. First, I encrypted the logs with KMS keys tied to the VPC endpoints so that only services in the private subnet could decrypt them. Next, I set up an AWS Lambda layer that pulls batches from the S3 bucket, runs feature extraction locally, and feeds them into a SageMaker endpoint deployed inside the same VPC using PrivateLink. For model training, I used Amazon SageMaker Ground Truth with on‑premise data connectors so no raw data left the network. Finally, I built a lightweight inference microservice in Docker that exposes only the prediction API through an internal load balancer; all monitoring metrics were sent to CloudWatch via VPC endpoints.

**Result**  
The solution met compliance without sacrificing latency—prediction time dropped from 2 s to under 500 ms—and we saw a 12% reduction in false positives over three months. I learned that strict data‑in‑place policies can be turned into an architectural advantage by leveraging isolated VPC endpoints, encrypted storage, and private inference endpoints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
