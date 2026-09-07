---
qid: ing_968e7768ab__faang__local
question: What is a reranker, and why add one after vector search?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 453
total_tokens: 689
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:34:21-05:00'
sources: []
---

**Clarify**  
A *reranker* is a second‑stage ranking model that re‑orders the top‑k results returned by an initial retrieval step (e.g., vector search). I’ll assume we’re working with semantic similarity over a large corpus, and the question asks why we need this extra layer.

**Approach**  
1. Explain what vector search does.  
2. Highlight its limitations in fine‑grained relevance.  
3. Show how a reranker corrects those errors using richer signals (textual overlap, user intent, context).  
4. Mention typical architectures and training signals.

**Depth**  
Vector search retrieves candidates by computing cosine similarity between query and document embeddings. It’s fast but coarse:  
- *Semantic drift*: vectors capture broad topics, not nuanced intent.  
- *Sparse signals*: two documents may be close in embedding space yet differ on key phrases the user cares about.  

A reranker—often a transformer fine‑tuned with pairwise or listwise loss—takes the candidate set and re‑scales scores using features like exact keyword match, sentence overlap, positional cues, or even click‑through data. It learns to prioritize documents that satisfy both semantic relevance *and* surface‑level signals. Complexity is modest: reranking runs on a handful of candidates (k≈10–100), so latency remains low while improving precision at top‑1.

**Edge Cases**  
- Very small corpora: vector search may already be perfect; reranker adds noise.  
- Cold‑start queries with no historical signals: the model may rely solely on embeddings, reverting to the first stage.  
- Adversarial inputs that fool the reranker (e.g., keyword stuffing).

**Optimize & Communicate**  
Start with a lightweight BERT‑based reranker trained on relevance labels; if latency is critical, distill it into a smaller model. Iterate by measuring NDCG@k improvements versus added compute. Explain to stakeholders: “Vector search gives us breadth; the reranker sharpens focus where user intent matters.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
