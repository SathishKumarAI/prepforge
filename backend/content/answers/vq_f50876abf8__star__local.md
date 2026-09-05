---
qid: vq_f50876abf8__star__local
question: what is the difference var and val in scala?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 311
total_tokens: 547
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:26:57-05:00'
sources: []
---

**Situation** – While leading a migration of our nightly ETL pipeline from Python into Scala on Databricks, I noticed the team was struggling with accidental data mutation that caused flaky downstream jobs.

**Task** – My goal was to enforce immutability where possible, reduce bugs, and document best practices for the new codebase so every developer understood when to use `var` versus `val`.

**Action** – I started by creating a short workshop: first, I explained that `val` declares an immutable reference—once assigned, it can’t point elsewhere, though the underlying object may still be mutable. Then I showed how `var` allows reassignment and is useful only when state truly changes (e.g., loop counters or retry logic). I added a lint rule in our CI pipeline that flagged accidental reassignments of `val`s inside Spark transformations. During code reviews I pointed out specific cases where switching to `val` would eliminate side‑effects, and we refactored the data enrichment step from a mutable map to an immutable case class.

**Result** – The refactor reduced runtime errors by 27% over two production cycles, and the lint rule cut our debugging time for state bugs by half. I also wrote a concise internal guide that now serves as the go‑to reference whenever new engineers join the data team.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
