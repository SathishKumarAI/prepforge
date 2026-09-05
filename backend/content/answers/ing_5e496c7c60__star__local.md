---
qid: ing_5e496c7c60__star__local
question: How do you build a golden evaluation set for RAG without months of labelling?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 294
total_tokens: 536
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:36:34-05:00'
sources: []
---

**Situation:** In my last role we were deploying a Retrieval-Augmented Generation (RAG) model for an internal knowledge base, but our gold evaluation set was only 500 labeled examples—insufficient to gauge performance across the 50k FAQ domain.

**Task:** I had to create a robust golden set covering key topics and answer quality without spending months on manual annotation.

**Action:** I leveraged semi‑automatic bootstrapping. First, I used an existing rule‑based extractor to pull top‑scoring passages for each question, then ran a lightweight transformer (DistilBERT) fine‑tuned on 200 hand‑labeled pairs to re‑rank those passages. Next, I employed active learning: the model flagged the 300 most uncertain predictions and sent them to domain experts via a simple web interface for quick thumbs‑up/down feedback. Finally, I applied clustering (k‑means on passage embeddings) to ensure topic diversity, sampling one example per cluster.

**Result:** The resulting gold set of 1,200 high‑confidence examples covered 90 % of FAQ topics and reduced evaluation variance by 35 %. The RAG accuracy improved from 68 % to 82 % after fine‑tuning on this set. I learned that combining lightweight models with targeted human review can rapidly bootstrap quality data without exhaustive labeling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
