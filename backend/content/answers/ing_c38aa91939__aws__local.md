---
qid: ing_c38aa91939__aws__local
question: 'Explain: Contextual Q&A — About Glean MCP server'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 504
total_tokens: 736
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:45:17-05:00'
sources: []
---

**Contextual Q&A on the Glean MCP Server – Interview Answer**

**S**ituation  
At my previous role I was tasked to improve the *Glean Machine‑Learning Contextual Processor (MCP)*, which powers in‑office search by mapping user queries to internal knowledge graphs. The existing system had a 55 % precision and lagged behind competitors.

**T**ask  
I owned the end‑to‑end redesign: build a higher‑fidelity contextual model, integrate it with AWS services, and roll out at scale without disrupting production traffic.

**A**ction  
1. **Data & Dive Deep** – I extracted 3 M labeled query–document pairs from CloudWatch logs, performed feature engineering in SageMaker Studio, and trained an XGBoost + BERT hybrid that captured entity disambiguation.  
2. **Design & AWS Services** – Deployed the model as a container on **Amazon ECS Fargate** behind an Application Load Balancer, using **AWS Lambda** for lightweight preprocessing and **Amazon DynamoDB** for real‑time caching of top results.  
3. **Scalability/Availability** – Auto‑scaling on CPU utilization, multi‑AZ deployment, and a fallback to the legacy rule‑based engine ensured 99.9 % uptime.  
4. **Cost & Trade‑offs** – Leveraged Spot Instances for training (–30 % cost) while keeping inference on On‑Demand to guarantee latency <200 ms.

**R**esult  
- Precision rose from 55 % → **78 %** (Δ+23 pp).  
- Query latency dropped by **35 %**, boosting overall search adoption by **18 %** in the first month.  
- Operational cost decreased by **$12K/month** due to Spot training and efficient caching.

---

*Leadership Principles highlighted:* **Customer Obsession** (better search experience), **Ownership** (full responsibility from data prep to deployment), **Dive Deep** (feature‑level analysis), and **Deliver Results** (measurable impact).  

Bar‑raisers look for: clear ownership, depth of technical insight, quantified business benefit, and lessons learned when the initial prototype underperformed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
