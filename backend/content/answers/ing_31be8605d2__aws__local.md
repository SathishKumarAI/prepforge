---
qid: ing_31be8605d2__aws__local
question: 'Explain: Run safety checks — Ai Evals Complete Guide Langwatch Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 419
total_tokens: 654
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:17:25-05:00'
sources: []
---

**Situation / Task**  
I led a cross‑functional squad tasked with launching an end‑to‑end safety‑validation pipeline for our generative‑AI product. The goal was to surface harmful outputs before they reached users while keeping latency under 200 ms per request.

**Action**  
1. **Design** – Built a *stateless microservice* that ingests raw LLM responses, runs them through LangWatch’s safety classifiers and Langfuse’s evaluation engine.  
2. **AWS Services** – Deployed on **ECS Fargate** (CPU‑optimized), used **Amazon EventBridge** to trigger evaluations asynchronously, stored intermediate results in **DynamoDB** (partitioned by request ID) and persisted final verdicts in **S3** for audit.  
3. **Scalability / Availability** – Auto‑scaling on CPU utilization, replicated across two AZs; fallback lambda chain ensures 99.9% availability if Fargate pods lag.  
4. **Cost** – Spot instances + reserved capacity reduced monthly spend by 35 %.  

**Result**  
- Cut harmful‑content exposure rate from 2.3 % to <0.1 % (over 12 M requests).  
- Reduced average evaluation latency from 350 ms to 180 ms, enabling real‑time user experience.  
- Generated a *Safety Dashboard* that surfaced trends; early detection of a new jailbreak pattern saved us $120k in potential compliance fines.

**Reflection / Learnings**  
I own the end‑to‑end safety loop and continuously dive deep into LangWatch logs to identify model drift. The bar‑raiser will note my ownership, data‑driven impact, and proactive learning from an initial false‑negative spike that led us to refine threshold logic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
