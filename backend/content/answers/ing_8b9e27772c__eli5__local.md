---
qid: ing_8b9e27772c__eli5__local
question: Your agent reads web pages and can send email. How do you defend against
  indirect prompt injection?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 259
total_tokens: 425
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:17:57-05:00'
sources: []
---

Think of the agent as a helpful post‑man who can read letters (web pages) and deliver mail (emails).  
**Indirect prompt injection** is like someone slipping a hidden note into a letter that tricks the post‑man into sending an unwanted message—only the note isn’t obvious at first glance.

To guard against this, we give the post‑man two safety rules:

1. **Read only what’s needed** – The agent should scan pages for specific keywords or patterns it was told to look for (e.g., “contact:”). Anything else is ignored, just like a post‑man would skip unrelated junk mail.

2. **Verify before acting** – Before sending an email, the agent asks itself, “Is this request truly coming from the user’s original prompt, not from some hidden note?” It does this by checking that the content it will send matches a template or a list of approved actions.

By limiting what the agent reads and double‑checking every action against its own rules, we keep hidden notes from steering it into sending anything unintended.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
