---
qid: ing_834c8c1ed3__star__local
question: 'Explain: Model-in-the-Middle (Proxy Security) — Agentic Security And Sandboxing'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 311
total_tokens: 554
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:55:59-05:00'
sources: []
---

**Situation:** At my last company we were launching a chatbot that used an external LLM service. Early tests showed the model sometimes generated sensitive content because it had access to user logs stored in our database.

**Task:** I was tasked with designing a secure architecture so the LLM could only see sanitized data, while still enabling real‑time response generation without compromising performance or developer experience.

**Action:** I implemented a Model‑in‑the‑Middle (MiM) proxy. The proxy intercepted every request to the LLM, stripped it of any PII and applied an agentic security policy that allowed the model to “ask for clarification” through a sandboxed dialogue loop. Internally we used Docker containers with a read‑only volume for user data and an API gateway that throttled outbound calls. The sandbox enforced a 500 ms execution window, preventing runaway prompts. I also added a logging layer that captured prompt–response pairs for audit without storing them.

**Result:** After deployment the model’s risk score dropped from 0.27 to 0.04, and we saw no policy violations in three months of production use. The latency increased by only 12 ms on average, keeping our SLA intact. I learned that combining a lightweight sandbox with an agentic prompt‑policy can secure LLM interactions while preserving user experience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
