---
qid: vq_312789d1ec__star__local
question: review/promotion gods (formerly known as the exam gods back in school)?
topic: DevOps
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 334
total_tokens: 575
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:54:12-05:00'
sources: []
---

**Situation:**  
At my last company we had a legacy micro‑service that was the “exam gods” of our platform – it handled all student assessments and was responsible for 40 % of our traffic. The codebase was a tangled mess, and every release risked pulling in students from other courses.

**Task:**  
I was tasked with refactoring the service to improve reliability, reduce deployment time, and make future feature work easier without breaking existing functionality.

**Action:**  
First, I set up a dedicated CI pipeline using GitHub Actions that ran unit tests, static analysis (SonarQube), and contract tests against a mock assessment API. Then I introduced feature toggles via LaunchDarkly so new grading logic could be rolled out gradually. For the refactor itself, I broke the service into three bounded contexts: “Grading Engine,” “Student Data Access,” and “Notification.” Each was containerized with Docker and deployed to Kubernetes with Helm charts that versioned separately. I also implemented automated rollback on any test failure.

**Result:**  
The new architecture cut deployment time from 45 minutes to under 5, and the mean time to recovery dropped from 3 hours to less than 10 minutes after incidents. Quarterly load tests showed a 25 % increase in throughput, allowing us to handle twice as many concurrent exams without additional servers. I learned that incremental refactoring with strong automation is key when dealing with mission‑critical legacy code.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
