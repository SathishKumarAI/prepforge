---
qid: ing_5842e08551__aws__local
question: 'Explain: The NL-Code-Execute-Observe Cycle — Architecture Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 438
total_tokens: 670
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:45:02-05:00'
sources: []
---

**Situation / Task**  
I was tasked to build a *NL‑Code‑Execute‑Observe* (NLEO) pipeline for an internal product that lets data scientists turn natural‑language prompts into executable Spark jobs on demand, and then surface performance metrics back to the user.

**Action**  
1. **Architecture** – I split the cycle into three AWS services:  
   * **Lex + Lambda** parses NL → JSON intent (Customer Obsession).  
   * **Step Functions** orchestrates **Amazon EMR** clusters on demand, passing the generated PySpark script to a secure S3 bucket; the job runs inside an **IAM‑role‑dedicated cluster** for isolation.  
   * **CloudWatch + Athena** collect logs and query execution stats; results are pushed to a **Grafana dashboard** via API Gateway (Invent & Simplify).  

2. **Scalability & Cost** – EMR on Spot instances reduces compute cost by 60 % while the state machine auto‑scales up to 20 clusters per hour during peak usage.  
3. **Reliability** – Step Functions retries on transient failures, and a dead‑letter queue notifies ops if a job fails after three attempts (Bias for Action).  

**Result**  
Within two weeks of deployment, we saw a 45 % reduction in turnaround time for ad‑hoc analytics, a 30 % drop in cloud spend, and a 90 % first‑time‑success rate on user jobs. The bar‑raiser focuses on ownership (I drove end‑to‑end), dive deep (cost/latency trade‑offs), quantified impact, and lessons learned from the initial failure of an un‑optimized EMR launch script.

*Leadership Principles:* Customer Obsession, Ownership, Dive Deep, Bias for Action, Invent & Simplify.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
