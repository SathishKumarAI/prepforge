---
qid: ing_c3fc005b02__fp__local
question: 'Explain: Data — Jobs at Glean'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 375
total_tokens: 543
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:58:52-05:00'
sources: []
---

**Data as the “Evidence Graph” that Drives a Job‑Centric Search Engine**

When a job board like Glean must surface *the right* openings to *the right* candidate, it faces an optimization problem: maximize relevance (information gain) while keeping latency minimal.  
1. **Fundamental signal:** each posting is a high‑dimensional vector of attributes—title, skills, salary, location, company culture tags, and the unstructured job description text.  
2. **Representation as a graph:** every candidate’s profile is another node with its own attribute vector. A bipartite similarity graph links candidates to jobs; edge weights are cosine similarities or learned embeddings.  
3. **Information‑theoretic objective:** we wish to minimize the *expected* Kullback–Leibler divergence between the true relevance distribution (what a human would pick) and our ranking, subject to computational constraints. This yields an optimal weighting of attributes that balances surface-level features (title match) with deeper semantic cues (contextual embeddings).  
4. **Why it must be dynamic:** job data arrives in bursts; new postings, edits, and applicant interactions constantly shift the distribution. A static model would incur a regret proportional to the drift magnitude—hence Glean uses online learning on streaming updates.

**Non‑obvious insight:** The *most* valuable data are not the raw text or salary figures but the *change signals*—how frequently a posting is edited, how many applicants view it before closing. These temporal features encode the latent “hotness” of a job and allow Glean to prioritize fresh, high‑interest listings without explicit human labeling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
