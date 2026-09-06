---
qid: ing_84041ed74f__think__local
question: 'Explain: Evaluation & debugging — Rag And Retrieval'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 187
output_tokens: 416
total_tokens: 603
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T09:45:25-05:00'
sources: []
---

**1️⃣ Clarify the scope and assumptions**  
- Identify that “RAG” refers to *Retrieval‑Augmented Generation* (generative models plus a retrieval step).  
- Assume we’re evaluating end‑to‑end performance (accuracy, relevance) and debugging typical failure modes.

**2️⃣ Adopt an evaluation–debugging framework**  
- Treat the system as two modules: **retriever** → **generator**.  
- Use a layered metric hierarchy: *retrieval metrics* (recall@k, MRR), *generation metrics* (BLEU, ROUGE, human relevance), and *system‑level* (latency, cost).

**3️⃣ Step‑by‑step reasoning**  
1. **Define gold data**: ground‑truth documents + target responses.  
2. **Measure retrieval quality** on the same query set; flag low recall as a candidate bug.  
3. **Feed retrieved snippets into the generator** and evaluate output relevance.  
4. If outputs are incoherent, isolate whether it’s due to noisy context or model misuse.  
5. Iterate: tweak retriever index, re‑rank, adjust prompt templates.

**4️⃣ Common traps to avoid**  
- Confusing *retrieval recall* with *generation fluency*.  
- Using automatic metrics that ignore factual correctness (BLEU can be high on hallucinated text).  
- Overfitting the generator to a specific retrieval strategy; keep evaluation cross‑validated.

**5️⃣ Sanity‑check & communicate**  
- Plot retrieval score vs. generation quality; look for correlation.  
- Explain each metric’s intuition and why it matters (e.g., recall@k → “does the system see the right evidence?”).  
- Summarize actionable insights: if retrieval is weak, rebuild index; if generator misuses context, adjust prompt or fine‑tune on retrieved data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
