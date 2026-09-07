---
qid: ing_0cade195d9__faang__local
question: 'Q79: How do you approach prompt injection defense in a multi-tenant agentic
  system where the agent reads external web pages or documents?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 572
total_tokens: 822
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:13:26-05:00'
sources: []
---

**Prompt Injection Defense for Multi‑Tenant Agentic Systems**

| Step | What I’d do |
|------|-------------|
| **1️⃣ Clarify** | *Goal*: Prevent a malicious tenant from injecting code or commands into an LLM prompt that the agent will execute on external content. <br>Assumptions to confirm: <br>• Agents read arbitrary URLs/documents.<br>• The system runs in isolation per tenant (sandboxing).<br>• No shared memory or persistent state across tenants. |
| **2️⃣ Approach** | 1. **Input Sanitization** – strip/escape control characters, HTML tags, and script blocks from fetched content before prompt assembly.<br>2. **Prompt Template Anchoring** – use a fixed “system” message that defines the agent’s role; only append tenant‑supplied data in a controlled “user” block with delimiters.\n3. **Static Analysis / LLM Guardrails** – run the final prompt through an internal policy model that flags suspicious patterns (e.g., `!exec`, shell syntax) before sending to the external LLM.<br>4. **Execution Sandbox** – if the agent can run code, enforce a lightweight container or function‑level sandbox per tenant. |
| **3️⃣ Depth** | *Sanitizer*: regex/DOM parser → removes `<script>` and event handlers; escapes `\n`, `{{ }}` to avoid template injection.<br>*Guardrail Model*: fine‑tuned on known injection examples, outputs a binary “safe/unsafe” label. Complexity: O(L) for prompt length; negligible latency (<5 ms).<br>Sandboxing: Docker‑less runtime (e.g., gVisor) with CPU/memory quotas—ensures isolation even if the LLM misbehaves. |
| **4️⃣ Edge Cases** | • Unicode homoglyphs that mimic `!` or `$`. <br>• External content containing legitimate code snippets (e.g., GitHub README).<br>• Prompt length exceeding model token limit after sanitization.<br>Testing: fuzz‑inject varied payloads, simulate tenant requests with malicious URLs, verify no policy bypass. |
| **5️⃣ Optimize & Communicate** | • Cache sanitized outputs for repeated URLs to reduce latency.<br>• Use a Bloom filter to pre‑reject obvious injection patterns before full parsing. <br>Explain trade‑offs: stricter sanitization may degrade user experience; sandboxing adds overhead but guarantees safety. Highlight that combining lexical checks, policy modeling, and runtime isolation gives the strongest defense while keeping performance acceptable for a large tenant base. |

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
