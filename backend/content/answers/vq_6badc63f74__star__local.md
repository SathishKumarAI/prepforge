---
qid: vq_6badc63f74__star__local
question: Difference between Traits and abstract class in scala?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 336
total_tokens: 571
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:02:56-05:00'
sources: []
---

**Situation**  
While refactoring a data‑pipeline library at my last company, I noticed the same set of utility methods—parsing CSV, handling nulls, and logging—were duplicated across several concrete pipeline classes that extended an abstract `BasePipeline` class.

**Task**  
I needed to consolidate those common behaviours without breaking existing inheritance hierarchies or introducing tight coupling, while still allowing each pipeline to remain a subclass of the original `AbstractPipeline`.

**Action**  
I created a trait called `CsvSupport` that contained concrete methods and a few abstract members for configuration. Then I mixed this trait into both the `BasePipeline` (as an abstract class) and any concrete pipeline classes. The key was leveraging Scala’s linearization: the trait could provide default implementations, but subclasses could override them if needed. Because traits can have fields with initializers, I used a lazy val to cache parsed headers, saving recomputation across calls. This avoided the “one‑only‑superclass” limitation of abstract classes and kept the type hierarchy clean.

**Result**  
The refactor cut duplicated code by ~35 %, reduced compile times by 12 %, and improved test coverage for CSV handling from 70 % to 92 %. I learned that traits are ideal for reusable, mix‑in behaviours, while abstract classes should be reserved for core inheritance structures where you need a single parent type.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
