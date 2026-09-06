---
qid: ing_f7dca0e51b__fp__local
question: 'Explain: Q108: Design a real-time fraud detection system with a hard p99
  < 500ms latency requirement, using both ML rules and an LLM-RAG layer. Walk through
  the latency budget breakdown.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 202
output_tokens: 521
total_tokens: 723
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:46:48-05:00'
sources: []
---

**Why a split‑stack is needed**

A fraud detector must decide *within 500 ms* that a transaction is legitimate or suspicious while still learning from new patterns. Pure ML rules (thresholds, rule engines) give deterministic, sub‑millisecond decisions but cannot capture semantic shifts; an LLM‑RAG layer can surface rare or evolving fraud tactics but incurs inference latency. The hard p99 < 500 ms forces us to treat the LLM as a *fallback* that is only invoked when rules are inconclusive.

---

### Latency budget (per transaction)

| Layer | Target latency | Reasoning |
|-------|----------------|-----------|
| **Ingress & preprocessing** | 10 ms | I/O, feature extraction, de‑duplication. |
| **Rule engine / lightweight ML** | 30 ms | Decision tree / gradient‑boosted model; deterministic, ≤ p99 20 ms → slack for jitter. |
| **LLM‑RAG trigger** | 5 % of remaining budget ≈ 20 ms | Only if rule output is “unknown” or probability ∈[0.4, 0.6]. |
| **LLM inference (GPU/FPGA)** | 250 ms | Batch‑mode or pipelined tokenization; use *early‑exit* adapters to stop after a few tokens when confidence is high. |
| **RAG retrieval** | 50 ms | Index lookup on vector store, async pre‑fetch of top‑k docs; use locality‑optimized embeddings. |
| **Post‑processing & audit logging** | 20 ms | Compose final verdict, write to Kafka/DB, trigger alerts if needed. |

Total ≈ 480 ms → leaves ~20 ms guard for network jitter and orchestration overhead.

---

### Non‑obvious insight

Treat the LLM as a *probabilistic hypothesis tester*: instead of forcing a hard decision on every transaction, use its *entropy* over generated rationales to decide whether it should continue. If the entropy falls below a threshold after the first 10 tokens, you can abort early and accept the rule‑engine result. This keeps the LLM’s contribution bounded while still allowing it to surface novel fraud patterns—an elegant blend of information theory (entropy) with real‑time constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
