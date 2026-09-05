---
qid: vq_f5bfe59190__eli5__local
question: How do you pass values from one form to another form ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 236
total_tokens: 396
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:33:58-05:00'
sources: []
---

Think of each form as a **letter box** in your house.  
When you finish filling out the first letter box (Form A), you can stick a note on its door that says, “Hey, remember this address?” That note is the **value** you want to give to the next letter box (Form B).  

In web terms, you *pass values* by putting them in a small package called **query parameters** or **hidden fields**.  
- **Query parameter**: The note that’s written on the address line of the URL, e.g., `?name=Alice`.  
- **Hidden field**: A tiny invisible box inside Form B that already contains “Alice” before you even open it.

When the user moves from Form A to Form B, the browser reads that note or hidden box and pre‑fills the new form. It’s like sending a quick memo between two mailboxes so the next one knows what to write down right away.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
