---
qid: ing_8b9e1a4ade__eli5__local
question: 'Explain: Failure Handling — What is Caching? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 272
total_tokens: 433
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:17:57-05:00'
sources: []
---

**Caching in a machine‑learning system is like keeping a handy copy of your favorite recipe on a sticky note instead of going to the cookbook every time you cook.**

When a model (the “cook”) needs data—say, a user’s past purchases—it normally asks the database (“the cookbook”). If many users ask for the same information at once, the database can get overwhelmed and slow down or even crash. Caching stores the most‑used answers in fast, temporary storage right next to the model. The first time the recipe is requested it is written to this sticky note; subsequent requests read from the note instantly.

**Key terms**

- **Cache** – a quick, short‑term memory that holds recent data.
- **Hit** – when the needed data is already in the cache (fast retrieval).
- **Miss** – when the data isn’t cached and must be fetched from the slower source.

By serving repeated requests from the cache, the system stays responsive even if the underlying database fails or becomes very slow. The cache can also keep a “backup” of recent results so that, during a temporary outage, the model still produces reasonable outputs instead of failing outright.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
