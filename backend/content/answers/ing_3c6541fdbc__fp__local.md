---
qid: ing_3c6541fdbc__fp__local
question: Walk me through writing a finished note back into Epic. What goes wrong?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 500
total_tokens: 674
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:12:53-05:00'
sources: []
---

**Writing a finished note back into Epic – why the “normal” flow breaks**

1. **The core problem**  
   Epic stores clinical notes in a *document* object that is part of a larger *chart*. When you finish writing, the workflow must atomically commit the text, attach metadata (author, timestamp, section), and invalidate any cached views. The underlying data model is relational but presented as a tree; each node has a unique GUID.

2. **Why it must work this way**  
   • *Atomicity*: A partially written note could corrupt the chart if a crash occurs mid‑write.  
   • *Concurrency*: Multiple providers may edit the same encounter concurrently, so locking or versioning is required.  
   • *Auditability*: Every change must be traceable for compliance (HIPAA, CMS).

3. **Typical pitfalls**  
   - **Skipping the “Save Draft” step**: If you bypass the draft stage and write directly to the live record, Epic’s audit trail will flag an *unapproved edit*.  
   - **Forgetting to update the “Last Modified” timestamp**: This causes stale cache data and can trigger a UI refresh that overwrites your changes.  
   - **Mis‑scoping the section GUID**: Writing into the wrong section (e.g., “Progress Notes” vs. “History & Physical”) leads to orphaned entries that never appear in reports.

4. **Deeper principle – optimistic concurrency control**  
   Epic uses a *rowversion* column to detect concurrent edits. Your note write must read this value, include it in the update, and retry if a conflict occurs. Ignoring this step results in silent overwrites—a subtle bug that manifests only under high load.

5. **Non‑obvious insight**  
   The “finished” flag is not merely cosmetic; it toggles Epic’s *indexing engine*. If you set it too early (before the note is fully validated), the search index will exclude the text, making it invisible in the patient’s full history until a manual re‑index occurs.

**Bottom line:** Always go through Draft → Validate → Commit with version check, then toggle “Finished.” Miss any step and you risk data loss or audit failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
