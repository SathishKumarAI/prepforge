---
qid: ing_49aec18900__think__local
question: 'Explain: Q96: Indirect prompt injection (IPI) attacks rose 32% from Nov
  2025 to Feb 2026 per Google. Your RAG agent reads web pages and documents from untrusted
  sources. Design a layered defense.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 631
total_tokens: 858
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:17:22-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**

- *What* is an IPI attack?  
  A malicious prompt that is hidden in content the RAG agent ingests and later triggers harmful behavior when the model processes it.  
- *Scope*: The agent pulls from arbitrary web pages/documents (untrusted).  
- *Goal*: Build a layered defense that mitigates the 32 % rise reported by Google, without crippling utility.

Assume: we have control over ingestion pipeline, can add filters, and can monitor downstream outputs.  

**2️⃣ Mental model / framework**

Use the classic **defense‑in‑depth** approach:  
1. *Input sanitization* (pre‑processing).  
2. *Content vetting* (source & reputation checks).  
3. *Model‑side safeguards* (prompt rewriting, safe completion filters).  
4. *Post‑hoc monitoring* (anomaly detection on outputs).  

Map each layer to specific tools: regex/ML for hidden tokens, blacklists/whitelists, prompt injection detectors, and LLM safety classifiers.

**3️⃣ Step‑by‑step reasoning**

1. **Ingestion gate** – run all raw text through a *prompt‑injection scanner* (e.g., detect “<script>”, unusual control characters).  
2. **Source vetting** – maintain a reputation database; flag domains with high IPI incidence, or use third‑party threat intel APIs.  
3. **Pre‑prompt rewrite** – strip or neutralize suspicious tokens before concatenating into the prompt.  
4. **Model safeguards** – wrap the LLM call in a *policy engine* that blocks or sanitizes any output matching known injection patterns.  
5. **Post‑processing monitor** – apply a lightweight safety classifier to every completion; if flagged, log and quarantine.  

Iterate thresholds based on false‑positive rates measured in a test set.

**4️⃣ Common traps to avoid**

- Over‑filtering: removing benign content that contains similar syntax (e.g., legitimate “<” signs).  
- Single‑point failure: relying only on source reputation; attackers can spoof domains.  
- Ignoring new injection vectors (e.g., Unicode homographs, CSS comments).  
- Neglecting performance impact—heavy scans may slow real‑time queries.

**5️⃣ Sanity‑check & communicate**

- Run a *red‑team* test: inject crafted prompts from untrusted sources and verify all layers block them.  
- Benchmark latency before/after each layer to ensure SLA compliance.  
- Document the defense stack in a diagram, labeling each filter’s purpose and failure mode.  
- Communicate to stakeholders that while no system is 100 % foolproof, layered defenses dramatically reduce risk (e.g., expected drop from 32 % to <5 % IPI incidents).  

This structured process can be reused for any content‑injection threat in LLM pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
