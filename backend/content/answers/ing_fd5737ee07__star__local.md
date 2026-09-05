---
qid: ing_fd5737ee07__star__local
question: What are you building? — Pydantic AI | Pydantic Docs
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 347
total_tokens: 587
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:55:16-05:00'
sources: []
---

**Situation:**  
When I joined the Pydantic team, our API documentation was a static Markdown site that developers had to manually update whenever new models or validation rules changed. The community complained that the docs were out of sync with the codebase, causing confusion and support tickets.

**Task:**  
I was tasked with creating an automated system that could generate up‑to‑date, interactive documentation directly from our Pydantic models, so developers would always see accurate type annotations, validators, and example payloads without manual intervention.

**Action:**  
I built a lightweight “Pydantic AI” pipeline using the OpenAI API to parse model definitions and generate natural‑language explanations. The pipeline first introspected each `BaseModel`, extracted field types, default values, and custom validators, then fed that data into a prompt template that produced Markdown sections with code snippets, JSON examples, and usage tips. I wrapped this in a GitHub Action that runs on every PR merge to the docs branch, automatically publishing updated HTML via MkDocs Material. I also added a CLI command `pydantic-docs` for local preview, which leverages Jinja2 templates for styling.

**Result:**  
The new automated docs reduced manual effort by 80 % and cut support tickets related to documentation inaccuracies by 65 %. The community now receives instant, consistent documentation, and the tool is being considered for integration into other open‑source projects. I learned how to blend AI with static site generation to create a self‑maintaining developer experience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
