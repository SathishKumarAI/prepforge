---
qid: ing_2db5fde30c__aws__local
question: 'Q51: Your agent takes 47 LLM calls to complete a task that should take
  5. How do you debug this?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 429
total_tokens: 675
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:08:36-05:00'
sources: []
---

**Situation / Task**  
I was leading a serverless chatbot that uses GPT‑4 via the OpenAI API to answer customer support tickets. In production I noticed an anomaly: a single user request triggered **47 LLM calls** instead of the expected 5, inflating latency from 1 s to 20 s and increasing cost by ~3×.

**Action (Dive Deep + Bias for Action)**  
1. **Instrumentation** – Added CloudWatch metrics per Lambda invocation (`llm_calls`, `prompt_length`) and enabled X‑Ray tracing on the OpenAI SDK wrapper.  
2. **Root‑cause analysis** – Traced the call stack: a recursive prompt loop was triggered when the model returned a “continue” token that our policy didn’t filter.  
3. **Fix** – Updated the policy to detect `CONTINUE` markers, capped recursion depth at 5, and added exponential back‑off for retries.  
4. **Testing** – Ran a canary on a separate CloudWatch dashboard; latency dropped to <2 s and calls stayed ≤5 per request.

**Result (Deliver Results)**  
- Reduced average cost from $0.04 to $0.01 per ticket (≈75% savings).  
- Improved SLA from 95% <3 s to >99% <1.5 s.  
- Documented the incident in an internal post‑mortem and added a new guardrail for prompt validation.

**Bar‑raiser cues I addressed**  
- **Ownership**: Took full responsibility, owned the entire debugging cycle, and updated documentation.  
- **Dive Deep**: Leveraged X‑Ray traces and CloudWatch logs to pinpoint the recursive loop.  
- **Quantified Impact**: Provided concrete cost and latency metrics.  
- **Learning from Failure**: Added a policy and monitoring rule that prevents recurrence of this pattern.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
