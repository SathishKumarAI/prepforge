---
qid: ing_7c5915948a__faang__local
question: 'Explain: Agentic RAG Failure Modes — Production Rag At Scale'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 549
total_tokens: 784
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:33:13-05:00'
sources: []
---

**Clarify**

The interview asks for *agentic Retrieval‑Augmented Generation (RAG) failure modes at production scale*.  
Key assumptions to confirm:  
1. “Agentic” means the system can choose what knowledge to retrieve and how to use it, not just passively feed a static prompt.  
2. Production scale implies millions of concurrent requests, strict latency SLAs, and regulatory constraints (e.g., GDPR).  

**Approach**

1. Identify failure modes that arise when retrieval and generation become autonomous.  
2. Categorize by source: data quality, model behavior, system architecture, and governance.  
3. For each mode, outline mitigation tactics and trade‑offs.  

**Depth**

| Failure Mode | Cause | Impact | Mitigation |
|--------------|-------|--------|------------|
| **Hallucinated Retrievals** | Retrieval model misfires on ambiguous queries → irrelevant documents. | Wrong context leads to factual errors or policy violations. | Cache high‑confidence vectors; use a “retrieval confidence gate” before generation. |
| **Cascading Drift** | Agent learns to request progressively narrower docs, losing global context. | Generates incoherent or contradictory answers. | Periodic “context reset” checkpoints and multi‑head attention over aggregated docs. |
| **Bias Amplification** | Retrieval bias + model amplification → skewed outputs. | Legal/regulatory risk. | Maintain a balanced retrieval index; apply debiasing post‑processing layers. |
| **Cold‑Start & Coverage Gaps** | New topics absent from the index → no useful docs. | Zero‑confidence responses. | Hybrid fallback to a generic knowledge base or live search APIs. |
| **Latency Amplification** | Retrieval + generation pipeline becomes serial; retries on miss increase RTT. | SLA violations. | Parallelize retrieval shards; use pre‑fetching and adaptive batching. |

**Edge Cases**

*Highly ambiguous user intents.*  
*Rapid index churn (e.g., news feeds).*  
*Regulated domains requiring audit trails.*

Test with synthetic prompts, adversarial queries, and load simulations to ensure each mitigation holds.

**Optimize & Communicate**

- Prioritize mitigations that reduce worst‑case latency first (parallel retrieval).  
- Quantify trade‑offs: e.g., adding a confidence gate may drop 2 % throughput but cuts hallucinations by 15 %.  
- Explain decisions in real‑time dashboards for ops, and embed audit logs to satisfy compliance.

This structured answer demonstrates problem decomposition, technical depth, and clear communication—key signals for FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
