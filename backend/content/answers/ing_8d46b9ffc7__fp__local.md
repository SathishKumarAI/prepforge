---
qid: ing_8d46b9ffc7__fp__local
question: 'Q: What is the "Indirect Prompt Injection" risk in RAG systems?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 359
total_tokens: 534
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:05:22-05:00'
sources: []
---

**Indirect Prompt Injection in Retrieval‑Augmented Generation (RAG)**  

A RAG system learns a *policy* that maps a user query \(q\) and a retrieved context set \(\{c_i\}\) to a response \(r\). The policy is trained on pairs \((q,\{c_i\}, r)\), implicitly assuming the retrieved documents are “faithful” snippets of the source text. In practice, an attacker can *inject* a malicious document \(m\) into the retrieval pool (e.g., via a compromised index or by exploiting open‑source knowledge bases).  

When the system processes \(q\), it selects \(\{c_i\}\) that maximize similarity to \(q\); if \(m\) is highly similar, it will be included. The model then treats \(m\) as authoritative evidence and incorporates its content into \(r\). Thus, even though the prompt (the user’s query) never explicitly contains malicious text, the *indirect* presence of \(m\) steers generation toward the attacker’s agenda.  

This attack exploits a fundamental mismatch: **retrieval is an approximation**—it does not guarantee semantic veracity, only relevance. The policy, trained under the assumption of truthfulness, becomes brittle when faced with spurious evidence. A non‑obvious insight is that *any* downstream component that consumes retrieved text (not just the language model) inherits this vulnerability; sanitizing prompts alone is insufficient. Robust RAG systems must therefore incorporate **document credibility estimation** or **self‑consistent cross‑checking** to mitigate indirect prompt injection.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
