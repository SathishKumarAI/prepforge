---
qid: ing_c47196314a__star__local
question: 'Explain: 1.4. Cacheable — What is REST?: REST API Tutorial'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 345
total_tokens: 588
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:02:41-05:00'
sources: []
---

**Situation:**  
At a mid‑size fintech startup, our mobile app was pulling user portfolio data from a backend that served both web and iOS clients. The API responded in under 300 ms for the first request but dropped to 2–3 seconds on repeat calls because the same data was being regenerated every time.

**Task:**  
I had to redesign the endpoint so it could be safely cached by browsers, CDNs, and mobile devices without compromising freshness of the financial data, which updates every minute.

**Action:**  
I first clarified what “cacheable” meant in a REST context: an HTTP resource that can be stored by intermediaries if its response headers guarantee immutability for a defined period. I then added `Cache-Control: public, max-age=60` to the `/portfolio` endpoint and implemented ETag generation based on a hash of the payload plus a timestamp. On each request I compared the incoming `If-None-Match` header; if it matched the current ETag I returned 304 Not Modified, letting the client use its cached copy. To keep data fresh, the server updated the ETag every minute when market data changed.

**Result:**  
Cache hits increased from ~15 % to over 85 %, cutting average response time for repeat calls from 2.5 s to <300 ms and reducing backend CPU usage by 40 %. I learned that proper use of HTTP caching headers is a lightweight, standards‑based way to scale REST APIs while keeping clients in sync with real‑time data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
