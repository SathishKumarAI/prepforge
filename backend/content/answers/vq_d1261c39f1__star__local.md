---
qid: vq_d1261c39f1__star__local
question: Where can I get a list of all hidden Oracle parameters?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 340
total_tokens: 578
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:20:44-05:00'
sources: []
---

**Situation** – While leading a performance tuning project for our 12c database that served the e‑commerce checkout flow, we noticed that query latency spiked after an upgrade. The Oracle docs listed only public parameters; I suspected hidden settings were influencing memory allocation.

**Task** – Identify every hidden initialization parameter affecting the optimizer and buffer cache so I could benchmark their impact before applying changes in production.

**Action** – First, I used `SHOW PARAMETER` with the `ALL` keyword inside SQL*Plus to pull all parameters. Then I queried the data dictionary view `V$PARAMETER2`, filtering where `IS_HIDDEN = 'TRUE'`. To validate each parameter’s effect, I scripted incremental changes in a staging instance, capturing `v$sql_plan_statistics` and `v$waitclass_metric` before and after each tweak. I also cross‑checked with the Oracle Support Knowledge Base for any recent bug reports linked to those hidden flags.

**Result** – The script produced a 48‑entry list of hidden parameters that were not documented in the public docs. By adjusting just three—`optimizer_mode`, `shared_pool_size`, and `db_cache_size`—we reduced average checkout latency from 850 ms to 320 ms, a 62% improvement. I learned that leveraging data dictionary views is essential for uncovering undocumented tuning knobs, and that systematic staging experiments guard against regressions in production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
