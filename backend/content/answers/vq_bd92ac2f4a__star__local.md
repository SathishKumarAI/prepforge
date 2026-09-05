---
qid: vq_bd92ac2f4a__star__local
question: What makes Python object-oriented?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 328
total_tokens: 559
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:17:09-05:00'
sources: []
---

**Situation** – In my last role I was tasked with refactoring a legacy data‑processing script that had grown into a tangled mess of functions and global variables. The team needed a cleaner architecture to support new features like dynamic plugin loading.

**Task** – My goal was to convert the procedural codebase into an object‑oriented design so that each processing stage could be swapped, extended, or tested independently while keeping the public API stable for downstream pipelines.

**Action** – I began by defining an abstract `Processor` base class using Python’s `abc` module, exposing a single `process(data)` method. Each concrete processor (e.g., `CsvParser`, `JsonNormalizer`) inherited from this base and implemented its own logic. To manage shared state I used composition: a `Pipeline` object held an ordered list of processors, orchestrating data flow without exposing internals. I also leveraged Python’s dynamic typing to allow plug‑in modules to register themselves via the `entry_points` mechanism in `setup.py`, enabling runtime discovery.

**Result** – The refactor reduced code duplication by 35 % and cut unit test failures from 12 to 2 per sprint. Adding a new processor now takes under an hour, and the pipeline’s public API remained unchanged, so downstream consumers saw no disruption. I learned how Python’s duck typing and `abc` module combine to give true object‑oriented flexibility without overengineering.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
