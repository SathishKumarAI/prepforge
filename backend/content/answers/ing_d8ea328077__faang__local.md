---
qid: ing_d8ea328077__faang__local
question: 'Explain: Failure modes & mitigations — Semantic Search'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 552
total_tokens: 784
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:03:43-05:00'
sources: []
---

**Clarify**  
We’re asked how a semantic‑search system can fail (e.g., hallucinated relevance, biased results, privacy leaks) and what engineering/ML mitigations we’d deploy. I’ll assume an internal search engine that maps queries to embeddings, retrieves documents, and ranks them.

**Approach**  
1. List common failure modes.  
2. For each, propose concrete mitigations (data‑centric, model‑centric, system‑centric).  
3. Summarize trade‑offs and how to measure success.

---

### 1. Failure Modes & Mitigations  

| Mode | Why it Happens | Mitigation |
|------|----------------|------------|
| **Relevance hallucination** | Embedding similarity doesn’t capture nuance → irrelevant docs ranked high. | *Contrastive fine‑tuning* on a relevance‑labeled corpus; add *feedback loops* (click‑through, dwell time) to re‑rank. |
| **Domain drift / concept shift** | Training data outdated vs live content. | Continuous *online learning* with periodic *concept‑drift detection* (e.g., KL‑div between query & document embeddings). |
| **Bias amplification** | Model learns demographic or topical biases present in training data. | Apply *bias‑aware loss functions* and post‑rank *fairness constraints*; audit with synthetic queries across protected attributes. |
| **Privacy leakage** | Embeddings may encode sensitive user or content info. | Use *differential privacy* during embedding generation and *embedding masking* for regulated data. |
| **Cold‑start / sparse queries** | No similar embeddings → random retrieval. | Employ *fallback keyword search* or *query expansion* with knowledge graphs; cache top results per popular intent. |

### 2. Edge Cases  
- Extremely long queries: truncate & re‑embed segments.  
- Non‑English or code‑mixed inputs: route to language‑specific models.  
- Adversarial prompts that inject malicious content: rate‑limit and flag suspicious embeddings.

### 3. Optimize & Communicate  
*Iterative A/B tests* validate each mitigation; monitor metrics like NDCG, bias‑gap, and privacy leakage score. I’d present this as a slide deck with KPI dashboards, then explain the trade‑off between model complexity (fine‑tuning vs. distillation) and latency. This structured narrative shows clear problem identification, systematic solutions, depth of technical detail, and an eye toward production constraints—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
