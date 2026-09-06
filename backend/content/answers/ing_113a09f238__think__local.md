---
qid: ing_113a09f238__think__local
question: You're exposing one of your agents to another company's agent. What crosses
  the boundary, and what do you refuse to expose?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 202
output_tokens: 398
total_tokens: 600
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T03:50:48-05:00'
sources: []
---

**1️⃣ Clarify the scenario & assumptions**  
- Identify *what* “exposing an agent” means (sharing code, data, or runtime).  
- Assume both agents are proprietary, and the other company has no prior access to your internal models or datasets.  

**2️⃣ Adopt a security‑centric framework**  
- Treat the exchange as a **data‑flow audit**: list inputs → transformations → outputs.  
- Apply the *principle of least privilege*: only share what is absolutely necessary for interoperation.  

**3️⃣ Step‑by‑step reasoning**  
1. Enumerate all internal assets (model weights, training corpora, hyperparameters).  
2. Map each asset to its sensitivity level (public → low, proprietary → high).  
3. For every exposed interface, list the data that will traverse it.  
4. Verify that no high‑sensitivity asset is in the path unless explicitly required and protected.  
5. If a required exposure exists, wrap it with encryption or tokenization.  

**4️⃣ Common traps to avoid**  
- *Over‑exposure*: sharing debug logs or version metadata can leak training data patterns.  
- *Assuming “public” is safe*: public APIs may still reveal model internals through side‑channels (latency, error messages).  
- *Neglecting backward compatibility*: a future update could inadvertently expose hidden data.  

**5️⃣ Sanity‑check & communicate**  
- Run a mock audit: simulate the exchange and trace every byte.  
- Summarize in plain language: “We only share the final inference result, encrypted; no model weights or training data are transmitted.”  
- Document the policy and review it with legal/compliance before any handoff.

By following this structured approach, you can confidently determine what crosses the boundary and what must remain hidden.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
