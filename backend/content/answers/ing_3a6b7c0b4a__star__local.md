---
qid: ing_3a6b7c0b4a__star__local
question: 'Q: How do you evaluate an agent when the environment is non-deterministic
  (e.g., the web)?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 347
total_tokens: 595
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:25:33-05:00'
sources: []
---

**Situation:**  
At my last role I was tasked with building a chatbot that could schedule meetings across Google Calendar, Outlook, and a custom in‑house system—all of which had flaky APIs and rate limits. The user traffic spiked during holiday season, so the bot had to handle thousands of concurrent requests while still delivering accurate schedules.

**Task:**  
I needed to evaluate the agent’s performance in this non‑deterministic environment: ensuring it could reliably find free slots, recover from transient failures, and keep latency below 300 ms per request.

**Action:**  
First I instrumented each API call with a retry policy using exponential backoff plus circuit breakers. I logged every request/response pair to a Kafka stream for real‑time analytics. Then I defined a set of *confidence metrics*—the probability that the chosen slot was still free after 5 minutes, and the “success ratio” (slot found vs. slot not found). Using these logs I built an online A/B test harness in Go, sampling new scheduling strategies against the baseline. For evaluation I ran Monte‑Carlo simulations of 10,000 random user scenarios, feeding them through both agents to compute expected latency and failure rates.

**Result:**  
The new agent reduced average latency from 350 ms to 240 ms (30% improvement) and increased success ratio from 84% to 92%. The confidence metric dropped the number of “ghost” meetings by 70%. I learned that in non‑deterministic settings, you need continuous telemetry, statistical confidence measures, and live experimentation rather than static unit tests alone.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
