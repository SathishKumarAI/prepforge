---
qid: ing_96260dbfed__fp__local
question: 'Explain: How do you evaluate a code-editing model before shipping it? Design
  the offline and online eval story for tab or agent edits.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 187
output_tokens: 626
total_tokens: 813
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:24:42-05:00'
sources: []
---

**Why we evaluate a code‑editing model**

The core problem is *semantic correctness*: the output must compile, preserve program behavior, and improve developer productivity. This is a constrained optimization in a high‑dimensional discrete space (the set of all syntactically valid edits). The evaluation therefore has to verify that the proposed edit satisfies multiple objective functions—compile‑ability, functional equivalence, style compliance—and that it does so reliably across diverse codebases.

---

### Offline Evaluation

| Stage | What we test | Why it matters |
|-------|--------------|----------------|
| **Unit correctness** | Run the model on a curated dataset of buggy snippets with known patches (e.g., Defects4J). Measure *exact match* and *functional equivalence* via unit tests. | Guarantees that the model can recover ground‑truth fixes. |
| **Compilation check** | Compile every generated edit locally; compute compile success rate. | Eliminates syntactic failures early. |
| **Semantic similarity** | Use AST‑aware metrics (e.g., tree edit distance) and static analysis to compare before/after semantics. | Detects over‑aggressive edits that break logic. |
| **Coverage & robustness** | Vary input formatting, language versions, and library imports; test on large open‑source repos. | Ensures generalization beyond the training set. |
| **Safety filter** | Run a lightweight policy network to flag potentially dangerous changes (e.g., deleting public APIs). | Prevents regressions in production code. |

*Non‑obvious insight*: **Compile success is not enough**—the model can learn to “cheat” by producing trivial edits that compile but ignore the bug. Combining compilation with *semantic similarity* forces the model to learn the underlying intent.

---

### Online Evaluation

| Phase | Metric | Tool | Goal |
|-------|--------|------|------|
| **A/B test** | Edit acceptance rate, time‑to‑fix, post‑merge defect count | Feature flagging + telemetry | Quantify real‑world productivity gains. |
| **Latency & cost** | Inference latency, GPU hours per request | Profiling dashboards | Ensure the model meets SLA and remains cost‑effective. |
| **Human review** | Reviewer satisfaction, edit rework rate | Survey + issue tracker | Capture qualitative feedback that numbers miss. |
| **Regression detection** | Post‑merge build failures, CI pass rate | Continuous integration hooks | Catch subtle semantic regressions early. |

*Non‑obvious insight*: **Model confidence should be calibrated against developer trust**—a low‑confidence edit may still be valuable if accompanied by a clear explanation or rollback option. Thus, online metrics must include *explainability score* and *rollback frequency*, not just correctness.

---

By intertwining rigorous offline tests that guarantee functional soundness with nuanced online signals that capture human experience, we ensure the code‑editing model is both technically robust and genuinely useful before it reaches users.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
