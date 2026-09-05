---
qid: ing_1933ff09b5__eli5__local
question: Why did Hugging Face create safetensors when pickle-based checkpoints already
  worked everywhere?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 220
total_tokens: 384
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:16:04-05:00'
sources: []
---

Think of a model checkpoint as a giant LEGO set that you can save and load later.  
With **pickle**, the whole set is wrapped in a plastic bag that also contains the instructions for how to build it. That bag works everywhere, but because it’s a “black‑box” format, anyone who opens it can read or tamper with the instructions—just like opening a sealed box of LEGO could let someone swap pieces in secretly.

**Safetensors** is like shipping your LEGO set in a clear, rigid crate that only holds the bricks themselves and nothing else. The crate’s shape (the tensor data) is fixed, so anyone can see it’s safe: no hidden code, no chance of malicious instructions slipping through.  

Hugging Face made safetensors to give developers a fast, lightweight, and secure way to share models—especially useful when you want to guarantee that the file can’t silently execute harmful code or contain corrupted data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
