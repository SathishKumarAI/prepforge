---
qid: ing_9bd3f938b3__star__local
question: Is your coding agent uploading all your code?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 312
total_tokens: 546
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:43:43-05:00'
sources: []
---

**Situation:**  
At my last startup, we built an internal AI‑assisted IDE that automatically suggested refactorings and generated boilerplate. The team was nervous because the tool ran a background process that sent snippets to a cloud server for natural‑language processing.

**Task:**  
I had to demonstrate that our agent never uploaded proprietary code while still delivering real‑time suggestions, so we could meet GDPR compliance and keep the product marketable.

**Action:**  
First, I designed a local “sandbox” module: every snippet was hashed with SHA‑256 before leaving the machine. The hash list was compared against an on‑premise blacklist of known sensitive patterns; only non‑blacklisted hashes were sent to the cloud. I added a side‑channel audit log that stored timestamps and exact payloads locally, encrypted at rest with AES‑GCM. Then I implemented a “dry‑run” mode for QA where all suggestions ran offline, confirming the same logic path without any network traffic.

**Result:**  
After deployment, we logged zero code uploads over 18 months of production use—verified by our audit logs and external penetration testing. Customer satisfaction scores rose from 78% to 92%, and we reduced support tickets related to privacy concerns by 65%. I learned that rigorous hashing, local filtering, and transparent logging can reconcile AI productivity with strict data‑privacy requirements.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
