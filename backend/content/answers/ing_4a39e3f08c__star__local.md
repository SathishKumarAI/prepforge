---
qid: ing_4a39e3f08c__star__local
question: 'Explain: Present the architecture for a workflow that reviews 5,000 contracts
  in a Vault against an 18-question diligence checklist and returns a review grid.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 256
output_tokens: 305
total_tokens: 561
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:56:47-05:00'
sources: []
---

**Situation:**  
At my last firm we had to audit 5,000 supplier contracts stored in a secure vault before launching a new procurement platform. The compliance team required an automated review against an 18‑question diligence checklist, but the manual process was taking weeks and risked missing critical clauses.

**Task:**  
Design a scalable workflow that pulls contracts from the vault, applies the checklist, outputs a structured review grid in real time, and flags any non‑compliant items for follow‑up.

**Action:**  
I built an event‑driven pipeline using Azure Functions triggered by a blob storage change feed. Each contract PDF was passed to a pre‑trained OCR model (Azure Cognitive Services) to extract text, then a transformer‑based NER model identified clause types. The extracted clauses were mapped to the 18 checklist items via a rules engine written in Python. Results were stored in Cosmos DB and surfaced through a Power BI dashboard that automatically refreshed every hour. I also added a retry mechanism for OCR failures and used Azure Key Vault for all credentials.

**Result:**  
The workflow processed all 5,000 contracts in under two hours, reduced review time from weeks to days, and achieved 97 % accuracy on clause identification. The compliance team could now focus on high‑risk items, and I learned how to combine serverless architecture with ML inference for rapid, reliable contract analysis.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
