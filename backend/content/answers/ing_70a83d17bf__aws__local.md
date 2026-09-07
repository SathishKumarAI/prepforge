---
qid: ing_70a83d17bf__aws__local
question: 'Explain: Workflow frameworks — Agentic Engineering - by Neo Kim and Paul
  Hoekstra'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 391
total_tokens: 628
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:40:11-05:00'
sources: []
---

**Answer (Amazon Style)**  

> **Leadership Principles:** *Customer Obsession* & *Dive Deep*

**Situation**  
While building a recommendation engine for a fast‑moving e‑commerce platform, I noticed that our data ingestion pipelines were brittle: every new feature required manual script changes and caused production downtimes.

**Task**  
I had to architect an automated ML workflow that would let data scientists iterate quickly without compromising reliability or cost.

**Action**  
I introduced **Agentic Engineering**, a workflow framework inspired by Neo Kim & Paul Hoekstra.  
1. **Declarative DAGs** in AWS Step Functions + Amazon SQS for task orchestration, enabling *zero‑touch* pipeline changes.  
2. **Containerized Agents** (ECS Fargate) that self‑register and discover new data sources via a lightweight registry service.  
3. **Dynamic Resource Scaling**: AWS Batch jobs auto‑scale based on queue depth, keeping CPU costs < $0.05/hr during idle periods.  
4. **Observability**: CloudWatch metrics + X-Ray tracing give end‑to‑end latency (< 5 s) and error rates (≤ 0.1 %) per agent.

**Result**  
- Reduced pipeline failure rate from 12 % to < 0.2 %.  
- Cut model retraining time by 70 %, from 8 hrs to 2 hrs.  
- Saved $30K annually on compute by leveraging spot instances and auto‑scaling.  

**Bar‑raiser Takeaway**  
I demonstrated *ownership* by re‑architecting the entire ML ops stack, *dive deep* into AWS services, quantified impact with concrete metrics, and learned from initial failures (e.g., misconfigured IAM roles) to refine the framework.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
