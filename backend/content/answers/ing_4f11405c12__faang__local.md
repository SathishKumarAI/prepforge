---
qid: ing_4f11405c12__faang__local
question: 'Explain: ​ Evaluator outputs — Evaluation concepts - Docs by LangChain'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 514
total_tokens: 750
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:48:26-05:00'
sources: []
---

**Clarify**

You’re asking how LangChain’s *Evaluator* component produces evaluation results—specifically the concepts it uses and where those docs live. I’ll assume we’re dealing with a single‑task evaluator (e.g., correctness or safety) in a production RAG pipeline.

---

**Approach**

1. Identify the **evaluation concept** (`Concept`) that maps to the metric you care about.  
2. Build an `Evaluator` instance, passing that concept and any optional parameters.  
3. Call `evaluate()` with the relevant *input*, *expected* and *output* objects.  
4. Inspect the returned `EvaluationResult`, which contains scores, pass/fail flags and explanation text.

---

**Depth**

- **Concepts** are defined in `langchain.evaluation.concepts`. Each is a subclass of `BaseConcept` and implements:
  - `name`: human‑readable identifier (e.g., “Correctness”).  
  - `evaluate(...)`: returns a numeric score and optional explanation.  
- The docs for each concept live under `docs/evaluations/` in the LangChain repo, e.g. `correctness.md`.  
- Example:

```python
from langchain.evaluation import Evaluator, CorrectnessConcept

eval = Evaluator(concept=CorrectnessConcept())
result = eval.evaluate(
    input="What is 2+2?",
    expected="4",
    output="Four"
)
print(result.score)        # 0.8
print(result.explanation)  # "Output is semantically correct but uses words instead of digits."
```

The `Evaluator` orchestrates the concept, handles token limits and optional LLM prompts for explanation.

---

**Edge Cases**

- Empty or missing `expected` → returns NaN score.  
- Long outputs trigger truncation; test with > 4000‑token responses.  
- Concept mismatch (e.g., using a safety concept on a factual QA) may raise `ValueError`.

---

**Optimize & Communicate**

- For batch evaluation, wrap calls in asyncio or multiprocessing to avoid serial latency.  
- Cache results of expensive LLM‑based concepts.  
- When presenting to stakeholders, expose the raw score and a concise explanation; optionally log the full reasoning trace for audit.

This structure keeps the pipeline modular, testable, and ready for scaling across multiple evaluation criteria.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
