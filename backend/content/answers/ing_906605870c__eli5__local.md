---
qid: ing_906605870c__eli5__local
question: 'Explain: Arbitrary Rule 2: “Turn each function into a microservice”'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 237
total_tokens: 402
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:25:44-05:00'
sources: []
---

**Arbitrary Rule 2: “Turn each function into a micro‑service.”**

Think of your program as a kitchen where every recipe is a *function*—a set of steps that turns raw ingredients (data) into a dish (output). A **micro‑service** is like a small, independent station in the kitchen: one station only cooks soup, another only bakes bread. Each station knows just its own task and can be swapped out or upgraded without touching the rest of the kitchen.

In machine learning, each function (e.g., data cleaning, feature extraction, model inference) becomes its own micro‑service. This gives you:

* **Modularity** – change one step without breaking others.  
* **Scalability** – run many copies of a busy service to handle more requests.  
* **Isolation** – failures in one service don’t bring down the whole system.

So, treat every function as a tiny, self‑contained kitchen station that can be deployed, updated, or scaled independently.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
