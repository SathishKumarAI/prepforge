---
qid: ing_2073ad80fe__eli5__local
question: You suspect someone is distilling your model through your public API. How
  would you detect it and what can you actually do?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 283
total_tokens: 455
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:27:43-05:00'
sources: []
---

Imagine your model is a secret recipe that you let friends taste only in the kitchen (the public API). If someone starts copying the recipe by sniffing every bite, they’re “distilling” it—making their own version from what they observe.  

**How to spot it:**  
1. **Track usage spikes** – if one user suddenly makes thousands of calls in a short time, that’s suspicious.  
2. **Watch for patterns** – look at the inputs and outputs: a real user asks varied questions; a copier will send many similar prompts and collect the same kinds of answers.  
3. **Rate‑limit or throttle** – slow down any single IP that exceeds normal limits.

**What you can do:**  
- **Enforce quotas** – set hard caps per account or per minute so copying becomes costly.  
- **Add watermarking** – embed a subtle, invisible tag in every response; if it appears elsewhere, you know the model was copied.  
- **Legal and policy measures** – state that reverse‑engineering the API is disallowed; enforce with terms of service.

In short, keep an eye on unusual traffic, limit how fast people can ask questions, and add a hidden “signature” so you can prove a copy was made.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
