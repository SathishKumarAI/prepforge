---
qid: ing_992c94e541__aws__local
question: 'Explain: ​ Online evaluations — Evaluation concepts - Docs by LangChain'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 388
total_tokens: 620
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:11:58-05:00'
sources: []
---

**Situation / Task**  
When I joined the ML Ops team, we needed a way to *continuously validate* our LLM‑based recommendation engine without blocking user traffic. The product was live on AWS and any latency spike would hurt conversion rates (target < 200 ms).  

**Action**  
I introduced **LangChain’s “Online Evaluations”** pattern: a lightweight, side‑car service that receives every model output in real time, runs a suite of automated metrics (BLEU, ROUGE, perplexity), and stores the results in DynamoDB.  
*Architecture*:  
- **Lambda@Edge** + **API Gateway** to intercept user requests.  
- **SQS** queues pass the prompt/response pair to an **ECS Fargate** container running LangChain’s evaluation pipelines.  
- Results are pushed to **CloudWatch** for alerting and to **Redshift** for trend analysis.  

I added a *confidence‑score* header that gated whether the response was shown or a fallback was served, keeping latency < 150 ms while reducing low‑quality outputs by 32 % (measured over a 4‑week A/B test).  

**Result**  
- **Customer Obsession**: User satisfaction ↑ 18 pts (NPS).  
- **Ownership & Dive Deep**: Reduced manual QA hours from 15 hrs/week to < 2 hrs.  
- **Deliver Results**: Cost per evaluation ≈ $0.0003, staying well below the $1/metric budget.  

I learned that *continuous, data‑driven feedback* is cheaper and safer than batch retraining, a lesson I share in every sprint review.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
