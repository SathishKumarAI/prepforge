---
qid: ing_ed1cfd2fd4__star__local
question: Your app is getting 429s from your LLM provider at peak traffic. How do
  you handle rate limits properly?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 302
total_tokens: 551
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:23:00-05:00'
sources: []
---

**Situation:**  
At my last role I built a real‑time content‑generation feature for an e‑commerce platform that sent user prompts to an external LLM API. During holiday traffic spikes we started seeing a steady stream of HTTP 429 responses; the feature froze and our support tickets doubled.

**Task:**  
I needed to design a resilient system that respected the provider’s rate limits while keeping latency under 300 ms for 95 % of requests, and preventing a single user from exhausting the quota.

**Action:**  
1. Implemented a token‑bucket algorithm with a per‑user bucket size equal to the API’s daily allowance, stored in Redis for fast access.  
2. Added exponential backoff retries (max 3) with jitter to dampen burst traffic.  
3. Introduced a circuit breaker that temporarily bypassed the LLM and returned cached or fallback responses when error rate exceeded 5 %.  
4. Monitored queue depth via Prometheus; set alerts for bucket depletion thresholds.

**Result:**  
Post‑deployment, 429 rates dropped from 12% to <1%, while average latency stayed at 240 ms. User complaints fell by 70 %, and the new system scaled smoothly during peak events. I learned that combining rate‑limiting logic with observability and graceful degradation is key to handling external API constraints in production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
