---
qid: vq_405e19d788__fp__local
question: How to tell Scala to look into a class file for some Java class?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 438
total_tokens: 613
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:32:14-05:00'
sources: []
---

**Loading a Java class from a compiled Scala class**

Scala runs on the JVM, so it can use the standard `ClassLoader` mechanism to discover classes that are present in the same binary (JAR or directory).  
The fundamental problem is: *“I have a Java type that may be added at runtime; how do I find and instantiate it from my Scala code?”*  

1. **Obtain the right loader** – every `Class` has an associated `ClassLoader`.  The simplest choice is `Thread.currentThread.getContextClassLoader`, which already knows about all classes visible to the running application (including those in the same JAR).  
2. **Ask for the class by name** – use `loader.loadClass("com.example.MyJava")`.  This returns a raw `Class[_]` that is *unchecked* with respect to generics, so you must cast or wrap it in a typed reference.  
3. **Instantiate (if needed)** – call `clazz.getDeclaredConstructor().newInstance()`; if the constructor takes arguments, supply them accordingly.  
4. **Bridge types** – once you have an instance of type `AnyRef`, you can treat it as a Java interface or superclass that Scala knows about, enabling polymorphism.

> **Non‑obvious insight:**  
> Instead of loading by *string*, you can use Scala’s *TypeTag* (or *Manifest*) to capture the desired class at compile time and then invoke `Class.forName(typeTag.runtimeClass.getName)` – this keeps type safety while still leveraging runtime discovery.  It also works seamlessly with generic types, something plain string names cannot express.

In short: get the context loader → load by fully‑qualified name → instantiate if required → cast to a known Java type. This pattern satisfies the optimization principle of *lazy resolution* (classes are only loaded when needed) and keeps the system flexible for dynamic plugin architectures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
