---
qid: ing_6586fc509b__fp__local
question: 'Explain: The CLAUDE.md Manifest Pattern — Claude Code'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 421
total_tokens: 592
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:41:06-05:00'
sources: []
---

**The CLAUDE.md Manifest Pattern – a principled recipe for self‑documenting code**

At its core the pattern answers *“how can I make my source both executable and human‑readable without duplicate effort?”*  
In any software project the two orthogonal dimensions are **logic** (the algorithm) and **metadata** (comments, documentation, tests). If we force them to live in separate files or intermix them arbitrarily, we incur *maintenance friction*: every change to the logic may break the docs, and vice versa.  

The CLAUDE.md Manifest Pattern resolves this by treating the source file as a *single declarative artefact* that contains:

1. **Executable code** – a well‑structured Python/JS block with clear entry points.
2. **Declarative annotations** – inline `# @` tags or Markdown front‑matter that describe inputs, outputs, invariants, and edge cases.
3. **Self‑executable tests** – tiny test snippets that run when the file is imported (`if __name__ == "__main__": …`).

Because annotations are *data*, they can be parsed by tooling to generate:

- **Unit tests** (via a harness that reads `# @expect`).  
- **API docs** (Markdown generated from the tags).  
- **Lint rules** (checking that every public function has an `@input`/`@output` pair).

This yields *formal specification* without extra files: the source itself is its own spec.  

A non‑obvious insight: by treating annotations as data, we enable *optimisation of test coverage*. A static analyser can compute the **coverage graph** from the tags and highlight missing edge cases before runtime, turning documentation into a *proof obligation* rather than an afterthought. This aligns with the principle of *design‑by‑contract* but scales to large codebases because the contract lives in the same file as the implementation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
