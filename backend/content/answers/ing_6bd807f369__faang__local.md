---
qid: ing_6bd807f369__faang__local
question: 'Explain: Semantic Similarity — Llm Evaluation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 443
total_tokens: 674
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:54:19-05:00'
sources: []
---

**Semantic Similarity – LLM Evaluation**

| # | Stage | What I’d say |
|---|-------|--------------|
| **1️⃣ Clarify** | “We want a metric that tells how close two text snippets are in meaning.”  Ask: *What language?* *Is it sentence‑level or paragraph‑level?* *Do we care about domain‑specific jargon?* *Do we need human‑readable thresholds?”|
| **2️⃣ Approach** | 1. Encode each string with a pretrained model (e.g., BERT, RoBERTa). <br>2. Compute cosine similarity of the CLS embeddings. <br>3. Calibrate scores against a small labeled set to map raw similarity → human‑friendly scale. |
| **3️⃣ Depth** | *Embedding*: use `sentence-transformers` for sentence‑level; fine‑tune on domain data if needed. <br>*Similarity*: cosine gives 0–1 range; can convert to distance. <br>*Complexity*: O(d) per pair (d≈768). Memory: store embeddings or compute on the fly. <br>*Trade‑offs*: Pretrained models capture syntax & semantics but may miss domain nuance; fine‑tuning improves recall at cost of extra data and training time. |
| **4️⃣ Edge Cases** | • Very short inputs → embeddings dominated by padding. <br>• OOV words or emojis → subword tokenization mitigates but may skew similarity. <br>• Non‑English text → use multilingual model (XLM-R). Test with random noise, identical strings, and paraphrases. |
| **5️⃣ Optimize & Communicate** | • Cache embeddings for repeated queries to save compute. <br>• Use approximate nearest neighbor search if ranking many candidates. <br>Explain that we’re balancing *semantic fidelity* against *latency*, and that thresholds can be tuned per application (e.g., 0.8 for strict QA, 0.6 for casual chat). |

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
