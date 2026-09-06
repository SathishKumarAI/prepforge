---
qid: vq_94140bdeca__faang__local
question: Which of the following is not correct about User_Defined Exceptions ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 518
total_tokens: 754
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:23:02-05:00'
sources: []
---

**Clarify**  
The interview asks which statement about *user‑defined exceptions* (custom exception classes) is **incorrect**.  In Java a user‑defined exception is simply a class that extends `Throwable` (usually `Exception` or `RuntimeException`).  We need to identify the false claim among typical options.

---

### Common Statements & Why They’re True

| Statement | Truth |
|-----------|-------|
| It must extend `java.lang.Exception`. | **True** – most custom exceptions do, but they may also extend `RuntimeException` if unchecked. |
| A checked exception must be declared or caught. | **True** – compiler enforces this rule. |
| Custom exceptions can carry additional data via fields/methods. | **True** – useful for error codes, context, etc. |
| They can only be thrown with `throw`. | **False** – they can also be instantiated and returned or stored. |

---

### The Incorrect Statement

> **“A user‑defined exception cannot extend `RuntimeException`.”**

This is *not* correct because extending `RuntimeException` makes the exception unchecked, which is perfectly valid for custom error handling.

---

**Depth & Trade‑offs**  
- **Checked vs. Unchecked**: Checked forces API contracts; unchecked keeps method signatures clean but may hide bugs.
- **Serialization**: Custom exceptions should implement `Serializable` if they’ll cross JVM boundaries.
- **Performance**: Throwing exceptions is expensive; use them sparingly.

**Edge Cases to Test**

1. Throwing a custom exception without catching it → compilation error for checked, runtime failure for unchecked.
2. Serializing/deserializing a custom exception with extra fields.
3. Defining an abstract custom exception class.

**Optimize & Communicate**  
Explain that the interview expects you to spot the subtlety: while most people assume all custom exceptions must extend `Exception`, Java allows `RuntimeException` as well.  Conclude by highlighting how this flexibility lets developers choose between safety (checked) and convenience (unchecked).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
