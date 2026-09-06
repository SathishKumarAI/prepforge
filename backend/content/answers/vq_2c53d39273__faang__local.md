---
qid: vq_2c53d39273__faang__local
question: Q2 .How does Generative AI work?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 503
total_tokens: 735
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:03:47-05:00'
sources: []
---

**Q2 – How does Generative AI work?**

---

### **Clarify**
We’re asked to explain the core mechanics of generative models (e.g., GPT, DALL‑E).  
Assumptions: audience knows basic ML terminology; we can mention neural nets, training data, inference.

---

### **Approach**
1. *Data ingestion* → massive corpora or multimodal datasets.  
2. *Model architecture* → transformer encoder‑decoder or diffusion pipelines.  
3. *Training objective* → next‑token prediction (autoregressive) or denoising (diffusion).  
4. *Inference* → sampling strategies (greedy, beam, top‑k/top‑p).  

---

### **Depth**
- **Transformers**: self‑attention computes pairwise token interactions; positional encodings inject order.  
- **Training loss**: cross‑entropy over vocabulary; gradients backpropagate through millions of parameters.  
- **Scaling laws**: larger models + more data → better generalization (law of diminishing returns).  
- **Diffusion models**: start from noise, iteratively denoise via learned score functions to generate images/text.

Complexity: Training is O(N·L²) per layer (N = tokens, L = seq length); inference can be reduced with caching or sparse attention. Trade‑offs involve compute vs. fidelity—larger context windows improve coherence but increase latency.

---

### **Edge Cases**
- *Out‑of‑distribution inputs* → hallucinations or nonsensical outputs.  
- *Bias & toxicity* in training data propagate to generation.  
- *Long‑term consistency*: maintaining facts across multi‑turn dialogues is hard.

Testing: evaluate perplexity, BLEU/ROUGE for text; FID for images; human A/B tests for coherence.

---

### **Optimize & Communicate**
- Use mixed‑precision and distributed training to cut GPU time.  
- Apply knowledge distillation or pruning for deployment on edge devices.  
- Explain these trade‑offs clearly: “We prioritize latency in mobile apps, so we’ll prune the model but accept a 5 % drop in perplexity.”

By structuring the answer—clarify, approach, depth, edge cases, optimization—we demonstrate clear reasoning, technical depth, and an eye for practical constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
