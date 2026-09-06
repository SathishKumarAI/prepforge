---
qid: ing_e388c2662d__think__local
question: An enterprise customer says "Claude hallucinates too much" in their RAG-based
  knowledge assistant. You're the applied engineer on the account. First 48 hours?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 211
output_tokens: 499
total_tokens: 710
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T16:00:36-05:00'
sources: []
---

**1️⃣ Clarify the issue & set assumptions**  
- Confirm what “hallucinate” means for this customer (e.g., unsupported facts, irrelevant answers).  
- Verify that the RAG pipeline is indeed Claude‑based and note version/temperature settings.  
- Assume the customer’s data sources are up‑to‑date and that they’ve followed the integration guide.

**2️⃣ Adopt a systematic troubleshooting framework**  
Use *Root‑Cause → Mitigation → Validation* for each component:  
- Retrieval (index quality, vector similarity).  
- Generation (Claude prompt design, temperature, stop tokens).  
- Post‑processing (answer filtering, confidence thresholds).

**3️⃣ Step‑by‑step reasoning path**  
1. **Collect evidence** – ask the customer to provide example queries that trigger hallucinations and any logs.  
2. **Reproduce locally** – run those queries against a sandbox instance with identical settings.  
3. **Check retrieval quality** – ensure relevant documents are returned (cosine similarity > threshold, no stale docs).  
4. **Inspect prompt engineering** – confirm the instruction “only cite provided sources” and that source IDs are correctly passed to Claude.  
5. **Adjust generation controls** – lower temperature, add `max_tokens`, enforce stricter stop sequences.  
6. **Implement confidence scoring** – flag answers with low source overlap for human review.  
7. **Iterate** – test changes, gather feedback, repeat until hallucination rate drops.

**4️⃣ Avoid common traps**  
- Don’t assume the problem is purely Claude; retrieval errors often masquerade as hallucinations.  
- Avoid blanket “lower temperature” fixes that can make answers dull or overly generic.  
- Skip adding more data without cleaning it—noise inflates hallucination risk.  

**5️⃣ Sanity‑check & communicate**  
- Quantify improvement: measure the percentage of answered queries with cited sources before/after changes.  
- Present a concise dashboard to the customer showing “Hallucination Rate” and “Source‑Match Score.”  
- Outline next steps: schedule a follow‑up demo, set up monitoring alerts for future spikes, and offer a quarterly review.

By following this 48‑hour rapid response plan you’ll isolate the root cause, apply targeted fixes, and demonstrate measurable progress to the enterprise client.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
