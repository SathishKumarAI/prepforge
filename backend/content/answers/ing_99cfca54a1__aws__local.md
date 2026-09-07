---
qid: ing_99cfca54a1__aws__local
question: 'Explain: Continuous Integration (CI) — CI/CD Simplified Visual Guide'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 518
total_tokens: 752
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:13:28-05:00'
sources: []
---

**Customer Obsession & Ownership**

*Situation:* In my last role I led a data‑science team that built an ML pipeline for real‑time fraud detection. Our model drifted 12 % per month, hurting confidence scores and causing false positives.

*Task:* I had to build a **CI/CD system** that would automate training, validation, deployment, and rollback—so every change was vetted against production traffic before it could impact users.

*Action:*  
1. **Source & Artifact Management:** Stored code in *AWS CodeCommit*; used *S3* for model artifacts.  
2. **Continuous Integration (CI):** Triggered *AWS CodeBuild* on every push, running unit tests + a **unit‑of‑performance test** that scored the new model against a 1 M sample of historic data. If the score dropped > 0.5 % or latency exceeded 200 ms, the build failed.  
3. **Continuous Delivery (CD):** On success, CodePipeline deployed the artifact to *Amazon SageMaker Endpoint* via blue/green traffic shifting (using *AWS Lambda* + *Elastic Load Balancer*)—allowing a 10 % live test before full cut‑over.  
4. **Observability:** Integrated *CloudWatch* metrics and *X-Ray* tracing for latency, error rate, and drift. If any metric exceeded thresholds, an automatic rollback to the previous endpoint was triggered.

*Result:* Deployment time dropped from 3 days to < 30 minutes; model drift was caught before affecting production, reducing false positives by **18 %** and saving ~$120k in transaction costs annually.

---

### What a bar‑raiser looks for

| Criterion | Why it matters |
|-----------|----------------|
| **Ownership** | Did the candidate take end‑to‑end responsibility? |
| **Dive Deep** | Are they fluent with AWS services, latency budgets, cost trade‑offs? |
| **Quantified Impact** | Does the story show clear metrics (e.g., 18 % reduction)? |
| **Learning from Failure** | How did they iterate on failed builds or rollbacks? |

By tying concrete metrics to Amazon’s leadership principles and showing depth in AWS tooling, I demonstrate both technical rigor and customer‑centric ownership.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
