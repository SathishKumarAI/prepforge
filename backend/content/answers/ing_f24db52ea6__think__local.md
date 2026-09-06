---
qid: ing_f24db52ea6__think__local
question: 'Explain: 10.8.1. Greedy Search ¶ — 10.8. Beam Search \u2014 Dive into Deep
  Learning 1.0.3 documentation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 214
output_tokens: 495
total_tokens: 709
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T17:00:48-05:00'
sources: []
---

**Meta‑Thinking Guide for Explaining “10.8.1 Greedy Search & 10.8 Beam Search”**

1. **Clarify the goal & context**  
   - Assume the reader knows basic NLP decoding but not the specifics of the *Dive into Deep Learning* book.  
   - State that we’ll compare two decoding strategies used in sequence‑to‑sequence models.

2. **Choose a mental model**  
   - Think of decoding as traversing a tree: each node is a partial hypothesis, edges are next‑token predictions with probabilities.  
   - Greedy = keep only the single best path; Beam = keep *k* best paths at every step.

3. **Step‑by‑step reasoning**  
   - **Greedy Search**:  
     1. Start from start token.  
     2. At each time step, pick the token with highest conditional probability.  
     3. Append it and repeat until end token or max length.  
     4. Mention its simplicity & speed but risk of sub‑optimal global sequence.  
   - **Beam Search**:  
     1. Maintain a beam (list) of *k* partial sequences.  
     2. For each partial, generate all possible next tokens and compute cumulative scores (log probs).  
     3. Keep top *k* combined sequences, discarding the rest.  
     4. Iterate until termination condition.  
     5. Note trade‑off: larger *k* → better coverage but higher compute.

4. **Common traps to avoid**  
   - Don’t conflate “beam width” with “search depth”; it limits breadth, not depth.  
   - Avoid assuming greedy always equals the highest‑probability sequence—global optimum may differ.  
   - Remember that beam search can still miss the best answer if *k* is too small.

5. **Sanity‑check & communicate**  
   - Verify that each step logically follows the previous and that probabilities are handled correctly (log‑space for numerical stability).  
   - Explain in plain language, using a simple example sentence or diagram if possible, to illustrate how multiple hypotheses evolve in beam search versus a single path in greedy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
