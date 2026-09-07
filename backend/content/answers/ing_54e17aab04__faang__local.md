---
qid: ing_54e17aab04__faang__local
question: 'Explain: Failure modes & mitigations — Enterprise Rag Assistant'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 479
total_tokens: 712
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:01:24-05:00'
sources: []
---

**1️⃣ Clarify**  
*Question:* What are the primary failure modes of an enterprise “RAG (Retrieve‑Augment‑Generate)” assistant, and how can we mitigate them?  
Assumptions:  
- System serves business users via chat/voice; data comes from internal knowledge bases and external APIs.  
- Real‑time response (< 2 s) is required.  

**2️⃣ Approach**  
1. Enumerate failure categories (data, model, system, compliance).  
2. For each, list root causes → mitigation strategies.  
3. Quantify risk & impact.  

**3️⃣ Depth**  

| Failure | Root Cause | Mitigation |
|---------|------------|------------|
| **Incorrect/Out‑of‑date retrieval** | Stale index, schema drift, missing docs | Periodic re‑indexing; versioned embeddings; monitor recall via query logs |
| **Hallucination in generation** | Prompt leakage, weak grounding | Strict prompt templates, post‑filter with confidence scores, human‑in‑the‑loop flagging |
| **Latency spikes** | GPU exhaustion, heavy retrieval | Cache popular queries; pre‑fetch embeddings; autoscale inference nodes |
| **Security leaks** | Unfiltered docs, API key exposure | Fine‑grained access control on vectors; encrypt at rest; audit trails |
| **Bias & compliance violations** | Skewed training data, regulatory gaps | Bias audits, content moderation pipelines, automated legal checklists |

Complexity: Retrieval O(log N) with ANN; generation LLM inference cost linear in token count. Trade‑off between embedding dimensionality (accuracy vs memory).  

**4️⃣ Edge Cases**  
- Zero‑knowledge queries → fallback to safe default or escalation.  
- Rapid policy changes → hot‑swap compliance filters.  
- Distributed outages → circuit breaker + graceful degradation.

**5️⃣ Optimize & Communicate**  
Explain that a layered defense—data hygiene, model safeguards, system resilience—reduces risk by > 90 %. Use dashboards (recall, hallucination rate) to show continuous improvement. Conclude with “We treat RAG as a safety‑critical pipeline; each layer is monitored and iterated upon.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
