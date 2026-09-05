---
qid: ing_527710ec1f__star__local
question: 'Explain: Use case: User searches keywords — system-design-primer/solutions/system_design/twitter/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 269
output_tokens: 351
total_tokens: 620
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:13:16-05:00'
sources: []
---

**Situation**  
At a startup we had an internal knowledge base on GitHub. Developers were frustrated because searching for a term like “latency” returned the entire repository, not just relevant files such as `system_design/twitter/README.md`. The search feature was built on plain grep and pulled every match into a single page, making it hard to find actionable docs.

**Task**  
I needed to build an efficient keyword search that surfaced only the most relevant Markdown files with context snippets, ranked by relevance, while keeping latency under 200 ms for 10,000+ contributors.

**Action**  
1. Built a nightly ingestion pipeline in Python using `gitpython` to clone each repo and extract `.md` files.  
2. Used `Whoosh` to index file paths, titles, and content with TF‑IDF weighting.  
3. Implemented a REST endpoint in Flask that accepts a query string, runs the Whoosh search, and returns JSON containing file URLs, snippet excerpts, and relevance scores.  
4. Added caching with Redis to keep hot queries fast and updated indexes asynchronously on push events via GitHub webhooks.

**Result**  
Search response time dropped from ~1 s to <200 ms. The number of “search‑to‑open” clicks increased by 35 % within two weeks, and developers reported a 40 % reduction in time spent locating documentation. I learned the importance of lightweight indexing for large codebases and how caching can bridge latency gaps without compromising freshness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
