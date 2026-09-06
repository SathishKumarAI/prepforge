---
qid: ing_49aec18900__fp__local
question: 'Explain: Q96: Indirect prompt injection (IPI) attacks rose 32% from Nov
  2025 to Feb 2026 per Google. Your RAG agent reads web pages and documents from untrusted
  sources. Design a layered defense.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 208
output_tokens: 540
total_tokens: 748
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:42:00-05:00'
sources: []
---

**Layered Defense for an Untrusted‑Source RAG Agent**

1. **Input Sanitization & Source Vetting (First Line)**  
   *Why?* IPI exploits the agent’s ability to embed user prompts into downstream queries. By enforcing a whitelist of trusted domains and rejecting or flagging URLs with known injection vectors (e.g., query parameters, JavaScript payloads), we reduce the surface where malicious prompt fragments can be injected.  
   *Insight:* Treat the URL itself as a *prompt token*; any deviation from canonical form should be treated as an implicit user directive.

2. **Prompt‑Embedding Isolation (Middle Layer)**  
   *Why?* The agent concatenates retrieved text with the user query before sending to the LLM. A simple delimiter and length‑cap prevent arbitrary code injection. Moreover, run a lightweight semantic analyzer that detects prompt‑style language (“Please respond as …”) within the retrieved text; if detected, replace it with a neutral placeholder or drop the fragment entirely.  
   *Insight:* Prompt signatures can be identified via n‑gram models trained on known injection patterns; they are often short and highly repetitive.

3. **LLM Output Guardrails (Final Layer)**  
   *Why?* Even after sanitization, an LLM may still hallucinate or echo hidden prompts. Post‑generation filtering using a *prompt‑consistency score*—the cosine similarity between the user query and the response—helps flag anomalous replies that deviate from the intended intent. Responses below a threshold are rerouted to a safe completion routine (e.g., “I’m sorry, I can’t comply with that”).  
   *Insight:* The similarity metric also serves as an implicit audit trail: each low‑score instance logs the source text that triggered it, enabling forensic analysis.

**Why It Works:**  
- **Optimization:** Each layer trades off precision for safety; together they form a convex risk minimizer.  
- **Information Theory:** By constraining entropy in prompt construction (whitelisting and tokenization), we reduce the agent’s effective hypothesis space.  
- **Probability:** The layered Bayesian update—prior from source trust, likelihood from prompt detection, posterior from output consistency—produces a calibrated confidence score for safe responses.

**Non‑Obvious Takeaway:**  
The *source URL* can be leveraged as an implicit prompt control signal; normalizing it (canonicalization) not only blocks injection but also provides a lightweight metadata channel to enforce policy without additional LLM calls.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
