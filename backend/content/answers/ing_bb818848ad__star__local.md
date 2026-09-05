---
qid: ing_bb818848ad__star__local
question: 'Explain: Functional — Semantic Search'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 366
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:46:10-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup, our customer support portal had a knowledge base of over 12 000 articles. Users were struggling to find relevant help; the average time-to-solution was 4.3 minutes, and we received frequent complaints that search results were irrelevant.

**Task** – I was tasked with redesigning the search experience so that users could locate answers in under 30 seconds with a precision of at least 85 %. The solution had to be fully functional within our existing tech stack (Python backend, React frontend) and not require a costly migration.

**Action** – I built a semantic search engine using Sentence‑Transformers to encode every article into a 384‑dimensional vector. On the fly, user queries were transformed and compared against the corpus via cosine similarity. To speed up retrieval, I indexed vectors with FAISS, enabling sub‑millisecond nearest‑neighbor lookups. I also added a relevance feedback loop: if users clicked on a result, we re‑ranked subsequent searches toward that article’s vector space. The system was wrapped in a Flask API and integrated into the React search bar with minimal latency.

**Result** – After deployment, average time-to-solution dropped from 4.3 minutes to 1.2 minutes, and click‑through rate on top results rose from 12 % to 38 %. User satisfaction scores improved by 27 %, and we saved the support team an estimated 350 hours of manual triage per month. I learned how to balance embedding quality with search speed using FAISS and the importance of continuous user feedback for refining semantic relevance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
