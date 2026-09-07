---
qid: ing_11c3621bf2__faang__local
question: 'Explain: Latency Estimation — Back of the Envelope - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 583
total_tokens: 820
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:25:14-05:00'
sources: []
---

## 1️⃣ Clarify  
We’re asked to give a quick, back‑of‑the‑envelope method for estimating inference latency in an ML system (e.g., serving a transformer).  
**Assumptions to confirm:**  
- Batch size is fixed at 1 (online inference).  
- Model depth *L*, hidden dimension *H*, token length *T*.  
- Hardware: single GPU/CPU core with known FLOP/s.  

## 2️⃣ Approach  
1. **Count operations per layer** – for a transformer: self‑attention (~3 × H²) + feed‑forward (≈4 × H²).  
2. **Total ops ≈ L × (7 × H²)**.  
3. **Add token‑length factor** if attention is scaled by *T* (≈L × H² × T).  
4. **Convert to time**:  
   \[
   \text{Latency} = \frac{\text{Total ops}}{\text{FLOP/s of target HW}}
   \]  

## 3️⃣ Depth  
- *Ops per token* ≈ L × (7 H²) + L × (H T).  
- For BERT‑base (L=12, H=768), ops ≈ 12 × (7 · 768²) ≈ 4.9 B FLOPs per inference.  
- On a 100 GFLOP/s GPU: latency ≈ 49 ms.  

**Complexity:** O(L H² + L H T).  
Trade‑offs: ignoring memory bandwidth, kernel launch overhead, and parallelism; gives ballpark.

## 4️⃣ Edge Cases  
- **Batching:** multiple requests amortize kernel launches, reducing per‑request latency.  
- **Dynamic padding / pruning** reduces *T*.  
- **Hardware accelerators (TPU)** have higher FLOP/s but also different memory constraints.  

Test by comparing estimate against profiler (e.g., nvprof) on a few inputs.

## 5️⃣ Optimize & Communicate  
- Highlight that this linear model is quick, suitable for early design decisions.  
- Mention refinement steps: add latency per kernel launch (~0.5 ms), factor in GPU memory copy time.  
- Convey confidence interval (±10%) and suggest validating with micro‑benchmarks before deployment.  

This structured answer demonstrates clear problem framing, a logical estimation pipeline, depth of technical insight, awareness of edge cases, and communication of trade‑offs—all key signals for FAANG interview success.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
