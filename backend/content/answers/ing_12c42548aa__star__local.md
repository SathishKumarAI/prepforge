---
qid: ing_12c42548aa__star__local
question: 'Explain: Related Reading — Faq'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 348
total_tokens: 580
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:06:01-05:00'
sources: []
---

**Situation** – At my last startup we launched a content recommendation engine that was great at surfacing articles but users complained they never saw deeper context or follow‑up questions, so engagement dropped by 18% over three months.

**Task** – I had to design and roll out an automated “Related Reading + FAQ” module that would surface both supplementary articles and common user questions next to each piece of content, all while keeping page load under 200 ms.

**Action** – First, I built a lightweight graph model in Neo4j where nodes were articles and edges captured citation frequency. Using Cypher, I queried the top five related nodes by weighted score (citation count × recency). Parallelly, I trained a BERT‑based question classifier on our support logs to extract high‑volume FAQs per article category. In production I exposed two microservices: one served the graph results via gRPC, the other returned FAQs from an ElasticSearch index. On the front end, I added a lazy‑load component that fetched data only when the user hovered over “Related Reading” or scrolled to the bottom, keeping initial bundle size minimal.

**Result** – Page load time stayed at 190 ms, and click‑through on related content rose by 32%. FAQ interactions grew 45%, leading to a 12% reduction in support tickets. I learned that coupling graph analytics with NLP can deliver contextually rich suggestions without sacrificing performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
