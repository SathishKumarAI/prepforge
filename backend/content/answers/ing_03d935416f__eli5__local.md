---
qid: ing_03d935416f__eli5__local
question: 'Explain: Design an on-prem deployment of an open-weight model for a European
  bank that cannot send data to any external API.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 240
total_tokens: 412
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:41:25-05:00'
sources: []
---

Imagine the bank’s data is a secret recipe it can’t share with anyone outside its kitchen. The open‑weight model is like a very skilled sous‑chef that has learned from many kitchens worldwide, but it now lives in the bank’s own pantry (on‑prem).  

1. **Get the model** – download the trained “sous‑chef” code and weights to a secure server inside the bank.  
2. **Create a private kitchen** – install all necessary software (Python, PyTorch/TensorFlow) on that server so the sous‑chef can work without Internet.  
3. **Feed it local ingredients** – give the model only the bank’s own data files stored locally; no calls leave the premises.  
4. **Run in isolation** – run inference inside a protected virtual machine or container, with strict firewall rules so nothing escapes.  

The result is a fully functional AI assistant that never sends any data outside the bank, just like a trusted sous‑chef who only uses what’s already in the kitchen.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
