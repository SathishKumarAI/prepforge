---
qid: ing_6487e38ca9__eli5__local
question: The customer's CISO says no data can leave their network. How does that
  constrain your architecture, and what are the options?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 234
total_tokens: 406
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:15:22-05:00'
sources: []
---

Imagine the company’s network is a castle with a single gate. The CISO says nothing may leave through that gate – all information must stay inside.  
**What this does to your design:**  
* You can’t send raw data to an external AI service; you have to keep the model and its training inside the castle walls.  
* All processing, storage, and learning must happen on‑premise or in a trusted private cloud that is physically isolated from the internet.

**Options to meet the rule**

1. **On‑premise deployment** – install the AI software on local servers; data never leaves the network.  
2. **Private‑cloud enclave** – host the model in a dedicated virtual machine inside a secure, air‑gapped cloud segment that is still “inside” the castle.  
3. **Federated learning** – run small models locally, share only aggregated updates with a central server that never sees raw data.

Each choice keeps the gate closed while letting you use AI inside the castle’s walls.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
