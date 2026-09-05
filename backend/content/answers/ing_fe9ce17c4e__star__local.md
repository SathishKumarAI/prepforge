---
qid: ing_fe9ce17c4e__star__local
question: Your product has several distinct corpora - docs, tickets, code, CRM. How
  do you route queries?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 377
total_tokens: 624
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:58:00-05:00'
sources: []
---

**Situation** – At my previous company we launched a unified search platform for an enterprise SaaS product. The data sources were wildly different: legal docs in PDF, support tickets in Zendesk, code snippets in GitHub, and customer interactions in Salesforce CRM. When users typed “how to fix the authentication error,” the system returned irrelevant PDFs instead of the relevant GitHub issue or ticket.

**Task** – I had to build an intelligent routing layer that could decide which corpus should handle each query, improving relevance while keeping latency under 200 ms and avoiding over‑loading any single index.

**Action** – First, I added a lightweight “intent classifier” using FastText on the first two words of the query. It produced probabilities for each domain. Then I built a cost‑based selector: if intent confidence >0.7 it routed to that corpus; otherwise, I ran a fallback cosine similarity search across all corpora but weighted results by the classifier’s scores. To keep latency low, I pre‑computed embeddings with Sentence‑Transformers and stored them in an ElasticSearch cluster tuned for vector search. Finally, I added a feedback loop: every time a user clicked on a result, we logged the true target corpus to continuously retrain the classifier.

**Result** – Query relevance jumped from 45 % to 78 % precision@3, and overall latency stayed below 180 ms. User satisfaction scores rose by 12 points in our quarterly survey, and the system now scales to add new corpora with minimal engineering effort. I learned that a hybrid rule‑plus‑ML routing strategy can balance accuracy and performance when dealing with heterogeneous data sources.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
