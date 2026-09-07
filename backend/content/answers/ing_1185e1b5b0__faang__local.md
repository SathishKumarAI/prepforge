---
qid: ing_1185e1b5b0__faang__local
question: 'Explain: Difference b/w get() & load() — Java/Hibernate.md at main \u00b7
  Anshul619/Java \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 257
output_tokens: 452
total_tokens: 709
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:24:28-05:00'
sources: []
---

**1️⃣ Clarify**  
You’re asking about the two Hibernate persistence methods: `Session.get()` vs `Session.load()`.  
*Assumptions*:  
- Entity is mapped correctly (id column present).  
- Caller knows whether they need the entity immediately or just a proxy.  

**2️⃣ Approach**  
Explain when each method hits the DB, what it returns, and how lazy loading behaves. Then contrast behavior on missing rows.

**3️⃣ Depth**  
| Method | Immediate DB hit? | Return type | When row missing |
|--------|-------------------|-------------|------------------|
| `get(id)` | **Yes** – executes SELECT immediately. | Actual entity (or `null`). | Returns `null`. |
| `load(id)` | **No** until proxy is accessed. | Proxy (`HibernateProxy`) that defers SQL until a property is read. | Throws `ObjectNotFoundException` when the proxy is initialized and no row exists. |

- **Lazy initialization**: `load()` is useful for establishing relationships without fetching data; accessing any non‑id field triggers the SELECT.  
- **Eager vs Lazy**: Use `get()` when you need to know if the entity exists right away or want a plain Java object.  
- **Performance**: If you only need an ID reference, `load()` avoids an immediate query.

**4️⃣ Edge Cases**  
- Accessing a proxy in a detached session → `LazyInitializationException`.  
- Using `load()` on an uninitialized entity that doesn’t exist will throw `ObjectNotFoundException` instead of returning `null`.  
- When using second‑level cache: both may hit the cache first.

**5️⃣ Optimize & Communicate**  
When designing data access layers, pick `get()` for safety and clarity; use `load()` when you’re certain the entity exists or when you only need a reference (e.g., setting a foreign key). Explain this trade‑off to interviewers: it shows understanding of lazy loading, exception handling, and performance considerations.  

*Word count: ~210*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
