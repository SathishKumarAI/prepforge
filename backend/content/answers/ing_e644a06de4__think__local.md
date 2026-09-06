---
qid: ing_e644a06de4__think__local
question: 'Explain: Q122: Agent Data Injection hides instructions in fields your agent
  treats as trusted data, and in-the-wild campaigns already trick payment-capable
  agents into crypto payments. Design a browsing agent with payment authority that
  survives this.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 224
output_tokens: 615
total_tokens: 839
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T16:11:30-05:00'
sources: []
---

**1️⃣ Clarify the problem & assumptions**

- *Problem*: An attacker injects malicious instructions into data fields that an AI “agent” blindly trusts (e.g., a payment‑capable browsing agent).  
- *Goal*: Design a robust browsing agent that can execute legitimate payments but is immune to hidden instruction injection.  
- *Assumptions*:  
  - The agent has access to user input, web content, and a payment API.  
  - Attackers may tamper with any field the agent reads (e.g., URL query strings, form values).  
  - We can enforce isolation between trusted logic and untrusted data.

**2️⃣ Mental model / framework**

Use *sandboxing + whitelisting* plus *separation of duties*:  
- **Data Layer**: Raw input from the user or web.  
- **Validation Layer**: Strict schema checks, type/format enforcement, and intent inference.  
- **Execution Layer**: Trusted payment code that only accepts sanitized, explicit commands.

Adopt *least privilege* for data handling: never treat raw data as code; always interpret it through a controlled interpreter.

**3️⃣ Step‑by‑step reasoning**

1. **Input parsing** – collect all user and web inputs into immutable structures (e.g., JSON).  
2. **Schema validation** – enforce strict schemas (amount, currency, destination) with no room for hidden fields.  
3. **Intent extraction** – use a lightweight NLP model *only* to confirm the high‑level intent (“pay 0.5 BTC to X”), not to execute actions.  
4. **Command generation** – translate intent into a canonical payment command object; reject anything that deviates from the schema or contains unknown keys.  
5. **Sandboxed execution** – run the payment API call in an isolated process that has no access to the raw input data, only to the sanitized command.  
6. **Audit & logging** – record every step; any discrepancy triggers a rollback and alert.

**4️⃣ Common traps**

- *Treating JSON keys as code*: allow “execute: true” flags.  
- *Implicit trust in NLP outputs*: let the model decide whether to pay.  
- *Over‑permissive schemas*: accept arbitrary fields like `onSuccess` scripts.  
- *Shared memory between layers*: leaks untrusted data into trusted logic.

**5️⃣ Sanity‑check & communication**

- **Test**: feed malicious payloads (e.g., nested commands, hidden fields) and verify the agent rejects them.  
- **Explain**: “We separate raw input from payment execution; only a minimal, validated command reaches the payment API.”  
- **Iterate**: refine schemas and validation rules based on new attack vectors.

By strictly validating, isolating, and limiting what data can influence payment commands, the browsing agent remains resilient against hidden instruction injection.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
