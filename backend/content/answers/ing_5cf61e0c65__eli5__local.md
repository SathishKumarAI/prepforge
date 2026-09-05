---
qid: ing_5cf61e0c65__eli5__local
question: Explain contrastive learning and the InfoNCE loss. How are modern embedding
  models (CLIP, text retrievers) actually trained?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 252
total_tokens: 426
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:03:42-05:00'
sources: []
---

Imagine you’re at a library where every book has a “shadow” on the floor that matches its cover picture. The goal is to learn a rule that tells which shadow belongs to which book without looking inside the books.  

**Contrastive learning** is like training a pair of friends, *anchor* and *positive*, who should stay close together in memory, while other random books (*negatives*) are pushed away.  
The **InfoNCE loss** measures how well the anchor’s memory vector matches its true positive compared to all negatives; it rewards high similarity for the right pair and low similarity for wrong pairs.  

Modern models such as CLIP or text retrievers run this process at scale: they take a large set of paired images‑text, embed each side into vectors, then apply InfoNCE so that matching image–caption pairs end up near each other in vector space while mismatched pairs are far apart. The result is an embedding model that can retrieve the right text for any image (or vice versa) just by comparing distances.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
