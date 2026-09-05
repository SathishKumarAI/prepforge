---
qid: ing_487ea4bc40__star__local
question: 'Explain: Asynchronous Request-Response - Enterprise Integration Patterns
  2'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 343
total_tokens: 582
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:53:28-05:00'
sources: []
---

**Situation:**  
At my last role I was tasked with adding a real‑time recommendation engine to our e‑commerce platform. The existing monolith sent every user click through a synchronous API that blocked the checkout flow for over 300 ms, pushing latency beyond SLA.

**Task:**  
I needed to decouple the ML inference service from the user request pipeline so that recommendations could be fetched asynchronously without delaying page loads, while still ensuring each session eventually received personalized suggestions.

**Action:**  
I introduced a “request‑response” integration pattern using Kafka. The web tier published a lightweight event (`recommendation_request`) containing the user ID and cart snapshot to a topic. A dedicated consumer service subscribed to that topic, ran the ML model locally, and produced a `recommendation_response` back onto another topic keyed by session ID. On the front‑end I used long‑polling with WebSocket fallback to subscribe to the response topic; once a message arrived, it populated the UI via a REST endpoint. I also added a retry mechanism and dead‑letter queue for failed inferences.

**Result:**  
Latency on the checkout path dropped from 350 ms to <20 ms, improving conversion by 8%. The system now supports 200k concurrent users with zero blocking calls, and we reduced server CPU usage by 35% thanks to asynchronous processing. I learned how to balance eventual consistency with user experience using enterprise integration patterns.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
