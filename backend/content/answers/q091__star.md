---
qid: q091
question: "What is database normalization and what problem does it solve?"
topic: "Data Analytics"
model: "Claude Code (authored)"
sources: []
---

**Situation** I took over a CRM database where customer address and company name were duplicated across every single order row. When a client changed their company name, we had thousands of rows to update, and inevitably some got missed, leaving contradictory records.

**Task** My job was to redesign the schema to eliminate these update anomalies and shrink the storage bloat.

**Action** I applied normalization. Normalization is the process of organizing data to reduce redundancy by splitting it into related tables governed by keys. I moved to third normal form: I pulled customer attributes into a customers table with a primary key, pulled products into their own table, and left orders holding only foreign keys plus order-specific facts like quantity and date. That way each fact lived in exactly one place, so a company name change was a single-row update. I verified there were no partial or transitive dependencies before finalizing.

**Result** Storage for the order data dropped by roughly 40%, and the update anomalies that had been corrupting reports disappeared entirely. What I learned is that normalization's real payoff is integrity: by storing each fact once, you make inconsistency structurally impossible rather than something you police manually.
