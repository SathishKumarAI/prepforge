---
qid: ing_0f9c9b1ae4__star__local
question: Design the human approval flow for an agent that files expense reports.
  Where do the gates go, and how do you stop people from clicking through them?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 255
output_tokens: 354
total_tokens: 609
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:59:31-05:00'
sources: []
---

**Situation**  
At my previous company we built a chatbot to auto‑populate quarterly expense reports for sales reps. The finance team flagged that the bot was occasionally submitting duplicate receipts and misclassifying categories, which could trigger costly audits.

**Task**  
I had to design an approval workflow that let the bot generate reports automatically but still kept human oversight where the risk of error was highest—duplicate detection, category accuracy, and budget limits.

**Action**  
First, I mapped out the process: (1) Bot pulls receipts from email & OCR; (2) It clusters similar receipts using cosine similarity on text embeddings; (3) If a cluster score > 0.8, it raises a “Duplicate Check” gate that forwards only one representative to the finance reviewer. Next, for category assignment, I built a small rule‑engine that flags any expense over $500 or outside the approved categories and routes those to a senior analyst. Finally, I added a budget‑threshold gate: if the total of a rep’s pending reports exceeds 90% of their quarterly limit, the system blocks auto‑submission and requires a manager’s approval. To prevent “click‑through,” each gate is presented as a modal with a single “Approve” or “Reject” button, and the UI disables the bot’s next step until a decision is logged in our audit trail.

**Result**  
After deployment, duplicate submissions dropped from 12% to <1%, category errors fell by 35%, and we avoided an audit that could have cost $15k. I learned that embedding lightweight ML checks before human gates can dramatically reduce friction while keeping accountability high.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
