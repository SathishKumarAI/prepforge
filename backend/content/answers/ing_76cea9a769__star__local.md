---
qid: ing_76cea9a769__star__local
question: 'Explain: Pydantic Evals — Pydantic Evals | Pydantic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 388
total_tokens: 632
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:31:30-05:00'
sources: []
---

**Situation** – In my last role I was building a real‑time configuration engine for a fintech app that allowed users to write custom discount rules in plain text (e.g., “if purchase_amount > 100 and region == 'EU' then apply 10%”). The data came from various external APIs, and we needed instant validation and execution without compromising security.

**Task** – I had to create a system where these rule strings could be parsed into validated Python objects, safely evaluated at runtime, and integrated with our existing Pydantic models that already handled schema enforcement for user inputs.

**Action** – I leveraged Pydantic’s `@validator` decorators to parse the raw rule string into an abstract syntax tree (AST) using Python’s built‑in `ast.parse`. Then I implemented a custom `Evaluator` class that walked the AST, only allowing whitelisted nodes (`Compare`, `BoolOp`, `Name`, `Constant`). Each node was converted into a lambda function and cached. Finally, I wrapped this logic in a Pydantic model `DiscountRule` with an `eval` method that could be called with a context dict (e.g., `{purchase_amount: 120, region: 'EU'}`). This kept the evaluation sandboxed while still being fast enough for our 10 ms latency SLA.

**Result** – The new engine processed over 50,000 discount evaluations per minute with <5 ms average latency, and we saw a 12% reduction in erroneous discounts. I learned how Pydantic’s extensibility can be combined with Python’s AST module to create secure, dynamic rule engines without sacrificing performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
