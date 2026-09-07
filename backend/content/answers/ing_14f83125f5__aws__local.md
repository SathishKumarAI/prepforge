---
qid: ing_14f83125f5__aws__local
question: 'Explain: Continuous Refactoring — 10 Good Coding Principles to Improve
  Code Quality'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 645
total_tokens: 880
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:12:34-05:00'
sources: []
---

**Situation (S)**  
At my previous role I led a team that maintained an ML inference service in production on **AWS SageMaker** and **EKS**. The code base had grown to > 50 k LOC, with frequent bugs and slow deployment cycles. Our customers were complaining about latency spikes during model roll‑outs.

**Task (T)**  
I was charged with refactoring the codebase to increase maintainability, reduce technical debt, and accelerate delivery without compromising reliability.

**Action (A)**  

| # | Principle | AWS Service / Tool | Why it matters |
|---|-----------|--------------------|----------------|
| 1 | **Single Responsibility** | *Lambda* for small utilities | Keeps functions testable in isolation. |
| 2 | **YAGNI (You Aren’t Gonna Need It)** | Avoid over‑engineering | Reduces unnecessary dependencies. |
| 3 | **DRY (Don’t Repeat Yourself)** | Shared library in *CodeCommit* | Cuts duplication, eases bug fixes. |
| 4 | **Explicit Interfaces** | OpenAPI contracts | Guarantees contract stability across services. |
| 5 | **Immutable Data Structures** | *pydantic* models | Prevents accidental side‑effects. |
| 6 | **Automated Tests (Unit + Integration)** | *pytest*, *SageMaker Pipelines* | Enables fast regression checks. |
| 7 | **Continuous Integration / Continuous Deployment (CI/CD)** | *CodePipeline*, *ECS* blue‑green | Guarantees that every commit passes tests before promotion. |
| 8 | **Observability** | *CloudWatch Logs & Metrics*, *X-Ray* | Allows quick root‑cause analysis post‑deployment. |
| 9 | **Performance Profiling** | *AWS X-Ray traces*, *Python cProfile* | Identifies bottlenecks early. |
|10 | **Documentation as Code** | *MkDocs* in repo | Keeps docs versioned with code. |

I rewrote the inference logic into stateless Lambda functions, moved shared utilities to a mono‑repo library, and set up a fully automated pipeline that runs unit tests, integration tests on a test cluster, and a canary deployment to ECS.  

**Result (R)**  
- Deployment time dropped from **45 min → 5 min**.  
- Production latency decreased by **23 %** during model roll‑outs.  
- Mean time to recover (MTTR) for bugs fell from **2 h → < 30 m**.  

**Bar‑raiser notes**: I demonstrated ownership by taking full responsibility for the refactor, dove deep into profiling data, quantified impact with clear metrics, and learned from an initial failure where a missing dependency caused a deployment break—prompting us to add automated dependency checks in CI.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
