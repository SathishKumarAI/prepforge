---
qid: ing_7e9a0a850d__star__local
question: 'Explain: Planning patterns — Agents And Tool Use'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 296
total_tokens: 530
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:46:54-05:00'
sources: []
---

**Situation**  
When I joined a fintech startup, our fraud‑detection model lagged behind real‑time transaction streams; the latency was 2 s per event, causing missed alerts during peak hours.

**Task**  
I needed to redesign the processing pipeline so that each transaction could be evaluated in under 500 ms while still leveraging external risk‑score APIs without blocking the main thread.

**Action**  
I architected a micro‑service agent pattern: a lightweight “Transaction Agent” spun up per batch, orchestrating calls to three external tools (AML API, ML model inference, and a rule engine). Using a message‑queue broker (Kafka) I decoupled agents from the ingestion stream. Each agent ran in a container with async HTTP clients (aiohttp) and cached repeated lookups via Redis. If an API call timed out, the agent fell back to a locally stored baseline score. The orchestration logic was written in Python, leveraging FastAPI for service discovery.

**Result**  
Latency dropped from 2 s to 350 ms on average, increasing alert coverage by 18 % during fraud spikes. I learned that treating external services as first‑class tools and delegating coordination to stateless agents can dramatically improve scalability and resilience in AI pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
