---
qid: ing_daa8e82b0d__star__local
question: 'Explain: Design discovery and search across millions of user-created characters.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 372
total_tokens: 610
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:45:19-05:00'
sources: []
---

**Situation** – I was working at a social gaming platform where we had just launched an open‑world game that allowed players to create and upload their own characters. Within the first month the community grew to over 2 million unique creations, but users were struggling to find interesting avatars because our search engine only indexed basic tags like “gender” and “class.”  

**Task** – My goal was to build a scalable discovery system that could surface relevant characters in under two seconds for any user query, even with millions of entries. The system also needed to support personalized recommendations without compromising performance.  

**Action** – I led a three‑phase design:  
1. *Feature extraction*: Built an NLP pipeline that parsed character bios and automatically generated descriptive embeddings using SentenceBERT, then enriched them with visual features extracted from avatar thumbnails via ResNet‑50.  
2. *Indexing*: Deployed a hybrid search architecture—Elasticsearch for keyword matching and Faiss for approximate nearest neighbor lookups on the combined embeddings. I tuned shard counts to keep query latency below 200 ms.  
3. *Personalization layer*: Implemented a lightweight collaborative filtering model that weighed recent play history, integrating its scores into the final ranking with a weighted blend.  

**Result** – User search success rate rose from 32% to 78%, and average time spent exploring characters dropped by 35%. The recommendation engine increased in‑game purchases of character customization items by 22%. I learned that blending semantic embeddings with visual cues, backed by a hybrid index, is essential for fast, relevant discovery at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
