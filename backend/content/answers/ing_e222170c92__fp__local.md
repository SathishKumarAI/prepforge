---
qid: ing_e222170c92__fp__local
question: 'Explain: Q: Design a system that lets a customer support agent answer questions
  using data from Zendesk, Salesforce, and an internal knowledge base.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 550
total_tokens: 738
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:00:40-05:00'
sources: []
---

**Problem statement**

A support agent must decide, *in real time*, which facts (ticket history, CRM records, or curated docs) best answer a customer’s query.  
The system is an **information‑retrieval + recommendation engine** that maps a natural‑language question to the most useful document fragment across three heterogeneous data stores.

---

### 1. Formal model

Let  

* \(Q\) = user question (text).  
* \(\mathcal{D}=\{d_1,\dots,d_n\}\) = union of documents from Zendesk, Salesforce and KB.  
* \(f(Q,d)\) = relevance score (higher ⇒ better answer).  

The agent’s *utility* is the expected correctness of the suggested response plus the cost of a human override.  
We wish to maximize

\[
U = \sum_{d\in\mathcal{D}} f(Q,d)\,P(\text{agent accepts }d) - C_{\text{override}}
\]

Subject to latency \(< 2\,\text{s}\).  

---

### 2. Architecture (derived from the above)

| Layer | Why it must exist |
|-------|-------------------|
| **Unified ingestion** | Convert each source’s schema into a common *document* representation (timestamp, owner, tags). |
| **Vector index** | Pre‑compute embeddings \(e(d)\) via a transformer fine‑tuned on support logs. Enables sub‑millisecond nearest‑neighbor search. |
| **Relevance model** | Train a small neural network to predict \(f(Q,d)\), using features: cosine similarity, source confidence, recency, and context overlap. |
| **Ranking & filtering** | Apply top‑k selection (e.g., k=10) then re‑rank with the relevance model; filter out low‑confidence or stale docs. |
| **Explainability layer** | Highlight tokens in \(Q\) that matched key phrases in \(d\), giving the agent a confidence signal and a path to escalation. |

---

### 3. Non‑obvious insight

Treating each source as a *probabilistic prior*—Salesforce data is highly reliable for customer history, Zendesk logs are noisy but temporally relevant, and KB docs are curated but may be out of date—lets the relevance model learn to **discount** stale information automatically. This dynamic weighting emerges from training on actual override events, rather than hard‑coded rules, yielding a system that adapts to evolving data quality without manual tuning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
