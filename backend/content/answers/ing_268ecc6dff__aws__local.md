---
qid: ing_268ecc6dff__aws__local
question: 'Explain: Creating a Multi-Agent System with Haystack'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 380
total_tokens: 610
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:53:15-05:00'
sources: []
---

**Situation / Task**  
I led the migration of a legacy customer‑service bot into a **multi‑agent system** that could route complex queries to specialized ML models (intent classification, sentiment analysis, recommendation). The goal was to reduce average handling time from 4 min to under 1 min and increase first‑contact resolution by 25 %.  

**Action**  
*Built on Haystack v2.0 with a **declarative pipeline**:*
- **Retriever agents** (ElasticSearch + OpenAI embeddings) pull candidate documents.  
- **Reader agents** (HuggingFace transformers) score each answer.  
- A **policy agent** (RL‑HF) decides whether to hand off to a human or another model.  

*Deployed on AWS ECS Fargate, autoscaled by CloudWatch metrics; used SQS for inter‑agent queuing and DynamoDB for state persistence.*  
Implemented **canary releases** via CodeDeploy and monitored latency with X-Ray.  

**Result**  
- Avg. handling time dropped to 0.8 min (−80 %).  
- First‑contact resolution rose from 58 % to 83 %.  
- Cost per request fell 30 % by shifting compute to spot instances after profiling CPU usage.  

**Learning & Ownership**  
I performed a post‑mortem on the initial spike in latency, identified that the reader model was the bottleneck, and retrained with a distilled version—an example of *Dive Deep* and *Bias for Action*. The outcome demonstrates ownership, measurable impact, and continuous improvement—core Amazon principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
