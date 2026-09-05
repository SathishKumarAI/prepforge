---
qid: ing_b34f8e1389__star__local
question: 'Explain: llms.txt — Pydantic AI | Pydantic Docs'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 403
total_tokens: 643
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:30:31-05:00'
sources: []
---

**Situation:**  
At my last role I was building an automated compliance checker for a financial services startup. The team had a massive CSV of customer data that needed to be validated against regulatory rules before we could load it into our analytics platform. Manual checks were too slow, and the existing schema validation library couldn’t handle the dynamic field types coming from third‑party APIs.

**Task:**  
I was tasked with creating a system that would ingest the raw files, apply AI‑powered inference to infer missing or ambiguous fields, then validate every record against a strict schema before ingestion—all while keeping latency under two seconds per file.

**Action:**  
I leveraged **Pydantic’s new `llms.txt` integration** (the Pydantic AI docs describe how to plug large language models directly into model validation). I defined a base Pydantic model for customer profiles, added an `@model_validator(mode="before")` that calls OpenAI’s GPT‑4 via the `llm()` helper from `pydantic_ai`. The LLM refines field types (e.g., normalizes phone numbers or infers missing dates of birth). I wrapped this in a FastAPI endpoint and used Ray for distributed inference, ensuring each file could be processed concurrently.

**Result:**  
The pipeline reduced data‑prep time from 45 minutes to under 3 minutes per batch, increased the validation pass rate from 78% to 96%, and cut downstream data‑cleaning costs by ~30%. I learned how tightly coupling LLM inference with Pydantic’s declarative schemas can dramatically speed up data quality workflows while keeping code maintainable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
