---
qid: ing_f061190ada__aws__local
question: 'Explain: Portfolio moves — Qa Sdet Engineer'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 425
total_tokens: 653
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:20:33-05:00'
sources: []
---

**Scenario (S)**  
At a fintech startup I led the migration of our legacy test suite from on‑prem Jenkins to an automated, cloud‑native pipeline that supported quarterly “portfolio moves” (re‑hosting of production workloads). The goal was to reduce downtime and manual effort while ensuring every change passed regression tests before deployment.

**Task (T)**  
I had to design a CI/CD system that could run 1 200+ test cases nightly, surface flaky failures in real time, and guarantee zero impact on live users during the portfolio move.

**Action (A)**  
- **Ownership & Dive Deep** – I mapped the entire testing workflow, identified bottlenecks (CPU‑bound Selenium tests), and benchmarked parallelism.  
- **AWS services**:  
  - *CodePipeline* orchestrated the stages.  
  - *CodeBuild* with Docker images spun up 50 parallel containers per build, leveraging *EC2 Spot Instances* for cost control.  
  - *S3* stored test artifacts; *CloudWatch* and *X-Ray* provided telemetry.  
- Implemented **test‑driven data seeding** (DynamoDB Local + Parameter Store) to isolate environments.  
- Added a **flaky‑detector** that reran suspect tests up to three times, flagging failures only if they persisted.

**Result (R)**  
- Cut portfolio‑move cycle time from 72 h to **12 h** (≈83 % reduction).  
- Reduced manual test effort by **70 %**, freeing engineers for feature work.  
- Achieved **99.9 % availability** during moves; zero production incidents.  
- Saved ~$15K/month in infrastructure costs via Spot Instances.

*Bar‑raiser notes:* I demonstrated full ownership, deep technical insight (parallelism, cost‑optimization), quantified impact, and iterated on failure data to refine the pipeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
