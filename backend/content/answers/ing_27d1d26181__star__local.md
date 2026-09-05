---
qid: ing_27d1d26181__star__local
question: You have thumbs-up/down and click logs from a live RAG product. How do you
  turn that into retrieval improvements?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 347
total_tokens: 596
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:48:01-05:00'
sources: []
---

**Situation**  
In the last sprint I was working on a live Retrieval‑Augmented Generation (RAG) chatbot for our e‑commerce platform. Our analytics dashboard showed a steady drop in user satisfaction: only 58 % of thumbs‑up responses came from the top‑ranked retrieved documents, and click logs indicated that users frequently clicked on second or third results to find the right answer.

**Task**  
I needed to translate those thumbs‑up/down signals and click patterns into concrete retrieval tweaks so we could lift the relevance score of the top‑k documents without hurting latency.

**Action**  
First, I built a lightweight feature extraction pipeline that tagged each user interaction with the rank of the clicked document and the sentiment of the thumbs. Using these labels, I trained a small gradient‑boosted model (XGBoost) to predict click likelihood per candidate. I then integrated this model into our retrieval engine as a re‑ranking step: after the initial BM25 pass, we rerank the top 20 candidates with the learned score and push the best one to rank 1. To keep latency low, I cached the model outputs for popular queries and used vector quantization on embeddings.

**Result**  
Within two weeks of deployment, the click‑through rate for the first result rose from 32 % to 48 %, and overall user satisfaction (thumbs‑up percentage) climbed to 65 %. I learned that real‑time behavioral signals can be distilled into a lightweight re‑ranker, and that small model updates can yield big gains in retrieval quality without overhauling the entire system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
