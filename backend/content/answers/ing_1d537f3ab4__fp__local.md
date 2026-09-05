---
qid: ing_1d537f3ab4__fp__local
question: Clinicians will not sign what they cannot verify. How would you build span-level
  provenance from every line of the note back to the conversation?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 187
output_tokens: 495
total_tokens: 682
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:08:34-05:00'
sources: []
---

**Why span‑level provenance matters**

Clinicians must *prove* that every assertion in a note comes from an observed fact or a patient statement; otherwise the note is “unverified” and can’t be signed off. The problem is: how do we trace each token back to its source conversation?  
The solution rests on **probabilistic alignment**—treating the conversation as a noisy channel that emits the written text. If we model the probability of generating any span in the note given any utterance, then the most likely utterance for that span is its provenance.

---

### 1. Encode the dialogue and the draft

* **Dialogue encoder**: a transformer (e.g., BERT‑based) produces contextual embeddings \(d_i\) for every token in every utterance.
* **Draft encoder**: another transformer produces embeddings \(n_j\) for each note token.

---

### 2. Compute a similarity matrix

For each pair \((i,j)\), compute the dot‑product or cosine similarity \(S_{ij}=d_i^\top n_j\).  
Normalize rows to obtain a *soft alignment* probability distribution over utterances for each note token:
\[
P(u_k|t_j)=\frac{\exp(S_{kj})}{\sum_{k'}\exp(S_{k'j})}.
\]

---

### 3. Collapse to spans

Run a **Viterbi‑style dynamic program** that prefers contiguous utterance segments and penalizes abrupt jumps (via a transition cost). The result is an assignment of every note span to the most probable utterance segment.

---

### 4. Certify with uncertainty

Output, for each span, both the assigned utterance and its posterior probability. Clinicians can then see *exactly* where the information originated and judge whether the confidence exceeds a signing threshold.

---

#### Non‑obvious insight
Treating the note as a **generated sequence** from the conversation lets us use *attention weights* as provenance scores. This sidesteps brittle rule‑based heuristics (e.g., exact string matching) and naturally handles paraphrase, omitted words, or reordered content—common in clinical dictation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
