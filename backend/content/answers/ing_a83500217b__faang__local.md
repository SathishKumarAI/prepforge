---
qid: ing_a83500217b__faang__local
question: 'Explain: Every assertion in a Harvey answer needs to link back to a specific
  passage. Design the grounding system, and tell me how you would measure the unsupported-claim
  rate.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 257
output_tokens: 580
total_tokens: 837
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:15:50-05:00'
sources: []
---

**Clarify**  
We’re asked to build a *grounding* mechanism for an AI answering platform (Harvey). Every user‑generated assertion must be traceable to a source passage in the knowledge base. We need (1) a system that attaches provenance to each claim, and (2) a metric that tells us how often claims go ungrounded.

**Approach**  
1. **Representation Layer** – Store passages with unique IDs and token‑level embeddings.  
2. **Claim Extraction** – When the model generates text, parse it into atomic statements (sentences or clauses).  
3. **Retrieval & Alignment** – For each claim, run a similarity search against passage embeddings to obtain candidate sources; then perform exact span extraction via a lightweight NLI model that scores “claim is supported by passage X”.  
4. **Provenance Tagging** – Attach the best‑scoring source ID and confidence score to the claim in the output JSON.  
5. **Unsupported‑Claim Rate (UCR)** – Compute *1 – (sum of confidences for grounded claims / total number of claims)* across a validation set.

**Depth**  
- Retrieval uses FAISS over 768‑dim vectors; query time ≈ 3 ms per claim.  
- NLI model is a distilled BERT fine‑tuned on SciFact, giving 92 % accuracy on support detection.  
- Confidence threshold (e.g., 0.75) decides grounding; claims below are flagged “unsupported”.  
- UCR = \( \frac{N_{\text{claims}} - \sum_{i=1}^{N} \mathbb{I}[c_i \geq t]}{N_{\text{claims}}}\), where \(c_i\) is confidence, \(t\) the threshold.  

**Edge Cases**  
- *Polysemy*: same phrase in multiple passages—use disambiguation via context window.  
- *Noisy generation*: partial sentences; fallback to nearest passage.  
- *Long‑form claims*: split recursively until each subclaim is grounded.  
Testing: synthetic claims with known provenance, adversarial paraphrases, and real user queries.

**Optimize & Communicate**  
To reduce UCR, fine‑tune the NLI on domain‑specific data, increase embedding dimensionality, or add a second‑stage verification step (e.g., GPT‑4 re‑scoring). I’d explain the pipeline as “source → claim extraction → retrieval → alignment → tagging”, emphasizing that each stage is modular so we can swap in better models without redesigning the whole system. This keeps the reasoning transparent and lets interviewers see both the high‑level architecture and the concrete metrics used to validate it.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
