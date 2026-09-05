---
qid: ing_b5e2544f99__star__local
question: 'Q16: How do you handle long-running agent tasks?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 314
total_tokens: 551
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:35:03-05:00'
sources: []
---

**Situation:** In my last role, we built a conversational agent for an e‑commerce platform that had to process complex customer queries—like multi‑step returns or custom orders—within a 30 second SLA. During load testing, the agent’s background inference jobs started taking minutes, causing timeouts and a spike in abandoned carts.

**Task:** I needed to redesign the task pipeline so every long‑running operation stayed within the SLA while still delivering accurate results.

**Action:** First, I profiled the inference graph with TensorBoard and identified that batch‑processing of intent recognition was the bottleneck. I switched from a monolithic model to a microservice architecture: lightweight NLU services handled quick intent extraction, whereas heavy downstream tasks (e.g., policy lookup, external API calls) ran asynchronously on a Celery queue backed by Redis. I introduced a timeout guard that returned a “processing” response and pushed the user to a follow‑up webhook once the job completed. For state persistence, we used DynamoDB to store partial results, allowing users to resume if they left mid‑conversation.

**Result:** The average end‑to‑end latency dropped from 4 minutes to under 8 seconds for most queries, keeping the SLA above 95%. Customer abandonment fell by 18%, and I learned that decoupling heavy logic into async workers with graceful degradation is key for scaling conversational AI.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
