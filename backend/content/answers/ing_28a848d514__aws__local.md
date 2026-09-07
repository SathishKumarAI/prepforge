---
qid: ing_28a848d514__aws__local
question: 'Explain: Deployment & ops — Ai System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 419
total_tokens: 647
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:57:30-05:00'
sources: []
---

**Situation & Task**  
I led the launch of a recommendation engine for an e‑commerce platform that had to process 1 M user events per minute and deliver predictions with <50 ms latency. The goal was to increase conversion by 12% while keeping ops costs under $30K/month.

**Action**  
*Customer Obsession & Ownership* – I mapped the entire data pipeline: ingest → feature store → inference.  
- **AWS Kinesis Data Streams** captured events (shard capacity tuned for peak traffic).  
- **Glue** and **Lake Formation** built a central feature store; we used **S3** with intelligent tiering to balance cost/latency.  
- For model serving, I deployed **Amazon SageMaker Endpoint** behind an **Application Load Balancer** (ALB) with *target tracking* autoscaling on CPU utilization.  
- To guarantee 99.99% availability, the endpoint was replicated across two AZs and we used **Elastic Container Service (ECS)** to run lightweight inference containers for batch jobs during off‑peak hours.  
- I added **CloudWatch** dashboards and **AWS X-Ray** tracing; alerts fired on latency >70 ms or error rate >0.5%.  

**Result**  
- Conversion rose 13%, exceeding the target by 1 percentage point.  
- Latency averaged 42 ms, meeting SLA.  
- Ops cost stayed $27K/month (20% below budget).  
- Model drift alerts triggered a retrain cycle that improved accuracy by 3%.  

**Bar‑raiser Takeaway**  
Showed deep ownership, data‑driven impact, and the ability to balance scalability, availability, and cost while learning from early latency spikes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
