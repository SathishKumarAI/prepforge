---
qid: ing_5d6b828210__star__local
question: 'Q: How do embedding models learn semantic similarity?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 327
total_tokens: 562
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:34:58-05:00'
sources: []
---

**Situation** – At my last role I was tasked with improving our internal search engine. User queries were often phrased differently from the document titles, so cosine‑similarity on TF‑IDF vectors gave us a 42 % hit rate.

**Task** – Build an embedding model that could map both queries and documents into a shared semantic space where semantically similar items would be close together, boosting recall to at least 70 %.

**Action** – I started with a pre‑trained BERT base and fine‑tuned it on our domain corpus using a Siamese architecture. We paired each query with its top 10 relevant documents (positive pairs) and randomly sampled unrelated docs as negatives. The loss was a margin ranking loss that pushed positives closer than negatives by at least 0.4. I used mixed precision training on an A100 GPU to keep memory low, and added a projection head to reduce dimensionality from 768 to 256 for faster cosine search.

**Result** – After three epochs the model achieved an average cosine similarity of 0.82 for true matches versus 0.41 for mismatches. Deploying it increased our top‑k recall from 42 % to 73 %, and page views per user rose by 18 %. I learned that careful negative sampling and a lightweight projection can dramatically improve semantic retrieval without sacrificing latency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
