---
qid: ing_329086e873__star__local
question: 'Explain: What does BM25 actually compute? Walk me through the formula''s
  moving parts.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 412
total_tokens: 655
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:09:37-05:00'
sources: []
---

**Situation** – At my last company we were building a search feature for an e‑commerce platform that had over 2 million product listings. The existing keyword matching returned too many irrelevant results and the click‑through rate was only 3%.  
**Task** – I needed to replace the naive TF–IDF ranking with a more sophisticated relevance model that could account for term frequency, document length, and query specificity, all while keeping latency under 50 ms.  
**Action** – I implemented BM25 (Okapi). The core formula is  

\[
\text{score}(D,Q)=\sum_{t\in Q}\log\frac{N-n_t+0.5}{n_t+0.5}\times \frac{(k_1+1)f_{t,D}}{K+f_{t,D}}
\]  

where \(N\) is total docs, \(n_t\) docs containing term \(t\), \(f_{t,D}\) term frequency in doc \(D\). The denominator \(K = k_1[(1-b)+b\,\frac{|D|}{avg|D|}]\) normalizes for document length; \(k_1\) (≈2.0) controls saturation and \(b\) (≈0.75) tunes length bias. I pre‑computed the IDF and stored per‑term postings in a Lucene index, then used a custom scorer to evaluate queries on the fly.  
**Result** – The new BM25 ranking lifted click‑through from 3% to 8%, reduced bounce rate by 15%, and kept query latency below our SLA. I learned that tuning \(k_1\) and \(b\) for the specific content distribution is as important as the formula itself.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
