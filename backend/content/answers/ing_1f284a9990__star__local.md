---
qid: ing_1f284a9990__star__local
question: 'Explain: Do Not Treat IP as Identity — IP Address | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 322
total_tokens: 562
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:31:40-05:00'
sources: []
---

**Situation:**  
While building a real‑time fraud detection service for an e‑commerce platform, our analytics pipeline was flagging every new user as “unknown” because we were matching on the raw IP address to identify repeat offenders.

**Task:**  
I had to redesign the identification logic so that legitimate users could be recognized across devices and networks, while still allowing the system to spot suspicious activity without relying solely on an IP as a unique key.

**Action:**  
I introduced a hybrid identifier: a hashed customer token stored in a signed JWT for logged‑in users, combined with a device fingerprint derived from user agent, screen resolution, and canvas rendering. For anonymous traffic, we generated a temporary session ID persisted in local storage and correlated it with the IP for one hour. We also set up a sliding window cache (Redis) to aggregate events per token/IP pair, applying rate limits and anomaly thresholds. The pipeline was updated to emit structured logs with both identifiers so that downstream ML models could learn patterns across multiple contexts.

**Result:**  
The new scheme reduced false positives by 35%, improved user retention by 12% during high‑traffic sales periods, and cut the number of manual investigations by half. I learned that treating IP as a mutable identity can cripple scalability; instead, combine it with persistent tokens and device context for robust, privacy‑respecting identification.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
