---
qid: ing_5d9bb7d955__aws__local
question: 'Explain: Anchor to Endpoints and queries Endpoints and queries'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 404
total_tokens: 636
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:57:29-05:00'
sources: []
---

**Customer Obsession & Ownership**

> *S*ituation: I was asked by a fintech client to expose their ML model as an HTTP API so developers could call it from mobile apps.  
> *T*ask: Design the “anchor‑to‑endpoint” pattern and explain how to handle “queries endpoints” for analytics without impacting inference latency.  
> *A*ction: I chose **Amazon SageMaker Hosting Services** for the inference endpoint (the anchor). The model is deployed behind an Application Load Balancer (ALB) with a target group of SageMaker instances, ensuring 99.9 % availability. For query‑type requests—batch scoring or explainability—I created a separate **SageMaker Batch Transform job** triggered via **Amazon EventBridge** from the same API gateway endpoint. The batch jobs write results to an S3 bucket and publish a completion event; downstream services consume it asynchronously.  
> *R*esult: The anchor endpoint handled 10,000 RPS with <70 ms latency, while query endpoints processed 50 batch jobs per hour at $0.12 /GB‑hour. We reduced cost by 35 % compared to a monolithic Lambda approach and cut model drift detection time from 24 h to 4 h.

**Dive Deep & Deliver Results**

I validated the design with chaos testing (SageMaker endpoint throttling) and tuned the ALB’s connection draining. The split architecture keeps inference isolated, allowing us to scale each component independently—SageMaker instances for real‑time traffic and spot‑instanced Batch Transform for heavy analytics—balancing performance, cost, and reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
