---
qid: ing_4665a049c0__eli5__local
question: 'Explain: Recursive objects — Release notes | Zod'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 251
total_tokens: 409
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:28:36-05:00'
sources: []
---

Think of a **recursive object** as a set of nested Russian dolls that can keep opening themselves forever—except the dolls are data structures, not toys.

In Zod (a TypeScript schema‑building library), you often need to describe an object that contains itself. For example, a tree node that has a `value` and an array of child nodes, each of which is again a node. To let Zod understand this “self‑referencing” shape, the release notes added a new helper called **`.recursive()`**.

- **Recursive objects**: data structures that refer to themselves (e.g., trees, linked lists).
- **Release note addition**: Zod now lets you declare such shapes safely by wrapping the definition in `z.object({ … }).recursive()`.  
  Inside the object, you can use a placeholder (`z.lazy`) that points back to the same schema.

So, just as each Russian doll contains another identical one inside, recursive objects let an item contain the same type of item again and again. Zod’s new syntax makes it easy—and safe—to describe this pattern in code.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
