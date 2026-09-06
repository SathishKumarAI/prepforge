---
qid: ing_92d8df3d98__fp__local
question: 'Explain: 🔎 RAG & Retrieval — Cheatsheet'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 542
total_tokens: 712
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:17:45-05:00'
sources: []
---

**RAG (Retrieval‑Augmented Generation) – a principled cheat sheet**

1. **Problem statement**  
   A language model (LM) is *finite‑capacity*: its weights encode a distribution over tokens but cannot memorize every fact in the world. When asked about rare or time‑sensitive data, it must hallucinate—an error mode.

2. **Why retrieval solves it**  
   Retrieval supplies an *external evidence set* \(E = \{d_1,\dots,d_k\}\) conditioned on a query \(q\). The LM’s posterior over tokens becomes  
   \[
   P(t|q,E)=\frac{P(t|q)\,P(E|t,q)}{\sum_{t'}P(t'|q)\,P(E|t',q)}
   \]
   The evidence term \(P(E|t,q)\) acts as a Bayesian prior that pulls the output toward tokens supported by real documents.

3. **Pipeline**  
   *Query* → *Retriever* (e.g., BM25, dense vectors) → *Top‑k docs* → *Fusion* (concatenate or attention over docs) → *Generator* (fine‑tuned LM).  
   Training can be *end‑to‑end*: backpropagate through the retriever’s similarity score so that retrieval is task‑specific.

4. **Geometric intuition**  
   The retriever projects \(q\) onto a manifold of relevant documents; the generator then operates in a higher‑dimensional space where these docs act as anchor points, reducing variance.

5. **Non‑obvious insight**  
   Retrieval can *regularize* hallucinations without hard constraints: by allowing the LM to attend over multiple documents, it learns to weight contradictory evidence, effectively performing an implicit *consensus* that a single‑source LM never achieves.

6. **When to use RAG**  
   • Fact‑checking, question answering, or any task where up‑to‑date knowledge matters.  
   • When you have a large static corpus but limited GPU for fine‑tuning; retrieval offloads storage from the model.

*Bottom line*: RAG augments a generative backbone with an evidence engine, turning the LM into a *probabilistic reasoner* that grounds its outputs in real data rather than memorized patterns.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
