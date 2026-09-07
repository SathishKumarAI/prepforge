---
qid: ing_804e3c94a7__faang__local
question: 'Explain: How would you evaluate an autonomous software engineering agent?
  Explain why SWE-bench pass rates mislead.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 471
total_tokens: 715
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:43:33-05:00'
sources: []
---

**Clarify**  
We need a metric that tells whether an *autonomous* code‑generation agent actually delivers production‑ready, maintainable software.  The “SWE‑Bench” pass rate (percentage of test cases passed) is often cited, but it only measures surface correctness on synthetic prompts and ignores deeper engineering qualities.

Assumptions to confirm:  
- The agent can be invoked with a specification and produce source code + tests.  
- We have access to the runtime environment and version control history.  

**Approach**  
1. Define a **multi‑dimensional evaluation rubric** (correctness, performance, readability, test coverage, documentation, security).  
2. Automate each dimension: static analysis tools, benchmark suites, linting, code‑review bots, and vulnerability scanners.  
3. Aggregate results into an overall *Engineering Score* weighted by project priorities.

**Depth**  
- **Correctness**: run unit/ integration tests + fuzzing; compute pass rate but also failure modes.  
- **Performance**: benchmark critical paths; measure latency & memory.  
- **Readability**: cyclomatic complexity, comment density, adherence to style guides.  
- **Test Coverage**: aim ≥90 % line coverage with meaningful assertions.  
- **Documentation**: auto‑extract API docs and compare against spec.  
- **Security**: static analysis for injection, buffer overflows, etc.  

Complexity is linear in code size per dimension; overall O(n). Trade‑offs: higher weights on coverage may hide subtle bugs; balance with dynamic testing.

**Edge Cases**  
- Agents that cheat by hard‑coding test answers (inflate pass rate).  
- Non‑deterministic outputs leading to flaky benchmarks.  
- Projects where performance is secondary but readability dominates.

**Optimize & Communicate**  
Explain the rubric as a *continuous quality score* rather than a single pass/fail. Highlight that SWE‑Bench scores can be gamed by tailoring prompts, whereas our holistic metric forces compliance with real engineering standards. Conclude: “A true autonomous engineer must satisfy not only tests but also maintainability and security—metrics that SWE‑Bench alone fails to capture.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
