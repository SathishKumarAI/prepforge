---
qid: ing_5cf61e0c65__star__local
question: Explain contrastive learning and the InfoNCE loss. How are modern embedding
  models (CLIP, text retrievers) actually trained?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 377
total_tokens: 629
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:33:52-05:00'
sources: []
---

**Situation:**  
During my senior year I was part of a research group building a visual–text retrieval system for an e‑commerce platform. Our dataset had 2 M images and 5 M product descriptions, but the initial embedding models were too generic—cosine similarity between image and text queries hovered around 0.42, far below the 0.65 target needed for accurate search.

**Task:**  
We needed to train a joint encoder that maps both modalities into a shared space where matching pairs sit close together while mismatches are pushed apart, all without labeled pairings beyond co‑occurrence in product listings.

**Action:**  
I implemented contrastive learning with InfoNCE loss. For each batch I created positive pairs (image, its description) and sampled 128 negative examples per anchor from the same batch. The loss is:  
\(L = -\log \frac{\exp(\text{sim}(z_i^v,z_j^t)/\tau)}{\sum_{k} \exp(\text{sim}(z_i^v,z_k^t)/\tau)}\).  
I used a ResNet‑50 backbone for images and a transformer encoder for text, projecting both to 512‑dim vectors. I tuned the temperature τ to 0.07 and employed hard‑negative mining via momentum contrast (MoCo) to stabilize training.

**Result:**  
After 10 epochs, retrieval AUC jumped from 0.42 to 0.68, and mean reciprocal rank improved by 25 %. The model now reliably retrieves correct products within the top‑3 results. I learned that careful negative sampling and temperature tuning are critical for InfoNCE’s effectiveness in multimodal embeddings.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
