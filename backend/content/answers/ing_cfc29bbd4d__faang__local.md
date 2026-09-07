---
qid: ing_cfc29bbd4d__faang__local
question: 'Explain: Design the evaluation for a document understanding feature: users
  upload invoices and scanned forms and ask questions about them.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 512
total_tokens: 757
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:43:32-05:00'
sources: []
---

**Clarify**  
We need an end‑to‑end test harness that measures how well the system answers user queries on uploaded PDFs/Scans of invoices and forms. Key assumptions:  
* Inputs are image/PDF files (OCR required).  
* Queries are natural language; responses must be extracted facts or aggregated metrics.  
* Users expect < 2 s latency, 95 %+ accuracy, and minimal false positives.

**Approach**  
1. **Data pipeline:** OCR → structured table extraction → knowledge graph.  
2. **Ground truth corpus:** Annotate a representative set of invoices/forms with gold question‑answer pairs (using crowdsource or domain experts).  
3. **Metrics:**  
   * *Exact Match* and *F1* on extracted tokens.  
   * *Latency* per query.  
   * *Coverage*: % of questions answered vs. “no answer”.  
4. **Evaluation stages:**  
   * *Unit tests* for OCR, layout analysis, NER.  
   * *Integration test* that runs a full inference cycle on the annotated set.  
   * *Stress test* with concurrent uploads and queries.

**Depth**  
- Build a **confusion matrix** per entity type (date, total, line‑item).  
- Use **BLEU/ROUGE** for free‑form answers to capture paraphrases.  
- Compute *Precision@k* for retrieval‑based QA if the system uses document embeddings.  
- Complexity: OCR O(n) per page; extraction O(m) per entity; overall latency dominated by GPU inference.

**Edge cases**  
- Low‑contrast scans → OCR errors.  
- Multi‑language invoices → NER drop.  
- Ambiguous field names (e.g., “Total” vs. “Subtotal”).  
- Test with synthetic noise and edge layouts to ensure robustness.

**Optimize & Communicate**  
Iterate on the extraction model: fine‑tune a transformer on domain data, add error‑correction post‑processing. Present results in a dashboard: accuracy heatmaps per field, latency bars, coverage pie charts. Highlight trade‑offs: higher OCR confidence thresholds reduce recall but improve precision; batch inference lowers cost but increases latency. This structured plan demonstrates clear problem framing, systematic evaluation design, and actionable insights—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
