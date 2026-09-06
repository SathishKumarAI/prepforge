---
qid: ing_cfcd7a5f57__fp__local
question: 'Explain: Key Features — GitHub - vibrantlabsai/ragas: Supercharge Your
  LLM Application Evaluations \ud83d\ude80 \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 364
total_tokens: 559
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:22:10-05:00'
sources: []
---

**Why RAGAs is a game‑changer for LLM evaluation**

At its core, an LLM that “retrieves” knowledge must satisfy two competing goals:  
1️⃣ **Accuracy** – the answer must be factually correct;  
2️⃣ **Faithfulness** – it must only cite evidence it actually used.  

RAGAs formalises this tension by turning every generated response into a *triplet* \((q, a, r)\), where \(q\) is the prompt, \(a\) the answer and \(r\) the retrieved passages. It then applies three orthogonal metrics:

| Metric | What it captures | Why it matters |
|--------|------------------|----------------|
| **Precision** | % of tokens in \(a\) that are justified by at least one token in \(r\) | Ensures the model doesn’t hallucinate |
| **Recall** | % of relevant content in \(r\) that appears in \(a\) | Guarantees it actually used the evidence |
| **Coverage** | Diversity of passages contributing to \(a\) | Detects over‑reliance on a single source |

The repo packages this into a lightweight CLI and a Jupyter notebook, automatically ingesting datasets like *SQuAD* or *WebQuestions*, running retrieval (FAISS, Milvus, etc.), generating answers with any LLM API, and producing the metrics.  

**Hidden gem:** RAGAs’ *semantic weighting* allows you to penalise over‑used passages, nudging models toward broader evidence use—something most evaluation suites ignore but is critical for robust knowledge bases.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
