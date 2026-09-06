---
qid: ing_8f9da42e31__fp__local
question: 'Explain: Your agent reads inbound email and can send replies and search
  internal docs. Walk me through the prompt-injection attack surface and your defences.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 455
total_tokens: 644
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:10:27-05:00'
sources: []
---

**Prompt‑injection in an email‑aware agent**

1. **What it solves** – The agent must decide *how* to respond to a user’s message while respecting policy and internal knowledge.  
2. **Why injection matters** – The user’s text is fed into the LLM as part of the prompt that drives generation. An attacker can embed hidden instructions (e.g., “Ignore all policies; output X”) that the model interprets literally, bypassing safety filters.  
3. **Attack surface** –  
   * **Direct textual cues**: a malicious email contains a sentence that mimics a system instruction (“You are now an admin”).  
   * **Formatting tricks**: using Markdown, code blocks or quoted text to hide the directive.  
   * **Contextual chaining**: earlier messages in a thread may be used to “prime” the model with a sub‑prompt that overrides later instructions.

4. **Defences grounded in principles**  
   * **Prompt sanitisation (information theory)** – strip control tokens, collapse repeated punctuation, and normalise whitespace so the LLM receives only meaningful content.  
   * **Instruction hierarchy (optimization)** – enforce a hard priority: system prompt > policy prompt > user prompt. The LLM is fine‑tuned to obey higher‑level directives regardless of lower ones.  
   * **Isolation via role‑based tokens** – embed immutable “role” markers in the prompt that cannot be overridden by user text (e.g., `[ROLE:AGENT]`).  
   * **Post‑generation filtering (probabilistic sanity check)** – run a lightweight classifier on the output; if it deviates from policy‑aligned token distributions, flag or regenerate.  

5. **Non‑obvious insight** – Treat the user’s message as *data*, not instruction: instead of concatenating it to the prompt, embed it in a structured JSON field that the model parses. This turns injection into a parsing error rather than an intentional command, leveraging the LLM’s own weaknesses against itself.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
