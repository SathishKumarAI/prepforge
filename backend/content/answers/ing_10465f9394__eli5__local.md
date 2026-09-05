---
qid: ing_10465f9394__eli5__local
question: 'Explain: HMACs and Digital Signatures — Checksums | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 279
total_tokens: 442
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:01:10-05:00'
sources: []
---

Imagine you’re sending a secret recipe to a friend over the phone.  
You first put the recipe in a locked box (that’s **HMAC**). The lock is built from two things: the recipe itself and a special key only you and your friend know. If anyone else tries to open it, they can’t because they don’t have the key. When your friend opens the box and reads the recipe, she knows it came straight from you—no one could have tampered with it or forged it.

Now picture sending the same recipe by mail but wanting *every* reader (not just your friend) to trust it. You write the recipe on a piece of paper, then add a unique stamp that only you can make (that’s the **digital signature**). Anyone who sees the stamped paper can check the stamp against your public key; if it matches, they know the recipe is authentic and unaltered.

Both HMACs and digital signatures are checksum‑like tools: they combine data with a secret (or private) key to produce a short “fingerprint.” That fingerprint lets receivers verify that the data hasn’t been changed and that it really came from the claimed sender.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
