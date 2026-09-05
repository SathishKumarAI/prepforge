---
qid: ing_022b016b9a__star__local
question: How do you prevent prompt injection? — Faq
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 306
total_tokens: 541
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:32:47-05:00'
sources: []
---

**Situation:**  
At my last role as a senior ML engineer for a customer‑support chatbot, we noticed a spike in malicious user inputs that were manipulating the model’s prompts to reveal proprietary training data and generate disallowed content.

**Task:**  
I was tasked with designing a robust mitigation strategy that would keep the bot functional for legitimate users while blocking any prompt injection attempts without adding noticeable latency or compromising user experience.

**Action:**  
First, I implemented a multi‑layered filter: a whitelist of allowed intent tokens combined with a context‑aware regex engine to strip out dangerous patterns (e.g., “<|im_start|>assistant”). Next, I introduced a token budget per request; any prompt exceeding the safe threshold was automatically truncated. We also added a semantic similarity check using sentence embeddings to flag inputs that were too close to known injection templates. Finally, we wrapped the model call in an OpenAI moderation endpoint and logged every flagged attempt for later analysis.

**Result:**  
Within two weeks of deployment, injection attempts dropped by 98%, while overall response latency increased only by 12 ms on average. The bot’s precision on legitimate queries improved from 84 % to 91 %. I learned that combining syntactic filtering with semantic checks provides a resilient defense without sacrificing performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
