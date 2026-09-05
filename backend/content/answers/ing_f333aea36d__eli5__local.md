---
qid: ing_f333aea36d__eli5__local
question: 'Explain: Mooncake EP and Process Group (PG) — GitHub - kvcache-ai/Mooncake:
  Mooncake is the serving platform for Kimi, a leading LLM service provided by Moonshot
  AI. \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 198
output_tokens: 197
total_tokens: 395
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:59:30-05:00'
sources: []
---

Think of a big kitchen where chefs (AI models) cook dishes (answers).  
**Mooncake EP** is the *front‑door waiter* that takes your order, decides which chef should cook it, and then hands you the finished dish. It’s the public interface people use to talk with the LLM service.

Inside the kitchen, **Process Group (PG)** is like a *team of sous‑chefs* who share ingredients and cooking stations. Each PG runs several model copies that can work together on the same order, balancing load and keeping everything fast. When you ask for something big or complex, the EP routes your request to the right PG so all the chefs can collaborate efficiently.

So, Mooncake EP is the friendly entry point; PG is the coordinated crew behind the scenes making sure answers arrive quickly and reliably.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
