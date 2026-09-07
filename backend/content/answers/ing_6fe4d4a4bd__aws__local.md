---
qid: ing_6fe4d4a4bd__aws__local
question: 'Explain: Arbitrary Rule 1: “A microservice should have X lines of code”'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 422
total_tokens: 661
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:38:02-05:00'
sources: []
---

**Situation / Task**  
I was leading a migration of our on‑prem recommendation engine into an event‑driven microservice architecture on AWS. The team had a blanket rule: *“A microservice must not exceed 1 000 lines of code (LOC)”* to keep services lightweight and testable. I needed to assess whether this rule actually delivered value or simply added friction.

**Action**  
I performed a **dive deep** audit across the current service stack, using CloudWatch metrics and SonarQube reports. The key findings were:

| Service | LOC | Deployment frequency | Mean time to recovery (MTTR) |
|---------|-----|----------------------|------------------------------|
| Recommendation‑Engine v1 | 2 300 | 3/day | 45 min |
| Recommendation‑Engine v2 | 950 | 6/day | 12 min |

I proposed a **data‑driven approach**: instead of hard LOC limits, we set *“code complexity thresholds”* (cyclomatic complexity < 10 per module) and enforce *“one responsibility per service”* via AWS Lambda with API Gateway. I also introduced **AWS CodeBuild/CodeDeploy pipelines** for faster rollouts.

**Result**  
After refactoring to the new guidelines:

- Deployment frequency doubled, MTTR dropped from 45 min to 12 min.
- CloudWatch alarms showed a 30 % reduction in latency incidents.
- Cost savings of ~$15k/month due to fewer Lambda invocations and smaller container images.

**Reflection**  
The rule was too rigid; it penalized teams for legitimate business logic while offering no measurable benefit. By focusing on **Ownership**, **Dive Deep**, and **Bias for Action**, we replaced a one‑size‑fits‑all constraint with metrics that actually drive reliability and cost efficiency—exactly the kind of outcome Amazon values.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
