---
qid: ing_480024b9c4__fp__local
question: A one-line system-prompt change is in a PR. What runs before it merges,
  and what blocks it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 297
total_tokens: 479
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:38:27-05:00'
sources: []
---

**What runs before the PR merges**

1. **Continuous‑Integration (CI) pipeline** –  
   *A lightweight script is triggered on every push.*  
   • Linting (`eslint`, `flake8`) checks syntax and style.  
   • Unit tests run with a test runner (`pytest`, `jest`).  
   • Static type checkers (`mypy`, `tsc`) validate type contracts.

2. **Automated code‑review bots** –  
   *Bots like Dependabot, CodeClimate, or GitHub’s “CodeQL” scan the diff.*  
   They flag security vulnerabilities, outdated dependencies, and potential regressions in the new prompt logic.

3. **Manual review** –  
   An assigned reviewer must approve changes that affect system‑prompt handling: they verify that the one‑liner preserves existing semantics (e.g., no unintended token expansion) and aligns with policy constraints.

**What blocks the merge**

- **CI failures** (lint, test, type errors).  
- **Security or policy violations** flagged by bots.  
- **Unapproved reviewer comments**—the PR must receive a “+1” from all required reviewers before GitHub allows merging.  

In short: the CI pipeline and automated scanners run first; any failure or reviewer denial stops the merge until resolved.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
