---
qid: ing_ab262d7108__fp__local
question: 'Explain: a single state that is the tip — Google Docs System design | Part
  1| Operational transformation | differentail synchronisation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 186
output_tokens: 443
total_tokens: 629
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:09:20-05:00'
sources: []
---

**Operational Transformation (OT) – “the tip” as the single source of truth**

The fundamental problem is *concurrent editing*: several users modify a shared document simultaneously over unreliable networks. We must preserve **consistency** (every replica ends up in the same state) and **intuitiveness** (operations feel local to each user).  

1. **Model the document as an ordered list of characters.**  
2. **Represent each edit as an *operation* O = ⟨pos, ins/del, text⟩.**  
3. **Maintain a linear history of operations at each replica.**  
4. **When a new operation arrives, transform it against all concurrent operations that have already been applied locally:**  
   \[
   O' = \operatorname{transform}(O,\;O_{\text{concurrent}})
   \]
   The transformation rule shifts the position (and possibly deletes text) so that applying \(O'\) after the concurrent operation yields the same final document as if the operations were executed in reverse order.  

5. **The “tip” is the most recent operation at a replica.**  
   All replicas agree on the tip because they apply the same transformation rules; thus, the tip becomes the *canonical* state for that replica. When two replicas merge, each sends only the operations newer than the other’s tip—no need to resend the entire document.

**Why it works**: OT guarantees **strong convergence** (all replicas converge to the same state) because the transformation rules are mathematically derived from the requirement that the composition of any two concurrent operations be *equivalent* regardless of order.  

**Non‑obvious insight**: The tip is not just a pointer; it encodes *causal history*. By comparing tips, replicas can detect precisely which operations they lack, enabling *differential synchronization*—transmitting only deltas rather than full documents. This reduces bandwidth and latency dramatically, especially for large collaborative files.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
