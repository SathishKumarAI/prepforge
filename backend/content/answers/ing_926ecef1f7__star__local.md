---
qid: ing_926ecef1f7__star__local
question: 'Design cross-lingual RAG: the knowledge base is in English and Hindi, but
  users ask in Tamil, Telugu, or transliterated Hinglish. How do you retrieve and
  answer correctly?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 265
output_tokens: 362
total_tokens: 627
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:25:46-05:00'
sources: []
---

**Situation:** In a multilingual customer‑support bot for a telecom provider, our knowledge base was written only in English and Hindi. However, users frequently typed queries in Tamil, Telugu, or transliterated Hinglish, causing the retrieval engine to return irrelevant answers and drop satisfaction scores by 18 %.  

**Task:** I needed to build a cross‑lingual Retrieval‑Augmented Generation (RAG) system that could accurately map user intent from any of those languages to the correct knowledge‑base documents and generate fluent, context‑appropriate responses.  

**Action:** First, I set up a bilingual encoder using XLM‑RoBERTa fine‑tuned on parallel corpora between Tamil/Telugu/Hinglish and Hindi/English, ensuring semantic alignment across scripts. For transliteration, I integrated a rule‑based phonetic mapper that converts Hinglish to Devanagari before encoding. Retrieval was handled by FAISS with cosine similarity over the shared embedding space; we capped candidate size at 10 per query to keep latency <150 ms. During generation, I used a lightweight T5 fine‑tuned on Tamil/Telugu prompts and Hindi/English passages, feeding in the top‑retrieved doc as context. We added a confidence gate that falls back to a generic fallback if similarity <0.45.  

**Result:** Post‑deployment, retrieval precision rose from 55 % to 84 %, while user satisfaction scores improved by 23 %. Latency stayed below our SLA of 200 ms. I learned that aligning embeddings across scripts via fine‑tuned multilingual models and handling transliteration explicitly can dramatically reduce language mismatch errors in RAG pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
