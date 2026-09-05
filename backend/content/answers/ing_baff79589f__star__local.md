---
qid: ing_baff79589f__star__local
question: 'Explain: Structured outputs — Prompt Engineering And Context'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 336
total_tokens: 570
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:44:56-05:00'
sources: []
---

**Situation**  
At my previous role I was tasked with building a chatbot that could return product recommendations in a JSON format for our e‑commerce API. The existing model only produced plain text, so the front‑end team had to parse it manually, causing 12 % more bugs during QA.

**Task**  
I needed to redesign the prompt strategy so the LLM would consistently output well‑structured JSON with product IDs, titles, prices, and a confidence score, while keeping latency under 200 ms for our real‑time chat service.

**Action**  
I started by drafting a “prompt template” that included an example of the desired JSON schema. I wrapped the prompt in a function calling pattern using OpenAI’s `function_call` API to enforce the structure. To reduce hallucinations, I added a few-shot context with three correctly formatted examples and inserted a system message reminding the model to adhere strictly to the schema. I then iterated on token limits, trimming verbose instructions until the response size stayed below 300 tokens. Finally, I integrated a lightweight validation layer in Go that parsed the output and returned an error if required keys were missing.

**Result**  
The new prompt yielded 98 % perfectly formatted JSON responses and cut front‑end parsing errors by 85 %. Response latency remained at ~180 ms. I learned how to blend few‑shot prompting with function calls to enforce structure, a pattern I now apply whenever the LLM must interface cleanly with downstream services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
