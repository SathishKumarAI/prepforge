---
qid: ing_797e853a5c__think__local
question: 'Explain: What is the KV cache, why is it needed, and how big does it get?
  Ballpark it for a 70B-class model at 128K context.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 214
output_tokens: 533
total_tokens: 747
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T09:02:43-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
- Identify “KV cache” as the key‑value memory that transformer models keep per token during inference (i.e., past hidden states).  
- Assume a standard decoder‑only architecture, 70 B parameters, and a context window of 128 K tokens.  
- Take a typical hidden size ≈ 8 k (≈ 64 k bits) for such a model.

**2️⃣ Build the mental framework**  
- A transformer layer stores two tensors per token: *key* and *value*, each of shape `(hidden_dim,)`.  
- The cache grows linearly with the number of tokens generated so far.  
- For inference we only need to keep the cache (no gradients), so memory is purely raw bytes.

**3️⃣ Step‑by‑step reasoning**  
1. **Per‑token size:** key + value = `2 × hidden_dim`.  
   - 8 k × 2 = 16 k floats → 64 k bits ≈ **8 KB**.  
2. **Total cache for 128 K tokens:**  
   - 128 000 tokens × 8 KB ≈ **1 024 MB ≈ 1 GB**.  
3. **Why needed?**  
   - Attention scores require all previous keys/values; recomputing them each step would be O(n²) in time and impossible for long contexts.  
4. **Practical tweaks:**  
   - Some systems compress or sparsify the cache (e.g., low‑rank factorization), but raw size is still ~1 GB.

**4️⃣ Common pitfalls to avoid**  
- Mixing up *hidden dimension* with *number of layers*. Only hidden dim matters per token.  
- Forgetting that the cache holds **both** key and value; double counting leads to 16 KB estimate.  
- Assuming a smaller hidden size (e.g., 4 k) would underestimate memory.

**5️⃣ Sanity check & verbal communication**  
- Verify: 128 K × 8 KB ≈ 1 GB → fits typical GPU RAM for inference.  
- Explain to a colleague: “The KV cache is a per‑token store of keys and values; for a 70 B model with 8 k hidden size, each token costs ~8 KB, so 128 K context needs roughly 1 GB.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
