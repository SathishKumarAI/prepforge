---
qid: ing_cfdbab641d__aws__local
question: 'Explain: Output Formatting — Building Tool Agents'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 480
total_tokens: 707
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:10:43-05:00'
sources: []
---

**Situation & Task**  
I led a cross‑functional squad tasked with delivering *AI‑powered output‑formatting agents* for a SaaS analytics platform that needed to generate PDF/HTML reports in < 2 s for 10k concurrent users. The goal was to replace manual template logic, reduce support tickets, and improve user satisfaction.

**Action (Design)**  
1. **Micro‑service architecture** – Each agent runs as an AWS Lambda triggered by API Gateway, with the request payload stored in S3 for audit.  
2. **Model inference** – A fine‑tuned GPT‑4 model hosted on SageMaker Endpoint performs content summarization and style adaptation; we use `ProvisionedConcurrency` to guarantee 200 RPS latency < 800 ms.  
3. **Template engine** – We store Mustache templates in DynamoDB, keyed by user‑role and locale; Lambda pulls the template, merges with model output, and streams to S3 for downstream rendering.  
4. **Observability** – CloudWatch metrics (latency, error rates) feed into an automated Step Functions workflow that triggers a fallback agent (rule‑based) if the AI confidence drops below 0.75.

**Result**  
- Latency dropped from 5 s to 1.8 s (+64%).  
- Support tickets on formatting fell by 73% in Q3.  
- Cost per report reduced by 35% ($0.02 → $0.013) thanks to Lambda’s pay‑per‑execution model and SageMaker’s burst mode.

**Reflection (Bar‑raiser lens)**  
I owned the end‑to‑end pipeline, diving deep into latency bottlenecks, iterating on model confidence thresholds, and documenting a rollback playbook that cut failure recovery time by 50%. The experience reinforced my bias for action: I prototyped in < 48 h, validated with A/B tests, and scaled to production within 3 weeks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
