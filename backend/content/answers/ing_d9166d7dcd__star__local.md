---
qid: ing_d9166d7dcd__star__local
question: 'Explain: Your agent''s prompt cache hit rate is 20% when you expected 90%.
  Walk me through the debugging.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 375
total_tokens: 625
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:42:57-05:00'
sources: []
---

**Situation:**  
I was working on a conversational AI product where we had built an in‑memory prompt cache to reduce LLM call latency. During load testing, the telemetry showed only a 20 % hit rate—far below our target of 90 %. The service was still functional but far slower than expected.

**Task:**  
Identify why the cache wasn’t being reused, fix the issue, and bring the hit rate back to the target while keeping response time under 200 ms.

**Action:**  
1. **Instrumentation review** – I added a detailed logger that captured cache keys, TTL expirations, and eviction events.  
2. **Key generation audit** – The key was built from `user_id + intent`. I discovered that minor variations in intent phrasing (e.g., “order pizza” vs. “pizza order”) produced different keys, so the same prompt never hit the cache.  
3. **Normalization step** – Implemented a lightweight NLP tokeniser to canonicalise intents before key creation.  
4. **TTL tuning** – The original 30‑second TTL was too short for peak traffic; I increased it to 5 minutes and added a least‑recently‑used eviction policy.  
5. **Unit tests & A/B test** – Re‑run the load test with the new logic, monitoring hit rate in real time.

**Result:**  
The cache hit rate jumped from 20 % to 92 %, cutting LLM call latency by ~70 %. Response times dropped from an average of 450 ms to 260 ms. I learned that subtle key‑generation bugs can cripple performance and that proactive logging is essential for rapid debugging in AI systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
