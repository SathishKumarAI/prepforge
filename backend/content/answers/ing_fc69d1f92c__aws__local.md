---
qid: ing_fc69d1f92c__aws__local
question: 'Explain: Frequently Asked Questions About AI SREs'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 394
total_tokens: 623
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:48:37-05:00'
sources: []
---

**Situation & Task (S)**  
I was tasked to build an internal “FAQ Bot” that answers the most common questions from our AI‑SRE team—everything from model drift alerts to auto‑scaling policies—so they could focus on incident resolution instead of hunting docs.

**Action (A)**  
1. **Ownership & Customer Obsession** – I scoped the feature with SREs, captured 12 high‑frequency queries via JIRA tickets, and set a target SLA of <2 sec response time.  
2. **Dive Deep** – Designed a stateless Lambda function behind API Gateway that pulls intent data from Amazon Comprehend and retrieves answers stored in DynamoDB (partitioned by product line).  
3. **Bias for Action & Invent & Simplify** – Added an SQS queue to batch updates, enabling near‑real‑time FAQ refreshes without downtime.  
4. **Scalability/Availability** – Leveraged Lambda’s auto‑scaling, DynamoDB global tables (replica in us-east-1 & eu-west-1), and CloudFront caching for low latency.  
5. **Cost Control** – Estimated < $200/month by keeping storage under 10 GB and using on‑demand Lambdas.

**Result (R)**  
- Achieved a 99.9% uptime over 6 months.  
- Reduced SRE ticket volume by 35% (≈ 120 tickets/month).  
- Response time averaged 1.4 sec, meeting the SLA.  

**Bar‑raiser takeaway** – I demonstrated end‑to‑end ownership, deep technical reasoning, measurable impact, and iterative learning from early feedback loops.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
