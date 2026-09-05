---
qid: ing_2ca5d8fb7d__fp__local
question: What kinds of code-graded assertions can you use on LLM outputs, and where
  do they break down?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 529
total_tokens: 710
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:39:22-05:00'
sources: []
---

**Code‑graded assertions for LLMs**

| Assertion | Fundamental problem solved | Typical implementation |
|-----------|-----------------------------|------------------------|
| **Syntactic validity** | Guarantees the output can be parsed or compiled. | Lexer/grammar checks, regex, `json.loads`. |
| **Semantic consistency** | Ensures internal facts don’t contradict each other. | Knowledge‑graph alignment, type‑checker on extracted entities. |
| **Logical entailment** | Verifies that a claim follows from the prompt. | Automated theorem provers or SMT solvers over extracted propositions. |
| **Reference resolution** | Confirms pronouns and ellipses refer to correct antecedents. | Coreference models paired with string‑matching constraints. |
| **Statistical distribution tests** | Detects out‑of‑distribution or hallucinated content. | Kolmogorov–Smirnov on token probability histograms, Bayesian hypothesis testing. |

**Where they break down**

1. **Context limits** – Assertions that depend on distant context (e.g., global consistency) fail when the model can’t see all relevant tokens.
2. **Hallucinations & ambiguity** – Even perfect syntactic checks miss invented facts; logical provers can only operate on what is expressed, not what *should* be true.
3. **Non‑determinism** – Sampling introduces variance; deterministic assertions may flag legitimate variants as errors.
4. **Adversarial prompts** – Manipulating surface form to bypass parsers or cause mis‑resolution defeats many checks.

**A subtle insight**

LLMs output a *probability distribution* over tokens, not a single “answer.” Treating the generated text as a sample from that distribution allows Bayesian hypothesis tests (e.g., Bayes factors on token‑level likelihoods) to detect when an answer is statistically inconsistent with the model’s own training data. This probabilistic view exposes drift or intentional manipulation much earlier than deterministic assertions, yet it remains largely overlooked in current tooling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
