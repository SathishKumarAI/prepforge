---
qid: ing_ba149b71ff__think__local
question: 'Explain: Title: Defeating Prompt Injections by Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 494
total_tokens: 685
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T13:13:16-05:00'
sources: []
---

**1️⃣ Clarify the question & set assumptions**  
   - *What is “prompt injection”?* – a malicious input that tricks an LLM into leaking or misbehaving.  
   - *Goal of the paper*: show how architectural choices can make prompt‑injection attacks hard to mount, not just patch them at runtime.  
   - Assume reader knows basic LLM inference flow and typical defense (e.g., sanitisation).

**2️⃣ Mental model / framework**  
   1. **Input → Tokeniser → Model → Output** – the only place where external text can influence behaviour.  
   2. **Attack surface = token space + prompt structure**.  
   3. *Defence by design* ≈ constraining that surface before it reaches the model.

**3️⃣ Step‑by‑step reasoning toward the answer**  
   - **Tokenisation control**: use a tokenizer that rejects or normalises suspicious byte patterns (e.g., disallow control characters).  
   - **Prompt template enforcement**: embed user data into pre‑defined slots; never concatenate raw text.  
   - **Model architecture tweaks**: add an *attention gate* that checks whether a token comes from the “system” vs “user” domain, and suppresses user tokens if they trigger disallowed patterns.  
   - **Self‑monitoring**: run a lightweight classifier on the model’s intermediate states to detect anomalous generation paths before final output is emitted.  
   - **Evaluation**: demonstrate that with these constraints, even crafted adversarial prompts fail to alter policy or reveal secrets.

**4️⃣ Common traps to avoid**  
   - *Over‑filtering*: removing legitimate content and hurting usability.  
   - *Assuming tokeniser fixes everything* – attackers can still embed malicious semantics in benign tokens.  
   - *Neglecting side‑channels*: e.g., timing or length leakage.

**5️⃣ Sanity‑check & communicate**  
   - Verify that each defence layer actually blocks a known injection vector (e.g., “/exfiltrate” payload).  
   - Explain trade‑offs: tighter constraints → lower flexibility, but higher security.  
   - Present the flow diagram and list concrete examples of how design choices prevent injection rather than just patching it at inference time.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
