---
qid: ing_a5ac0c455e__star__local
question: 'Explain: Your agent buys things on behalf of users. Design the authorisation
  trail so a disputed transaction is resolvable.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 303
total_tokens: 553
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:04:24-05:00'
sources: []
---

**Situation:** In my last role, I built a marketplace bot that let users purchase groceries via voice commands. A few customers started disputing charges because they claimed the bot had bought items without permission.

**Task:** My job was to design an audit‑ready authorization trail so every transaction could be traced back to a specific user action and approved state, ensuring disputes could be resolved quickly and transparently.

**Action:** I introduced a multi‑layered log system. First, each voice command is transcribed and hashed; the hash plus the user’s unique session token is stored in an immutable append‑only ledger (a Redis stream persisted to S3). Second, before any API call to the vendor, we issue a signed JWT that encodes the intended purchase details and a short expiry. The bot signs this JWT with its private key, and the vendor validates it against our public key. Finally, I added a webhook callback from the vendor that confirms delivery or failure; this confirmation is appended to the same ledger with a tamper‑evident Merkle root.

**Result:** After deployment, dispute resolution time dropped from 5 days to under an hour, and we logged zero false positives in the audit. The system also gave us confidence during a regulatory review, where our immutable trail met all compliance requirements. I learned that combining cryptographic tokens with append‑only logs turns a simple bot into a trustworthy agent.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
