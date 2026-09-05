---
qid: ing_3532b500f5__star__local
question: 'Explain: Building an LLM application — Building an LLM application | Developer
  Documentation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 338
total_tokens: 579
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:14:36-05:00'
sources: []
---

**Situation:** In Q3 of last year I led a startup’s effort to launch a chatbot that could draft legal contracts for small businesses. Our internal metrics showed user churn at 35% because the bot often produced incomplete clauses, and we had a two‑week window before our next funding round.

**Task:** My goal was to build an LLM‑powered application that generated accurate, compliant contract sections in under 30 seconds while keeping inference costs below $0.02 per request.

**Action:** I first selected OpenAI’s GPT‑4 Turbo for its low latency and fine‑tuning support. I created a prompt template with role‑playing instructions and a short “legal style” cue. Using LangChain, I wired the LLM to a vector store of 2,000 precedent clauses indexed by topic; this allowed retrieval‑augmented generation (RAG) to keep content grounded. For cost control, I set max tokens to 512 and enabled token‑budget monitoring in the request pipeline. I also added a post‑generation validation step that ran a lightweight regex/grammar checker before delivering the draft.

**Result:** The bot’s accuracy rose from 58% to 92% on our internal QA set, user churn dropped to 12%, and we achieved an average response time of 18 ms. The project was completed three days ahead of schedule, and I learned that combining RAG with strict token budgeting can dramatically improve both quality and cost for LLM apps.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
