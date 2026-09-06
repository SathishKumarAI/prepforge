---
qid: ing_f62d9fa2aa__fp__local
question: 'Explain: RAG, Agents and Context Engineering — Ml Interview Prep'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 675
total_tokens: 848
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:43:03-05:00'
sources: []
---

## RAG, Agents & Context Engineering – Why They Work

**The Core Problem**  
A language model (LM) is a *black‑box* function \(f_\theta(x)\) that maps an input sequence to a probability distribution over tokens. Its parameters are fixed after training; it cannot access external knowledge or reason step‑by‑step beyond its depth. In real tasks we need *up‑to‑date facts*, *domain expertise*, and *structured reasoning*.  

### Retrieval Augmented Generation (RAG)  
1. **Retrieve** a set of documents \(\{d_i\}\) from an external corpus using the query \(q\).  
2. **Condition** the LM on the concatenation \(x = q || d_1 || … || d_k\).  

Mathematically, RAG optimizes
\[
p_\theta(y|q)=\sum_{d} p(d|q) \; p_\theta(y | q, d),
\]
so the model learns to *integrate* evidence.  
**Why it works:** Retrieval supplies a *low‑entropy prior* that reduces uncertainty for the LM, turning an ill‑posed generation problem into a supervised one on real data.  

### Agents (Chain‑of‑Thought or Multi‑Step)  
An agent decomposes a task into sub‑steps \(s_1,\dots,s_T\), each performed by calling a *skill* (e.g., RAG, arithmetic). Formally,
\[
p(y|q)=\int \prod_{t=1}^T p_\theta(s_t | s_{<t}, q) \; p_\theta(y | s_{\le T}, q).
\]
**Why it works:** The agent transforms a single inference into a *sequence of lower‑dimensional decisions*, each easier to model and train, while preserving global coherence.

### Context Engineering  
Crafting the prompt or retrieval context shapes the posterior \(p_\theta(y|x)\). By injecting *synthetic exemplars* or *structured templates*, we effectively perform *meta‑conditioning*: the LM learns a new mapping \(\phi\) such that
\[
y = f_{\theta}(\phi(x)),
\]
where \(\phi\) is designed to align the input distribution with the model’s inductive bias.

**Non‑obvious Insight:**  
The *bottleneck* in all three techniques is **information compression**. Retrieval narrows the evidence set; agents compress a task into discrete decisions; context engineering rewrites the problem into a format the LM can parse efficiently. Optimizing this bottleneck—e.g., by selecting *informative* retrievals or *minimal* agent steps—often yields larger performance gains than merely scaling model size.

---

> **Takeaway:**  
RAG, agents, and context engineering are not clever tricks; they are principled ways to reshape an intractable inference problem into a tractable one by controlling the *information flow* into the LM.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
