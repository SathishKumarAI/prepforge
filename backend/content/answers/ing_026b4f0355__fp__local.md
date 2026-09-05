---
qid: ing_026b4f0355__fp__local
question: 'Explain: F3: Single PR runs a corner of the eval that misses regressions'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 378
total_tokens: 554
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:10:13-05:00'
sources: []
---

**Why a single pull request (PR) can “miss regressions” in only one evaluation corner**

When a PR is merged, the CI system typically runs a *subset* of all possible tests—just enough to catch obvious bugs while keeping build time low. This subset is chosen by heuristics: e.g., random sampling, importance weighting, or historical failure rates. The fundamental problem solved here is **budget‑constrained verification**: we want high confidence that the code still works everywhere, but exhaustive testing would be too expensive.

The key principle is *probability theory*. If each test has a probability \(p\) of detecting a regression and tests are independent, the chance that *none* detect it after \(n\) runs is \((1-p)^n\). Even with many tests, if \(p\) is tiny (rare regressions), a single PR might never hit the problematic corner. Moreover, independence rarely holds; some tests cover overlapping code paths, so the effective detection probability is lower than expected.

A non‑obvious insight: **corner cases are often triggered by rare input combinations** that appear only in specific execution paths. A single PR’s test matrix may not include those inputs because they were never exercised before or the random sampler happened to skip them. Thus, a regression can survive unnoticed until it manifests under a different workload or environment—exactly what “misses regressions” describes.

To mitigate this, one must design *coverage‑guided* sampling or employ mutation testing to ensure that every logical branch is eventually exercised by some PR run.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
