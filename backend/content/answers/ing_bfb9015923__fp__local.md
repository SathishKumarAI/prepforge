---
qid: ing_bfb9015923__fp__local
question: 'Explain: 3.2.4 Evaluation Metrics — Graph-Aware Late Chunking for Retrieval-AugmentedGeneration
  in Biomedical Literature'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 185
output_tokens: 481
total_tokens: 666
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:50:52-05:00'
sources: []
---

**Graph‑Aware Late Chunking (GALC) – a principled retrieval‑augmented evaluation**

The core problem in biomedical RAG is that *relevant* passages are often scattered across a citation graph; a model must decide how many sentences to fetch before generating the answer. If we treat each chunk as an independent “document”, standard recall/precision ignore the graph’s structure and over‑penalise late but correct answers.

Let \(G=(V,E)\) be the citation graph, \(q\in V\) the query node, and \(C(q)=\{c_1,\dots,c_k\}\) the ordered retrieval set. Define a *utility* function
\(U(c_i)=\exp(-\lambda\,d_G(q,c_i))\),
where \(d_G\) is graph distance (citation hops). This captures the intuition that closer nodes are more likely to contain the needed knowledge, and \(\lambda>0\) controls decay.  

The GALC score for a generated answer is
\[
S_{\text{GALC}} = \frac{\sum_{i=1}^k U(c_i)\,\mathbf{1}\{\text{answer correct with }c_i\}}
                       {\sum_{i=1}^k U(c_i)} .
\]
Thus, a late‑chunk answer is rewarded proportionally to its proximity in the graph; a distant but correct chunk gets less credit.  

**Why it works**  
This metric is an instance of *Bayesian decision theory*: we treat \(U(c_i)\) as a prior over which node will supply the correct information and compute the expected utility of the generated answer. The exponential decay guarantees that the score remains bounded between 0 and 1, preserving interpretability.

**Non‑obvious insight**  
Most people view retrieval evaluation as a binary “found/not found” decision, but GALC shows that *how* we retrieve (the graph path) is just as important as *whether* we retrieve. The exponential weighting implicitly encodes the geometry of knowledge flow in biomedical literature—a subtlety missed by flat metrics like MRR or BLEU.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
