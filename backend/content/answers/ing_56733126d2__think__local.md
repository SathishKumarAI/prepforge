---
qid: ing_56733126d2__think__local
question: 'Explain: Create and manage ILM policies — Index lifecycle management (ILM)
  in Elasticsearch | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 200
output_tokens: 549
total_tokens: 749
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T06:42:41-05:00'
sources: []
---

**1️⃣ Clarify the goal & assumptions**  
   - *What does “create and manage ILM policies” mean?*  
     Assume we’re working with a recent Elastic Stack (≥7.x) where Index Lifecycle Management is a built‑in feature, not an external plugin.  
   - *Who is the audience?*  
     Developers or ops engineers who already have indices but need to automate rollover/retention.

**2️⃣ Adopt the ILM mental model**  
   - Think of an index as a “state machine” that moves through **phases**: hot → warm → cold → delete.  
   - Each phase can trigger **actions** (rollover, shrink, freeze, delete).  
   - Policies are JSON objects stored in Elasticsearch; they’re applied via the `_ilm` API or via index templates.

**3️⃣ Step‑by‑step reasoning**  
   1. **Define requirements** – e.g., keep hot data for 30 days, then move to warm, shrink after 90 days, delete after 365 days.  
   2. **Write the policy JSON** – use the `PUT _ilm/policy/<name>` endpoint; include phase definitions and actions with conditions (`max_age`, `max_size`).  
   3. **Create an index template** that attaches the policy to new indices (e.g., by name pattern).  
   4. **Apply to existing indices** – either re‑apply a template or use `PUT _ilm/explain/<index>` and then `PUT _ilm/policy` via the API.  
   5. **Monitor** – check `_ilm/explain`, `_ilm/status`, and logs; adjust thresholds if needed.

**4️⃣ Common pitfalls to avoid**  
   - Forgetting that rollover requires a write alias with `is_write_index:true`.  
   - Mixing up `max_age` vs. `max_size`; both are independent conditions.  
   - Not handling the “delete” phase properly—indices will be permanently removed.  
   - Assuming policies apply retroactively; you must re‑apply or use templates.

**5️⃣ Sanity check & communicate**  
   - Verify policy via `GET _ilm/policy/<name>` and explain its state machine to a colleague.  
   - Run a dry‑run: create a test index, let it hit each phase, and confirm actions fire.  
   - Document the rationale (why 30 days hot?) so future maintainers understand trade‑offs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
