---
qid: ing_a242f1a1e0__faang__local
question: Beyond text in a chat box, what channels can indirect prompt injection arrive
  through, and how do you sanitise them?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 677
total_tokens: 923
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:01:42-05:00'
sources: []
---

**Clarify**  
We’re asked to enumerate *indirect* ways a malicious user could inject prompts into an LLM‑powered chat beyond the obvious text box, and how to sanitize each channel.  
Assumptions: the system exposes multiple interfaces (API, file upload, speech, image, metadata, webhook, etc.), runs in a cloud environment, and must comply with data‑at‑rest/in‑flight security policies.

**Approach**  
1. List all potential entry points.  
2. For each, define what constitutes “prompt” content.  
3. Map a mitigation strategy that cleans or validates the payload before it reaches the model.

**Depth**  

| Channel | Prompt‑like data | Sanitisation technique |
|---------|------------------|------------------------|
| **API body (JSON)** | `{"message":"…", "metadata":{"role":"system","content":"…"}}` | Strict schema validation, reject unknown keys, enforce length limits. |
| **File uploads** (CSV, JSON, PDF) | Structured data that may contain free‑text fields. | Parse with a sandboxed library, strip non‑text, escape HTML/JSON chars, limit file size. |
| **Speech / voice input** | Transcribed text from ASR. | Run the transcript through the same sanitiser as API; optionally filter profanity or command patterns. |
| **Image/Video captions** | OCR output or alt‑text. | Apply OCR in a trusted environment, then treat extracted text like API input. |
| **Metadata / headers** (e.g., `User-Agent`, `Referer`) | Can carry JSON fragments or shell commands. | Whitelist header names; decode and validate any payload, reject base64/URL‑encoded injections. |
| **Webhooks / callbacks** | Payloads sent to the chat system from external services. | Verify HMAC signatures, schema‑validate, throttle rate limits. |
| **Embedded scripts / HTML** (rich‑text editors) | `<script>alert(1)</script>` can be parsed as prompt. | Strip tags with a DOM sanitizer; escape all user‑supplied content before rendering. |

All channels funnel through a single sanitisation pipeline that:  
* normalises whitespace, removes control chars, escapes JSON/HTML, and enforces token limits to avoid over‑prompting.

**Edge cases**  
- Binary files masquerading as text (e.g., steganography). Test with random binaries.  
- Multi‑step injections where a file contains a script that later injects into metadata. Use sandboxed parsing and separate contexts.  
- Extremely long payloads that could trigger token overflow; enforce strict caps.

**Optimize & communicate**  
- Centralise the sanitiser as a library to avoid duplication (O(1) per channel).  
- Log all rejected attempts with user ID for audit.  
- Communicate policy in the UI/API docs: “Only plain text up to 4 k tokens is accepted.”  

By systematically validating every input vector and reusing a single, well‑tested sanitisation layer, we minimise indirect prompt injection risk while keeping performance acceptable for FAANG‑scale traffic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
