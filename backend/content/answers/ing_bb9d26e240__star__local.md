---
qid: ing_bb9d26e240__star__local
question: 'Explain: With a question mark followed by a — Python Full Course for Beginners'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 385
total_tokens: 626
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:46:32-05:00'
sources: []
---

**Situation:** While developing a voice‑activated assistant for a smart home app, we noticed the natural language parser frequently misidentified user intents that included a question mark followed by a dash (e.g., “What’s the temperature? – show me”). The system treated the entire string as a single command instead of separating the query from the follow‑up.

**Task:** I needed to create a robust pre‑processing module that could correctly split and tag such sentences, ensuring downstream intent recognition worked accurately without increasing latency beyond 200 ms per request.

**Action:**  
1. Built a regex pattern `(?<=\?)\s*—` to detect the “? –” delimiter while preserving surrounding context.  
2. Integrated this into an NLTK pipeline: first tokenize, then apply the split rule, producing two tokens (“What’s the temperature?” and “show me”).  
3. Added a fallback using spaCy’s dependency parser for edge cases where punctuation was omitted.  
4. Benchmarked with 10,000 synthetic utterances; optimized by caching compiled regex and limiting look‑ahead to 5 characters.

**Result:** Intent accuracy jumped from 78 % to 94 %, and response time stayed under 180 ms on average. I learned that careful tokenization—especially handling uncommon punctuation patterns—can dramatically improve NLP pipeline reliability without sacrificing performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
