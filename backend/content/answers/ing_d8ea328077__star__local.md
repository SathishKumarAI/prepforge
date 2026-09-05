---
qid: ing_d8ea328077__star__local
question: 'Explain: Failure modes & mitigations — Semantic Search'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 297
total_tokens: 532
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:42:35-05:00'
sources: []
---

**Situation:** While leading a content‑recommendation engine for a news app, we integrated an open‑source semantic search model to surface articles based on user intent rather than keyword matches. Soon after launch, the recommendation quality dropped: click‑through rates fell 12% and users reported irrelevant results.

**Task:** I had to diagnose why the semantic search was misbehaving, identify failure modes, and redesign the pipeline so that relevance stayed above our baseline CTR of 3.5%.

**Action:** First, I logged embeddings for a representative sample and performed cosine‑similarity clustering. This revealed two key issues: (1) **Vocabulary drift** – user queries contained slang not present in the training corpus; (2) **Cold‑start bias** – new articles had sparse metadata, leading to poor vector representation. To mitigate these, I 1) fine‑tuned the model on a curated query–label set collected from our analytics stack, and 2) introduced an auxiliary supervised classifier that weighted metadata features for low‑frequency items. I also added a fallback keyword filter with a confidence threshold to catch outliers.

**Result:** After deployment, CTR rose to 4.1% (+17%), while user satisfaction scores improved by 23%. I learned that continuous monitoring of embedding quality and hybridizing semantic with rule‑based filters are essential for robust search in production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
