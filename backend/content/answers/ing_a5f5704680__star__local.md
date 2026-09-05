---
qid: ing_a5f5704680__star__local
question: How do you make tool outputs token-efficient, and why does it matter so
  much for agents?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 392
total_tokens: 636
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:04:53-05:00'
sources: []
---

**Situation:**  
In my last role I was building a conversational agent that could pull data from multiple internal APIs and then generate user‑friendly summaries. Every time the agent called an API, the JSON payload it received was bloated with nested objects and unnecessary metadata, which inflated token counts for the LLM prompt and pushed us over our cost budget.

**Task:**  
I needed to redesign how tool outputs were formatted so that each response used as few tokens as possible while still conveying all actionable information. The goal was to cut the average prompt size by at least 30 % without compromising accuracy or user experience.

**Action:**  
First, I profiled token usage on a sample of API responses using Hugging Face’s `tiktoken` library. I identified repetitive keys and nested structures that could be flattened. Then, I introduced a lightweight schema‑driven transformer: the agent first maps raw JSON to a concise, domain‑specific DTO (data transfer object) defined in Pydantic, serializes it with `orjson`, and strips all null or default values. For numeric fields I switched from string representations to binary float encoding when the LLM accepted it via embeddings. Finally, I added an optional “compact” flag that lets the agent decide whether a full payload is needed based on user intent.

**Result:**  
The token count per prompt dropped from an average of 1,200 tokens to 840 tokens—a 30 % reduction—cutting inference costs by roughly $0.07 per query. Latency improved by ~15 ms because the model spent less time parsing large inputs. I learned that thoughtful data normalization and schema enforcement can dramatically improve efficiency for agents that rely on costly LLM calls, making them more scalable and cost‑effective.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
