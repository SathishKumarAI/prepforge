---
qid: ing_6fbc0388a3__faang__local
question: The pilot RAG system is giving wrong answers on the customer's contracts.
  You're on-site tomorrow. How do you debug it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 492
total_tokens: 739
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:02:54-05:00'
sources: []
---

**Clarify**  
> *Problem:* A Retrieval‑Augmented Generation (RAG) prototype is returning incorrect answers for contract queries on‑site tomorrow.  
> *Assumptions I’d confirm:*  
> 1. The contract corpus is fully indexed and the vector store is up‑to‑date.  
> 2. The LLM prompt and policy layers are unchanged from last deployment.  
> 3. Production traffic is low enough that we can run diagnostic queries without impacting users.

**Approach**  
1. **Reproduce locally:** Pull latest container, load the same vector store, run a few failing queries.  
2. **Inspect retrieval pipeline:** Verify similarity scores and top‑k documents; log which snippets are fed to the LLM.  
3. **Validate prompt engineering:** Ensure the question is passed unchanged and the system message aligns with contract domain.  
4. **Check model inference:** Compare outputs against a baseline (e.g., a trusted LLM on the same prompt).  
5. **Deploy incremental patches** (e.g., updated embeddings, modified top‑k) in a staging environment before on‑site rollout.

**Depth**  
- Use vector similarity logs (`cosine_similarity`) to spot outliers; if scores are low (< 0.4), retrain embeddings.  
- Compare retrieved text with ground truth contract clauses; mismatch indicates indexing error.  
- If prompt is correct but answer wrong, tweak the instruction: “You are a legal assistant; cite clause numbers.”  
- Complexity: Retrieval O(log N) per query; LLM inference O(L). Trade‑off between higher top‑k (better recall) vs latency.

**Edge Cases**  
- Contracts with nested clauses or ambiguous language may confuse embeddings.  
- Token limits truncating long contracts → use chunking strategy.  
- Stale index if new contracts were added after last reindex; test for missing documents.

**Optimize & Communicate**  
Explain to stakeholders that we’ll iterate on retrieval quality first, then prompt tuning. Highlight metrics: precision@k and answer accuracy before/after fixes. Conclude with a quick sanity‑check plan: “We’ll run 50 manual queries today and verify > 95 % correct answers before the onsite demo.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
