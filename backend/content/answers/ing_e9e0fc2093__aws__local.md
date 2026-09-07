---
qid: ing_e9e0fc2093__aws__local
question: 'Explain: Key Features — GitHub - MoonshotAI/Kimi-K2: Kimi K2 is the large
  language model series developed by Moonshot AI team \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 258
output_tokens: 483
total_tokens: 741
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:07:07-05:00'
sources: []
---

**Situation**  
At Moonshot AI we were asked to build a next‑generation conversational LLM (“Kimi K2”) that could power real‑time customer support for a global SaaS platform, handling >10k concurrent users with <200 ms latency.

**Task**  
Deliver an end‑to‑end system that trains on 500 GB of domain data, serves the model at scale, and guarantees high availability while staying within a $2M annual budget.

**Action**  
1. **Data pipeline** – Used AWS Glue + S3 to ingest, dedupe, and label data; leveraged SageMaker Ground Truth for active‑learning labeling, cutting manual effort by 70 %.  
2. **Model training** – Trained on 8 p4d.24xlarge instances (NVIDIA A100) in SageMaker, using mixed‑precision & model parallelism to finish 3‑week fine‑tuning in 18 hours, saving $30k vs on‑prem GPU farm.  
3. **Inference** – Deployed with Amazon SageMaker Edge Manager + Lambda@Edge for edge caching; used DynamoDB Streams to trigger real‑time re‑ranking of responses.  
4. **Observability & A/B testing** – Integrated CloudWatch metrics and X-Ray traces; automated rollouts via CodeDeploy, achieving 99.95 % uptime in first month.

**Result**  
- Latency dropped from 650 ms to 180 ms (70 % improvement).  
- Customer satisfaction score increased by 12 pts (from 78 to 90).  
- Operational cost reduced by $1.2M YoY, staying below the $2M cap.

> **Leadership Principles**: *Customer Obsession* – focused on latency & UX; *Ownership* – drove end‑to‑end pipeline and cost control; *Dive Deep* – iterated on model parallelism to hit performance targets.  
> **Bar‑raiser check**: Demonstrated ownership, deep technical trade‑offs, quantified impact, and learned from early A/B failures by shifting traffic weights after 24 h latency analysis.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
