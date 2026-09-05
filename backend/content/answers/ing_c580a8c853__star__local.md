---
qid: ing_c580a8c853__star__local
question: 'Explain: Informational responses — HTTP response status codes - HTTP |
  MDN'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 315
total_tokens: 556
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:05:03-05:00'
sources: []
---

**Situation**  
In a micro‑services architecture for an e‑commerce platform, our inventory service was hit with high traffic during flash sales. We noticed the API gateway returning *100 Continue* responses but clients were timing out because the server never sent the final status code.

**Task**  
I had to redesign the request handling flow so that the gateway correctly uses informational 1xx codes, ensuring clients receive immediate acknowledgement without losing the actual response payload and without adding latency.

**Action**  
First, I audited our HTTP stack in Nginx and Spring Boot. I enabled `sendfile` optimization and set `proxy_intercept_errors on;` to let the gateway forward the final status code directly. Then, I implemented a lightweight middleware that intercepts *100 Continue* requests, writes an immediate 1xx response, and streams the request body asynchronously to the inventory service using non‑blocking I/O (Project Reactor). Finally, I added monitoring alerts for any 1xx responses not followed by 2xx/3xx within 200 ms.

**Result**  
Post‑deployment, flash sale traffic handled a 30% increase with client timeouts dropping from 12 % to <1 %. The overall response latency improved by 18 ms on average. I learned that correctly using informational responses can reduce perceived wait times and improve system resilience under load.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
