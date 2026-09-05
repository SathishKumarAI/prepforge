---
qid: ing_b7947fa628__star__local
question: Your model refuses requests that are perfectly legitimate. How do you diagnose
  and fix over-refusal?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 291
total_tokens: 535
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:38:22-05:00'
sources: []
---

**Situation:**  
In my last role I built a chatbot for an e‑commerce client. Within two weeks of launch, the support team reported that the model was refusing legitimate user queries about order status and returns—about 12% of all requests were flagged as “unsafe”.

**Task:**  
I needed to pinpoint why valid requests were being blocked, reduce over‑refusal by at least 80%, and ensure compliance with our safety guidelines.

**Action:**  
First, I logged every refusal along with the prompt text and context. Using a custom script, I clustered refusals by similarity and mapped them against the safety filter rules in our moderation pipeline. I discovered that a recent update to the rule set had incorrectly flagged phrases like “track my order” as potential phishing content. I rolled back the offending rule, then retrained the refusal classifier on a curated dataset of 5 k labeled examples (valid vs. false‑positive). I also introduced a fallback confidence threshold: if the model’s safety score was below 0.2, it would politely ask for clarification instead of refusing outright.

**Result:**  
After deployment, over‑refusal dropped from 12% to 1.8%, and user satisfaction scores rose by 15%. I learned that continuous monitoring of refusal logs and iterative rule tuning are essential to balance safety with usability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
