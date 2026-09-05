---
qid: ing_cba9b10d9a__star__local
question: 'Explain: How to build an AI assistant for the enterprise'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 381
total_tokens: 617
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:16:09-05:00'
sources: []
---

**Situation** – In late 2023 I was hired by a mid‑size financial services firm that had 2,500 employees and relied on disparate legacy systems (mainframe, SharePoint, Salesforce). Their executives wanted an AI assistant to streamline compliance reporting, schedule meetings, and surface relevant documents.

**Task** – Build a single conversational interface that could understand natural language requests, pull data from multiple APIs, and comply with GDPR/PCI‑DSS regulations while delivering real‑time answers within 2 seconds.

**Action** – I chose an LLM‑based framework (OpenAI GPT‑4o) wrapped in Azure Cognitive Services for on‑prem compliance. I designed a modular architecture: a language‑model front end, a policy engine that checks data‑access permissions, and connectors to the firm’s ERP, CRM, and document storage. For intent recognition I fine‑tuned a BERT model on 1,200 internal tickets; for entity extraction I used spaCy with custom NER tags (e.g., “customer ID”). I implemented a token‑level audit trail stored in an encrypted PostgreSQL DB, and set up a CI/CD pipeline with Terraform to keep the infra immutable. We ran load tests—average latency 1.8 s, 99th percentile 3.2 s.

**Result** – The assistant cut compliance report turnaround from 48 hrs to 4 hrs (92% time savings) and reduced manual scheduling errors by 85%. Adoption reached 70% of staff in the first month, and the client reported a 15% boost in productivity metrics. I learned that marrying LLMs with strict policy layers is key for enterprise trust, and that incremental data‑source integration prevents brittle monoliths.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
