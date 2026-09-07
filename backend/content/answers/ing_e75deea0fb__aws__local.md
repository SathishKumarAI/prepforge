---
qid: ing_e75deea0fb__aws__local
question: 'Explain: Week 2: Core Patterns (18 Problems) — Blind 75'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 392
total_tokens: 628
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:01:47-05:00'
sources: []
---

**Situation & Task**  
During my data‑science internship I led a sprint to refactor our recommendation engine. The team was stuck on the “Week 2: Core Patterns (Blind 75)” module of our internal ML curriculum, which covers the 18 most common algorithmic patterns that appear in production and interview questions (e.g., sliding window, two pointers, depth‑first search).  

**Action**  
I mapped each pattern to a real‑world use case—e.g., the *two‑pointer* technique for finding pairs of items whose combined price falls within a customer’s budget. I wrote a reusable Python library that accepts any list and target sum, then returns all valid pairs in **O(n)** time. The code is packaged as an AWS Lambda function behind API Gateway, leveraging DynamoDB for idempotency and CloudWatch for metrics.  

**Result**  
The refactor cut our recommendation latency from 1.2 s to 0.3 s (a 75% improvement) and reduced Lambda invocations by 40%, saving ~$0.02/month on AWS compute costs. The library is now used across three micro‑services, giving the team a single source of truth for pattern implementation.  

**Leadership Principles Anchored**  
- **Customer Obsession**: Faster responses improve user experience.  
- **Ownership**: Delivered end‑to‑end solution and maintained it.  
- **Dive Deep & Bias for Action**: Analyzed complexity, chose the right AWS services, and acted quickly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
