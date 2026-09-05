---
qid: vq_f9c9efd200__eli5__local
question: WHAT ARE SQL INJECTIONS, AND HOW DO YOU PREVENT THEM?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 248
total_tokens: 411
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:34:27-05:00'
sources: []
---

Imagine you’re at a restaurant that takes orders by phone. The kitchen only knows what’s on the menu—bread, soup, steak. If a caller says “I’ll have a steak,” the kitchen prepares exactly that. A *SQL injection* is like someone on the phone shouting, “Give me a steak **and** steal my credit card.” The system, not checking the caller’s words carefully, adds the extra instructions to its recipe and runs them too—so the attacker can do things they’re not supposed to.

To keep your kitchen safe:

1. **Use prepared recipes (parameterized queries).** Tell the database *“take this value only as data,”* so it never treats it as a new instruction.
2. **Sanitize the phone line (input validation).** Reject or escape any characters that could change the recipe—like `;`, `'`, or `--`.
3. **Limit what’s on the menu (least privilege).** Let the database account only do what it needs: read data, not delete tables.

With these habits, the kitchen will never accidentally run an attacker’s hidden order.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
