---
qid: ing_ffcd8ec2a9__star__local
question: For a long-context assistant, when is a 1M-token context window the right
  tool, and when should you use retrieval (RAG) instead?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 256
output_tokens: 393
total_tokens: 649
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:00:06-05:00'
sources: []
---

**Situation:**  
In my last role at a fintech startup, we were building an AI‑powered customer support chatbot that had to handle legal compliance queries. Our internal data set included thousands of regulatory documents totaling over 3 million tokens. The product spec required the bot to respond in real time with up to 200 words per query while staying within a 1 M‑token context window.

**Task:**  
I needed to decide whether to embed all relevant documents directly into the model’s prompt or to implement a Retrieval-Augmented Generation (RAG) pipeline that fetches only the most pertinent snippets on demand, keeping latency under 300 ms for every user request.

**Action:**  
First, I benchmarked two scenarios. In the “full context” setup, we pre‑generated embeddings for all documents and concatenated the top‑10 by similarity into a single prompt. This consumed ~0.9 M tokens per inference and pushed GPU memory usage to 12 GB, causing a 600 ms inference time on our baseline hardware. In the RAG pipeline, I built an index in Milvus, used cosine distance to retrieve the top‑5 passages (≈30 k tokens), then passed them along with the user query to the model. This reduced prompt size to ~1.2 k tokens and cut latency to 180 ms while maintaining a 95% accuracy on a held‑out test set.

**Result:**  
We deployed the RAG solution, which lowered inference costs by 35%, kept response times below our SLA, and allowed us to add new regulatory updates without retraining the model. I learned that a 1 M‑token window is only justified when the entire context must be considered simultaneously (e.g., summarizing a long document), whereas retrieval shines when you need real‑time precision over a vast knowledge base.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
