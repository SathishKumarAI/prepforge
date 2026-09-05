---
qid: vq_de65319037__eli5__local
question: Are Hive SQL identifiers (e.g. table names, columns, etc) case sensitive?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 191
total_tokens: 357
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:31:03-05:00'
sources: []
---

Think of Hive like a library that follows the rules set by its catalog system. In this library, every book (table or column) has an official title written in **lowercase** letters only. When you ask for a book, the catalog will find it if your request matches that lowercase spelling exactly; it won’t notice any capital letters.

So, Hive SQL identifiers are **not case‑sensitive** but they are stored and matched in *lowercase*. If you write `SELECT * FROM MyTable` or `SELECT * FROM mytable`, Hive treats them the same. However, if you use backticks (`) around a name, Hive will keep whatever case you typed inside those ticks, and then it becomes case‑sensitive. In practice, most people just stick to lowercase names to avoid surprises.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
