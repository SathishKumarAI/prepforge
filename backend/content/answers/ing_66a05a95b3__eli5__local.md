---
qid: ing_66a05a95b3__eli5__local
question: 'Explain: High-level architecture — Llm Gateway And Serving Platform'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 239
total_tokens: 398
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:18:53-05:00'
sources: []
---

Imagine a bustling airport where travelers (your questions) arrive at the terminal, check in with a friendly clerk (the **LLM Gateway**), and are then handed a boarding pass that tells them which flight to take (the **Serving Platform**).  

The LLM Gateway is like that clerk: it first reads your request, decides whether you need a quick answer or something more elaborate, and routes the message to the right “flight.” It also handles things like user login, billing, and making sure everyone follows security rules.  

Once the ticket is issued, the Serving Platform takes over—this is the airplane that actually carries out the journey. It hosts one or many large language models (the “pilots”), runs them on powerful GPUs, keeps track of who’s on which flight, and makes sure each passenger gets a personalized answer before they land at their destination.  

So, think of the gateway as the check‑in desk and the serving platform as the plane that delivers your AI experience safely and efficiently.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
