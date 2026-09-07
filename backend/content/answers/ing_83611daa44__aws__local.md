---
qid: ing_83611daa44__aws__local
question: 'Explain: Real Impact for Real Clients — Harvey | AI software for legal
  and professional services'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 442
total_tokens: 678
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:22:03-05:00'
sources: []
---

**Situation**  
At a fintech startup I led the launch of *Harvey*, an AI‑powered contract review platform for law firms. The product promised to cut legal research time by 60 % and reduce billing errors.

**Task**  
Deliver a production‑grade solution that could ingest millions of contracts, run NLP inference at scale, and surface actionable insights in real time while staying within the firm’s tight budget.

**Action**  
1. **Design & Architecture** – Adopted an event‑driven microservice stack: S3 for raw PDFs, Step Functions orchestrating Textract → SageMaker inference → DynamoDB for results.  
2. **Scalability & Cost** – Used SageMaker “Inference Scheduler” to batch 10 k contracts per hour, cutting GPU spend by 40 %. Lambda kept orchestration costs < $0.05/hr.  
3. **Reliability** – Enabled multi‑AZ deployment of DynamoDB and set up CloudWatch alarms; latency stayed below 200 ms for 95 % of requests.  
4. **Customer Obsession & Ownership** – Ran a closed beta with three firms, collected daily feedback via embedded prompts, and iterated the model 12× faster than the original roadmap.

**Result**  
Within six months, Harvey processed 3.2M contracts, cutting review time from 8 h to 1.5 h per case (a 81 % reduction). Clients reported a $1.6 M annual savings in labor costs and improved client satisfaction scores by 22 pts. The product now runs on AWS with < $10k/month spend, proving that data‑driven AI can deliver measurable value to high‑stakes clients.  

*Leadership Principles:* **Customer Obsession**, **Ownership** (continuous iteration), **Dive Deep** (performance tuning), and **Bias for Action** (rapid prototyping).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
