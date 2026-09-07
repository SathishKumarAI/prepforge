---
qid: ing_102e24308f__faang__local
question: Explain the system, user, and assistant roles. What belongs in each?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 561
total_tokens: 798
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:20:56-05:00'
sources: []
---

**1️⃣ Clarify**  
We’re asked to define the *system*, *user*, and *assistant* roles in an AI‑driven dialogue stack, and enumerate what responsibilities each owns. Assume a typical LLM‑powered chat service (e.g., GPT‑style) where the system orchestrates, the user is the human client, and the assistant is the model.

**2️⃣ Approach**  
Break down each component into *goals* and *boundaries*.  
- **System:** orchestration, security, context‑management.  
- **User:** intent expression, feedback, safety signals.  
- **Assistant:** content generation, reasoning, policy compliance.  
Then map concrete artifacts (e.g., prompts, tokens) to these roles.

**3️⃣ Depth**  

| Role | Core responsibilities | Typical artifacts |
|------|-----------------------|-------------------|
| **System** | • Load‑balancing & latency guarantees<br>• Token budgeting & rate‑limits<br>• Context caching & conversation state persistence<br>• Safety filtering (content, privacy)<br>• Auditing & logging | System prompt prefix, system messages, context windows |
| **User** | • Sends natural language query or instruction<br>• Supplies optional metadata (e.g., topic tags, tone hints)<br>• Reviews and edits assistant output, providing feedback or corrections | User message, optional “system” directives in the prompt |
| **Assistant** | • Parses user intent within context<br>• Generates coherent, relevant text<br>• Applies reasoning & knowledge retrieval<br>• Enforces policy constraints (no disallowed content)<br>• Provides explanations when requested | Generated response, tool‑call payloads, confidence scores |

**4️⃣ Edge Cases**  
- *Misaligned system prompts* → unintended behavior.  
- *User providing ambiguous or conflicting instructions* → assistant may default to safe completion.  
- *Token budget overflow* → truncation or early termination.  
- *Policy violation slips* → fallback to a refusal or safety message.

**5️⃣ Optimize & Communicate**  
Use hierarchical prompts: system‑level “meta” instructions + user‑level intent; keep context windows under the model’s token limit. Log each role’s actions for auditability. When explaining, start with the high‑level flow, then drill into responsibilities, finish with how edge cases are mitigated and performance trade‑offs (e.g., larger context vs latency). This structure satisfies FAANG interviewers’ SIGNAL criteria: clear problem framing, systematic solution, deep technical detail, consideration of failure modes, and a concise narrative.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
