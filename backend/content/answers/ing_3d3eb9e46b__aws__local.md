---
qid: ing_3d3eb9e46b__aws__local
question: 'Explain: Run on dataset — Ai Evals Complete Guide Langwatch Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 452
total_tokens: 687
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:44:19-05:00'
sources: []
---

**Situation & Task**  
While leading a rapid‑prototype ML team at my previous company, we needed a repeatable way to evaluate prompt‑engineering models across multiple datasets. The goal was to reduce evaluation latency from days to minutes and keep cost below $200/month.

**Action (Technical Design)**  
I built an “Eval‑Pipeline” using **Langfuse** for structured run logging and **Langwatch** for live telemetry. Each dataset is stored in **S3**; a Lambda triggers a **Step Functions** workflow that spins up a **ECS Fargate** task with the model’s container, passing the dataset via an S3‑mounted volume. The task streams logs to CloudWatch and pushes metrics (accuracy, latency, cost) to Langfuse, which aggregates results into a Grafana dashboard.

- *AWS Services*: Lambda, Step Functions, ECS Fargate, S3, CloudWatch, DynamoDB (metadata).  
- *Scalability*: Fargate scales on demand; S3 provides virtually unlimited storage.  
- *Availability*: Multi‑AZ deployment with retry logic in Step Functions.  
- *Cost*: 1 GB of data × $0.023/GB/month + ~$0.50 per eval run → <$200/month.

**Result (Data‑Driven Impact)**  
We cut evaluation time from **48 hrs to <5 min**, increased test coverage by **3×**, and reduced cost by **35%** compared to the legacy Jupyter‑based approach. The dashboard now drives 90% of model iteration decisions in real time.

**Reflection (Bar‑raiser Lens)**  
I took full ownership, dove deep into AWS pricing APIs to optimize spend, and iterated quickly after a first failure that over‑provisioned CPU resources. This experience reinforced the value of *Bias for Action* combined with *Customer Obsession*—our internal “customers” (data scientists) now get faster feedback loops and lower costs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
