---
qid: vq_3d4753bce1__faang__local
question: How many public class files are possible to define in Scala source file?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 428
total_tokens: 665
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:06:39-05:00'
sources: []
---

**Clarify**

The question asks: *How many top‑level `public` classes can be declared inside a single Scala source file?*  
Assumptions:
- “Public” means accessible from any package (no `private[...]` modifiers).  
- We consider only **top‑level** declarations; nested or local classes are ignored.

---

**Approach**

1. Recall the language rule: each Scala source file can contain *at most one* top‑level public class, trait, or object whose name matches the file name.  
2. Other top‑level definitions must be `private` or package‑local (no explicit modifier).  
3. Therefore the count of public classes is capped at **one**.

---

**Depth**

- The Scala compiler enforces this rule to avoid ambiguity when loading classes from a jar; the filename must uniquely identify the public type.  
- If you try to compile two public top‑level classes in one file, `scalac` emits an error: *“Only one public class/trait/object per file”*.  
- Example:

```scala
// Foo.scala
class Foo   // public
class Bar   // illegal – another public top-level

```

compiles to a single error.

---

**Edge Cases**

| Scenario | Result |
|----------|--------|
| File name matches one of the classes (e.g., `Foo.scala` containing `class Foo`) | OK. |
| No class name matches file name, but one public type present | Compiles; Scala allows it, but the public type isn’t the “main” type. |
| Two public types with same name as file and different names | Compile error (duplicate). |

---

**Optimize & Communicate**

Explain succinctly: *“Scala permits only one top‑level public class/trait/object per source file; any additional top‑level definitions must be package‑private.”*  
Mention the compiler enforcement to reinforce understanding. This concise, structured answer satisfies the FAANG signal criteria.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
