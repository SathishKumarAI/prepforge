---
qid: ing_f7dca0e51b__think__local
question: 'Explain: Q108: Design a real-time fraud detection system with a hard p99
  < 500ms latency requirement, using both ML rules and an LLM-RAG layer. Walk through
  the latency budget breakdown.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 221
output_tokens: 570
total_tokens: 791
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T17:21:15-05:00'
sources: []
---

**1️⃣ Clarify the ask & state assumptions**

* The system must process each transaction in real‑time and guarantee **p99 < 500 ms**.  
* “ML rules” → lightweight, rule‑based + statistical classifiers (e.g., gradient‑boosted trees).  
* “LLM‑RAG layer” → a large language model that retrieves context from knowledge bases before answering.  
* Assume a single‑node microservice architecture with horizontal scaling; network latency ≈ 20 ms.

**2️⃣ Adopt a latency‑budgeting framework**

Break the 500 ms budget into *inference*, *retrieval*, *communication*, and *overhead* slices, then allocate percentages (e.g., 60 % inference, 25 % retrieval, 10 % comms, 5 % overhead).  

**3️⃣ Step‑by‑step reasoning**

1. **Pre‑processing (≈ 20 ms)** – normalize data, feature extraction, sanity checks.  
2. **ML rule engine (≈ 200 ms, ~40 %)** – run the tree model; if it flags high risk → short‑circuit.  
3. **LLM‑RAG decision path (≈ 120 ms, ~24 %)** – retrieve 1–3 relevant documents via vector search, then prompt LLM; keep context length minimal to fit GPU batch window.  
4. **Decision aggregation & logging (≈ 30 ms)** – combine scores, decide fraud/not, persist result.  
5. **Network round‑trip (~20 ms)** – send back response to gateway.  

Add a safety margin (≈ 10–15 %) for jitter and retries.

**4️⃣ Common pitfalls**

* Over‑loading the LLM with long prompts → latency blow‑up.  
* Ignoring GPU batch sizing; under‑utilized GPUs increase per‑query time.  
* Forgetting to account for serialization/deserialization overhead.  

**5️⃣ Sanity check & verbalize**

- Verify each slice sums to ≤ 500 ms, including jitter.  
- Run a simulation with synthetic traffic; measure p99 empirically.  
- Explain the budget verbally: “We allocate 60 % of our time to fast rule inference, keep retrieval tight via vector search, and cap LLM prompts to stay within 120 ms, ensuring overall latency stays below 500 ms even at high load.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
