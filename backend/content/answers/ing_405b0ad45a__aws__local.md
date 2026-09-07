---
qid: ing_405b0ad45a__aws__local
question: 'Explain: LLM Internals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 225
output_tokens: 406
total_tokens: 631
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:51:21-05:00'
sources: []
---

**Situation / Task**  
At my internship I was asked to explain the internals of a Large Language Model (LLM) so that our product‑management team could decide whether we should host it on AWS for a new chatbot feature. The goal: give them a clear, data‑driven view of compute needs, cost, and reliability.

**Action**  
I *dive deep* into the transformer architecture: token embeddings → multi‑head self‑attention → feed‑forward layers, each layer having ~12 B FLOPs for a 13‑B parameter model. I mapped these ops to AWS **ECS Fargate** with **AWS Inferentia** instances (p4d.xlarge) and added **Amazon S3** for weight storage.  
I ran benchmarks on a 16‑core EC2 instance, measuring latency: 45 ms per inference vs. 120 ms on CPU‑only. I also calculated cost: $0.30 per request with Inferentia vs. $1.20 on GPU instances—an **80 % savings** for 100k monthly requests.  
I proposed a *serverless* fallback using **AWS Lambda** + **EFS** for short bursts, ensuring high availability (99.95%) and automatic scaling.

**Result**  
The product team approved the architecture; we launched beta with a projected $200K/month cost reduction compared to on‑prem GPU clusters. The model served 120k requests/day with <50 ms latency, exceeding our SLA by 30%.  

**Leadership Principles Highlighted**  
- **Customer Obsession & Deliver Results:** Delivered a concrete cost/latency win that directly impacted the customer experience.  
- **Ownership & Dive Deep:** Took full ownership of the technical assessment and drilled into every layer of the transformer to build confidence in our AWS design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
