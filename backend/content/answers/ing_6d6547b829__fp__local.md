---
qid: ing_6d6547b829__fp__local
question: 'Explain: You need to classify and summarise 50 million records with an
  LLM. Design the pipeline and estimate the cost.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 185
output_tokens: 595
total_tokens: 780
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:57:06-05:00'
sources: []
---

**From problem to solution**

You have 50 M tabular rows that must be *classified* (label) and *summarised* (short natural‑language digest). The core challenge is to map high‑dimensional structured data into a low‑dimensional semantic representation that an LLM can understand, then generate outputs efficiently.  

1. **Feature engineering & tokenisation**  
   • Convert each row to a “prompt” string: `"<field1>=val1; <field2>=val2; …"` → 512 tokens on average.  
   • Store in a column‑arithmetic vector (≈ 256 D) for quick similarity lookup.

2. **Vector‑based retrieval**  
   • Build an approximate nearest‑neighbour index (FAISS/PGvector).  
   • For each row, retrieve the top‑k most similar rows to bootstrap classification and summarisation context.  
   *Complexity*: O(N log N) indexing, O(k·log N) query.

3. **LLM inference**  
   • Prompt: “Classify this record: … Summarise in 50 words.”  
   • Use a cost‑effective model (e.g., GPT‑4o or Claude‑3.5).  
   *Tokens*: 512 prompt + 256 output ≈ 768 tokens per row.

4. **Batching & caching**  
   • Process 1,000 rows per batch; GPU memory ≈ 8 GB suffices for a single inference pass.  

5. **Post‑processing**  
   • Store label and summary back to the database; optionally run a quality‑check via a smaller LLM (e.g., GPT‑3.5‑turbo).

---

### Cost estimate

| Item | Units | Rate | Cost |
|------|-------|------|------|
| Token cost (768 t × 50 M) | 38 B tokens | $0.02/1k | **$760 k** |
| Retrieval index (FAISS on SSD) | 1 TB storage | $0.10/TB‑month | negligible |
| Compute (GPU inference, 1 hr per 1k rows) | 50 h | $3/h | **$150 ** |
| Storage & networking | 500 GB | $0.02/GB‑mo | < $10 |

**Total ≈ $760 k** for a one‑time run, dominated by token usage.  
A non‑obvious insight: *retrieval‑augmented prompting* turns the LLM into an “expert system” that only needs to refine rather than generate from scratch, dramatically reducing both cost and hallucination risk.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
