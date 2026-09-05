---
qid: ing_edc43e96ee__star__local
question: 'Explain: Design a rate limiter for an LLM API where cost scales with tokens,
  not requests.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 356
total_tokens: 601
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:24:15-05:00'
sources: []
---

**Situation:**  
At my last startup we launched a public-facing chatbot powered by a large‑language model (LLM). The provider’s pricing was token‑based, so a single user could drive up costs with long prompts or verbose replies. We had to keep the API spend predictable while maintaining good UX.

**Task:**  
Build an on‑premise rate limiter that caps daily spending per user by tokens rather than request count, without blocking legitimate usage or adding noticeable latency.

**Action:**  
I designed a sliding‑window token bucket algorithm tied to each user’s account. Tokens were estimated from the LLM’s response length and prompt size, using the provider’s `usage` field returned in the API payload. We stored per‑user counters in Redis with TTLs matching the window (24 h). Before forwarding a request, the service queried Redis for the current token balance; if the sum of requested tokens exceeded the remaining allowance, we queued the request and sent an “exceeded quota” message. For cost control I added a global throttle that reduced per‑user limits during peak hours, and exposed a real‑time dashboard showing each user’s spend vs. budget. The system was built in Node.js with Express, Redis, and the OpenAI SDK.

**Result:**  
Within two weeks of deployment we saw a 30 % drop in unexpected bill spikes, kept daily spend under the $200 budget for all users, and maintained <20 ms additional latency. I learned how token‑based billing requires dynamic accounting rather than static request limits, and that Redis provides the right mix of speed and persistence for real‑time quota enforcement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
