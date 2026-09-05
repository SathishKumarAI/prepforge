---
qid: ing_b2f9f92db1__star__local
question: 'Explain: Prompt Engineering & Context Engineering <a name="prompting"></a>'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 316
total_tokens: 557
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:29:39-05:00'
sources: []
---

**Situation** – In late 2023 I led a product‑feature sprint for an internal chatbot that helped sales reps draft outreach emails. The existing model kept generating generic, low‑engagement copy, so our KPI—email open rate—was down 15 % compared to the previous quarter.

**Task** – My goal was to boost the bot’s relevance by improving how it understood user intent and context, while keeping latency under 300 ms for real‑time usage.

**Action** – I applied prompt engineering: crafted modular prompts that explicitly asked the model for tone, recipient persona, and key value propositions. Then I introduced context engineering—embedding a short “context window” of the sales rep’s recent interactions (lead status, past email performance) into the prompt using a vector store keyed by lead ID. I iterated with A/B tests, swapping out hand‑crafted prompts for dynamic templates that pulled in contextual embeddings via OpenAI’s `text-davinci-003` API. I also tuned temperature and max tokens to balance creativity versus coherence.

**Result** – The new chatbot increased email open rates from 32 % to 48 % (a 50 % lift) within two weeks of deployment, and user satisfaction scores rose by 22 %. I learned that a carefully structured prompt combined with lightweight context vectors can dramatically improve model relevance without sacrificing speed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
