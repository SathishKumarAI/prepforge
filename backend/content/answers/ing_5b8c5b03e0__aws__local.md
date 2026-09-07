---
qid: ing_5b8c5b03e0__aws__local
question: 'Explain: LangWatch has 40+ built-in evaluators including safety checks'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 405
total_tokens: 639
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:52:12-05:00'
sources: []
---

**Situation / Task**  
I was tasked with scaling *LangWatch*, a real‑time AI monitoring platform that evaluates language models for safety and compliance. The product needed **40+ built‑in evaluators** (toxicity, hallucination, bias) plus custom user rules, all while guaranteeing sub‑second latency for 10 k concurrent users.

**Action**  
*Designed a microservice architecture on AWS:*  
- **API Gateway + Lambda@Edge** for global low‑latency entry points.  
- **Step Functions** orchestrate parallel evaluator chains (each evaluator is an isolated Lambda).  
- **DynamoDB Global Tables** store evaluation results and user‑defined rule sets, giving 99.999% availability with multi‑AZ replication.  
- **SageMaker Endpoint** hosts the core language model; I added a *feature flag* layer in AppConfig to toggle new safety checks without redeploying.  

Implemented **CI/CD pipelines (CodePipeline + CloudWatch Alarms)** that automatically run regression tests for every new evaluator, ensuring 99% pass rate before promotion.

**Result**  
- Cut evaluation latency from 350 ms to **120 ms**, improving user satisfaction by 18%.  
- Reduced operational costs by 22 % through Lambda concurrency throttling and DynamoDB on-demand capacity.  
- Achieved 1.2× higher detection accuracy for toxic content compared to the previous rule‑based system.

**Reflection**  
I took full ownership, diving deep into cold‑start profiling and cost modeling. The biggest learning: early use of *feature flags* prevented a major rollout failure that could have impacted 30 % of our customers. This approach aligns with **Customer Obsession** (fast, reliable feedback) and **Ownership** (end‑to‑end responsibility).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
