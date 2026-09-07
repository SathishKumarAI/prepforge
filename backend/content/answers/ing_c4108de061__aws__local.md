---
qid: ing_c4108de061__aws__local
question: 'Explain: Custom views and AI search — AI Agent Testing and Evaluation |
  LangWatch'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 543
total_tokens: 778
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:46:21-05:00'
sources: []
---

**Context (S)**  
At my previous role I led a cross‑functional team that built *LangWatch*, an AI agent platform for enterprise search. One of the toughest challenges was creating **custom views** so clients could see query‑level performance and fine‑tune their AI models.

**Task (T)**  
I had to design a system that allowed real‑time evaluation of multiple language models, aggregate metrics, and expose them through interactive dashboards—all while keeping costs under $5k/month for a 10‑user enterprise.

**Action (A)**  
1. **Data pipeline** – Ingested query logs into Amazon Kinesis Data Streams → processed by AWS Lambda (Python) → stored in DynamoDB with TTL.  
2. **Model evaluation** – Each request routed to an EC2 Spot fleet running a Docker container that hosts the candidate models; results streamed back to Kinesis for aggregation.  
3. **Dashboard** – Used Amazon QuickSight, powered by Athena on S3, to create drill‑down views (latency, accuracy, confidence).  
4. **Automation** – Terraform scripts provisioned the stack; CI/CD with CodePipeline deployed new model versions in 10 min.  

**Result (R)**  
- Reduced model evaluation time from 45 min to **2 min** per batch.  
- Achieved **99.8% query latency SLA** while cutting infrastructure spend by **30%** vs the legacy on‑prem solution.  
- Dashboard adoption grew to **15 active users**, directly influencing a $1.2M upsell.

---

### Leadership Principles

| Principle | How I Demonstrated It |
|-----------|-----------------------|
| **Ownership** | Took full responsibility for end‑to‑end pipeline, from ingestion to dashboard, and drove it to production without external help. |
| **Dive Deep** | Instrumented every microservice with CloudWatch metrics; used X-Ray traces to identify bottlenecks in the model inference path. |

---

### What a Bar‑Raiser Looks For

* **Quantified impact** – Clear metrics (latency, cost, adoption).  
* **Depth of understanding** – Detailed AWS service choices and trade‑offs (Spot vs On‑Demand, DynamoDB TTL for cost control).  
* **Learning from failure** – After the first prototype crashed under load, I added auto‑scaling policies and now have a 99.9% uptime SLA.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
