---
qid: ing_8f9da42e31__think__local
question: 'Explain: Your agent reads inbound email and can send replies and search
  internal docs. Walk me through the prompt-injection attack surface and your defences.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 208
output_tokens: 679
total_tokens: 887
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T10:33:43-05:00'
sources: []
---

### 1️⃣ Clarify the scenario & assumptions  
- **Agent role**: Reads incoming emails, drafts replies, searches a knowledge base.  
- **Interface**: The agent receives raw email text (user + context) and returns a response string or search query.  
- **Threat model**: An attacker can control the inbound email content; they want to influence the agent’s output (e.g., inject commands, exfiltrate data).  
- **Defences we’ll discuss**: input sanitisation, prompt‑structure design, guardrails, and monitoring.

### 2️⃣ Mental model & framework  
Treat the email as a *prompt* that is concatenated with system instructions. Prompt injection occurs when user text inadvertently becomes part of the instruction set. Use the “Prompt‑Safety” framework:

1. **Isolation**: Keep system prompt separate from user content.  
2. **Sanitisation**: Remove or escape control tokens (e.g., `###`, `--`).  
3. **Constraint enforcement**: Explicitly state allowed outputs.  
4. **Observation & audit**: Log all agent inputs/outputs for anomaly detection.

### 3️⃣ Step‑by‑step reasoning  

| Step | What happens | How we mitigate |
|------|--------------|-----------------|
| 1. Receive email | Raw text (possibly malicious) | Strip newlines, escape special markers |
| 2. Pre‑process | Tokenise, identify user vs system cues | Flag any “command” patterns (`/search`, `EXECUTE`) and reject or neutralise them |
| 3. Construct prompt | System role + email body + instruction (“reply concisely”) | Use delimiters that the LLM treats as content only (e.g., triple backticks) |
| 4. Send to LLM | Agent generates response | Apply a *post‑generation* policy: disallow commands, enforce length limits |
| 5. Output | Email reply or search query | Verify against whitelist before sending/performing the action |

### 4️⃣ Common traps & wrong turns  

- **Assuming raw user text is safe** – attackers embed hidden tokens that manipulate tokenisation.  
- **Over‑reliance on LLM self‑regulation** – it may still produce disallowed content if constraints are weak.  
- **Neglecting context leakage** – internal docs accessed via search can be steered to reveal sensitive data.  
- **Failing to log for audit** – without logs you cannot detect or investigate injection attempts.

### 5️⃣ Sanity‑check & communicate  

1. **Verify boundaries**: Ensure the system prompt never contains user text; test with edge cases (e.g., email starting with `##`).  
2. **Run a red‑team test**: Craft an email that tries to inject a `/search` command and confirm it’s neutralised.  
3. **Explain to stakeholders**: “We keep the LLM’s instruction set separate, strip any control sequences from incoming emails, and enforce a whitelist of allowed outputs before executing actions.”  

By iterating through this pipeline, you can confidently expose the agent to inbound email while keeping prompt‑injection risk at bay.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
