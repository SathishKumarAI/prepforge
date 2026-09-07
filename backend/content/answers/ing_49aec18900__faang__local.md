---
qid: ing_49aec18900__faang__local
question: 'Explain: Q96: Indirect prompt injection (IPI) attacks rose 32% from Nov
  2025 to Feb 2026 per Google. Your RAG agent reads web pages and documents from untrusted
  sources. Design a layered defense.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 271
output_tokens: 607
total_tokens: 878
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:36:12-05:00'
sources: []
---

**1️⃣ Clarify**  
We’re asked to protect a Retrieval‑Augmented Generation (RAG) agent that pulls content from the open web—an inherently untrusted domain. The goal is to mitigate *Indirect Prompt Injection* (IPI), where adversarial data is inserted into retrieved documents and then, via the prompt chain, coerces the LLM into illicit behavior.  
Assumptions:  
- The RAG pipeline consists of 1) a retriever that fetches passages, 2) a reader that extracts relevant snippets, and 3) an LLM that generates responses based on those snippets plus user input.  
- We can add preprocessing steps but cannot modify the core LLM.

**2️⃣ Approach**  
Design a *layered defense* with three orthogonal controls:  
1. **Source vetting & sanitization** – filter URLs and content for known malicious patterns.  
2. **Content‑level filtering** – run each snippet through an IPI detector (e.g., rule‑based token checks + lightweight ML).  
3. **Prompt construction guardrails** – enforce a strict prompt template that isolates user intent from retrieved text.

**3️⃣ Depth**  

| Layer | Mechanism | Complexity |
|-------|-----------|------------|
| 1. Source vetting | Maintain a blacklist/whitelist of domains; use TLS cert validation and entropy checks on URLs | O(1) per URL |
| 2. Content filter | Use a lightweight model (e.g., BERT‑tiny) fine‑tuned to flag “prompt‑injection” cues (e.g., `system:`, `<s>` markers, code blocks). Reject or redact flagged tokens. | O(n) per passage |
| 3. Prompt guardrails | Template: `"User: {query}\nContext: {cleaned_passages}\nAssistant:"` – no direct insertion of raw passages into system messages; any control characters are escaped. | O(1) |

**4️⃣ Edge Cases**  
- **False positives**: legitimate code snippets may trigger the filter—handle via a “code‑mode” flag that relaxes checks.  
- **Evasion**: attackers may obfuscate markers (e.g., `&#60;system:`). Use regex + HTML entity decoding.  
- **Latency**: add caching for repeated queries to offset ML overhead.

**5️⃣ Optimize & Communicate**  
Iteratively profile the filter to keep latency < 50 ms per passage, and expose a dashboard showing IPI detection rates. Document trade‑offs: tighter filters reduce risk but increase false negatives; we’ll tune thresholds based on observed attack surface.  

*Result*: A robust, multi‑layered defense that reduces IPI impact by blocking malicious sources, sanitizing content, and strictly controlling prompt composition—aligned with industry best practices for secure RAG deployments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
