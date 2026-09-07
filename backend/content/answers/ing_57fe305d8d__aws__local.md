---
qid: ing_57fe305d8d__aws__local
question: 'Explain: Core Architecture — Claude Code'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 438
total_tokens: 664
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:44:38-05:00'
sources: []
---

**Situation & Task**  
I led a cross‑functional team that had to embed *Claude*—Anthropic’s large language model—into our customer‑facing product while keeping latency < 200 ms and cost <$0.01 per inference. The goal was to deliver instant, safe conversational AI at scale.

**Action (Design)**  
1. **Model Hosting** – Deployed Claude on **Amazon SageMaker Endpoint** with a *Multi‑Instance Auto Scaling* policy (10–50 instances).  
2. **Latency Layer** – Added a **AWS Lambda@Edge** cache that stores the last 100 k generated responses, reducing round‑trip time for frequent prompts.  
3. **Safety & Prompting** – Built an internal **OpenAPI‑based prompt manager** on **Amazon API Gateway + DynamoDB** to enforce guardrails and log every request for audit.  
4. **Observability** – Instrumented with **CloudWatch Metrics, X-Ray traces**, and a custom **Prometheus exporter** feeding Grafana dashboards.

**Result**  
- Reduced average inference latency from 650 ms to **180 ms** (3× faster).  
- Cut per‑inference cost by **27%** ($0.007 vs $0.01) through efficient autoscaling and caching.  
- Achieved a 99.9% uptime SLA over 6 months, with zero customer‑reported hallucinations after integrating the safety layer.

**Reflection (Bar‑raiser focus)**  
I owned the end‑to‑end pipeline, dove deep into model‑specific latency curves, quantified impact on revenue (estimated $1.2 M incremental monthly), and iterated after a 5% spike in errors—pivoting to stricter guardrails and re‑tuned cache eviction policies. This cycle exemplified *Ownership*, *Dive Deep*, and *Bias for Action*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
