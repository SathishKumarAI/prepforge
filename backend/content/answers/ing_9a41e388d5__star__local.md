---
qid: ing_9a41e388d5__star__local
question: 'Explain: Pattern 3 – Custom planner (DIY prompting + parsing)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 354
total_tokens: 593
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:41:10-05:00'
sources: []
---

**Situation:** At my previous startup we had a client that wanted a custom chatbot for their e‑commerce site. The existing GPT‑4 integration only offered generic responses and didn’t meet the brand’s voice or product taxonomy.

**Task:** I needed to build a custom planner that could generate prompts tailored to each product category, parse the model’s output into structured JSON, and then feed it back into our recommendation engine—all in real time with <200 ms latency.

**Action:** First, I designed a lightweight “prompt template” library using Jinja2 where we stored domain‑specific templates (e.g., “Suggest 3 accessories for a {product_type}”). Then I built a microservice in Go that stitches the user’s query, selects the appropriate template, and injects dynamic variables. For parsing, I wrote a two‑stage decoder: a regex pre‑filter to catch obvious formatting errors followed by a JSON schema validator (using gojsonschema) to ensure consistency. I also added a fallback pipeline that re‑prompts the model with an error message if validation fails. Finally, I integrated this service into our existing FastAPI backend and used Redis for caching frequent prompts.

**Result:** The custom planner cut response time from 350 ms to 180 ms and increased user engagement by 27 % (measured via click‑through on recommended items). It also reduced the number of model re‑runs by 35 %, saving us roughly $1,200/month in compute costs. I learned that a modular prompt/template system paired with rigorous output validation can dramatically improve both performance and reliability for production AI services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
