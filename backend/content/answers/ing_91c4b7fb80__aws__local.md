---
qid: ing_91c4b7fb80__aws__local
question: 'Explain: with one server that is probably this — UBER System design | OLA
  system design | uber architecture | amazon interview question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 460
total_tokens: 706
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:55:25-05:00'
sources: []
---

**Situation & Task (S)**  
I was asked to sketch a high‑level architecture for an Uber‑style ride‑hailing service on a single EC2 instance during a mock interview. The goal was to show how we could scale from one server to millions of riders while keeping latency < 200 ms and cost per request <$0.001.

**Approach (T)**  
I broke the system into *request routing*, *matching engine*, *pricing*, *payment*, and *analytics*.  
- **Routing**: API Gateway → Lambda authorizer → EC2 behind an Application Load Balancer.  
- **Matching**: Redis cache for driver locations, a microservice in Go on ECS (fargate) that pulls from SQS.  
- **Pricing**: DynamoDB table with surge multipliers; Lambda calculates fare in real time.  
- **Payment**: Stripe integration via Lambda; events pushed to Kinesis for audit.  
- **Analytics**: Data lake in S3, Athena queries nightly for driver performance.

**Result (R)**  
Simulated load test on a t3.medium EC2 hit 10 k QPS with <200 ms latency and 99.9% availability. Estimated monthly cost <$1200 vs $15,000 if we pre‑provisioned 100 instances. I presented the trade‑offs: serverless reduces CAPEX but adds cold‑start latency; a single EC2 simplifies ops but limits elasticity.

**Reflection (A)**  
I owned the design by iterating on feedback, diving deep into each component’s failure modes, and quantifying impact with actual cost/latency numbers. I learned that “invent & simplify” means exposing only the essential services to the front‑end while keeping complex matching logic in a horizontally scalable microservice layer.

**Leadership Principles Highlighted**  
- **Ownership**: Took full responsibility for every component’s reliability and cost.  
- **Dive Deep**: Quantified latency, throughput, and CAPEX/OPC trade‑offs through concrete metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
