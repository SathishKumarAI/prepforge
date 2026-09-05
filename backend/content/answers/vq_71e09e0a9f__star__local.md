---
qid: vq_71e09e0a9f__star__local
question: If two groups are not linked in the data model editor, what is the hierarchy
  between them ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 328
total_tokens: 573
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:04:18-05:00'
sources: []
---

**Situation**  
I was revamping the data model for our customer‑analytics platform. The ER diagram had dozens of entity groups—Customers, Orders, Products—but two new groups, *Campaigns* and *Promotions*, were added from separate teams without any explicit link.

**Task**  
My job was to define a clear hierarchy so that downstream reports could reference both groups consistently, avoiding ambiguous joins or orphaned data in the warehouse.

**Action**  
I opened the Data Model Editor, inspected the graph, and noted that *Campaigns* and *Promotions* had no foreign‑key relationship. In DSA terminology, when two groups are unlinked, they sit at the same level of the hierarchy—essentially siblings under the root namespace. I added a placeholder “Parent” node in the diagram to document this, then created a new associative entity *CampaignPromotion* with composite keys linking each group where necessary for reporting. This kept the original sibling relationship clear while enabling controlled joins.

**Result**  
The updated model eliminated 15% of ambiguous query errors reported by BI users and cut report generation time from 12 minutes to 8 minutes. I also learned that explicitly documenting sibling hierarchy in the editor prevents future confusion when teams add new entities.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
