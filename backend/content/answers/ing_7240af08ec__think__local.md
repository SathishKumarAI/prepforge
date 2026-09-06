---
qid: ing_7240af08ec__think__local
question: 'Q: How would you select a model for a production RAG system?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 432
total_tokens: 625
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T08:34:44-05:00'
sources: []
---

**1️⃣ Clarify the problem & constraints**  
   - What is the downstream task (search, summarization, dialogue)?  
   - What latency, throughput, and cost limits exist?  
   - Are there data privacy or regulatory requirements?  
   - Is the knowledge base static or frequently updated?

**2️⃣ Adopt a selection framework**  
   - **Fit**: Does the model’s architecture support retrieval‑augmented generation (e.g., encoder‑decoder with attention over retrieved docs)?  
   - **Scalability**: Can it handle the expected query volume and embedding size?  
   - **Explainability & safety**: Are hallucination mitigation mechanisms built‑in?

**3️⃣ Step‑by‑step reasoning**  
   1. List candidate families (e.g., GPT‑4o, Llama‑2‑Chat‑RAG, Claude 3‑Haiku).  
   2. For each, evaluate *retrieval compatibility* (does it accept external passages?).  
   3. Benchmark *inference speed* on representative hardware; estimate per‑query cost.  
   4. Run a *quality test*: feed the same query with top‑k retrieved docs and score relevance & factuality.  
   5. Consider *maintenance*: ease of updating embeddings, fine‑tuning, or adding new docs.

**4️⃣ Avoid common traps**  
   - Don’t pick the largest model just because it “sounds better”; latency may explode.  
   - Ignore the retrieval step—model performance hinges on quality of retrieved context.  
   - Assume public APIs are free; many have usage caps that can throttle production.  

**5️⃣ Sanity‑check & communicate**  
   - Cross‑validate results with a small pilot: deploy one query set, collect user feedback.  
   - Present findings in a table: model, latency, cost, RAG compatibility, QA score.  
   - Highlight trade‑offs clearly so stakeholders can decide on the optimal balance for their use case.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
