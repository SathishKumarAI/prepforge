---
qid: ing_eda22a0976__eli5__local
question: Why does HTTPS switch to symmetric encryption during data transmission?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 224
total_tokens: 383
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:51:35-05:00'
sources: []
---

Think of HTTPS like sending a secret letter in a locked box.  
First, you need a way to hand the lock (the encryption key) over safely. You use a **public‑key system**—think of it as a mailbox that anyone can drop a note into but only you can open with your private key. That step is slow because each bit must be processed individually, but it guarantees no one else can read or tamper with the key.

Once the lock (a *symmetric* key) is in place, every letter inside the box can be sealed and opened quickly with the same key on both ends—just like a reusable padlock. Symmetric encryption is much faster for large amounts of data because it uses simple operations that hardware can execute rapidly.

So HTTPS switches to symmetric encryption after the initial public‑key handshake: the heavy lifting is done once, then the rest of the conversation runs smoothly and securely with the lightweight key.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
