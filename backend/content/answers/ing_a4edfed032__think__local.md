---
qid: ing_a4edfed032__think__local
question: 'Explain: When to Use Human Evaluation — Llm Evaluation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 427
total_tokens: 616
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T11:58:14-05:00'
sources: []
---

**1️⃣ Clarify the goal & assumptions**  
- *Goal*: Decide when a human should judge an LLM’s output instead of relying solely on automatic metrics.  
- *Assumptions*: The model is already trained; we have access to evaluation data, and time/people are limited.

**2️⃣ Adopt a decision framework**  
Use a **two‑axis matrix**:  
- **Task complexity** (simple vs. nuanced) × **Evaluation cost** (low vs. high).  
Add a third axis for *domain criticality* (non‑critical vs. safety‑sensitive).

**3️⃣ Step‑by‑step reasoning**  
1. Identify the task type (e.g., fact-checking, creative writing, medical advice).  
2. Estimate output variance: highly variable outputs → higher human need.  
3. Check if automatic metrics correlate with real user satisfaction; low correlation ⇒ humans needed.  
4. Evaluate resource constraints: can you afford many reviewers? If not, prioritize the most critical cases.  
5. Decide on a sampling strategy (e.g., 10% random + all edge‑cases).  

**4️⃣ Avoid common traps**  
- *Overreliance on BLEU/ROUGE*: they miss nuance and factuality.  
- *Assuming humans are always better*: for large volumes, human review can be error‑prone and slow.  
- *Ignoring domain safety*: skip human evaluation in high‑stakes areas unless you have qualified experts.

**5️⃣ Sanity‑check & communicate**  
- Cross‑validate a small set of human scores against your chosen metrics; if discrepancy > 15%, revisit the metric choice.  
- Summarize decisions with a brief rule: “If task is safety‑critical or automatic metrics < 0.7 correlation, use human evaluation; otherwise, rely on automated checks.”  

This structured, transparent process lets you reuse the same thinking for any LLM evaluation scenario.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
