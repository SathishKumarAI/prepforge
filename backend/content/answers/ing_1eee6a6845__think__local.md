---
qid: ing_1eee6a6845__think__local
question: How do you design fallbacks across multiple LLM providers?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 445
total_tokens: 635
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T04:44:53-05:00'
sources: []
---

**1️⃣ Clarify the goal & assumptions**  
   - *Goal:* Build a resilient system that can switch between LLMs (OpenAI, Anthropic, Cohere, etc.) when one fails or is sub‑optimal.  
   - *Assumptions:* You control API keys, latency budgets, cost limits, and have a single “fallback strategy” pipeline.

**2️⃣ Adopt a layered decision framework**  
   1. **Health checks** – periodic ping, latency, error rate.  
   2. **Policy layer** – priority list (primary → secondary), cost‑budget constraints, SLA thresholds.  
   3. **Execution layer** – send request to chosen LLM; if timeout/429/error → trigger fallback.

**3️⃣ Step‑by‑step reasoning**  
   - *Detect failure*: If response time > X ms or error code ≠ 200, mark provider as “unhealthy” for the session.  
   - *Select next provider*: Follow policy priority; optionally rotate among healthy providers to balance load.  
   - *Cache & retry*: Store last good prompt‑response pair to avoid duplicate calls when switching back.  
   - *Graceful degradation*: If all providers fail, return a generic “service unavailable” message or a pre‑generated fallback.

**4️⃣ Common traps**  
   - **Ignoring cost drift:** Switching providers can suddenly spike bills; enforce per‑request budget checks.  
   - **State leakage:** Fallback calls may use different token limits → overflow errors.  
   - **Cold start latency:** New provider may need warm‑up tokens; pre‑warm or set higher timeout.

**5️⃣ Sanity‑check & communicate**  
   - Run a unit test that simulates a primary failure and verifies the secondary is invoked.  
   - Log each fallback event with timestamp, provider used, reason for switch.  
   - Explain to stakeholders: “We monitor health, prioritize providers by cost/latency, and automatically retry on failures, ensuring high availability.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
