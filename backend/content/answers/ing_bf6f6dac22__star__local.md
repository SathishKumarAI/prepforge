---
qid: ing_bf6f6dac22__star__local
question: 'Explain: 🧭 Prompt Engineering & Context Engineering'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 318
total_tokens: 553
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:53:35-05:00'
sources: []
---

**Situation:**  
In my last role as a data‑science lead at an e‑commerce startup, we launched a conversational chatbot to upsell high‑margin products. Early A/B tests showed only a 12 % lift in conversion compared to the legacy FAQ bot.

**Task:**  
I was tasked with boosting that lift to at least 30 % by re‑engineering how the model understood user intent and context while keeping latency under 800 ms for mobile users.

**Action:**  
First, I applied *prompt engineering*: I crafted a modular prompt template that inserted real‑time session data (cart contents, browsing history) into a single instruction string. Using OpenAI’s GPT‑4 API with the `turbo-1106` engine, I tuned temperature and top‑p to balance creativity and relevance. Next, I introduced *context engineering* by building an in‑memory vector store of user profiles and recent interactions; every request fetched the top 5 contextual embeddings via Pinecone and concatenated them into the prompt. I also set up a lightweight caching layer with Redis to avoid redundant similarity searches, keeping response time low.

**Result:**  
After two weeks of iterative testing, conversion rates jumped from 12 % to 27 %, surpassing our 25 % target. Average latency stayed at 650 ms. The experience taught me that carefully structured prompts plus efficient context retrieval can dramatically improve LLM‑driven UX without sacrificing performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
