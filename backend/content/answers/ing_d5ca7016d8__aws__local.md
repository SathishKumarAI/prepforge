---
qid: ing_d5ca7016d8__aws__local
question: How would you build a deterministic replay harness for agent evals, and
  what does it genuinely buy you?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 483
total_tokens: 723
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:22:53-05:00'
sources: []
---

**Situation & Task**  
When launching a new reinforcement‑learning agent at Amazon Robotics, I noticed that non‑deterministic environment seeds made it impossible to reproduce failures in production. The goal was to create a *deterministic replay harness* so we could pinpoint root causes and guarantee 99.9 % regression coverage.

**Action**  
1. **Capture State** – Each episode’s observations, actions, RNG seeds, and external API calls were logged to S3 with versioned keys.  
2. **Replay Service** – A stateless Lambda orchestrated by Step Functions replayed episodes by feeding the exact seed stream back into the same simulation engine (OpenAI‑Gym + custom physics).  
3. **Result Comparison** – CloudWatch metrics stored agent outputs; a dedicated comparison microservice in ECS compared them against baseline logs and flagged divergences > 0.5 %.  
4. **Feedback Loop** – A DynamoDB table tracked “failed” episodes, automatically triggering an SNS alert to the QA team.

**Result**  
- Reduced debugging time from 3 days → 2 hours per failure (≈ 90 % faster).  
- Increased confidence in production rollouts; regression bugs dropped by 75 %.  
- Cost stayed under $0.02/episode due to serverless architecture and S3 lifecycle policies.

**Reflection**  
*Ownership*: I led cross‑functional design, wrote the specs, and owned post‑deployment monitoring.  
*Dive Deep*: By instrumenting RNG seeds and external calls, we uncovered a subtle physics bug that would have slipped into production otherwise.  
*Learning*: Initial attempts used in‑memory replay; shifting to S3 + Lambda gave us elasticity and avoided state drift.

**AWS Services Used** – S3 (object storage), Lambda & Step Functions (serverless orchestration), ECS (comparison service), CloudWatch, DynamoDB, SNS.  

This harness not only guarantees repeatable evaluation but also delivers measurable quality gains—exactly the impact Amazon looks for in a solutions architect.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
