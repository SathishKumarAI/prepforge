---
qid: ing_ac4deddfdc__faang__local
question: 'Explain: Input Isolation (XML & Markers) — Prompt Injection Defense'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 457
total_tokens: 693
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:24:42-05:00'
sources: []
---

**Input Isolation (XML & Markers) – Prompt‑Injection Defense**

| Step | What I’d do |
|------|-------------|
| **Clarify** | *Restate:* “We need to shield an LLM from malicious prompts that manipulate its output by injecting control tokens or XML tags.” <br>Assumptions: 1) The model accepts raw text; 2) We can preprocess or post‑process; 3) Attacker may embed hidden instructions in markup. |
| **Approach** | 1️⃣ Detect and strip any XML/HTML-like markers before tokenization. <br>2️⃣ Wrap user input with unique delimiters (e.g., `<<USER>> … </USER>>`) that the prompt template treats as a single, opaque block. <br>3️⃣ Instruct the LLM to ignore anything outside its own control tokens and never interpret markup inside the markers. |
| **Depth** | *XML stripping:* use a safe parser (e.g., `lxml` with `recover=True`) or regex that removes `<[^>]+>` patterns, then re‑encode. <br>*Marker strategy:* encode user content as base64 or embed in a JSON field; the model sees it only as data, not commands. Complexity is O(n) for input length, negligible overhead. |
| **Edge Cases** | • Attackers use self‑closing tags or nested entities → ensure parser normalizes them.<br>• Legitimate user content containing `</USER>` tokens → escape or choose a highly unlikely delimiter sequence (e.g., `[[[END]]])`. <br>• Large inputs → chunk safely while preserving markers. |
| **Optimize & Communicate** | • Cache parsed XML for repeated prompts.<br>• Log any stripped markup to audit potential attacks.<br>Explain to interviewers that this two‑layer defense (sanitization + opaque delimiters) reduces injection risk without sacrificing user experience, and can be extended to other markup languages or token styles. |

*Word count: ~190 words.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
