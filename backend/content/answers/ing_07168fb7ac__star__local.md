---
qid: ing_07168fb7ac__star__local
question: 'Explain: The RAG Taxonomy — Rag Fundamentals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 332
total_tokens: 567
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:43:19-05:00'
sources: []
---

**Situation:**  
At my previous company we were building an internal knowledge‑base chatbot for the customer support team. The existing GPT model could answer FAQs but it kept hallucinating facts, which made the team wary of deploying it.

**Task:**  
I was tasked with designing a Retrieval Augmented Generation (RAG) pipeline that would reduce hallucinations and improve accuracy to 95% precision on real user queries within two months.

**Action:**  
First, I mapped out the RAG taxonomy: *retrieval* (vector search over Elasticsearch indices), *augmentation* (concatenating top‑k passages into a prompt), and *generation* (fine‑tuned T5 model). I built a vector index using FAISS on embeddings from Sentence‑BERT, tuned cosine similarity thresholds, and added a relevance re‑ranker. For augmentation, I implemented a template that inserted passage titles to give the generator context clues. During fine‑tuning, I used contrastive loss to penalize hallucinations. Finally, I set up an A/B test harness in Grafana to monitor answer quality metrics.

**Result:**  
After rollout, precision jumped from 68% to 94%, and user satisfaction scores rose by 18 points on the internal survey. The project also cut support tickets related to misinformation by 30%. I learned that a clear taxonomy not only structures the pipeline but also provides measurable checkpoints for each component.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
