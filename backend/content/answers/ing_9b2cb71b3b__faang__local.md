---
qid: ing_9b2cb71b3b__faang__local
question: 'Explain: Signatures & Modules — Prompt Optimization Dspy'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 504
total_tokens: 737
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:45:06-05:00'
sources: []
---

**Clarify**  
The interviewer wants an explanation of how *signatures* and *modules* work in DS‑Py’s prompt‑optimization framework, and why they matter for building reliable LLM pipelines. I’ll assume we’re talking about the open‑source DS‑Py library (used by Meta/Google etc.) that wraps prompts into reusable components.

**Approach**  
1. Define a *signature*: the formal contract of an LLM task (inputs → outputs).  
2. Show how a *module* implements that signature, possibly chaining other modules.  
3. Explain prompt‑optimization: automatically tuning prompt templates or parameters to hit desired metrics.  
4. Mention key APIs (`PromptTemplate`, `Module`, `Signature`, `optimize`).

**Depth**  
- **Signatures** are typed interfaces (e.g., `QuestionAnsweringSignature`) that declare required fields (`question: str`) and produced fields (`answer: str`). They allow static analysis, type‑checking, and composability.  
- **Modules** are concrete classes inheriting from `Module`; each implements `run(self, inputs)` according to its signature. A module can wrap an LLM call, a post‑processor, or another module—enabling pipeline composition.  
- DS‑Py’s *prompt‑optimization* takes a template with placeholders and a set of candidate values (e.g., temperature, instruction wording). It runs the module repeatedly, evaluates a loss function (BLEU, ROUGE, custom metric), and uses Bayesian optimization to converge on the best prompt variant.  
- The optimizer is agnostic to the underlying LLM; it just calls `module.run` with different inputs.

**Edge Cases**  
- *Non‑deterministic LLM outputs*: use multiple runs per configuration.  
- *Sparse data*: fallback to manual tuning or default prompts.  
- *Conflicting signatures*: raise a clear exception during module registration.

**Optimize & Communicate**  
To improve performance, cache intermediate results and parallelize trials. I’d explain the trade‑off: more trials = better prompt but higher compute cost. I’d conclude by noting that signatures enforce consistency across teams, while modules encapsulate logic so that prompt optimization can be applied uniformly—exactly what FAANGs need for production‑grade LLM services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
