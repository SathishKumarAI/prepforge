---
qid: vq_c3824e4b47__faang__local
question: What is the definition scope in Python?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 505
total_tokens: 735
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:32:17-05:00'
sources: []
---

**Clarify**  
The interviewer asks for “definition scope” in Python—i.e., how names (variables, functions, classes) become visible during execution. I’ll assume they want the scoping rules: local, enclosing, global, and built‑in, plus the LEGB hierarchy and the `global`/`nonlocal` keywords.

**Approach**  
1. Define the four scopes in order of lookup priority.  
2. Explain how Python builds a *scope chain* at compile time.  
3. Show how name resolution works with an example.  
4. Mention special cases (module attributes, class blocks, comprehensions).  

**Depth**  
- **Local**: inside a function or lambda; created on first assignment.  
- **Enclosing**: any surrounding function scopes (lexical closure).  
- **Global**: module‑level scope; accessed via the `globals()` dictionary.  
- **Built‑in**: Python’s standard names (`len`, `int`, etc.) in the `builtins` module.

Lookup follows **LEGB**: Local → Enclosing → Global → Built‑in.  
The compiler decides whether a name is local by seeing an assignment in that block; otherwise it searches outward. Use of `global var` or `nonlocal var` explicitly binds the name to the corresponding higher scope, overriding the default rule.

Example:

```python
x = 1          # global

def outer():
    y = 2      # enclosing for inner
    def inner():
        nonlocal y   # bind to outer's y
        x += 3       # uses global x
        return x + y
```

**Edge cases**  
- Comprehensions create a new, implicit local scope (Python 3).  
- Class bodies are executed in their own local namespace.  
- `exec`/`eval` can alter the global or built‑in namespaces.  

**Optimize & communicate**  
I’d stress that understanding LEGB prevents subtle bugs like unintentionally shadowing globals. In a real interview, I’d sketch a quick diagram of the scope chain and walk through a small code snippet to demonstrate name resolution in action. This shows clear reasoning, depth, and anticipation of tricky edge cases—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
