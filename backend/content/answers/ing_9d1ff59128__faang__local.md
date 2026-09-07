---
qid: ing_9d1ff59128__faang__local
question: 'Q: How would you design the testing strategy for an AI coding agent in
  CI?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 466
total_tokens: 705
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:49:22-05:00'
sources: []
---

**Clarify**  
We need a CI pipeline that validates an *AI coding agent*—a model that writes code from prompts. Assumptions: (1) the agent outputs source files; (2) we have deterministic evaluation harnesses; (3) tests must run quickly on every commit; (4) we care about correctness, style, and safety.

**Approach**  
1. **Unit‑level prompt tests** – fixed prompts → expected snippets.  
2. **Integration harness** – compile/run generated code against a suite of unit tests.  
3. **Coverage & linting** – static analysis on the output.  
4. **Safety checks** – sandboxed execution, whitelist APIs.  
5. **Regression guard** – version‑controlled “golden” outputs.

**Depth**  
- *Prompt tests*: store prompt–expected diff pairs; run in a Docker container with deterministic seed to mitigate stochasticity.  
- *Compilation*: use the target language compiler (e.g., `gcc -Wall`) and capture exit status & warnings.  
- *Runtime tests*: run unit tests via pytest/JUnit, aggregate results into CI reports. Complexity: O(N) per test case; total runtime ≈ O(TotalLines × CompileTime).  
- *Linting*: apply ESLint/Pylint on generated code; fail if severity > 0.  
- *Sandbox*: execute in a read‑only FS, network disabled, with timeouts to catch infinite loops.

**Edge Cases**  
- Non‑deterministic prompts → use seed control or compare ASTs instead of raw text.  
- Large outputs causing CI timeouts → split tests into micro‑tasks.  
- Generated code that compiles but fails hidden tests – caught by the full harness.  

**Optimize & Communicate**  
Speed up by caching compiler artifacts and parallelizing test runs across agents. Use feature flags to enable deeper safety checks only for risky commits. In communication, explain each layer’s purpose, trade‑offs (determinism vs realism), and how we balance quick feedback with thorough validation. This structured plan satisfies FAANG interview expectations on clarity, depth, and scalability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
