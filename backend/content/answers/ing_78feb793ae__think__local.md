---
qid: ing_78feb793ae__think__local
question: How would you detect that a parser silently corrupted documents, at scale,
  without reading every page?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 197
output_tokens: 420
total_tokens: 617
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T09:00:57-05:00'
sources: []
---

**1. Clarify the problem & assumptions**  
- *What is “silent corruption” exactly?* Assume no error flags, only subtle data loss or change.  
- *Scale:* millions of documents; reading each page fully is infeasible.  
- *Goal:* flag suspect files with high confidence and minimal overhead.

**2. Mental model: statistical fingerprinting + incremental verification**  
Treat each document as a source of “signature statistics” (hashes, checksums, word‑frequency vectors). Use these fingerprints to spot deviations that indicate corruption.

**3. Step‑by‑step reasoning**  

1. **Build a reference model** – sample a representative set of uncorrupted documents; compute per‑file hashes and aggregate statistical profiles (e.g., term frequency–inverse document frequency, layout metrics).  
2. **Generate lightweight fingerprints for all docs** – one‑pass hash or Bloom filter; optionally embed in metadata if possible.  
3. **Compare fingerprints against the reference model** – use distance measures (Hamming, cosine) to detect outliers.  
4. **Prioritize suspect files** – rank by deviation score; only inspect top‑N with a deeper algorithm (full checksum, OCR comparison).  
5. **Iterate & update** – as new documents arrive, refine the reference model and adjust thresholds.

**4. Common traps to avoid**  

- *Assuming one hash is enough:* collisions or intentional tampering can bypass it.  
- *Over‑fitting the reference set:* if the sample isn’t diverse, many legitimate files will appear corrupt.  
- *Ignoring document format variance:* PDFs vs Word vs scanned images need different fingerprint strategies.

**5. Sanity‑check & communicate**  

- Verify a small random batch manually to confirm false‑positive/negative rates.  
- Explain that the system uses statistical “fingerprints” and outlier detection, not full page reads, thus keeping cost low while still catching subtle corruption.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
