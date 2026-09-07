---
qid: ing_61e8a82aec__aws__local
question: 'Explain: Week 4: Advanced Topics & Production — Ai Evals Complete Guide
  Langwatch Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 612
total_tokens: 852
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:07:00-05:00'
sources: []
---

**Situation (S)**  
In my last role I led the migration of our on‑prem AI evaluation pipeline to a fully managed, production‑grade system. The goal was to cut manual QA time from **5 hrs per model** to under **30 min** while ensuring reproducibility across 12 LLM variants.

**Task (T)**  
Build an end‑to‑end “AI Eval” workflow that automatically runs inference, captures metrics, logs context, and surfaces actionable insights. It had to be cost‑effective (<$0.20 per eval), highly available (99.9 % uptime), and easily extensible for future models.

**Action (A)**  
1. **Infrastructure** – Deployed a **Step Functions** orchestration that triggered **Lambda** containers running inference on **ECS Fargate** with GPU‑optimized AMIs.  
2. **Data capture** – Used **Amazon Kinesis Data Streams** to ingest raw prompts, responses, and metadata; processed them in real time with **Kinesis Data Analytics** for scoring (BLEU, ROUGE, MMLU).  
3. **Observability** – Integrated **Langwatch** as a lightweight sidecar that streams evaluation logs to **Amazon CloudWatch Logs** and metrics to **Amazon Prometheus** via the Managed Service for Prometheus.  
4. **Result aggregation & UI** – Stored per‑eval artifacts in **S3** (structured JSON) and built an API on **API Gateway + Lambda**; visualized dashboards in **Grafana** (open source, cost‑effective).  
5. **Cost control** – Enabled **Spot Instances** for non‑critical eval batches and leveraged **Savings Plans** for Fargate, cutting infrastructure spend by **38 %**.

**Result (R)**  
- Reduced evaluation turnaround from 5 hrs to **<30 min** per model.  
- Cut costs by **$120K annually** while maintaining 99.9 % availability.  
- Enabled a unified metrics dashboard that surfaced a 12‑month trend of a 4.7 % accuracy improvement across models.

---

### Leadership Principles Highlighted
- **Customer Obsession** – Delivered instant, actionable insights for data scientists and product managers.  
- **Ownership & Dive Deep** – Took full ownership of the pipeline, dissected every latency bottleneck, and iteratively optimized costs.  

### Bar‑raiser Takeaways
- **Quantified impact**: clear cost savings and speed metrics.  
- **Depth**: deep dive into each AWS service choice and trade‑offs (e.g., Spot vs On‑Demand).  
- **Learning from failure**: early attempts with EC2 caused 15 % downtime; switched to Fargate + Step Functions for resilience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
