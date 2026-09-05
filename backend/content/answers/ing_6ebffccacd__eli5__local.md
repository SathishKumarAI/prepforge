---
qid: ing_6ebffccacd__eli5__local
question: Anyone can add documents to your corpus. How do you stop an attacker planting
  a document that hijacks the assistant?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 201
total_tokens: 371
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:31:57-05:00'
sources: []
---

Imagine your AI is like a library where anyone can drop a new book on the shelf. To keep readers safe, the librarian first reads every book before it’s opened to the public. The librarian checks for hidden messages that could trick people—like a spell in a fairy‑tale that makes you follow a wrong path.

In AI terms, that “reading” is called **validation** or **content filtering**. The system scans new documents for dangerous patterns: instructions that would break rules, personal data that shouldn’t be shared, or language designed to manipulate the assistant’s replies. If something looks suspicious, it’s either corrected automatically (e.g., removing a malicious snippet) or flagged for human review.

So even though anyone can propose a document, the AI only “accepts” it after this safety check, just like a librarian would before letting readers open a new book.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
