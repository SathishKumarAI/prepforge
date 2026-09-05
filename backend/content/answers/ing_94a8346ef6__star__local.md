---
qid: ing_94a8346ef6__star__local
question: 'Explain: Pagination — GitHub - shurcooL/githubv4: Package githubv4 is a
  client library for accessing GitHub GraphQL API v4 (https://docs.github.com/en/graphql).
  \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 275
output_tokens: 337
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:30:08-05:00'
sources: []
---

**Situation:**  
At my last role I was building an internal analytics dashboard for the company's open‑source portfolio. The backend had to pull every issue and PR from our 300 repos on GitHub using GraphQL v4; a single query could return thousands of items, far exceeding the API’s 100 item limit per page.

**Task:**  
I needed to fetch all resources reliably while respecting rate limits and minimizing memory usage, then store them in PostgreSQL for downstream reporting.

**Action:**  
Using `shurcooL/githubv4`, I implemented cursor‑based pagination. After an initial query that requested the first 100 items plus the `endCursor` and `hasNextPage` flags, I looped: each iteration sent a new query with `after: $cursor`. I wrapped this in a generator to stream rows directly into the DB via `pgx`, avoiding a large in‑memory slice. I also added exponential backoff for 403 responses and throttled requests to stay below 30 QPS.

**Result:**  
The complete data set (≈ 1.2 million issues/PRs) was retrieved in under 12 minutes, consuming < 200 MB RAM. The dashboard load time dropped from 3 seconds to 0.8 seconds, and I reduced API calls by ~40% through efficient pagination. I learned the importance of cursor logic for large GraphQL datasets and how to balance throughput with rate‑limit safety.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
