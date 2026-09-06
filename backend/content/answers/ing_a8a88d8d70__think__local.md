---
qid: ing_a8a88d8d70__think__local
question: 'Explain: Generator Evaluation — Rag Evaluation Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 186
output_tokens: 433
total_tokens: 619
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T12:11:22-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
- *What is being evaluated?* The “generator” (e.g., a language model) that produces answers or documents.  
- *Evaluation domain:* Retrieval‑augmented generation (RAG) systems where the generator can query external sources.  
- Assume we have access to ground‑truth answers, reference documents, and the retrieval component’s outputs.

**2️⃣ Adopt an evaluation framework**  
Use a layered model:  
a. **Content accuracy** – does the answer match known facts?  
b. **Source fidelity** – is the cited information correctly extracted from retrieved docs?  
c. **Relevance & coverage** – does it address all sub‑questions?  
d. **Hallucination risk** – any statements unsupported by evidence?

**3️⃣ Reason step‑by‑step**  
1. *Extract* the generator’s answer and its cited sources.  
2. *Cross‑check* each claim against the retrieved documents (e.g., keyword matching, semantic similarity).  
3. *Score* each dimension separately using metrics like F1 for accuracy, citation precision/recall for source fidelity, BLEU or ROUGE for coverage.  
4. *Aggregate* into a composite score (weighted sum or multi‑objective ranking).  
5. *Iterate*: refine thresholds and weights based on human feedback.

**4️⃣ Avoid common traps**  
- **Over‑reliance on surface similarity:** two sentences can be similar yet convey different facts.  
- **Ignoring retrieval errors:** a correct answer may still be penalized if the cited source is wrong.  
- **Treating all citations equally:** some sources carry more authority; weigh accordingly.

**5️⃣ Sanity‑check & communicate**  
- Run *spot checks* on random samples to confirm automatic scores align with human judgment.  
- Present results in a dashboard: per‑question breakdown + overall trends.  
- Explain the rationale behind each metric so stakeholders understand what “good” means in context.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
