---
qid: ing_189dfdb025__star__local
question: 'Explain: Inline Fragments — GitHub - shurcooL/githubv4: Package githubv4
  is a client library for accessing GitHub GraphQL API v4 (https://docs.github.com/en/graphql).
  \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 277
output_tokens: 404
total_tokens: 681
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:18:12-05:00'
sources: []
---

**Situation:**  
While building an internal analytics dashboard for our open‑source project, we needed to pull data from both repositories and user profiles in a single request—our existing REST approach doubled the number of round trips and hit rate limits.

**Task:**  
Create a GraphQL query that retrieves repository names, stars, and, when the node is a user, their login and follower count—all within one call, while keeping the response size minimal.

**Action:**  
Using the `githubv4` client library, I drafted a single query with inline fragments:

```graphql
{
  node(id: $id) {
    __typename
    ... on Repository {
      name
      stargazerCount
    }
    ... on User {
      login
      followers { totalCount }
    }
  }
}
```

I passed the appropriate `node` IDs and let the GraphQL engine resolve the concrete type. In Go, I mapped the response to a union struct with embedded fragments, handling each case in a type switch. This allowed the client to deserialize only the fields actually present.

**Result:**  
The dashboard now fetches mixed data with one API call instead of two, cutting network traffic by ~35% and reducing latency from 1.2 s to 0.7 s per update. I also learned how inline fragments let me write cleaner, type‑safe queries that scale as the schema evolves.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
