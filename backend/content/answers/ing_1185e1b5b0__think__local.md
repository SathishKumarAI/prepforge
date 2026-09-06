---
qid: ing_1185e1b5b0__think__local
question: 'Explain: Difference b/w get() & load() — Java/Hibernate.md at main \u00b7
  Anshul619/Java \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 213
output_tokens: 516
total_tokens: 729
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T03:51:33-05:00'
sources: []
---

**1. Clarify the question and set assumptions**  
- The user asks about “get() vs. load()” in *Hibernate* (not Java generic Map methods).  
- Assume they’re referring to `Session.get()` and `Session.load()` used to retrieve entities by primary key.  
- They likely want the practical difference, behavior, when each should be used.

**2. Adopt a mental model: “Immediate vs. Lazy retrieval”**  
Think of Hibernate as an ORM that can either fetch the database row immediately (`get`) or return a proxy and defer the hit until needed (`load`).  
Map this to three key properties: *database access*, *proxy behavior*, *exception handling*.

**3. Step‑by‑step reasoning**  
- **Session.get(id)**  
  - Executes an SQL `SELECT` right away.  
  - Returns `null` if no row exists.  
  - No proxy is created; you have the real entity.
- **Session.load(id)**  
  - Returns a *proxy* (a byte‑code generated subclass) that implements the entity interface.  
  - The SQL query runs only when a non‑identifier property is accessed.  
  - If the row does not exist, an `ObjectNotFoundException` is thrown at access time, not immediately.
- **When to use**  
  - Use `get()` if you need the actual object now or want to handle “not found” gracefully with `null`.  
  - Use `load()` when you only need a reference (e.g., as a foreign key) and want lazy loading; it’s also useful for cascading deletes/updates where the entity isn’t needed immediately.

**4. Common traps**  
- Assuming `load()` always hits the DB: it doesn’t until a property is accessed.  
- Forgetting that accessing a proxy after the session is closed throws a `LazyInitializationException`.  
- Using `load()` when you actually need the data can lead to N+1 query problems if not careful.

**5. Sanity‑check & communicate clearly**  
- Verify with a quick code snippet: `User u = session.load(User.class, 1);` → no SQL yet; accessing `u.getName()` triggers it.  
- Explain that both methods return the same type but differ in timing and null handling.  
- End with a concise summary table for quick reference.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
