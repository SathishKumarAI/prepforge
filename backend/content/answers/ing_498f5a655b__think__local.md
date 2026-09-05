---
qid: ing_498f5a655b__think__local
question: How do I evaluate an LLM or RAG system in production?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 409
total_tokens: 601
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:17:13-05:00'
sources: []
---

**1️⃣ Clarify the goal & scope**  
   - Define *what* you want to measure (accuracy, latency, user satisfaction, cost).  
   - Decide whether evaluation is for a single model or an end‑to‑end RAG stack.  
   - State assumptions: production traffic volume, data freshness, privacy constraints.

**2️⃣ Choose a mental model**  
   - Treat the system as a pipeline: *input → retrieval → language model → output*.  
   - Use **layered evaluation**: assess each component separately and then jointly.

**3️⃣ Step‑by‑step reasoning**  
   1. **Data sampling** – pull a representative set of real queries (or synthetic if needed).  
   2. **Ground truth creation** – have experts label correct answers or use existing QA pairs.  
   3. **Metric selection per layer** – e.g., retrieval recall@k, LM perplexity, response latency, cost per token.  
   4. **Automated test harness** – run the pipeline on the sample, capture metrics, and log results.  
   5. **Continuous monitoring** – set up dashboards for drift in key KPIs (latency spikes, accuracy drop).

**4️⃣ Common traps to avoid**  
   - Relying solely on proxy metrics (e.g., BLEU) that don’t reflect user intent.  
   - Ignoring cold‑start or rare query handling.  
   - Mixing offline and online evaluation without clear separation.

**5️⃣ Sanity checks & communication**  
   - Verify that metric trends match intuition (higher recall → higher accuracy).  
   - Present results in a narrative: *“Retrieval quality improved by 12 % but caused a 30 ms latency increase.”*  
   - Iterate on thresholds and retraining cycles based on observed trade‑offs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
