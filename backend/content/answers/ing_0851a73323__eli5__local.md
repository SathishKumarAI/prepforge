---
qid: ing_0851a73323__eli5__local
question: 'Explain: The Six Guiding Principles of REST — What is REST?: REST API Tutorial'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 369
total_tokens: 534
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:48:46-05:00'
sources: []
---

Think of the web as a library that lets you fetch, add, or change books without needing to know how the shelves are built inside.  
The **six guiding principles** of REST (Representational State Transfer) tell us how to design those “library calls” so they’re simple, reliable, and fast.

| Principle | What it means |
|-----------|---------------|
| 1️⃣ **Client–Server** | The reader (client) talks to the librarian’s computer (server). They stay separate; the client just asks for books. |
| 2️⃣ **Stateless** | Each request contains everything needed—no remembering past visits. It’s like ordering a book by title only, no need to remember last time you borrowed it. |
| 3️⃣ **Cacheable** | If the library says “this book is unchanged,” your device can keep a copy for later, speeding future reads. |
| 4️⃣ **Uniform Interface** | Every request uses the same language (GET, POST, PUT, DELETE) and format (JSON). It’s like using standard book codes instead of custom signals. |
| 5️⃣ **Layered System** | You can add a “proxy” librarian between you and the main library without changing how you ask for books. |
| 6️⃣ **Code‑on‑Demand (optional)** | The server may send small programs (like scripts) that run in your browser to do extra work, but it’s not required. |

So, REST is simply a set of tidy rules that let different software talk over the web as if they’re borrowing and returning books from a shared library—clear, independent, and efficient.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
