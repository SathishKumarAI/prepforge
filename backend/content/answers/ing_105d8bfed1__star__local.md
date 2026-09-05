---
qid: ing_105d8bfed1__star__local
question: 'Explain: 🧭 Prompt Engineering & Context Engineering'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 292
total_tokens: 527
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:00:57-05:00'
sources: []
---

**Situation** – In a mid‑size fintech startup, we were launching an internal chatbot to help analysts retrieve regulatory data. The first builds produced vague responses; users complained that the bot kept asking for clarification even on straightforward queries.

**Task** – My goal was to reduce the number of “I don’t understand” prompts by 70 % and improve user satisfaction scores above 85 %.

**Action** – I began with *prompt engineering*: rewrote the base prompt in a more directive style, added explicit examples, and used a structured JSON format for responses. Then I applied *context engineering*—building a dynamic context window that pulls the last three relevant regulatory documents into the prompt, using LangChain’s `VectorStoreRetriever`. I also introduced token‑budget constraints so the model never exceeded 2 k tokens per turn, preventing over‑generation. Finally, I set up an A/B test with the old and new prompts, collecting metrics via Mixpanel.

**Result** – Within two weeks, the bot’s “clarification needed” rate dropped from 42 % to 12 %, user satisfaction rose to 88 %, and overall query resolution time cut by 30 %. I learned that blending precise prompt wording with a curated context cache can dramatically improve LLM reliability in production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
