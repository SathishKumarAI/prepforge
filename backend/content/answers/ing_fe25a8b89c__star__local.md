---
qid: ing_fe25a8b89c__star__local
question: 'Explain: Summary — Tools vs. Subagents: Building Effective AI Agents Without
  Over-Engineering'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 291
total_tokens: 534
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:57:06-05:00'
sources: []
---

**Situation:**  
At my previous company we launched a customer‑support chatbot that needed to handle product queries, order status, and returns. Early beta tests showed the model was accurate but lagged behind human agents by 2 seconds per interaction, hurting user satisfaction.

**Task:**  
I had to reduce latency while keeping the bot’s versatility intact—no heavy monolithic retraining or adding dozens of specialized models.

**Action:**  
I broke the system into *tools* (simple rule‑based APIs for order lookup, shipping calculation, return policy) and a *subagent* layer that orchestrated them. The main LLM acted as a dispatcher: it parsed user intent, then called the appropriate tool via a lightweight HTTP wrapper. I added a confidence threshold so the subagent could fall back to a fallback model only when needed. We used Docker for isolated tool containers and Redis streams to queue requests, keeping the core inference server idle most of the time.

**Result:**  
Latency dropped from 2 s to under 400 ms on average, boosting NPS from 68 to 84 in three weeks. I learned that modularizing with tools keeps complexity low, lets you scale components independently, and preserves a single source of truth for business logic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
