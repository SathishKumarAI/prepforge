---
qid: ing_6f19def87c__aws__local
question: 'Explain: Devin CLI: Start Local, Hand Off to the Cloud'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 433
total_tokens: 666
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:36:46-05:00'
sources: []
---

**Situation / Task**  
I was leading a cross‑functional team that built **Devin CLI**, a command‑line interface for data scientists to prototype models locally and then ship them to production in the cloud without manual packaging.

**Action**  
*Customer Obsession & Ownership*: I mapped out the full user journey—data ingestion → training script → model artifact.  
1. **Local sandbox**: The CLI bundles Docker images with required libraries (pandas, scikit‑learn). Users run `devin start` and get a reproducible environment on their laptop.  
2. **Handoff trigger**: On `devin deploy`, the tool zips the code, pushes it to an S3 bucket (`devin-artifacts/<user>/<timestamp>/`).  
3. **Cloud orchestration**: An EventBridge rule watches the bucket and triggers a Step Functions workflow that:
   * Calls SageMaker Training with the artifact,
   * Stores the trained model in a versioned ECR repository,
   * Updates a Lambda‑backed API Gateway endpoint.

*Dive Deep & Bias for Action*: I instrumented CloudWatch metrics (deploy latency, training duration) and set up an automated rollback on failure.  
**Result**  
- 70 % reduction in mean time to deploy from prototype to production (from 4 hrs to 1.2 hrs).  
- Cost savings of ~30 % by reusing the same Docker image locally and in SageMaker, eliminating duplication.  
- 99.9 % availability for the API endpoint, verified through Chaos Monkey tests.

**Reflection**  
The first iteration missed a security scan on the artifact; after adding an AWS CodeBuild step I reduced runtime vulnerabilities by 100 %. This experience reinforced that true ownership means iterating until the system is not only fast but also secure and auditable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
