---
qid: ing_de11b0ab23__eli5__local
question: 'Explain: Q58: Design a system where one user''s prompt cannot leak to another
  user'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 228
total_tokens: 392
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:26:10-05:00'
sources: []
---

Imagine an office with many cubicles, each having its own private door and lock. When you walk into your cubicle (user A), you open the door, leave your notes on the desk, and lock it again before leaving. No one else can see what’s written because they’re stuck behind their own doors.

Now picture a shared computer that runs a program called “Prompt Keeper.” Each time a user types a question (“prompt”), Prompt Keeper writes it into a tiny, sealed envelope (a memory buffer) that only the same user’s session can open. When the AI processes the prompt, it reads the envelope and then immediately shreds it before another user’s turn comes.

Key terms:  
- **Session** – the temporary space a user has while they’re using the system.  
- **Buffer** – a small area of memory where data is stored temporarily.  

Because every session gets its own sealed envelope, the words typed by one person can never slip into another person’s envelope, keeping all prompts private and preventing accidental or malicious leakage.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
