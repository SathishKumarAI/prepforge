---
qid: ing_7c2023a5d4__fp__local
question: 'A generated note contains a medication the patient never mentioned. Treat
  that as a safety incident: how do you detect it before a clinician sees it?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 671
total_tokens: 859
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:29:31-05:00'
sources: []
---

**Why the problem is fundamentally one of *information integrity*.**  
When an AI system generates a clinical note, it concatenates tokens that maximise a language‑model objective: predict the next token given past context. That objective ignores whether the output faithfully represents what was actually observed or recorded. The safety hazard arises when a medication that never appeared in any source text is hallucinated into the final note. Detecting this before clinician review requires ensuring *consistency* between the model’s internal representation of the patient and the external evidence it draws upon.

### Derivation from first principles

1. **Evidence‑based generation**  
   Let \(E\) be the set of all clinical documents (orders, labs, vitals). The note must satisfy \(N \subseteq E\); any token not supported by an entry in \(E\) is a hallucination.

2. **Uncertainty quantification**  
   For each generated token \(t_i\), compute its *posterior* probability conditioned on \(E\):  
   \[
   P(t_i|E)=\frac{\exp(\text{score}(t_i,E))}{Z}
   \]
   Tokens with low \(P(t_i|E)\) indicate that the model is relying more on internal priors than on evidence.

3. **Thresholding & rule‑based filtering**  
   Define a medication vocabulary \(M\). For any \(m\in M\), if \(m\notin E_{\text{med}}\) (the set of medications actually prescribed) and \(P(m|E)\) falls below \(\tau\), flag as *potential hallucination*.

### Connection to deeper principles

- **Optimization**: The language model’s loss is minimized over next‑token prediction; we add a *consistency regularizer* that penalises tokens unsupported by evidence, turning the objective into:
  \[
  \mathcal{L} = \mathcal{L}_{LM} + \lambda\,\mathbf{1}\{t_i\notin E\}
  \]
- **Information theory**: We enforce *information bottleneck*—the note should carry no more information about the patient than is present in \(E\).

### Non‑obvious insight

A hallucinated medication often appears *adjacent to an actual drug name*. By training a lightweight *sequence‑labeler* that learns these positional cues, we can flag suspicious tokens with high recall while keeping false positives low. This leverages the fact that clinicians’ writing style tends to cluster related terms together; the model’s hallucination breaks this local coherence.

**Implementation sketch**

```python
for token in generated_note:
    if token in medication_vocab:
        evidence = any(token in doc for doc in E_med)
        prob = compute_posterior(token, E)
        if not evidence and prob < tau:
            flag_as_hallucination(token)
```

By grounding generation in the patient’s own records and monitoring low‑confidence tokens, we can intercept medication hallucinations before they reach the clinician.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
