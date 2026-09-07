---
qid: ing_d85e28257f__aws__local
question: 'Explain: Problem statement — Text To Sql Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 449
total_tokens: 677
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:28:47-05:00'
sources: []
---

**Situation & Task (Customer Obsession, Ownership)**  
I was tasked by the analytics team to build a *Text‑to‑SQL Agent* that lets business users ask questions in plain English and get instant SQL queries against our data lake. The goal: reduce reliance on data engineers, cut query turnaround from 2 days to minutes.

**Approach (Dive Deep, Invent & Simplify)**  
1. **Requirements** – natural‑language intent → SQL template; support joins across up to 10 tables; enforce security roles.  
2. **Design** –  
   * **LLM inference** on Amazon Bedrock (Claude or GPT‑4) for intent parsing.  
   * **Rule‑based post‑processing** (Python Lambda) to map entities to table/column names, apply role‑based filters.  
   * Store query templates in DynamoDB; cache recent queries in ElastiCache Redis.  
3. **Scalability & Availability** – Bedrock offers 99.9 % SLA; Lambda scales horizontally with API Gateway throttling.  
4. **Cost** – Pay‑as‑you‑go for Bedrock (≈$0.02/1K tokens) + minimal Lambda/dynamo usage keeps monthly spend < $500.

**Result (Deliver Results)**  
Within 3 weeks, we launched a beta that reduced query turnaround from 2 days to **<30 seconds** for 80% of use cases. Adoption grew to 250 daily users, cutting data‑engineering effort by **35 hrs/month** (~$5k saved).  

**Learnings (Bias for Action, Bar‑raiser focus)**  
- Early user feedback revealed table‑alias confusion; added a UI preview step, improving accuracy from 78% to 92%.  
- Monitored token usage and re‑trained the LLM on domain‑specific jargon, cutting inference cost by 15%.  

This demonstrates ownership, deep technical dive, measurable impact, and continuous learning—key Amazon qualities.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
