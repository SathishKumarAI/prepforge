---
qid: ing_87bb8ba082__faang__local
question: 'Explain: Design the PII-handling pipeline for an LLM feature that processes
  customer support transcripts.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 607
total_tokens: 849
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:59:43-05:00'
sources: []
---

**1️⃣ Clarify**  
We need a **PII‑handling pipeline** for an LLM that ingests customer‑support transcripts (text + metadata). The goal: remove or mask personally identifiable information before the data is stored or fed to the model, while preserving utility for downstream tasks (e.g., sentiment analysis, routing).  
Assumptions to confirm:  
- Transcripts are in plain text with optional JSON metadata.  
- PII categories include names, phone numbers, emails, SSNs, addresses, IPs, and any company‑specific tokens.  
- The system must comply with GDPR/CCPA and internal privacy policy.

**2️⃣ Approach**  
1. **Ingest & Chunking** – stream the transcript into fixed‑size chunks (≤ 4 kB) to fit LLM context limits.  
2. **Rule‑based Detection** – use regex/keyword lists for deterministic PII (e.g., email, SSN).  
3. **ML‑based NER** – fine‑tune a lightweight transformer (e.g., DistilBERT) on labeled support data to catch contextual PII (names, addresses).  
4. **Sanitization** – replace each detected token with a deterministic placeholder (`<NAME>`, `<EMAIL>`), preserving original span length for alignment.  
5. **Audit & Redaction Log** – record counts and types of redactions per transcript for compliance reporting.  
6. **Storage & Access Control** – store sanitized text in encrypted storage; keep an isolated “PII vault” only accessible to authorized auditors.  

**3️⃣ Depth**  
- Regex patterns run in O(n) over the chunk; NER inference is O(m·h) where m=chunk length, h=model size (~6M params).  
- Total latency ≈ 50–70 ms per 1 kB chunk on a GPU‑free edge device.  
- Trade‑off: rule‑based gives zero false positives but misses context; ML adds recall at the cost of occasional false positives—handled by post‑hoc human review for high‑risk fields.

**4️⃣ Edge Cases**  
- PII embedded in URLs or base64 strings → need custom regex.  
- Non‑English transcripts → multilingual NER model.  
- Extremely long documents → hierarchical chunking to avoid context loss.  
- Obfuscated names (e.g., “John Doe” split across lines) → line‑aware tokenization.

**5️⃣ Optimize & Communicate**  
Future improvements: train a domain‑specific tokenizer that preserves span integrity, integrate differential privacy noise for audit logs, and cache detection results per user to reduce re‑processing. I’ll present this flow in a diagram, walk through a sample transcript, and explain how each component satisfies compliance while keeping the LLM’s utility intact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
