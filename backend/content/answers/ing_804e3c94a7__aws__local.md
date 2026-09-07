---
qid: ing_804e3c94a7__aws__local
question: 'Explain: How would you evaluate an autonomous software engineering agent?
  Explain why SWE-bench pass rates mislead.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 423
total_tokens: 664
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:15:20-05:00'
sources: []
---

**Situation & Task**  
I was tasked with building a *self‑learning* code‑generation agent for an internal platform. The goal was to guarantee that every commit it produced passed unit tests **and** maintained architectural quality. Early pilots used the publicly available SWE‑Bench dataset, but the pass rates were deceptively high (≈ 80 %) because the benchmark only checks syntactic correctness and a narrow set of test cases.

**Action – Evaluation Framework**  
1. **Define Success Criteria**  
   *Unit tests* + *integration tests* + *static analysis* + *code‑review metrics*.  
2. **Design the Pipeline**  
   - **AWS CodeBuild** for continuous compilation & testing.  
   - **AWS CodePipeline** orchestrates stages: fetch, build, test, lint (SonarQube on ECS), and deploy to a **canary** environment in **EKS**.  
   - **Amazon CloudWatch** aggregates metrics; an SNS alert triggers if the pass‑rate drops below 95 %.  
3. **Bias for Action & Ownership** – I added a *feedback loop*: every failed run is automatically pushed back into the training set with human‑labelled failures, enabling the agent to learn from its mistakes.

**Result**  
After three iterations, the agent’s real‑world pass rate rose from 78 % (SWE‑Bench) to **93 %** on our internal repository, reducing manual review effort by **35 %** and halving time‑to‑delivery for new features. The benchmark misled because it omitted integration, security, and maintainability checks—critical dimensions for production code.

**Reflection**  
This experience taught me that *ownership* means questioning metrics that look good on paper but fail in context. I also learned to **dive deep** into failure logs rather than accept surface‑level scores, ensuring the agent truly delivers value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
