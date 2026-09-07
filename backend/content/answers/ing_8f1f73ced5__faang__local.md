---
qid: ing_8f1f73ced5__faang__local
question: 'Q: How do you protect an LLM application from prompt injection?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 559
total_tokens: 795
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:17:22-05:00'
sources: []
---

**Clarify**

We want to build a large‑language‑model (LLM) powered app (e.g., chatbot, code generator).  
Prompt injection means an attacker crafts user input that manipulates the internal prompt sent to the LLM so it produces disallowed or harmful output.  
Assumptions:  
- We control the prompt template but not the model internals.  
- The model is accessed via an API (e.g., OpenAI).  
- Sensitive operations (data leakage, policy violation) must be prevented.

**Approach**

1. **Prompt sanitization & escaping** – remove or escape tokens that could alter control flow.  
2. **Strict prompt templating** – keep user text as a single variable and never concatenate raw user input into instruction sections.  
3. **Post‑generation filtering** – run outputs through safety classifiers / regex rules before returning to the user.  
4. **Contextual guarding** – use system messages that assert policies (e.g., “Never reveal PII”).  
5. **Monitoring & alerts** – log raw inputs/outputs and flag anomalies.

**Depth**

- *Sanitization*: strip newlines, escape backslashes, collapse repeated punctuation, filter disallowed words (`<script>`, `DROP TABLE`).  
- *Escaping*: prefix user text with a marker (e.g., `USER_INPUT:`) so the model treats it as data.  
- *Prompt structure*:  
  ```
  System: "You are a helpful assistant that follows policies."
  User: "<sanitized_input>"
  Assistant:
  ```  
  This keeps policy statements separate from user content.  
- *Post‑filtering*: run outputs through OpenAI’s `text-moderation` endpoint or custom regex to detect policy breaches.  
- *Rate limiting & anomaly detection*: if a single user triggers many flagged prompts, suspend them.

**Edge Cases**

- Users embed escape sequences that survive sanitization (e.g., `\n\n`).  
- Legitimate multi‑line inputs get truncated by newline stripping.  
- Overly aggressive filters may censor valid content.  
- Attackers use synonyms or obfuscation to bypass keyword lists.

**Optimize & Communicate**

- **Performance**: batch moderation calls; cache benign outputs.  
- **User experience**: provide clear error messages when a request is rejected, suggesting re‑phrasing.  
- **Explainability**: maintain a log of why an input was flagged (policy rule hit).  

In summary, combine *input hygiene*, *prompt isolation*, and *output vetting* to guard against prompt injection while keeping latency low and transparency high.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
