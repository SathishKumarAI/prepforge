---
qid: ing_fd065a780e__aws__local
question: 'Explain: Elastic Observability — Official Elastic Cloud pricing \u2014
  compare serverless and hosted offerings | Elastic'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 469
total_tokens: 711
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:50:07-05:00'
sources: []
---

**Situation / Task**  
When I joined the observability team at a SaaS startup, we were evaluating an Elastic Cloud deployment for our monitoring stack. The CTO asked me to compare **Elastic’s serverless (ELK on AWS Fargate + Lambda)** vs. their **hosted (managed Elasticsearch Service) offering** and quantify cost & performance impact.

**Action**  
I scoped the workload: 10 M log events/day, 30 GB index size, 1 k concurrent queries.  
1. **Serverless** – I modeled a Lambda‑driven ingestion pipeline, Fargate workers for Kibana, and an EFS-backed data store.  
2. **Hosted** – I provisioned a 3‑node Elasticsearch cluster on EC2 with auto‑scaling, using Elastic’s own service pricing tiers.  
I built a Monte‑Carlo cost model (AWS Cost Explorer + Elastic price calculator) for each month over 12 months and added a 10 % buffer for traffic spikes.

**Result**  
- **Cost:** Serverless saved 38 % ($1,200 vs. $2,000/month) due to pay‑per‑use compute and EFS burst mode, but incurred higher data transfer out (~$300).  
- **Availability:** Hosted offered SLA‑guaranteed 99.95 %, whereas serverless required custom health checks (5 % risk of query timeouts).  
- **Scalability:** Serverless auto‑scales instantly; hosted needed manual node addition, adding ~20 min lag.

I presented the findings in a deck with dashboards and a risk matrix. The CTO chose the **hosted** option for mission‑critical logs but earmarked serverless for log‑analysis experiments.

**Learning & Ownership**  
The exercise taught me to dive deep into both pricing models, quantify trade‑offs, and own the recommendation process—core Amazon principles of *Ownership* and *Dive Deep*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
