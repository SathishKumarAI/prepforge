---
qid: vq_d45b5c1b9e__eli5__local
question: Is it possible to add a parameter while running a saved job?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 210
total_tokens: 371
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:29:26-05:00'
sources: []
---

Imagine a data‑engineering job as a well‑tested recipe that’s been written down in a cookbook (the “saved job”). The recipe has fixed ingredients—like the tables you read from and write to—but you can also sprinkle in optional spices, called **parameters** (e.g., how many rows to process or which date range to use).

When you run the saved recipe, most cooking systems let you add a spice at the start: you tell the kitchen “use 10 % more salt” or “process only last week’s data.” This is like passing a parameter value when launching the job. The core instructions stay unchanged; only that one variable changes.

So yes—most modern orchestration tools (Airflow, Prefect, etc.) let you override or add parameters at run time, just as you’d adjust seasoning before cooking.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
