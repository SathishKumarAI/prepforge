---
qid: ing_99bd0ee022__fp__local
question: 'Explain: Embedding model & representation — Semantic Search'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 400
total_tokens: 569
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:32:55-05:00'
sources: []
---

**Semantic search with embeddings**

The core problem is *retrieving* the most relevant text to a user’s query, not by surface‑level keyword overlap but by meaning.  
A **query vector** and every document must live in the same space so that cosine similarity reflects semantic relatedness.

1. **Why a shared vector space?**  
   - In probability terms, each token is a random variable; a neural network learns to map tokens into a latent representation that captures their conditional distribution given context.  
   - If two words often appear in similar contexts, the model pushes them close together. Thus “car” and “automobile” share a region of space, while “car” and “bicycle” do not.

2. **From language modeling to embeddings**  
   - Pre‑training (e.g., masked LM) optimizes *next‑token prediction*. The hidden states that emerge are gradients of the log‑likelihood with respect to each token’s representation.  
   - Those gradients encode how changing a token would affect future tokens, i.e., its semantic role.

3. **Representations for retrieval**  
   - To index documents, we compress long sequences into a single vector (mean pooling, CLS token, or sentence‑level transformer).  
   - The inner product between query and document vectors is an *approximation of joint likelihood*: the higher the dot product, the more likely they co‑occur in the same latent context.

**Non‑obvious insight:**  
Embedding similarity is not purely semantic; it also captures **usage bias**. A word that appears in many distinct contexts (high entropy) will have a *broader* vector, making it less discriminative. Effective semantic search therefore requires *entropy weighting* or *contrastive fine‑tuning* to sharpen embeddings for rare but highly specific terms.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
