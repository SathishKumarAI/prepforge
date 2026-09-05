---
qid: ing_23d4aabbb9__fp__local
question: 'Explain: Product — Jobs at Glean'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 354
total_tokens: 522
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:21:40-05:00'
sources: []
---

**Glean’s “Jobs” – a principled knowledge‑search engine**

At its core, an organization faces the *information bottleneck*: every employee needs to locate relevant data (reports, code, policies) while spending minimal time scrolling through noise.  
The Jobs product tackles this by **optimizing retrieval as a probabilistic inference problem**: given a user’s query \(q\), infer the posterior distribution over all possible documents \(d\) that satisfy both *semantic relevance* and *accessibility constraints*.  

1. **Signal‑to‑Noise Ratio (SNR)**  
   The model learns to weight queries by the *mutual information* between \(q\) and document embeddings, effectively boosting SNR.  
2. **Personalization via Bayesian Updating**  
   Each interaction updates a user’s latent preference vector \(\theta_u\), allowing the system to adapt in real time without costly re‑indexing.  
3. **Geometric Clustering of Knowledge Graphs**  
   Documents are embedded on a manifold that respects both content similarity and organizational hierarchy, ensuring that related items cluster while maintaining separation across distinct departments.

*Non‑obvious insight*: By treating the search index as a dynamic Bayesian network rather than static vectors, Jobs can natively support *negative feedback* (e.g., “irrelevant”) to prune entire subspaces instantly—something traditional keyword engines cannot achieve. This blend of probabilistic inference, manifold geometry, and online learning is why Glean’s Jobs product delivers lightning‑fast, contextually precise results across an enterprise’s sprawling knowledge base.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
