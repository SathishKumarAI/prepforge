---
qid: ing_b18f529244__fp__local
question: 'Explain: Likely interviewer follow-ups — Semantic Search'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 401
total_tokens: 570
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:21:43-05:00'
sources: []
---

**Semantic search – why interviewers keep probing**

*Fundamental problem.*  
Traditional keyword matching treats a query as a bag of tokens and ranks documents by exact term overlap. That approach ignores *meaning*: the same concept can appear under many surface forms (“NYC” vs “New York City”), and user intent is rarely captured in a single word.

*Why it must work this way.*  
A semantic engine maps both queries and documents into a shared vector space where similarity reflects linguistic and world‑knowledge relationships. This mapping is learned by optimizing an objective that encourages *semantic closeness* (e.g., contrastive loss between query–document pairs) while preserving *information content* (ensuring distinct concepts remain separated). The deeper principle is **mutual information maximization**: we want the representation to retain as much about the true intent as possible while discarding noise.

*Common interview follow‑ups.*  
1. **How do you handle polysemy?** – Expect discussion of contextual embeddings and attention mechanisms that disambiguate word senses on the fly.  
2. **Explain “semantic drift” in large corpora.** – Look for awareness of concept evolution, temporal embeddings, or continual learning techniques.  
3. **What metrics evaluate semantic relevance?** – Probe knowledge of NDCG, MAP, and newer measures like ROUGE‑S that capture graded similarity.

*Non‑obvious insight.*  
Many practitioners treat the vector space as a static lookup table, but in reality it is *dynamic*: fine‑tuning on domain‑specific data shifts the geometry. The true power lies in **interpolation between global pretraining and local adaptation**—a balance that preserves generality while capturing niche semantics without catastrophic forgetting. Recognizing this trade‑off often separates good engineers from great ones.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
