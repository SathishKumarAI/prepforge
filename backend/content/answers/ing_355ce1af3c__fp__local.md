---
qid: ing_355ce1af3c__fp__local
question: Two good clinicians write different notes for the same visit. So how do
  you evaluate note quality at all?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 504
total_tokens: 684
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:57:59-05:00'
sources: []
---

### Why “quality” is a *relative* concept in clinical documentation  

The core problem clinicians face when writing notes is **encoding a complex, time‑bound interaction into a finite, searchable artifact**. The artifact must satisfy three constraints simultaneously:

1. **Completeness** – capture all clinically relevant information (history, findings, plan).  
2. **Efficiency** – be concise enough to read and write quickly in a busy clinic.  
3. **Reusability** – serve downstream purposes: billing, quality metrics, AI training, legal audit.

Because these goals conflict—adding detail increases completeness but hurts efficiency—the “best” note depends on *who* will use it next. A clinician writing for their own future reference may prioritize nuance; a coder may value billing codes; an AI system needs structured data. Thus, any metric that claims to be objective must encode the *purpose* of the note.

### Grounding evaluation in information theory  

Treat a note as a message \(M\) produced from source data \(S\) (the encounter). The **information content** is \(H(M|S)\). An ideal note achieves minimal distortion while preserving all clinically relevant entropy. Practically, we can approximate this by:

- **Redundancy score**: proportion of repeated or irrelevant text.  
- **Coverage index**: fraction of key clinical elements (e.g., chief complaint, assessment, plan) present.  
- **Semantic alignment**: similarity between note embeddings and a gold‑standard ontology.

These metrics are mathematically grounded in Shannon entropy yet map directly to the clinician’s constraints above.

### A non‑obvious insight: *audience‑driven noise filtering*  

Most quality frameworks treat all deviations from a template as errors. However, clinicians intentionally “prune” information that their specific audience will ignore (e.g., a senior specialist might skip basic vitals). By modeling the **audience distribution** \(P(A)\) and weighting each note component by its expected utility to that audience, we can allow purposeful omissions without penalizing quality. This shifts evaluation from a one‑size‑fits‑all rubric to an adaptive, probabilistic system that mirrors real clinical communication.

In short, note quality must be defined relative to downstream use; it is best measured through information‑theoretic proxies of completeness and relevance, with a flexible lens that acknowledges intentional noise reduction tailored to the audience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
