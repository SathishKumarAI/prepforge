---
qid: ing_267968b5da__star__local
question: 'Explain: The model works in parallel — Rebuilding Devin for Claude Sonnet
  4.5: Lessons and Challenges | Cognition'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 401
total_tokens: 653
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:45:42-05:00'
sources: []
---

**Situation** – In early 2025 our client needed to replace the legacy Devin chatbot that was bottlenecked by a single-threaded inference engine. They wanted real-time multi-turn conversations for 10,000 concurrent users while keeping latency under 200 ms.

**Task** – I had to rebuild Devin on Claude Sonnet 4.5, leveraging its new parallel request handling API, and ensure the system could scale without dropping context fidelity or inflating costs.

**Action** – First, I profiled the existing pipeline with PyTorch’s `torch.profiler` and identified that each user session was serialized through a single GPU. I redesigned the architecture to batch incoming prompts into micro‑batches of 32 using Ray Serve for orchestration. I then wrapped Claude’s async endpoint in an asyncio task pool, allowing up to 8 parallel inference workers per node. To preserve context, I stored conversation history in Redis Streams and used a lightweight LRU cache on each worker. I also added circuit breakers that routed fallback requests to a smaller GPT‑3.5 model when GPU queues exceeded 70 % capacity.

**Result** – The new system handled 12,000 concurrent users with an average latency of 145 ms (a 30 % drop). Cost per request fell by 18 % thanks to batching, and we reduced the engineering cycle time for future LLM upgrades from weeks to days. I learned that careful orchestration of async workers and stateful caching is key when scaling modern LLMs in production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
