---
qid: ing_402c651875__star__local
question: 'Explain: Interview Follow-Up Questions — Compliance Automation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 280
total_tokens: 514
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:36:30-05:00'
sources: []
---

**Situation:** In my last role at a fintech startup, we were rolling out an AI-powered onboarding chatbot that needed to meet strict KYC and AML regulations. Our legal team flagged that the bot’s automated compliance checks were producing a high false‑positive rate, causing delays in account activation.

**Task:** I was tasked with designing a compliance automation framework that reduced false positives by at least 30% while keeping processing time under two seconds per user interaction.

**Action:** First, I mapped the regulatory rules into a rule engine using Drools and integrated it with our NLP pipeline. Then I added a machine‑learning confidence score layer—an XGBoost model trained on historical flagged cases—to dynamically adjust thresholds per risk profile. I also built an audit log module that stored every compliance decision in a tamper‑evident ledger via Hyperledger Fabric, ensuring traceability for regulators.

**Result:** The false‑positive rate dropped from 18% to 12%, cutting onboarding time by 25%. We passed the regulatory audit with no findings and received a commendation from the compliance officer. I learned that blending rule‑based logic with ML confidence scores, coupled with immutable logging, is key for trustworthy AI in regulated domains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
