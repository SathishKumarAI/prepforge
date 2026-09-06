---
qid: ing_2c1e67f191__think__local
question: 'Pair-programming: build a service that takes a user question, enriches
  it with data from a third-party API, and answers via a chat-model API. How do you
  structure it?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 216
output_tokens: 468
total_tokens: 684
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T05:35:10-05:00'
sources: []
---

**1️⃣ Clarify the problem & assumptions**  
   * What “enriches” means (e.g., fetch facts, stats, images).  
   * Which third‑party API(s) are available and their auth/limits.  
   * Which chat‑model API we’ll call (OpenAI, Anthropic, etc.).  
   * Desired latency, scalability, security constraints.

**2️⃣ Adopt a layered architecture**  
   * **API Gateway / Router** – receives the user query.  
   * **Enrichment Service** – orchestrates calls to external APIs, caches results.  
   * **Prompt‑Builder** – composes the final prompt (user text + enriched data).  
   * **Chat Model Client** – sends prompt, streams response back.  
   * **Error & Retry Layer** – graceful degradation if enrichment fails.

**3️⃣ Step‑by‑step reasoning**  
   1. User submits question → gateway validates auth, rate‑limits.  
   2. Enrichment service parses query for keywords → calls external API(s).  
   3. Aggregate responses; format into a concise context block.  
   4. Prompt‑builder injects user question + context into a prompt template.  
   5. Chat model client streams answer to the frontend.  
   6. Log request/response for monitoring.

**4️⃣ Common pitfalls to avoid**  
   * Over‑fetching from third‑party APIs → hit rate limits or slow response.  
   * Forgetting to sanitize external data before sending to LLM (security).  
   * Tight coupling between enrichment and prompt logic – hurts testability.  
   * Ignoring partial failures; the whole flow should still return a best‑effort answer.

**5️⃣ Sanity checks & communication**  
   * Run unit tests on each layer in isolation.  
   * Simulate latency spikes to verify graceful degradation.  
   * Explain the flow to teammates using a diagram: **User → Gateway → Enrichment ↔ Prompt Builder ↔ LLM → Response**.  
   * Iterate quickly with pair‑programming, refactor after each sprint.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
