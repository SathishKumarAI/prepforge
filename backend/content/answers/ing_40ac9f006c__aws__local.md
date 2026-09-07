---
qid: ing_40ac9f006c__aws__local
question: 'Explain: Chart Types and Extraction Approaches — Multimodal Rag'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 551
total_tokens: 783
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:52:13-05:00'
sources: []
---

**Situation / Task**  
At my previous company we built an internal analytics portal that needed to surface insights from *hundreds of PDF reports* containing tables, charts (bar, line, pie), and narrative text. The goal was to let analysts ask natural‑language questions and get answers backed by the chart data—essentially a multimodal Retrieval‑Augmented Generation (RAG) system.

**Action**  
1. **Chart classification** – Trained a lightweight CNN on 12k labeled screenshots to distinguish bar, line, pie, scatter, and heat maps with 94 % accuracy.  
2. **Feature extraction** – For each chart type we used *Amazon Rekognition Custom Labels* to detect axes, legends, and data points; then fed the coordinates into an in‑house parser that produced a CSV‑style vector.  
3. **Document embedding** – Combined the text embedding from *Amazon Bedrock LLM* with the chart vectors via a learned similarity metric (contrastive loss).  
4. **RAG pipeline** – Stored embeddings in *Amazon QLDB* for auditability, queried by *OpenSearch* for fast retrieval, and passed the top‑k snippets to Bedrock’s GPT‑4o to generate concise answers with source citations.  
5. **Cost & scalability** – Leveraged spot GPU instances for training (≈ $0.05/hr) and serverless Lambda for inference (≤ 10 ms latency). The system handled 1,200 queries/day with a 99.9 % uptime SLA.

**Result**  
Within two months of deployment, analysts reduced report‑reading time by **38 %**, and the portal’s usage grew from 120 to 3,400 daily active users (28×). We also cut storage costs by 22 % by deduplicating chart embeddings.  

---

### Leadership Principles Anchored
- **Customer Obsession** – Built a solution that directly addressed analysts’ pain points.  
- **Dive Deep** – Engineered custom vision pipelines and contrastive learning for precise multimodal retrieval.

### What a Bar‑Raiser Looks For
- Demonstrated *ownership* of the end‑to‑end pipeline.  
- Quantified impact (time savings, usage growth).  
- Showed depth in design choices: why specific AWS services were chosen over alternatives, trade‑offs considered, and how failures (e.g., misclassified charts) were mitigated through fallback logic and continuous monitoring.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
