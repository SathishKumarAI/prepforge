---
qid: vq_479cd7b193__think__local
question: What are keywords in Python?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 184
output_tokens: 375
total_tokens: 559
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T01:30:44-05:00'
sources: []
---

**1️⃣ Clarify the question & state assumptions**  
Ask whether the user wants a definition *or* examples, and assume they’re new to Python and need both a conceptual description and some code snippets.

**2️⃣ Mental model: “reserved words” vs. “keywords”**  
Explain that in Python’s grammar there is a fixed set of identifiers that are reserved for language syntax—those are the **keywords**. They cannot be used as variable names, function names, etc., because they have special meaning to the interpreter.

**3️⃣ Step‑by‑step reasoning**  

1. Define “keyword” – an identifier with a syntactic role (e.g., `if`, `for`).  
2. Show that keywords are listed in the standard library (`import keyword; print(keyword.kwlist)`).  
3. Mention their immutability: they’re built into the language’s grammar, not just a convention.  
4. Provide a short table of common ones and their use cases.  
5. Optionally note that the set can change between Python versions (e.g., `match` in 3.10).

**4️⃣ Common traps to avoid**  

- Confusing keywords with “built‑in functions” (`len`, `print`).  
- Forgetting that some words are *not* keywords but are still reserved by convention (`self`, `cls`).  
- Assuming the keyword list is static across all Python releases.

**5️⃣ Sanity‑check & communicate clearly**  

- Verify the keyword list matches the current interpreter.  
- Use a concise, friendly tone: “In Python, these words are part of the language itself…”.  
- End with a quick recap and invite follow‑up if they need deeper examples or version specifics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
