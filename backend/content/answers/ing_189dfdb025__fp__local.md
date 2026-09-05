---
qid: ing_189dfdb025__fp__local
question: 'Explain: Inline Fragments — GitHub - shurcooL/githubv4: Package githubv4
  is a client library for accessing GitHub GraphQL API v4 (https://docs.github.com/en/graphql).
  \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 211
output_tokens: 396
total_tokens: 607
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:58:17-05:00'
sources: []
---

### Why Inline Fragments Matter in GraphQL

GraphQL’s core promise is *exactly the data you ask for*.  
When a client queries an object that implements several interfaces or
inherits from multiple types, the server must decide which fields to return.
A naïve design would send all possible fields and let the client drop the
unwanted ones—wasting bandwidth and breaking type safety.

**Inline fragments solve this by encoding “type‑specific” selections directly
in the query**:

```graphql
{
  node(id: "MDQ6VXNlcjE=") {
    ... on User { name }
    ... on Organization { login }
  }
}
```

- **Problem solved:** The server can *dispatch* only the fields relevant to
the concrete runtime type, preserving the contract that each field exists
on exactly one type.
- **Why it must work this way:**  
  1. **Optimization** – The server evaluates a single query plan; it doesn’t
     need separate round‑trips for each possible type.  
  2. **Information‑theoretic** – Only the bits that can be decoded by the
     client are sent, minimizing entropy.
  3. **Geometric intuition** – The query is a *cone* of field selections;
     inline fragments slice this cone along the type axis, keeping it tidy.

### A Non‑Obvious Insight

Many developers treat fragments as mere syntactic sugar for reuse.
But they also enforce **runtime type safety**: if you forget an `... on
User` block, the server will reject the query or return `null`.  
Thus inline fragments are a *compile‑time guard* against accidental field
requests that don’t exist on a particular subtype—a subtle but powerful
mechanism for preventing API drift and ensuring robust client–server contracts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
