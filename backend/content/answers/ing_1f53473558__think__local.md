---
qid: ing_1f53473558__think__local
question: 'Explain: Requirements — System Design Interview Cheat Sheet - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 435
total_tokens: 626
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T04:46:07-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
   * Identify what “requirements” mean in a system‑design interview (e.g., scalability, availability, consistency).  
   * Assume the candidate knows basic ML terminology but may not know interview conventions.

**2️⃣ Adopt a structured framework**  
   * Use the classic *SCOPE* checklist: **Scale**, **Cost**, **Operational complexity**, **Performance**, **Ecosystem**.  
   * Map each to concrete ML sub‑domains (data ingestion, model training, inference, monitoring).

**3️⃣ Reason step‑by‑step**  
   1. List high‑level requirements (e.g., “real‑time predictions for millions of users”).  
   2. Translate them into system constraints (latency < 50 ms, throughput ≥ 10k req/s).  
   3. For each constraint, pick an architectural pattern (streaming pipeline, micro‑services, edge inference).  
   4. Highlight trade‑offs (e.g., consistency vs latency, batch vs online learning).

**4️⃣ Avoid common traps**  
   * Don’t jump straight to tech choices—first nail the business problem.  
   * Beware of “over‑engineering” with fancy ML ops tools; focus on core reliability and data flow.  
   * Resist the urge to explain every algorithmic detail unless asked.

**5️⃣ Sanity‑check & communicate**  
   * Re‑state the requirements in plain language to confirm understanding.  
   * Summarize the design as a “cheat sheet”: bullet points for each requirement, chosen pattern, key metrics, and trade‑offs.  
   * End with a quick “What if” question (e.g., “How would you handle 10× traffic?”) to show depth.

This structured meta‑plan lets you tackle any system‑design interview question while keeping the focus on clear, requirement‑driven architecture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
