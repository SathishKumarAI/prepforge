---
qid: ing_ac4deddfdc__star__local
question: 'Explain: Input Isolation (XML & Markers) — Prompt Injection Defense'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 349
total_tokens: 588
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:17:08-05:00'
sources: []
---

**Situation:**  
While leading a chatbot integration for a fintech client, we noticed that user‑supplied XML snippets were being concatenated directly into the model prompt. A security audit flagged potential prompt injection attacks where malicious XML could alter the AI’s instructions.

**Task:**  
I needed to redesign our input handling so that any injected text would be isolated from the prompt, ensuring the model only processed clean, intended commands while still allowing legitimate XML data for downstream processing.

**Action:**  
1. Introduced a two‑stage parser: first, we used an XML validator (lxml) to strip or escape all `<prompt>` markers and any embedded instructions.  
2. Implemented marker tokens (`[USER_INPUT]…[/USER_INPUT]`) that the model’s prompt template would treat as opaque data; these markers were wrapped in double backticks to prevent tokenization of special characters.  
3. Added a checksum check on the XML payload before it entered the prompt, rejecting any payload exceeding 5 KB or containing disallowed tags.  
4. Deployed unit tests that injected known malicious prompts and verified the model output remained unchanged.

**Result:**  
The new isolation layer reduced prompt injection incidents to zero in production over six months, while still passing all functional requirements. Response latency increased by only 12 ms on average. I learned that combining strict schema validation with token‑level marker encapsulation can effectively shield LLM prompts from malicious manipulation without sacrificing usability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
