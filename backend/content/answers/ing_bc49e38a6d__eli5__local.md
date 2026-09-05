---
qid: ing_bc49e38a6d__eli5__local
question: Your product adds thumbs up/down on assistant messages. What do you build,
  and where does the data go?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 198
total_tokens: 367
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:35:45-05:00'
sources: []
---

Think of your assistant like a helpful librarian who can show you books. You want the librarian to know whether each book was useful or not.  
**What you build:** A tiny “thumbs” button next to every answer—just two icons, one up and one down. When you click, the app sends a quick note (“this reply got an up‑vote”) to your server.  
**Where the data goes:** The note lands in a small table in your database, tied to that exact answer and the user who clicked it. From there, simple reports can tell you which answers get most thumbs‑up, helping you fine‑tune the assistant. No secret storage; just clear records of each vote, safely kept on your own servers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
