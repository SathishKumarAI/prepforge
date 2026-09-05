---
qid: ing_cfad114033__star__local
question: 'Explain: Object-oriented Programming — Imperative vs Functional vs Object-oriented
  Programming'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 317
total_tokens: 557
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:24:22-05:00'
sources: []
---

**Situation:** While leading a data‑science team at a fintech startup, we were tasked with refactoring our real‑time fraud detection system. The legacy codebase was spaghetti‑style imperative Python that made adding new features painful and introduced bugs.

**Task:** I needed to redesign the pipeline using clear programming paradigms—showing how imperative, functional, and object‑oriented styles differ—to make the code modular, testable, and scalable for future models.

**Action:** First, I mapped the current imperative flow: loops over transaction streams, mutable state, and side effects. Then I introduced a functional layer with pure functions (e.g., `score_transaction`, `normalize_features`) that accepted inputs and returned outputs without changing global state—this improved testability and parallelism. Next, I wrapped these functions in lightweight classes representing domain entities (`Transaction`, `FraudRuleSet`), employing encapsulation to bundle data and behavior; this allowed us to extend the system with new rule types via polymorphism. Throughout, I used type hints, pytest fixtures, and Docker for reproducibility.

**Result:** The refactored code cut feature‑development time by 35%, reduced runtime errors in production by 28%, and made unit tests run 4× faster. I learned that blending paradigms—using functional purity where state is minimal and object orientation for domain modeling—yields clean, maintainable ML pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
