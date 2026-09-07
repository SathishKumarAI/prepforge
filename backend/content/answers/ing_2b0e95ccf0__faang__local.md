---
qid: ing_2b0e95ccf0__faang__local
question: What are the top failure modes of production RAG systems?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 517
total_tokens: 751
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:23:12-05:00'
sources: []
---

**Clarify**  
You’re asking about *Retrieval‑Augmented Generation* (RAG) in production – systems that fetch external documents and then generate responses. I’ll assume a typical pipeline: query → retrieval index → generator → response, deployed at scale with user traffic.

**Approach**  
1. Identify failure modes per component.  
2. Map each to root causes and impact.  
3. Summarize mitigation strategies.

**Depth**

| Failure Mode | Component | Root Cause | Impact |
|--------------|-----------|------------|--------|
| **Out‑of‑date or incomplete index** | Retrieval | Data drift, slow re‑indexing | Wrong facts, hallucinations |
| **Index sparsity / poor coverage** | Retrieval | Limited sources, noisy embeddings | Low recall → missing answers |
| **Latent space misalignment** | Retrieval/Generator | Embedding mismatch (domain shift) | Irrelevant docs fed to generator |
| **Cold‑start or latency spikes** | Retrieval | Large corpus, insufficient caching | Timeouts, degraded UX |
| **Hallucination amplification** | Generator | Overconfidence in retrieved text | Misinformation passed as fact |
| **Bias propagation** | Retrieval/Generator | Skewed source data | Reinforced stereotypes |
| **Privacy leakage** | Retrieval | Storing raw documents or queries | Sensitive info exposure |
| **Resource contention** | System | CPU/GPU overload, network bottlenecks | Throughput drop, cost blow‑up |

**Edge Cases**  
- *Rare entities*: retrieval fails → generator hallucination.  
- *Adversarial queries*: prompt injection triggers unsafe content.  
- *Mixed‑language input*: embeddings misrepresent semantics.

**Optimize & Communicate**  
1. **Continuous indexing** + freshness checks to avoid stale data.  
2. **Hybrid retrieval** (semantic + keyword) for coverage.  
3. **Retrieval gating**: only pass docs above a relevance threshold to the generator.  
4. **Post‑generation validation**: factuality scoring and bias detection before serving.  
5. **Observability**: log recall, latency, hallucination rates; alert on drift.

By structuring the answer—clarifying assumptions, outlining components, detailing failures, testing edge cases, and proposing concrete mitigations—you demonstrate the FAANG‑style depth, communication, and problem‑solving skills expected in a SIGNAL interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
