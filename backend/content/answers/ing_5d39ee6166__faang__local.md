---
qid: ing_5d39ee6166__faang__local
question: How do you evaluate a RAG pipeline? Why evaluate components separately from
  the end-to-end system?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 558
total_tokens: 800
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:20:41-05:00'
sources: []
---

**1️⃣ Clarify**  
We’re asked how to *evaluate* a Retrieval‑Augmented Generation (RAG) pipeline and why component‑level metrics matter separately from the end‑to‑end score. Assume: we have a query encoder → document retriever → rewriter/decoder, all trained on a public benchmark, and we want reproducible, actionable results.

**2️⃣ Approach**  
1. Define *what* we care about: relevance (retrieval), faithfulness (generation), latency, cost.  
2. Build a test harness that feeds the same queries to each stage.  
3. Collect per‑component metrics (e.g., MRR@10 for retrieval, ROUGE/BLEU for generation) and an overall metric (human judgment or task success).  

**3️⃣ Depth**  
- **Retrieval**: compute precision@k, recall@k, mean reciprocal rank. Use a held‑out relevance set; also measure latency per query.  
- **Generation**: evaluate factual consistency via FactCC or hallucination detection, ROUGE/F1 against reference answers, and perplexity for fluency.  
- **End‑to‑end**: human evaluation on *answer quality* (relevance + correctness) or task success rate (e.g., QA accuracy). Use statistical significance tests (paired bootstrap).  

Why separate?  
- A high retrieval recall but low generation fidelity tells us to improve the decoder, not the retriever.  
- If latency spikes only in the encoder, we can target optimization there without touching the model quality.  
- Component metrics expose *error propagation*; a small drop in retrieval precision may amplify into larger end‑to‑end errors.

**4️⃣ Edge Cases**  
- No relevant documents: check fallback behavior.  
- Duplicate top‑k docs: ensure diversity metrics.  
- Out‑of‑distribution queries: test robustness with adversarial prompts.  

**5️⃣ Optimize & Communicate**  
Start with a baseline, then iteratively tune the retriever (e.g., FAISS index) and decoder (temperature, beam width). Report trade‑offs: e.g., “Increasing k from 10 to 30 boosts MRR by 3 % but adds 12 ms latency.” Narrate as: *“We first isolated retrieval errors; after fine‑tuning the encoder, recall improved. Next we tackled hallucinations with a consistency loss, raising overall answer quality by 4 % while keeping latency constant.”* This shows clear, data‑driven reasoning and aligns with FAANG’s emphasis on structured problem solving.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
