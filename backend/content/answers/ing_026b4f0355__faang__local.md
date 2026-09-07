---
qid: ing_026b4f0355__faang__local
question: 'Explain: F3: Single PR runs a corner of the eval that misses regressions'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 457
total_tokens: 696
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:49:42-05:00'
sources: []
---

**Clarify**  
You’re describing a situation where a *Feature‑flagged* (F3) pull request executes only a subset of the test matrix—specifically the “corner” of the evaluation suite—yet it still passes locally but hides regressions that would surface in full integration.  
Assumptions to confirm:  

- The PR is gated behind an F3 flag; tests run with the flag disabled (baseline) and enabled (feature).  
- Only a small, deterministic set of regression tests (the “corner”) are executed for speed.  
- The remaining test space is large enough that regressions can slip through.

**Approach**  

1. **Audit the test coverage matrix** – map which tests run under F3 vs full suite.  
2. **Identify high‑risk paths** that aren’t exercised in the corner (e.g., edge APIs, multi‑tenant data flows).  
3. **Introduce a dynamic “shadow” executor** that runs the full suite against the same PR but in parallel, without affecting CI time significantly.  

**Depth**  

- Use *feature‑flag isolation* to run two parallel pipelines: one with flag off (baseline) and one with flag on (full).  
- Compare outputs; any divergence flags a hidden regression.  
- Complexity: O(n) where n is total test count, but runs are amortized because they share the same build artifact.  
- Trade‑off: slight increase in CI resources vs risk of silent regressions.

**Edge Cases**  

- Tests that depend on external state (e.g., cache invalidation) may behave differently when run in isolation.  
- Non‑deterministic tests could produce false positives; enforce idempotence or use deterministic mocks.  

**Optimize & Communicate**  

- Gradually roll out the shadow executor, starting with critical services.  
- Provide metrics: regression detection rate before/after, CI time impact.  
- Narrate that this ensures “no corner‑only” failures while keeping developer velocity high—exactly what a FAANG team expects for robust feature deployment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
