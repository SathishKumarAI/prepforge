---
qid: ing_78d3f3415c__star__local
question: 'Explain: Generating Structured Output with OpenAI'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 329
total_tokens: 564
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:35:43-05:00'
sources: []
---

**Situation** – At my last startup we had an internal ticketing system that stored customer support requests as plain text. The analytics team wanted structured insights (issue type, priority, product line) but manual tagging was a bottleneck, slowing trend reports by weeks.

**Task** – I needed to build a pipeline that automatically parsed incoming tickets and output JSON with labeled fields, achieving at least 90 % accuracy while keeping latency under 200 ms per ticket so the system could stay in real time.

**Action** – I leveraged OpenAI’s GPT‑4 Turbo with a carefully crafted prompt that included example input‑output pairs and a “JSON schema” instruction. Using the `json` function calling feature, the model returned valid JSON directly. I wrapped it in an async FastAPI service, added retry logic for occasional parsing failures, and logged both the raw text and structured output to a BigQuery table for audit. To hit the latency target, I pre‑warm embeddings and batch 10 tickets per request.

**Result** – The solution lifted tagging accuracy from 45 % manual to 92 % automated, cutting analytics turnaround from 3 weeks to 2 days. It also reduced support agents’ prep time by 30 %, freeing them for higher‑value work. I learned that combining function calling with schema guidance is the most reliable way to get clean structured data out of GPT models in production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
