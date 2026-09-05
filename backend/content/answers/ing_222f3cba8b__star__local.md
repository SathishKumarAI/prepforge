---
qid: ing_222f3cba8b__star__local
question: 'Explain: Two-tier human confirmation — Computer Use Agent Production'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 304
total_tokens: 540
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:37:43-05:00'
sources: []
---

**Situation:**  
When I was leading the rollout of an AI‑driven customer support chatbot for a telecom client, we discovered that the bot’s confidence scores were sometimes misleading—especially on complex billing queries where the model’s probability thresholds hovered around 0.6.

**Task:**  
I had to design a safety layer that would catch potential misclassifications before they reached users, without crippling response speed or requiring constant human oversight.

**Action:**  
We implemented a two‑tier confirmation system. First, an automated “use agent” filtered out low‑confidence predictions and routed them to a lightweight rule engine that added contextual flags (e.g., keywords like “refund” or “overcharge”). Second, when the flag was triggered, the request entered a human review queue where senior support agents could approve or re‑route the conversation in under 15 seconds. We built this pipeline using Python FastAPI for the microservice layer and Kafka for event streaming, ensuring end‑to‑end latency stayed below 300 ms.

**Result:**  
The error rate on billing queries dropped from 8% to 0.9%, while overall chatbot handling time increased by only 12%. We also learned that combining statistical confidence with domain‑specific heuristics and a rapid human fallback dramatically boosts reliability in production AI systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
