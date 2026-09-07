---
qid: ing_ae4fcbf219__faang__local
question: 'Q: How do you defend against prompt injection?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 541
total_tokens: 773
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:29:00-05:00'
sources: []
---

**Clarify**  
We’re asked how to guard a generative‑AI system against *prompt injection*—malicious user input that manipulates the model into revealing secrets, violating policy, or executing unintended actions. I’ll assume we control the prompt pipeline (pre‑processing, tokenization) and have an API that can be called by untrusted clients.

**Approach**  
1. **Input sanitization & whitelisting** – strip disallowed tokens/characters; enforce a safe subset of language.  
2. **Prompt composition** – use “system” or “assistant” instructions that are immutable, and inject user content only in a sandboxed “user” role.  
3. **Token‑level filtering** – run the final prompt through a policy model (e.g., OpenAI’s Moderation API) to detect jailbreak patterns.  
4. **Output post‑processing** – blacklist sensitive entities; apply regex or NER to strip personal data before returning.  
5. **Monitoring & anomaly detection** – log request/response pairs, flag high‑entropy or repeated jailbreak attempts.

**Depth**  
- *Sanitization* is O(n) in prompt length and eliminates obvious injection vectors (e.g., `--force`, `;`).  
- *Role separation* leverages the model’s instruction hierarchy: system > assistant > user. The system role can override any user content, so we never let raw user text reach that layer.  
- *Policy filter* runs in constant time per token; using a lightweight BERT‑based classifier gives ≈90 % precision on known jailbreak prompts.  
- *Output filtering* uses a simple regex for PII plus a fine‑tuned LLM to catch nuanced leaks—complexity O(m) where m is output length.

**Edge cases**  
- Ambiguous user intent (e.g., asking “Explain how to hack the model” vs. “Explain hacking techniques in general”). We need context disambiguation or a higher‑level policy rule.  
- False positives: over‑aggressive sanitization may degrade UX; we’ll tune thresholds and provide a fallback path for user clarification.

**Optimize & communicate**  
Iteratively benchmark the filter pipeline, measure latency (target < 50 ms added overhead). Communicate trade‑offs to stakeholders: stricter filters reduce risk but increase false negatives. Present a dashboard of injection attempts vs. blocks to demonstrate efficacy. This structured defense balances safety, performance, and user experience—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
