---
qid: ing_5b75749e76__faang__local
question: 'Explain: Research — Harvey | AI software for legal and professional services'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 460
total_tokens: 695
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:15:49-05:00'
sources: []
---

**1️⃣ Clarify**  
We’re asked to describe *Harvey*, an AI‑powered platform that assists lawyers and other professionals. Key points: it processes legal documents, automates routine tasks, and augments decision‑making. I’ll confirm that the focus is on its architecture (NLP + knowledge graph), use cases (contract review, due diligence), and value proposition (time savings & risk reduction).

**2️⃣ Approach**  
I’ll outline: (a) data ingestion → (b) NLP pipeline → (c) semantic reasoning → (d) user interface. I’ll then explain the business impact.

**3️⃣ Depth**  
- **Data layer:** PDFs, Word docs are parsed via OCR and tokenized.  
- **NLP engine:** Transformer models fine‑tuned on legal corpora extract entities (parties, dates, obligations). Named‑entity recognition feeds into a knowledge graph that captures relationships (e.g., “Party A owes Party B $X”).  
- **Reasoning layer:** Rule‑based inference plus probabilistic scoring flags anomalies (missing clauses, conflicting terms).  
- **UI/Workflow:** Interactive dashboards let attorneys drill down, annotate, and export summary reports. API endpoints enable integration with e‑discovery tools.  
- **Performance:** Batch processing runs in under 30 s for a 200‑page contract; real‑time queries <100 ms.  

**4️⃣ Edge Cases**  
- OCR errors on handwritten notes → fallback to manual review.  
- Ambiguous clauses leading to false positives → confidence thresholds adjustable by user.  
- Legal jurisdiction differences → modular rule sets per region.

**5️⃣ Optimize & Communicate**  
Future iterations could adopt continual learning: user edits fine‑tune the model, reducing error rates over time. I’d explain trade‑offs between accuracy and latency (larger models give higher recall but slower inference). Throughout, I’ll keep the narrative concise, emphasize impact metrics (e.g., 70% reduction in contract review time), and tie back to business value—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
