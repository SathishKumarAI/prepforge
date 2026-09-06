---
qid: vq_b907ab4b40__faang__local
question: WHAT ARE THE DIFFERENT NORMAL FORMS IN SQL?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 581
total_tokens: 815
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:30:14-05:00'
sources: []
---

**Clarify**  
The question asks for the *different normal forms* used in relational database design. I’ll explain each form, why it matters, and give a quick example. (Assume we’re talking about the classic 1NF–5NF; BCNF is often treated as a variant of 2NF.)

---

### Approach  
1. List normal forms from 1NF to 5NF.  
2. Define each with a concise rule.  
3. Provide a tiny schema snippet that violates or satisfies the form.  
4. Note when higher‑level forms imply lower ones.

---

### Depth  

| NF | Rule | Example |
|----|------|---------|
| **1NF** | Every attribute is atomic; no repeating groups. | `OrderLines(order_id, product, qty)` – fine. |
| **2NF** | 1NF + every non‑key attribute fully functionally dependent on the *entire* primary key. | If PK=(order_id, line_no) and `customer_name` depends only on `order_id`, it violates 2NF. |
| **3NF** | 2NF + no transitive dependencies (non‑key → non‑key). | `employee(emp_id, dept_id, dept_location)` – `dept_location` transitively depends on `emp_id`. |
| **BCNF** | For every functional dependency X→Y, X is a superkey. | Same as 3NF but stricter; a many‑to‑many relation like `StudentCourse(student_id, course_id, instructor)` may violate BCNF if `instructor` depends only on `course_id`. |
| **4NF** | No multi‑valued dependencies: a table cannot contain two independent sets of values. | `Product(id, color, size)` where colors and sizes are independent; split into two tables. |
| **5NF** | Every join dependency is implied by candidate keys (join‑dependency preservation). | A fact table with three attributes that can be decomposed into three pairwise relations without loss. |

*Note:* 4NF implies 3NF, and 5NF implies 4NF.

---

### Edge Cases  
- Nullable columns don’t affect normality but can mask violations.  
- Composite keys vs. surrogate keys change dependency checks.  
- Some designers skip BCNF for performance; be ready to justify trade‑offs.

---

### Optimize & Communicate  
Explain that higher normal forms reduce redundancy and update anomalies but may increase joins, affecting performance. Emphasize the balance between *data integrity* (normalization) and *query efficiency* (denormalization). This structured walk‑through shows clear reasoning and aligns with FAANG interview expectations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
