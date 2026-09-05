---
qid: ing_2013817274__star__local
question: 'Explain: Lost-in-the-Middle — Context Engineering'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 361
total_tokens: 596
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:33:31-05:00'
sources: []
---

**Situation** – In my last role I was leading a product‑grade conversational agent for a financial services client. During user testing, we noticed that the chatbot’s responses drifted off topic after the third turn, especially when users asked multi‑part questions. The internal logs showed the LLM had “lost” the thread of conversation.

**Task** – My goal was to keep the model anchored to the current context without inflating token usage or latency, so we could deliver a seamless user experience on mobile devices with strict bandwidth limits.

**Action** – I implemented a lightweight “context‑anchor” cache: after each turn, we extracted key entities and intents using spaCy NER and a custom rule set, then stored them in a 256‑byte vector. For every new prompt we concatenated this vector to the LLM input as a short “breadcrumb trail.” We also tuned the prompt template to explicitly ask the model to reference the breadcrumb. This kept token counts under 1,200 per turn and avoided re‑generation of earlier dialogue.

**Result** – Post‑deployment, conversation drift dropped from 35% to 4%, user satisfaction scores rose by 18 points on our NPS survey, and we reduced average latency by 12 ms. I learned that a small, deterministic context embedding can dramatically improve LLM grounding without costly infrastructure changes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
