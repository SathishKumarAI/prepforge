---
qid: ing_59a80e8a75__star__local
question: 'Explain: Explanation Caching — Recommendation Engine'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 380
total_tokens: 613
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:27:09-05:00'
sources: []
---

**Situation:**  
In my last role at a streaming platform, the recommendation engine was generating personalized movie suggestions in real time for over 2 million users daily. Each request required running a complex graph‑neural network that produced not only a score but also an explanation vector highlighting why a film was relevant (genre match, actor similarity, watch history). The latency hit our SLA—average response time rose from 120 ms to 280 ms during peak hours.

**Task:**  
I needed to reduce the per‑request compute cost and lower latency without sacrificing explainability or accuracy. The goal was a sub‑200 ms response for 99 % of requests while still delivering meaningful explanations to users.

**Action:**  
I introduced an *explanation caching* layer. First, I profiled user sessions to identify recurring explanation patterns (e.g., “Because you liked sci‑fi thrillers”). I built a Redis cluster keyed by user segment and content tag combinations, storing pre‑computed explanation vectors along with their associated recommendation scores. During inference, the engine checks the cache; if a hit occurs, it retrieves the vector instantly; otherwise, it runs the full model and writes back to cache for future hits. To keep freshness, I set TTLs based on user churn rates and implemented an LRU eviction policy tuned to our memory budget.

**Result:**  
Cache hit rate climbed from 0 % to 78 %, slashing average latency to 145 ms and keeping it below 200 ms for 99.7 % of traffic. Accuracy drift was under 0.3 %. I learned that marrying domain‑specific explainability with a lightweight cache can yield dramatic performance gains without compromising user trust in AI recommendations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
