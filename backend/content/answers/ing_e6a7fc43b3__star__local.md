---
qid: ing_e6a7fc43b3__star__local
question: Your corpus is multilingual and users query in several languages. What breaks,
  and how do you fix it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 343
total_tokens: 589
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:09:20-05:00'
sources: []
---

**Situation:**  
In a customer‑support chatbot for an e‑commerce platform, we had a training corpus of over 12 million FAQ entries in English, Spanish, French, and German. When users started querying in Mandarin and Arabic, response accuracy dropped from 92% to 68%, and latency spiked because the model was trying to match mismatched token vocabularies.

**Task:**  
I needed to restore relevance across all supported languages within two weeks while keeping inference time under 300 ms per query.

**Action:**  
1. Added a lightweight language‑identification layer (fastText) that routes each request to a language‑specific embedding space.  
2. Trained a shared multilingual transformer backbone (XLM‑R) with contrastive loss on aligned paraphrase pairs, so embeddings for semantically similar queries cluster together regardless of language.  
3. Implemented subword tokenization (SentencePiece) tuned per script, and fine‑tuned the tokenizer’s vocabulary size to 32k tokens to balance coverage and speed.  
4. Deployed a caching mechanism that stores top‑10 candidate answers per query prefix, reducing redundant similarity searches.

**Result:**  
After deployment, overall accuracy rose to 93% across all languages, latency dropped to 210 ms, and user satisfaction scores improved by 17%. I learned the importance of language‑aware routing combined with a shared semantic space for scalable multilingual AI systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
