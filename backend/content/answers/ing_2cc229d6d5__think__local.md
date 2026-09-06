---
qid: ing_2cc229d6d5__think__local
question: 'Explain: A customer asks: "Should we fine-tune, use RAG, or just prompt
  better?" Give me your decision framework.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 206
output_tokens: 423
total_tokens: 629
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T05:36:58-05:00'
sources: []
---

**Decision‑Making Framework for “Fine‑Tune vs. RAG vs. Prompting”**

1. **Clarify the Goal & Constraints**  
   - *What outcome?* (e.g., domain expertise, compliance, latency).  
   - *Data availability?* Size, quality, and privacy limits.  
   - *Operational budget?* Compute cost, maintenance effort, and SLAs.

2. **Map to a Mental Model**  
   Use the “Cost‑Benefit vs. Flexibility” spectrum:  
   - **Fine‑tuning** → high upfront compute, strong domain fidelity, low inference cost.  
   - **RAG (Retrieval Augmented Generation)** → moderate cost, dynamic knowledge updates, higher latency.  
   - **Prompt Engineering** → minimal cost, limited control, risk of drift.

3. **Step‑by‑Step Reasoning**  
   1. *If* you have a large, curated corpus and can afford GPU training → fine‑tune for consistency.  
   2. *Else if* knowledge must stay current or is too big to embed → RAG (index + retriever).  
   4. *Otherwise* (small scale, quick iterations) → invest in high‑quality prompts; iterate with few‑shot examples.

4. **Avoid Common Traps**  
   - Don’t equate “more data” with better fine‑tune; quality and relevance matter more.  
   - Don’t ignore retrieval latency in RAG for real‑time apps.  
   - Don’t assume prompting alone solves domain nuance—monitor drift.

5. **Sanity Check & Communicate**  
   Summarize: “We’ll choose the method that best aligns with data volume, freshness needs, and cost limits.” Present a 2‑column table (Method vs. Key Trade‑offs) to stakeholders for quick visual reference.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
