---
qid: vq_7872d87494__fp__local
question: Does Scala and Java support call-by-name?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 465
total_tokens: 634
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:41:53-05:00'
sources: []
---

**Call‑by‑Name in the JVM**

The core problem is *lazy evaluation*—we want an argument to be re‑evaluated each time it’s used, not once at call time. In a language that compiles directly to bytecode (Java, Scala), we must represent “re‑evaluation” as a **thunk**: a zero‑argument function that yields the value when invoked.

*Why the JVM needs thunks.*  
Bytecode has no notion of “call by name”; every argument is passed as a value. To emulate laziness we therefore wrap the expression in an object implementing `java.lang.Runnable` or, more idiomatically in Scala, a zero‑argument function type (`() => T`). Each use of the parameter triggers a call to that thunk, guaranteeing fresh evaluation.

*Java’s support.*  
Java itself has no syntax for call‑by‑name. However, since Java 8 we can pass `Supplier<T>` or lambda `() -> T` and manually invoke it:  

```java
int f(Supplier<Integer> x) { return x.get(); }
```

This is *not* a language feature; the programmer must remember to call `.get()`.

*Scala’s support.*  
Scala has built‑in syntax for call‑by‑name parameters, written `=> T`. The compiler translates them into thunks automatically:

```scala
def f(x: => Int) = x + x   // expands to def f(thunk: () => Int)
```

Thus every use of `x` calls the thunk.

*Non‑obvious insight.*  
Because a call‑by‑name argument is re‑evaluated, it can have **side effects** on each access. This makes reasoning harder; the compiler cannot apply common‑subexpression elimination across uses of `x`. In practice, Scala’s implicit conversion to thunks also means that passing a method reference (`foo _`) yields a *single* thunk reused for all accesses—avoiding repeated re‑invocation and thus changing performance characteristics. Understanding this subtlety is key when designing lazy APIs in the JVM.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
