---
qid: ing_817508bd2e__think__local
question: 'Q: You are designing a legal document search system with 5M documents.
  The team is debating between dense bi-encoder search with a cross-encoder reranker
  vs. ColBERT. What do you recommend?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 222
output_tokens: 483
total_tokens: 705
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T09:32:50-05:00'
sources: []
---

**1. Clarify the problem & assumptions**  
   - 5 M documents: size matters for indexing time and memory.  
   - Legal domain → queries are long, need high recall & precision.  
   - Team has resources for training models but limited GPU budget for inference?  

**2. Choose a mental model / framework**  
   Use the *trade‑off triangle*: **Recall vs. Speed vs. Accuracy**.  
   - Dense bi‑encoder → fast retrieval, lower recall on long queries.  
   - Cross‑encoder reranker → expensive but boosts precision.  
   - ColBERT (late interaction) → balances speed and fine‑grained relevance.  

**3. Step‑by‑step reasoning**  
   1. Estimate memory: dense vectors (~128 d × 4 bytes ≈ 512 bytes each) → ~2.5 GB; ColBERT uses multi‑index per token → larger but still manageable with SSD.  
   2. Recall needs: legal queries often hinge on phrase overlap – late interaction (ColBERT) better captures that than a single dense vector.  
   3. Speed: bi‑encoder + reranker can hit sub‑second latency; ColBERT’s retrieval is similar but adds no reranking step.  
   4. Model complexity: if you have enough GPU, cross‑encoder can be fine‑tuned on legal corpora; otherwise ColBERT leverages pre‑trained BERT without extra inference cost.  

**4. Common traps to avoid**  
   - Assuming dense vectors always give higher recall – they often miss nuanced legal phrasing.  
   - Ignoring the cost of cross‑encoder reranking at scale (5 M docs × many candidates).  
   - Overlooking index build time: ColBERT can be slower initially but offers better long‑term performance.  

**5. Sanity check & verbalize**  
   Re‑state: “We need a system that keeps latency low, scales to 5 M docs, and captures fine‑grained legal relevance.” If the answer still feels off, ask whether the team prioritizes recall over speed or vice versa; adjust the recommendation accordingly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
