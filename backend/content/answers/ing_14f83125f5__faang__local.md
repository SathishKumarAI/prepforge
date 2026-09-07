---
qid: ing_14f83125f5__faang__local
question: 'Explain: Continuous Refactoring — 10 Good Coding Principles to Improve
  Code Quality'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 515
total_tokens: 753
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:31:55-05:00'
sources: []
---

**Continuous Refactoring – 10 Principles for Higher‑Quality ML Code**

| # | Principle | Why it Matters |
|---|-----------|----------------|
|1|**Single Responsibility**|Each module/class should do one thing; eases testing and reuse.|
|2|**Explicit Dependencies**|Inject data pipelines, models, hyperparams—no hidden globals.|
|3|**Clear Naming & Documentation**|Descriptive names + docstrings reduce cognitive load for reviewers.|
|4|**Immutable Data Structures**|Prefer `frozenset`/`tuple` over mutable lists to avoid side‑effects in parallel training.|
|5|**Avoid Magic Numbers**|Use constants or config files; makes hyper‑parameter tuning transparent.|
|6|**Modular Loss & Metric Functions**|Define as pure functions—easily swapped and unit‑tested.|
|7|**Versioned Artifacts**|Store checkpoints, configs, and data splits with reproducible tags.|
|8|**Automated Tests (unit + integration)**|Catch regressions when refactoring training loops or feature engineering steps.|
|9|**Profiling & Bottleneck Isolation**|Use `cProfile`/`torch.profiler`; refactor only hot spots, not entire code.|
|10|**Continuous Integration Pipelines**|Run tests, linting, and static type checks on every commit to surface issues early.|

---

### How I’d Apply These in an Interview

1. **Clarify**: Restate the goal—maintain a clean, testable ML pipeline while iterating rapidly.  
2. **Approach**: Build a lightweight CI that runs unit tests for each refactor; use feature flags to roll out changes safely.  
3. **Depth**: Show code snippets illustrating dependency injection and immutable data usage; discuss time/space complexity of pure functions vs in‑place ops.  
4. **Edge Cases**: Handle stale checkpoints, missing config values, or race conditions in distributed training.  
5. **Optimize & Communicate**: Highlight trade‑offs (e.g., immutability vs memory overhead) and explain why continuous refactoring keeps the codebase maintainable for large teams.

This structured answer demonstrates problem understanding, systematic planning, technical depth, edge‑case awareness, and clear communication—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
