---
qid: vq_182597abc5__faang__local
question: Difference between Call-by-value and call-by-name parameter?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 598
total_tokens: 832
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T17:59:37-05:00'
sources: []
---

**Clarify**

You’re asking about *parameter passing* in programming languages.  
*Call‑by‑value*: the argument’s **current value** is copied into the formal parameter.  
*Call‑by‑name*: the argument is **re‑evaluated each time it’s used** inside the function (as if the expression were substituted directly).  
Assumptions: we’re dealing with pure functions, no side‑effects in arguments, and a language that supports both semantics (e.g., Ada, Algol 68).

---

**Approach**

1. Explain the core difference in evaluation strategy.  
2. Illustrate with a concise example.  
3. Discuss implications for performance, determinism, and side‑effects.  

---

**Depth**

| Feature | Call‑by‑value | Call‑by‑name |
|---------|---------------|--------------|
| Evaluation | Once, before call | Every use inside the function |
| Copying | Value copied (deep copy if mutable) | No copying; expression substituted |
| Side‑effects | Argument evaluated only once → no duplicate side‑effects | Each evaluation may trigger side‑effects again |
| Determinism | Predictable order | Depends on how many times/when used |
| Performance | O(1) overhead for simple types | Potentially high if argument is expensive to compute |

**Example (Ada)**

```ada
procedure Inc(X : in out Integer) is
begin
   X := X + 1;
end;

I := 5;      -- value
Inc(I);      -- call‑by‑value: I becomes 6

function F return Integer is
begin
   Put_Line("Computing");  -- side‑effect
   return 10;
end;

procedure PrintTwice(X : in out Integer) is
begin
   Put_Line(Integer'Image(X));
   Put_Line(Integer'Image(X));
end;

PrintTwice(F);  -- call‑by‑name: "Computing" printed twice, X=20
```

---

**Edge Cases**

- **Mutating arguments**: call‑by‑value protects the caller; call‑by‑name can expose hidden state changes.  
- **Infinite recursion**: call‑by‑name may re-evaluate an argument that itself calls the function again → potential stack overflow.  
- **Lazy evaluation**: call‑by‑name is essentially a form of laziness, useful for infinite data structures but risky if side‑effects are present.

---

**Optimize & Communicate**

When designing APIs, prefer *call‑by‑value* for safety and clarity unless you need lazy evaluation (e.g., streams). If performance is critical and arguments are cheap, call‑by‑name can reduce unnecessary recomputation. Always document the chosen strategy so callers understand potential side‑effects or performance implications.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
