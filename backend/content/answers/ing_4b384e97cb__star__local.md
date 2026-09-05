---
qid: ing_4b384e97cb__star__local
question: 'Explain: Non-Functional Requirements — Conversational Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 309
total_tokens: 544
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:58:45-05:00'
sources: []
---

**Situation** – While leading the launch of a customer‑support chatbot for a fintech startup, we noticed early feedback complaining that responses were slow and sometimes the bot would freeze during peak traffic.

**Task** – I was tasked with defining and implementing non‑functional requirements (NFRs) to ensure high availability, low latency, and robust error handling so users could get instant help 24/7 without frustration.

**Action** – First, I mapped out a SLA of <200 ms response time for 99.5% of requests using AWS Lambda with provisioned concurrency and a Redis cache for the most frequent intents. I introduced circuit‑breaker patterns in our intent‑routing layer to gracefully degrade when downstream NLP services lagged. For monitoring, I set up CloudWatch metrics tied to PagerDuty alerts on latency spikes or error rates >1%. Finally, I ran load tests with k6 to simulate 10k concurrent users and iterated the Lambda memory allocation until we hit our target.

**Result** – Post‑deployment, average response time dropped from 350 ms to 140 ms, uptime rose to 99.9%, and customer satisfaction scores improved by 18 points on NPS surveys. I learned that clear, measurable NFRs combined with proactive monitoring turn a good chatbot into a reliable product.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
