---
qid: ing_000026fbcb__fp__local
question: 'Explain: Contract Intelligence — Harvey | AI software for legal and professional
  services'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 355
total_tokens: 528
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:05:31-05:00'
sources: []
---

**Contract Intelligence – the Harvey AI Engine**

At its core, a contract is a *structured* text that encodes obligations and risks.  
The fundamental problem: *extracting meaning without manual annotation*.  
Harvey solves this by treating the contract as a **probabilistic graphical model** over clauses, entities, and legal concepts.  

1. **Token‑level representation** – words are embedded in a continuous space learned from millions of legal documents (deep contextual embeddings).  
2. **Clause segmentation** – a sequence labeling network predicts clause boundaries; this reduces noise by grouping semantically coherent units.  
3. **Entity linking & relation extraction** – transformer encoders conditioned on the clause context map parties, dates, and obligations to a knowledge graph of legal norms.  

Why must it work this way?  
- *Optimization*: The loss is a weighted sum of cross‑entropy for segmentation and triplet ranking for entity matching; gradients propagate through shared embeddings, ensuring that improvements in one task benefit the other.  
- *Information theory*: By maximizing mutual information between clause context and latent legal categories, Harvey retains only the predictive signal, pruning irrelevant lexical noise.  

**Non‑obvious insight:** The model learns a *semantic “contract grammar”* implicitly; when fine‑tuned on a new jurisdiction, it reuses this grammar with minimal data, demonstrating that legal language shares deep structural invariants across regions. Thus Harvey is not just a keyword matcher—it captures the geometry of legal intent, enabling rapid, accurate contract review at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
