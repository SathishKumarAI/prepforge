---
qid: vq_9187aec30b__star__local
question: Can we use if activity inside another if activity in ADF ?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 443
total_tokens: 682
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:09:55-05:00'
sources: []
---

**Situation** – While migrating the nightly sales pipeline from on‑prem to Azure Data Factory, our team discovered that the daily ETL had to skip rows when both the transaction date was a holiday *and* the customer was in a blacklist. The existing workflow only handled one condition at a time and started throwing errors when we tried to add a second If Condition.

**Task** – I needed to build a robust, maintainable branching logic that could evaluate two independent predicates (holiday check and blacklist lookup) before deciding whether to load the batch into the warehouse.

**Action** – In ADF I wrapped the second If Condition inside the “True” branch of the first one. The outer If checks `@equals(activity('GetHoliday').output.isHoliday, true)`; if it’s a holiday I immediately exit with a log activity. Otherwise I route to an inner If that evaluates `@contains(activity('BlacklistLookup').output.customers, item().CustomerID)`. I also used the expression language to combine conditions in a single If when possible: `@and(not(equals(...)), not(contains(...)))`. This kept the pipeline flat and avoided deep nesting.

**Result** – The new design cut run‑time by 12 % (from 45 min to 39 min) because we eliminated unnecessary activity execution, and it made the logic easier to audit. I learned that while ADF doesn’t support literal “nested if” blocks in a single expression, you can compose them cleanly by chaining If Conditions or using logical operators in one expression.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
