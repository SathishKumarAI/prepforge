---
qid: vq_27659b1f14__star__local
question: What do Interviewers Look For?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 340
total_tokens: 573
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:52:29-05:00'
sources: []
---

**Situation** – During my last internship I was asked to optimize a legacy recommendation engine that was written in JavaScript and suffered from O(N²) pair‑wise similarity calculations. The product manager had set a goal of reducing the response time from 3 seconds to under 1 second for a 10,000‑item catalog.

**Task** – I needed to refactor the algorithm so it could handle larger datasets while still delivering accurate recommendations. Interviewers were looking for evidence that I understood core data structures, complexity analysis, and trade‑offs between time, space, and maintainability.

**Action** – First I profiled the code with Chrome DevTools and identified nested loops over item vectors as the bottleneck. I replaced them with a hash map of pre‑computed cosine similarities, turning the inner loop into O(1) lookups. Then I switched from an array to a min‑heap (priority queue) to keep only the top k recommendations, reducing memory usage from O(N²) to O(kN). I wrote unit tests in Jest and benchmarked with `benchmark.js`, confirming a 2.8× speedup and a 70% drop in memory.

**Result** – The engine now returns results in ~0.9 seconds for the full catalog, meeting the deadline. I learned that interviewers value clear problem framing, rigorous complexity reasoning, and a pragmatic balance between algorithmic elegance and production constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
