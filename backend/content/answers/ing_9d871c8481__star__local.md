---
qid: ing_9d871c8481__star__local
question: 'Explain: Q87: Your production agent enters a runaway loop, calling a broken
  tool 400 times in five minutes. Walk through the architectural patterns that prevent
  this - at the orchestrator, the tool layer, and the cost-guard layer.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 274
output_tokens: 333
total_tokens: 607
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:47:13-05:00'
sources: []
---

**Situation**  
In a recent deployment of our customer‑support chatbot, we observed that an orchestration job was stuck in a runaway loop: the agent repeatedly called a sentiment‑analysis microservice about 400 times within five minutes, blowing up both compute costs and downstream latency.

**Task**  
I needed to halt the infinite calls immediately, prevent recurrence at all layers, and quantify the impact on system resources so that we could report a clear improvement in reliability and cost efficiency.

**Action**  
At the orchestrator I added a state‑machine guard: every agent state transition now checks a `maxRetries` counter (set to 5) and enforces exponential back‑off before re‑invoking the tool. In the tool layer, I wrapped the sentiment API with a circuit breaker that trips after three consecutive failures, returning a cached fallback response. Finally, at the cost‑guard level I introduced a per‑job budget in our cloud function’s IAM policy; if CPU time or API calls exceed $0.05, the job is automatically terminated and logged for alerting.

**Result**  
The runaway loop was stopped within seconds of deployment, cutting an estimated $12 in wasted compute that would have accrued over the next 24 hours. System reliability improved by 95% as measured by incident frequency, and I learned to layer safety nets—state checks, circuit breakers, and cost budgets—to guard against similar issues in future AI‑driven services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
