---
qid: ing_5be1184be9__aws__local
question: 'Explain: Technical PM — Get a Job at Microsoft: Interview Process and Top
  Questions - Exponent'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 439
total_tokens: 678
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:52:57-05:00'
sources: []
---

**Customer Obsession & Ownership**

> *“I’m a Product Manager for an internal AI‑service platform that powers recommendation engines across Microsoft’s consumer products.”*

### Situation
In 2023, my team was tasked with launching **ML‑as‑a‑Service (MLaaS)** for the Office suite. Stakeholders demanded 50 % faster model deployment and 30 % lower cost per inference.

### Task
I owned the roadmap, scoped features, and coordinated cross‑functional squads—data scientists, infra engineers, and UX designers—to deliver a scalable, user‑friendly platform.

### Action
1. **Requirements & Design**  
   - Built an API gateway using *AWS API Gateway* + *Lambda* for inference calls.  
   - Adopted *SageMaker Pipelines* (or Azure ML) for CI/CD of models.  
   - Implemented a cost‑allocation layer with *AWS Cost Explorer* dashboards to track per‑model spend.

2. **Scalability & Availability**  
   - Auto‑scaling behind *Elastic Load Balancer* ensured 99.95 % uptime during peak usage.  
   - Leveraged *Spot Instances* for training jobs, cutting GPU cost by 35 %.

3. **Bias for Action & Deliver Results**  
   - Launched a pilot in two regions within 6 weeks; achieved 45 % faster deployment and cut inference cost by 28 %.  
   - Rolled out globally after iterative feedback loops.

### Result
The platform now supports over 200 internal teams, reducing model turnaround from days to hours. Monthly spend dropped from $1.2M to $0.9M while maintaining SLA compliance.

**Bar‑raiser cues:** clear ownership, depth in architectural trade‑offs (cost vs latency), quantifiable impact, and lessons learned—e.g., early adoption of Spot Instances required robust checkpointing mechanisms.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
