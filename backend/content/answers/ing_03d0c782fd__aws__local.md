---
qid: ing_03d0c782fd__aws__local
question: 'Explain: Reliability'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 222
output_tokens: 347
total_tokens: 569
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:33:12-05:00'
sources: []
---

**Situation / Task**  
At my last role I led a cross‑functional team building an NLP inference service for a fintech client that required *99.999% availability* and sub‑200 ms latency during peak trading hours.

**Action**  
I owned the architecture:  
- Deployed **SageMaker Endpoint** behind an **Application Load Balancer (ALB)** with health checks, auto‑scaling based on CloudWatch metrics.  
- Added a **Lambda cache layer** using DynamoDB TTL to surface frequently requested predictions and reduce endpoint load.  
- Implemented *canary deployments* via CodePipeline and automated rollback with CloudFormation drift detection.  
- Instrumented detailed logging (X-Ray) and set up anomaly alerts in CloudWatch, triggering an auto‑recovery Lambda that refreshed model weights if latency spiked.

**Result**  
Within six months the service achieved **99.999% uptime**, 15 % lower inference cost than a monolithic design, and a *latency reduction of 35 ms* on average during load spikes—meeting the SLA with margin.  

**Reflection (Bar‑raiser lens)**  
I took full ownership, dived deep into performance bottlenecks, quantified impact through clear KPIs, and iterated based on failure alerts (e.g., a failed canary triggered immediate rollback). This exemplifies *Customer Obsession*, *Ownership*, and *Dive Deep*—core Amazon principles for building reliable AI systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
