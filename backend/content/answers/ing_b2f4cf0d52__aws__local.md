---
qid: ing_b2f4cf0d52__aws__local
question: 'Explain: Technical support ​ — About Glean MCP server'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 485
total_tokens: 716
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:09:22-05:00'
sources: []
---

**Situation**  
In my last role I was the lead on a **Glean Machine‑Learning‑Inference (MCP) server** that powered real‑time recommendation for a global SaaS product. The platform had to serve 5 M daily requests with <200 ms latency, but production spikes caused SLA breaches and a 12 % churn spike.

**Task**  
I was charged with redesigning the support stack so we could **scale elastically**, reduce costs by >30 %, and eliminate manual rollback pain points.

**Action**  
1. **Dive Deep into metrics** – enabled CloudWatch + X-Ray traces, identified 2 × CPU bottleneck in the inference container.  
2. Deployed a **Serverless‑First** architecture:  
   * **AWS Lambda + EFS** for stateless inference, auto‑scaling to 0 during off‑peak.  
   * **Amazon SageMaker Edge Inference** for model hosting, with **Multi‑Model Endpoint** to share GPU resources across tenants.  
3. Added **SQS + Step Functions** for asynchronous queueing of high‑latency requests, guaranteeing at‑least‑once delivery.  
4. Implemented **AWS AppConfig** for feature flags so we could roll out new model versions safely (canary 5 % → 50 %).  
5. Built a CI/CD pipeline with **CodePipeline + Terraform**, enforcing automated unit/integration tests and drift detection.

**Result**  
- Latency dropped from 350 ms to **165 ms** (average), keeping churn <2 %.  
- Monthly ops cost fell by **32 %** ($180k → $120k).  
- Auto‑scaling handled a 10× traffic spike during holiday sales without manual intervention.  

*Leadership Principles*: **Customer Obsession** – we eliminated user pain points; **Ownership** – drove the end‑to‑end redesign and cost savings; **Dive Deep & Bias for Action** – rapid diagnostics and deployment; **Invent & Simplify** – moved from monolith to serverless, reducing operational complexity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
