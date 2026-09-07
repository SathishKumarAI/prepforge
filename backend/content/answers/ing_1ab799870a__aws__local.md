---
qid: ing_1ab799870a__aws__local
question: 'Explain: Compute — Jobs \\ Anthropic'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 497
total_tokens: 725
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:26:51-05:00'
sources: []
---

**Situation & Task (Customer Obsession + Ownership)**  
At my last role I was tasked to replace our on‑prem NLP inference pipeline that processed 4 M customer support tickets per day with a low‑latency, cost‑efficient solution powered by Anthropic’s Claude model.

**Action (Dive Deep + Bias for Action)**  
1. **Requirements & Architecture** –  
   *Data flow*: S3 → EventBridge → SageMaker Endpoint (Anthropic) → DynamoDB logging → CloudWatch alerts.  
2. **AWS Services** –  
   - **SageMaker Inference Scheduler** with a **Multi‑Model endpoint** to host Claude and our internal model side‑by‑side, sharing the same GPU fleet.  
   - **EFS** for shared preprocessing artifacts (tokenizers).  
   - **Lambda** for lightweight orchestration and retry logic.  
3. **Scalability & Availability** – Auto‑scaling based on CloudWatch metrics (CPU 70 % → add 1 node, 30 % → remove), with a *dual AZ* deployment to achieve 99.99 % availability.  
4. **Cost Optimisation** – Spot Instances for non‑peak hours; reserved capacity for baseline traffic. Estimated savings: **~38 % vs. on‑prem**.

**Result (Deliver Results + Quantified Impact)**  
- Latency dropped from 1.2 s to **0.45 s** per ticket.  
- Throughput increased by **+35 %** while cost fell by **$120k annually**.  
- SLA compliance improved from 92 % to 99.5 %.

**Learnings (Invent & Simplify)**  
I discovered that a multi‑model endpoint drastically reduced overhead; however, I initially underestimated the cold‑start impact of Lambda triggers, which we mitigated by pre‑warming with scheduled events.

*Bar‑raiser notes:* Ownership of end‑to‑end pipeline, deep dive into latency and cost trade‑offs, quantified business value, and iterative learning from early missteps.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
