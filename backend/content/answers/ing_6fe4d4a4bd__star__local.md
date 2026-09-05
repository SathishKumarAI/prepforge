---
qid: ing_6fe4d4a4bd__star__local
question: 'Explain: Arbitrary Rule 1: “A microservice should have X lines of code”'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 384
total_tokens: 629
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:10:41-05:00'
sources: []
---

**Situation** – In early 2023 I was leading a team that was refactoring our e‑commerce recommendation engine into a set of lightweight microservices. The product manager had a vague target: “Keep each service under 500 lines of code” so we could ship faster and reduce deployment risk.

**Task** – My job was to evaluate whether that line‑count rule actually made sense for the recommendation logic, and if not, propose an alternative that balanced maintainability with performance.

**Action** – I started by instrumenting a prototype service in Go, measuring its source lines of code (SLOC) along with cyclomatic complexity and API surface. The core algorithm—collaborative filtering using matrix factorization—required 1,200 SLOC plus three helper libraries for data ingestion, caching, and metrics. Instead of forcing the rule, I performed a cost‑benefit analysis: splitting into smaller services would introduce inter‑service latency (estimated 15 ms per call) and increase operational overhead (more containers to monitor). I presented a trade‑off chart to stakeholders, showing that keeping the service under 1,500 SLOC maintained a single deployment unit while still allowing us to implement an in‑memory cache and asynchronous batch updates. I also added clear documentation boundaries so future developers could identify logical modules within the codebase.

**Result** – The decision to relax the rule to “≤ 1,500 lines” was adopted. We delivered the refactored service on schedule, achieving a 12 % reduction in response time and a 30 % drop in CPU usage compared to the monolith. I learned that line‑count constraints should be data‑driven rather than arbitrary; clear metrics and trade‑off analysis lead to better architectural choices.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
