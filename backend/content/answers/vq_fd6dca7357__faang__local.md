---
qid: vq_fd6dca7357__faang__local
question: Which of the following is not correct about an Exception ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 416
total_tokens: 650
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:43:58-05:00'
sources: []
---

**Clarify**

> *Question:* “Which of the following is **not** correct about an exception?”  
> I’ll treat it as a multiple‑choice question.  The goal is to identify the false statement among common facts about exceptions in Java (the same logic applies to most OOP languages).

---

### Approach

1. List typical true statements about exceptions.
2. Compare each with the options (assumed).
3. Pick the one that contradicts standard language behavior.

---

### Depth

| # | Statement | Correct? | Reason |
|---|-----------|----------|--------|
| 1 | **Exceptions are unchecked by default** | ✅ | Only checked exceptions must be declared or caught. |
| 2 | **An exception can be thrown without being declared** | ✅ | `throw new RuntimeException();` is allowed. |
| 3 | **All exceptions inherit from `Object`** | ❌ | They inherit from `Throwable`, which in turn inherits from `Object`. |
| 4 | **You can catch multiple exception types with a single catch block (Java 7+)** | ✅ | Multi‑catch syntax (`catch(IOException | SQLException e)`) is legal. |

Thus, the *not correct* statement is:

> **“All exceptions inherit from `Object`.”**

---

### Edge Cases

- Some languages (e.g., C++) treat all errors as objects of type `std::exception`; still they derive from a common base but not directly from `Object`.
- In Java, custom exception classes *must* extend `Throwable`. Forgetting this yields a compile‑time error.

---

### Optimize & Communicate

I’d present the answer succinctly, then explain why the chosen statement fails (inheritance hierarchy). This demonstrates clear reasoning and knowledge of language internals—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
