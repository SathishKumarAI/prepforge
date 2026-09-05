---
qid: ing_1891ebd949__star__local
question: 'Explain: Step 6: Request Routing — What is an API Gateway? - by Ashish
  Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 303
total_tokens: 551
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:17:56-05:00'
sources: []
---

**Situation**  
While leading a data‑science team for a fintech startup, we had to expose our recommendation engine as a microservice to mobile and web clients. The internal team was building the ML model in Python, but the front‑end developers complained that each new endpoint required separate authentication logic and rate limiting.

**Task**  
I needed to centralize request handling so that all client calls went through a single entry point, enforce security policies, perform versioning, and collect metrics without touching the ML code.

**Action**  
I introduced an API Gateway using Kong. First, I defined service routes for each model endpoint (e.g., `/v1/recommend`). Then I added plugins: JWT authentication for OAuth tokens, rate‑limit to cap 5 000 requests per minute, and request transformation to map incoming JSON to the Python Flask app’s expected payload format. Finally, I set up Prometheus metrics on the gateway so we could monitor latency and error rates in real time.

**Result**  
The gateway reduced client‑side boilerplate by 70 %, cut model deployment time from days to hours, and lowered the failure rate from 3 % to under 0.5 %. I learned that a well‑configured API Gateway is not just a traffic router—it’s an essential layer for security, observability, and developer productivity in ML pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
