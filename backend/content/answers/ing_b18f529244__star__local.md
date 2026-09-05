---
qid: ing_b18f529244__star__local
question: 'Explain: Likely interviewer follow-ups — Semantic Search'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 311
total_tokens: 546
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:26:48-05:00'
sources: []
---

**Situation:**  
At my last role I was tasked with improving the internal knowledge‑base search for a SaaS product used by over 3,000 support agents. The existing keyword engine returned 70 % relevance and caused long resolution times.

**Task:**  
I needed to build a semantic search system that could understand user intent, rank results by contextual similarity, and reduce average query time below 300 ms while keeping infrastructure cost under budget.

**Action:**  
First, I curated a labeled dataset of support tickets and FAQs. Using Hugging Face’s `sentence-transformers` library, I fine‑tuned a BERT model on this data to generate dense embeddings for each document. I deployed the model in a FastAPI service behind an NVIDIA T4 GPU for inference acceleration. For retrieval, I set up a FAISS index with IVF flat indexing and added approximate nearest neighbor search to meet latency goals. I also integrated query expansion via WordNet synsets to catch synonyms that our users frequently misspell.

**Result:**  
The new semantic engine lifted relevance scores from 70 % to 92 %, cutting average ticket resolution time by 35 %. We saved on support tickets, and the system stayed within a $1,200/month cloud budget. I learned how model fine‑tuning, vector indexing, and thoughtful trade‑offs between accuracy and latency can dramatically improve user experience in real‑world AI products.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
