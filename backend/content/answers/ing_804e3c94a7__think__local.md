---
qid: ing_804e3c94a7__think__local
question: 'Explain: How would you evaluate an autonomous software engineering agent?
  Explain why SWE-bench pass rates mislead.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 200
output_tokens: 416
total_tokens: 616
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T09:29:15-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
   - Define *autonomous* (self‑learning vs. scripted).  
   - Decide what “evaluate” means: accuracy, efficiency, safety, maintainability.  
   - Assume a test suite exists but is not exhaustive; real‑world tasks are diverse.

**2️⃣ Adopt a layered mental model**  
   - **Functional layer**: does the agent produce correct code?  
   - **Process layer**: how it arrives at solutions (search, inference, learning).  
   - **Robustness layer**: resilience to novel inputs and edge cases.  
   - **Human‑interaction layer**: explainability, debugging support.

**3️⃣ Reason step‑by‑step**  
   1. *Collect metrics* beyond pass/fail: time per task, code quality scores, failure modes.  
   2. *Design stress tests*: adversarial prompts, ambiguous specs, hidden constraints.  
   3. *Measure learning curves*: performance improvement over iterations.  
   4. *Simulate deployment*: integrate with CI/CD pipelines, monitor regressions.

**4️⃣ Beware of common traps**  
   - **Over‑reliance on benchmark pass rates**: they reward surface‑level compliance, not deep understanding.  
   - **Ignoring the “unknown unknowns”**: benchmarks can hide corner cases that matter in production.  
   - **Treating any correct output as equally good**: code may be syntactically right but semantically flawed.

**5️⃣ Sanity‑check & communicate clearly**  
   - Cross‑validate with *human expert* reviews on a random sample of failures.  
   - Present a balanced report: strengths, weaknesses, and actionable improvement paths.  
   - Emphasize that SWE‑bench pass rates are a *starting point*, not a definitive verdict.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
