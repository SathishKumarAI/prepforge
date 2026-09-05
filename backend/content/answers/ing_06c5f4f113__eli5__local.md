---
qid: ing_06c5f4f113__eli5__local
question: 'Explain: Data Exfiltration and Leakage — Safety And Governance'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 282
total_tokens: 441
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:46:18-05:00'
sources: []
---

Imagine your computer is a library that holds all the books (data) you care about.  
**Data exfiltration** is like someone sneaking out of the library with a bag and taking some books without permission—this is an intentional, hidden theft by an attacker.  
**Data leakage** is more accidental: maybe a librarian forgets to lock the doors, or a book falls from a shelf and lands in a public area where anyone can see it. It’s not a deliberate act of theft but still exposes information.

For AI systems, these problems matter because the “books” are often sensitive—personal details, company secrets, medical records. If they slip out, people lose privacy or trust, and the organization may face legal penalties.  

**Safety** means building safeguards so that even if a bug appears, no one can easily carry books out unnoticed.  
**Governance** is the set of rules (like library policies) that decide who can access what data, how it’s stored, and how to react if a book goes missing.

In short: keep your data locked up with strong defenses (safety), and enforce clear, consistent policies for handling it (governance). This protects both individuals and the reputation of the AI system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
