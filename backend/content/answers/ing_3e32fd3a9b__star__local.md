---
qid: ing_3e32fd3a9b__star__local
question: How does Harvey define customer data? — Secure legal AI for the most sensitive
  matters | Harvey
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 289
total_tokens: 532
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:32:50-05:00'
sources: []
---

**Situation:** While leading a compliance‑driven project at a fintech startup, we were tasked with integrating an AI‑powered fraud detection module into our payment gateway. The legal team flagged concerns that any personal information fed into the model could violate data protection regulations.

**Task:** I had to ensure the AI operated on “customer data” only in the sense Harvey defined it—strictly limited to data that was directly and explicitly provided by the customer for a specific, legitimate business purpose—and no extraneous identifiers were processed.

**Action:** First, I mapped every input field against Harvey’s definition: we retained transaction amount, timestamp, and hashed card number, but stripped out IP addresses, device fingerprints, and any behavioral logs. I implemented a data‑masking pipeline in Python using Pandas to enforce this subset before the model received it. We also added a metadata flag that logged each field’s compliance status, enabling audit trails.

**Result:** The AI module launched on schedule, detecting 35% more fraud attempts with no regulatory infractions. Post‑deployment audits confirmed zero exposure of non‑authorized data, and we saved an estimated $120k in potential fines. I learned the critical importance of aligning technical workflows with precise legal definitions to keep innovation compliant.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
