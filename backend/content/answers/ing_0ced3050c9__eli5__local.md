---
qid: ing_0ced3050c9__eli5__local
question: 'Explain: Uh, when you want to append a — Google I/O 2009 - Google Wave:
  Under the hood'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 242
total_tokens: 414
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:55:53-05:00'
sources: []
---

Think of Google Wave like a shared notebook that lives in the cloud.  
When someone writes in it, their computer sends a small “edit packet” to Google’s servers.  
The server keeps a master copy of the notebook and also remembers each person’s last view.  
If you append a line, your edit packet says: *“add this text at the end.”* The server receives it, puts that new line into the master copy, and then pushes a “diff” (only the change) to every other user so they can see the update instantly.

So, under the hood:

1. **Edit packet** – your browser sends a concise description of what you added.  
2. **Server merge** – Google’s servers combine that packet with the current notebook, handling any conflicts automatically.  
3. **Broadcast diff** – only the new line (the diff) is sent back to everyone else.

It’s like writing a note in a shared whiteboard: each time someone adds something, the board updates for all viewers without them having to reload everything.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
