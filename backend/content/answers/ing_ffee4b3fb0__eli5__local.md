---
qid: ing_ffee4b3fb0__eli5__local
question: 'Explain: 5.1 Get User Profile — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 227
total_tokens: 395
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:20:09-05:00'
sources: []
---

Imagine Instagram as a big library where each book is a user’s profile page.  
**Step 1 – Find the book**: When someone wants a profile, we first look up the “book ID” (the username or numeric id) in our catalog (a fast key‑value store). That gives us the address of the actual pages.  

**Step 2 – Pull the content**: The catalog points to several shelves—one for basic info (name, avatar), one for photos, and another for recent activity. We fetch each shelf from its own storage cluster.  

**Step 3 – Assemble the book**: Once all parts are fetched, we stitch them together in memory, add a few quick edits (like showing whether you’re following them), and hand the finished profile back to the user.  

This layered approach keeps the system fast, scales with millions of users, and lets each part grow independently—just like organizing a huge library efficiently.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
