---
qid: ing_a0e1172861__eli5__local
question: 'Explain: When does cosine similarity mislead you? Discuss embedding-space
  pathologies relevant to retrieval systems.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 328
total_tokens: 495
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:52:53-05:00'
sources: []
---

Think of your embeddings as points on a huge, invisible map where every word or image is a city. Cosine similarity looks only at the angle between two cities, not how far apart they are. It’s great when the map is flat and all roads run straight, but it can mislead in a “mountainous” map.

**When cosine misleads:**  
1. **Scale imbalance** – If some embeddings are stretched (longer vectors) while others stay short, two points that point in almost the same direction might actually be very far apart on the map. Cosine says they’re close, but they’re not useful for retrieval.  
2. **Cluster collapse** – In high‑dimensional spaces, many different cities can end up pointing roughly the same way (the “hubness” problem). Cosine will rank them equally similar even though only one is truly relevant.  
3. **Non‑uniform density** – If some regions of the map are crowded and others sparse, cosine treats a city in a dense cluster as equally close to a distant outlier, because angles alone ignore how many neighbors exist nearby.

In retrieval systems, these pathologies mean that a document or image you think is a good match (small angle) might actually be far away in real content space, causing wrong search results. Understanding and correcting for scale and density—by normalizing vectors or using distance measures that account for length—helps keep the map reliable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
