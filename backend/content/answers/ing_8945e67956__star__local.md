---
qid: ing_8945e67956__star__local
question: 'Explain: Contextual BM25 — Contextual Retrieval'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 379
total_tokens: 614
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:07:31-05:00'
sources: []
---

**Situation** – While leading the search‑engine upgrade at a fintech startup, we noticed our click‑through rate for loan‑application queries fell by 18 % after adding new compliance filters. Users were still pulling up outdated documents even though the content had changed.

**Task** – I was tasked with redesigning the ranking algorithm so it could understand user intent within the new regulatory context and surface only relevant, compliant results without sacrificing relevance.

**Action** – I replaced our vanilla BM25 scorer with a *Contextual BM25* module. First, I built a lightweight transformer (DistilBERT) to generate contextual embeddings for each query and document title. Then I re‑weighted the classic BM25 term frequency–inverse document frequency scores by multiplying them with cosine similarity between the query embedding and the document embedding. This allowed the engine to penalize matches that were lexically similar but contextually off (e.g., “mortgage” vs. “personal loan”). I implemented this in our Lucene pipeline using a custom `Similarity` class, tuned the BM25 hyper‑parameters on an A/B test set, and added a fallback threshold to fall back to pure BM25 when embeddings were ambiguous.

**Result** – After rollout, we saw a 23 % lift in click‑through rate for compliance‑related queries and a 12 % reduction in time spent by users on irrelevant pages. The experiment also cut server load by 7 % because fewer documents needed to be scored per query. I learned that blending deep contextual signals with proven ranking formulas can yield practical, measurable gains without abandoning the robustness of traditional IR techniques.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
