---
qid: vq_405e19d788__faang__local
question: How to tell Scala to look into a class file for some Java class?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 474
total_tokens: 712
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:07:05-05:00'
sources: []
---

**Clarify**  
You want Scala code to load or reference a compiled Java class (e.g., `com.example.MyJavaClass`) that resides in a `.class` file on the filesystem or inside a JAR. Confirm: *Is the class already on the compile‑time classpath?* *Do you need runtime dynamic loading (e.g., via reflection) or just static reference?*

**Approach**  
1. **Add to Classpath** – place the `.class` file or its containing JAR in `src/main/resources` or add it as a dependency in `build.sbt`.  
2. **Compile‑time import** – simply `import com.example.MyJavaClass` and use it like any Scala class.  
3. **Runtime loading** – if the file isn’t on the classpath, create a custom `URLClassLoader`, point it to the directory or JAR, then `loadClass("com.example.MyJavaClass")`.

**Depth**  
```scala
// compile‑time usage
import com.example.MyJavaClass
val obj = new MyJavaClass()

// runtime dynamic loading
import java.net.{URL, URLClassLoader}
val jarUrl = new File("/path/to/my.jar").toURI.toURL
val loader = new URLClassLoader(Array(jarUrl), getClass.getClassLoader)
val clazz  = loader.loadClass("com.example.MyJavaClass")
val instance = clazz.getDeclaredConstructor().newInstance()
```
Complexity: O(1) for static import; dynamic loading incurs a class‑loader lookup (O(n) over URLs).  

**Edge cases**  
- Class not found → `ClassNotFoundException`.  
- Multiple versions on the classpath → ambiguous binding.  
- Security manager restrictions when creating a new loader.

**Optimize & communicate**  
Prefer static imports for performance and type safety; use dynamic loading only for plugin or OSGi‑style architectures. Explain that adding to the SBT `libraryDependencies` is the idiomatic way in Scala projects, keeping build reproducible and testable. This shows clear problem understanding, systematic solution, technical depth, and awareness of pitfalls—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
