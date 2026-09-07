---
qid: ing_ed336ef2d2__faang__local
question: What metadata would you attach to each chunk, and what does it buy you?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 556
total_tokens: 794
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:51:49-05:00'
sources: []
---

**Clarify**  
We’re designing a system that breaks large AI‑model inputs into “chunks” (e.g., text paragraphs or token blocks). The question asks: *What metadata should we store with each chunk and how does it benefit downstream processing?*  
Assumptions to confirm:  
- Chunks are immutable once stored.  
- They will be queried by context, recency, or similarity.  
- We have a scalable storage layer (e.g., vector DB + key‑value store).  

**Approach**  
1. Identify use cases: retrieval, ranking, provenance, compliance.  
2. Enumerate metadata fields that enable those use cases.  
3. Map each field to its operational benefit and cost trade‑offs.  

**Depth**  
| Metadata | Purpose | Benefit | Complexity / Trade‑off |
|----------|---------|---------|------------------------|
| **Chunk ID (UUID)** | Unique key | O(1) lookup, deduplication | Minimal overhead |
| **Source Document ID & URI** | Provenance | Trace back to original file for audits | Small storage cost |
| **Start/End Token Indices** | Re‑assembly | Enables reconstruction of full text | Lightweight |
| **Embedding Vector (float32)** | Semantic search | Cosine similarity queries, clustering | Storage + compute cost (≈ 768 bytes per chunk) |
| **Timestamp / Version** | Recency & immutability | Time‑based ranking, rollback | Small overhead |
| **Language Code** | Language‑specific models | Route to correct tokenizer/LLM | Minimal |
| **Content Type Flags** (text, image, code) | Model selection | Different LLMs or prompt templates | Simple bitmask |
| **Permission / Sensitivity Tags** | Compliance | Access control, redaction | Adds security logic |

Each field “buys” a specific capability: e.g., embeddings enable semantic retrieval; timestamps allow freshness scoring; provenance tags satisfy regulatory audits.  

**Edge Cases**  
- **Duplicate chunks**: rely on chunk hash to detect.  
- **Large files**: ensure start/end indices don’t overflow.  
- **Sensitive data**: enforce encryption at rest for all metadata fields.  

**Optimize & Communicate**  
Start with essential IDs and embeddings; defer less critical tags until a production need surfaces. Communicate this incremental design in interviews by emphasizing trade‑offs between storage cost and feature richness, showcasing a clear mapping from business goals (e.g., compliance) to technical choices. This demonstrates structured problem solving, depth, and communication—key FAANG interview signals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
