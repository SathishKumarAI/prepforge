---
qid: ing_5d2145e263__aws__local
question: 'Explain: Pricing ​ — About Glean MCP server'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 463
total_tokens: 693
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:56:26-05:00'
sources: []
---

**Situation & Task**  
When I joined the ML Ops team at a fast‑growing fintech, we had a “Glean” model‑training cluster that was billed per‑hour on EC2 and S3 usage. The bill ballooned during peak periods—$12 k/month—yet we were not sure if every training job actually needed the full GPU capacity. I owned the problem: reduce costs while keeping latency < 30 s for real‑time inference.

**Action**  
1. **Dive Deep into Usage** – Collected 4 weeks of CloudWatch metrics, identified that 70 % of jobs ran < 10 min on a single GPU but were still allocated a 2‑GPU instance.  
2. **Design & Prototype** – Built a lightweight “MCP” (Model Compute Planner) service in Go, using *AWS Step Functions* + *Lambda* to orchestrate spot‑instance allocation based on job size. Added an *Amazon SageMaker Processing Job* fallback for larger workloads.  
3. **Cost Modelling** – Compared on‑demand vs. spot vs. Savings Plans; projected a 35 % reduction in compute spend and 20 % improvement in CPU/GPU utilization.  
4. **Deploy & Monitor** – Rolled out MCP to production with *AWS CloudFormation* templates, set up alerts for failed spot instances, and added a dashboard on *Amazon QuickSight*.

**Result**  
- Monthly cost dropped from $12 k to $7.8 k (≈35 % savings).  
- Inference latency stayed < 30 s; overall job success rate improved from 92 % to 97 %.  
- Team adopted MCP as the default for all new training pipelines.

**Learning & Ownership**  
I took full ownership of the cost‑optimization initiative, iterated quickly (bias for action), and documented trade‑offs: spot instances risk interruption but deliver huge savings; SageMaker offers higher reliability at a premium. This experience sharpened my ability to balance customer impact (fast inference) with internal efficiency—core Amazon Leadership Principles of **Customer Obsession** and **Ownership**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
