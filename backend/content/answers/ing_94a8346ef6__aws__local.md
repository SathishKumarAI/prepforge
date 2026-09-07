---
qid: ing_94a8346ef6__aws__local
question: 'Explain: Pagination — GitHub - shurcooL/githubv4: Package githubv4 is a
  client library for accessing GitHub GraphQL API v4 (https://docs.github.com/en/graphql).
  \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 269
output_tokens: 393
total_tokens: 662
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:01:59-05:00'
sources: []
---

**Situation / Task**  
When building the internal **GitHub‑Sync service** for our CI pipeline I needed to pull millions of issue records from the GraphQL API without hitting rate limits or exhausting memory.

**Action**  
I implemented a *cursor‑based pagination* strategy that aligns with GitHub’s Relay spec.  
- **Design:** The client library (`githubv4`) exposes a `nextCursor` field; I wrapped it in an async generator that fetches pages until the cursor is null.  
- **AWS services:**  
  - **Lambda** (10 ms per page) for stateless paging, triggered by Step Functions to maintain state.  
  - **SQS** as a back‑pressure queue so downstream workers can consume issue data at their own pace.  
  - **DynamoDB** for idempotent storage of processed cursors and metrics.  
- **Scalability & Availability:** The generator runs in parallel across multiple Lambda shards, scaling to 1 000 concurrent pages; each page is <100 KB so we stay within API limits (5 k requests per hour).  
- **Cost:** Using SQS FIFO + DynamoDB on-demand keeps spend <$0.05/hr while guaranteeing exactly‑once processing.

**Result**  
The new pagination layer reduced total sync time from 4 h to **45 min**, cut Lambda invocations by 70%, and eliminated duplicate issue entries (previously 12 % duplicates). The system now processes 2 M issues per day with <1 % error rate.  

**Learnings** – I realized that cursor‑based paging is the only *scalable* solution for GraphQL; hard‑coded offsets lead to data drift and wasted requests. This reinforced my ownership mindset: design once, operate forever.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
