---
qid: ing_aa570ea2bb__fp__local
question: 'Explain: Cost estimate (rough token math) — Document Intelligence Pipeline'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 552
total_tokens: 724
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:07:21-05:00'
sources: []
---

**Why the pipeline’s token budget matters**

A document‑intelligence workflow typically follows three stages:  
1️⃣ **Ingest & pre‑processing** – OCR/LLM extraction turns raw pages into text tokens.  
2️⃣ **Analysis** – a domain‑specific LLM ingests those tokens, produces insights or structured data.  
3️⃣ **Post‑processing** – results are re‑tokenised for storage, indexing or downstream systems.

The cost is proportional to the total number of *input* and *output* tokens processed by each stage, because every token traverses an API call that charges per token.  

**Token math from first principles**

Let  
- \(T_{\text{raw}}\) = average raw page length (≈ 200 words ≈ 300 tokens).  
- \(N\) = number of pages.  
- \(p\) = OCR‑to‑text accuracy (fraction of tokens retained after cleaning).  
- \(k\) = model’s context window size.  

Stage 1 cost: \(C_1 \approx \alpha\, N\, T_{\text{raw}}\, p\), where \(\alpha\) is the per‑token price for OCR/LLM extraction.

Stage 2 cost: The LLM must read all retained tokens plus a prompt of size \(P\).  
If \(N\,T_{\text{raw}}\,p > k\), we split into chunks, so  
\(C_2 \approx \beta\, \lceil N\,T_{\text{raw}}\,p / k\rceil \,(k + P)\).

Stage 3 cost: Outputs are typically a fraction \(q\) of input tokens.  
\(C_3 \approx \gamma\, N\,T_{\text{raw}}\,p\, q\).

Total cost: \(C = C_1 + C_2 + C_3\).  

**Non‑obvious insight**

The *chunking strategy* (how many pages per prompt) is the dominant lever. A naive one‑prompt-per‑document approach forces the LLM to waste context on irrelevant text, inflating \(k\) and driving up \(C_2\). By aligning chunks with semantic boundaries—e.g., sections or logical units—you minimise unnecessary token use while keeping each chunk below \(k\), yielding a near‑linear cost scaling rather than quadratic. This subtle alignment is often overlooked but can cut the analysis stage by 30–50 %.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
