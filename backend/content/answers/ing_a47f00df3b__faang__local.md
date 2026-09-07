---
qid: ing_a47f00df3b__faang__local
question: 'Explain: A user reports a bad answer. Walk me through how you debug it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 472
total_tokens: 711
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:07:46-05:00'
sources: []
---

**Clarify**  
The user says the model returned a *bad* answer—i.e., incorrect, incomplete, or inappropriate. I’d first confirm:  

- What was the prompt?  
- What response did they receive?  
- Why do they consider it “bad” (factually wrong, irrelevant, toxic, etc.)?  
- Is this an isolated incident or a pattern?

**Approach**  
1. Re‑run the same prompt in a controlled environment to see if the output reproduces.  
2. Inspect logs for request/response metadata (token counts, temperature, top‑p).  
3. Verify model version and deployment settings.  

If the answer differs from the original, investigate transient factors (rate limits, partial payloads). If it matches, move to root‑cause analysis.

**Depth**  
- **Data drift / training gaps:** Check if the knowledge cutoff predates recent facts or if the prompt references niche topics not covered in training data.  
- **Tokenization/Prompt engineering:** Mis‑tokenized inputs can alter intent; ensure no hidden characters or truncation.  
- **Sampling parameters:** High temperature/top‑p can increase variance—lower them for deterministic answers.  
- **Safety filters:** Some content may be suppressed, leading to incomplete replies. Examine the filter logs.  

Complexity: O(1) per request; overall diagnostic time ≈ 5–10 min.

**Edge Cases**  
- Network hiccups causing partial responses.  
- Caching layers returning stale outputs.  
- User’s local environment altering the prompt (e.g., line breaks).  
- Model overload leading to fallback or generic replies.

Test by replaying with varied temperatures, on multiple model versions, and with/without safety filters enabled.

**Optimize & Communicate**  
Explain findings concisely: “The issue stemmed from a tokenization error that changed the question’s intent; after correcting the prompt and lowering temperature, the answer aligns with expectations.”  
Suggest mitigations: stricter input validation, clearer prompt templates, and monitoring for drift. Highlight that systematic logging and reproducible test harnesses are key to fast triage in production AI services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
