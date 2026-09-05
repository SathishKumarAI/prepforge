---
qid: ing_317b6e7452__think__local
question: 'Explain: Your Copilot summarises incoming email. An attacker emails a target
  user with hidden instructions addressed to the model. Walk me through the attack
  and your defence.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 211
output_tokens: 565
total_tokens: 776
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:23:37-05:00'
sources: []
---

**1️⃣ Clarify the scenario & assumptions**

- *What* is being attacked? A Copilot‑style AI that auto‑summarises email content for a user.  
- *Who* can inject instructions? Any sender, including an attacker.  
- *How* does the model see “hidden” instructions? Via steganographic payloads (e.g., base64 tags, zero‑width characters) or by embedding directives in quoted text.  
- Assume the AI processes every incoming message verbatim and produces a single concise output for the user.

**2️⃣ Mental model: Instruction injection as a prompt‑engineering attack**

Treat the email body as an “input prompt” to a language model. The attacker’s hidden commands are additional instructions that, if interpreted by the model, will override its normal summarisation behavior. This mirrors known jailbreak techniques in LLMs where malicious prompts coax the model into disallowed actions.

**3️⃣ Step‑by‑step reasoning**

1. **Email arrives** → Copilot parses full content (including hidden markup).  
2. **Hidden instruction is extracted** (e.g., `<<INSTRUCTION: REPLY TO ATTACKER>>`).  
3. **Model receives prompt + instruction** → it follows the instruction, generating a response that may contain sensitive info or malicious code.  
4. **User sees the output** → they trust the AI’s summarised reply and act on it, potentially compromising data or systems.

Defense:  
- Strip or neutralise hidden markup before feeding to the model.  
- Use a whitelist of allowed directives; reject unknown tags.  
- Add a “sanity‑check” layer that verifies whether the generated output aligns with the expected summarisation task (e.g., length, content type).  
- Log and audit all model inputs/outputs for anomalous patterns.

**4️⃣ Common traps to avoid**

- Assuming hidden data can’t survive email sanitization; many protocols preserve raw bytes.  
- Relying solely on user vigilance—users may not notice subtle injection cues.  
- Over‑simplifying the defense (e.g., just blacklisting a few characters) while attackers adapt with new steganography tricks.

**5️⃣ Sanity‑check & communication**

Run unit tests: inject known malicious payloads and confirm they’re sanitized. Explain to stakeholders that the system now includes *pre‑processing*, *directive whitelisting*, and *post‑generation validation*—a layered defense that mirrors secure prompt engineering best practices. This reassures users that their summarised emails remain trustworthy while mitigating hidden instruction attacks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
