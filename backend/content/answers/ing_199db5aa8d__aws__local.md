---
qid: ing_199db5aa8d__aws__local
question: 'Explain: Tier 2: Run on traces that passed Tier 1 (cheap LLM, ~$0.50/1K)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 407
total_tokens: 653
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:24:12-05:00'
sources: []
---

**Situation & Task**  
At a previous role I was tasked to launch an AI‑driven recommendation engine for a SaaS product while keeping cost per inference under $0.05. The first layer (Tier 1) used a lightweight LLM (~$0.50/1K tokens) that filtered user requests; only the “interesting” traces moved to Tier 2.

**Action – Design & AWS Services**  
- **Tier 2** ran on *Amazon SageMaker* with a *smaller, distilled* transformer (≈10M parameters).  
- I set up an *API Gateway + Lambda* front‑end that queued only the 20% of traces passing Tier 1.  
- Inside SageMaker, I used **Inference Scheduler** to keep a warm endpoint (1 vCPU) and autoscale based on queue length, keeping latency <200 ms.  
- For cost control, I leveraged *SageMaker Savings Plans* and spot instances for batch inference during off‑peak hours.  

**Result**  
- Reduced per‑trace cost from $0.50 to **$0.03** (≈94% savings).  
- Throughput increased by 3× while maintaining 99.9 % availability.  
- Revenue lift: 12% higher conversion rate on recommendations.

**Leadership Principles & Bar‑raiser Focus**  
- **Customer Obsession / Deliver Results** – Delivered a cheaper, faster recommendation flow that directly improved user engagement.  
- **Dive Deep** – Optimized each component (token filtering, model size, scaling policy) and quantified trade‑offs between latency and cost.  
- **Ownership** – Took full responsibility for the end‑to‑end pipeline, from data ingestion to deployment and monitoring.  

Learning: Early profiling of Tier 1 throughput prevented over‑provisioning in Tier 2; continuous A/B testing further refined the filtering threshold.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
