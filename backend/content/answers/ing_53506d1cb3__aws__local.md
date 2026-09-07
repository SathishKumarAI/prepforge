---
qid: ing_53506d1cb3__aws__local
question: 'Explain: Week 3: Story Bank and Mocks — Cursor Software Engineer Interview:
  Process, Questions, and Prep Guide (2026) | Interview Coder'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 567
total_tokens: 819
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:33:16-05:00'
sources: []
---

**Story Bank & Mocks – Week 3 (Machine‑Learning Focus)**  

> *“I built a reusable test harness for our recommendation engine that cut feature‑validation time from 4 days to 1 day.”*  

### Behavioral (STAR)  
- **S**: Our ML pipeline had two production releases per month; any regression in the bias‑mitigation module delayed launch.  
- **T**: Lead a cross‑functional effort to create a story bank of edge cases and a mocking framework for data pipelines.  
- **A**: Designed a domain‑specific language (DSL) that lets product managers write *feature stories* (e.g., “user A from region X should not see ad Y”). Built mocks using **AWS Step Functions + Lambda** to simulate streaming events, and integrated with **SageMaker Pipelines** for end‑to‑end CI.  
- **R**: Reduced test cycle time by **75 %**, decreased regression incidents by 60 %, and saved ~$120K in compute hours annually.  

### Technical/System  
1. **Requirements** – Fast, repeatable validation of feature flag logic across multiple ML models; low‑latency mocks for streaming data.  
2. **Design** –  
   - **Story Bank**: JSON schema + UI (React) to author stories → stored in DynamoDB.  
   - **Mock Service**: Lambda functions that read a story, synthesize input tensors, and invoke SageMaker endpoints; results written back to S3 for audit.  
3. **AWS Services** – Step Functions orchestrate the flow, Secrets Manager stores API keys, CloudWatch logs enable observability.  
4. **Scalability / Availability** – Serverless architecture scales automatically with request volume; Lambda concurrency limits protect downstream SageMaker endpoints.  
5. **Cost & Trade‑offs** – Using Lambda keeps idle cost near zero versus EC2; trade‑off is a 30 ms cold‑start latency, mitigated by keeping the function warm via scheduled events.

### Bar‑raiser Lens  
- **Ownership**: Took full responsibility for both design and delivery across teams.  
- **Dive Deep**: Quantified impact (75 % time reduction) and traced root causes of regressions.  
- **Learned from Failure**: Initial prototype failed to handle schema drift; introduced automated validation against the story bank, preventing future bugs.

*Result:* A production‑ready, reusable test harness that empowered rapid ML experimentation while maintaining rigorous quality control.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
