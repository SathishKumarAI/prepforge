---
qid: ing_6701212742__faang__local
question: 'Explain: 10.8.3. Beam Search ¶ — 10.8. Beam Search \u2014 Dive into Deep
  Learning 1.0.3 documentation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 257
output_tokens: 492
total_tokens: 749
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:43:50-05:00'
sources: []
---

**Clarify**  
You’re asking for a concise explanation of the *Beam Search* section (10.8.3) from the *Dive into Deep Learning 1.0.3* docs. I’ll assume you want an overview of how beam search works in sequence‑generation models and why it’s preferred over greedy decoding.

**Approach**  
1. Define beam width & its role.  
2. Walk through a single decoding step.  
3. Show the pruning mechanism.  
4. Mention typical edge cases (ties, length penalties).  

**Depth**  
Beam search keeps the top‑`k` partial hypotheses at each time step (`k` = beam width).  
- **Initialization:** start with `<sos>` and score 0.  
- **Expansion:** for every hypothesis in the current beam, generate all possible next tokens, compute their log‑probabilities (often from a softmax output), and add to the hypothesis’ cumulative score.  
- **Pruning:** sort all expanded candidates by score and keep only the top `k`.  
- **Termination:** stop when every retained hypothesis ends with `<eos>` or reaches max length.  

This balances exploration vs. exploitation: unlike greedy decoding (k=1), beam search considers multiple paths, reducing the chance of early local optima while still being tractable.

**Edge Cases**  
- *Ties*: use a deterministic tie‑breaker (e.g., token index).  
- *Length bias*: apply length penalties or reward to avoid overly short outputs.  
- *Very large vocabularies*: limit expansion by top‑`n` tokens per hypothesis to keep complexity O(k·n).

**Optimize & Communicate**  
Beam search’s time complexity is O(`T·k²·V`) naïvely, but pruning to top‑`n` reduces it to O(`T·k·n`). In practice, `k=5–10` gives a good trade‑off. When explaining to interviewers, highlight that beam width is the key hyperparameter: larger beams improve quality at the cost of speed and memory. Conclude by noting that beam search is a general decoding strategy used in machine translation, speech recognition, and any seq2seq model where exhaustive search is infeasible.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
