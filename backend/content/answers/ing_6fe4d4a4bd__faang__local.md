---
qid: ing_6fe4d4a4bd__faang__local
question: 'Explain: Arbitrary Rule 1: “A microservice should have X lines of code”'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 445
total_tokens: 687
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:03:12-05:00'
sources: []
---

**Clarify**  
The interviewer is asking why a rule that fixes the maximum lines of code (LOC) for a microservice—“Arbitrary Rule 1: A microservice should have X LOC”—is misguided. I’ll assume they want an explanation grounded in software architecture, maintainability, and ML deployment practices.

**Approach**  
1. State what LOC implies about size.  
2. Contrast LOC with logical complexity (functions, classes, dependencies).  
3. Explain why ML pipelines differ from conventional services.  
4. Summarize the risks of a hard limit.

**Depth**  
- **LOC is an *amateur metric***: two 100‑LOC modules can vary wildly in cognitive load; code quality, test coverage, and coupling matter more.  
- **Microservices thrive on bounded responsibility**, not bounded lines. A small, focused service may span only a few files but contain heavy ML logic (preprocessing, model inference) that naturally grows beyond arbitrary limits.  
- **ML models themselves are data‑heavy**; the “code” that loads and serves them can be minimal while the underlying artifact is huge. Imposing LOC constraints forces unnecessary refactoring or fragmentation of related concerns.  
- **Deployment & CI/CD pipelines**: Splitting a model into multiple microservices to satisfy an LOC rule complicates versioning, data consistency, and latency.  

**Edge Cases**  
- Very simple “utility” services (e.g., health‑check) might benefit from small LOC for quick reviews.  
- Legacy systems with tight regulatory constraints may need explicit size limits for auditability.

**Optimize & Communicate**  
I’d propose *functionality‑based* boundaries: each microservice should encapsulate a single business capability, expose clear APIs, and have independent deployment pipelines. Use automated metrics (cyclomatic complexity, test coverage) to enforce quality instead of raw LOC. In conversation, I’d emphasize that ML workloads naturally defy rigid code‑size rules and that flexibility leads to more robust, maintainable systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
