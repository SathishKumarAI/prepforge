---
qid: ing_9fd597b405__think__local
question: Where does prompt injection touch the frontend, and what can the client
  actually defend against?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 550
total_tokens: 745
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T11:39:17-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**

- *Prompt injection* refers to maliciously crafted user input that manipulates an LLM’s internal prompt.  
- The “frontend” is any client‑side code (JS, UI) that collects or displays data before it reaches the model.  
- Assume a typical web stack: browser → API gateway → LLM backend.  
- Assume the attacker controls only the client; no direct server access.

**2️⃣ Mental model to apply**

1. **Data flow diagram** – map how user input travels from the browser to the LLM and back.  
2. **Attack surface taxonomy** – categorize points where injected content could be reflected or concatenated into prompts.  
3. **Defensive layers** – identify what the client can influence: sanitization, escaping, CSP, UI rendering.

**3️⃣ Step‑by‑step reasoning**

- *Input collection*: user types → JavaScript reads value.  
  - The client can apply *input validation* (e.g., allow only alphanumerics).  
- *Transmission*: data is sent via XHR/Fetch to the API.  
  - Client can enforce *Content‑Type* headers, but cannot alter server‑side prompt construction.  
- *Response rendering*: LLM outputs are displayed.  
  - The client can *escape* HTML or use `textContent` to prevent injection of malicious scripts (defense in depth).  
- *Prompt assembly*: occurs on the server; the client has no control here, so cannot prevent logical manipulation of prompts.

Thus, front‑end defenses are limited to sanitizing what the user sends and safely rendering what the LLM returns. They can’t stop an attacker from crafting a prompt that tricks the model into misbehaving once it reaches the backend.

**4️⃣ Common traps**

- *Thinking the client can “sanitize” server‑side prompt logic* – impossible without server cooperation.  
- *Assuming CSP alone protects against prompt injection* – CSP blocks script execution, not prompt manipulation.  
- *Overlooking that the attacker may inject code into the response* – must escape output.

**5️⃣ Sanity‑check & verbalize**

1. Re‑draw the data flow: client → API → LLM → API → client.  
2. Ask: at which arrows does the client have control?  
3. Summarize: “The browser can validate/escape input and safely render output, but cannot alter how the backend builds the prompt.”  

Repeat this framework for any similar question about attack surfaces or client‑side mitigations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
