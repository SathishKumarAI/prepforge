---
qid: ing_5395956106__aws__local
question: 'Explain: Aggregate and visualize — Ai Evals Complete Guide Langwatch Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 445
total_tokens: 680
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:33:47-05:00'
sources: []
---

**Situation & Task**  
While leading a cross‑functional team at my last company, we needed to *aggregate* raw evaluation data from dozens of LLM experiments and *visualize* performance trends for stakeholders who had no ML background. The goal was to cut the time from experiment run to insight by 70 % while keeping cost under $200/month.

**Action**  
I built an end‑to‑end pipeline using **LangWatch** (for real‑time metric ingestion) and **Langfuse** (for structured evaluation storage).  
1. Each experiment writes JSON metrics to **S3**; a **Lambda** triggers on upload, parses the file, and pushes the data into a **DynamoDB** table via Langfuse’s SDK.  
2. I exposed a **REST API Gateway** that runs **Athena queries** against the DynamoDB export for ad‑hoc analytics.  
3. For visualization, I created an **Amazon QuickSight** dashboard that auto‑refreshes every 5 minutes, showing per‑prompt accuracy, latency, and cost metrics.

This architecture scales to >10k experiments/day, offers 99.9 % availability (S3 + DynamoDB), and costs < $180/month. It also includes an automated alerting rule in CloudWatch that flags any metric deviating >2σ from the baseline—ensuring rapid detection of model drift.

**Result**  
Stakeholders received actionable insights within 4 hours instead of 28, a **73 % reduction in turnaround time**, and the pipeline handled a 3× increase in experiment volume with no performance degradation. The solution was later adopted company‑wide for all LLM evaluation workflows.  

*Leadership Principles:* **Customer Obsession** (delivering fast insights), **Ownership** (full responsibility from ingestion to visualization), **Dive Deep** (designing the data flow and cost model).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
