---
qid: ing_5eaf14b78c__star__local
question: 'Explain: TL;DR — Glean'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 320
total_tokens: 553
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:37:25-05:00'
sources: []
---

**Situation**  
At my last company we launched an internal knowledge base that quickly became cluttered with duplicated documentation and outdated policy files. New hires spent up to three hours searching for the right SOP, causing a noticeable drop in onboarding productivity.

**Task**  
I was tasked with building a lightweight search layer that could surface the most relevant documents instantly—essentially creating a “TL;DR – Glean” feature that distilled key information and ranked results by relevance.

**Action**  
Using Elasticsearch as our backbone, I ingested all PDFs, Markdown files, and Confluence pages, then applied an NLP pipeline with spaCy to extract entity tags and summarize content into 200‑word snippets. I implemented a BM25 ranking algorithm combined with a custom TF‑IDF weighting that prioritized recent updates and user interaction logs. The front end leveraged React and Algolia’s instant search UI for low latency. To ensure privacy, I added role‑based access controls via JWT tokens.

**Result**  
Within two weeks of rollout, average document discovery time dropped from 180 s to 45 s—a 75% improvement. New hires reported a 30% faster ramp‑up, and we saw a 15% reduction in support tickets related to documentation searches. I learned that blending traditional IR techniques with lightweight NLP can deliver significant productivity gains without heavy infrastructure costs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
