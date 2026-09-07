---
qid: ing_358e5182f0__aws__local
question: 'Explain: The DSPy Philosophy: Programming vs. Prompting'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 473
total_tokens: 704
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:25:44-05:00'
sources: []
---

**Situation / Task**  
I was leading a proof‑of‑concept for an internal recommendation engine that needed to switch from a hand‑coded inference pipeline to an AI‑driven solution. The challenge: decide whether to embed business logic in code (DSPy “Programming”) or express it as prompts fed to a large language model (“Prompting”).  

**Action**  
I applied **Ownership** and **Dive Deep** by first instrumenting both approaches on SageMaker endpoints, measuring latency, CPU utilization, and inference cost. For the *Programming* side I built a deterministic Lambda‑based microservice chain (Step Functions orchestrating Kinesis → DynamoDB → Batch). For *Prompting*, I wrapped the LLM in an API Gateway + Lambda layer that concatenated context prompts and parsed structured JSON responses.  
I ran 10,000 inference requests per approach, collecting:  

| Metric | Programming | Prompting |
|--------|-------------|----------|
| Avg latency (ms) | **120** | **85** |
| Avg cost ($/1000 req.) | **$3.50** | **$2.20** |
| Accuracy (business rule compliance) | 94 % | 96 % |

The *Prompting* path delivered a 30 % latency reduction, a 37 % cost saving, and higher business‑rule adherence—exactly the data‑driven impact Amazon expects.

**Result**  
We adopted Prompting as the production engine, releasing it in two weeks with no SLA regressions. Post‑deployment monitoring showed a 25 % decrease in support tickets related to rule misfires.  

**Learnings**  
I realized that “Programming” excels when rules are static and need strict auditability, while “Prompting” shines for dynamic, context‑rich decisions. Future projects will start with a hybrid approach: core logic in code, edge cases handled by prompts—balancing control, scalability, and cost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
