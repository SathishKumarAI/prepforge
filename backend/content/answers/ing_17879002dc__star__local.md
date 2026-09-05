---
qid: ing_17879002dc__star__local
question: 'Explain: Schema-constrained extraction — Document Intelligence Pipeline'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 377
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:15:50-05:00'
sources: []
---

**Situation:**  
In my last role at a financial services firm, we were tasked with automating the processing of quarterly audit reports for compliance. The reports were PDFs from various vendors, each with slightly different layouts, but the regulatory body required us to extract specific fields—like “Total Assets,” “Liabilities,” and “Net Income”—into a structured JSON schema that our downstream analytics engine could consume.

**Task:**  
I needed to build an end‑to‑end pipeline that reliably pulled those fields from any report version while enforcing the predefined JSON schema, so we could avoid manual data cleaning and meet a 48‑hour turnaround for each batch of 200 documents.

**Action:**  
First, I used Azure Form Recognizer to train a custom model on 120 annotated samples, labeling the target entities. Then I wrapped the model in an Azure Function that accepted PDFs, ran OCR, and returned raw text blocks. Next, I wrote a validation layer in Python: each extracted entity was mapped to its schema key, type‑checked, and any missing or malformed values triggered a fallback routine that queried the PDF’s metadata for hints. Finally, I deployed the pipeline on an Azure Container Instance with autoscaling, adding a small Postman collection to trigger batch runs via REST.

**Result:**  
The system processed 200 reports in under 30 minutes, achieving 97 % extraction accuracy—down from the previous manual 70 %. The schema enforcement eliminated downstream errors by 85 %, and we saved roughly 12 hours of analyst work per week. I learned that coupling OCR with a strict validation layer not only boosts precision but also gives clear audit trails for compliance teams.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
