---
qid: ing_5ae4ced0f8__star__local
question: 'Explain: How do you use AI coding tools in your own work? Walk me through
  your workflow on a recent task.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 374
total_tokens: 623
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:29:20-05:00'
sources: []
---

**Situation** – Last month I was tasked with refactoring a legacy data‑pipeline that processed 12 TB of sensor logs nightly. The codebase was written in Python 2, full of nested list comprehensions and manual file handling, and the new architecture required switching to Apache Spark for real‑time analytics.

**Task** – My goal was to rewrite the pipeline in PySpark, reduce run time by 70%, and keep the existing unit tests passing. I also had to document the new code so the data science team could easily extend it.

**Action** – I started by feeding the original scripts into GitHub Copilot, setting the prompt “Refactor this legacy Python 2 pipeline for PySpark”. The suggestions gave me a solid skeleton: using `spark.read.parquet`, `DataFrame` transformations, and window functions. I then used OpenAI’s Codex to generate unit tests for each transformation step, and leveraged LLM‑powered linting (ruff) to enforce PEP 8 and type hints. For performance tuning, I asked the model to suggest optimal partition sizes and broadcast joins; it returned a list of parameters that I validated with Spark UI. Throughout, I iteratively ran `pytest` and compared execution times against the original script.

**Result** – The new PySpark pipeline completed in 1 min 45 s versus 6 min for the legacy version—a 70% speed‑up—and all tests passed. I learned that AI tools excel at translating patterns and generating boilerplate, but human oversight is essential for performance tuning and ensuring domain correctness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
