---
qid: ing_ea1d78e34a__star__local
question: 'Explain: Q: An agent called a broken tool 400 times in five minutes. Diagnose
  and design the fix.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 376
total_tokens: 624
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:16:34-05:00'
sources: []
---

**Situation:**  
At a fintech startup we had a reinforcement‑learning bot that was supposed to query our fraud‑detection API once per user session. During load testing it suddenly started hammering the “broken tool” endpoint 400 times in five minutes, exhausting the API quota and causing downstream timeouts.

**Task:**  
Identify why the agent was over‑calling the tool, isolate the root cause, and implement a fix that keeps calls within the allowed rate while preserving the bot’s decision quality.

**Action:**  
1. Instrumented the agent with OpenTelemetry to capture each call timestamp and context.  
2. Replayed a 5‑minute trace in a staging environment; discovered a missing `debounce` flag on the policy network, causing it to re‑evaluate after every reward signal instead of waiting for an external event.  
3. Added a rate‑limiting wrapper (Leaky Bucket) around the API client and modified the policy to set a `tool_cooldown` state variable.  
4. Wrote unit tests that simulate high‑frequency rewards and asserted calls ≤ 10 per minute.  
5. Deployed to staging, ran a synthetic load of 1000 users, verified call counts dropped from 400 to 8 in five minutes.

**Result:**  
The API usage fell by 98 %, restoring system stability and keeping latency under 50 ms. I learned that observability and stateful cooldowns are essential when coupling RL agents with external services, and I added a policy‑level guardrail to the framework for future agents.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
