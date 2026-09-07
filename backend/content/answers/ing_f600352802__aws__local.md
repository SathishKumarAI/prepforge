---
qid: ing_f600352802__aws__local
question: 'Explain: I personally find this satisfying rather than'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 425
total_tokens: 653
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:33:08-05:00'
sources: []
---

**Situation & Task**  
At my previous role we launched an on‑prem LLM inference service that was slow (≈ 250 ms latency) and costly ($1.2 M/yr). The product team needed a scalable, cost‑effective AI layer for real‑time recommendations.

**Action**  
I *took ownership* and re‑architected the pipeline using **Amazon SageMaker Endpoint** + **AWS Lambda** for orchestration and **ECS Fargate** for batch jobs. I applied **model pruning** (10× fewer parameters) and **quantization** to reduce inference size by 70 %. Leveraging **SageMaker Model Monitor** gave us continuous drift alerts, and I set up an automated rollback via **CloudWatch Alarms**.

I *dove deep* into the data: measured latency per shard, CPU/GPU utilization, and cost per request. Then applied a **Spot Instance mix** (80 % Spot) to cut compute spend by 45 %. Finally, I introduced **S3 Intelligent‑Tiering** for model artifacts, saving $0.05/GB/month.

**Result**  
- Latency dropped from 250 ms to 40 ms (10× faster).  
- Cost fell from $1.2 M/yr to $650 K/yr (≈ 45 % reduction).  
- Uptime rose from 97 % to >99.9 %.  

**Bar‑raiser Takeaway**  
Ownership: I led the full redesign and maintained end‑to‑end visibility.  
Dive Deep: I quantified every trade‑off—latency vs cost, Spot vs On‑Demand, pruning vs accuracy.  
Quantified Impact: Clear metrics on latency, cost, and availability.  
Learning from Failure: Early prototype hit 200 ms; we iterated with monitoring feedback loops until we met SLA.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
