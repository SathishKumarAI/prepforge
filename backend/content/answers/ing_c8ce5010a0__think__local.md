---
qid: ing_c8ce5010a0__think__local
question: 'Explain: Workflow — System Design Interview Cheat Sheet - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 456
total_tokens: 647
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T14:12:11-05:00'
sources: []
---

**1️⃣ Clarify & set assumptions**  
- Confirm the audience (e.g., junior ML engineer vs senior data scientist).  
- Assume the interview focuses on building an end‑to‑end ML system (data ingestion → training → serving).  
- Note that “cheat sheet” implies concise, actionable points rather than deep theory.

**2️⃣ Adopt a mental model**  
Use the classic **“system design checklist”**:  
1. *Requirements* (functional & non‑functional)  
2. *Data flow & storage*  
3. *Model lifecycle* (train → validate → deploy)  
4. *Serving architecture*  
5. *Observability & monitoring*  
6. *Scalability, reliability & security*  

Frame the answer around these six pillars.

**3️⃣ Step‑by‑step reasoning**  
- Start by listing high‑level steps: collect data → preprocess → feature store → model training → evaluation → deployment → inference → feedback loop.  
- For each step, note key design choices (batch vs streaming ingestion, relational vs NoSQL for raw data, feature store pattern, containerization of models).  
- Highlight trade‑offs (e.g., latency vs consistency in serving, on‑prem vs cloud).  
- End with an example diagram or bullet‑point flow to show the cheat sheet structure.

**4️⃣ Avoid common traps**  
- Don’t get lost in ML theory; focus on system architecture.  
- Resist over‑engineering: keep the cheat sheet lean and interview‑friendly.  
- Remember to tie back every design choice to a requirement (e.g., “low latency → use Redis cache”).

**5️⃣ Sanity‑check & verbalize**  
- Re‑read the answer to ensure each bullet maps to a system component.  
- Practice explaining it aloud in 2–3 minutes, emphasizing clarity and relevance to interview goals.  
- If time allows, add one real‑world example (e.g., “Recommendation engine: raw logs → Kafka → Spark ETL → feature store → TensorFlow model served via gRPC”).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
