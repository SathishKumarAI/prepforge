---
qid: ing_2fe5f10e63__faang__local
question: 'Explain: Java Exception Hierarchy — GitHub - Anshul619/Java: This repo
  contains java \"how to to-dos\", concepts etc. \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 260
output_tokens: 545
total_tokens: 805
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:34:48-05:00'
sources: []
---

**Clarify**  
You’re asking for a concise walk‑through of the *Java Exception Hierarchy* as used in typical code repositories (e.g., Anshul619’s “how to” repo). I’ll assume you want an overview that covers: where exceptions live, the main branches (`Error`, `Throwable`, `Exception`), checked vs. unchecked, and how to throw/handle them.

**Approach**  
1. Outline the root classes (`Object → Throwable`).  
2. Split into two sub‑trees: `Error` (irrecoverable system failures) and `Exception`.  
3. Within `Exception`, show the checked/unchecked split and key concrete types.  
4. Highlight common patterns in repository code.

**Depth**  

```text
Throwable (root)
├─ Error                 // JVM‑level problems, never caught
│   ├─ VirtualMachineError
│   └─ OutOfMemoryError
└─ Exception             // recoverable problems
    ├─ RuntimeException  // unchecked – no compile‑time check
    │   ├─ NullPointerException
    │   ├─ IllegalArgumentException
    │   └─ ...
    └─ Checked Exceptions
        ├─ IOException
        │   ├─ FileNotFoundException
        │   └─ ...
        ├─ SQLException
        └─ ...            // others (ClassNotFound, etc.)
```

- **Checked**: must be declared (`throws`) or caught.  
- **Unchecked**: no declaration required; often used for programming errors.

In a repo’s “how to” section you’ll see patterns like:

```java
try { /* risky code */ }
catch (IOException e) { /* recover */ }
finally { close(); }
```

or, for unchecked:

```java
Objects.requireNonNull(obj); // throws NullPointerException if null
```

**Edge Cases**  
- Mixing checked and unchecked in the same method.  
- Re‑throwing an exception with a new cause (`throw new IOException(e)`).  
- Using `Error` subclasses incorrectly (e.g., catching `OutOfMemoryError`).

**Optimize & Communicate**  
Explain that using unchecked for programmer mistakes keeps APIs cleaner, while checked forces API consumers to handle external failures. In code reviews, encourage explicit `throws` clauses and meaningful exception messages. Conclude by noting that a well‑structured hierarchy makes debugging faster and the repo more maintainable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
