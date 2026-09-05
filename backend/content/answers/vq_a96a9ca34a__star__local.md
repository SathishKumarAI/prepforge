---
qid: vq_a96a9ca34a__star__local
question: How are classes created in Python?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 338
total_tokens: 570
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:13:45-05:00'
sources: []
---

**Situation:**  
While leading a refactor of our legacy data‑processing pipeline, I discovered that the codebase had grown a lot of ad‑hoc functions for handling different file formats (CSV, JSON, XML). This made unit testing brittle and maintenance painful.

**Task:**  
I needed to create a clean, reusable class hierarchy that could parse any supported format while keeping the public API stable for downstream services.

**Action:**  
First, I designed an abstract base class `BaseParser` using Python’s `abc` module. It defined the interface (`parse`, `validate`) and provided common utilities like logging and error handling. Then, I implemented concrete subclasses—`CSVParser`, `JSONParser`, `XMLParser`—each overriding `parse`. To keep instantiation simple, I added a factory method `ParserFactory.get_parser(file_type)` that returned the appropriate subclass instance based on an enum. I leveraged type hints (`typing.Protocol`) so static analysers could verify method signatures, and used `dataclasses.dataclass` for immutable configuration objects passed to each parser.

**Result:**  
The new class structure cut code duplication by ~40 % and reduced runtime errors in production by 25 %. Unit tests grew from 30 to 120 passing cases, and the refactor made it trivial to add a `YAMLParser` next quarter. I learned how Python’s dynamic features—abstract bases, factories, and dataclasses—enable clean, extensible designs without sacrificing performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
