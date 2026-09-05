---
qid: vq_fd43d8f385__star__local
question: Difference between and singleton object and class in scala?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 307
total_tokens: 543
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:28:09-05:00'
sources: []
---

**Situation** – In a data‑pipeline project for a streaming analytics platform, our team needed a central configuration manager that could be accessed from any worker node without reloading the YAML file each time. The pipeline was built in Scala and ran on Spark.

**Task** – I had to design a reusable component that would load the config once, expose immutable settings, and be thread‑safe across executors while keeping memory overhead minimal.

**Action** – I chose a `singleton object` (`object Config`) instead of a regular class. Inside it I used lazy initialization with `lazy val` to read the YAML file only on first access, guaranteeing that every call returns the same instance without extra synchronization. I also added a companion class (`class ConfigLoader`) for unit tests and potential alternative loading strategies, but kept the production code in the object. The object’s static nature meant no constructor overhead and ensured there was exactly one config instance per JVM.

**Result** – Startup time dropped by ~25 % because the file was read only once, memory usage stayed below 10 MB, and we avoided accidental multiple instances that previously caused inconsistent schema parsing. I learned that in Scala a singleton object is ideal for shared, immutable state, whereas a class is preferable when you need multiple independent instances or dependency injection.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
