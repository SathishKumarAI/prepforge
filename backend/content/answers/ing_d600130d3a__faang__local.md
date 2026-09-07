---
qid: ing_d600130d3a__faang__local
question: 'Explain: Multiquery Attention (MQA) — Inside Kaiju - building conversational
  models at scale'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 604
total_tokens: 845
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:56:54-05:00'
sources: []
---

**Clarify**  
You want a concise explanation of *Multi‑Query Attention* (MQA), the attention variant used in Meta’s **Kaiju** conversational models. I’ll assume you’re familiar with vanilla multi‑head self‑attention and that “building at scale” refers to reducing memory/compute while maintaining quality.

---

### Approach
1. Highlight the core idea: replace per‑head key/value tensors with a *single* shared K/V.
2. Explain how queries remain head‑specific (hence “multi‑query”).
3. Show the computational and memory savings.
4. Mention practical impact in Kaiju’s training pipeline.

---

### Depth
In standard multi‑head attention, each of the *H* heads has its own projection matrices for queries **Q**, keys **K** and values **V**:  
`Q_h = xW_Qh`, `K_h = xW_Kh`, `V_h = xW_Vh`.  
This costs O(H·d²) parameters per head and requires H separate K/V tensors, inflating memory.

MQA collapses the keys/values into a single set:  
`K = xW_K`, `V = xW_V`.  
Each head still learns its own query projection (`Q_h = xW_Qh`) but shares the same `K,V`.  
During attention, every head computes `softmax(Q_h Kᵀ / √d) V` using that shared K/V.  

**Complexity**:  
- **Parameters** drop from O(H·3d²) to O((H+2)d²).  
- **Memory** for storing K,V reduces by factor H, enabling longer contexts (e.g., 16k tokens) on the same GPU.

Kaiju trains with *gradient checkpointing* and a fused MQA kernel, so forward/backward passes stay ~1.5× faster than vanilla attention while preserving perplexity within <1% of multi‑head baselines.

---

### Edge Cases
- **Very small H**: benefit diminishes; still safe but less memory gain.  
- **Sparse or low‑rank inputs**: shared K/V may hurt if heads need distinct key distributions; mitigated by adding a lightweight “key‑mixing” projection per head.  
- **Inference latency**: shared K/V allows batching across requests, reducing kernel launch overhead.

---

### Optimize & Communicate
To further improve, one could learn a small *key‑mixing matrix* to give heads subtle key differences without full duplication—balancing quality and memory. When presenting this to interviewers, emphasize that MQA is a principled trade‑off: **parameter sharing → linear scaling of context** with negligible loss in expressiveness, exactly what large‑scale conversational systems require.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
