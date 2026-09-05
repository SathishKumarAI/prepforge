---
qid: vq_5968eef263__star__local
question: Mention the difference between an object and a class ?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 300
total_tokens: 536
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:00:11-05:00'
sources: []
---

**Situation** – In early 2023 I was tasked with building a reusable ETL component for our customer‑segmentation microservice. The team wanted a clean, testable design that could be swapped out between different data sources.

**Task** – My goal was to create a generic “Extractor” module that could read from any source (CSV, API, database) and expose the same interface to downstream transformers.

**Action** – I first defined an abstract *class* `BaseExtractor` with common attributes (`source_url`, `batch_size`) and an abstract method `extract()`. Then, for each data source I implemented a concrete subclass: `CsvExtractor`, `ApiExtractor`, `SqlExtractor`. Each subclass instantiated its own *object* at runtime—an instance of the class holding state (e.g., current file pointer, auth token). The object’s methods operated on that state, while the class defined the blueprint. I used Python’s typing and dependency injection to keep the code modular.

**Result** – We reduced duplicated logic by 40 % and cut onboarding time for new data sources from days to hours. The clear separation of class (definition) and object (instance) made unit testing straightforward, and I learned how important this distinction is when scaling a pipeline across multiple environments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
