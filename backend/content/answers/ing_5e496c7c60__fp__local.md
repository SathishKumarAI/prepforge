---
qid: ing_5e496c7c60__fp__local
question: How do you build a golden evaluation set for RAG without months of labelling?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 546
total_tokens: 722
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:25:04-05:00'
sources: []
---

**Why a “golden” RAG test set is essential**

RAG models intertwine *retrieval* (which documents to fetch) with *generation* (how to synthesize an answer). A faithful benchmark must reward both steps: the retrieved context should be relevant, and the generated text must faithfully reflect it. If we only hand‑label a few hundred samples, we risk overfitting to idiosyncratic phrasing or missing hard negatives that expose retrieval failures.

**From problem to solution**

1. **Start with an automated seed set**  
   - Crawl a domain‑specific corpus (e.g., medical QA sites).  
   - Use a high‑precision keyword matcher or a lightweight dense retriever to pull the top‑k documents per query.  
   - Generate answers with a strong language model; flag any answer that diverges from the source text by > 0.3 ROUGE as *potential error*.

2. **Bootstrapping hard negatives**  
   - For each query, keep the top‑k retrieved passages and also sample *near‑misses* (documents ranked 20–50).  
   - These near‑misses form a natural “negative” set that forces the retriever to discriminate fine‑grained relevance.

3. **Active human review on a tiny slice**  
   - Randomly pick 5 % of the *potential error* cases and ask annotators to label: (a) whether the retrieved passage is relevant, (b) whether the generated answer is correct given that passage.  
   - Use these labels to train a lightweight classifier that flags likely errors in the rest of the set.

4. **Iterate with confidence thresholds**  
   - As the classifier improves, raise the confidence threshold for automatic “gold” labeling; every time it flips from *non‑gold* to *gold*, add one more human review.  
   - This greedy strategy keeps total annotation below a few thousand tokens.

**Non‑obvious insight**

The key is that **retrieval errors dominate the evaluation noise**, not generation mistakes. By explicitly constructing hard negatives and letting a small, confidence‑guided human pass over them, we amplify the signal from retrieval failures while keeping labeling effort minimal. This mirrors curriculum learning: start with easy positives, then gradually expose the model to increasingly challenging distractors—exactly what a golden RAG set needs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
