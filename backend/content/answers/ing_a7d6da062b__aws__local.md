---
qid: ing_a7d6da062b__aws__local
question: 'Q25: How do you optimize LLM inference costs?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 387
total_tokens: 618
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:46:09-05:00'
sources: []
---

**Answer (Amazon Way)**  

During my last role at a fintech startup I led the migration of our on‑prem LLM inference pipeline to **AWS SageMaker Runtime + Lambda** to cut costs by 68 % while keeping latency <120 ms for 95 % of requests.  

- **Situation:** Our daily inference budget hit $12k/month; each request cost ~\$0.0005 and we served ~4M queries/day.  
- **Task:** Reduce per‑query cost without compromising SLA or model accuracy.  
- **Action:**  
  1. *Model Pruning & Quantization* (int8) – reduced payload size by 70 %.  
  2. *Serverless inference* – moved from EC2 to SageMaker Endpoint with **AWS Lambda** as a front‑end, enabling on‑demand GPU bursts and auto‑scaling.  
  3. *Caching* – implemented **Amazon ElastiCache (Redis)** for hot prompts; hit rate rose from 12 % to 78 %.  
  4. *Cost monitoring* – set up CloudWatch dashboards & AWS Budgets alerts.  
- **Result:** Monthly inference cost fell from \$12k to \$3.9k, latency improved by 15 %, and we maintained a 99.8 % accuracy rate on the test suite.  

**Leadership Principles:** *Customer Obsession* (improved user experience) & *Ownership* (end‑to‑end cost optimization).  

Bar‑raiser focus: demonstrated ownership, deep dive into quantization trade‑offs, quantified impact, and lessons from a failed initial attempt to move everything to EC2 which caused overprovisioning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
