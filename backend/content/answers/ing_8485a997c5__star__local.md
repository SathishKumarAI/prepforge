---
qid: ing_8485a997c5__star__local
question: 'Explain: Um and put all that gunk in — Building Software Systems At Google
  and Lessons Learned'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 356
total_tokens: 601
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:58:16-05:00'
sources: []
---

**Situation:**  
When I joined a product team at Google to build the new recommendation engine for YouTube Shorts, we were sprinting toward a launch deadline while juggling a legacy codebase that was full of “gunk” – duplicated logic, brittle APIs, and undocumented modules.

**Task:**  
I had to clean up that mess, refactor it into a maintainable micro‑service architecture, and deliver the first production‑ready version within four weeks without breaking existing features or compromising latency targets.

**Action:**  
First, I performed a rapid dependency audit with Bazel’s `bazel query` to map out the tangled graph. Then I introduced a set of domain‑specific libraries that encapsulated the core recommendation logic and wrapped them in gRPC services. Using TensorFlow Serving, I containerized each model variant so we could roll back quickly if latency spiked. I also wrote integration tests with `pytest` and set up a continuous‑integration pipeline that automatically ran performance benchmarks against our SLA of 120 ms per request.

**Result:**  
The refactored system cut build times from 12 minutes to 3, reduced memory usage by 35%, and lowered prediction latency to 90 ms on average. We launched on schedule, and the new architecture allowed us to iterate on models twice as fast. The lesson? Embrace a modular, test‑driven approach early—cleaning up “gunk” isn’t just housekeeping; it’s a launchpad for scalable innovation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
