---
qid: vq_405e19d788__eli5__local
question: How to tell Scala to look into a class file for some Java class?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 278
total_tokens: 441
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:09:11-05:00'
sources: []
---

Imagine you’re a librarian (Scala) in a big library that also houses a section of foreign books written in another language (Java). You want to find a specific book (class) that’s actually stored inside a special “box” (JAR file or class file).  

The way you ask the librarian is by giving it the exact *full name* of the book, including its “address” in the library: the package path and the class name. In Java terms, this is called the **fully‑qualified class name**—for example `com.example.MyClass`. Scala’s compiler (or runtime) will look through all the JARs on the classpath for a file named `MyClass.class` inside a folder structure that matches the package (`com/example/`).  

So to “tell Scala” to use a Java class, just import it with its fully‑qualified name:

```scala
import com.example.MyClass   // Scala now knows where to find MyClass in the JAR
```

Make sure the JAR containing `MyClass.class` is listed on the classpath (via build tools like sbt or Maven). That’s all—Scala simply follows the address you give it and pulls the Java class from wherever it lives.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
