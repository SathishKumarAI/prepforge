---
qid: ing_5e0de77331__faang__local
question: How does prompt injection show up in a mobile app, and what does the client
  own?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 497
total_tokens: 737
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:22:39-05:00'
sources: []
---

**Prompt Injection in Mobile Apps – What It Looks Like & Client Ownership**

| Step | Description |
|------|-------------|
| **Clarify** | *Problem:* A mobile client talks to a cloud‑based LLM via an API. Prompt injection occurs when user input is concatenated into the system prompt, allowing malicious text to alter model behavior (e.g., “You are a lawyer…”). <br>*Assumptions:* 1) The app uses a stateless request/response flow. 2) The developer can’t modify the LLM’s internal policy. |
| **Approach** | 1️⃣ Sanitize & escape user strings before embedding.<br>2️⃣ Use separate “user” and “system” prompt fields (if supported).<br>3️⃣ Apply a whitelist of allowed commands or intent tokens.<br>4️⃣ Log the full request for audit. |
| **Depth** | *Sanitization:* Escape newlines, quotation marks, and control characters; enforce length limits.<br>*Prompt structure:* `system: “You are an assistant…”; user: "<sanitized_input>"`. <br>*Audit trail:* Store raw & sanitized payloads in secure storage. <br>Complexity: O(n) on input size; negligible overhead for mobile. |
| **Edge Cases** | • Multiline or Unicode‑rich inputs that break escaping.<br>• Hidden characters (e.g., zero‑width spaces).<br>• Apps that concatenate without a system prompt field. Test with fuzzed payloads and observe model output. |
| **Optimize & Communicate** | *Improvements:* Use a pre‑built prompt‑builder library, enforce content policies on the server, or move sensitive logic to a dedicated “trusted” microservice.<br>*Narration:* Explain that the client owns the request pipeline; they must ensure no user data leaks into privileged system prompts. The LLM provider retains responsibility for policy enforcement but cannot fix injection if the client’s prompt construction is insecure. |

**Bottom line:** Prompt injection surfaces when a mobile app naïvely injects raw user text into the prompt sent to an LLM. By sanitizing, separating intent fields, and maintaining audit logs, the client can own safe prompt construction while delegating policy enforcement to the provider.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
