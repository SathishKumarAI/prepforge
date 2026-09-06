---
qid: ing_a242f1a1e0__think__local
question: Beyond text in a chat box, what channels can indirect prompt injection arrive
  through, and how do you sanitise them?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 202
output_tokens: 670
total_tokens: 872
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T11:48:43-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
- *What is “indirect prompt injection”?* – Any data that ends up inside a model’s prompt without being explicitly typed by the user, e.g., via file uploads, APIs, or hidden UI elements.  
- Assume we’re protecting a typical LLM‑powered app (chat, form, document editor) and want to enumerate all potential vectors.

**2️⃣ Mental model: “Input → Sanitisation → Model”**  
Treat every channel as an *input source*. For each source, ask:  
a. How is the data captured?  
b. What transformations happen before it reaches the prompt?  
c. Where can malicious payloads slip through?

**3️⃣ Step‑by‑step reasoning**

| Channel | Typical injection path | Sanitisation strategy |
|---------|------------------------|-----------------------|
| **File uploads (PDF, DOCX, CSV)** | Text extracted and concatenated into prompt | 1) Strip markup & metadata. 2) Limit file size/format. 3) Run a whitelist regex for allowed tokens. |
| **Hidden form fields / URL params** | Server‑side code injects values into prompt | Validate against schema; escape or encode special chars before insertion. |
| **Clipboard copy‑paste** | User pastes content that’s auto‑promoted to the model | Detect and cleanse large blocks; run a profanity/command filter. |
| **API integration (e.g., webhook payloads)** | External service sends JSON → prompt | Schema validation, type checks, escape string values. |
| **Image OCR / speech‑to‑text** | Transcribed text appended to prompt | Verify language & length; optionally re‑tokenise to catch hidden commands. |
| **Session cookies or JWT claims** | Claims injected into prompt context | Sign & verify tokens; never inject raw token payloads. |
| **Browser extensions or scripts** | Extension modifies DOM → prompt | Content security policy, CSP headers, and input sanitisation on the server side. |

**4️⃣ Common traps to avoid**

- *Over‑escaping*: Escaping every char can break legitimate prompts (e.g., quotes in user names).  
- *Blind trust in “clean” sources*: Even PDFs can embed JavaScript or malicious XML.  
- *Relying solely on client‑side checks*: Always enforce sanitisation server‑side; attackers can bypass the UI.

**5️⃣ Sanity‑check & communicate**

1. **Walk through a sample attack** (e.g., upload a DOCX with hidden `{{system}}` commands). Verify that each step blocks or neutralises it.  
2. **Document the policy**: List all accepted input types, max sizes, and the exact sanitisation steps applied.  
3. **Explain to stakeholders** in plain terms: “Every piece of data we let into the model is first scrubbed—markup removed, unexpected tokens escaped, and length capped—to keep malicious prompts from slipping through.”

By treating each channel as a distinct input source, applying consistent validation/escaping rules, and verifying against realistic attack vectors, you can mitigate indirect prompt injection across all possible touchpoints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
