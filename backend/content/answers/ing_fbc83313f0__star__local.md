---
qid: ing_fbc83313f0__star__local
question: 'Q: How do you handle the case where a RAG system retrieves irrelevant documents
  but the LLM generates a plausible-sounding answer anyway?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 327
total_tokens: 580
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:52:20-05:00'
sources: []
---

**Situation** – In my last role, we built a retrieval‑augmented generation (RAG) chatbot for an internal knowledge base. One day, during user testing, the system started pulling outdated policy documents and yet the LLM produced answers that sounded authoritative but were factually wrong.

**Task** – I was tasked with diagnosing why irrelevant docs were being retrieved and preventing the model from hallucinating correct‑seeming responses, all while keeping latency under 800 ms for production traffic.

**Action** – First, I instrumented the retriever: logged query embeddings, top‑k scores, and doc metadata. Using Pinecone’s vector similarity dashboard, I discovered a drift in the embedding space after an update to the training corpus. I re‑trained the encoder on the latest policy set, added a cosine‑threshold filter (0.75), and introduced a “relevance sanity check” that cross‑references key entities from the query against those in the retrieved docs. For hallucination, I wrapped the LLM prompt with a verification step: after generating an answer, the model was prompted to cite source snippets; any answer lacking citations was flagged for human review.

**Result** – Retrieval precision rose from 58 % to 92 %, and user‑reported misinformation incidents dropped by 87 %. The latency impact was only +12 ms on average. I learned that combining vector‑space tuning with lightweight post‑retrieval checks can robustly guard against hallucinations without sacrificing speed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
