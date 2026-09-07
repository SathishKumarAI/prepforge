---
qid: ing_8d65a57108__aws__local
question: 'Explain: Builders — Serverless Computing \u2013 Amazon Web Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 444
total_tokens: 678
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:45:28-05:00'
sources: []
---

**Situation / Task**  
When my team was tasked with building a real‑time recommendation engine for an e‑commerce platform, the legacy monolith could not scale beyond 200 TPS and had 15 % downtime during traffic spikes. I owned the redesign.

**Action**  
I chose **AWS Serverless** to eliminate infrastructure pain and accelerate delivery.  
- **Lambda** (Python) handled the inference logic; a single function invoked 10× more requests per second than our previous EC2 pool, with cold‑start < 200 ms due to provisioned concurrency.  
- **Amazon API Gateway** exposed a REST endpoint; throttling was set to 5 k RPS, ensuring we never overwhelmed downstream services.  
- **DynamoDB** stored user profiles and served them in sub‑10 ms reads, using on‑demand capacity to auto‑scale with traffic.  
- **Amazon SageMaker Endpoint** hosted the model; I used the *Serverless Inference* configuration so that scaling was event‑driven and cost‑effective (≈$0.20 per 1 M requests).  

We integrated **AWS X-Ray** for tracing, enabling rapid root‑cause analysis when latency spiked.

**Result**  
- Throughput rose from 200 TPS to 12 k TPS (+6000%) with zero manual scaling.  
- Availability improved from 95% to >99.9%, eliminating the previous outage.  
- Monthly cost dropped by 35 % due to pay‑as‑you‑go pricing and no idle servers.

**Leadership Principles Highlighted**  
*Customer Obsession*: Delivered faster, more reliable recommendations.  
*Ownership & Dive Deep*: I architected, implemented, and monitored every component, continuously iterating on performance data.  

Bar‑raisers look for the *quantified impact*, a clear ownership trail, deep technical decisions, and evidence of learning from initial cold‑start issues to refine concurrency settings.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
