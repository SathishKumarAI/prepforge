---
qid: ing_a3ba19304a__star__local
question: You want to change your agent's system prompt. How do you ship it without
  finding out from customers that you broke something?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 329
total_tokens: 579
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:00:43-05:00'
sources: []
---

**Situation**  
In my last role I was responsible for a conversational AI platform used by over 50,000 daily active users in the financial services space. Our engineering team identified that updating the system prompt would improve intent recognition from 78 % to above 90 %, but we couldn’t afford any downtime or obvious regression for our customers.

**Task**  
I had to roll out a new system prompt while ensuring zero visible impact on user experience and no alerting of internal QA failures.

**Action**  
1. Created an A/B test harness that injected the updated prompt into 5 % of traffic using feature flags in LaunchDarkly, so we could monitor performance in real time.  
2. Built a lightweight “shadow” inference pipeline that ran the new prompt locally on each request but only logged the response without returning it to users.  
3. Integrated automated unit tests and a synthetic data pipeline (using OpenAI’s fine‑tuned models) to validate intent scores against ground truth before any traffic hit production.  
4. Added a canary rollback script that would instantly revert the flag if latency spiked above 30 ms or error rates exceeded 0.5 %.  

**Result**  
The rollout increased overall intent accuracy from 78 % to 92 % within three days, with no reported incidents and zero impact on user metrics. I learned that coupling feature flags with shadow inference and synthetic validation is a robust way to ship changes invisibly in AI systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
