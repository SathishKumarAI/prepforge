---
qid: ing_02fcdc4d37__aws__local
question: 'Explain: Week 2 — Generative AI with Large Language Models | Coursera'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 442
total_tokens: 677
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:30:54-05:00'
sources: []
---

**Situation & Task**  
I was tasked to build a production‑ready chatbot for a client’s e‑commerce platform. The goal: reduce average support ticket time from 4 hrs to under 30 min while keeping response quality above 90 % NLU accuracy.

**Action – Design & AWS stack**  
1. **Model ingestion** – Fine‑tuned an open‑source LLM (GPT‑Neo) on a 2 TB product‑catalog + FAQ corpus using SageMaker training jobs.  
2. **Serving layer** – Deployed the model as a stateless Lambda function behind API Gateway, scaling to 5k QPS with provisioned concurrency of 200.  
3. **State & context** – Stored session vectors in DynamoDB (partition key: userID) and used Amazon Kendra for knowledge‑base search, ensuring low latency (<200 ms).  
4. **Observability** – CloudWatch metrics + X-Ray traces to monitor latency, error rates, and model drift; automated retraining triggers every 30 days or when accuracy dips below 88 %.  

**Result**  
- Ticket resolution time dropped from 4 hrs to **32 min** (92% reduction).  
- NLU accuracy held at **94 %**, meeting SLA.  
- Cost per query fell from $0.12 to **$0.03** by leveraging spot instances and Lambda’s pay‑per‑execution model.

**Leadership Principles Reflected**  
- **Customer Obsession** – Delivered a faster, higher‑quality support experience.  
- **Ownership & Dive Deep** – Took full ownership of the ML pipeline, diving into data quality, model drift, and cost optimization.  

**Bar‑raiser takeaways**  
- Quantified impact (time & cost savings).  
- Demonstrated depth: architecture decisions, trade‑offs between Lambda vs EC2, and monitoring strategy.  
- Learned from early latency spikes by adding Kinesis for buffering during traffic surges.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
