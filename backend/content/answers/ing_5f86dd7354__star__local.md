---
qid: ing_5f86dd7354__star__local
question: 'Explain: Community Summarization — Graph Rag'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 427
total_tokens: 661
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:39:31-05:00'
sources: []
---

**Situation** – At my previous company we launched a public forum for data scientists, and by Q3 it had over 12 k active users but only ~1.2 % of posts were ever read beyond the first comment. The product team wanted to surface key discussions automatically so that newcomers could jump into hot topics without sifting through thousands of threads.

**Task** – I was tasked with building a “Community Summarization” feature that would ingest new posts, cluster them by topic, and generate concise, graph‑based summaries for each cluster. The goal was to improve first‑time read rate by at least 15 % within two months.

**Action** – I chose a Graph Retrieval Augmented Generation (Graph RAG) pipeline:  
1. Scraped the last 24 h of posts and built a heterogeneous graph where nodes were users, comments, and tags; edges encoded replies, likes, and co‑occurrence in threads.  
2. Used a pre‑trained sentence transformer to embed each comment, then ran a community detection algorithm (Louvain) on the graph to identify coherent discussion clusters.  
3. For each cluster I extracted the top 5 comments by centrality, fed them into an LLM via a retrieval prompt that included the graph’s adjacency list as context, and asked the model to produce a two‑sentence summary.  
4. Deployed the summaries in a “Trending Topics” widget; A/B tested against the existing static list.

**Result** – Within 6 weeks the first‑time read rate for flagged threads rose from 1.2 % to 3.7 %—a 210 % increase, surpassing our target. User feedback highlighted that the graph‑aware summaries were “more relevant” than keyword lists. I learned how to marry structural graph analysis with LLM retrieval to surface actionable insights in a noisy community environment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
