---
qid: ing_5c52cd4c2e__faang__local
question: 'Explain: Selective Inclusion — Context vs. Memory Engineering in Agentic
  AI Systems'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 509
total_tokens: 747
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:17:51-05:00'
sources: []
---

**Selective Inclusion – Context vs. Memory Engineering in Agentic AI**

| Step | What I’d do |
|------|-------------|
| **Clarify** | *Restate*: We want to decide when an agent should pull data from a short‑term “context” buffer versus long‑term “memory”. <br>*Assumptions*: 1) Context = live prompt + recent interactions (≤ few dozen tokens). 2) Memory = indexed embeddings stored in a vector DB. 3) The goal is to keep inference latency low while preserving knowledge relevance. |
| **Approach** | 1️⃣ Evaluate the *recency* and *specificity* of the query. <br>2️⃣ Score candidate memory vectors for similarity & recency. <br>3️⃣ If top‑k similarity > threshold AND recency within window, include in context; otherwise defer to memory lookup or ask clarification. |
| **Depth** | • **Context**: 1–2 k tokens, streamed directly into the LLM prompt (O(1) latency). <br>• **Memory**: Retrieval via ANN (FAISS/PGVector), top‑k ~5, each embed size ~768; cost O(log N). <br>• *Trade‑off*: Context is fast but limited; memory expands knowledge at the cost of retrieval time. Use a hybrid pipeline that first attempts context, falls back to memory if confidence < 0.7. |
| **Edge Cases** | • Out‑of‑scope query → return “unknown” instead of hallucination. <br>• Overlap between context and memory may cause duplication; dedupe by hashing. <br>• Memory drift: periodically re‑embed with updated model to avoid stale embeddings. |
| **Optimize & Communicate** | • Cache frequent memory hits in an LRU layer (≈ 10× speed). <br>• Log inclusion decisions for A/B testing. <br>Explain the design by showing a flow diagram and latency budget: 5 ms context + 15 ms retrieval ≈ 20 ms total, meeting real‑time SLA. |

*Result*: The agent dynamically selects the cheapest yet most relevant source—context when enough is already present, memory otherwise—ensuring low latency without sacrificing knowledge coverage.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
