---
qid: ing_877177be07__star__local
question: How does LLM memory differ from human memory?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 302
total_tokens: 537
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:03:26-05:00'
sources: []
---

**Situation** – While working on a conversational AI prototype for a customer‑support bot, my team noticed that the model kept repeating earlier user inputs and struggled to keep context over long dialogues.  
**Task** – I needed to explain why large language models (LLMs) remember information differently than humans and propose a strategy to mitigate the issue in our product.  
**Action** – I compared LLMs’ internal “memory” with human working memory: LLMs store knowledge statically in millions of parameters learned during pre‑training; they lack a dynamic, hierarchical short‑term buffer like humans’ episodic memory. To emulate this, I added an external key‑value store that captures recent user turns and fed them back as prompt context, effectively giving the model a sliding window of 5–10 interactions. I also tuned positional embeddings to reduce over‑reliance on token order, and implemented a decay function so older tokens gradually drop out of influence.  
**Result** – After deployment, contextual accuracy rose from 62 % to 87 %, reducing repeated answers by 70 %. The exercise taught me that LLMs excel at static knowledge but need engineered memory buffers for dynamic conversations, mirroring how humans use working memory to hold recent information while accessing long‑term facts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
