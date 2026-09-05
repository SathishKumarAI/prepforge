---
qid: vq_2ed00061b3__star__local
question: How to create an empty class in Python?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 245
total_tokens: 479
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:53:48-05:00'
sources: []
---

**Situation**  
While refactoring a legacy analytics pipeline, the team realized we needed a lightweight data holder for new experiment configurations that would later be extended with validation logic.

**Task**  
I had to introduce an “empty” configuration class that could be instantiated without any initial attributes, yet still support future extensions and type checking.

**Action**  
I created the class using `class ExperimentConfig: pass`. To make it more robust, I added a docstring explaining its purpose and used `__slots__ = ()` to prevent accidental attribute creation. This keeps memory usage minimal—important because we instantiate thousands of configs per run. I also wrote a simple factory function that returns an instance, allowing us to swap in a richer implementation later without changing the API.

**Result**  
The new empty class reduced object overhead by ~4 % across the pipeline, and the team could now safely add methods or attributes later without breaking existing code. It taught me how even a trivial `pass` statement can be a powerful foundation when combined with careful design choices like `__slots__`.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
