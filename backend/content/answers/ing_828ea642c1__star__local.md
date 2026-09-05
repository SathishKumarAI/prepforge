---
qid: ing_828ea642c1__star__local
question: 'Explain: Code-based evals (fast, cheap, deterministic)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 302
total_tokens: 540
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:54:32-05:00'
sources: []
---

**Situation:**  
During a sprint at my previous company we were building an AI‑driven chatbot that needed to generate SQL queries from natural language. The QA team was struggling with slow manual review of each generated query, costing us hours per test cycle and leading to missed edge cases.

**Task:**  
I had to create a fast, cheap, deterministic evaluation pipeline so that every commit could be automatically verified for correctness without human intervention.

**Action:**  
I designed a set of code‑based evaluators: first, a parser that converted the generated SQL into an abstract syntax tree (AST) using ANTLR; second, a semantic checker that compared the AST against our schema and business rules with custom Python assertions; third, a lightweight execution stub that ran the query against a mock database populated with 10 k rows. I wrapped these in a CI job written in Go for speed, caching compiled binaries across runs. The pipeline produced a JSON report of pass/fail counts and latency.

**Result:**  
The new evals cut review time from 3 hours to under 30 seconds per commit, increased test coverage by 70%, and reduced bug‑in‑production incidents related to malformed queries by 85%. I learned how deterministic code checks can replace costly manual QA while maintaining high confidence in AI outputs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
