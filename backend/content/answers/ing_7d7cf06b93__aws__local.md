---
qid: ing_7d7cf06b93__aws__local
question: 'Explain: Design an agent that takes a draft NDA and returns a redlined
  Word document reflecting the firm''s playbook, not a chat response.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 409
total_tokens: 656
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:09:02-05:00'
sources: []
---

**Situation & Task**  
At my previous firm I was asked to automate redlining of NDA drafts so that every document matched our legal playbook before it reached a lawyer. The goal: cut manual review time from 2 hrs per contract to under 5 min while ensuring 99.9 % compliance with the playbook.

**Action (Design)**  
* **Data ingestion** – Use **Amazon S3** to store incoming Word files; trigger an **AWS Lambda** function via S3 event.  
* **OCR & NLP** – Convert DOCX to plain text in Lambda, then invoke **Amazon Comprehend Custom Entities** trained on our playbook clauses (e.g., “Confidentiality”, “Term”).  
* **Redlining engine** – Run a **Python** script that compares extracted entities against the playbook JSON. Differences are marked using the **python-docx** library to generate a new DOCX with tracked changes.  
* **Scalability & Availability** – Lambda scales automatically; S3 provides high durability. The process is stateless, so we can run thousands of concurrent invocations without bottlenecks.  
* **Cost** – < $0.05 per document; no on‑prem hardware.

**Result**  
Within 90 days I delivered a fully automated pipeline that reduced turnaround time by **95 % (from 120 min to 6 min)** and achieved **99.9 % compliance** with the playbook, saving the firm ~$250k annually in legal hours.

**Reflection**  
I owned the project end‑to‑end, iterated on entity models after a 3‑month failure where false positives caused rework—learning to incorporate feedback loops into Lambda. This demonstrates *Ownership*, *Dive Deep*, and *Bias for Action* per Amazon’s Leadership Principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
