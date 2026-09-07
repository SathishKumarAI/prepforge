---
qid: ing_c9246982ab__aws__local
question: 'Explain: For QAs: Your New Superpower — Ai Evals Comprehensive Study Guide'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 495
total_tokens: 731
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:56:27-05:00'
sources: []
---

**Scenario (S)**  
While leading the QA team for a global e‑commerce platform, I noticed that regression testing lagged behind feature velocity—each release took ~3 days to validate and we still saw a 12% defect leakage rate.

**Task (T)**  
I was tasked with turning QA into a *real-time AI‑powered evaluation engine* so that every commit could be automatically assessed for correctness, performance, and security before it hit staging.

**Action (A)**  

1. **Requirements & Design** – Defined the scope: unit‑level coverage, API latency, data integrity, and OWASP compliance.  
2. **AWS Services** –  
   * **CodeBuild + CodePipeline** for CI/CD triggers.  
   * **Amazon SageMaker** to host a custom model that predicts defect likelihood from code diffs (trained on 1 M past commits).  
   * **Amazon CloudWatch & EventBridge** to surface alerts in Slack and Jira.  
   * **AWS Lambda** to orchestrate the evaluation workflow, keeping stateful checks stateless for scalability.  
3. **Metrics & Scaling** – Designed horizontal autoscaling (10–1000 parallel evaluations) with spot‑instance-backed SageMaker endpoints to cap cost at <$0.02 per eval.  
4. **Bias for Action** – Rolled out in a blue/green fashion; the first 50 commits were evaluated automatically, with no manual QA needed.

**Result (R)**  

*Reduced manual test cycle from 3 days to <12 hours.*  
*Defect leakage dropped from 12% to 2.4% within two weeks.*  
*Cost per eval stayed below $0.01, saving ~$15k/month on QA labor.*

---

### Leadership Principles Highlighted
- **Customer Obsession** – Faster, higher‑quality releases directly improve shopper experience.  
- **Ownership & Dive Deep** – I owned the entire pipeline, from data labeling to model retraining, and dove deep into performance bottlenecks.

*Bar‑raiser signals:* ownership of cross‑team impact, depth in design trade‑offs, quantifiable improvement, and continuous learning (retraining the model after each release).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
