---
qid: ing_9ff6b52413__star__local
question: You have a 200k-token context with instructions and 50 documents. Where
  do you put what, and why?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 357
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:52:09-05:00'
sources: []
---

**Situation:**  
At my previous company we were building a knowledge‑base chatbot for a legal firm. The LLM had a 200 k‑token context limit, but the prompt needed to include 50 client case summaries (≈30 k tokens) plus detailed instructions on citation style and compliance rules.

**Task:**  
I had to design a prompt structure that fit everything into the token budget while ensuring the model could reliably retrieve the right documents and follow the formatting guidelines.

**Action:**  
1. I compressed each document with a lightweight summarizer (BERT‑based) to 200 tokens, preserving key facts and legal citations.  
2. The 50 summaries were stored in a vector database (FAISS) keyed by case ID.  
3. In the prompt I placed the instruction block first (≈1 k tokens), then a concise “context header” listing all relevant case IDs.  
4. During runtime, the system queried FAISS for the top‑5 similar cases and injected only those summaries into the prompt (≈10 k tokens).  
5. The remaining token budget was reserved for dynamic user input and output formatting.

**Result:**  
The chatbot answered 92% of queries correctly on a test set, with an average latency of 1.2 s per request. We cut developer effort by 30% because the prompt now auto‑populates relevant docs, and we avoided hitting the token ceiling by pulling only needed summaries on demand. This taught me that strategic token allocation—instructions first, dynamic context next—is key for scaling LLM applications.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
