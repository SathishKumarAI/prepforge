---
qid: ing_f24db52ea6__faang__local
question: 'Explain: 10.8.1. Greedy Search ¶ — 10.8. Beam Search \u2014 Dive into Deep
  Learning 1.0.3 documentation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 258
output_tokens: 564
total_tokens: 822
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:02:52-05:00'
sources: []
---

**Clarify**  
You’re asking for a concise explanation of the *Greedy* and *Beam* search algorithms as presented in section 10.8 of the “Dive into Deep Learning” book (v1.0.3). I’ll assume you want: (a) what each algorithm does, (b) how they differ, and (c) why one might choose one over the other.

**Approach**  
I’ll first define greedy search, then beam search, highlight their operational differences, show a short pseudocode snippet, discuss time/space trade‑offs, and finish with typical use cases in NLP or seq2seq models.

**Depth**  

| Algorithm | Idea | Procedure (pseudo) |
|-----------|------|--------------------|
| **Greedy Search** | Pick the most probable next token at every step. | `for t in 1..T: y_t = argmax P(y_t | y_{<t})` |
| **Beam Search** | Keep *k* best partial sequences (beam width). | `initialize beam=[[]]`<br>`for each time step:`<br>`expand all beams by all possible tokens`<br>`rank candidates by cumulative log‑probability`<br>`retain top k` |

- **Complexity**: Greedy is *O(T·V)* (V vocab size). Beam is *O(k·T·V)*.  
- **Memory**: Greedy stores one sequence; beam stores *k* sequences.  
- **Quality**: Greedy often yields sub‑optimal outputs because it commits early. Beam mitigates this by exploring multiple hypotheses, at the cost of extra compute.

**Edge Cases**  
- Very small beam (k=1) reduces to greedy.  
- Large k can cause memory blowup; setting a reasonable upper bound is critical.  
- If the vocabulary is huge, expanding all tokens per beam step becomes infeasible—prune with top‑N or use *top‑p* sampling.

**Optimize & Communicate**  
In practice I’d start with a modest beam (e.g., 5–10) and monitor BLEU/ROUGE scores. If latency matters, I’d fall back to greedy or a hybrid: greedy until a special token then beam for the rest. I would also mention that modern transformers often use *sampling* + *temperature* instead of strict beam search for better diversity.

---  
**TL;DR:** Greedy picks the single best next word; Beam keeps multiple candidates (beam width k) to improve quality at linear cost in k. Use greedy for speed, beam when accuracy matters.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
