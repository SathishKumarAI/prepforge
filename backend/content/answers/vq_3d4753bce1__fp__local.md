---
qid: vq_3d4753bce1__fp__local
question: How many public class files are possible to define in Scala source file?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 413
total_tokens: 587
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:31:54-05:00'
sources: []
---

In Scala a *source* may contain any number of top‑level definitions: classes, traits, objects, type aliases, etc.  
The only restriction comes from the **file‑name / public class rule** that is inherited from Java’s compiler and the JVM class loader.  

1. **JVM requirement** – every compiled bytecode file (`Foo.class`) must be loadable by a class loader that expects the fully qualified name to match the path on disk: `foo/Foo.class` for package `foo`.  
2. **Scala source → bytecode mapping** – each *public* (i.e., not `private[this]`, `protected`, or nested inside another definition) top‑level entity with a *top‑level name* produces its own `.class` file whose name is that entity’s simple name plus the suffix `.class`.  
3. **Name uniqueness** – the compiler forbids two public top‑level entities of the same simple name in one source file, because they would generate identical bytecode files and break point‑cut resolution.

Thus a Scala source can contain *any* number of non‑public or nested definitions, but only **one public top‑level class (or trait/object)** per source file.  
The “why” is that the JVM loader needs a deterministic mapping from file to type; allowing multiple public types would force the compiler to emit ambiguous bytecode names and would break incremental compilation and binary compatibility.

**Non‑obvious insight:** Even though Scala lets you write multiple *private* classes in one file, they are still compiled into separate `.class` files. This means that a single source can inflate the number of class files on disk far beyond the “one public” rule, which is why large projects often split code into many small files to keep the bytecode layout predictable and avoid loader clashes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
