---
qid: ing_81b8b4f36e__star__local
question: What is LLM-as-a-Judge? — Ai Evals Complete Guide Langwatch Langfuse
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 379
total_tokens: 624
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:52:39-05:00'
sources: []
---

**Situation:**  
During a product‑launch sprint at my last company, we were building an AI‑driven compliance checker for financial documents. The regulatory team insisted on a “human‑in‑the‑loop” audit to meet industry standards, but manual reviews were slowing our release by weeks.

**Task:**  
I was tasked with creating a system that could automatically evaluate and flag potential compliance issues—essentially acting as an impartial judge—while still allowing human experts to override when needed. The goal was to reduce review time from 48 hours per document to under 12 minutes without sacrificing accuracy.

**Action:**  
I implemented an LLM-as-a-Judge pipeline: first, a fine‑tuned GPT‑4 model ingested each PDF and extracted key clauses; then I wrapped it in Langfuse for real‑time logging and audit trails. The model produced structured verdicts (e.g., “Clause X violates GDPR”) along with confidence scores. I integrated this output into our existing workflow via a lightweight FastAPI service, adding a “review” flag that surfaced ambiguous cases to human auditors. To ensure fairness, I performed rigorous bias audits using Langwatch’s prompt‑analysis tools and iterated on the prompt until F1 scores exceeded 0.92 across all test sets.

**Result:**  
The automated judge cut compliance review time by 83%, from 48 hours to just 12 minutes per document. Accuracy stayed above 95% for critical violations, and the audit trail made it easy for regulators to trace decisions. I learned that treating an LLM as a judge requires careful prompt engineering, transparent logging, and ongoing bias checks—principles that now guide every AI‑audit feature we ship.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
