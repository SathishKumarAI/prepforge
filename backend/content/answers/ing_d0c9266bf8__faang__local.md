---
qid: ing_d0c9266bf8__faang__local
question: How do you structure a prompt to be resistant to prompt injection from retrieved
  or user-supplied content?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 499
total_tokens: 742
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:46:07-05:00'
sources: []
---

**Clarify**  
We’re asked how to design prompts that stay robust when they incorporate data fetched at runtime (retrieved documents) or supplied by users—i.e., guard against prompt‑injection attacks where malicious input manipulates the LLM’s behavior. Key assumptions: the model is stateless, we can preprocess inputs, and we control the prompt template but not the underlying LLM API.

**Approach**  
1. **Sanitize & encode** user‑supplied content (escape special tokens, strip disallowed characters).  
2. **Segment** the prompt into fixed system instructions + dynamic data blocks.  
3. **Wrap** each data block in delimiters that the model is trained to treat as literal text (e.g., triple backticks or a unique token pair).  
4. **Use role‑based prefixes** (“User says: …”, “Document excerpt: …”) so the model’s internal policy can distinguish context.  
5. **Apply a final safety filter** that checks the generated output for prohibited content before returning it.

**Depth**  
- *Sanitization*: remove or escape `{{`, `}}`, backticks, or any syntax that could close delimiters.  
- *Encoding*: URL‑encode or base64‑encode if arbitrary binary data is involved.  
- *Prompt template*:  
  ```
  SYSTEM: You are a safe assistant.
  USER: <sanitized_user_text>
  DOCUMENT: <<extracted_content>>
  ACTION: Respond to the user without altering your instructions.
  ```  
  The `<< >>` delimiters are chosen because they rarely appear in natural language and can be mapped to special tokens during tokenization.  
- *Safety filter*: run the LLM output through a lightweight policy model (or regex) that flags jailbreak cues or policy violations before exposure.

**Edge Cases**  
- Extremely long injected payloads that exceed token limits.  
- Malicious content that mimics delimiter syntax after encoding.  
- Users supplying binary data that cannot be safely encoded in text form.  

**Optimize & Communicate**  
Iteratively benchmark the prompt on attack scenarios, measure false‑positive rates, and adjust delimiters or sanitization rules. Explain to interviewers that this layered defense (sanitization → delimiter isolation → safety filter) balances usability with security while keeping computational overhead minimal.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
