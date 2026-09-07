---
qid: ing_76cea9a769__faang__local
question: 'Explain: Pydantic Evals — Pydantic Evals | Pydantic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 425
total_tokens: 666
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:19:55-05:00'
sources: []
---

**Clarify**  
You’re asking about *Pydantic evals*—the feature that lets you embed Python expressions in a Pydantic model’s field definitions so the value can be computed at runtime. The key assumption is that the user wants dynamic defaults or derived fields, not just static values.

**Approach**  
1. Highlight where evals are used (e.g., `Field(default_factory=lambda: ...)` or `@validator`).  
2. Explain how Pydantic parses the string/expr, evaluates it in a controlled environment, and injects the result into the model instance.  
3. Note the safety checks that prevent arbitrary code execution.

**Depth**  
- **Syntax**: `Field(default=Eval("now() + timedelta(days=1)"))` or `@validator('date', pre=True)` returning `Eval(...)`.  
- **Execution context**: Pydantic builds a sandboxed globals dict containing only whitelisted builtins (`datetime`, `timedelta`, etc.) and the model’s own attributes.  
- **Performance**: Each eval is compiled once per model class; subsequent instances reuse the bytecode, so cost is negligible compared to validation.  
- **Use cases**: dynamic defaults (e.g., auto‑timestamp), computed properties that depend on other fields, or conditional defaults based on config.

**Edge Cases**  
- Referencing undefined names → `ValidationError`.  
- Mutating globals inside an eval can break isolation; Pydantic disallows assignment.  
- Circular dependencies between fields using evals may raise recursion errors.

**Optimize & Communicate**  
Recommend limiting eval expressions to pure functions, documenting allowed imports, and testing with a unit that passes invalid names or heavy computations. When explaining, keep the narrative tight: “Pydantic’s Eval lets you write concise, safe runtime defaults—compiled once, executed per instance, with a sandboxed context.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
