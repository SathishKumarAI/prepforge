---
qid: vq_f9cea99aaa__star__local
question: Difference between case class and class?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 331
total_tokens: 564
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:27:34-05:00'
sources: []
---

**Situation** – In a data‑pipeline refactor for our nightly ETL job, the legacy codebase had dozens of plain `class` objects representing dimension tables, but we were hitting serialization and equality bugs when pushing them to Spark’s broadcast variables.

**Task** – I needed to replace those mutable classes with immutable, comparable types that would serialize cleanly across executors while keeping performance high for our 500 GB daily data volume.

**Action** – I introduced Scala *case classes* for each dimension record. By defining `final case class DimProduct(id: Int, name: String)` instead of a regular `class`, we automatically got:
- Immutable fields (no accidental mutation in worker nodes).
- Structural `equals`/`hashCode` based on constructor parameters (essential for deduplication and joins).
- Convenient `copy` method to tweak values without mutating originals.
- Automatic pretty‑printing (`toString`) useful during debugging.

I also benchmarked the serialization cost using Kryo vs. Java serialization, confirming a 30 % speed‑up when broadcasting case classes compared to the old classes.

**Result** – The refactored pipeline now runs 15 % faster, with no null‑pointer or duplicate key errors in production. I learned that choosing `case class` over `class` is not just syntactic sugar; it enforces immutability and provides value semantics that are critical for distributed data processing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
