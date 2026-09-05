---
qid: ing_98ad05d6a6__star__local
question: When do you put a queue in front of LLM work, and what does that architecture
  look like?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 282
total_tokens: 528
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:37:51-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup we had a live chatbot that answered user queries using an on‑premise LLM. During peak trading hours the model would sometimes time out, causing a spike in customer complaints and SLA violations.

**Task** – I needed to guarantee sub‑200 ms response times while still allowing the LLM to process complex requests, without overprovisioning GPU resources.

**Action** – I introduced a lightweight message queue (Kafka) between the API gateway and the inference service. Each user request was serialized into a “job” with priority tags: high‑priority for time‑sensitive queries (e.g., balance checks) and normal for generative tasks. The queue fed to a pool of 4 GPU workers that fetched jobs in order, processed them, and streamed results back via WebSocket. I also implemented a fallback rule engine that answered the most common questions directly from a cache, bypassing the queue entirely.

**Result** – After deployment we saw a 70 % drop in timeout incidents, reduced average latency to 140 ms, and saved roughly 30 % on GPU usage costs. The exercise taught me how queuing can act as a graceful back‑pressure mechanism while keeping LLM workloads efficient and responsive.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
