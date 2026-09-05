---
qid: ing_452a29225c__star__local
question: 'Explain: Pattern 1: Function/Tool Calling — Architecture Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 327
total_tokens: 565
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:47:14-05:00'
sources: []
---

**Situation:** At my previous company we were building a customer support chatbot that needed to pull real‑time inventory data from our legacy ERP system, but the API was rate‑limited and had strict authentication.

**Task:** I had to design an architecture that allowed the bot to request up-to-date stock levels without overloading the ERP or violating its limits, while keeping response times under 2 seconds for a smooth user experience.

**Action:** I introduced a Function/Tool Calling pattern. First, I wrapped the ERP calls in lightweight micro‑services deployed on Kubernetes, each exposing a REST endpoint with token rotation handled by an internal auth service. Then, I added a message queue (RabbitMQ) to buffer requests and a rate‑limiter middleware that throttled calls to 5 per second. The chatbot’s NLP layer was extended with OpenAI’s function calling feature: when the user asked about availability, the model automatically invoked our “getStock” tool, passing item ID and location. I also implemented caching in Redis for items requested frequently, refreshing every minute.

**Result:** After deployment, we cut inventory‑lookup latency from 4 seconds to 1.3 seconds on average, reduced ERP load by 70%, and achieved a 99.8% success rate under peak traffic. This experience taught me how to marry LLM tool calling with robust micro‑service patterns for scalable, real‑time data access.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
