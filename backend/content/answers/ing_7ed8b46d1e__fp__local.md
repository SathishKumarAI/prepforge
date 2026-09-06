---
qid: ing_7ed8b46d1e__fp__local
question: 'Explain: Title: Evaluating Large Language Models Trained on Code'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 456
total_tokens: 628
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:35:16-05:00'
sources: []
---

**Why we evaluate code‑trained language models?**  
A model that “writes” code must satisfy two hard constraints: *syntactic validity* (the program parses) and *semantic correctness* (it performs the intended task). These constraints map naturally onto **information theory** and **optimization**.  

1. **Information bottleneck** – The model compresses a distribution over all possible programs that solve a specification into a finite representation. Its capacity must be large enough to capture this high‑entropy set but small enough to avoid memorizing idiosyncratic libraries.  
2. **Objective alignment** – Training loss (e.g., cross‑entropy on token sequences) optimizes for next‑token predictability, not for task success. Evaluation therefore requires *task‑level metrics* that expose this misalignment.

**Evaluation pipeline**

| Stage | Metric | Insight |
|-------|--------|---------|
| **Token‑level** | Perplexity, BLEU | Measures surface syntax; low perplexity ≠ correct program. |
| **Structural** | AST similarity, parse‑rate | Captures syntactic correctness; high parse‑rate is a necessary but not sufficient condition. |
| **Functional** | Unit‑test pass rate, static analysis violations | Directly tests semantics; reveals subtle bugs that surface‑level metrics miss. |
| **Human‑in‑the‑loop** | Code review ratings, developer effort savings | Validates practical utility and catches issues beyond automated tests (e.g., maintainability). |

A non‑obvious insight: *syntactic adequacy is a weak proxy for semantic success because code often contains “dead” branches or unused imports that still parse but never execute.* Thus, the most informative evaluation comes from **dynamic execution** under diverse inputs. This mirrors how compilers use *type checking* to prune impossible programs before runtime.

In short, evaluating code‑trained LLMs is an exercise in aligning a probabilistic sequence model with deterministic program semantics, requiring metrics that span syntax, structure, and real‑world behavior.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
