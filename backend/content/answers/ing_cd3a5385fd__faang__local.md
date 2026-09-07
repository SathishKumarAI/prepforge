---
qid: ing_cd3a5385fd__faang__local
question: 'Explain: Signatures: Describing the Task — Dspy'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 468
total_tokens: 702
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:37:33-05:00'
sources: []
---

**Clarify**  
We’re asked to explain how *signatures* are used in DSPy to describe a task. I’ll assume the interviewer wants an overview of the signature abstraction, its syntax, and why it matters for composing AI pipelines.

**Approach**  
1. Define what a signature is in DSPy (a typed interface).  
2. Show its components: inputs, outputs, constraints.  
3. Explain how signatures drive task definition, validation, and reuse.  
4. Mention practical examples (e.g., `@dspy.signature` decorator).

**Depth**  
DSPy’s *signature* is a lightweight, declarative schema that specifies the expected inputs, their types, and the desired outputs of an AI “task.” It looks like:

```python
from dspy import signature

@signature
def Summarize(doc: str) -> str:
    pass
```

- **Inputs** are annotated with Python type hints; DSPy uses these to build prompts or validate embeddings.  
- **Outputs** define the shape of the returned value, enabling downstream components to know what to expect.  
- Optional constraints (e.g., `max_length=200`) can be added via keyword arguments.

When a task is instantiated, DSPy automatically generates a prompt template and selects an LLM model that satisfies the signature’s contract. Signatures also enable *automatic validation*: if an input doesn’t match its type or an output is malformed, DSPy raises an error before the request hits the LLM, saving tokens and cost.

**Edge Cases**  
- Missing or ambiguous types lead to runtime errors; always provide clear annotations.  
- Complex nested structures (e.g., lists of dicts) require custom validators.  
- Version mismatches between signature and model can cause silent failures if not checked.

**Optimize & Communicate**  
To improve, signatures could be enriched with probabilistic type checks or schema inference from prior runs. I’d explain that this abstraction mirrors function contracts in statically typed languages, giving developers a clear contract for AI behavior while DSPy handles the heavy lifting of prompt construction and model selection. This keeps pipelines modular, testable, and cost‑efficient.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
