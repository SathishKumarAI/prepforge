---
qid: ing_a4cd1ef646__star__local
question: 'Explain: For In-House — Harvey | AI software for legal and professional
  services'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 339
total_tokens: 580
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:02:56-05:00'
sources: []
---

**Situation** – At a mid‑size law firm I noticed our litigation support team was spending 30 % of their time on document review and precedent research. The senior partners wanted an internal tool that could surface relevant case law faster without outsourcing to expensive vendors.

**Task** – Build a proprietary AI assistant that could ingest the firm’s 1.2 million-page document repository, rank relevance for new cases, and suggest draft motions—all while keeping confidentiality intact and integrating with our existing case‑management system.

**Action** – I led a cross‑functional squad of two data scientists, a devops engineer, and a legal analyst. We used Hugging Face Transformers to fine‑tune a BERT model on the firm’s past judgments, then deployed it in an Azure Kubernetes Service cluster with GPU nodes for inference speed. To preserve privacy we encrypted all documents at rest with AES‑256 and applied differential privacy during training. The front end was built as a lightweight React widget that plugs into Clio, showing ranked search results and auto‑generated motion outlines.

**Result** – Within three months the tool cut document review time by 45 % (from 8 to 4.4 hours per case) and increased the win rate on motions by 12 %. The firm saved roughly $250k annually in external consulting fees, and I learned how to blend cutting‑edge NLP with strict compliance constraints for a real‑world legal workflow.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
