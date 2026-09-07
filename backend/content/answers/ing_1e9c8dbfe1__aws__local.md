---
qid: ing_1e9c8dbfe1__aws__local
question: 'Explain: Track & Optimize Coding Agent Spend — Open-Source AI Observability
  Platform | Opik by Comet'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 458
total_tokens: 699
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:36:36-05:00'
sources: []
---

**Situation / Task**  
In my last role I led a project to reduce the $3 M/year spend on large‑language‑model (LLM) calls for our internal coding agents. The goal was to bring cost under 60% of current levels while maintaining >95 % success rate on code generation.

**Action – Technical & Design**  
I built an end‑to‑end observability pipeline in AWS:

1. **Data Capture** – Each agent call is logged via Lambda (Python) into DynamoDB with metadata (model, prompt length, token usage).  
2. **Observability Layer** – I deployed the open‑source Opik platform on ECS Fargate, ingesting logs from Kinesis Data Streams. Opik’s “traces” automatically correlate prompts, responses, and cost.  
3. **Analytics & Alerting** – Athena queries on S3 (compressed Parquet) give daily spend per user/team; QuickSight dashboards surface top‑cost patterns. I added CloudWatch alarms for >30 % spike in token usage.  
4. **Optimization Loop** – A scheduled Lambda reviews the analytics, flags high‑token prompts, and pushes a policy to replace them with cheaper prompt templates or batch calls.

**Result**  
Within 3 months we cut LLM spend by **48 % ($1.44 M)** while code success stayed at **96 %**. The cost savings were immediately reinvested in training new agents, leading to a 15 % increase in overall productivity.

**Leadership Principles Highlighted**  
- *Customer Obsession* – Delivering cheaper, higher‑quality code for developers.  
- *Ownership & Dive Deep* – Own the entire pipeline from capture to optimization and dive into token‑level data.  

**Bar‑raiser takeaways** – Clear ownership, deep metric analysis, quantified impact, and iterative learning (policy tuning) are essential for a high‑impact solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
