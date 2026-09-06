---
qid: vq_840dc6e92d__faang__local
question: What is the difference between Function and Method in Scala?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 606
total_tokens: 840
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:20:12-05:00'
sources: []
---

## Clarify  
The interviewer asks: *“What’s the difference between a function and a method in Scala?”*  
Assumptions I’d confirm:  
- We’re talking about Scala 2.x/3.x, not a mix‑in of Java terms.  
- The context is pure language semantics (not API design).  

## Approach  
1. Define *function* vs *method*.  
2. Explain how methods are turned into function values (`FunctionN`).  
3. Highlight key differences in syntax, invocation, and type‑checking.  

## Depth  
| Aspect | Function | Method |
|--------|----------|--------|
| **Definition** | First‑class value of a type like `Int => Int`. Can be created with `val f = (x: Int) => x + 1`. | Member defined inside a class/trait/object, e.g. `def inc(x: Int): Int = x + 1`. |
| **Invocation** | Call by parentheses: `f(5)` or via `apply`: `f.apply(5)`. | Call by name: `obj.inc(5)`; no explicit `apply`. |
| **Type‑class** | Conforms to one of the standard function traits (`Function1`, `Function2`, …). | No separate trait; part of the enclosing type. |
| **Currying / Partial Application** | Native: `(x => y => x + y)` returns a `Function1`. | Requires auxiliary methods or implicit conversions (e.g., `obj.inc(5)` → `Int`). |
| **Overloading & Type Inference** | Functions can’t be overloaded; overload resolution is based on signature. | Methods support overloading and type inference in call sites. |
| **Eta‑expansion** | Implicit conversion from method to function (`obj.inc _`) yields a value of the function type. | No such conversion needed; methods are already callable. |

## Edge Cases  
- **Nullability**: Functions can be `null`; methods cannot (they’re always bound).  
- **Visibility**: Methods respect access modifiers on the enclosing class, while functions defined in local scope do not have that context.  
- **Performance**: A method call is usually a direct JVM invocation; an eta‑expanded function may allocate an object unless inlined by the compiler.

## Optimize & Communicate  
I’d finish by summarizing: *methods are syntactic sugar for callable members inside types, while functions are first‑class objects that can be passed around.* I’d mention that Scala’s implicit eta‑expansion bridges the gap, letting you treat a method as a function when needed. This showcases clear reasoning, depth, and an awareness of language internals—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
