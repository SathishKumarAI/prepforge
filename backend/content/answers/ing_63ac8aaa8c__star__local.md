---
qid: ing_63ac8aaa8c__star__local
question: 'Explain: Structured Note-Taking (Agentic Memory) — Context Engineering'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 317
total_tokens: 556
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:47:09-05:00'
sources: []
---

**Situation:**  
When my team built a conversational AI that had to remember user preferences across sessions, we noticed the model’s performance drop once it reached 30–40 turns—context drift made responses feel generic and unpersonalized.

**Task:**  
I was tasked with designing a lightweight, agentic memory system so the bot could retrieve relevant facts on demand without bloating the prompt or overloading GPU memory.

**Action:**  
I introduced a two‑layer structured note‑taking approach. First, I defined an “intent schema” (e.g., *travel_plan*, *food_preference*) and stored key attributes in a JSON‑like vector store using Pinecone. Second, for each turn I generated concise “notes” via a lightweight transformer that summarized the dialogue into a 64‑dim vector, tagging it with timestamps and relevance scores. The agent would query this index before generating a reply, injecting only the top three notes back into the prompt. This kept the prompt length under 1 k tokens while giving the model rich, context‑aware facts.

**Result:**  
User satisfaction rose from 72% to 88% on post‑interaction surveys; session length increased by 35%, and GPU usage dropped 25%. I learned that treating memory as a structured, searchable index—rather than raw text—lets large models stay focused while still leveraging rich context.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
