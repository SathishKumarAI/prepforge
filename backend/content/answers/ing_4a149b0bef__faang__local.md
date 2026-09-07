---
qid: ing_4a149b0bef__faang__local
question: 'Explain: 10.8.5. Exercises ¶ — 10.8. Beam Search \u2014 Dive into Deep
  Learning 1.0.3 documentation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 256
output_tokens: 497
total_tokens: 753
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:36:53-05:00'
sources: []
---

**Clarify**  
The question asks for a concise explanation of the *Beam Search* exercise (section 10.8.5) from the “Dive into Deep Learning 1.0.3” book. I’ll assume the reader knows basic sequence‑generation models (RNN/LSTM/Transformer) and wants to understand how beam search differs from greedy decoding, its implementation details, and practical considerations.

**Approach**  
1. Summarize what beam search does in one sentence.  
2. Outline its algorithmic steps (keeping top‑k hypotheses per time step).  
3. Highlight key parameters (`beam width`, `length penalty`).  
4. Discuss complexity and trade‑offs versus greedy decoding.  
5. Mention typical edge cases (ties, very short/long sequences) and how to handle them.

**Depth**  
Beam search keeps a priority queue of the *k* most probable partial outputs at each decoding step. For every hypothesis in the beam, it expands all possible next tokens, scores them with the model’s log‑probabilities, then selects the top *k* overall. The process repeats until an end‑token is generated for all beams or a max‑length is reached.  
- **Beam width (k):** larger k → higher recall but O(k·V) time per step (V = vocab size).  
- **Length penalty:** often `score / len^α` to avoid bias toward short sequences.  
- **Termination:** if all beams hit `<eos>`, stop early; otherwise continue until max length.

**Edge cases**  
- *Tie scores:* break by token ID or random shuffle.  
- *Very small vocab:* beam search may collapse to greedy; choose k = 1.  
- *Memory limits:* use priority queues and pruning; batch decoding can reduce overhead.

**Optimize & communicate**  
Explain that beam search is a compromise between exhaustive search (NP‑hard) and greedy (fast but suboptimal). In practice, `k=5–10` works well for translation, while larger models may need dynamic beams. Communicate this by showing pseudocode, citing the book’s example, and noting that the implementation in PyTorch/TensorFlow mirrors the textbook logic. This structured walk‑through satisfies FAANG interviewers’ emphasis on clarity, depth, and practical trade‑offs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
