---
qid: ing_e21224253a__aws__local
question: 'Explain: The First Architectural Decision: Docker Before Kestra'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 406
total_tokens: 637
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:50:36-05:00'
sources: []
---

**Situation / Task**  
I was tasked with building a scalable ML pipeline for a fintech startup that had to ingest millions of transaction records nightly and train a fraud‑detection model within 48 hrs. The team needed a reproducible, containerized environment before adding orchestration.

**Action**  
1. **Docker first** – I containerised the data‑prep script, feature engine, and training notebook into a single image.  
2. **AWS ECS Fargate** hosted the container for zero‑maintenance compute, auto‑scaling on CPU usage.  
3. Once the Docker layer was stable, I introduced **Kestra** as the workflow orchestrator to schedule nightly jobs, manage dependencies, and trigger model retraining.  

Key design choices:  
- **ECS Fargate** → cost‑effective (pay per second), high availability (managed by AWS).  
- **S3** for immutable data lake; **DynamoDB** for job metadata.  
- **CloudWatch** + **X-Ray** for deep telemetry and quick root‑cause analysis.

**Result**  
- Reduced pipeline failure rate from 18 % to <2 %.  
- Cut total training time by 60 %, enabling a new model version every 24 hrs instead of 48.  
- Saved ~$3k/month in idle compute compared to on‑prem clusters.

**Learning & Bar‑raiser cues**  
I took full ownership, diving deep into container performance metrics and iterating until the image hit the 200 MB size target for faster spin‑up. I quantified impact with clear KPIs and documented lessons learned in a post‑mortem wiki, ensuring continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
